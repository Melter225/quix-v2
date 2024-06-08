import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();
const openai = new OpenAI();

async function generateQuestion(topic: string, previousQuestions: string[]): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-2024-05-13',
    messages: [
      { role: 'system', 
        content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language.' 
      },
      {
        role: 'user',
        content: `Generate 1 relevant and helpful practice question to help me learn more about my topic ${topic} quickly. Please ensure the question is unique and does not duplicate any of the previous questions: ${previousQuestions}. Avoid creating a similar question in any matter as long as you pertain to the provided topic. Do not provide additional messages such as 'Sure! Here's a practice question for you:'.`,
      },
    ],
  });

  let practice_question = "";
  if (response.choices[0].message.content != null) {
    practice_question = response.choices[0].message.content;
  }

  return practice_question
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    const { topic } = await req.json();
    console.log(topic)
    const practiceQuestions: string[] = [];

    const generateQuestions = async () => {
      const promises = Array(10).fill(null).map(() => generateQuestion(topic, practiceQuestions.slice()));
      const results = await Promise.all(promises);
      return results;
    };

    try {
      const questions = await generateQuestions();
      return NextResponse.json({
        questions,
        status: 200
      });
    } catch (error) {
      console.error(error);
      return NextResponse.json ({
        message: 'Failed to generate questions',
        status: 500
      })
    }
  } else {
      return NextResponse.json ({
        message: `Method ${req.method} Not Allowed`,
        status: 405
      })
  }
}