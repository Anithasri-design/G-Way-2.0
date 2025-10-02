import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../assets/logo.jpeg'; // adjust path

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          
          {/* Logo and Company Name */}
          <div className="flex items-center space-x-3">
            <img
              src={logo}
              alt="G-Way Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
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
              <button className="text-black hover:text-cyan-600 transition-colors font-medium flex items-center">
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <a href="#about" className="text-black hover:text-cyan-600 transition-colors font-medium">
              About Us
            </a>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-6 py-2.5 rounded-lg font-medium shadow-sm bg-gradient-to-r from-cyan-400 to-blue-500 text-white hover:from-cyan-500 hover:to-blue-600 transition-colors"
            >
              Contact
            </a>
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
          <div className="md:hidden py-4 border-t border-gray-200 bg-white/95 backdrop-blur-md shadow-md">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-black hover:text-cyan-600 transition-colors font-medium py-2">
                Home
              </a>
              <a href="#services" className="text-black hover:text-cyan-600 transition-colors font-medium py-2">
                Services
              </a>
              <a href="#about" className="text-black hover:text-cyan-600 transition-colors font-medium py-2">
                About Us
              </a>
              <a
                href="#contact"
                className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2.5 rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-colors font-medium w-full mt-2 text-center"
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
