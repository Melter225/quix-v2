import next, { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

async function addUser(
  email: string,
  password: string,
  username: string,
  profile: string,
  status: string
) {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: password,
      name: username,
      profile: profile,
      status: status,
      spaces: {
        create: [],
      },
    },
  });
  console.log(user);
}

export async function POST(req: NextRequest) {
  if (req.method == "POST") {
    try {
      const { email, password, username, profile, status } = await req.json();
      addUser(email, password, username, profile, status);
      return NextResponse.json({
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
