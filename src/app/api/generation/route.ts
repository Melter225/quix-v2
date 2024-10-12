import next, { NextApiRequest, NextApiResponse } from "next";
import OpenAI from "openai";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

dotenv.config();
const openai = new OpenAI();
const prisma = new PrismaClient();
interface SearchResultItem {
  link: string;
}

async function generateQuestion(
  topic: string,
  previousQuestions: string[]
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
      {
        role: "system",
        content:
          'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. For example, if the user enters "Espanol", then the entire question should be in Spanish while also quizzing the user about Spanish. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display. Never use ||##||||##||||##|| in your response. Aim to not sound like an AI or human response but rather, a 3rd person document. To do this, do not address the reader directly, do not use the imperative mood, do not use second person or first person, and do not include additional introductory and conclusive messages such as "Sure! Here is a practice question for you:".',
      },
      {
        role: "user",
        content: `Generate 1 relevant and helpful practice question to help me learn more about my topic ${topic} quickly. Please ensure the question is unique and does not duplicate any of the previous questions: ${previousQuestions}. Avoid creating a similar question in any matter as long as you pertain to the provided topic. Think of a subtopic for the question and ensure that it is not similar to the previous subtopics provided, but do not list the subtopic in your response. Do not provide additional messages such as 'Sure! Here's a practice question for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
      },
    ],
  });

  let practice_question = "";
  if (response.choices[0].message.content != null) {
    practice_question = response.choices[0].message.content;
  }

  return practice_question;
}

async function generateQuery(
  topic: string,
  questions: string[]
): Promise<string> {
  const response = await openai.chat.completions.create({
    model: "gpt-4o-2024-05-13",
    messages: [
      {
        role: "system",
        content:
          'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. For example, if the user enters "Espanol", then the entire query should be in Spanish. Do not include additional introductory and conclusive messages such as "Sure! Here is a query for you:".',
      },
      {
        role: "user",
        content: `Generate 3 relevant and helpful subtopics that are accurately represented as both members of this topic: ${topic} and overarching topics in these questions: ${questions}. Seperate each subtopic by commas. Do not provide additional messages such as 'Sure! Here's a query for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
      },
    ],
  });

  let query = "";
  if (response.choices[0].message.content != null) {
    query = response.choices[0].message.content;
  }

  return query;
}

async function generateWebsite(areas: string[]): Promise<string[]> {
  const websiteUrls = [""];

  for (let i = 0; i < 3; i++) {
    const query = areas[i];

    try {
      const apiKey = process.env.WEBSITE_API_KEY;
      const searchEngineId = process.env.SEARCH_ENGINE_ID;

      const exclusionQuery = `${encodeURIComponent(
        query
      )} -site:youtube.com -site:youtu.be`;
      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${exclusionQuery}&num=1`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await response.json();
      if (data.items && data.items.length > 0) {
        websiteUrls.push(data.items[0].link);
      } else {
        console.warn("No search results found for query:", query);
      }
    } catch (error) {
      console.error("Error fetching websites:", error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return [""];
    }
  }

  websiteUrls.splice(0, 1);
  return websiteUrls;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    const { topic, space } = await req.json();
    console.log(topic);
    const practiceQuestions: string[] = [];

    const generateQuestions = async () => {
      const promises = Array(10)
        .fill(null)
        .map(() => generateQuestion(topic, practiceQuestions.slice()));
      const results = await Promise.all(promises);
      return results;
    };

    try {
      const questions = await generateQuestions();
      console.log(questions);
      if (questions[0] != "No display" && questions[0] != "No display.") {
        const query = await generateQuery(topic, questions);
        console.log(query);
        const queries = query.split(",");
        const website = await generateWebsite(queries);
        console.log(website);

        const lastQuiz = await prisma.quiz.findFirst({
          orderBy: {
            quiz_name: "desc",
          },
          where: {
            quiz_name: {
              contains: "Quiz ",
            },
          },
        });

        let quizValue = 1;
        if (lastQuiz) {
          const value = lastQuiz.quiz_name.match(/Quiz (\d+)/);
          if (value) {
            quizValue = parseInt(value[1]) + 1;
          }
        }

        const resourceData = {
          space: {
            connect: {
              space_name: space,
            },
          },
          quiz: {
            create: {
              quiz_name: `Quiz ${quizValue}`,
              taken: false,
              questions: {
                create: [
                  { question: questions[0] },
                  { question: questions[1] },
                  { question: questions[2] },
                  { question: questions[3] },
                  { question: questions[4] },
                  { question: questions[5] },
                  { question: questions[6] },
                  { question: questions[7] },
                  { question: questions[8] },
                  { question: questions[9] },
                ],
              },
              websites: {
                create: [
                  { website: website[0] },
                  { website: website[1] },
                  { website: website[2] },
                ],
              },
            },
          },
        };

        console.log(
          "resource_data",
          await prisma.resource.create({
            data: resourceData,
            include: {
              space: {
                include: {
                  user: true,
                },
              },
              quiz: true,
            },
          })
        );

        return NextResponse.json({
          quizValue,
          questions,
          website,
          status: 200,
        });
      } else {
        console.log("Do not show questions or website");
        return NextResponse.json({
          message: "No content to display",
          status: 204,
        });
      }
    } catch (error) {
      console.error(error);
      return NextResponse.json({
        message: "Failed to generate questions or website",
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
