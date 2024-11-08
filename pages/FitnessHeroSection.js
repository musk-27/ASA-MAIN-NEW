import React from 'react';
import Image from 'next/image';

const FitnessHeroSection = () => {
  // Array of logo paths - replace with actual logo paths
  const logos = [
    '/crossfit-logo-1.svg',
    '/crossfit-logo-2.svg',
    '/crossfit-logo-3.svg',
    '/crossfit-logo-4.svg',
    '/crossfit-logo-5.svg',
    '/crossfit-logo-6.svg'
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-[600px] bg-gray-100 overflow-hidden">
        {/* Curved/Arched Background */}
       
        <div className="text-center font-akira text-4xl">
          <p>Watch How we work</p>

         
        </div>
        
        {/* Content Container */}
        <div className="relative h-full max-w-6xl mx-auto px-4">
          {/* Text Overlay */}
         
          
          {/* Play Button */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <button className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg hover:bg-yellow-500 transition-colors">
              <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1"></div>
            </button>
          </div>
          
          {/* YouTube Video */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full relative">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/vaHYMtU4TiQ?controls=0&autoplay=1&mute=1&loop=1&playlist=vaHYMtU4TiQ" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen 
                className="w-full h-full object-cover rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Logo Strip */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center">
            {logos.map((logo, index) => (
              <div key={index} className="w-24 h-24 relative grayscale hover:grayscale-0 transition-all">
                <img
                  src={logo}
                  alt={`Crossfit logo ${index + 1}`}
                  className="w-full h-full object-contain opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FitnessHeroSection;
