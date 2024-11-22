import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/autoplay";

const images = [
  "/assets/images/CricketSlider/10.jpg",
  "/assets/images/CricketSlider/11.jpg",
  "/assets/images/CricketSlider/8.jpg",
];

const content = [
  "Basketball is more than just a game.",
  "Elevate your skills to the next level.",
  "Join our community of passionate players.",
];

export default function SliderSection() {
  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-20 p-4">
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
      <div className="flex flex-col items-center lg:p-10 py-8">
        <h1 className="lg:text-3xl text-lg font-bold text-black bg-white p-3 rounded-full mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-white text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          euismod nisi. Ut hendrerit arcu quis lorem facilisis, in vehicula
          felis laoreet.
        </p>
        <p className="mt-4 text-lg text-white text-justify">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <button className="text-white bg-red-600 p-2 mt-8 rounded-full">
          ENROL NOW
        </button>
      </div>
    </div>
  );
}
