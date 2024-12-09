import { NextRequest, NextResponse } from 'next/server';
import { PollyClient, SynthesizeSpeechCommand } from '@aws-sdk/client-polly';

const pollyClient = new PollyClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

export async function POST(req: NextRequest) {
  try {
    // Ambil data dari request body
    const { text, voiceId = 'Joanna', languageCode = 'en-US', speakingRate = 1.0 } = await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // Buat permintaan ke AWS Polly
    const command = new SynthesizeSpeechCommand({
      OutputFormat: 'mp3',
      Text: text,
      VoiceId: voiceId,
      LanguageCode: languageCode,
    });

    const response = await pollyClient.send(command);

    if (!response.AudioStream) {
      throw new Error('Failed to generate audio');
    }

    const audioBuffer = Buffer.from(await response.AudioStream.transformToByteArray());

    // Kirimkan file audio sebagai response
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
        'Content-Disposition': 'inline; filename="speech.mp3"',
      },
    });
  } catch (error) {
    console.error('AWS Polly Error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
