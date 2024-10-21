import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Archery has taught me patience and focus! It's incredible to see my own progress.",
      name: "Student A",
      description: "Since joining the archery program, I've developed not just my skills but also my character. The discipline I've learned on the range has helped me in school, and I feel more confident in my abilities both on and off the target."
    },
    {
      quote: "My child has become more disciplined through archery. The coaches are fantastic!",
      name: "Parent of Student B",
      description: "I noticed a significant change in my child's behavior and focus. The coaches are supportive and truly care about each student's growth. This program has been a wonderful experience for our family."
    },
    {
      quote: "The training is excellent, and the coaches are very supportive. They've really helped me improve my skills!",
      name: "Student C",
      description: "Every session feels like a new opportunity to learn something exciting. The coaches not only teach us the techniques but also motivate us to push our limits. I can't wait for each class!"
    },
    {
      quote: "A wonderful experience that has built my child's confidence! They look forward to every practice.",
      name: "Parent of Student D",
      description: "It's heartwarming to see my child so excited about a sport. The community here is welcoming, and the coaches create an environment where every child feels valued and encouraged to improve."
    },
    {
      quote: "I never thought I could do archery, but this program has shown me how much I can achieve. The support from coaches is invaluable.",
      name: "Student E",
      description: "When I first started, I struggled a lot. But the patience and guidance from the coaches helped me realize my potential. I now feel proud to showcase my skills in competitions."
    },
    {
      quote: "The community here is fantastic! We've made friends and learned so much together. It's a great atmosphere for everyone.",
      name: "Parent of Student F",
      description: "Not only has my child improved in archery, but our entire family has found a supportive community through this program. We've made lifelong friends, and it's been a joy to see everyone grow together."
    },
    {
      quote: "The coaches really care about each student's progress and push us to do our best. I feel like I've grown so much.",
      name: "Student G",
      description: "Each lesson is tailored to our individual needs, which makes a huge difference. The feedback is constructive and helps us all improve. I'm excited about my journey in archery!"
    },
    {
      quote: "Archery has become a family activity for us. We all love participating in the events, and it's brought us closer together.",
      name: "Parent of Student H",
      description: "We often attend workshops as a family, and it's been a bonding experience. Watching my kids grow in their skills while enjoying the sport together has been one of the highlights of our year."
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange text-center mb-6">
        Testimonials
      </h2>
      <div className="flex items-center justify-center">
        <button onClick={handlePrev} className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 mr-4">
          <FaChevronLeft />
        </button>
        <div className="p-6 bg-gray-900 rounded-lg shadow-md transition-transform transform">
          <p className="italic text-gray-300 text-center">"{testimonials[currentIndex].quote}"</p>
          <p className="mt-4 font-bold text-gray-200 text-center">{testimonials[currentIndex].name}</p>
          <p className="mt-2 text-gray-400 text-center">{testimonials[currentIndex].description}</p>
        </div>
        <button onClick={handleNext} className="px-4 py-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 ml-4">
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
}
