'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences, education } from '@/lib/data/experiences';
import { MotionText } from '@/components/ui/motion-text';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from '@/components/ui/tabs';
import { useAudio } from '@/components/audio/audio-provider';

export function ExperienceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const { playSound } = useAudio();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };
  
  return (
    <section id="experience" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Mon Parcours
          </motion.div>
          
          <MotionText
            text="Mon expérience professionnelle et académique"
            el="h2"
            className="text-3xl md:text-5xl font-bold mb-6"
            once={true}
            delay={0.2}
          />
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground text-lg"
          >
            Découvrez mon parcours professionnel et académique, 
            mettant en avant mes expériences et mes compétences.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Tabs defaultValue="experience" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger 
                value="experience" 
                className="text-lg py-3 data-[state=active]:bg-primary transition-colors"
                onClick={() => playSound('click')}
              >
                Experience
              </TabsTrigger>
              <TabsTrigger 
                value="education" 
                className="text-lg py-3 data-[state=active]:bg-primary transition-colors"
                onClick={() => playSound('click')}
              >
                Education
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="experience">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="space-y-10"
              >
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary/30"
                  >
                    <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                    
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-2">
                      {exp.period}
                    </span>
                    
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-primary font-medium mb-2">{exp.company}</p>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="bg-secondary/60 px-2 py-1 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            
            <TabsContent value="education">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-10"
              >
                {education.map((edu) => (
                  <motion.div
                    key={edu.id}
                    variants={itemVariants}
                    className="relative pl-8 border-l-2 border-primary/30"
                  >
                    <div className="absolute left-[-10px] top-0 w-5 h-5 bg-primary rounded-full border-4 border-background" />
                    
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-2">
                      {edu.period}
                    </span>
                    
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <p className="text-primary font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}