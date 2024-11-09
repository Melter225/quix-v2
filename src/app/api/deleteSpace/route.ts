import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { space } from "postcss/lib/list";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    const { spaceName } = await req.json();
    console.log("spaceName", spaceName);
    try {
      const spaceData = await prisma.space.delete({
        where: {
          space_name: spaceName,
        },
      });

      if (spaceData) {
        console.log(spaceData);
      }

      return NextResponse.json({
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to delete space: ${errorMessage}`,
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
