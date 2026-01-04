import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Raymond Shideler | Marketing & Sales | Entrepreneur | Soundcheck Live',
  description: 'Marketing & Sales professional, Entrepreneur, and founder of Soundcheck Live. Expert in driving growth and building successful businesses.',
  alternates: {
    canonical: 'https://raymondshideler.com',
  },
};

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raymond Shideler',
    url: 'https://raymondshideler.com',
    sameAs: [
      'https://www.imdb.com/name/nm17548422/',
      'https://www.linkedin.com/in/raymond-shideler-bb75b8105/',
      'https://www.airgigs.com/user/raymondrevelmusic',
      'https://medium.com/@raymondshideler',
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 sm:mb-12">
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-800 shadow-lg">
              <Image
                src="/images/raymond-shideler-photo.png"
                alt="Raymond Shideler"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 192px, (max-width: 1024px) 256px, 320px"
              />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 sm:mb-6">
            Raymond Shideler
          </h1>
          
          <div className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 space-y-2">
            <p>Marketing & Sales</p>
            <p>Entrepreneur</p>
            <p className="font-semibold text-gray-800 dark:text-gray-200">Soundcheck Live</p>
          </div>
          
          <div className="max-w-2xl mt-8 sm:mt-12">
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to my personal website. I'm a marketing and sales professional with a passion for entrepreneurship and innovation. 
              As a founding member of the Soundcheck Live team, I'm dedicated to building successful businesses and driving growth through strategic marketing and sales initiatives.
            </p>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              I'm also an accomplished film composer and songwriter, with credits spanning music production, film scoring, and professional vocal work. 
              Explore my work and connect with me through the links below.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

