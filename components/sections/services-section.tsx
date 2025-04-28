'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { services } from '@/lib/data/services';
import { MotionText } from '@/components/ui/motion-text';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { useAudio } from '@/components/audio/audio-provider';

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Mes Services
          </motion.div>
          
          <MotionText
            text="Des solutions sur mesure pour vos besoins numériques"
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
           Je suis un développeur passionné par la création d&apos;expériences numériques uniques et engageantes. Voici quelques-uns des services que je propose.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            
            return (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-card rounded-xl p-6 hover:shadow-xl transition-all duration-500 glass"
                whileHover={{ y: -5 }}
              >
                <div className={`p-3 rounded-lg bg-primary/10 ${service.color} w-fit mb-6`}>
                  <div className="w-6 h-6">
                    <Icon />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                
                <Button 
                  variant="ghost" 
                  className="mt-2 text-primary group"
                  onClick={() => playSound('click')}
                >
                  En savoir plus
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>
            );
          })}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
            <p className="text-muted-foreground mb-6">
            Besoin d'une solution personnalisée pour votre projet ?
            </p>
          <Button 
            size="lg"
            className="rounded-full group"
            onClick={() => {
              playSound('click');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Contactez-moi
            <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}