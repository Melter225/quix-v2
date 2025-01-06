import next, { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();
const openai = new OpenAI();
const prisma = new PrismaClient();

async function generateErrors(questions: string): Promise<string[][]> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          'You are a helpful assistant in helping users learn more about their provided topics. When selecting errors, do not be harsh. If the user enters a prompt in a different language, ensure that you respond in that language. Aim to not sound like an AI or human response but rather, a 3rd person document. To do this, do not address the reader directly, do not use the imperative mood, do not use second person or first person, and do not include additional introductory and conclusive messages such as "Sure! Here are arrays for you:".',
      },
      {
        role: "user",
        content: `Generate 3 relevant and helpful arrays to help me understand my errors in answering these questions: ${questions} quickly. The user will likely know only some about the topic, so instead of aiming to quiz or criticize them, aim to teach them instead, and provide concise explanations for why a different answer is correct. Be very careful and precise when selecting errors and be sure to not define the arrays, just follow a similar format. The format for the first array, which contains the errors, should be as follows ["", error, error, "", error, "", etc.]. When an answer is correct, write "" in the place where the question would be, and if the answer is incorrect, write the question. The format for the second array, which contains the concise correct answers, should be as follows ["", correct answer, correct answer, "", correct answer, "", etc.]. When an answer is correct, write "" in the place where the correct answer would be, and if the answer is incorrect, write the correct answer or a possible correct answer. The format for the third array, which contains very concise explanations, should be as follows ["", explanation, explanation, "", explanation, "", etc.]. When an answer is correct, write "" in the place where an explanation would be, and if the answer is incorrect, write a concise explanation, so the user can understand their error in answering the question. NEVER include the symbol ||##||||##||||##|| in your correct answers or explanations, but you must use it to seperate arrays as is shown in the following example. Do not include additional text other than the arrays, so an example response would look like this: ["", question, question, "", question, "", etc.] ||##||||##||||##|| ["", correct answer, correct answer, "", correct answer, "", etc.] ||##||||##||||##|| ["", explanation, explanation, "", explanation, "", etc.]`,
      },
    ],
  });

  console.log("errors", response.choices[0].message?.content);

  const arrays =
    response.choices[0].message?.content?.split(" ||##||||##||||##|| ") ?? [];

  console.log(arrays);

  const errors = JSON.parse(arrays[0]);
  const answers = JSON.parse(arrays[1]);
  const explanations = JSON.parse(arrays[2]);
  return [errors, answers, explanations];
}

async function generateDocument(arrays: string[][]): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. For example, if the user enters "Espanol", then the entire query should be in Spanish. Aim to not sound like an AI or human response but rather, a 3rd person document. Do not include additional introductory and conclusive messages such as "Sure! Here is a document for you:".',
      },
      {
        role: "user",
        content: `Generate 1 relevant and helpful document to help me understand my errors in answering these questions: ${arrays[0]} quickly. These are my errors in answering the questions: ${arrays[1]}, these are the correct answers: ${arrays[2]}, and here the explanations: ${arrays[3]}. Even if you do not agree with the validity of an answer, the correct answer, or the explanation, do not change any field and still provide an explanation. While there are already errors, correct answers, and explanations provided, I would like you to expand in further detail to clarify any questions the user may have. The user will likely know only some about the topic, so instead of aiming to quiz or criticize them, aim to teach them instead, and provide thorough explanations for why a different answer is correct. To maintain a structure, focus on the number of errors made by the user and ensure that the document contains around 400 words (this word requirement is very important if there are 1+ errors). You should also provide an introduction, conclusion, and lengthy explanations for each error. If the user does not make any errors, you may ignore this message and return this response: No display.`,
      },
    ],
  });

  console.log("document 1", response.choices[0].message?.content);
  return response.choices[0].message?.content ?? "";
}

async function generateVideo(areas: string[]): Promise<string[]> {
  console.log("The videos will be generated for the following areas:", areas);

  const YOUTUBE_VIDEO_API = "https://www.googleapis.com/youtube/v3/search";
  const videoUrls = [];

  for (let i = 0; i < areas.length; i++) {
    if (i < 3) {
      console.log(i);
      const query = areas[i];
      const url = `${YOUTUBE_VIDEO_API}?type=video&part=snippet&key=${
        process.env.YOUTUBE_API_KEY
      }&maxResults=1&q=${encodeURIComponent(
        query
      )}&videoDuration=medium&videoEmbeddable=true&safeSearch=strict`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          videoUrls.push(videoUrl);
        } else {
          throw new Error("No videos found");
        }
      } catch (error) {
        console.error("Error fetching YouTube video:", error);
        throw new Error("Internal Server Error");
      }
    }
  }

  return videoUrls;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const { questions, quizName } = await req.json();
      console.log("questions", questions, "quizName", quizName);
      const arrays = await generateErrors(questions);
      const errors = arrays[0];
      const correctAnswers = arrays[1];
      const explanations = arrays[2];
      const document = await generateDocument([
        questions,
        errors,
        correctAnswers,
        explanations,
      ]);
      console.log("document 2", document);
      let areas = [""];
      let allQuestions: { question: string; isCorrect: boolean }[] = [];

      if (document != "No display" && document != "No display.") {
        // areas = extractErrors(document);
        areas = errors.filter((error) => error !== "");
        console.log(areas);

        const questionAnswerPairs = questions
          .split("Question: ")
          .filter((pair: string) => pair.trim() !== "")
          .map((pair: string) => {
            const [question, answer] = pair.split(" Answer: ");
            return { question: question.trim(), answer: answer.trim() };
          });

        allQuestions = questionAnswerPairs.map(
          (q: { question: string; answer: string }, i: number) => ({
            question: q.question,
            userAnswer: q.answer,
            isCorrect: !errors.some((error: string) =>
              error.includes(q.question)
            ),
            correctAnswer: correctAnswers[i],
            explanation: explanations[i],
          })
        );

        console.log(allQuestions);

        const video = await generateVideo(areas);
        console.log(video);

        const score = allQuestions.filter((result) => result.isCorrect).length;
        console.log(score);

        const quiz = await prisma.quiz.findUnique({
          where: {
            quiz_name: quizName,
          },
        });

        console.log(quizName, quiz);

        await prisma.quiz.update({
          where: {
            quiz_id: quiz?.quiz_id,
          },
          data: {
            taken: true,
            videos: {
              create: [
                { video: video[0] },
                { video: video[1] },
                { video: video[2] },
              ],
            },
          },
        });

        return NextResponse.json({
          document,
          video,
          allQuestions,
          score,
          status: 200,
        });
      } else {
        console.log("Do not show document, video, or score");
        return NextResponse.json({
          message: "No content to display",
          status: 204,
        });
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to generate document, video, or score: ${errorMessage}`,
        status: 500,
      });
    }
  } else {
    return NextResponse.json({
      message: `Method ${req.method} Not Allowed`,
      status: 405,
    });
  }
}
