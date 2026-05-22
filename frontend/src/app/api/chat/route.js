import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { userMessage } = await request.json();

    // Groq API Key
    const GROQ_API_KEY = process.env.GROQ_API_KEY;

    // Call Groq API
    const response = await fetch(
      'https://api.groq.com/openai/v1/chat/completions',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${GROQ_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',

          messages: [
            {
              role: 'system',
              content: `
                You are DealFlow AI, an expert B2B Sales Agent.
                Your Name is Nikita. You help businesses generate qualified leads by engaging website visitors in a friendly and professional manner.

                Your goals are:
                1. Be professional, warm, and helpful.
                2. Ask for the user's Name, Company Name, and Business Email organically.
                3. Qualify the lead.
                4. Offer meeting booking when qualified.
                5. Keep responses concise and engaging.
              `
            },
            {
              role: 'user',
              content: userMessage
            }
          ],

          temperature: 0.7,
          max_tokens: 300
        }),
      }
    );

    // If API works
    if (response.ok) {
      const data = await response.json();

      const aiReply =
        data.choices?.[0]?.message?.content ||
        "I processed your request successfully!";

      return NextResponse.json({
        aiResponse: aiReply
      });
    }

    // Backup fallback
    return simulateSalesBotLogic(userMessage);

  } catch (error) {
    console.error("API Error:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Backup Logic
function simulateSalesBotLogic(message) {
  const msg = message.toLowerCase();

  let reply =
    "That sounds interesting! Could you tell me your company name and business email?";

  if (
    msg.includes("hi") ||
    msg.includes("hello") ||
    msg.includes("hey")
  ) {
    reply =
      "Hello! Welcome to DealFlow AI. How can I help your business today?";
  }
  else if (
    msg.includes("@") ||
    msg.includes(".com")
  ) {
    reply =
      "Thank you! You qualify for our enterprise plan. Book a demo here: https://calendly.com/dealflow-ai/demo";
  }
  else if (
    msg.includes("pricing") ||
    msg.includes("cost")
  ) {
    reply =
      "Our enterprise plans start from $1200/month depending on lead volume.";
  }

  return NextResponse.json({
    aiResponse: reply
  });
}