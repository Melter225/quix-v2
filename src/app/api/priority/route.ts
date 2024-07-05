import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();
const openai = new OpenAI();

type QuizEntry = {
  quiz: string;
  accuracy: number;
};

async function generatePriority(topics: QuizEntry[], order: string): Promise<string[]> {
  const ordered_topics = ['']
  if (order == 'score') {
    topics.forEach((entry) => {
      for (let i = 0; i < topics.length; i++) {
        if (topics[i].accuracy >= entry.accuracy && !ordered_topics[i]) {
          ordered_topics[i] = entry.quiz
          break
        } else if (topics[i].accuracy >= entry.accuracy && ordered_topics[i]) {
          ordered_topics.splice(i, 0, entry.quiz)
          break
        }
      }
    })
  } else if (order == 'complexity') {

  } else if (order == 'understanding') {
    
  } else if (order == 'comprehensive') {

  }
  return ordered_topics
}

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method == 'POST') {
      try {
        const { topics, order } = await req.json();
        const priority = await generatePriority(topics, order);

        return NextResponse.json ({
          priority,
          status: 200
        })
      } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json ({
          message: `Failed to generate priority: ${errorMessage}`,
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