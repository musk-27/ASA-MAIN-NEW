import React, { useState } from "react";
import {
  FaBasketballBall,
  FaMedal,
  FaDumbbell,
  FaClipboardList,
} from "react-icons/fa";
import AOS from "aos";

// Principles data
const principles = [
  {
    icon: <FaBasketballBall size={40} className="text-yellow-500" />,
    title: "Team Spirit",
    description:
      "Success in basketball requires a strong sense of teamwork and collaboration to achieve common goals.",
    imageUrl: "/assets/images/cricket/Gallery1.JPG", // Add your image URL here
    link: "Read more →",
  },
  {
    icon: <FaMedal size={40} className="text-yellow-500" />,
    title: "Discipline",
    description:
      "Discipline is key to mastering basketball techniques and strategies essential for success on the court.",
    imageUrl: "/assets/images/basketball/discipline.jpg", // Add your image URL here
    link: "Read more →",
  },
  {
    icon: <FaDumbbell size={40} className="text-yellow-500" />,
    title: "Physical Fitness",
    description:
      "Basketball requires peak physical fitness to endure the demands of the game and enhance performance.",
    imageUrl: "/assets/images/basketball/fitness.jpg", // Add your image URL here
    link: "Read more →",
  },
  {
    icon: <FaClipboardList size={40} className="text-yellow-500" />,
    title: "Strategy",
    description:
      "Developing effective strategies is crucial for winning games and outsmarting opponents on the court.",
    imageUrl: "/assets/images/basketball/strategy.jpg", // Add your image URL here
    link: "Read more →",
  },
];

const Principles = () => {
  return (
    <section className="bg-black text-white">
      <p
        className="text-center text-white py-10 text-2xl md:text-4xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        OUR Principles
      </p>
      <div className="px-4 lg:px-20 mx-auto max-w-screen-xl"> {/* Add max-w-screen-xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="bg-black p-6 shadow-lg text-center border-4 border-transparent animate-borderRotate transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 200}
            >
              <div className="mb-4 flex justify-center">{principle.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{principle.title}</h3>
              <p className="text-sm mb-4">{principle.description}</p>
              {/* <button
                onClick={() => openModal(principle)}
                className="text-white hover:text-yellow-500 transition-colors duration-300"
              >
                {principle.link}
              </button> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Principles;
