import React, { useState } from "react";
// import Modal from "react-modal";
import {
  FaBasketballBall,
  FaMedal,
  FaDumbbell,
  FaClipboardList,
  FaTimes,
} from "react-icons/fa";
import AOS from "aos";

// Set the app element for accessibility (for screen readers)
// if (typeof window !== "undefined") {
//   Modal.setAppElement(document.body);
// }

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
  // const [modalIsOpen, setModalIsOpen] = useState(false);
  // const [selectedPrinciple, setSelectedPrinciple] = useState(null);

  // const openModal = (principle) => {
  //   setSelectedPrinciple(principle);
  //   setModalIsOpen(true);
  // };

  // const closeModal = () => {
  //   setModalIsOpen(false);
  //   setSelectedPrinciple(null);
  // };

  return (
    <section className="bg-black text-white">
      <p
        className="text-center text-white  py-10 text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        OUR Principles
      </p>
      <div className="container mx-auto">
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

      {/* Modal */}
      {/* <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="modal relative"
        overlayClassName="overlay"
        contentLabel="Principle Details"
      >
        {selectedPrinciple && (
          <div className="flex flex-col md:flex-row relative bg-black p-1 lg:p-4">
            <button
              onClick={closeModal}
              className="absolute -top-2 right-0 text-white"
            >
              <FaTimes size={24} />
            </button>
            <div className="w-full md:w-1/2 p-4 text-white">
              <h2 className="text-xl font-semibold mb-8">
                {selectedPrinciple.title}
              </h2>
              <p className="mb-8">{selectedPrinciple.description}</p>
              <button
                className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300"
                onClick={() => alert("Join Now button clicked!")} // Replace with actual functionality
              >
                Join Now
              </button>
            </div>
            <div className="w-full md:w-1/2 p-4">
              <img
                src={selectedPrinciple.imageUrl}
                alt={selectedPrinciple.title}
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        )}
      </Modal> */}
    </section>
  );
};

export default Principles;
