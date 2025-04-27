'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, VolumeX } from 'lucide-react';
import { useAudio } from '@/components/audio/audio-provider';
import { motion, AnimatePresence } from 'framer-motion';

export function SoundToggle() {
  const { isMuted, toggleMute, playSound } = useAudio();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full relative"
      onClick={() => {
        toggleMute();
        playSound('click');
      }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isMuted ? (
          <motion.div
            key="muted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <VolumeX className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div
            key="unmuted"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
          >
            <Volume2 className="w-5 h-5" />
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-foreground/20"
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Button>
  );
}