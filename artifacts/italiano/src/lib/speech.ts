/**
 * Utility to safely use the Web Speech API to pronounce Italian words.
 */
export const speakItalian = (word: string) => {
  if (!('speechSynthesis' in window)) {
    console.warn("Speech Synthesis is not supported in this browser.");
    return;
  }

  // Cancel any currently playing speech to ensure immediate playback of new word
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(word);
  
  // Set language to Italian
  utterance.lang = 'it-IT';
  
  // Make it slightly slower and higher pitched for a more educational/playful tone
  utterance.rate = 0.85;
  utterance.pitch = 1.1;

  // Speak
  window.speechSynthesis.speak(utterance);
};
