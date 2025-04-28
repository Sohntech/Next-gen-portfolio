import './globals.css';
import { Providers } from '@/components/providers';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { AudioProvider } from '@/components/audio/audio-provider';
import { CustomCursor } from '@/components/ui/custom-cursor';
import { LenisProvider } from '@/components/lenis-provider';
import { SoundInitializer } from '@/components/audio/sound-initializer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Ndiaga LO | Développeur Fullstack & UI/UX Designer',
  description: 'Portfolio de Ndiaga Lo, un Développeur Fullstack et UI/UX Designer passionné par la création d\'expériences numériques uniques et engageantes.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased relative min-h-screen overflow-x-hidden`}>
        <Providers>
          <LenisProvider>
            <div className="relative w-full">
              <AudioProvider>
                <SoundInitializer />
                <CustomCursor />
                {children}
              </AudioProvider>
            </div>
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}