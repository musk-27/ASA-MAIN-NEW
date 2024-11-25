import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Swiper modules
import "swiper/css";
import "swiper/css/autoplay";
import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

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
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:px-20 lg:py-20">
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
        <h1 className="lg:text-3xl text-lg font-bold text-white rounded-full mb-4">
          Welcome to Our Website
        </h1>
        <p className="text-lg text-white text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          euismod nisi. Ut hendrerit arcu quis lorem facilisis, in vehicula
          felis laoreet.
        </p>
        <p className="mt-4 text-lg text-white text-justify mb-6">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
        <CircleCTA
          link="/OurPartners"
          title="Explore Our"
          subtitle="Partners"
          imageClass="bg-sports-edited"
        />
      </div>
    </div>
  );
}
