import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css"; // Default styles
import "swiper/css/navigation"; // Optional: for navigation
import "swiper/css/pagination"; // Optional: for pagination
import SliderImage from "./SliderImage";

const Acheivements = () => {
  return (
    <section className="bg-black  py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-3xl font-akira mb-8 text-center text-white text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
        >
          Achievements and Records
        </h2>

        {/* Timeline for Achievements */}
        <div className="mb-12">
          <h3
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-2xl font-semibold text-white mb-6"
          >
            Notable Achievements
          </h3>
          <div className="relative border-l border-white">
            {/* Achievement 1 */}
            <div className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full mt-1.5 -left-1.5"></div>
              <h4
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xl font-semibold text-white"
              >
                District Championship - 2022
              </h4>
              <p
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-white"
              >
                Our team won the district cricket championship, defeating top
                schools in the region.
              </p>
            </div>
            {/* Achievement 2 */}
            <div className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full mt-1.5 -left-1.5"></div>
              <h4
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xl font-semibold text-white"
              >
                State-Level Tournament - 2021
              </h4>
              <p
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-white"
              >
                We reached the semi-finals of the state tournament with
                remarkable individual performances.
              </p>
            </div>
            {/* Achievement 3 */}
            <div className="mb-10 ml-6">
            <div className="absolute w-3 h-3 bg-gradient-to-r from-yellow-300 to-red-500 rounded-full mt-1.5 -left-1.5"></div>
              <h4
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-xl font-semibold text-white"
              >
                Under-16 Cricket Cup - 2020
              </h4>
              <p
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-white"
              >
                Our under-16 team secured the cup in a thrilling final match.
              </p>
            </div>
          </div>
        </div>

        {/* Slider for Winning Moments */}
        <SliderImage />
      </div>
    </section>
  );
};

export default Acheivements;
