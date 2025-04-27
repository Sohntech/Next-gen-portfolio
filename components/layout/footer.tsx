'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAudio } from '@/components/audio/audio-provider';

export function Footer() {
  const { playSound } = useAudio();
  
  const scrollToTop = () => {
    playSound('click');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];
  
  return (
    <footer className="py-12 bg-card glass">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <Link 
            href="/"
            className="text-3xl font-bold gradient-text mb-6 md:mb-0"
            onClick={() => playSound('click')}
          >
            <span className="font-basement">JD.</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-sm hover:text-primary transition-colors"
                onClick={() => playSound('click')}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <Button
            variant="outline"
            size="icon"
            className="rounded-full mt-6 md:mt-0"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} John Doe. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => playSound('click')}
            >
              Privacy Policy
            </Link>
            <Link 
              href="#" 
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
              onClick={() => playSound('click')}
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}