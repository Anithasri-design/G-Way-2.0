import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    
    // Try multiple methods to ensure it works
    // Method 1: Use the global function
    if (typeof window.scrollToContactSection === 'function') {
      window.scrollToContactSection();
    } 
    // Method 2: Direct scroll as fallback
    else {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const headerOffset = 80;
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleServicesClick = (e) => {
    e.preventDefault();
    
    const servicesSection = document.getElementById('services-section');
    if (servicesSection) {
      const headerOffset = 80;
      const elementPosition = servicesSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    
    const aboutSection = document.getElementById('about-section');
    if (aboutSection) {
      const headerOffset = 80;
      const elementPosition = aboutSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    
    // Close mobile menu if open
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 md:h-12 md:w-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              G
            </div>
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold text-black">
                <span className="text-black">G-</span>
                <span className="text-cyan-600">Way</span>
              </span>
              <span className="text-sm text-gray-700 font-medium hidden sm:block">
                Healthcare Solutions
              </span>
            </div>
          </div>
          
          {/* Middle Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-black hover:text-cyan-600 transition-colors font-medium">
              Home
            </a>
            <div className="relative group">
              <button 
                onClick={handleServicesClick}
                className="text-black hover:text-cyan-600 transition-colors font-medium flex items-center"
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#about" onClick={handleAboutClick} className="text-black hover:text-cyan-600 transition-colors font-medium">
              About Us
            </a>
          </nav>
          
          {/* Contact Button */}
          <div className="hidden md:block">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-b from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-6 py-2 rounded-md font-medium shadow-sm transition"
            >
              Contact
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-black p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white shadow-md">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-black hover:text-cyan-600 transition-colors font-medium py-2">
                Home
              </a>
              <a 
                href="#services" 
                onClick={handleServicesClick}
                className="text-black hover:text-cyan-600 transition-colors font-medium py-2"
              >
                Services
              </a>
              <a href="#about" onClick={handleAboutClick} className="text-black hover:text-cyan-600 transition-colors font-medium py-2">
                About Us
              </a>
              <button
                onClick={handleContactClick}
                className="bg-gradient-to-b from-cyan-400 to-cyan-500 hover:from-cyan-500 hover:to-cyan-600 text-white px-6 py-2 rounded-md font-medium shadow-sm transition text-left"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}