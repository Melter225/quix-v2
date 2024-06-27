import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';

dotenv.config();
const openai = new OpenAI();
interface SearchResultItem {
  link: string;
}

async function generateDocument(topic: string): Promise<string> {
  const response = await openai.chat.completions.create({
    model: 'gpt-4o-2024-05-13',
    messages: [
      { role: 'system', 
        content: 'You are a helpful assistant in helping users learn more about their provided topics. If the user enters a prompt in a different language, ensure that you respond in that language. For example, if the user enters "Espanol", then the entire document should be in Spanish while also teaching the user about Spanish. If the user enters gibberish, a prompt that is incomprehensible, or a profane prompt, respond with just this message: No display. Aim to not sound like an AI or human response but rather, a 3rd person document. To do this, do not address the reader directly, do not use the imperative mood, do not use second person or first person, and do not include additional introductory and conclusive messages such as "Sure! Here is a document for you:".' 
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
  const errorPattern = /### [\p{L}\p{M}]+ #?\d+: (.+)/gu;
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

async function generateVideo(areas: string[]): Promise<string[]> {
  console.log("The videos will be generated for the following areas:", areas);

  const YOUTUBE_VIDEO_API = 'https://www.googleapis.com/youtube/v3/search';
  const videoUrls = [];

  for (let i = 0; i < 3; i++) {  // Loop through first 3 items in areas array
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

  return videoUrls;  // Return the array of video URLs
}

async function generateWebsite(areas: string[]): Promise<string[]> {
  const websiteUrls = [''];
  let urls = [''];

  for (let i = 0; i < 3; i++) {
    const query = areas[i];

    try {
      const apiKey = process.env.WEBSITE_API_KEY;
      const searchEngineId = process.env.SEARCH_ENGINE_ID;

      const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${encodeURIComponent(query)}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch');
      }

      const data = await response.json();
      let fetchedUrls = data.items.map((item: SearchResultItem) => item.link);
      console.log(fetchedUrls)
      websiteUrls.push(...fetchedUrls)
    } catch (error) {
      console.error('Error fetching websites:', error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return ['']
    }
  }

  urls = [websiteUrls[1], websiteUrls[11], websiteUrls[21]]
  return urls;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const { topic } = await req.json();
      const document = await generateDocument(topic);
      
      let areas = ['']

      if (document != "No display" && document != "No display.") {
        areas = extractErrors(document)
        console.log(areas)

        const video = await generateVideo(areas);
        console.log(video)

        const website = await generateWebsite(areas);
        console.log(website)

        return NextResponse.json ({
          document,
          video,
          website,
          status: 200
        })
      }

      else {
        console.log("Do not show document, video, or website")
        return NextResponse.json({
          message: "No content to display",
          status: 204
        });
      }
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json ({
        message: `Failed to generate document, video, or website: ${errorMessage}`,
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