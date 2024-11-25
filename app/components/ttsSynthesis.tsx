'use client';

import { useState } from 'react';

const SpeechSynthesizer: React.FC = () => {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);

  useState(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      const loadVoices = () => {
        const availableVoices = speechSynthesis.getVoices();
        setVoices(availableVoices);
        // Microsoft Ardi Online (Natural) - Indonesian (Indonesia)
        // Microsoft Gadis Online (Natural) - Indonesian (Indonesia)
        const indonesianVoice = availableVoices.find((v) => v.name === 'Microsoft Gadis Online (Natural) - Indonesian (Indonesia)');
        setVoice(indonesianVoice || null);
      };

      loadVoices();

      if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = loadVoices;
      }
    }
  });

  console.log(voices)

  const handleSpeak = () => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      if (!voice) {
        alert('Indonesian voice not available on your device.');
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.lang = 'id-ID';
      utterance.pitch = 1
      utterance.rate = 1
      speechSynthesis.speak(utterance);
    } else {
      alert('Speech Synthesis is not supported in your browser.');
    }
  };

  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Masukkan teks untuk diucapkan"
        className="textarea"
        rows={4}
        cols={50}
      />
      <br />
      <button onClick={handleSpeak} disabled={!text}>
        Ucapkan
      </button>
    </div>
  );
};

export default SpeechSynthesizer;
