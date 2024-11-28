import React from "react";

const FeatureCard = ({ title, description, borderColor, aosDelay, aosDuration }) => (
  <div
    className={`w-full sm:w-1/2 mb-4 px-2`}
    data-aos="zoom-in"
    data-aos-duration={aosDuration}
    data-aos-delay={aosDelay}
  >
    <div
      className={`h-full py-4 px-6 border ${borderColor} border-t-0 border-l-0 rounded-br-xl`}
    >
      <h3 className="text-2xl font-bold text-md mb-6">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  </div>
);

export default FeatureCard;
