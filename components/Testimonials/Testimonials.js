// components/Testimonials/Testimonials.js
import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Import icons

const testimonials = [
  {
    id: 1,
    text: "Arya Sports Academy transformed my approach to sports and teamwork!",
    author: "John Doe",
    position: "Former Student"
  },
  {
    id: 2,
    text: "The coaches are incredibly supportive and dedicated!",
    author: "Jane Smith",
    position: "Parent"
  },
  {
    id: 3,
    text: "An amazing experience that helped me grow both as an athlete and a person!",
    author: "Mike Johnson",
    position: "Student"
  },
  // Add more testimonials as needed
];

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="bg-black px-12 relative flex flex-col justify-center items-center">
      <h2 className="text-2xl text-white lg:text-5xl text-center mb-8 text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
        What Our Students Say
      </h2>
      {/* <div className="absolute left-0 top-64 transform -translate-y-1/2 cursor-pointer" onClick={prevTestimonial}>
        <FaChevronLeft className="text-3xl text-gray-700 hover:text-gray-900 transition duration-200" />
      </div> */}
      {/* <div className="absolute right-0 top-64 transform -translate-y-1/2 cursor-pointer" onClick={nextTestimonial}>
        <FaChevronRight className="text-3xl text-gray-700 hover:text-gray-900 transition duration-200" />
      </div> */}
      <div className="bg-white p-8 shadow-lg rounded-lg text-center w-full lg:w-[700px]">
        <p className="text-lg font-montserrat italic mb-4">
          "{testimonials[currentIndex].text}"
        </p>
        <h3 className="text-xl font-bold">{testimonials[currentIndex].author}</h3>
        <p className="text-sm font-montserrat">{testimonials[currentIndex].position}</p>
      </div>
    </section>
  );
}

export default Testimonials;
