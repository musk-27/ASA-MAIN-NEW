import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Facilities() {
  // Slider settings
  const settings = {
    dots: true, // Enable dots for navigation
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false, // Disable navigation arrows
  };

  return (
    // <div className="py-16 px-4 bg-black">
    //   {/* Section 1: Title and Overview */}
    //   <section className="mb-16 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center">
    //     {/* Left: Features */}
    //     <div className="md:w-1/2 mb-8 md:mb-0">
    //       <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange text-center md:text-left font-akira">
    //         Facilities
    //       </h2>
    //       <p className="mt-4 text-center md:text-left text-gray-300">
    //         Our state-of-the-art archery range is equipped with modern bows,
    //         arrows, and safety gear to ensure a top-notch training experience.
    //       </p>
    //       <ul className="mt-4 space-y-2 text-gray-300">
    //         <li>✔ Modern bows and arrows</li>
    //         <li>✔ Professional coaching staff</li>
    //         <li>✔ Safety gear for all participants</li>
    //         <li>✔ Regular maintenance and upgrades</li>
    //         <li>✔ Spacious and well-lit range area</li>
    //       </ul>
    //     </div>

    //     {/* Right: Image Slider */}
    //     <div className="md:w-1/2">
    //       <Slider {...settings}>
    //         <div>
    //           <img
    //             src="/assets/Images/Activities/Image1.jpg"
    //             alt="Archery Range 1"
    //             className="w-full h-64 object-cover rounded-lg shadow-md"
    //           />
    //         </div>
    //         <div>
    //           <img
    //             src="/assets/Images/Activities/Image2.jpg"
    //             alt="Archery Range 2"
    //             className="w-full h-64 object-cover rounded-lg shadow-md"
    //           />
    //         </div>
    //         <div>
    //           <img
    //             src="/assets/Images/Activities/Image3.jpg"
    //             alt="Archery Range 3"
    //             className="w-full h-64 object-cover rounded-lg shadow-md"
    //           />
    //         </div>
    //         {/* Add more slides as needed */}
    //       </Slider>
    //     </div>
    //   </section>

    //   <section class="w-full mx-auto py-10 bg-black dark:bg-gray-900 dark:text-white">
    //     <div class="w-fit pb-1 px-2 mx-4 rounded-md text-2xl font-semibold border-b-2 border-blue-600 dark:border-b-2 dark:border-yellow-600">
    //       Services
    //     </div>

    //     <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-4">
    //       <div class="lg:w-[50%] xs:w-full">
    //         <Slider {...settings}>
    //           <div>
    //             <img
    //               src="/assets/Images/Activities/Image1.jpg"
    //               alt="Archery Range 1"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           <div>
    //             <img
    //               src="/assets/Images/Activities/Image2.jpg"
    //               alt="Archery Range 2"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           <div>
    //             <img
    //               src="/assets/Images/Activities/Image3.jpg"
    //               alt="Archery Range 3"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           {/* Add more slides as needed */}
    //         </Slider>
    //       </div>
    //       <div class="lg:w-[50%] sm:w-full xs:w-full bg-black dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
    //         <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
    //           Lorem ipsum dolor sit amet consectetur
    //         </h2>
    //         <p class="text-md mt-4">
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
    //           placeat assumenda nam veritatis, magni doloremque pariatur quos
    //           fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
    //           sed necessitatibus aliquam error laborum delectus quaerat.
    //           Delectus hic error eligendi sed repellat natus fuga nobis tempora
    //           possimus ullam!
    //         </p>
    //       </div>
    //     </div>
    //     <div class="xl:w-[80%] sm:w-[85%] xs:w-[90%] mx-auto flex md:flex-row xs:flex-col lg:gap-4 xs:gap-2 justify-center lg:items-stretch md:items-center mt-6">
    //       <div class="md:hidden sm:block xs:block xs:w-full">
    //         <img
    //           class="lg:rounded-t-lg sm:rounded-sm xs:rounded-sm"
    //           src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMXx8aG9tZXxlbnwwfDB8fHwxNzEwNDkwMDcwfDA&ixlib=rb-4.0.3&q=80&w=1080"
    //           alt="billboard image"
    //         />
    //       </div>
    //       <div class="lg:w-[50%] xs:w-full bg-black dark:bg-gray-900 dark:text-gray-400 md:p-4 xs:p-0 rounded-md">
    //         <h2 class="text-3xl font-semibold text-gray-900 dark:text-white">
    //           Lorem ipsum dolor sit amet consectetur
    //         </h2>

    //         <p class="text-md mt-4">
    //           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore
    //           placeat assumenda nam veritatis, magni doloremque pariatur quos
    //           fugit ipsa id voluptatibus deleniti officiis cum ratione eligendi
    //           sed necessitatibus aliquam error laborum delectus quaerat.
    //           Delectus hic error eligendi sed repellat natus fuga nobis tempora
    //           possimus ullam!
    //         </p>
    //       </div>
    //       <div class="md:block sm:hidden xs:hidden lg:w-[50%] xs:w-full">
    //         <Slider {...settings}>
    //           <div>
    //             <img
    //               src="/assets/Images/Activities/Image1.jpg"
    //               alt="Archery Range 1"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           <div>
    //             <img
    //               src="/assets/Images/Activities/Image2.jpg"
    //               alt="Archery Range 2"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           <div>
    //             <img
    //               src="/assets/Images/Cricket/Gallery4.jpg"
    //               alt="Archery Range 3"
    //               className="w-full h-64 object-cover rounded-lg shadow-md"
    //             />
    //           </div>
    //           {/* Add more slides as needed */}
    //         </Slider>
    //       </div>
    //     </div>
    //   </section>

      
    // </div>
    <div>Hii</div>
  );
}
