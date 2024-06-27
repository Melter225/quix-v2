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
        content: 'You are a helpful assistant in helping users learn more about their provided topics. When selecting errors, do not be harsh and aim to chose as few errors as possible. If the user enters a prompt in a different language, ensure that you respond in that language. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display and do not include additional text. Aim to not sound like an AI or human response but rather, a 3rd person document. To do this, do not address the reader directly, do not use the imperative mood, do not use second person or first person, and do not include additional introductory and conclusive messages such as "Sure! Here is a document for you:".' 
      },
      {
        role: 'user',
        content: `Generate 1 relevant and helpful document to help me understand my errors in answering these questions ${questions} quickly. The user will likely know only some about the topic, so instead of aiming to quiz or criticize them, aim to teach them instead, and provide thorough explanations for why a different answer is correct. To maintain a structure, focus on the number of errors made by the user and ensure that the document contains around 400 words (this word requirement is very important if there are 1+ errors). It is important to NEVER include additional questions whose answers are correct and judge very carefully whether an answer is truly incorrect. Ensure that you carefully examine and list every question, so that you can identify every error and not identify extra questions. You should also provide an introduction, conclusion, and lengthy explanations for each error. Begin by identifying how many and which of the user's answers are wrong and which problems they are and list your findings in a small introduction in the document. The introduction should additionally include the incorrect problems, the user's answer, and the correct answer. If the user does not make any factual errors (mistakes in which the correct answer differs from the user's answer), you may ignore this message and return this response: No display. If the user makes one factual error (mistakes in which the correct answer differs from the user's answer), fully focus the document around this sole main error, going into further depth, and do not add additional questions whose answers are correct. If the user makes two or more factual errors (mistakes in which the correct answer differs from the user's answer), first ensure that you are only marking a problem as incorrect if the user's answer does not match the correct answer, ignoring factors such as the amount of work and explnaation shown. Once you are sure, structure the document around these main errors and do not include additional answers that provided correct answers. When beginning a new error, include a headline that says '### Error #num: topic' where num is the corresponding number of the error and topic is the topic of the error the user made (Ex: The first error would be ### Error #1: the error made by the user, the second would be ### Error #2: the error made by the user, and so on); however, only do this after identifying the correct errors and do not let this affect your judgment. If the user enters a prompt in a different language, translate "Error", but do not modify any other aspects of the headline format (Ex: In French, you would not make #1 n°1 and instead, would translate it as ### Erreur #num: topic). Do not provide additional messages such as 'Sure! Here's a document for you:'.`,
      },
    ],
  });

  return response.choices[0].message?.content ?? '';
}

function extractErrors(document: string): string[] {
  const errorPattern = /##{2,3} [\p{L}\p{M}]+ #?\d+: (.+)/gu;
  const matches: RegExpExecArray[] = [];
  let match: RegExpExecArray | null;

  while ((match = errorPattern.exec(document)) !== null) {
    matches.push(match);
  }

  console.log(matches)

  const errors = matches.map(match => match[1]);
  console.log(errors)

  return errors;
}

async function generateVideo(areas: string[]): Promise<string[]> {
  console.log("The videos will be generated for the following areas:", areas);
  
  const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/search';
  const videoUrls = [];

  for (let i = 0; i < areas.length; i++) {  // Loop through first 3 items in areas array
    if (i < 3) {
      console.log(i)
      const query = areas[i];  // Use the current area for the search query
      const url = `${YOUTUBE_VIDEO_API}?type=video&part=snippet&key=${process.env.YOUTUBE_API_KEY}&maxResults=1&q=${encodeURIComponent(query)}&videoDuration=medium&videoEmbeddable=true&safeSearch=strict`;

      try {
        const res = await fetch(url);
        const data = await res.json();

        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          videoUrls.push(videoUrl);  // Add the video URL to the array
        } else {
          throw new Error('No videos found');
        }
      } catch (error) {
        console.error('Error fetching YouTube video:', error);
        throw new Error('Internal Server Error');
      }
    }
  }

  return videoUrls;  // Return the array of video URLs
}

function generateScore(areas: string[]): string {
  let score = ''
  score = `${(10 - areas.length).toString()}/10`
  return score
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const questions = `What is the speed of light in a vacuum? (150,000 meters per second)
How many bones are there in the human body? (300)
What is the chemical symbol for gold? (Au)
How many planets are there in our solar system? (8)
What is the boiling point of water at sea level? (100 degrees Celsius)
How many continents are there on Earth? (7)
What is the formula for the area of a circle? (πr²)
What is the atomic number of carbon? (6)
What is the largest ocean on Earth? (Pacific Ocean)
How many sides does a hexagon have? (6)`;
      const document = await generateDocument(questions);
      let areas = [''] 

      if (document != "No display" && document != "No display.") {
        areas = extractErrors(document);
        console.log(areas)
        
        const video = await generateVideo(areas);
        console.log(video)

        const score = generateScore(areas);
        console.log(score)

        return NextResponse.json ({
          document,
          video,
          score,
          status: 200
        })
      }

      else {
        console.log("Do not show document, video, or score")
        return NextResponse.json({
          message: "No content to display",
          status: 204
        });
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json ({
        message: `Failed to generate document, video, or score: ${errorMessage}`,
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