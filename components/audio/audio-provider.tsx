'use client';

import { useEffect, ReactNode, createContext, useContext, useState } from 'react';
import { Howl, HowlOptions, Howler } from 'howler';
import { useSoundStore } from '@/lib/stores/sound-store';

type AudioContextType = {
  playSound: (name: string) => void;
  stopSound: (name: string) => void;
  toggleMute: () => void;
  isMuted: boolean;
};

const defaultContext: AudioContextType = {
  playSound: () => {},
  stopSound: () => {},
  toggleMute: () => {},
  isMuted: false,
};

const AudioContext = createContext<AudioContextType>(defaultContext);

export const useAudio = () => useContext(AudioContext);

const sounds = {
  hover: {
    src: ['/sounds/hover.mp3'],
    volume: 0.1,
    preload: true,
  },
  click: {
    src: ['/sounds/click.mp3'],
    volume: 0.1,
    preload: true,
  },
  ambient: {
    src: ['/sounds/ambient.mp3'],
    volume: 0.05,
    loop: true,
    preload: true,
  },
  transition: {
    src: ['/sounds/transition.mp3'],
    volume: 0.15,
    preload: true,
  },
  scroll: {
    src: ['/sounds/scroll.mp3'],
    volume: 0.05,
    preload: true,
  },
};

// Move howls outside component to persist between renders
const howls = new Map<string, Howl>();

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isAudioInitialized, setIsAudioInitialized] = useState(false);
  const { soundEnabled, setSoundEnabled, isScrolling } = useSoundStore();

  // Initialize Howler and sounds immediately
  useEffect(() => {
    const initializeAudio = () => {
      if (!isAudioInitialized && howls.size === 0) {
        // Resume AudioContext
        if (Howler.ctx && Howler.ctx.state !== 'running') {
          Howler.ctx.resume();
        }

        // Initialize sounds
        Object.entries(sounds).forEach(([name, options]) => {
          const sound = new Howl(options as HowlOptions);
          howls.set(name, sound);
        });

        setIsAudioInitialized(true);
      }
    };

    initializeAudio();
  }, [isAudioInitialized]);

  // Play ambient sound after initialization
  useEffect(() => {
    if (isAudioInitialized && soundEnabled) {
      const ambient = howls.get('ambient');
      if (ambient && !ambient.playing()) {
        ambient.play();
      }
    }
  }, [isAudioInitialized, soundEnabled]);

  // Handle scroll sound
  useEffect(() => {
    if (soundEnabled && isScrolling) {
      const scrollSound = howls.get('scroll');
      if (scrollSound && !scrollSound.playing()) {
        scrollSound.play();
      }
    }
  }, [isScrolling, soundEnabled]);

  const playSound = (name: string) => {
    if (!soundEnabled) return;
    
    const sound = howls.get(name);
    if (sound) {
      // Stop any currently playing instance of this sound
      sound.stop();
      // Play new instance
      sound.play();
    }
  };

  const stopSound = (name: string) => {
    const sound = howls.get(name);
    if (sound) {
      sound.stop();
    }
  };

  const toggleMute = () => {
    const newState = !soundEnabled;
    setSoundEnabled(newState);
    
    // Handle ambient sound
    const ambient = howls.get('ambient');
    if (ambient) {
      if (newState && !ambient.playing()) {
        ambient.play();
      } else if (!newState && ambient.playing()) {
        ambient.stop();
      }
    }
  };

  return (
    <AudioContext.Provider
      value={{
        playSound,
        stopSound,
        toggleMute,
        isMuted: !soundEnabled,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}