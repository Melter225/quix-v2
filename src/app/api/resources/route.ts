import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();
const openai = new OpenAI();

async function generateDocument(questions: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [
      { role: 'system', 
        content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language.' 
      },
      {
        role: 'user',
        content: `Generate 1 relevant and helpful document to help me understand my errors in answering these questions ${questions} quickly. The user will likely know only some about the topic, so instead of aiming to quiz or criticize them, aim to teach them instead, and provide thorough explanations for why a different answer is correct. To maintain a structure, focus on the number of errors made by the user and ensure that the document contains around 400 words (this word requirement is very important if there are 1+ errors). It is important not to include additional questions whose answers are correct. Begin by identifying how many and which of the user's answers are wrong and which problems they are and list your findings in a small introduction in the document. The introduction should additionally include the incorrect problems, the user's answer, and the correct answer. If the user does not make any factual errors (mistakes in which the correct answer differs from the user's answer), you may ignore this message and return this response: 'Good job!'. If the user makes one factual error (mistakes in which the correct answer differs from the user's answer), fully focus the document around this sole main error, going into further depth, and do not add additional questions whose answers are correct. If the user makes two or more factual errors (mistakes in which the correct answer differs from the user's answer), first ensure that you are only marking a problem as incorrect if the user's answer does not match the correct answer, ignoring factors such as the amount of work and explnaation shown. Once you are sure, structure the document around these main errors and do not include additional answers that provided correct answers. When beginning a new error, include a headline that says '### Error #num:' where num is the corresponding number of the error (Ex: The first error would be ### Error #1: the error made by the user, the second would be ### Error #2: the error made by the user, and so on); however, only do this after identifying the correct errors and do not let this affect your judgment. Do not provide additional messages such as 'Sure! Here's a document for you:'.`,
      },
    ],
  });

  return response.choices[0].message?.content ?? '';
}

function extractErrors(document: string): string[] {
  const errorPattern = /##{2,3} Error #?\d+: (.+)/g;
  const matches: RegExpExecArray[] = [];
  let match: RegExpExecArray | null;

  while ((match = errorPattern.exec(document)) !== null) {
    matches.push(match);
  }

  console.log(matches)

  const errors = matches.map(match => match[1]);
  console.log(errors)

  return errors.slice(0, 2);
}

async function generateVideo(areas: string[]): Promise<string> {
  console.log("The videos will be generated for the following areas:", areas);
  return areas.join(", ")
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const questions = 'Solve for x in the equation 4x + 5 = 2x + 15. Answer: x = 5; 2. What is the capital of France? Answer: Paris; 3. What is the chemical formula for water? Answer: H2O; 4. Who developed the theory of relativity? Answer: Albert Einstein; 5. What is the boiling point of water in Celsius? Answer: 100 degrees; 6. In what year did World War II end? Answer: 1945; 7. What is the largest planet in our solar system? Answer: Jupiter; 8. Simplify 8x^2 / 4x. Answer: 2x; 9. What is the powerhouse of the cell? Answer: Mitochondria; 10. What is the square root of 81? Answer: 10.';
      const document = await generateDocument(questions);

      let areas = ['']

      if (document != "Good job!") {
        areas = extractErrors(document)
        console.log(areas)
      }

      else {
        console.log("All answers were correct!")
      }

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