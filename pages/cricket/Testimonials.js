import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css";

const testimonials = [
  {
    quote:
      "Playing for my country was a dream come true. The training and support from the coaches at this academy have been phenomenal. I'm proud to be part of this team!",
    name: "Virat Kohli",
    role: "Indian Cricketer",
    image:
      "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png",
  },
  {
    quote:
      "The strategies I learned here helped me sharpen my skills and enhance my game. This academy is a great place for aspiring cricketers!",
    name: "Ben Stokes",
    role: "England Cricketer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Ben_Stokes_2021.jpg/440px-Ben_Stokes_2021.jpg",
  },
  {
    quote:
      "The coaching staff is exceptional. They not only teach you the game but also instill a winning mindset. Highly recommend this academy to any cricketer!",
    name: "Kane Williamson",
    role: "New Zealand Cricketer",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Kane_Williamson_in_2018.jpg/440px-Kane_Williamson_in_2018.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <div className="bg-black py-10 ">
      <p className="xl:text-4xl text-3xl text-white font-akira text-center   text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text " data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
        Testimonials
      </p>
      <div
        // data-aos-duration="1000"
        // data-aos="fade-up"
        // data-aos-delay="100"
        className="p-4 lg:px-60 w-full flex justify-center items-center dark:bg-gray-700 py-10" data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <section className="bg-white  rounded-lg w-full">
          <div className="max-w-screen-md px-4 py-8 mx-auto text-center lg:py-20 lg:px-6">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={30}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="mySwiper"
            >
              {testimonials.map((testimonial, index) => (
                <SwiperSlide key={index}>
                  <figure className="max-w-md mx-auto">
                    <svg
                      className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                    <blockquote>
                      <p className="text-xl font-medium text-gray-900 md:text-2xl dark:text-white">
                        {`"${testimonial.quote}"`}
                      </p>
                    </blockquote>
                    <figcaption className="flex items-center justify-center mt-6 space-x-3">
                      <img
                        className="w-12 h-12 rounded-full"
                        src={testimonial.image}
                        alt="profile picture"
                      />
                      <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700 ">
                        <div className="pr-3 font-medium text-gray-900 dark:text-white">
                          {testimonial.name}
                        </div>
                        <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          {testimonial.role}
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
