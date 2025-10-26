import React from 'react';

export default function GWayLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Curved Design */}
      <section className="relative min-h-screen overflow-hidden">
        {/* Left Side - White Background */}
        <div className="absolute inset-0 bg-white">
          {/* Curved Shape - Hidden on mobile, visible on larger screens */}
          <svg 
            className="hidden md:block absolute top-0 right-0 h-full w-2/3 md:w-1/2 lg:w-2/5" 
            viewBox="0 0 100 100" 
            preserveAspectRatio="none"
          >
            <path 
              d="M 30 0 Q 0 50 30 100 L 100 100 L 100 0 Z" 
              fill="url(#curveGradient)" 
              opacity="0.95"
            />
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#0e7490', stopOpacity: 0.9 }} />
                <stop offset="100%" style={{ stopColor: '#155e75', stopOpacity: 0.95 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Background Image (Right Side) - Hidden on mobile */}
        <div className="hidden md:block absolute top-0 right-0 h-full w-1/2 lg:w-2/5">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070"
            alt="Healthcare Team Meeting"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Mobile Background Gradient (visible only on mobile) */}
        <div className="md:hidden absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-50 opacity-50"></div>

        {/* Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full py-16 md:py-20">
            
            {/* Left Content */}
            <div className="space-y-6 lg:space-y-8 text-center md:text-left">
              {/* Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Real-time and Reliable
                </span>
                <br />
                <span className="text-gray-900">Healthcare Support</span>
              </h1>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
                Delivering excellence to hospitals, clinics, and diagnostic labs with end-to-end quality and accreditation solutions.
              </p>

              {/* CTA Button */}
              <div className="pt-4">
                <button className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-500 hover:to-blue-700 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold shadow-lg transition-all hover:shadow-xl text-base sm:text-lg w-full sm:w-auto">
                  Request for Consultation
                </button>
              </div>
            </div>

            {/* Right Side - Empty space for curved background (only on desktop) */}
            <div className="hidden lg:block relative"></div>
          </div>
        </div>
      </section>
    </div>
  );
}