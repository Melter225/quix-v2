import next, { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import dotenv from "dotenv";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();
const openai = new OpenAI();

async function notesQuiz(
  point: string,
  previousPoints?: string[]
): Promise<string> {
  let additionalQuery = "";
  if (previousPoints && previousPoints.length > 0) {
    additionalQuery = `Do not duplicate or generate questions similar to the previous questions: ${previousPoints?.join(
      ", "
    )}.`;
  }
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "system",
        content:
          'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display and do not include additional text. Aim to not sound like an AI or human response but rather, a 3rd person document. To do this, do not address the reader directly, do not use the imperative mood, do not use second person or first person, and do not include additional introductory and conclusive messages such as "Sure! Here is a document for you:".',
      },
      {
        role: "user",
        content: `Generate 1 relevant and helpful question that will thoroughly quiz the user on this topic: ${point} quickly. ${additionalQuery} The user's knowledge regarding the topic may be insufficient or incorrect, so do not necessarily provide extremely difficult questions while still ensuring that the questions are challenging. Do not provide additional messages such as 'Sure! Here's a question for you:'.`,
      },
    ],
  });

  return response.choices[0].message?.content ?? "";
}

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    try {
      const { points } = await req.json();
      console.log(points);
      const notesQuizzes = async () => {
        const promises = points.map((point: string) => notesQuiz(point));
        const results = await Promise.all([...promises]);
        const promises2 = points.map((point: string) =>
          notesQuiz(point, results)
        );
        const results2 = await Promise.all([...promises2]);
        ``;
        return [...results, ...results2];
      };

      const questions = await notesQuizzes();

      return NextResponse.json({
        questions,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to generate questions: ${errorMessage}`,
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
