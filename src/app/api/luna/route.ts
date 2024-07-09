import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/src/configs/client';
import { MongoClient, Document } from 'mongodb';

// const uri = process.env.MONGODB_URI || ''

async function audioGeneration(): Promise<string[]> {
  
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const audio = await audioGeneration();
      console.log(audio)
        
      return NextResponse.json ({
        audio,
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