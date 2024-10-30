// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import { useState } from 'react';
// import { Autoplay } from 'swiper'; // Import the Autoplay module

// const CricketLearning = () => {
//     const [isHovered, setIsHovered] = useState(false);
  
//     // Array of images for the slideshow
//     const images = [
//       '/assets/images/Activities/basketallGround.jpg',
//       '/assets/images/Activities/cricketGround.jpg',
//       '/assets/images/Activities/tennisCourt.jpg',
//     ];

//   return (
//     <section
//       className={`bg-black py-12 px-6 md:px-16 transition-all duration-500`}
//       style={{
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
//       {/* Left Column: Image Slider */}
//       <div>
//         <Swiper
//           modules={[Autoplay]} // Register the Autoplay module
//           spaceBetween={10}
//           slidesPerView={1}
//           loop={true}
//           autoplay={{
//             delay: 3000, // Slide delay in milliseconds
//             disableOnInteraction: false,
//           }}
//         >
//           {images.map((image, index) => (
//             <SwiperSlide key={index}>
//               <img
//                 src={image}
//                 alt={`Slide ${index + 1}`}
//                 className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500"
//                 onMouseEnter={() => setIsHovered(true)}
//                 onMouseLeave={() => setIsHovered(false)}
//               />
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

//       {/* Right Column: Text Content */}
//       <div className="flex flex-col justify-center">
//         <h2 className={`text-xl font-akira mb-6 ${isHovered ? "text-white" : "text-white"}`}>
//           Our World-Class Cricket Facilities
//         </h2>
//         <p className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${isHovered ? "text-white" : "text-white"}`}>
//           At [School Name], we take pride in offering some of the finest cricket facilities, designed to provide the best experience for both training and matches. Our cricket grounds are professionally maintained and equipped to meet the standards of competitive cricket.
//         </p>
//         <p className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${isHovered ? "text-white" : "text-white"}`}>
//           With state-of-the-art practice nets, modern equipment, and top-notch infrastructure, our cricket field allows players to hone their skills under the guidance of experienced coaches. We ensure that every student has access to the best training resources.
//         </p>
//       </div>
//     </div>



//       <div className="lg:py-20 py-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Right Column: Text Content */}
//         <div className="flex flex-col justify-center">
//           <h2
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="100"
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="200"
//             className={`text-xl font-akira mb-6 ${
//               isHovered ? "text-white" : "text-white"
//             }`}
//           >
//             Our World-Class Cricket Facilities
//           </h2>
//           <p
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="200"
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="100"
//             className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${
//               isHovered ? "text-white" : "text-white"
//             }`}
//           >
//             At [School Name], we take pride in offering some of the finest
//             cricket facilities, designed to provide the best experience for both
//             training and matches. Our cricket grounds are professionally
//             maintained and equipped to meet the standards of competitive
//             cricket.
//           </p>
//           <p
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="200"
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="100"
//             className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${
//               isHovered ? "text-white" : "text-white"
//             }`}
//           >
//             With state-of-the-art practice nets, modern equipment, and top-notch
//             infrastructure, our cricket field allows players to hone their
//             skills under the guidance of experienced coaches. We ensure that
//             every student has access to the best training resources.
//           </p>
//           {/* <p
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className={`text-lg leading-relaxed font-montserrat text-justify ${
//               isHovered ? "text-white" : "text-white"
//             }`}
//           >
//             From fitness areas to specialized equipment, we provide everything a
//             budding cricketer needs to achieve excellence on the field. Our
//             facilities are open year-round for both practices and competitive
//             events.
//           </p> */}
//         </div>

//         {/* Left Column: Image */}
//         <div>
//           <img
//             // data-aos-duration="1000"
//             // data-aos="fade-up"
//             // data-aos-delay="100"
//             src="/assets/images/Activities/basketallGround.jpg"
//             alt="Cricket Field"
//             className="w-full h-auto object-cover rounded-lg shadow-lg  transition-all duration-500"
//             onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
//             onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CricketLearning;



// Import required Swiper modules and CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'; // Adjusted import path for Autoplay
import 'swiper/css';
import 'swiper/css/autoplay';

export default function TwoSectionLayout() {
  const images = [
    '/assets/images/Activities/Image1.jpg',
    '/assets/images/Activities/cricketGround.jpg',
    '/assets/images/Activities/Image3.jpg',
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Left Column: Image Slider */}
      <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Column: Text Content */}
      <div className="flex flex-col justify-center">
        <h2 className="text-xl font-akira mb-6 text-white">
          Our World-Class Cricket Facilities
        </h2>
        <p className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white">
          At [School Name], we take pride in offering some of the finest cricket facilities, designed to provide the best experience for both training and matches. Our cricket grounds are professionally maintained and equipped to meet the standards of competitive cricket.
        </p>
        <p className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white">
          With state-of-the-art practice nets, modern equipment, and top-notch infrastructure, our cricket field allows players to hone their skills under the guidance of experienced coaches. We ensure that every student has access to the best training resources.
        </p>
      </div>





 {/* Right Column: Text Content */}
 <div className="flex flex-col justify-center">
        <h2 className="text-xl font-akira mb-6 text-white">
          Our World-Class Cricket Facilities
        </h2>
        <p className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white">
          At [School Name], we take pride in offering some of the finest cricket facilities, designed to provide the best experience for both training and matches. Our cricket grounds are professionally maintained and equipped to meet the standards of competitive cricket.
        </p>
        <p className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white">
          With state-of-the-art practice nets, modern equipment, and top-notch infrastructure, our cricket field allows players to hone their skills under the guidance of experienced coaches. We ensure that every student has access to the best training resources.
        </p>
      </div>







       {/* Left Column: Image Slider */}
       <div>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-cover rounded-lg shadow-lg transition-all duration-500"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </div>
  );
}
