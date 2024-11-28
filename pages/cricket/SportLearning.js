// import React, { useState } from "react";
// import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

// const CricketLearning = () => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div className="mx-auto bg-black py-12 px-4">
//       <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
//         {/* Larger Column with Image */}
//         <div className="col-span-1 lg:col-span-8">
//           <img
//             src="/assets/images/Activities/basketallGround.jpg"
//             alt="Basketball Court"
//             className="w-full h-auto rounded-lg shadow-lg"
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           />
//         </div>
//         {/* Smaller Column with Content */}
//         <div className="col-span-1 lg:col-span-4 text-white">
//           <h2
//             className="text-2xl font-bold mb-4 font-akira leading-tight"
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
//             Our World-Class Cricket Facilities
//           </h2>
//           <p
//             className="text-justify mb-6"
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="300"
//           >
            // At Arya Gurukul School, we proudly offer top-notch basketball
            // facilities that promote athletic excellence and teamwork. Our
            // modern courts feature high-quality flooring and regulation-sized
            // hoops, providing an ideal environment for practice and competition.
            // With state-of-the-art basketball courts, modern training equipment,
            // and top-notch infrastructure, our facilities enable players to
            // develop their skills under the guidance of experienced coaches. We
            // ensure that every student has access to the best resources for
            // training and competition.
//           </p>
//           <CircleCTA
//             link="/Enrol"
//             title="Enrol Now"
//             subtitle="With Us"
//             imageClass="bg-basketballHome"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CricketLearning;


import React from "react";
import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

const SportLearning = ({ image, title, description, link, ctaTitle, ctaSubtitle, imageClass }) => {
  return (
    <div className="mx-auto bg-black py-12 px-4 lg:px-20">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Larger Column with Image */}
        <div className="col-span-1 lg:col-span-8">
          <img
            src={image}
            alt={title}
            className="w-full h-auto rounded-lg shadow-lg"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          />
        </div>
        {/* Smaller Column with Content */}
        <div className="col-span-1 lg:col-span-4 text-white">
          <h2
            className="text-xl font-bold mb-4 font-akira leading-tight"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {title}
          </h2>
          <p
            className="text-justify mb-6"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {description}
          </p>
          <CircleCTA
            link={link}
            title={ctaTitle}
            subtitle={ctaSubtitle}
            imageClass={imageClass}
          />
        </div>
      </div>
    </div>
  );
};

export default SportLearning;
