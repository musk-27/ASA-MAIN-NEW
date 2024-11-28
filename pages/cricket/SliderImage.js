// import React, { memo } from "react";
// import Slider from "react-slick";
// import Image from "next/image";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const SliderImage = memo(({ images, autoplaySpeed = 2000, slidesToShow = 3, centerPadding = "20px" }) => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 400,
//     slidesToShow: slidesToShow,
//     slidesToScroll: 1,
//     autoplay: true, // Autoplay enabled
//     autoplaySpeed: autoplaySpeed, // Speed of autoplay
//     centerMode: true,
//     centerPadding: centerPadding,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: slidesToShow,
//           slidesToScroll: 1,
//           centerPadding: centerPadding,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: slidesToShow === 3 ? 2 : 1,
//           slidesToScroll: 1,
//           centerPadding: "10px",
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           centerPadding: "10px",
//         },
//       },
//     ],
//   };

//   return (
//     <div className="w-full px-4 lg:px-10 flex flex-col items-center">
//       <div className="text-center text-white text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
//         Activities
//       </div>
//       <div className="p-2 rounded-lg w-full max-w-6xl mx-auto mt-10">
//         <Slider {...settings}>
//           {images.map((image, index) => (
//             <div key={index} className="px-2">
//               <div className="flex items-center justify-center rounded-lg overflow-hidden">
//                 <Image
//                   rel="preload"
//                   src={image.src}
//                   alt={image.alt}
//                   width={600}
//                   height={400}
//                   className="w-full h-auto object-cover"
//                   priority={image.priority}
//                   loading={image.priority ? undefined : "lazy"}
//                 />
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// });

// SliderImage.displayName = "SliderImage";

// export default SliderImage;


import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderImage = memo(({ images = [], autoplaySpeed = 2000, slidesToShow = 3, centerPadding = "20px" }) => {
  // If images is an empty array, display a fallback message
  if (!images.length) {
    return (
      <div className="w-full px-4 lg:px-10 flex flex-col items-center">
        <div className="text-center text-white text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
          No Images Available
        </div>
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true, // Autoplay enabled
    autoplaySpeed: autoplaySpeed, // Speed of autoplay
    centerMode: true,
    centerPadding: centerPadding,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: slidesToShow,
          slidesToScroll: 1,
          centerPadding: centerPadding,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: slidesToShow === 3 ? 2 : 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "10px",
        },
      },
    ],
  };

  return (
    <div className="w-full px-4 lg:px-10 flex flex-col items-center">
      <div className="text-center text-white text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
        Activities
      </div>
      <div className="p-2 rounded-lg w-full max-w-6xl mx-auto mt-10">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center rounded-lg overflow-hidden">
                <Image
                  rel="preload"
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                  priority={image.priority}
                  loading={image.priority ? undefined : "lazy"}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});

SliderImage.displayName = "SliderImage";

export default SliderImage;
