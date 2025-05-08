import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slalom-navy text-white">
      <div className="section-container py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Slalom GenAI Showcase</h3>
            <p className="text-white/70">
              Exploring the latest advances in generative AI and their transformative 
              potential across industries.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#advances" className="text-white/70 hover:text-white transition-colors">
                  AI Advances
                </a>
              </li>
              <li>
                <a href="#use-cases" className="text-white/70 hover:text-white transition-colors">
                  Use Cases
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Slalom</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.slalom.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Official Website
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/company/slalom-consulting/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://twitter.com/slalom" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
          <p>&copy; {currentYear} Justin DeBo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;