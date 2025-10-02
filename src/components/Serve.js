import React from "react";
import hos from "../assets/hos.jpg";

const WhoWeServe = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Side Card with Inner Card */}
        <div className="relative">
          {/* Main Image Card */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={hos}
              alt="Healthcare"
              className="w-full h-96 object-cover"
            />
          </div>
          {/* Overlay Small Card */}
          <div className="absolute -bottom-8 left-6 bg-white shadow-lg rounded-xl p-4 w-40 text-center">
            <p className="text-2xl font-bold text-blue-600">680+</p>
            <p className="text-sm text-gray-600">Business Trust Us</p>
          </div>
        </div>

        {/* Right Side Content */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Who We <span className="text-blue-600">Serve</span>
          </h2>
          <p className="text-gray-600 mb-6">
            We partner with diverse healthcare organizations to deliver tailored
            quality solutions that meet their specific needs and regulatory
            requirements.
          </p>

          {/* Bullet-style content with dots */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Hospitals
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>NABH Standards</li>
                <li>Patient Safety</li>
                <li>Quality Management</li>
                <li>Operational Excellence</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Clinics
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Quality Standards</li>
                <li>Process Optimization</li>
                <li>Staff Training</li>
                <li>Patient Care Protocols</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Diagnostic Labs
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>NABL Compliance</li>
                <li>Equipment Calibration</li>
                <li>Quality Control</li>
                <li>Result Accuracy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Daycare Centers
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Safety Protocols</li>
                <li>Care Standards</li>
                <li>Staff Competency</li>
                <li>Emergency Procedures</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Nursing Homes
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Care Quality</li>
                <li>Safety Measures</li>
                <li>Staff Training</li>
                <li>Compliance Management</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">
                Healthcare Groups
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Standardization</li>
                <li>Multi-Unit Management</li>
                <li>Corporate Compliance</li>
                <li>Unified Protocols</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
