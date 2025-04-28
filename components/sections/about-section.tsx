'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { MotionText } from '@/components/ui/motion-text';

type SocialLink = {
  name: string;
  url: string;
};

const socialLinks: SocialLink[] = [
  {
    name: "Github",
    url: "https://github.com/Sohntech"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/ndiaga-l-4a7581139/"
  }
];

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden">
              <Image
                src="https://res.cloudinary.com/drxouwbms/image/upload/v1743803438/learners/bwear6xjrbj69froahdp.jpg"
                alt="Developer portrait"
                width={400}
                height={400}
                className="w-full object-cover aspect-[1/1]"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 bg-card p-4 rounded-xl shadow-lg glass">
              <p className="text-4xl font-bold font-basement">2+</p>
              <p className="text-sm text-muted-foreground">Années d&apos;experience</p>
            </div>
          </motion.div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants}>
              <div className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                A propos de moi
              </div>
            </motion.div>
            
            <MotionText
              text="Je cree des expériences numériques uniques"
              el="h2"
              className="text-3xl md:text-5xl font-bold mb-6"
              once={true}
              delay={0.2}
            />
            
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-6"
            >
              Je suis un développeur fullstack passionné et un designer UI/UX avec une expertise 
              dans la création d&apos;expériences numériques immersives. Mon approche combine 
              l&apos;excellence technique avec une réflexion créative en design pour concevoir des 
              produits à la fois beaux et fonctionnels.
            </motion.p>
            
            <motion.p
              variants={itemVariants}
              className="text-muted-foreground text-lg mb-8"
            >
              Je suis toujours à la recherche de nouveaux défis et d&apos;opportunités pour 
              apprendre et grandir. Que ce soit en travaillant sur des projets passionnants ou en 
              collaborant avec des équipes talentueuses, je suis prêt à relever le défi.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8"
            >
              {[
                { label: "Nom", value: "Ndiaga LO" },
                { label: "Email", value: "ndiagalo259@gmail.com" },
                { label: "Métier", value: "Développeur Fullstack et UI/UX Designer" },
                { label: "Adresse", value: "Dakar, Senegal" },
              ].map((item, index) => (
                <div key={index}>
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-medium">{item.value}</p>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex gap-4">
              <p className="text-sm text-muted-foreground">Follow me —</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-primary hover:underline transition-colors"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}