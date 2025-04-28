'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MotionText } from '@/components/ui/motion-text';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  MapPin, 
  Phone, 
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { useAudio } from '@/components/audio/audio-provider';

export function ContactSection() {
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
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
          >
            Contactez-moi
          </motion.div>
          
          <MotionText
            text="Je suis à votre écoute concernant vos projets"
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
            Que vous ayez une question, un projet en tête ou simplement envie de discuter, n'hésitez pas à me contacter. Je suis là pour vous aider et échanger sur vos idées.
          </motion.p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6">Informations</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <a 
                    href="mailto:hello@johndoe.com" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => playSound('click')}
                  >
                    ndiagalo259@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Adresse</p>
                  <p className="text-muted-foreground">Dakar, Senegal</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">Téléphone</p>
                  <a 
                    href="tel:+33612345678" 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    onClick={() => playSound('click')}
                  >
                    +221 78 455 99 30
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Suivez-moi</h3>
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => playSound('click')}
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => playSound('click')}
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle>Envoyez-moi un message</CardTitle>
                <CardDescription>
                  Remplissez ce formulaire et je vous recontacterai dans les plus brefs delais.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background/50"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-input bg-background/50"
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background/50"
                      placeholder="Type de sujet"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-2 rounded-lg border border-input bg-background/50 resize-none"
                      placeholder="Dites moi en plus sur votre projet..."
                    />
                  </div>
                  
                  <Button 
                    className="w-full group"
                    onClick={(e) => {
                      e.preventDefault();
                      playSound('click');
                    }}
                  >
                    Envoyer
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}