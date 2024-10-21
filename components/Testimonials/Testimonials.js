// components/Testimonials/Testimonials.js
import React, { useState } from 'react';

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
    <section className="bg-gray-50 py-24 px-12 lg:px-64">
      <h2 className="text-2xl lg:text-5xl font-akira text-center mb-8">
        What Our Students Say
      </h2>
      <div className="bg-white p-8 shadow-lg rounded-lg text-center">
        <p className="text-lg font-montserrat italic mb-4">
          "{testimonials[currentIndex].text}"
        </p>
        <h3 className="text-xl font-bold">{testimonials[currentIndex].author}</h3>
        <p className="text-sm font-montserrat">{testimonials[currentIndex].position}</p>
      </div>
      <div className="flex justify-between mt-6">
  <button
    className="bg-customColor text-black px-6 py-2 rounded-lg hover:bg-customHoverColor transition duration-200"
    onClick={prevTestimonial}
  >
    Previous
  </button>
  <button
    className="bg-customColor text-black px-6 py-2 rounded-lg hover:bg-customHoverColor transition duration-200"
    onClick={nextTestimonial}
  >
    Next
  </button>
</div>
    </section>
  );
}

export default Testimonials;
