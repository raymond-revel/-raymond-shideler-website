import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Media & Socials',
  description: 'Media appearances, publications, and social profiles of Raymond Shideler.',
  alternates: {
    canonical: 'https://raymondshideler.com/media',
  },
};

export default function Media() {
  return (
    <div className="min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-8 sm:mb-12">
          Media & Socials
        </h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Professional Profiles
              </h2>
              
              <div className="space-y-4">
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href="https://www.linkedin.com/in/raymond-shideler-bb75b8105/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Connect with me on LinkedIn to view my professional background and career history.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href="https://www.airgigs.com/user/raymondrevelmusic" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      AirGigs
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Hire me for male vocals, songwriting, sound design, piano recordings, and vocal tuning services.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href="https://soundbetter.com/profiles/243507-raymond-revel-shideler-iii" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      SoundBetter
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Professional music production services including songwriting, vocals, and film scoring.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href="https://credits.muso.ai/profile/d5772709-0b56-4f96-b279-b0e21fa6e407" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      Muso.io
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    View my music credits and professional work portfolio.
                  </p>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    <a 
                      href="https://www.imdb.com/name/nm17548422/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                    >
                      IMDb
                    </a>
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    Check out my film and television credits on IMDb.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Media Appearances
              </h2>
              
              <div className="space-y-6">
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-32 h-10 flex-shrink-0">
                      <a 
                        href="https://www.barchart.com/story/news/36867639/party-bands-and-music-agencies-rethink-spreadsheet-based-gig-management" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="https://www.barchart.com/favicon.ico"
                          alt="Barchart Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://www.barchart.com/story/news/36867639/party-bands-and-music-agencies-rethink-spreadsheet-based-gig-management" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          Party Bands and Music Agencies Rethink Spreadsheet-Based Gig Management
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Barchart
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Featured in an article discussing how party bands and music agencies are modernizing their gig management processes, moving away from traditional spreadsheet-based systems.
                  </p>
                </div>
              </div>
            </section>
            
            <section className="mt-12">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
                Publications
              </h2>
              
              <div className="space-y-6">
                {/* Publication entries will be added here */}
                <p className="text-gray-600 dark:text-gray-400 italic">
                  Publications and articles will be added here.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

