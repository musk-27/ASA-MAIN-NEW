// // import { Swiper, SwiperSlide } from "swiper/react";
// // import { Autoplay } from "swiper/modules"; // Import Swiper modules
// // import "swiper/css";
// // import "swiper/css/autoplay";
// // import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

// // const images = [
// //   "/assets/images/CricketSlider/10.jpg", // Replace with basketball-related images
// //   "/assets/images/CricketSlider/11.jpg", // Replace with basketball-related images
// //   "/assets/images/CricketSlider/8.jpg",  // Replace with basketball-related images
// // ];

// // const content = [
// //   "Join the Arya Gurukul Basketball Camp: A New Era of Sports Training.",
// //   "Sharpen Your Skills with Professional Coaches at Arya Gurukul.",
// //   "Become the Player You Were Meant to Be at Our Exclusive Basketball Camp.",
// // ];

// // export default function SliderSection() {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-20 p-4 lg:py-20 max-w-screen-xl mx-auto">

// //       {/* Left Section: Image Slider */}
// //       <div className="">
// //         <Swiper
// //           modules={[Autoplay]}
// //           spaceBetween={20}
// //           slidesPerView={1}
// //           loop={true}
// //           autoplay={{
// //             delay: 3000,
// //             disableOnInteraction: false,
// //           }}
// //           className="w-full"
// //         >
// //           {images.map((image, index) => (
// //             <SwiperSlide key={index}>
// //               <img
// //                 src={image}
// //                 alt={`Slide ${index + 1}`}
// //                 className="w-full h-auto object-cover rounded-lg shadow-lg"
// //               />
// //             </SwiperSlide>
// //           ))}
// //         </Swiper>
// //       </div>

// //       {/* Right Section: Content */}
// //       <div className="flex flex-col lg:px-10">
// //         <h1 className="lg:text-2xl text-sm pt-8 lg:pt-0 md:text-3xl font-akira font-bold text-white rounded-full mb-4">
// //           Arya Gurukul Basketball Camp 2024
// //         </h1>
// //         <p className="text-lg text-white text-justify mb-4">
// //         Ready to take your game to the next level? Join the Arya Gurukul Basketball Camp 2024, where players of all levels train with professional coaches. Focus on skill development, teamwork, and fitness to not just play the game, but master it. Whether you're a beginner or looking to improve for competitive play, our camp offers a unique experience to elevate your basketball skills.
// //         </p>
      
// //         <CircleCTA
// //           link="/BasketballCamp"
// //           title="Sign Up for the"
// //           subtitle="Basketball Camp"
// //           imageClass="bg-sports-edited"
// //         />
// //       </div>
// //     </div>
// //   );
// // }



// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules"; // Import Swiper modules
// import "swiper/css";
// import "swiper/css/autoplay";
// import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

// // Reusable component
// const SportSliderSection = ({ images, content, title, ctaLink, ctaTitle, ctaSubtitle, ctaClass }) => {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-20 p-4 lg:py-20 max-w-screen-xl mx-auto">
//       {/* Left Section: Image Slider */}
//       <div className="">
//         <Swiper
//           modules={[Autoplay]}
//           spaceBetween={20}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           className="w-full"
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-auto object-cover rounded-lg shadow-lg"
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Right Section: Content */}
//       <div className="flex flex-col lg:px-10">
//         <h1 className="lg:text-2xl text-sm pt-8 lg:pt-0 md:text-3xl font-akira font-bold text-white rounded-full mb-4">
//           {title}
//         </h1>
//         {content.map((text, index) => (
//           <p key={index} className="text-lg text-white text-justify mb-4">
//             {text}
//           </p>
//         ))}

//         <CircleCTA
//           link={ctaLink}
//           title={ctaTitle}
//           subtitle={ctaSubtitle}
//           imageClass={ctaClass}
//         />
//       </div>
//     </div>
//   );
// };

// export default SportSliderSection;



import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/autoplay";
import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

// Reusable component
const SportSliderSection = ({
  images = [],   // Default to an empty array if not passed
  content = [],  // Default to an empty array if not passed
  title,
  ctaLink,
  ctaTitle,
  ctaSubtitle,
  ctaClass,
}) => {
  // Check if images and content arrays are not empty before rendering
  if (images.length === 0 || content.length === 0) {
    return <div className="text-center text-white">Content or images are missing!</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-20 p-4 lg:py-20 max-w-screen-xl mx-auto">
      {/* Left Section: Image Slider */}
      <div className="">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section: Content */}
      <div className="flex flex-col lg:px-10">
        <h1 className="lg:text-2xl text-sm pt-8 lg:pt-0 md:text-3xl font-akira font-bold text-white rounded-full mb-4">
          {title}
        </h1>
        {content.map((text, index) => (
          <p key={index} className="text-lg text-white text-justify mb-4">
            {text}
          </p>
        ))}

        <CircleCTA
          link={ctaLink}
          title={ctaTitle}
          subtitle={ctaSubtitle}
          imageClass={ctaClass}
        />
      </div>
    </div>
  );
};

export default SportSliderSection;
