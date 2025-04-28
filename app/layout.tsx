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
  title: 'John Doe | Fullstack Developer & UI/UX Designer',
  description: 'Portfolio of John Doe, a Fullstack Developer and UI/UX Designer specializing in creating modern, immersive digital experiences.',
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