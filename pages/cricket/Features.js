import React, { useEffect } from "react";
import { FaDumbbell, FaTrophy, FaMedal, FaBoxOpen, FaCricketBat } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out", // Easing function
      once: false, // Allow animations to run every time they come into view
    });
  }, []);

  const services = [
    {
      title: "Personal Training",
      description: "Customized fitness plans to enhance your strength and agility for cricket, helping you excel on the field.",

      icon: <FaDumbbell />,
      gradient: "bg-gradient-to-r from-blue-300 to-blue-800",
    },
    {
      title: "Team Competitions",
      description: "Participate in thrilling cricket tournaments that foster teamwork and sportsmanship, championship trophy.",
      icon: <FaTrophy />,
      gradient: "bg-gradient-to-r from-green-300 to-green-800",
    },
    {
      title: "Junior League",
      description: "Nurturing young talent through structured cricket leagues, providing a fun and competitive.",
      icon: <FaMedal />,
      gradient: "bg-gradient-to-r from-red-300 to-red-800",
    },
    {
      title: "Top Equipment",
      description: "Access to premium cricket gear designed for performance, ensuring players are equipped to excel in every match.",
      icon: <FaBoxOpen />,
      gradient: "bg-gradient-to-r from-purple-300 to-purple-800",
    },
  ];

  return (
    <div className="flex justify-center items-center bg-black">
      <div className="bg-black flex flex-col items-center justify-center p-4 lg:px-1 lg:py-40">
        <p
          className="text-white lg:py-10 py-10 text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          OUR Features
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-lg w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`cursor-pointer service-card w-full max-w-[300px] shadow-xl snap-start shrink-0 py-8 px-6 rounded-2xl flex flex-col items-center gap-3 transition-transform duration-300 transform group ${service.gradient} hover:scale-105`}
              data-aos="zoom-in" // Add zoom-in effect
              data-aos-delay={`${index * 100}`} // Stagger animation
            >
              <div className="text-5xl h-12 w-12 text-black">
                {service.icon}
              </div>
              <p className="font-bold text-lg text-center text-black/80">
                {service.title}
              </p>
              <p className="text-black text-md">
                {service.description}
              </p>
              <p
                style={{
                  WebkitTextStroke: "2px black",
                  WebkitTextFillColor: "transparent",
                }}
                className="text-5xl font-bold self-end"
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
