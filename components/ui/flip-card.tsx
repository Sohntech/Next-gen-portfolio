'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Hint } from '@/components/ui/hint';

interface FlipCardProps {
  frontImage: string;
  qrCodeImage: string;
  alt: string;
}

export function FlipCard({ frontImage, qrCodeImage, alt }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="relative group cursor-pointer perspective">
      <motion.div
        className="relative preserve-3d duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front */}
        <div className="relative backface-hidden">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={frontImage}
              alt={alt}
              width={400}
              height={400}
              className="w-full object-cover aspect-[1/1]"
              priority
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <Hint text="Click to reveal QR Code" side="bottom">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <motion.div
                  className="w-6 h-6 border-2 border-primary rounded"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>
          </Hint>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <div className="rounded-2xl overflow-hidden h-full bg-card p-8 flex items-center justify-center">
            <Image
              src={qrCodeImage}
              alt="QR Code"
              width={300}
              height={300}
              className="w-full  h-auto"
              priority
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}