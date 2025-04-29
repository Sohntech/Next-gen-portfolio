'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HintProps {
  children: React.ReactNode;
  text: string;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  sideOffset?: number;
}

export function Hint({
  children,
  text,
  side = 'bottom',
  align = 'center',
  sideOffset = 8,
}: HintProps) {
  const [isVisible, setIsVisible] = React.useState(false);

  const directions = {
    top: { y: -sideOffset },
    bottom: { y: sideOffset },
    left: { x: -sideOffset },
    right: { x: sideOffset },
  };

  const alignments = {
    start: 'start',
    center: 'center',
    end: 'end',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className={`
              absolute z-50 px-3 py-2 text-sm
              bg-background/80 backdrop-blur-sm
              border border-border rounded-md shadow-md
              whitespace-nowrap pointer-events-none
              ${side === 'top' ? 'bottom-full' : ''}
              ${side === 'bottom' ? 'top-full' : ''}
              ${side === 'left' ? 'right-full' : ''}
              ${side === 'right' ? 'left-full' : ''}
              ${align === 'start' ? 'origin-top-left' : ''}
              ${align === 'center' ? 'left-1/2 -translate-x-1/2' : ''}
              ${align === 'end' ? 'right-0' : ''}
            `}
            initial={{ opacity: 0, scale: 0.96, ...directions[side] }}
            animate={{ opacity: 1, scale: 1, ...directions[side] }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.15 }}
          >
            {text}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}