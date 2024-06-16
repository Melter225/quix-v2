import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

dotenv.config();
const openai = new OpenAI();

async function generateDocument(topic: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-2024-05-13',
    messages: [
      { role: 'system', 
        content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language.' 
      },
      {
        role: 'user',
        content: `Generate 1 relevant and helpful document to help me learn more about my topic ${topic} quickly. The user will likely know little about the topic, so instead of aiming to quiz them, aim to teach them instead. To maintain a structure, focus on three main topics and ensure that the document contains around 500 words. When beginning a new topic, include a headline that says '### Topic #num:' where num is the corresponding number of the topic (Ex: The first topic would be ### Topic #1: the topic you are introducing, the second would be ### Topic #2: the topic you are introducing, and so on). Do not provide additional messages such as 'Sure! Here's a document for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
      },
    ],
  });

  return response.choices[0].message?.content ?? '';
}

function extractErrors(document: string): string[] {
  const errorPattern = /### Topic #?\d+: (.+)/g;
  const matches: RegExpExecArray[] = [];
  let match: RegExpExecArray | null;

  while ((match = errorPattern.exec(document)) !== null) {
    matches.push(match);
  }

  console.log(matches)

  const errors = matches.map(match => match[1]);
  console.log(errors)

  return errors.slice(0, 3);
}

async function generateVideo(areas: string[]): Promise<string> {
  console.log("The videos will be generated for the following areas:", areas);

  
  return areas.toString()
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const { topic } = await req.json();
      const document = await generateDocument(topic);
      
      const areas = extractErrors(document)
      console.log(areas)

      const video = await generateVideo(areas);
      console.log(video)

      return NextResponse.json ({
        document,
        video,
        status: 200
      })
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json ({
        message: `Failed to generate document or video: ${errorMessage}`,
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