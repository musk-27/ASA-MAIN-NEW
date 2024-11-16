import React, { useState } from "react";

const VideoSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open the video modal
  const openModal = () => setIsOpen(true);
  // Function to close the video modal
  const closeModal = () => setIsOpen(false);

  return (
    <div className="relative bg-cover bg-center h-auto">
      {/* Overlay for the background */}
      <div className="absolute inset-0 bg-black"></div>

      <div className="relative z-20 lg:px-40 py-20 lg:py-24 text-center text-white mx-auto max-w-7xl">
        <h2 className="text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text" data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100">Building Champions through School Sports</h2>
        <h3 className="mt-10 text-lg italic" data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100">"Where Every Student Finds Their Passion"</h3>
        <p className="mt-10 text-justify px-4 text-lg font-montserrat" data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100">
          At our school, sports play a vital role in shaping the character of students. Whether it’s the competitive 
          spirit of track and field, the teamwork required in football, or the skill and concentration in basketball, 
          each sport offers a unique learning experience. Our sports programs are designed to nurture athletic talent 
          and promote physical fitness, teamwork, and discipline.
        </p>
        <p className="mt-4 text-justify px-4 text-lg font-montserrat" data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="200">
          Through our sports initiatives, students not only excel in physical activities but also build life skills 
          such as resilience, leadership, and time management. From local tournaments to regional championships, we 
          create opportunities for every student to challenge themselves and grow.
        </p>
        <div className="flex justify-center mt-10">
          <button onClick={openModal} className="button flex items-center bg-yellow-300 p-2 rounded hover:bg-yellow-700">
            <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for YouTube video */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="relative bg-white rounded-lg overflow-hidden max-w-3xl w-full">
            {/* Close button */}
            <button onClick={closeModal} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              ✖
            </button>
            {/* YouTube Video */}
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/U1HQEAtWWcg?si=hpXDLO5noNUdwIz0"
              title="YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
