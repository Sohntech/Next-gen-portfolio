'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis';
import { useSoundStore } from '@/lib/stores/sound-store';

export function LenisProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const { setScrolling } = useSoundStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const lenisInstance = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let lastScrollPosition = 0;
    let rafId: number | null = null;

    const scrollCallback = ({ scroll }: { scroll: number }) => {
      const isScrolling = Math.abs(scroll - lastScrollPosition) > 0.5;
      setScrolling(isScrolling);
      lastScrollPosition = scroll;
    };

    const raf = (time: number) => {
      lenisInstance.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    lenisInstance.on('scroll', scrollCallback);
    rafId = requestAnimationFrame(raf);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      lenisInstance.destroy();
    };
  }, [mounted, setScrolling]);

  if (!mounted) {
    return null;
  }

  return children;
}