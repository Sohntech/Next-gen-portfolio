'use client';

import { useRef, ElementType } from 'react';
import { motion, useInView } from 'framer-motion';

type MotionTextProps = {
  text: string;
  el?: ElementType;
  className?: string;
  once?: boolean;
  delay?: number;
  speed?: number;
};

export function MotionText({
  text,
  el = 'h1',
  className = '',
  once = true,
  delay = 0,
  speed = 0.05,
}: MotionTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once });
  
  const animatedText = text.split(' ').map((word, i) => {
    const wordDelay = delay + i * speed;
    
    return (
      <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
        <motion.span
          className="inline-block"
          initial={{ y: '100%' }}
          animate={isInView ? { y: 0 } : { y: '100%' }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
            delay: wordDelay,
          }}
        >
          {word}
        </motion.span>
      </span>
    );
  });
  
  const Component = el;
  
  return (
    <div ref={ref}>
      <Component className={className}>
        {animatedText}
      </Component>
    </div>
  );
}