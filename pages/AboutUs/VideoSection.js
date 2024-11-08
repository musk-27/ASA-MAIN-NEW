// import React, { useState } from "react";
// import Modal from "react-modal";
// import { FaPlay } from "react-icons/fa";

// Modal.setAppElement("#__next"); // Ensure accessibility for the modal

// const VideoSection = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);

//   const openModal = () => {
//     setModalIsOpen(true);
//   };

//   const closeModal = () => {
//     setModalIsOpen(false);
//   };

//   return (
//     <div className="relative bg-cover bg-center h-auto" style={{ backgroundImage: 'url(/assets/images/cricket.jpg)' }}>
//       {/* Overlay for the background */}
//       <div className="absolute inset-0 bg-black opacity-50 z-10"></div>

//       <div className="relative z-20 lg:px-40 lg:py-10 text-center text-white">
//       <h2>You can trust 10+ years of experience making successful websites!</h2>
//         <h3 className="mt-4 text-lg">Celebrate the Spirit of Sports!</h3>
//         <p className="mt-2">
//           Sports bring people together, transcending borders and cultures. From the adrenaline of football 
//           to the grace of gymnastics, the world of sports is filled with excitement, passion, and remarkable stories. 
//           Whether it’s the thrill of a last-minute goal, the elegance of a well-executed routine, or the 
//           camaraderie in team sports, there’s something for everyone to enjoy.
//         </p>
//         <p className="mt-4">
//           Join us as we explore various sports, share thrilling highlights, and celebrate the athletes who inspire us 
//           every day. No matter your favorite sport, there’s always a new story waiting to be discovered!
//         </p>
//         <div className="flex justify-center lg:py-10">
//           <button onClick={openModal} className="button flex items-center bg-blue-600 p-2 rounded hover:bg-blue-700">
        //   <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
        //       <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
        //     </svg>
//           </button>
//         </div>
//       </div>

//       {/* Modal for YouTube video */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={closeModal}
//         className="flex justify-center items-center h-screen"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
//       >
//         <div className="relative bg-white rounded-lg overflow-hidden">
//           <button
//             onClick={closeModal}
//             className="absolute top-0 right-2 text-2xl text-white hover:text-red-800"
//           >
//             &times;
//           </button>
//           <iframe
//             width="560"
//             height="315"
//             src="https://www.youtube.com/embed/eSSyLSGBSp8?si=jqKqV-oaYqnRA-1k&controls=0"
//             title="YouTube video player"
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default VideoSection;



import React, { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";

Modal.setAppElement("#__next"); // Ensure accessibility for the modal

const VideoSection = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="relative bg-cover bg-center h-auto" style={{ backgroundImage: 'url(/assets/images/cricket.jpg)' }}>
      {/* Overlay for the background */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative z-20 lg:px-40 lg:py-10 text-center text-white mx-auto max-w-7xl">
        <h2 className="font-akira">You can trust 10+ years of experience making successful websites!</h2>
        <h3 className="mt-4 text-lg">Celebrate the Spirit of Sports!</h3>
        <p className="mt-2">
          Sports bring people together, transcending borders and cultures. From the adrenaline of football 
          to the grace of gymnastics, the world of sports is filled with excitement, passion, and remarkable stories. 
          Whether it’s the thrill of a last-minute goal, the elegance of a well-executed routine, or the 
          camaraderie in team sports, there’s something for everyone to enjoy.
        </p>
        <p className="mt-4">
          Join us as we explore various sports, share thrilling highlights, and celebrate the athletes who inspire us 
          every day. No matter your favorite sport, there’s always a new story waiting to be discovered!
        </p>
        <div className="flex justify-center lg:py-10">
          <button onClick={openModal} className="button flex items-center bg-blue-600 p-2 rounded hover:bg-blue-700">
          <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="26px">
              <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" fill="currentColor"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Modal for YouTube video */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex justify-center items-center h-screen"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
      >
        <div className="relative bg-white rounded-lg overflow-hidden">
          <button
            onClick={closeModal}
            className="absolute top-0 right-2 text-2xl text-white hover:text-red-800"
          >
            &times;
          </button>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/eSSyLSGBSp8?si=jqKqV-oaYqnRA-1k&controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Modal>
    </div>
  );
};

export default VideoSection;

