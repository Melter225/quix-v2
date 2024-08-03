import next, { NextApiRequest, NextApiResponse } from 'next';
import fs from "fs";
import path from 'path';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/src/configs/client';
import { MongoClient, Document } from 'mongodb';

dotenv.config();
const openai = new OpenAI();
// const uri = process.env.MONGODB_URI || ''

async function audioGeneration(res: NextResponse) {
    const speechFile = path.resolve("./public/output.mp3");
    let content = ''

    await fs.promises.writeFile(speechFile, '');

    const transcription = await openai.audio.transcriptions.create({
      file: fs.createReadStream("./public/QuixAudio.m4a"),
      model: "whisper-1",
    });

    console.log(transcription.text);
    const response = await openai.chat.completions.create({
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', 
          content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, explain this. Do not ever directly mention that you are an AI. Do not use any symbols other than numbers and letters. Your name is Luna. Do not include additional introductory and conclusive messages such as "Sure! Here is a response for you:".' 
        },
        {
          role: 'user',
          content: `Generate 1 relevant and helpful response to this prompt: ${transcription.text}. Do not provide additional messages such as 'Sure! Here's a response for you:' or 'If you have any more questions or need further explanations on other topics, feel free to ask!'.`,
        },
      ],
    });

    if (response.choices[0].message.content != null) {
      content = response.choices[0].message.content
    }
    console.log(content)

    const audio = await openai.audio.speech.create({
      model: "tts-1",
      voice: "nova",
      input: content,
    });

    const buffer = Buffer.from(await audio.arrayBuffer());
    await fs.promises.writeFile(speechFile, buffer);

    // console.log(`audio body: ${audio.body}`)
    // const audioStream = audio.body;
    
    // return new NextResponse(audioStream, {
    //   headers: {
    //     'Content-Type': 'audio/mpeg',
    //   },
    // });
    // if (audio.body != null) {
    //   const audioStream = new ReadableStream({
    //     start(controller) {
    //       audio.body.pipeTo(new WritableStream({
    //         write(chunk) {
    //           controller.enqueue(chunk);
    //         },
    //         close() {
    //           controller.close();
    //         },
    //         abort(err) {
    //           controller.error(err);
    //         }
    //       }));
    //     }
    //   });

    //   return new Response(audioStream, {
    //     headers: {
    //       'Content-Type': 'audio/mpeg',
    //       'Content-Disposition': 'attachment; filename="output.mp3"',
    //     },
    //   });
    // }
    // const filePath = path.resolve('./public/output.mp3');
    // const buffer = Buffer.from(await audio.arrayBuffer());
    // await fs.promises.writeFile(filePath, buffer);
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      await audioGeneration(res);        
      return NextResponse.json ({
        status: 200
      })
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json ({
        message: `Failed to generate audio: ${errorMessage}`,
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