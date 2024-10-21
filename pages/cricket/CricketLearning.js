import React, { useState } from "react";

const CricketLearning = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`bg-black py-12 px-6 md:px-16 lg:py-32 transition-all duration-500`}
      style={{
        // backgroundImage: isHovered
        //   ? 'url("/assets/images/Cricket-bat-ball.webp")'
        //   : "none",
        // backgroundImage: isHovered
        //   ? "none"
        //   : 'url("/assets/images/Cricket-bat-ball.webp")',
        // backgroundImage:'url("/assets/images/Cricket-bat-ball.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column: Image */}
        <div>
          <img
            data-aos-duration="1000"
            data-aos="fade-up"
            // data-aos-delay="100"
            src="/assets/Activities/CricketGround.jpg"
            alt="Cricket Field"
            className="w-full h-auto object-cover rounded-lg shadow-lg  transition-all duration-500"
            onMouseEnter={() => setIsHovered(true)} // Set hover state to true on mouse enter
            onMouseLeave={() => setIsHovered(false)} // Set hover state to false on mouse leave
          />
        </div>

        {/* Right Column: Text Content */}
        <div className="flex flex-col justify-center">
          <h2
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            // data-aos-duration="1000"
            // data-aos="fade-up"
            // data-aos-delay="200"
            className={`text-xl font-akira mb-6 ${
              isHovered ? "text-white" : "text-white"
            }`}
          >
            Our World-Class Cricket Facilities
          </h2>
          <p
            // data-aos-duration="1000"
            // data-aos="fade-up"
            // data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${
              isHovered ? "text-white" : "text-white"
            }`}
          >
            At [School Name], we take pride in offering some of the finest
            cricket facilities, designed to provide the best experience for both
            training and matches. Our cricket grounds are professionally
            maintained and equipped to meet the standards of competitive
            cricket.
          </p>
          <p
            // data-aos-duration="1000"
            // data-aos="fade-up"
            // data-aos-delay="200"
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className={`text-lg leading-relaxed mb-4 font-montserrat text-justify ${
              isHovered ? "text-white" : "text-white"
            }`}
          >
            With state-of-the-art practice nets, modern equipment, and top-notch
            infrastructure, our cricket field allows players to hone their
            skills under the guidance of experienced coaches. We ensure that
            every student has access to the best training resources.
          </p>
          {/* <p
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className={`text-lg leading-relaxed font-montserrat text-justify ${
              isHovered ? "text-white" : "text-white"
            }`}
          >
            From fitness areas to specialized equipment, we provide everything a
            budding cricketer needs to achieve excellence on the field. Our
            facilities are open year-round for both practices and competitive
            events.
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default CricketLearning;
