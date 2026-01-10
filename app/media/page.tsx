import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Media & Socials',
  description: 'Raymond Shideler - Media appearances, publications, and social profiles. Connect with Raymond Shideler on LinkedIn, Medium, IMDb, and other professional platforms.',
  alternates: {
    canonical: 'https://raymondshideler.com/media',
  },
};

export default function Media() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Raymond Shideler',
    url: 'https://raymondshideler.com',
    jobTitle: ['Marketing & Sales Professional', 'Entrepreneur', 'Composer', 'Founding Member of Soundcheck Live'],
    description: 'Raymond Shideler is a Marketing & Sales professional, Entrepreneur, and Composer. Founding member of Soundcheck Live, specializing in business growth and original music compositions for film and media.',
    sameAs: [
      'https://www.linkedin.com/in/raymond-shideler-bb75b8105/',
      'https://www.airgigs.com/user/raymondrevelmusic',
      'https://soundbetter.com/profiles/243507-raymond-revel-shideler-iii',
      'https://credits.muso.ai/profile/d5772709-0b56-4f96-b279-b0e21fa6e407',
      'https://www.imdb.com/name/nm17548422/',
      'https://muckrack.com/raymond-shideler',
      'https://medium.com/@raymondshideler',
      'https://about.me/raymondshideler',
      'https://x.com/RayShidelerIII',
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
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://www.linkedin.com/in/raymond-shideler-bb75b8105/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/linkedin.png"
                          alt="LinkedIn Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
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
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://www.airgigs.com/user/raymondrevelmusic" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/airgigs.png"
                          alt="AirGigs Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
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
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://soundbetter.com/profiles/243507-raymond-revel-shideler-iii" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/soundbetter.png"
                          alt="SoundBetter Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
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
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://credits.muso.ai/profile/d5772709-0b56-4f96-b279-b0e21fa6e407" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/muso.jpeg"
                          alt="Muso.io Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
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
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://www.imdb.com/name/nm17548422/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/imdb.svg"
                          alt="IMDb Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
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
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://muckrack.com/raymond-shideler" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/muckrack.png"
                          alt="MuckRack Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://muckrack.com/raymond-shideler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          MuckRack
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        View my media coverage, articles, and press mentions on MuckRack.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://medium.com/@raymondshideler" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/medium.png"
                          alt="Medium Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://medium.com/@raymondshideler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          Medium
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Read my articles and insights on film scoring, music production, and business innovation.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://about.me/raymondshideler" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/aboutme.png"
                          alt="About.me Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://about.me/raymondshideler" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          About.me
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        View my professional profile and learn more about my work as a music producer, composer, and entrepreneur.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-gray-300 dark:border-gray-700 pl-6 py-4">
                  <div className="flex items-start gap-4">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://x.com/RayShidelerIII" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="https://x.com/favicon.ico"
                          alt="X (Twitter) Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://x.com/RayShidelerIII" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          X (Twitter)
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Follow me on X for updates on my work in music production, film scoring, and entrepreneurship.
                      </p>
                    </div>
                  </div>
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
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://medium.com/@raymondshideler/raymond-shideler-on-film-scoring-and-building-narrative-through-music-333b773e4bfb" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/medium.png"
                          alt="Medium Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://medium.com/@raymondshideler/raymond-shideler-on-film-scoring-and-building-narrative-through-music-333b773e4bfb" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          Raymond Shideler on Film Scoring and Building Narrative Through Music
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Medium
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Insights on the art of film scoring and how music shapes narrative in visual storytelling.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://medium.com/@raymondshideler/raymond-shideler-on-why-gig-management-tools-are-replacing-spreadsheets-in-live-music-operations-0417807a774d" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/medium.png"
                          alt="Medium Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://medium.com/@raymondshideler/raymond-shideler-on-why-gig-management-tools-are-replacing-spreadsheets-in-live-music-operations-0417807a774d" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          Raymond Shideler on Why Gig Management Tools Are Replacing Spreadsheets in Live Music Operations
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Medium
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Exploring the evolution of gig management in the live music industry and the shift from traditional spreadsheet-based systems to modern tools.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://soundchecklive.io/blog/gig-economy-remix" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="https://soundchecklive.io/favicon.ico"
                          alt="Soundcheck Live Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://soundchecklive.io/blog/gig-economy-remix" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          The Gig Economy Remix: How Soundcheck Live Is Redefining Live Music Operations
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Soundcheck Live
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Featured in Soundcheck Live's blog discussing how the platform is transforming live music operations and helping teams move away from traditional spreadsheet-based gig management systems.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-800 pb-6">
                  <div className="flex items-start gap-4 mb-3">
                    <div className="relative w-10 h-10 flex-shrink-0 mt-1">
                      <a 
                        href="https://medium.com/@raymondshideler/raymond-shideler-on-the-art-and-craft-of-scoring-for-film-and-visual-media-03896ea192d3" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block h-full"
                      >
                        <img
                          src="/images/logos/medium.png"
                          alt="Medium Logo"
                          className="h-full w-auto object-contain"
                        />
                      </a>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        <a 
                          href="https://medium.com/@raymondshideler/raymond-shideler-on-the-art-and-craft-of-scoring-for-film-and-visual-media-03896ea192d3" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
                        >
                          Raymond Shideler on the Art and Craft of Scoring for Film and Visual Media
                        </a>
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Medium
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    Exploring the artistry and technical expertise behind film scoring and creating music for visual media.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

