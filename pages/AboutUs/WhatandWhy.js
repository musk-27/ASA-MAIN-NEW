import React from 'react';
import { FaRunning, FaTrophy } from 'react-icons/fa';

const WhatandWhy = () => {
  return (
    <div className=" container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* What We Do Section */}
        <div className="text-center md:text-left">
          <FaRunning className="text-4xl mx-auto md:mx-0 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
          <p className="text-gray-600">
            Our mission is to inspire and empower individuals of all ages to lead active, healthy lifestyles through sports. We organize events, leagues, and training programs that encourage people to get involved, stay fit, and connect with others who share a passion for athletics. Whether you're a beginner or a seasoned athlete, we provide opportunities to grow, compete, and achieve your personal best.
          </p>
        </div>

        {/* Why We Do It Section */}
        <div className="text-center md:text-left">
          <FaTrophy className="text-4xl mx-auto md:mx-0 mb-4" />
          <h2 className="text-2xl font-semibold mb-4">Why We Do It</h2>
          <p className="text-gray-600">
            We believe that sports have the power to bring people together, build character, and promote physical and mental well-being. In a world that is increasingly digital, we aim to create spaces where people can connect face-to-face, develop resilience, and celebrate achievements. Our programs are designed not just to improve fitness but to foster lifelong friendships, teamwork, and the joy of pushing beyond one's limits.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default WhatandWhy;
