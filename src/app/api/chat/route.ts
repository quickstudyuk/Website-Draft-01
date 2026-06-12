import { NextResponse } from "next/server";

// Helper to sanitize message roles for Gemini ('assistant' -> 'model')
function formatMessagesForGemini(messages: { role: string; content: string }[]) {
  return messages.map(msg => ({
    role: msg.role === "assistant" ? "model" : "user",
    parts: [{ text: msg.content }]
  }));
}

const SYSTEM_INSTRUCTION = `You are "QS Chatbot", a friendly, knowledgeable, and engaging AI assistant for QuickStudy.
Your goals:
1. Answer questions about QuickStudy, online tutoring, exam prep, studying in general, and the subjects we cover (Maths, Sciences, English at GCSE and A-Level).
2. Maintain a professional, premium, encouraging, and clear tone. Keep your responses relatively concise (1-3 short paragraphs max) so they are easy to read in a chat widget.
3. Your ultimate priority is to persuade parents/users to sign up for a FREE consultation. You should highlight that consultations include guide recommendations and a free 1:1 trial lesson.
4. Once the user is interested in a consultation or trial, or asks how to get started, ask them to book it. You can tell them to use the interactive form in this chat window or politely ask them to share their Name and Phone Number right here, which you will register.
5. If they provide their name and contact number directly in the text chat, say: "Thank you! I have saved your details. A team member will contact you shortly at that number." and we will capture it.
6. The price of sessions is £18, with no hidden fees, no long contracts, and full QLE access included.`;

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: "Invalid messages array" }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (apiKey) {
      // Call official Gemini API
      const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;

      const formattedContents = formatMessagesForGemini(messages);

      const payload = {
        contents: formattedContents,
        systemInstruction: {
          parts: [{ text: SYSTEM_INSTRUCTION }]
        },
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      };

      const response = await fetch(geminiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Gemini API error response:", errorText);
        throw new Error(`Gemini API error: ${response.statusText}`);
      }

      const data = await response.json();
      const aiResponseText = data.candidates?.[0]?.content?.parts?.[0]?.text || "";

      return NextResponse.json({ text: aiResponseText });
    } else {
      // Local Mock Responder if no API key is configured
      const latestMessage = messages[messages.length - 1]?.content || "";
      const text = latestMessage.toLowerCase();
      let reply = "";

      if (text.includes("pricing") || text.includes("cost") || text.includes("fee") || text.includes("price") || text.includes("how much")) {
        reply = "Our pricing is completely transparent! Every 1:1 online tutoring session is **£18 per session**. This includes not just the lesson itself, but also full 24/7 access to the QuickStudy Learning Environment (QLE) with automatic AI lesson summaries, active-recall quizzes, and lesson recordings. There are no lock-in contracts or long-term commitments.\n\nWould you like me to register you for a free consultation and a free trial lesson?";
      } else if (text.includes("tutor") || text.includes("teacher") || text.includes("staff") || text.includes("who")) {
        reply = "At QuickStudy, we rigorously vet our tutors for subject expertise, teaching capabilities, and their ability to build student confidence. They are matched carefully based on your child's Learning Profile diagnostic results.\n\nWe offer a **free consultation** where we discuss your child's needs and recommend a perfect tutor. Would you like me to book one for you?";
      } else if (text.includes("qle") || text.includes("recording") || text.includes("platform") || text.includes("system")) {
        reply = "The QuickStudy Learning Environment (QLE) is our proprietary online platform. After every lesson, it automatically hosts the recording for student revision and parent transparency. It also uses AI to generate bite-sized summaries, custom active-recall revision quizzes, and tracks your child's confidence scores week-by-week.\n\nIt is included free with our £18/session tutoring. I'd love to show you how it works during a free consultation. May I get your name and phone number to arrange one?";
      } else if (text.includes("subject") || text.includes("math") || text.includes("science") || text.includes("english") || text.includes("physics") || text.includes("chemistry") || text.includes("biology")) {
        reply = "We offer high-quality 1:1 support for GCSE and A-Level subjects, including Mathematics, Chemistry, Physics, Biology, English Literature/Language, and Combined Sciences. Our curriculum roadmaps are tailored to your student's specific exam board (AQA, Edexcel, OCR, etc.).\n\nTo find the best support for your child, I can schedule a free consultation with a academic advisor. Would you like to proceed?";
      } else if (text.includes("consultation") || text.includes("book") || text.includes("start") || text.includes("trial") || text.includes("register") || text.includes("sign up")) {
        reply = "Excellent choice! A free consultation is the best way to start. It helps us understand your child's learning style and match them with the perfect tutor. \n\nPlease fill out the **consultation form** directly in this chat window, or just reply here with your **Name** and **Contact Number** so a team member can reach out!";
      } else if (text.includes("hello") || text.includes("hi") || text.includes("hey")) {
        reply = "Hello! I'm the **QS Chatbot**. I'm here to help answer any questions you have about QuickStudy, our £18/session online tutoring, or studying in general.\n\nWe also offer a free parent consultation and a free trial session for your child. How can I help you today?";
      } else {
        // Fallback generic response that prompts for consultation
        reply = "That's a great question! QuickStudy is designed as a complete learning system to build confidence and bridge academic gaps through expert 1:1 tutoring and AI study tools.\n\nTo get specific recommendations for your child, I highly recommend scheduling a **free consultation** and a **free trial lesson**. Would you like me to set that up? You can share your name and contact number here!";
      }

      // Add delay simulation on the client side
      return NextResponse.json({ text: reply });
    }
  } catch (error: any) {
    console.error("Chat API error:", error);
    return NextResponse.json({ error: "Failed to process chat message" }, { status: 500 });
  }
}
