'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { ReactNode } from 'react';
import { Toaster } from '@/components/ui/toaster';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { MotionConfig } from 'framer-motion';
import { LenisProvider } from '@/components/lenis-provider';

export function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <MotionConfig
        reducedMotion="user"
        transition={{
          type: 'spring',
          stiffness: 260,
          damping: 20,
        }}
      >
        <LenisProvider>
          <AnimatePresence mode="wait" initial={false}>
            <div key={pathname}>{children}</div>
          </AnimatePresence>
        </LenisProvider>
      </MotionConfig>
      <Toaster />
    </NextThemesProvider>
  );
}