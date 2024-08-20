import { NextResponse } from 'next/server';
import Together from 'together-ai';

const systemPrompt = `
You are a flashcard creator, you take in text and create multiple flashcards from it. Make sure to create exactly 10 flashcards.
Both front and back should be one sentence long.
You should return in the following JSON format properly and validly:
{
  "flashcards":[
    {
      "front": "Front of the card",
      "back": "Back of the card"
    }
  ]
}
`;

export async function POST(req) {
  try {
    const { text } = await req.json();  // Parse the incoming request as JSON

    // Create a Together instance
    const together = new Together({
      baseURL: "https://api.together.xyz/v1",
      apiKey: process.env.TOGETHER_API_KEY,
      defaultHeaders: {
        "HTTP-Referer": 'http://localhost:3000/', // Optional
      }
    });

    // Debugging: Check if the Together instance is correctly instantiated
    console.log('Together instance:', together);

    // Ensure chat and completions are defined
    if (!together.chat || !together.chat.completions) {
      throw new Error('Together chat or completions method is not defined.');
    }

    const completion = await together.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: text },
      ],
      model: 'meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo',
      stream: true, // Enable streaming for more consistent response handling
    });

    // Create a ReadableStream to handle the streaming response
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          // Iterate over the streamed chunks of the response
          for await (const chunk of completion) {
            const content = chunk.choices[0]?.delta?.content;
            if (content) {
              const text = encoder.encode(content);
              controller.enqueue(text);
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return new NextResponse(stream);

  } catch (error) {
    console.error('Error generating flashcards:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
