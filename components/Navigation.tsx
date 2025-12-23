import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
            Raymond Shideler
          </Link>
          <div className="flex space-x-6">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              About
            </Link>
            <Link href="/media" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors">
              Media & Socials
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

