import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
async function loadLearns(space: string) {
  const learnData = await prisma.space.findUnique({
    where: {
      space_name: space,
    },
    include: {
      resources: {
        include: {
          learn: {
            include: {
              document: true,
              videos: true,
              websites: true,
            },
          },
        },
      },
    },
  });

  console.log(learnData);

  let learns;
  if (learnData) {
    console.log(learnData.resources);
    learns = learnData.resources
      .map((resource) => resource.learn)
      .filter(Boolean);
  }

  return learns;
}

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const { space } = await req.json();
      const learns = await loadLearns(space);
      console.log(learns);

      return NextResponse.json({
        learns,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to load resources: ${errorMessage}`,
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
