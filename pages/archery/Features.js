import React from "react";
import { FaBullseye, FaTrophy, FaMedal, FaCrosshairs } from "react-icons/fa"; // Updated icons
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const features = [
  {
    icon: <FaBullseye />, // Archery target icon
    title: "Precision Targeting",
    description:
      "Enhance your aim and focus with techniques that sharpen your targeting skills.",
  },
  {
    icon: <FaTrophy />, // Trophy icon
    title: "Competitive Spirit",
    description:
      "Join competitions to test your skills against others and improve your performance.",
  },
  {
    icon: <FaMedal />, // Medal icon
    title: "Skill Development",
    description:
      "Receive training and guidance to develop your archery skills and achieve your personal best.",
  },
  {
    icon: <FaCrosshairs />, // Crosshair icon
    title: "Equipment Mastery",
    description:
      "Learn the ins and outs of different types of bows and arrows to find your perfect setup.",
  },
  {
    icon: <FaBullseye />, // Reusing the target icon
    title: "Mental Focus",
    description:
      "Develop mental techniques to enhance your concentration and achieve better results.",
  },
  {
    icon: <FaTrophy />, // Reusing the trophy icon
    title: "Community Engagement",
    description:
      "Join a vibrant community of archers to share tips, techniques, and experiences.",
  },
];

const Features = () => {
  return (
    <section className="py-12 bg-black text-gray-100 sm:py-12 lg:py-16">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center xl:max-w-2xl">
          <h2 className="xl:text-4xl text-3xl text-white font-akira text-center text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
            Our Archery Features
          </h2>
          <p className="mb-4">
            Explore our tools and resources designed to help you excel in the art of archery.
          </p>
        </div>
        <div className="grid max-w-4xl lg:max-w-6xl grid-cols-1 mx-auto mt-8 text-center gap-y-4 sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-20 sm:text-left">
          {features.map((feature, index) => {
            const [ref, inView] = useInView({
              triggerOnce: false,
              threshold: 0.1,
            });

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative ${index % 2 === 0 ? 'overflow-hidden' : ''}`}
              >
                {index % 2 === 0 && (
                  <div className="absolute -inset-1">
                    <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
                  </div>
                )}
                <div className="relative overflow-hidden bg-white shadow-md rounded-xl h-full">
                  <div className="p-9">
                    <div className="text-black text-7xl">{feature.icon}</div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="mt-6 text-base text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
