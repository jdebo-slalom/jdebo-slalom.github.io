import React from 'react';
import SlalomLogo from '../assets/slalom-logo.svg';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  return (
    <header className="bg-white dark:bg-slalom-darkBg shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <img 
              src={SlalomLogo} 
              alt="Slalom Logo" 
              className="h-8 w-auto"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = 'https://www.slalom.com/sites/default/files/2020-10/Slalom_Logo_RGB_Digital_Blue.png';
              }}
            />
            <span className="ml-3 text-xl font-semibold text-slalom-navy dark:text-white">Slalom GenAI Showcase</span>
          </div>
          <div className="flex items-center">
            <nav className="hidden md:flex space-x-6 mr-4">
              <a href="#advances" className="text-slalom-gray dark:text-slalom-darkText hover:text-slalom-blue dark:hover:text-slalom-blue transition-colors">
                AI Advances
              </a>
              <a href="#use-cases" className="text-slalom-gray dark:text-slalom-darkText hover:text-slalom-blue dark:hover:text-slalom-blue transition-colors">
                Use Cases
              </a>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;