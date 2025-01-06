import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
async function loadResources(space: string) {
  const resourceData = await prisma.space.findUnique({
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
          quiz: {
            include: {
              questions: true,
              answers: true,
              document: true,
              videos: true,
              websites: true,
            },
          },
        },
      },
    },
  });

  console.log(resourceData);

  let resources;
  if (resourceData) {
    console.log(resourceData.resources);
    resources = resourceData.resources
      .map((resource) => resource.learn || resource.quiz)
      .filter(Boolean);
  }

  return resources;
}

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    try {
      const { space } = await req.json();
      const resources = await loadResources(space);
      console.log(resources);

      return NextResponse.json({
        resources,
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
