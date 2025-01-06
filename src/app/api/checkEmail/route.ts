import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

const checkEmail = async (email: string | undefined) => {
  console.log(email);
  const user = await prisma.user.findUnique({
    where: { email: email as string },
    select: { email: true, name: true },
  });

  if (user) {
    console.log("Sign in with google successful");
    return true;
  } else {
    console.log("Sign in with google failed");
    return false;
  }
};

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    try {
      const { email } = await req.json();
      const response = await checkEmail(email);

      return NextResponse.json({
        response,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to check if email exists: ${errorMessage}`,
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
