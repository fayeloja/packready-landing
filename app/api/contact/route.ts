import { NextRequest, NextResponse } from "next/server";

// Shape of the expected request body
type ContactPayload = {
  name: string;
  phone: string;
  business: string;
  message: string;
};

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();
    const { name, phone, business, message } = body;

    // Basic validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: "Name, phone, and message are required." },
        { status: 400 }
      );
    }

    // In production you'd do one of these here:
    // - Send a WhatsApp message via Twilio/WhatsApp Business API
    // - Send an email via Resend or Nodemailer
    // - Save to a PostgreSQL DB (your existing pg setup)
    // - Forward to a Google Sheet via their API
    // For now, we log and return success.

    console.log("New quote request:", { name, phone, business, message });

    return NextResponse.json(
      { success: true, message: "Quote request received!" },
      { status: 200 }
    );

  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}