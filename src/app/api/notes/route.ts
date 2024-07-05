import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/src/configs/client';
import { MongoClient, Document } from 'mongodb';

type NoteEntry = {
  note: string;
  accuracy: number;
};

const uri = process.env.MONGODB_URI || ''

// Chosing Top 3 Notes Pages
async function highestAccuracy(topic: string): Promise<string[]> {
  topic = topic.trim().replace(/\s+/g, ' ')
  const client = await clientPromise;
  const db = client.db("QuixDatabase");
  const collection = db.collection<NoteEntry>("notes");
  const database = await collection.find({ topic: { $regex: new RegExp(`^${topic}$`, 'i') } }).toArray();
  //Define database as a sub-collection within notes for the specific topic

  let highest = 0
  let second = 0
  let third = 0
  let note = '';
  let note2 = '';
  let note3 = '';
  let notes = [
    '',
    '',
    '',
  ]

  //[topic]
  database.forEach((entry: NoteEntry) => {
    if (entry.accuracy > highest) {
      third = second
      note3 = note2
      second = highest
      note2 = note
      highest = entry.accuracy
      note = entry.note
    }
    else if (entry.accuracy > second) {
      third = second
      note3 = note2
      second = entry.accuracy
      note2 = entry.note
    }
    else if (entry.accuracy > third) {
      third = entry.accuracy
      note3 = entry.note
    }
  });

  notes = [note, note2, note3]
  console.log(notes)
  return notes
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const { topic } = await req.json();
      console.log(topic)
      const note = await highestAccuracy(topic);
         
      console.log(note)
        
      return NextResponse.json ({
        note,
        status: 200
      })
    } catch (error) {
      console.error(error);
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      return NextResponse.json ({
        message: `Failed to generate note: ${errorMessage}`,
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