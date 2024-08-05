import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

let username;
const fetchUsername = async (email: string | null | undefined) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email } as { email: string },
      select: { name: true },
    });

    if (user) {
      username = user.name;
      console.log(user.name);
      return username;
    } else {
      console.error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const { email } = await req.json();
      const username = await fetchUsername(email);

      return NextResponse.json({
        username,
        status: 200,
      });
    } catch (error) {
      console.error(error);
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      return NextResponse.json({
        message: `Failed to find email: ${errorMessage}`,
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
