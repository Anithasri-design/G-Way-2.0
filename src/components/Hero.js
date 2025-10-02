import React from "react";
import { CheckCircle, ArrowRight } from "lucide-react";
import h3 from '../assets/h3.jpg';  // adjust path

export default function HeroSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-sky-600">Real-time and</span> <br />
            <span className="text-sky-500">Reliable</span> <br />
            <span className="text-gray-900">Healthcare Support</span>
          </h1>

          <p className="text-gray-600 mt-6 text-lg">
            Delivering excellence to hospitals, clinics, and diagnostic labs with 
            end-to-end quality and accreditation solutions.
          </p>

          {/* Features List */}
          <ul className="mt-6 space-y-3 text-gray-800">
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> 
              NABH & NABL Accreditation Expertise
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> 
              Expert Guidance from Industry Professionals
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="text-green-500" size={20} /> 
              Post-accreditation Support & Maintenance
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white px-6 py-3 rounded-lg font-medium shadow-md transition"
            >
              Request for Consultation <ArrowRight size={18} />
            </a>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <img
            src={h3}
            alt="Healthcare Support"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
          {/* Badge */}
          <div className="absolute bottom-4 left-4 bg-white p-4 rounded-xl shadow-md flex items-center gap-3">
            <CheckCircle className="text-green-500" size={28} />
            <div>
              <p className="font-semibold text-gray-800">Quality Assured</p>
              <p className="text-sm text-gray-500">Certified Excellence</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
