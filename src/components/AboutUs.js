import React from "react";
import h2 from "../assets/h2.jpg"; // adjust path if needed

const AboutUs = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Image */}
        <div className="relative flex justify-center">
          <img
            src={h2}
            alt="Healthcare Team"
            className="rounded-2xl shadow-lg w-3/4 lg:w-2/3"
          />
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md text-sm">
            Driven by Excellence
          </div>
        </div>

        {/* Right Side - Content */}
        <div>
          <h2 className="text-3xl font-bold mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              GWay Healthcare Solutions
            </span>
          </h2>
          <p className="text-gray-600 mb-8">
            We are a dedicated team of healthcare quality professionals committed 
            to transforming healthcare delivery through comprehensive quality 
            management and accreditation solutions.
          </p>

          {/* Mission */}
          <div className="flex items-start mb-6">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <span className="text-blue-500 text-xl">🎯</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Mission</h3>
              <p className="text-gray-600">
                To empower healthcare organizations with robust quality management 
                systems that ensure patient safety, operational excellence, and 
                regulatory compliance.
              </p>
            </div>
          </div>

          {/* Vision */}
          <div className="flex items-start mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <span className="text-green-500 text-xl">👁️</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading healthcare consultancy partner, driving quality 
                transformation across the healthcare ecosystem in India and beyond.
              </p>
            </div>
          </div>

          {/* Who We Are */}
          <div className="flex items-start mb-6">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <span className="text-yellow-500 text-xl">👥</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Who We Are</h3>
              <p className="text-gray-600">
                A team of experienced healthcare professionals, quality experts, 
                and consultants with deep expertise in NABH, NABL, ISO standards, 
                and healthcare operations management.
              </p>
            </div>
          </div>

          {/* Gradient Button */}
         
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
