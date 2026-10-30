import { NextResponse } from "next/server";
import { Resend } from "resend";

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "iztihadrafid10@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const MAX_EMAIL_LENGTH = 254;
const MAX_SUBJECT_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS,
  );
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT_MAX;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact route: RESEND_API_KEY is not set.");
    return NextResponse.json(
      { error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body." },
      { status: 400 },
    );
  }

  const { email, subject, message } = (payload ?? {}) as {
    email?: unknown;
    subject?: unknown;
    message?: unknown;
  };

  if (
    typeof email !== "string" ||
    typeof subject !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { error: "Email, subject and message are required." },
      { status: 400 },
    );
  }

  const sender = email.trim();
  const cleanSubject = subject.trim();
  const cleanMessage = message.trim();

  if (!EMAIL_REGEX.test(sender) || sender.length > MAX_EMAIL_LENGTH) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }
  if (!cleanSubject || cleanSubject.length > MAX_SUBJECT_LENGTH) {
    return NextResponse.json(
      {
        error: `Subject must be between 1 and ${MAX_SUBJECT_LENGTH} characters.`,
      },
      { status: 400 },
    );
  }
  if (!cleanMessage || cleanMessage.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        error: `Message must be between 1 and ${MAX_MESSAGE_LENGTH} characters.`,
      },
      { status: 400 },
    );
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many messages sent. Please try again in a minute." },
      { status: 429 },
    );
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: sender,
      subject: cleanSubject,
      text: `From: ${sender}\n\n${cleanMessage}`,
      html: `
        <div style="font-family:system-ui,sans-serif;line-height:1.6;color:#111">
          <h2 style="margin:0 0 16px">New portfolio message</h2>
          <p style="margin:0 0 4px"><strong>From:</strong> ${escapeHtml(sender)}</p>
          <p style="margin:0 0 16px"><strong>Subject:</strong> ${escapeHtml(cleanSubject)}</p>
          <hr style="border:none;border-top:1px solid #e5e5e5;margin:16px 0" />
          <p style="white-space:pre-wrap;margin:0">${escapeHtml(cleanMessage)}</p>
        </div>
      `,
    });

    if (error) {
      console.error("Contact route: Resend error", error);
      return NextResponse.json(
        { error: "Could not send the message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact route: unexpected error", error);
    return NextResponse.json(
      { error: "Could not send the message. Please try again." },
      { status: 500 },
    );
  }
}
