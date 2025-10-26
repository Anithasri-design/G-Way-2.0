import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Cards from './components/Cards'; 
import Choose from './components/Choose'; 
import Serve from './components/Serve'; 
import Contact from './components/Contact'; 
import Testimonial from './components/Testimonial'; 
import Footer from './components/Footer'; 
import LoadingSpinner from './components/LoadingSpinner';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for page to fully load
    const handleLoad = () => {
      setLoading(false);
    };

    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setLoading(false);
    } else {
      window.addEventListener('load', handleLoad);
    }

    // Fallback timeout (max 3 seconds)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
    };
  }, []);

  // Show loading spinner while loading
  if (loading) {
    return <LoadingSpinner />;
  }

  // Show main content after loading
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <AboutUs/>
      <Cards/>
      <Choose/>
      <Serve/>
      <Contact/>
      <Testimonial/>
      <Footer/>
    </div>
  );
}

export default App;