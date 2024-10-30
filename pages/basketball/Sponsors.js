import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

// Import icons from react-icons
import {
  FaApple,
  FaGoogle,
  FaFacebook,
  FaAmazon,
  FaMicrosoft,
} from "react-icons/fa";

const Sponsors = () => {
  const sponsors = [
    { icon: <FaApple size={60} /> },
    { icon: <FaGoogle size={60} /> },
    { icon: <FaFacebook size={60} /> },
    { icon: <FaAmazon size={60} /> },
    { icon: <FaMicrosoft size={60} /> },
    { icon: <FaApple size={60} /> },
    { icon: <FaGoogle size={60} /> },
    { icon: <FaFacebook size={60} /> },
    { icon: <FaAmazon size={60} /> },
    { icon: <FaMicrosoft size={60} /> },
  ];

  return (
    <div className="sponsors bg-gray-500 py-8 px-10 xl:px-10 ">
      <Swiper
        spaceBetween={80}
        slidesPerView={6}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {sponsors.map((sponsor, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="text-white">
              {sponsor.icon}<br/>
              <p className="text-center mt-2">{sponsor.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Sponsors;
