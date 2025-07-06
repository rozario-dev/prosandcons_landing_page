import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { FiExternalLink } from 'react-icons/fi';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-dark-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/images/logo.png" 
              alt="Pros And Cons AI" 
              className="h-8 w-8 rounded-lg"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              Pros And Cons
            </span>
          </div>

          {/* Right side */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <a
              href="https://app.prosandcons.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple text-white font-medium rounded-lg hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-300 transform hover:scale-105"
            >
              <span>Launch App</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;