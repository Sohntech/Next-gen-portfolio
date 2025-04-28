'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Code, Laptop, Layers, Phone, Bookmark } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAudio } from '@/components/audio/audio-provider';
import { SoundToggle } from '@/components/ui/sound-toggle';
import { useRouter } from 'next/router';

const navLinks = [
  { href: '#about', label: 'A propos', icon: <Laptop className="w-4 h-4" /> },
  { href: '#skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { href: '#projects', label: 'Projets', icon: <Layers className="w-4 h-4" /> },
  { href: '#experience', label: 'Parcours', icon: <Bookmark className="w-4 h-4" /> },
  { href: '#contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { playSound } = useAudio();
  const { scrollY } = useScroll();

  // Fonction pour gérer le scroll fluide
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    playSound('click');
    setIsOpen(false); // Ferme le menu mobile après un clic

    const target = document.querySelector(href);
    if (target) {
      const offset = 80; // Ajustez selon la hauteur de votre navbar
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Transform navbar background opacity based on scroll
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 8]);
  
  // Only show navbar after component has mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  return (
    <motion.nav 
      className="fixed top-0 left-0 w-full z-50 px-4 py-4"
      style={{
        backgroundColor: `rgba(var(--card), ${bgOpacity.get()})`,
        backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link 
          href="/"
          className="text-2xl font-bold gradient-text"
          onClick={() => playSound('click')}
        >
          <span className="font-basement">SOHNTECH.</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
        
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full"
              onClick={() => playSound('click')}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right" 
            className="w-[80vw] sm:w-80 bg-background/95 backdrop-blur-md"
          >
            <div className="flex flex-col h-full py-10">
              <h3 className="text-xl font-bold mb-8">Navigation</h3>
              <div className="flex flex-col space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </SheetContent>
        </Sheet>

        <div className="flex items-center gap-4">
          <SoundToggle />
          
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => {
              setTheme(theme === 'dark' ? 'light' : 'dark');
              playSound('click');
            }}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </div>
    </motion.nav>
  );
}