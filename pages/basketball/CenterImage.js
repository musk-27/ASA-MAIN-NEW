import React, { useEffect } from "react";
import Image from 'next/image';
import { FaDumbbell, FaClipboardList, FaUsers, FaStopwatch, FaTrophy } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gradient-to-r from-black-900 to-purple-800 text-white px-4 lg:py-20 flex flex-col items-center justify-center">
      {/* Heading */}
      <p className="font-akira text-center text-lg lg:text-4xl font-bold mb-10">
        This is why you should <br /> look no further
      </p>

      {/* Main Section */}
      <div className="flex flex-col md:flex-row justify-between items-center w-full max-w-6xl space-y-10 md:space-y-0 md:space-x-12 lg:px-20">

        {/* Left Section */}
        <div className="space-y-20" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
          {/* Training */}
          <div className="flex items-center space-x-4">
            <FaDumbbell size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Training</h3>
              <p className='italic'>Effective training from<br /> our professional coaches</p>
            </div>
          </div>

          {/* Authority */}
          <div className="flex items-center space-x-4">
            <FaClipboardList size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Authority</h3>
              <p className='italic'>We focus on independent <br />values in every game</p>
            </div>
          </div>

          {/* Youth Academy */}
          <div className="flex items-center space-x-4">
            <FaUsers size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Youth Academy</h3>
              <p className='italic'>A great training program <br />for the younger players</p>
            </div>
          </div>
        </div>

        {/* Middle Image (Basketball) */}
        <div className="relative w-40 h-40 lg:w-64 lg:h-64 animate-bounce">
          <Image
            src="/assets/images/CenterImage.png" // Replace with a similar basketball image
            alt="Basketball"
            layout="fill"
            objectFit="contain"
            className="rounded-full"
          />
        </div>

        {/* Right Section */}
        <div className="space-y-20" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
          {/* Precision & Timing */}
          <div className="flex items-center space-x-4">
            <FaStopwatch size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Precision & Timing</h3>
              <p className='italic'>The players learn to grasp<br/> the game faster</p>
            </div>
          </div>

          {/* Team Unity */}
          <div className="flex items-center space-x-4">
            <FaUsers size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Team Unity</h3>
              <p className='italic'>Being a team player has a <br />deeper sense in sports</p>
            </div>
          </div>

          {/* Championship */}
          <div className="flex items-center space-x-4">
            <FaTrophy size={36} className="text-yellow-400" />
            <div>
              <h3 className="text-xl font-bold">Championship</h3>
              <p className='italic'>All our players get to take <br />part in championships</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
