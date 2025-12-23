import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';

export const metadata: Metadata = {
  metadataBase: new URL('https://raymondshideler.com'),
  title: {
    default: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Soundcheck Live',
    template: '%s | Raymond Shideler',
  },
  description: 'Marketing & Sales professional, Entrepreneur, and founder of Soundcheck Live. Expert in driving growth and building successful businesses.',
  keywords: ['Raymond Shideler', 'Marketing', 'Sales', 'Entrepreneur', 'Soundcheck Live', 'Film Composer', 'Songwriter', 'Music Producer'],
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
      <body className="antialiased">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}

