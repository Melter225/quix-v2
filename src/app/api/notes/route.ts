import next, { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";
import dotenv from 'dotenv';
import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/src/configs/client';

type NoteEntry = {
  note: string;
  accuracy: number;
};

// Chosing Top 3 Notes Pages
function highestAccuracy(topic: string): string[] {
  const mongodb = context.services.get("mongodb-atlas");
  const db = mongodb.db("QuixDatabase");
  const collectionNames = db.getCollectionNames();

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

  database[topic].forEach((entry) => {
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
  return notes
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == 'POST') {
    try {
      const { topic } = await req.json();
      const note = highestAccuracy(topic);
        
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