import React from "react";
import { FaDumbbell, FaTrophy, FaMedal, FaBoxOpen } from "react-icons/fa";

const Features = () => {
  const services = [
    {
      title: "Personal Training",
      description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
      icon: <FaDumbbell />,
      gradient: "bg-gradient-to-r from-blue-300 to-blue-800",
    },
    {
      title: "Team Competitions",
      description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
      icon: <FaTrophy />,
      gradient: "bg-gradient-to-r from-green-300 to-green-800",
    },
    {
      title: "Junior League",
      description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
      icon: <FaMedal />,
      gradient: "bg-gradient-to-r from-red-300 to-red-800",
    },
    {
      title: "Top Equipment",
      description: "Consectetur adipiscing elit, sed do eiusmod tempo.",
      icon: <FaBoxOpen />,
      gradient: "bg-gradient-to-r from-purple-300 to-purple-800",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="bg-black flex flex-col items-center justify-center p-4 lg:px-1 lg:py-20">
        <p
          className="text-white lg:py-20 py-10 text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          OUR Features
        </p>
        <div data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-lg w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer service-card w-full max-w-[300px] shadow-xl snap-start shrink-0 py-8 px-6 rounded-2xl flex flex-col items-center gap-3 transition-transform duration-300 transform group ${service.gradient} hover:scale-105`}
              
            >
              <div className="text-5xl h-12 w-12 text-black group-hover:text-white">
                {service.icon}
              </div>
              <p className="font-bold text-lg text-center group-hover:text-white text-black/80">
                {service.title}
              </p>
              <p className="text-white text-sm text-center group-hover:text-white">
                {service.description}
              </p>
              <p
                style={{
                  WebkitTextStroke: "1px gray",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-5xl font-bold self-end group-hover:text-white"
              >
                {`0${index + 1}`}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* <SportsSlider/> */}
    </div>
  );
};

export default Features;
