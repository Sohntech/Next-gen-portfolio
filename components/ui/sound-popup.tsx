'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

export function SoundPopup() {
  const [isVisible, setIsVisible] = useState(true);
  const duration = 5; // duration in seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9, y: -20 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="fixed inset-0 flex items-center justify-center z-[9999] backdrop-blur-sm bg-black/20"
        >
          <motion.div 
            className="relative bg-card/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-primary/10 overflow-hidden"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
            {/* Progress bar */}
            <motion.div 
              className="absolute bottom-0 left-0 h-1 bg-primary/50"
              initial={{ width: "100%" }}
              animate={{ width: "0%" }}
              transition={{ duration, ease: "linear" }}
            />

            {/* Existing content */}
            <motion.div 
              className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Volume2 className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h2 className="text-2xl font-bold text-center mb-4">
              Immersive Sound Experience
            </h2>
            
            <p className="text-muted-foreground text-center mb-6">
              Cliquez n&apos;importe où sur le site pour activer le son et profiter d&apos;une expérience immersive.
            </p>
            
            <motion.button
              className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleClose}
            >
              Begin Experience
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}