import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://raymondshideler.com'),
  title: {
    default: 'Raymond Revel Shideler III | Composer & Music Producer for Film | Entrepreneur | Creative',
    template: '%s | Raymond Revel Shideler III',
  },
  description: 'Raymond Revel Shideler III is a composer and music producer specializing in film scoring, visual media, and creative music projects. He is also a founding member of Soundcheck Live.',
  keywords: [
    'Raymond Revel Shideler III',
    'Raymond Revel Shideler III Composer',
    'Raymond Revel Shideler III Music Producer',
    'Raymond Revel Shideler III Film Composer',
    'Raymond Revel Shideler III Film Scoring',
    'Raymond Shideler',
    'Raymond Shideler Composer',
    'Raymond Shideler Music Producer',
    'Raymond Shideler Film Composer',
    'Composer',
    'Music Producer',
    'Film Composer',
    'Film Scoring',
    'Visual Media Music',
    'Creative Music Projects',
    'Soundcheck Live',
    'Entrepreneur',
  ],
  authors: [{ name: 'Raymond Revel Shideler III' }],
  creator: 'Raymond Revel Shideler III',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raymondshideler.com',
    siteName: 'Raymond Revel Shideler III',
    title: 'Raymond Revel Shideler III | Composer & Music Producer for Film | Entrepreneur | Creative',
    description: 'Raymond Revel Shideler III is a composer and music producer specializing in film scoring, visual media, and creative music projects. He is also a founding member of Soundcheck Live.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Revel Shideler III | Composer & Music Producer for Film | Entrepreneur | Creative',
    description: 'Raymond Revel Shideler III is a composer and music producer specializing in film scoring, visual media, and creative music projects. He is also a founding member of Soundcheck Live.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://raymondshideler.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

