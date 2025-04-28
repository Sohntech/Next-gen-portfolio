'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
  Github
} from 'lucide-react';
import { MotionText } from '@/components/ui/motion-text';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Développement Frontend',
    icon: <Globe className="w-6 h-6" />,
    skills: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'HTML/CSS', 'JavaScript'],
  },
  {
    title: 'Développement Backend',
    icon: <Server className="w-6 h-6" />,
    skills: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'NestJS', 'Firebase'],
  },
  {
    title: 'Développement Mobile',
    icon: <Smartphone className="w-6 h-6" />,
    skills: ['Flutter', 'Swift', 'Firebase', 'Mobile UI Design'],
  },
  {
    title: 'UI/UX Design',
    icon: <Paintbrush className="w-6 h-6" />,
    skills: ['Figma', 'UI Design', 'UX Research', 'Wireframing', 'Prototyping', 'Design Systems'],
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
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card rounded-xl p-6 glass hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div key={i} className="bg-secondary px-3 py-1 rounded-full text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 p-6 bg-card rounded-xl glass"
        >
          <h3 className="text-xl font-bold mb-4">Outils & Logiciels</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: 'VS Code', icon: <Code className="w-5 h-5" /> },
              { name: 'GitHub', icon: <Github className="w-5 h-5" /> },
              { name: 'Figma', icon: <Figma className="w-5 h-5" /> },
              { name: 'Terminal', icon: <Terminal className="w-5 h-5" /> },
              { name: 'MongoDB', icon: <Database className="w-5 h-5" /> },
              { name: 'Docker', icon: <Layers className="w-5 h-5" /> },
              { name: 'Vercel', icon: <Server className="w-5 h-5" /> },
              { name: 'CI/CD', icon: <Terminal className="w-5 h-5" /> },
              { name: 'Postman', icon: <Server className="w-5 h-5" /> },
              { name: 'Firebase', icon: <Flame className="w-5 h-5" /> },


            ].map((tool, i) => (
              <div key={i} className="flex items-center gap-2 p-2 rounded-lg bg-secondary/50">
                {tool.icon}
                <span className="text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}