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

async function generatePriority(topics: QuizEntry[], order: string, answers: string[]): Promise<string[]> {
  let ordered_topics = ['']
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
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-2024-05-13',
      messages: [
        { role: 'system', 
          content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display. Do not include additional introductory and conclusive messages such as "Sure! Here is an ordered list for you:".' 
        },
        {
          role: 'user',
          content: `Generate 1 relevant and helpful ordered list that orders this array of topics: ${topics.map(entry => entry.quiz)} by the user's understanding of the questions and topics in descending order (the question understood the least should be first and so on) shown in these corresponding responses: ${answers}. Rather than attempting to just order the list based on whether or not the answer is correct, attempt to look at the user's steps and logic to determine if there is a fundemental misconception or a small mistake in their understanding of a topic. Leave the array in the array format (Example Response: ["insert text here", "insert text here", "insert text here"]). Do not provide additional messages such as 'Sure! Here's an ordered list for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
        },
      ],
    });

    console.log(response.choices[0].message.content)
    if (response.choices[0].message.content != "No display" && response.choices[0].message.content != undefined) {
      ordered_topics = JSON.parse(response.choices[0].message.content)
      console.log(ordered_topics)
    }
  } else if (order == 'comprehensive') {

  }
  return ordered_topics
}

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method == 'POST') {
      try {
        const { topics, order, answers } = await req.json();
        const priority = await generatePriority(topics, order, answers);

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