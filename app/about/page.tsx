import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Raymond Shideler - Career history and professional background. Marketing & Sales professional, Entrepreneur, Film Composer, and founder of Soundcheck Live.',
  alternates: {
    canonical: 'https://raymondshideler.com/about',
  },
};

export default function About() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raymond Shideler',
    url: 'https://raymondshideler.com',
    sameAs: [
      'https://www.linkedin.com/in/raymond-shideler-bb75b8105/',
      'https://www.airgigs.com/user/raymondrevelmusic',
      'https://soundbetter.com/profiles/243507-raymond-revel-shideler-iii',
      'https://credits.muso.ai/profile/d5772709-0b56-4f96-b279-b0e21fa6e407',
      'https://www.imdb.com/name/nm17548422/',
      'https://muckrack.com/raymond-shideler',
      'https://medium.com/@raymondshideler',
      'https://about.me/raymondshideler',
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
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12">
          About
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Career History
              </h2>
              
              <div className="space-y-8 mt-6">
                {/* Career entries will be added here based on LinkedIn profile */}
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Founding Member
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      Present
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">
                    Soundcheck Live
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Leading the vision and strategy for Soundcheck Live, building innovative solutions in the music and entertainment industry.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Film Composer & Songwriter
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      Present
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Creating original music compositions and songs for film and media projects.
                  </p>
                </div>
                
                {/* Additional career entries can be added here */}
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                      Marketing & Sales Professional
                    </h3>
                    <span className="text-sm text-gray-600 dark:text-gray-400 mt-1 sm:mt-0">
                      Various Roles
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Extensive experience in marketing and sales, driving growth and building successful business relationships across multiple industries.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                With a strong background in marketing and sales, I've dedicated my career to helping businesses grow and succeed. 
                My entrepreneurial spirit led me to found Soundcheck Live, where I combine my passion for business with innovation 
                in the music and entertainment space. I'm committed to building meaningful connections, driving results, and creating 
                value for clients and partners.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

