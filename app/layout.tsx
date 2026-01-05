import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://raymondshideler.com'),
  title: {
    default: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Soundcheck Live',
    template: '%s | Raymond Shideler',
  },
  description: 'Raymond Shideler - Marketing & Sales professional, Entrepreneur, and founder of Soundcheck Live. Expert in driving growth and building successful businesses. Film composer and songwriter.',
  keywords: ['Raymond Shideler', 'Marketing', 'Sales', 'Entrepreneur', 'Soundcheck Live', 'Film Composer', 'Songwriter', 'Music Producer', 'Raymond Shideler Marketing', 'Raymond Shideler Sales', 'Raymond Shideler Entrepreneur'],
  authors: [{ name: 'Raymond Shideler' }],
  creator: 'Raymond Shideler',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raymondshideler.com',
    siteName: 'Raymond Shideler',
    title: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Soundcheck Live',
    description: 'Marketing & Sales professional, Entrepreneur, and founder of Soundcheck Live.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Soundcheck Live',
    description: 'Marketing & Sales professional, Entrepreneur, and founder of Soundcheck Live.',
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

