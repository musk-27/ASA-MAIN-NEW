import React, { memo } from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const DemoImageSlider = memo(({ title, images }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
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
    <div className="w-full px-6 lg:px-10 flex flex-col items-center">
      <div className="text-white font-bold font-akira uppercase text-center mb-4 text-xl md:text-3xl lg:text-3xl xl:text-3xl text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
        {title}
      </div>
      <div className="p-2 rounded-lg w-full max-w-7xl mx-auto" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <div className="flex items-center justify-center rounded-lg overflow-hidden relative">
                {/* Container div for grayscale effect */}
                <div className="relative overflow-hidden transition-all duration-500 ease-in-out group">
                  {/* Image component wrapped with hover effects */}
                  <div className="group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                    <Image
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
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
});

DemoImageSlider.displayName = "DemoImageSlider";

export default DemoImageSlider;
