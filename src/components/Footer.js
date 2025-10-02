import React from "react";
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import logo from '../assets/logo.jpeg';  // adjust path
 // 👉 adjust path based on your project structure

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-600 to-sky-400 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3 mb-3">
           <img
              src={logo}
              alt="G-Way Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain"
            />
            <h2 className="text-xl font-bold">GWay Healthcare</h2>
          </div>
          <p className="text-sm mb-4">
            Transforming healthcare delivery through comprehensive quality
            management and accreditation solutions. Your trusted partner for
            excellence.
          </p>
          <div className="space-y-2 text-sm">
            <p className="flex items-center gap-2">
              <Phone size={16} /> +91 8098701666
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} /> gwayhealthcaresolutions@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <MapPin size={16} /> Thiruvarur, Tamil Nadu
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-200">About Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Our Services</a></li>
            <li><a href="#" className="hover:text-gray-200">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Our Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-200">NABH Accreditation</a></li>
            <li><a href="#" className="hover:text-gray-200">NABL Accreditation</a></li>
            <li><a href="#" className="hover:text-gray-200">ISO Certification</a></li>
            <li><a href="#" className="hover:text-gray-200">Quality Management</a></li>
            <li><a href="#" className="hover:text-gray-200">Staff Training</a></li>
            <li><a href="#" className="hover:text-gray-200">Facility Planning</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-200">Quality Standards Guide</a></li>
            <li><a href="#" className="hover:text-gray-200">Accreditation Checklist</a></li>
            <li><a href="#" className="hover:text-gray-200">Case Studies</a></li>
            <li><a href="#" className="hover:text-gray-200">Blog</a></li>
            <li><a href="#" className="hover:text-gray-200">FAQ</a></li>
            <li><a href="#" className="hover:text-gray-200">Downloads</a></li>
          </ul>

          <h2 className="text-lg font-semibold mt-6 mb-2">Follow Us</h2>
          <div className="flex gap-4 text-xl">
            <a href="#"><Linkedin size={20} /></a>
            <a href="#"><Twitter size={20} /></a>
            <a href="#"><Facebook size={20} /></a>
            <a href="#"><Instagram size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/20 text-center py-4 text-sm">
        © 2024 GWay Healthcare Solutions. All rights reserved.  
        <div className="mt-2 flex justify-center gap-4">
          <a href="#" className="hover:text-gray-200">Privacy Policy</a>
          <a href="#" className="hover:text-gray-200">Terms of Service</a>
          <a href="#" className="hover:text-gray-200">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
