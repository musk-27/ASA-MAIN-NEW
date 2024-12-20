import React from "react";
import Image from "next/image";

const WhyChooseUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      {" "}
      {/* Why Choose Us Section */}
      <section className="bg-white lg:py-24 px-6 lg:px-20 flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2">
          <h2
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-3xl lg:text-4xl font-bold mb-6 font-akira"
          >
            Why Choose ASA
          </h2>
          <p
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg mb-8 text-gray-600"
          >
            At ASA, we are committed to nurturing athletic talent and fostering
            a love for sports. Our dedicated programs and experienced coaches
            empower athletes to reach their full potential.
          </p>
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="space-y-8"
          >
            {[
              {
                emoji: "🏆",
                title: "Expert Coaching Staff",
                description:
                  "Our coaches are highly qualified and experienced, dedicated to helping athletes improve their skills and achieve their goals.",
              },
              {
                emoji: "⚽",
                title: "Diverse Sports Programs",
                description:
                  "We offer a wide range of sports programs, from tennis and soccer to swimming and basketball, catering to all ages and skill levels.",
              },
              {
                emoji: "🤝",
                title: "Community and Support",
                description:
                  "Join a community of like-minded athletes where you can make friends, receive support, and grow both on and off the field.",
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-10 h-10 bg-[#a0cf4e] rounded-full flex items-center justify-center">
                  <span role="img" aria-label={item.title}>
                    {item.emoji}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-xl">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
          <Image
            src="/assets/images/cricket.jpg" // Replace with your image path
            alt="Sports Activities"
            width={500}
            height={350}
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-lg object-cover"
          />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
