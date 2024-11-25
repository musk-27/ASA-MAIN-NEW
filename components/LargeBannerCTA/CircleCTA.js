// // import Link from 'next/link';

// // const CircleCTA = () => (
// //   <Link href="/OurPartners" passHref>
// //     <div
// //       data-aos-duration="1000"
// //       data-aos="fade-up"
// //       data-aos-delay="300"
// //       className="relative cursor-pointer group lg:mt-10"
// //     >
// //       <div className="flex items-center w-32 h-32 transition-all duration-300 rounded-full group-hover:w-72 group-hover:h-32 justify-items-end ring-2 ring-white bg-sports-edited filter grayscale group-hover:grayscale-0" />
// //       <h1 className="absolute ml-16 -mt-20 text-sm text-white transition-all duration-300 group-hover:-mt-20 group-hover:ml-20 font-akira">
// //         Explore Our <br /> Partners
// //       </h1>
// //     </div>
// //   </Link>
// // );

// // export default CircleCTA;


// import Link from 'next/link';

// const CircleCTA = ({ link, title, subtitle, imageClass }) => (
//   <Link href={link} passHref>
//     <div
//       data-aos-duration="1000"
//       data-aos="fade-up"
//       data-aos-delay="300"
//       className="relative cursor-pointer group"
//     >
//       {/* Dynamic background image */}
//       <div
//         className={`flex items-center w-32 h-32 transition-all duration-300 rounded-full group-hover:w-72 group-hover:h-32 justify-items-end ring-2 ring-white filter grayscale group-hover:grayscale-0 ${imageClass}`}
//       />
//       <h1 className="absolute ml-16 -mt-20 text-sm text-white transition-all duration-300 group-hover:-mt-20 group-hover:ml-20 font-akira">
//         {title} <br /> {subtitle}
//       </h1>
//     </div>
//   </Link>
// );

// export default CircleCTA;


import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

// CircleCTA component
const CircleCTA = ({ link, title, subtitle, imageClass, isModal, setModalOpen }) => {
  const router = useRouter();

  const handleClick = () => {
    if (isModal) {
      setModalOpen(true); // Open modal
    } else {
      router.push(link); // Redirect to a different page
    }
  };

  return (
    <div
      onClick={handleClick}
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="300"
      className="relative cursor-pointer group"
    >
      {/* Dynamic background image */}
      <div
        className={`flex items-center w-32 h-32 transition-all duration-300 rounded-full group-hover:w-72 group-hover:h-32 justify-items-end ring-2 ring-white filter grayscale group-hover:grayscale-0 ${imageClass}`}
      />
      <h1 className="absolute ml-16 -mt-20 text-sm text-white transition-all duration-300 group-hover:-mt-20 group-hover:ml-20 font-akira">
        {title} <br /> {subtitle}
      </h1>
    </div>
  );
};

export default CircleCTA;
