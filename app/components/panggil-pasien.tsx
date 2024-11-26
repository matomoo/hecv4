import { Schema_getByDate__reg_periksa } from "../schema/antrianPoliSchema";

export const speakNamaPasien = (record: any, room: string): void => {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const jk = record.jk === 'P' ? 'Ibu ' : 'Bapak '
    const newName = record.nm_pasien.replace(" DG ", " Daeng ")
    const utterance = new SpeechSynthesisUtterance(`${jk} ${newName}, silahkan ke ruang ${room}.`);

    // Set voice to Indonesian if available
    const voices = speechSynthesis.getVoices();
    const indonesianVoice = voices.find((voice) => voice.name === 'Microsoft Gadis Online (Natural) - Indonesian (Indonesia)');
    console.log(voices)
    console.log(indonesianVoice)
    if (indonesianVoice) {
      utterance.voice = indonesianVoice;
      utterance.lang = 'id-ID';
      utterance.pitch = 1
      utterance.rate = 1
    }

    speechSynthesis.speak(utterance);
  } else {
    console.warn('Speech Synthesis is not supported in this environment.');
  }
};
