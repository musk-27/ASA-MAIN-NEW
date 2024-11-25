import React, { useState } from "react";
import CircleCTA from "../../components/LargeBannerCTA/CircleCTA";

const CricketLearning = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mx-auto px-4 bg-black lg:px-10">
        <div className="grid grid-cols-12 gap-4">
          {/* Larger Column with Image */}
          <div className="col-span-8 p-4">
            <img
              src="/assets/images/Activities/basketallGround.jpg"
              alt="Basketball Court"
              className="w-full h-auto rounded-lg"
              data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="300"
            />
          </div>
          {/* Smaller Column with Content */}
          <div className="col-span-4 p-4 flex flex-col justify-center">
            <h2 data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="300" className="text-2xl font-bold mb-4 text-white font-akira leading-tight">
              Our World-Class Cricket Facilities
            </h2>
            <p data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="300" className="text-white text-justify mb-6">
              At Arya Gurukul School, we proudly offer top-notch basketball
              facilities that promote athletic excellence and teamwork. Our
              modern courts feature high-quality flooring and regulation-sized
              hoops, providing an ideal environment for practice and
              competition.With state-of-the-art basketball courts, modern training
              equipment, and top-notch infrastructure, our facilities enable
              players to develop their skills under the guidance of experienced
              coaches. We ensure that every student has access to the best
              resources for training and competition.
            </p>
            
            <CircleCTA
              link="/Enrol"
              title="Enrol Now"
              subtitle="With Us"
              imageClass="bg-basketballHome"
            />
          </div>
        </div>
      </div>
  );
};

export default CricketLearning;
