import next, { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

async function addUser(
  identifier: string
): Promise<{ user_status: Boolean; email: string | null }> {
  const user = await prisma.user.findFirst({
    where: {
      OR: [{ email: identifier }, { name: identifier }],
    },
  });
  // console.log("user:", user)
  if (user) {
    return { user_status: true, email: user.email };
  } else {
    return { user_status: false, email: null };
  }
}

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    try {
      const { identifier } = await req.json();
      const { user_status, email } = await addUser(identifier);
      console.log("user_status:", user_status);
      return NextResponse.json({
        user_status,
        email,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to add user: ${errorMessage}`,
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
