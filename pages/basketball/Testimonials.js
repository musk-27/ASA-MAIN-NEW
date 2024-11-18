import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rafinda Mett",
      image: "/assets/images/basketball.jpg",
      quote:
        "Success is peace of mind, which is a direct result of self—the effort to become the best of which you are capable.",
    },
    {
      name: "Mili Joe",
      image: "/assets/images/CenterImage.png",
      quote:
        "Stay away from those people who try to disparage your ambitions. Small minds will make you feel that you cannot achieve greatness.",
    },
    {
      name: "David Honer",
      image: "/assets/images/cricket.jpg",
      quote:
        "Nature has given us all the pieces required to achieve exceptional wellness and health, but it’s up to us to put these pieces together.",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: 'url("/assets/images/basketballtestimonial.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>
      <div className="max-w-6xl mx-auto text-center p-8 relative z-10">
        <h2 className="lg:text-4xl text-3xl font-akira font-bold mb-32 text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
          Member testimonial
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay={index * 200}
              className="bg-black rounded-3xl p-8 shadow-lg text-white relative"
            >
              <div className="absolute top-0 left-1/2 transform -translate-y-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-yellow-600 flex items-center justify-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="rounded-full w-20 h-20 object-cover"
                />
              </div>
              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-2">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-white mb-4 italic">
                  "{testimonial.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
