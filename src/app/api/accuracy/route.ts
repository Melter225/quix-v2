import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/src/configs/client';

dotenv.config();
const openai = new OpenAI();

// Notes Accuracy
async function generateAccuracy(note: string): Promise<[string, string, string]> {
    const sentences = note.trim().split(/(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s/)
    const length = sentences.length
    console.log(length)
    const response = await openai.chat.completions.create({
      model: 'gpt-4o-2024-05-13',
      messages: [
        { role: 'system', 
          content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in English. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display. Do not include additional introductory and conclusive messages such as "Sure! Here is a notes page for you:".' 
        },
        {
          role: 'user',
          content: `Generate 1 relevant and helpful number to measure the accuracy of this notes page: ${note}. Identify the number of incorrect statements made in these notes, taking into account that there are ${length} sentences. Aim to only identify puerly factual innacuracies, and never give 100% accuracy. Additionally include a one to three word specific title of the main topic covered in the notes as well as the three key points covered in the notes preceded by a semicolon. Do not include a label such as Accuracy: (Example Response: 4 Quantum Mechanics; Wave-Particle Duality, Uncertainty Principle, Quantum Entanglement). Do not provide additional messages such as 'Sure! Here's a notes page for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
        },
      ],
    });
  
    let accuracy
    let topic
    let points
    if (response.choices[0].message.content != null) {
      let content = response.choices[0].message.content
      topic = content.slice(2).trim().replace(/\s+/g, ' ').split(';', 2)[0]
      points = content.slice(2).trim().replace(/\s+/g, ' ').split(';', 2)[1].trimStart()
      accuracy = parseInt(content.slice(0, 2))
      accuracy = length - accuracy
      accuracy = accuracy/length
      accuracy = 100 * accuracy
      accuracy = accuracy.toString()
      accuracy = `${accuracy}%`
    }
  
    if (accuracy != undefined && topic != undefined && points != undefined) {
      return [accuracy, topic, points]
    }
    else {
      return ['', '', ''];
    }
}

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method == 'POST') {
      try {
        const { note } = await req.json();
        const [accuracyValue, topic, points] = await generateAccuracy(note);
        console.log(points)
          
        if (accuracyValue != "No display" && accuracyValue != "No display.") {
          let accuracy = parseFloat(accuracyValue);

          if (accuracy > 85) {
            let client = await clientPromise
            let db = await client.db("QuixDatabase")

            //Do not add directly to the notes collection. Add to a sub-collection for the specific topic.
            await db
                  .collection('notes')
                  .updateOne({accuracy: note}, {$set: {note, accuracy, topic, points}}, {upsert: true})
          }

          return NextResponse.json ({
            accuracyValue,
            status: 200
          })
        }
  
        else {
          console.log("Do not show accuracy")
          return NextResponse.json({
            message: "No content to display",
            status: 204
          });
        }
      } catch (error) {
        console.error(error);
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        return NextResponse.json ({
          message: `Failed to generate accuracy: ${errorMessage}`,
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