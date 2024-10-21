import React from 'react';
import Slider from 'react-slick';
import { FaDumbbell, FaTrophy, FaMedal, FaBoxOpen } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SportsSlider = () => {
  const features = [
    {
      title: "Personal Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaDumbbell className="text-7xl h-10 w-10" />,
      bgColor: "bg-blue-600"
    },
    {
      title: "Team Competitions",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <FaTrophy className="text-7xl h-10 w-10" />,
      bgColor: "bg-red-600"
    },
    {
      title: "Junior League",
      description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      icon: <FaMedal className="text-7xl h-10 w-10" />,
      bgColor: "bg-yellow-600"
    },
    {
      title: "Top Equipment",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse.",
      icon: <FaBoxOpen className="text-7xl h-10 w-10" />,
      bgColor: "bg-green-600"
    },
    {
      title: "Advanced Coaching",
      description: "Excepteur sint occaecat cupidatat non proident.",
      icon: <FaDumbbell className="text-7xl h-10 w-10" />,
      bgColor: "bg-blue-600"
    },
    {
      title: "Competitive Analysis",
      description: "Sint occaecat cupidatat non proident, sunt in culpa qui officia.",
      icon: <FaTrophy className="text-7xl h-10 w-10" />,
      bgColor: "bg-red-600"
    },
    {
      title: "Skill Development",
      description: "Quis autem vel eum iure reprehenderit in voluptate velit.",
      icon: <FaMedal className="text-7xl h-10 w-10" />,
      bgColor: "bg-yellow-600"
    },
    {
      title: "Fitness Assessment",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit.",
      icon: <FaBoxOpen className="text-7xl h-10 w-10" />,
      bgColor: "bg-green-600"
    },
    {
      title: "Group Training",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      icon: <FaDumbbell className="text-7xl h-10 w-10" />,
      bgColor: "bg-blue-600"
    },
    {
      title: "Equipment Training",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      icon: <FaTrophy className="text-7xl h-10 w-10" />,
      bgColor: "bg-red-600"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div>
      <p className="text-black text-center lg:py-20 py-5 text-2xl font-akira lg:text-5xl">OUR Features</p>
      <Slider {...settings}>
        {features.map((feature, index) => (
          <div key={index} className={`w-full max-w-[300px] rounded-[30px] flex flex-col justify-center hover:shadow-lg min-h-[280px] dark:bg-gray-800 dark:text-white items-start relative group ${feature.bgColor}`}>
            <div className="m-5">
              <div className="w-12 h-12 flex items-center justify-center absolute inset-x-0 top-0 ml-6 mt-6">
                {feature.icon}
              </div>
              <div className="mt-4 text-left w-full mb-3">
                <h2 className="text-2xl roboto-mono-500 text-gray-800 dark:text-white">
                  {feature.title}
                </h2>
                <p className="mt-2 text-sm text-black dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
              <a href="#">
                <div className="bg-gray-300 dark:bg-gray-700 w-10 h-10 rounded-full absolute bottom-0 left-0 m-4 flex justify-center items-center hover:ring-4 ring-gray-200 dark:ring-gray-400 hover:transition duration-700 ease-in-out">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18.256 18.256">
                    <g transform="translate(5.363 5.325)">
                      <path d="M14.581,7.05,7.05,14.581" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      <path d="M10,7l5.287.037.038,5.287" fill="none" stroke="#0D1117" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                    </g>
                    <path d="M0,0H18.256V18.256H0Z" fill="none"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SportsSlider;
