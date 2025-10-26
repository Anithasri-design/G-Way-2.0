import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    service: '',
    message: ''
  });

  // Set up scroll functionality when component mounts
  useEffect(() => {
    // Create a function that scrolls to contact section
    const scrollToContact = () => {
      const contactSection = document.getElementById('contact-section');
      if (contactSection) {
        const headerOffset = 80; // Height of sticky header
        const elementPosition = contactSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    };

    // Make it available globally
    window.scrollToContactSection = scrollToContact;

    // Check if hash is present on page load
    if (window.location.hash === '#contact') {
      setTimeout(() => scrollToContact(), 100);
    }

    // Cleanup
    return () => {
      delete window.scrollToContactSection;
    };
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Message sent successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      organization: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Section Header */}
      <div id="contact-section" className="py-12 px-4 bg-white scroll-mt-20">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-sky-600">Contact us</h2>
          <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-5 gap-8">
          
          {/* Get in Touch Section */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Get in touch</h2>
              
              {/* Phone */}
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Phone</h3>
                  <a href="tel:+918098716444" className="text-blue-600 hover:underline">
                    +91 8098716444
                  </a>
                  <p className="text-sm text-gray-500 mt-1">Mon-Fri 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Email Us</h3>
                  <a href="mailto:qwayhealthcaresolutions@gmail.com" className="text-blue-600 hover:underline break-all">
                    qwayhealthcaresolutions@gmail.com
                  </a>
                  <p className="text-sm text-gray-500 mt-1">We reply within 2 hours</p>
                </div>
              </div>

              {/* Office Address */}
              <div className="flex items-start mb-6">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Office Address</h3>
                  <p className="text-gray-600">Thiruvarur</p>
                  <p className="text-gray-600">Tamil Nadu</p>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start mb-8">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-1">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Send Message Form */}
          <div className="md:col-span-3">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">
                      Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Enter organization name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">
                    Service of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="quality">Quality Assurance</option>
                    <option value="compliance">Compliance Services</option>
                    <option value="consulting">Healthcare Consulting</option>
                    <option value="training">Training & Development</option>
                    <option value="other">Other Services</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your requirements, current challenges, or any specific questions..."
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 rounded-lg transition flex items-center justify-center gap-2 shadow-md"
                >
                  <Mail className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2025 G-Way Healthcare Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}