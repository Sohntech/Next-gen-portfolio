'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useAudio } from '@/components/audio/audio-provider';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [hovering, setHovering] = useState(false);
  const { playSound } = useAudio();
  
  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [role="button"]');
      
      if (isHoverable !== null && !hovering) {
        setHovering(true);
        playSound('hover');
      } else if (isHoverable === null && hovering) {
        setHovering(false);
      }
      
      setHidden(false);
    };

    const handleMouseDown = () => {
      setClicked(true);
      playSound('click');
    };

    const handleMouseUp = () => {
      setClicked(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hovering, playSound]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <motion.div
        className="fixed left-0 top-0 z-50 pointer-events-none mix-blend-difference"
        style={{
          x: position.x - 6,
          y: position.y - 6,
        }}
        animate={{
          scale: clicked ? 0.7 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          scale: { type: 'spring', stiffness: 600, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <div className="w-3 h-3 bg-white rounded-full" />
      </motion.div>
      
      <motion.div
        className="fixed left-0 top-0 z-50 pointer-events-none mix-blend-difference"
        style={{
          x: position.x - 24,
          y: position.y - 24,
        }}
        animate={{
          scale: hovering ? 2 : 1,
          opacity: hidden ? 0 : hovering ? 0.4 : 0.2,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          opacity: { duration: 0.2 },
        }}
      >
        <div className="w-12 h-12 rounded-full border border-white/60" />
      </motion.div>
    </>
  );
}