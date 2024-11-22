// // import React from "react";

// // const OurApproach = () => {
// //   return (
// //     <div>
// //       {/* Two Column Text and Image Section */}
// //       <section className="py-16 px-6 lg:px-60">
// //         <div className="max-w-7xl mx-auto space-y-12">
// //           <div className="flex flex-col lg:flex-row items-center gap-12">
// //             <div className="flex-1">
// //               <h2 className="text-3xl font-akira mb-4">Our Approach</h2>
// //               <p className="text-gray-600 text-lg">
// //                 At Arya Sports Academy, we adopt a student-centric approach to
// //                 training. Our coaches are dedicated to nurturing the unique
// //                 talents of each athlete, fostering teamwork, discipline, and
// //                 personal growth. Our commitment to excellence helps athletes
// //                 excel not only in sports but also in academics, developing
// //                 qualities that will serve them for a lifetime.
// //               </p>
// //             </div>
// //             <div className="flex-1">
// //               <img
// //                 src="/assets/images/BasketballAcademy.jpg"
// //                 alt="Our Approach"
// //                 className="w-full h-auto rounded-lg shadow-md"
// //               />
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default OurApproach;


// import React from "react";

// const OurApproach = () => {
//   return (
//     <div>
//       {/* Two Column Text and YouTube Video Section */}
    //   <section className="py-16 px-6 lg:px-60">
    //     <div className="max-w-7xl mx-auto space-y-12">
    //       <div className="flex flex-col lg:flex-row items-center gap-12">
    //         <div className="flex-1">
    //           <h2 className="text-3xl font-akira mb-4">Our Approach</h2>
    //           <p className="text-gray-600 text-lg">
    //             At Arya Sports Academy, we adopt a student-centric approach to
    //             training. Our coaches are dedicated to nurturing the unique
    //             talents of each athlete, fostering teamwork, discipline, and
    //             personal growth. Our commitment to excellence helps athletes
    //             excel not only in sports but also in academics, developing
    //             qualities that will serve them for a lifetime.
    //           </p>
    //         </div>
    //         <div className="flex-1">
    //           {/* YouTube Video Embed with custom size */}
    //           <iframe
    //             className="w-full h-80 rounded-lg shadow-md" // Set the height here, e.g., 96 (24rem or 384px)
    //             src="https://www.youtube.com/embed/eSSyLSGBSp8?controls=0&autoplay=0&mute=0&loop=0&playlist=eSSyLSGBSp8"
    //             title="Our Approach Video"
    //             frameBorder="0"
    //             allow="fullscreen"
    //             allowFullScreen
    //           ></iframe>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
//     </div>
//   );
// };

// export default OurApproach;



import React, { useState } from "react";

const OurApproach = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility

  const openModal = () => {
    setIsModalOpen(true); // Open the modal when the play button is clicked
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      {/* Two Column Text and Play Button Section */}
      <section className="py-16 px-6 lg:px-60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-akira mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg text-justify">
                At Arya Sports Academy, we adopt a student-centric approach to
                training. Our coaches are dedicated to nurturing the unique
                talents of each athlete, fostering teamwork, discipline, and
                personal growth. Our commitment to excellence helps athletes
                excel not only in sports but also in academics, developing
                qualities that will serve them for a lifetime.
              </p>
            </div>
            <div className="flex-1">
              {/* YouTube Video Embed with custom size */}
              <iframe
                className="w-full h-80 rounded-lg shadow-md" // Set the height here, e.g., 96 (24rem or 384px)
                src="https://www.youtube.com/embed/eSSyLSGBSp8?controls=0&autoplay=0&mute=0&loop=0&playlist=eSSyLSGBSp8"
                title="Our Approach Video"
                frameBorder="0"
                allow="fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-akira mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg text-justify">
                At Arya Sports Academy, we adopt a student-centric approach to
                training. Our coaches are dedicated to nurturing the unique
                talents of each athlete, fostering teamwork, discipline, and
                personal growth. Our commitment to excellence helps athletes
                excel not only in sports but also in academics, developing
                qualities that will serve them for a lifetime.
              </p>
            </div>
            <div className="flex-1 relative">
  {/* Play Button */}
  <button
    onClick={openModal}
    className="w-40 h-40 bg-red-600 text-white rounded-full flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor" // This will fill the icon with the button's text color (white)
      viewBox="0 0 24 24"
      stroke="none" // No stroke needed, we are filling the icon
      className="w-10 h-10"
    >
      <path
        fill="currentColor" // Ensures that the play icon is filled with the button's color
        d="M5 3l14 9-14 9V3z"
      />
    </svg>
  </button>
</div>

          </div>
        </div>
      </section>

      {/* Modal for Video */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          <div className="bg-white  rounded-lg p-3 max-w-3xl w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-600 rounded-full p-2"
            >
              X
            </button>
            <iframe
              className="w-full h-[400px] rounded-lg"
              src="https://www.youtube.com/embed/eSSyLSGBSp8?autoplay=0&mute=0&controls=0"
              title="Our Approach Video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurApproach;
