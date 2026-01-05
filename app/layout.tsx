import type { Metadata } from 'next';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://raymondshideler.com'),
  title: {
    default: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Composer | Soundcheck Live',
    template: '%s | Raymond Shideler',
  },
  description: 'Raymond Shideler - Marketing & Sales professional, Entrepreneur, Composer, and founder of Soundcheck Live. Expert in driving growth, building successful businesses, and creating original music compositions for film and media.',
  keywords: [
    'Raymond Shideler',
    'Raymond Shideler Marketing',
    'Raymond Shideler Sales',
    'Raymond Shideler Marketing & Sales',
    'Raymond Shideler Entrepreneur',
    'Raymond Shideler Composer',
    'Raymond Shideler Soundcheck Live',
    'Marketing & Sales',
    'Entrepreneur',
    'Composer',
    'Soundcheck Live',
    'Film Composer',
    'Songwriter',
    'Music Producer',
    'Raymond Shideler Film Composer',
  ],
  authors: [{ name: 'Raymond Shideler' }],
  creator: 'Raymond Shideler',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://raymondshideler.com',
    siteName: 'Raymond Shideler',
    title: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Composer | Soundcheck Live',
    description: 'Raymond Shideler - Marketing & Sales professional, Entrepreneur, Composer, and founder of Soundcheck Live. Expert in business growth and original music compositions.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Composer | Soundcheck Live',
    description: 'Raymond Shideler - Marketing & Sales professional, Entrepreneur, Composer, and founder of Soundcheck Live. Expert in business growth and original music compositions.',
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

