'use client';

import { useState } from 'react';

export default function TTSPage() {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateAudio = async () => {
    if (!text) {
      alert('Please enter text!');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch('/api/ggl-tts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text }),
      });

      // console.log(response)

      if (!response.ok) {
        throw new Error('Failed to generate audio');
      }

      const blob = await response.blob();
      const audioUrl = URL.createObjectURL(blob);

      // Mainkan audio
      const audio = new Audio(audioUrl);
      audio.play();
    } catch (error) {
      console.error('Error:', error);
      alert('Error generating audio');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <h1>Google TTS Demo</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to convert to speech"
        rows={5}
        className="textarea"
      />
      <button onClick={handleGenerateAudio} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Audio'}
      </button>

    </div>
  );
}
