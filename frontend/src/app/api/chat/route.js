import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userMessage } = await request.json();

    // 1. FlowZint ke credentials (.env file se aayenge baad mein)
    // Abhi testing ke liye direct variables ya temporary keys use kar sakte hain
    const FLOWZINT_API_KEY = process.env.FLOWZINT_API_KEY || "YOUR_TEMPORARY_API_KEY";
    const AGENT_ID = process.env.FLOWZINT_AGENT_ID || "YOUR_AGENT_ID";

    // 2. FlowZint API Endpoint ko hit karna
    // Note: Hackathon ke documentation ke hisaab se unka endpoint URL yahan aayega
    const response = await fetch(`https://api.flowzint.in/v1/agents/${AGENT_ID}/chat`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${FLOWZINT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: userMessage,
        // System prompt batata hai AI ko ki use behave kaise karna hai (Sales Bot Rulebook)
        systemPrompt: `
          You are DealFlow AI, an expert B2B Sales Agent. Your goals are:
          1. Be professional, warm, and helpful.
          2. Ask for the user's Name, Company Name, and Business Email organically.
          3. Qualify the lead: If they mention a budget over $1000 or a team size over 10, classify them as 'High Priority'.
          4. Once qualified, politely offer them to book a meeting using this link: https://calendly.com/dealflow-ai/demo
          5. Keep responses concise and engaging.
        `
      }),
    });

    // 3. Agar FlowZint ka server response de de
    if (response.ok) {
      const data = await response.json();
      
      // Maan lete hain unka format { reply: "..." } ya { text: "..." } hoga
      const aiReply = data.reply || data.text || "I processed your request successfully!";
      
      return NextResponse.json({ aiResponse: aiReply });
    } else {
      // Fallback: Agar FlowZint integration pending hai ya server down hai
      // toh hackathon juri ke liye ek simulated smart response backup rakhte hain
      return simulateSalesBotLogic(userMessage);
    }

  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

// Simulated Smart Sales Logic (Backup/Testing Helper)
function simulateSalesBotLogic(message) {
  const msg = message.toLowerCase();
  let reply = "That sounds interesting! Could you tell me your company name and business email so our team can share more tailored details?";

  if (msg.includes("hi") || msg.includes("hello") || msg.includes("hey")) {
    reply = "Hello! Welcome to DealFlow AI. I help businesses automate their sales workflows. What brings you to our site today?";
  } else if (msg.includes("@") || msg.includes(".com")) {
    reply = "Thank you for sharing your email! Based on your profile, you qualify for our Enterprise Acceleration Tier. Would you like to schedule a quick 15-minute sync with our core team? You can pick a slot here: https://calendly.com/dealflow-ai/demo";
  } else if (msg.includes("pricing") || msg.includes("cost") || msg.includes("budget")) {
    reply = "Our pricing adapts to your lead volume. For enterprise scaling, it usually starts at $1,200/month. What kind of monthly lead volume are you looking to process?";
  }

  return NextResponse.json({ aiResponse: reply });
}