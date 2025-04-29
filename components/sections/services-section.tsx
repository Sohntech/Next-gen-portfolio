'use client';

import { useRef, useState } from 'react';
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
              <ServiceCard 
                key={service.id} 
                service={service} 
                Icon={Icon} 
                playSound={playSound}
                variants={itemVariants}
              />
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
            Besoin d&apos;une solution personnalisée pour votre projet ?
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

// Composant de carte de service avec effet néon
const ServiceCard = ({ service, Icon, playSound, variants }: { service: { color: string; title: string; description: string; }, Icon: React.ComponentType, playSound: (sound: string) => void, variants: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Couleurs néon mapping
  const neonColors = {
    "text-blue-500": "shadow-blue-500/50 from-blue-500 to-cyan-400",
    "text-purple-500": "shadow-purple-500/50 from-purple-500 to-pink-500",
    "text-orange-500": "shadow-orange-500/50 from-orange-500 to-amber-400",
    "text-green-500": "shadow-green-500/50 from-green-500 to-emerald-400",
    "text-red-500": "shadow-red-500/50 from-red-500 to-rose-400",
    "text-yellow-500": "shadow-yellow-500/50 from-yellow-500 to-amber-300",
    // Couleur par défaut si aucune correspondance
    "default": "shadow-primary/50 from-primary to-violet-400"
  };
  
  // Obtenir la couleur néon correspondante ou utiliser la valeur par défaut
  const neonColor = neonColors[service.color as keyof typeof neonColors] || neonColors.default;
  
  return (
    <motion.div
      variants={variants}
      className="relative group"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Card content */}
      <div className="bg-card rounded-xl p-6 transition-all duration-500 glass relative z-10 h-full">
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
      </div>
      
      {/* Glowing border overlay */}
      <div className="absolute inset-0 rounded-xl overflow-hidden">
        {/* Top néon border */}
        <motion.div 
          className={`absolute top-0 left-0 h-[2px] bg-gradient-to-r ${neonColor} `}
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: isHovered ? 0.4 : 0.2, ease: "easeInOut" }}
        />
        
        {/* Right néon border */}
        <motion.div 
          className={`absolute top-0 right-0 w-[2px] bg-gradient-to-b ${neonColor} blur-[2px]`}
          initial={{ height: "0%" }}
          animate={isHovered ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: isHovered ? 0.4 : 0.2, ease: "easeInOut", delay: isHovered ? 0.4 : 0 }}
        />
        
        {/* Bottom néon border */}
        <motion.div 
          className={`absolute bottom-0 right-0 h-[2px] bg-gradient-to-l ${neonColor} blur-[2px]`}
          initial={{ width: "0%" }}
          animate={isHovered ? { width: "100%" } : { width: "0%" }}
          transition={{ duration: isHovered ? 0.4 : 0.2, ease: "easeInOut", delay: isHovered ? 0.8 : 0 }}
        />
        
        {/* Left néon border */}
        <motion.div 
          className={`absolute bottom-0 left-0 w-[2px] bg-gradient-to-t ${neonColor} blur-[2px]`}
          initial={{ height: "0%" }}
          animate={isHovered ? { height: "100%" } : { height: "0%" }}
          transition={{ duration: isHovered ? 0.4 : 0.2, ease: "easeInOut", delay: isHovered ? 1.2 : 0 }}
        />
        
        {/* Subtle glow effect */}
        <motion.div
          className={`absolute inset-0 rounded-xl opacity-0 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)] transition-opacity duration-500`}
          animate={{ opacity: isHovered ? 1 : 0 }}
        />
      </div>
    </motion.div>
  );
};