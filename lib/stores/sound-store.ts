import { create } from 'zustand';

interface SoundStore {
  soundEnabled: boolean;
  setSoundEnabled: (enabled: boolean) => void;
  isScrolling: boolean;
  setScrolling: (scrolling: boolean) => void;
}

export const useSoundStore = create<SoundStore>((set) => ({
  soundEnabled: true, // Set default to true
  setSoundEnabled: (enabled) => set({ soundEnabled: enabled }),
  isScrolling: false,
  setScrolling: (scrolling) => set({ isScrolling: scrolling }),
}));