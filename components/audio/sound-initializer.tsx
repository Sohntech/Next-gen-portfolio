'use client';

import { useEffect } from 'react';
import { useAudio } from './audio-provider';

export function SoundInitializer() {
  const { playSound } = useAudio();

  useEffect(() => {
    const initSound = () => {
      playSound('click');
      document.removeEventListener('click', initSound);
    };

    document.addEventListener('click', initSound);
    return () => document.removeEventListener('click', initSound);
  }, [playSound]);

  return null;
}