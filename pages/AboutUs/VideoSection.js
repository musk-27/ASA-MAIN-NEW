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
        <h2 className="font-akira">You can trust 10+ years of experience making successful websites!</h2>
        <h3 className="mt-4 text-lg">Celebrate the Spirit of Sports!</h3>
        <p className="mt-2 text-justify px-4">
          Sports bring people together, transcending borders and cultures. From the adrenaline of football 
          to the grace of gymnastics, the world of sports is filled with excitement, passion, and remarkable stories. 
          Whether it’s the thrill of a last-minute goal, the elegance of a well-executed routine, or the 
          camaraderie in team sports, there’s something for everyone to enjoy.
        </p>
        <p className="mt-4 text-justify px-4">
          Join us as we explore various sports, share thrilling highlights, and celebrate the athletes who inspire us 
          every day. No matter your favorite sport, there’s always a new story waiting to be discovered!
        </p>
        <div className="flex justify-center lg:py-10 py-20">
          <button onClick={openModal} className="button flex items-center bg-blue-600 p-2 rounded hover:bg-blue-700">
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
