import next, { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { space } from "postcss/lib/list";

const prisma = new PrismaClient();

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    const { email } = await req.json();
    console.log("email", email);
    try {
      const lastSpace = await prisma.space.findFirst({
        orderBy: {
          space_number: "desc",
        },
      });

      let spaceValue = 1;
      if (lastSpace) {
        console.log(lastSpace.space_number);
        spaceValue = lastSpace.space_number + 2;
      }

      const spaceNumber = spaceValue - 1;

      const spaceData = {
        user: {
          connect: {
            email: email,
          },
        },
        space_name: `Space ${spaceValue}`,
        space_number: spaceNumber,
      };

      console.log(
        "resource_data",
        await prisma.space.create({
          data: spaceData,
          include: {
            user: true,
          },
        })
      );

      return NextResponse.json({
        spaceValue,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to generate space: ${errorMessage}`,
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
