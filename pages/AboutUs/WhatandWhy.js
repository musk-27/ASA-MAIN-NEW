import React from 'react';
import { FaRunning, FaTrophy } from 'react-icons/fa';

const WhatandWhy = () => {
  return (
    <div className="mx-auto px-4 lg:py-20 lg:px-40 max-w-screen-xl">
      <h2 className="text-center text-3xl lg:text-3xl font-bold mb-10  duration-200 transform font-akira text-black">
          Empowering Lives Through Sports
          </h2>
      <h2 className="text-center text-3xl lg:text-3xl font-bold mb-10  duration-200 transform font-akira text-black">
         
         
          </h2>
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* What We Do Section */}
        <div data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100" className="text-center md:text-left bg-black text-white p-10 rounded-2xl">
          <FaRunning className="text-4xl mx-auto md:mx-0 mb-4 text-yellow-300" />
          <h2 className="text-2xl font-semibold mb-4 text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">What We Do</h2>
          <p className="text-white text-justify">
            Our mission is to inspire and empower individuals of all ages to lead active, healthy lifestyles through sports. We organize events, leagues, and training programs that encourage people to get involved, stay fit, and connect with others who share a passion for athletics. Whether you're a beginner or a seasoned athlete, we provide opportunities to grow, compete, and achieve your personal best.
          </p>
        </div>

        {/* Why We Do It Section */}
        <div data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100" className="text-center md:text-left bg-black text-white p-10 rounded-2xl">
          <FaTrophy className="text-4xl mx-auto md:mx-0 mb-4 text-yellow-300" />
          <h2 className="text-2xl font-semibold mb-4 font-akira text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">Why We Do It</h2>
          <p className="text-white text-justify">
            We believe that sports have the power to bring people together, build character, and promote physical and mental well-being. In a world that is increasingly digital, we aim to create spaces where people can connect face-to-face, develop resilience, and celebrate achievements. Our programs are designed not just to improve fitness but to foster lifelong friendships, teamwork, and the joy of pushing beyond one's limits.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default WhatandWhy;
