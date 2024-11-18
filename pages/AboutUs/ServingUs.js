import React, { useState } from "react";

const ServingUs = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div className="w-full bg-black">
      {/* Serving the Sports Community Section */}
      <section className="text-white py-24 px-6 lg:px-12 flex flex-col lg:flex-row items-center mx-auto max-w-screen-xl">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
            Dedicated to Serving the Sports Community
          </h2>

          <ul className="text-lg mb-6 space-y-2">
            <li>✔️ State-of-the-art facilities for various sports</li>
            <li>✔️ Affordable and flexible membership options</li>
            <li>✔️ Comprehensive training programs for all skill levels</li>
          </ul>
          <div className="flex items-center mb-6 space-x-6">
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="phone">
                📞
              </span>
              <p className="text-lg font-bold">88 700 600</p>
            </div>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="calendar">
                📅
              </span>
              <p className="text-lg font-bold">Book Now</p>
            </div>
          </div>

          <button
            onClick={() => setIsFormOpen(true)}
            className="bg-[#51AEDA] text-black font-bold py-2 px-6 rounded"
          >
            Enrol Now
          </button>
        </div>
        <div className="lg:w-1/2">
          <img
            src="/assets/images/AGN.webp" // Replace with your image path
            alt="Sports Facilities"
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </section>

      {/* Modal for Enrol Form */}
      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center p-4 z-50 bg-black bg-opacity-75">
          <div className="bg-white rounded-lg p-6 shadow-lg max-w-md mx-auto w-full relative">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute text-2xl top-0 text-black right-1 font-bold rounded-full hover:text-red-500"
            >
              &times;
            </button>
            <p className="mb-4 font-bold text-sm font-akira text-center">
              Enrol Now to join our Sports Academy
            </p>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-400 py-1 px-2 rounded"
                  required
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="border border-gray-400 py-1 px-2 rounded"
                  required
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="number"
                  placeholder="Contact"
                  className="border border-gray-400 py-1 px-2 rounded"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2 rounded"
                  required
                />
              </div>

              <div className="mt-5">
                <label htmlFor="grade" className="block mb-1">
                  Grade
                </label>
                <select
                  id="grade"
                  className="border border-gray-400 py-1 px-2 w-full rounded"
                  required
                >
                  <option value="">Select Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="school" className="block mb-1">
                  School Name
                </label>
                <select
                  id="school"
                  className="border border-gray-400 py-1 px-2 w-full rounded"
                  required
                >
                  <option value="">Select School</option>
                  <option value="school1">School 1</option>
                  <option value="school2">School 2</option>
                  <option value="school3">School 3</option>
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="games" className="block mb-1">
                  What Games Are You Enrolling For?
                </label>
                <select
                  id="games"
                  className="border border-gray-400 py-1 px-2 w-full rounded"
                  required
                >
                  <option value="">Select Game</option>
                  <option value="cricket">Cricket</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                </select>
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Any Queries?"
                  className="border border-gray-400 py-1 px-2 w-full rounded"
                />
              </div>

              <div className="mt-5 flex justify-center">
                <button className="animated-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span className="text font-akira">SUBMIT</span>
                  <span className="circle"></span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="arr-1"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServingUs;
