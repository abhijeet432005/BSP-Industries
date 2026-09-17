import { NextResponse } from "next/server";
import { siteConfig } from "@/data/siteConfig";

// This route relays enquiry submissions to Web3Forms (https://web3forms.com),
// a free service that emails form submissions straight to your inbox with no
// backend/database needed on your side.
//
// Setup:
// 1. Go to https://web3forms.com and create a free access key using the
//    business email you want enquiries delivered to.
// 2. Put that key in .env.local as WEB3FORMS_ACCESS_KEY=xxxxxxxx
// 3. Restart the dev server. Submissions will start arriving by email.
//
// Until a key is added, submissions are accepted and logged to the server
// console so you can test the UI end-to-end.

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, quantity, message, product, company_website } = body;

    // Honeypot: if this hidden field is filled, silently pretend success.
    if (company_website) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const accessKey = siteConfig.web3formsAccessKey;

    if (!accessKey) {
      console.warn(
        "[contact] WEB3FORMS_ACCESS_KEY is not set — logging enquiry instead of emailing it:",
        { name, email, phone, quantity, product, message }
      );
      return NextResponse.json({ success: true, mode: "logged" });
    }

    const payload = {
      access_key: accessKey,
      subject: `New enquiry — ${product || "General"} — ${siteConfig.name}`,
      from_name: siteConfig.name,
      name,
      email,
      phone,
      quantity: quantity || "Not specified",
      product: product || "General enquiry",
      message,
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.message || "Web3Forms rejected the submission.");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[contact] Failed to submit enquiry:", error);
    return NextResponse.json(
      { success: false, message: "Server error while sending your enquiry." },
      { status: 500 }
    );
  }
}
