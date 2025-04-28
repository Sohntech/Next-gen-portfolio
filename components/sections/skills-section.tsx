'use client';

import { useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Smartphone, 
  Paintbrush, 
  Code, 
  Database, 
  Layout, 
  Terminal, 
  Figma,
  Server,
  Layers,
  Palette,
  LineChart,
  Flame,
  Github,
  ChevronRight
} from 'lucide-react';
import { MotionText } from '@/components/ui/motion-text';
import React from 'react';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Développement Frontend',
    icon: <Globe className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'JavaScript'],
    color: 'from-purple-500/20 to-fuchsia-400/20',
  },
  {
    title: 'Développement Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'NestJS', 'Firebase'],
    color: 'from-purple-500/20 to-fuchsia-400/20',
  },
  {
    title: 'Développement Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['Flutter', 'Swift', 'Firebase', 'Mobile UI Design'],
    color: 'from-purple-500/20 to-fuchsia-400/20',
  },
  {
    title: 'UI/UX Design',
    icon: <Paintbrush className="w-6 h-6" />,
    skills: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems'],
    color: 'from-purple-500/20 to-fuchsia-400/20',
  },
];

export function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
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
    <section id="skills" ref={sectionRef} className="py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Mes Compétences
          </motion.div>
          
          <MotionText
            text="Domaine d'application et technologies"
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
            Je suis un développeur passionné par la création d&apos;applications web et mobiles. 
            J&apos;utilise les dernières technologies pour offrir des solutions performantes et esthétiques.
          </motion.p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-6 bg-card rounded-xl glass"
        >
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <motion.span 
              initial={{ scale: 1 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className="inline-block mr-2"
            >
              🛠️
            </motion.span>
            Outils & Logiciels
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'VS Code', icon: <Code className="w-5 h-5" />, color: 'bg-blue-500' },
              { name: 'GitHub', icon: <Github className="w-5 h-5" />, color: 'bg-gray-800' },
              { name: 'Figma', icon: <Figma className="w-5 h-5" />, color: 'bg-purple-500' },
              { name: 'Terminal', icon: <Terminal className="w-5 h-5" />, color: 'bg-gray-900' },
              { name: 'MongoDB', icon: <Database className="w-5 h-5" />, color: 'bg-green-600' },
              { name: 'Docker', icon: <Layers className="w-5 h-5" />, color: 'bg-blue-600' },
              { name: 'Vercel', icon: <Server className="w-5 h-5" />, color: 'bg-black' },
              { name: 'CI/CD', icon: <Terminal className="w-5 h-5" />, color: 'bg-amber-600' },
              { name: 'Postman', icon: <Server className="w-5 h-5" />, color: 'bg-orange-500' },
              { name: 'Firebase', icon: <Flame className="w-5 h-5" />, color: 'bg-yellow-500' },
            ].map((tool, i) => (
              <ToolItem key={i} tool={tool} index={i} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface SkillCardProps {
  category: SkillCategory;
  index: number;
}

function SkillCard({ category, index }: SkillCardProps) {
  const [hovered, setHovered] = React.useState(false);

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
    <motion.div
      variants={itemVariants}
      className={`bg-card rounded-xl p-6 glass relative overflow-hidden transition-all duration-500 
                border border-transparent hover:border-primary/20`}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ 
        y: -5, 
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }}
    >
      {/* Background gradient effect */}
      <motion.div 
        className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0`}
        animate={{ opacity: hovered ? 0.4 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Shine effect */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0"
        initial={{ x: "-100%" }}
        animate={{ x: hovered ? "100%" : "-100%", opacity: hovered ? 0.7 : 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />
      
      <div className="flex items-center gap-4 mb-4 relative z-10">
        <motion.div 
          className="p-3 rounded-lg bg-primary/10 text-primary relative overflow-hidden"
          whileHover={{ 
            scale: 1.1,
            backgroundColor: "var(--primary)",
            color: "white",
          }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
          <motion.div
            initial={{ rotate: 0 }}
            animate={hovered ? { rotate: 360 } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {category.icon}
          </motion.div>
          
          {/* Pulsing circle effect */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ scale: 0.8, opacity: 0.8 }}
                animate={{ scale: 1.5, opacity: 0 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute inset-0 bg-primary rounded-lg"
                style={{ zIndex: -1 }}
              />
            )}
          </AnimatePresence>
        </motion.div>
        
        <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
          {category.title}
        </h3>
        
        <motion.div 
          className="ml-auto opacity-0"
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </motion.div>
      </div>
      
      <div className="flex flex-wrap gap-2 relative z-10">
        {category.skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-secondary px-3 py-1 rounded-full text-sm relative overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "var(--primary)",
              color: "white",
            }}
            transition={{ 
              type: "spring", 
              stiffness: 500, 
              damping: 20,
              delay: 0.03 * i 
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                delay: hovered ? 0.05 * i : 0.05 * i,
                duration: 0.3
              }
            }}
          >
            {skill}
            
            {/* Subtle shine effect on skills */}
            <motion.div
              className="absolute inset-0 bg-transparent"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

interface ToolItemProps {
  tool: {
    name: string;
    icon: React.ReactNode;
    color: string;
  };
  index: number;
}

function ToolItem({ tool, index }: ToolItemProps) {
  return (
    <motion.div
      className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-300 relative overflow-hidden group"
      whileHover={{ 
        scale: 1.05,
        transition: { 
          type: "spring", 
          stiffness: 400, 
          damping: 17 
        }
      }}
    >
      {/* Colored circle effect on hover */}
      <motion.div
        className={`absolute left-0 top-0 w-full h-full ${tool.color} opacity-0 rounded-lg`}
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Icon container */}
      <motion.div
        className="relative"
        whileHover={{ 
          rotate: [0, -10, 10, -5, 5, 0], 
          transition: { duration: 0.5 } 
        }}
      >
        {tool.icon}
        
        {/* Icon glow effect */}
        <motion.div
          className="absolute inset-0 bg-white rounded-full blur-md opacity-0"
          whileHover={{ opacity: 0.3, scale: 1.2 }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      
      {/* Text with slide animation */}
      <motion.span 
        className="text-sm relative z-10"
        initial={{ x: 0 }}
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        {tool.name}
      </motion.span>
    </motion.div>
  );
}