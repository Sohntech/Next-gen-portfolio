'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { projects } from '@/lib/data/projects';
import { MotionText } from '@/components/ui/motion-text';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useAudio } from '@/components/audio/audio-provider';

export function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const { playSound } = useAudio();
  
  // Get all unique tags
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));
  
  // Filter projects by active tag
  const filteredProjects = activeTag
    ? projects.filter(project => project.tags.includes(activeTag))
    : projects;
  
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
    <section id="projects" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Mes Projets
          </motion.div>
          
          <MotionText
            text="Des projets qui parlent d'eux-mêmes"
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
            Découvrez mes projets récents qui illustrent mon expertise et ma passion pour le développement web.
            Chaque projet est une opportunité d&apos;apprendre et de créer des solutions innovantes.
          </motion.p>
        </div>
        
        {/* Project filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          <Button
            variant={activeTag === null ? 'default' : 'outline'}
            size="sm"
            className="rounded-full"
            onClick={() => {
              setActiveTag(null);
              playSound('click');
            }}
          >
            All
          </Button>
          
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
              onClick={() => {
                setActiveTag(tag);
                playSound('click');
              }}
            >
              {tag}
            </Button>
          ))}
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
              whileHover={{ y: -10 }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.link && (
                    <div className="absolute bottom-4 right-4">
                      <Button
                        size="icon"
                        className="rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40"
                        onClick={() => playSound('click')}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="bg-secondary px-2 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Button 
                  variant="ghost" 
                  className="mt-2 text-primary group"
                  onClick={() => playSound('click')}
                >
                  View Details
                  <ArrowUpRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}