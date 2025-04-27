'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Sun, Moon, Menu, X, Code, Laptop, Layers, Phone } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useAudio } from '@/components/audio/audio-provider';
import { SoundToggle } from '@/components/ui/sound-toggle';

const navLinks = [
  { href: '#about', label: 'About', icon: <Laptop className="w-4 h-4" /> },
  { href: '#skills', label: 'Skills', icon: <Code className="w-4 h-4" /> },
  { href: '#projects', label: 'Projects', icon: <Layers className="w-4 h-4" /> },
  { href: '#contact', label: 'Contact', icon: <Phone className="w-4 h-4" /> },
];

export function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const { playSound } = useAudio();
  const { scrollY } = useScroll();
  
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
        backgroundColor: scrollY.get() > 10 ? 'rgba(var(--card), 0.7)' : 'transparent',
        backdropFilter: `blur(${backdropBlur.get()}px)`,
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
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
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
              onClick={() => playSound('click')}
            >
              {link.icon}
              {link.label}
            </Link>
          ))}
        </div>
        
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
          
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={() => playSound('click')}
                >
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full sm:w-80">
                <div className="flex flex-col h-full py-10">
                  <h3 className="text-xl font-bold mb-8">Navigation</h3>
                  <div className="flex flex-col space-y-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors"
                        onClick={() => playSound('click')}
                      >
                        {link.icon}
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}