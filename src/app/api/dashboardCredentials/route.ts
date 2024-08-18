import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

let username;
let profile;
const fetchUsername = async (email: string | null | undefined) => {
  try {
    const user = await prisma.user.findUnique({
      where: { email } as { email: string },
      select: { name: true, profile: true },
    });

    if (user) {
      username = user.name;
      profile = user.profile;
      // console.log(user.name);
      return [username, profile];
    } else {
      console.error("User not found");
      return [];
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
  }
};

export async function POST(req: NextRequest, res: NextResponse) {
  if (req.method == "POST") {
    try {
      const { email } = await req.json();
      const credentials = (await fetchUsername(email)) as string[];
      const username = credentials[0];
      const profile = credentials[1];

      return NextResponse.json({
        username,
        profile,
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
