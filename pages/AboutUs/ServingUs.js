// import React from 'react'

// const ServingUs = () => {
//   return (
//     <div className="max-w-screen-xl mx-auto">{/* Tennis Community Section */}
//       <section className="bg-[#f5f5e7] py-24 px-6 lg:px-12 flex flex-col lg:flex-row items-center">
//         <div className="lg:w-1/2 mb-12 lg:mb-0">
//           <h2 className="text-3xl lg:text-4xl font-bold mb-4">
//             Dedicated To Serving The Tennis Community
//           </h2>
//           <ul className="text-lg font-montserrat mb-6 space-y-2">
//             <li>✔️ 4 Hard & 8 Clay courts</li>
//             <li>✔️ Affordable and flexible membership</li>
//             <li>✔️ A wide range of tennis programs</li>
//           </ul>
//           <div className="flex items-center mb-6 space-x-6">
//             <div className="flex items-center space-x-2">
//               <span role="img" aria-label="phone">
//                 📞
//               </span>
//               <p className="text-lg font-bold">88 700 600</p>
//             </div>
//             <div className="flex items-center space-x-2">
//               <span role="img" aria-label="calendar">
//                 📅
//               </span>
//               <p className="text-lg font-bold">Book here</p>
//             </div>
//           </div>
//           <button className="bg-[#a0cf4e] text-black font-bold py-2 px-6 rounded">
//             Get Involved
//           </button>
//         </div>
//         <div className="lg:w-1/2">
//           <img
//             src="/assets/images/AGN.webp"
//             alt="Tennis Court"
//             className="rounded-lg object-cover w-full h-auto"
//           />
//         </div>
//       </section>
//     </div>
//   )
// }

// export default ServingUs


import React from 'react';

const ServingUs = () => {
  return (
    <div className="w-full bg-black"> {/* Serving the Sports Community Section */}
      <section className=" text-white py-24 px-6 lg:px-12 flex flex-col lg:flex-row items-center mx-auto max-w-screen-xl">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
            Dedicated to Serving the Sports Community
          </h2>
          
          <ul className="text-lg mb-6 space-y-2">
            <li>✔️ State-of-the-art facilities for various sports</li>
            <li>✔️ Affordable and flexible membership options</li>
            <li>✔️ Comprehensive training programs for all skill levels</li>
          </ul>
          <div className="flex items-center mb-6 space-x-6">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="phone">📞</span>
              <p className="text-lg font-bold">88 700 600</p>
            </div>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="calendar">📅</span>
              <p className="text-lg font-bold">Book Now</p>
            </div>
          </div>
          <button className="bg-[#51AEDA] text-black font-bold py-2 px-6 rounded">
            Enrol Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/assets/images/AGN.webp" // Replace with your image path
            alt="Sports Facilities"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}

export default ServingUs;
