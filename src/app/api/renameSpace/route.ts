import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { space } from "postcss/lib/list";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    const { newSpaceName, spaceName, email } = await req.json();
    console.log("spaceName", spaceName);
    let userId;

    try {
      const userData = await prisma.user.findFirst({
        where: {
          email: email,
        },
        select: {
          user_id: true,
        },
      });

      if (userData) {
        console.log(userData.user_id);
        userId = userData.user_id;
      }
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
    }

    try {
      const spaceData = await prisma.space.update({
        where: {
          space_name: spaceName,
          user_id: userId,
        },
        data: {
          space_name: newSpaceName,
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
        message: `Failed to rename space: ${errorMessage}`,
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
