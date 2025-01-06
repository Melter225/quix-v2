import { NextResponse, type NextRequest } from "next/server";
import { Twilio } from "twilio";

export async function POST(request: NextRequest) {
  try {
    const { phoneNumber, verificationCode } = await request.json();

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = new Twilio(accountSid, authToken);

    console.log(phoneNumber, process.env.TWILIO_PHONE_NUMBER);

    client.messages
      .create({
        body: `Your Quix verification code is: ${verificationCode}.`,
        to: phoneNumber,
        from: process.env.TWILIO_PHONE_NUMBER,
      })
      .then((message) => console.log("message.sid", message.sid))
      .catch((error) => console.error("error", error));
    return NextResponse.json({
      status: 200,
    });
  } catch (error) {
    console.error(error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({
      message: `Failed to send phone verification code: ${errorMessage}`,
      status: 500,
    });
  }
}
