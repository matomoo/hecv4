import { NextRequest, NextResponse } from 'next/server';
import { TextToSpeechClient } from '@google-cloud/text-to-speech';
import { promises as fs } from 'fs';
import path from 'path';

// Konfigurasi Client Google TTS
const client = new TextToSpeechClient({
  keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS! //path.resolve('./keys/tts-key.json'), // Pastikan file ini aman!
});

// Fungsi API
export async function POST(req: NextRequest) {
  try {
    // Baca data dari request body
    const { text, languageCode = 'id-ID', voiceName = 'id-ID-Wavenet-A', speakingRate = 1.0 } =
      await req.json();

    if (!text) {
      return NextResponse.json({ error: 'Text is required' }, { status: 400 });
    }

    // Konfigurasi permintaan TTS
    const request: any = {
      input: { text },
      voice: {
        languageCode,
        name: voiceName,
      },
      audioConfig: {
        audioEncoding: 'MP3',
        speakingRate,
      },
    };

    // Memanggil API Google TTS
    const [response] = await client.synthesizeSpeech(request);

    // Simpan file audio sementara ${Date.now()}
    const tempFilePath = path.join('public/tmp', `gtts.mp3`);
    await fs.writeFile(tempFilePath, response.audioContent!, 'binary');

    // Kirimkan response file audio ke client
    const audioBuffer = await fs.readFile(tempFilePath);
    return new NextResponse(audioBuffer, {
      headers: {
        'Content-Type': 'audio/mpeg',
      },
    });
  } catch (error) {
    console.error('Error with Google TTS API:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}
