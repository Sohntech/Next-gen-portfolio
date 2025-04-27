'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Volume2 } from 'lucide-react';

export function SoundPopup() {
  const [isVisible, setIsVisible] = useState(true);

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
            className="bg-card/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-md w-full mx-4 border border-primary/10"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            exit={{ y: 20 }}
          >
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
              Get ready for an interactive journey enhanced with carefully crafted sound design.
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