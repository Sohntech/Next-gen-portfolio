'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import { MotionText } from '@/components/ui/motion-text';
import { useAudio } from '@/components/audio/audio-provider';
import { SoundPopup } from '@/components/ui/sound-popup';

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { playSound } = useAudio();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  
  const handleExploreClick = () => {
    playSound('click');
    const aboutSection = document.getElementById('about');
    aboutSection?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <>
      <SoundPopup />
      <motion.section 
        ref={containerRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, y, scale }}
      >
        <div className="container mx-auto px-4 text-center z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-8 inline-block"
          >
         
          </motion.div>
        
          <div className="max-w-8xl mx-auto mt-8  mb-8">
            <MotionText
              text="Bienvenue sur le"
              className="text-balance font-basement"
            />
             <MotionText
              text="PORTFOLIO"
              className=" text-balance bg-gradient-to-r from-purple-800 to-pink-600 bg-clip-text text-transparent font-basement"
            />
             <MotionText
              text="de Sohntech !"
              className=" text-balance font-basement"
            />
          
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="text-muted-foreground text-lg md:text-xl mb-8 max-w-2xl mx-auto text-pretty"
            >
              Je crée des expériences numériques belles, fonctionnelles et accessibles
              qui combinent technologie de pointe et design réfléchi.
            </motion.p>
          
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button
                size="lg"
                className="group"
                onClick={handleExploreClick}
              >
                Découvrez 
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
            
              <div className="flex items-center gap-4 mt-6 sm:mt-0">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => {
                    playSound('click');
                    window.open('https://github.com/Sohntech', '_blank');
                  }}
                >
                  <Github className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-full"
                  onClick={() => {
                    playSound('click');
                    window.open('https://www.linkedin.com/in/ndiaga-l-4a7581139/', '_blank');
                  }}
                >
                  <Linkedin className="h-5 w-5" />
                </Button>
              </div>
            </motion.div>
          </div>
        
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.5, 0] }}
            transition={{ 
              repeat: Infinity,
              duration: 2,
              delay: 2,
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}