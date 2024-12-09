import { Schema_getByDate__reg_periksa } from "../schema/antrianPoliSchema";

export const GooSpeech = async (record: any, room: string): Promise<void> => {
  const jk = record.jk === 'P' ? 'Ibu ' : 'Bapak ';
  const newName = record.nm_pasien.replace(" DG ", " Daeng ");
  const textToSpeak = `${jk} ${newName}, silahkan ke ruang ${room}.`;

  try {
    // Kirim teks ke API ggl-tts
    const response = await fetch('/api/ggl-tts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: textToSpeak }),
    });

    if (!response.ok) {
      throw new Error('Failed to generate audio from API');
    }

    // Ambil respons audio (blob)
    const blob = await response.blob();
    const audioUrl = URL.createObjectURL(blob);

    // Putar audio menggunakan elemen audio
    const audio = new Audio(audioUrl);
    audio.play();
  } catch (error) {
    console.error('Error:', error);
    alert('Error generating or playing audio');
  }
};
