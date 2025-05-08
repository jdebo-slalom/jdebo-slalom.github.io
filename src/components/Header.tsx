import React from 'react';
import SlalomLogo from '../assets/slalom-logo.svg';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
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
            <span className="ml-3 text-xl font-semibold text-slalom-navy">GenAI Showcase</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#advances" className="text-slalom-gray hover:text-slalom-blue transition-colors">
              AI Advances
            </a>
            <a href="#use-cases" className="text-slalom-gray hover:text-slalom-blue transition-colors">
              Use Cases
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;