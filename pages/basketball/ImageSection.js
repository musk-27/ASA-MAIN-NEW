// import React, { useEffect } from "react";
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const features = [
//   {
//     title: "Expert Coaching",
//     description:
//       "Our academy features experienced coaches who provide personalized training to help each child develop their skills and confidence on the court.",
//     borderColor: "border-yellow-500",
//   },
//   {
//     title: "Skill Development Programs",
//     description:
//       "Our programs focus on individual skill development, including dribbling, shooting, passing, and defensive strategies, tailored for various age groups and skill levels.",
//     borderColor: "border-green-500",
//   },
//   {
//     title: "Competitive Opportunities",
//     description:
//       "We offer various leagues and tournaments, providing young athletes the chance to showcase their skills in competitive settings.",
//     borderColor: "border-green-500",
//   },
//   {
//     title: "Positive Team Environment",
//     description:
//       "Our academy fosters a supportive and positive atmosphere, encouraging teamwork, sportsmanship, and friendships that last a lifetime.",
//     borderColor: "border-yellow-500",
//   },
// ];

// const Principles = () => {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 text-white">
//       <div className="text-center mb-10">
//         <p
//           className="text-center text-white text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
//           data-aos-duration="1000"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           Highlighted Features
//         </p>
//         <h2 className="text-xl tracking-tight italic text-primary-800 mt-4">
//           The academy provides children the opportunity to learn and enhance their basketball skills.
//         </h2>
//       </div>

//       <div className="flex flex-col md:flex-col lg:flex-row">
//         <div className="mr-0 md:mr-8 mb-6 md:mb-0" >
//           <img
//             className="w-1/2 md:w-full mx-auto"
//             src="/assets/images/basketball.jpg"
//             alt="Basketball Training"
//             data-aos-duration="1000"
//           data-aos="fade-up"
//           data-aos-delay="100"
//           />
//         </div>

//         <div className="flex-1 flex flex-col sm:flex-row flex-wrap md:mt-10 lg:mt-0 -mb-4 -mx-2">
//           {features.map((feature, index) => (
//             <div key={index} className="w-full sm:w-1/2 mb-4 px-2">
//               <div
//                 className={`h-full py-4 px-6 border ${feature.borderColor} border-t-0 border-l-0 rounded-br-xl`}
//                 data-aos="zoom-in" // Add zoom-in animation
//                 data-aos-duration="500" // Duration of the animation
//                 data-aos-delay={index * 200} // Delay for each feature
//               >
//                 <h3 className="text-2xl font-bold text-md mb-6">
//                   {feature.title}
//                 </h3>
//                 <p className="text-sm">{feature.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Principles;


import React from "react";

const ImageSection = ({ src, alt, aosDuration, aosDelay }) => (
  <div className="mr-0 md:mr-8 mb-6 md:mb-0">
    <img
      className="w-1/2 md:w-full mx-auto"
      src={src}
      alt={alt}
      data-aos-duration={aosDuration}
      data-aos="fade-up"
      data-aos-delay={aosDelay}
    />
  </div>
);

export default ImageSection;
