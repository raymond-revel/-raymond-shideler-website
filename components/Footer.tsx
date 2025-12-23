export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            © {new Date().getFullYear()} <span className="font-semibold text-gray-900 dark:text-gray-100">Raymond Shideler</span>. All rights reserved.
          </p>
          <p className="text-xs mt-2 text-gray-500 dark:text-gray-500">
            Marketing & Sales Professional | Entrepreneur | Film Composer & Songwriter | Soundcheck Live
          </p>
        </div>
      </div>
    </footer>
  );
}

