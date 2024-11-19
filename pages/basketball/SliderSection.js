import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Adjusted import path for Autoplay
import "swiper/css";
import "swiper/css/autoplay";

export default function SliderSection({ images, title, content, reverseOrder = false }) {
return (
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 lg:p-10 p-6">
    {reverseOrder ? (
      <>
        {/* Content Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-akira mb-6 text-white">{title}</h2>
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Image Slider Column */}
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
      </>
    ) : (
      <>
        {/* Image Slider Column */}
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

        {/* Content Column */}
        <div className="flex flex-col justify-center">
          <h2 className="text-xl font-akira mb-6 text-white">{title}</h2>
          {content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-relaxed mb-4 font-montserrat text-justify text-white"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </>
    )}
  </div>
);
}
