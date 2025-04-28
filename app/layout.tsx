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
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5'
      }
    ]
  }
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
                <div className="relative z-[1]">
                  {children}
                </div>
              </AudioProvider>
            </div>
          </LenisProvider>
        </Providers>
      </body>
    </html>
  );
}