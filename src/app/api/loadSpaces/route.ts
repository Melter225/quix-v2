import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
async function loadSpaces(email: string) {
  const spaceData = await prisma.space.findMany({
    orderBy: {
      space_number: "desc",
    },
    where: {
      user: {
        email: email,
      },
    },
  });

  console.log(spaceData);

  let spaces = [""];
  if (spaceData) {
    console.log(spaceData);
    for (let space of spaceData) {
      spaces.push(space.space_name);
    }
  }

  spaces = spaces.slice(1);
  return spaces;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const { email } = await req.json();
      const spaces = await loadSpaces(email);
      console.log(spaces);

      return NextResponse.json({
        spaces,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to load spaces: ${errorMessage}`,
        status: 500,
      });
    }
  } else {
    return NextResponse.json({
      message: `Method ${req.method} Not Allowed`,
      status: 405,
    });
  }
}
