import React, { useState, forwardRef } from "react";

const SportsAcademy = forwardRef(({ backgroundImage, academyName }, ref) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    setIsFormOpen(false); // Close the form after submission
  };

  return (
    <div className="relative" ref={ref}>
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(10%)",
        }}
      ></div>

      <div className="relative bg-black bg-opacity-80 py-20 p-4 z-10">
        <div className="max-w-5xl mx-auto text-center lg:py-20">
          <div className="w-full max-w-3xl mx-auto bg-black bg-opacity-60 lg:rounded-full md:rounded-full py-10">
            <h1
              className="text-xl lg:text-4xl font-bold mt-2 mb-6 uppercase text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay="100" 
            >
              JOIN OUR {academyName} Academy
            </h1>
            <p
              className="px-4 leading-relaxed font-montserrat text-white"
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Our Academy offers programs for students of all ages, focusing on
              skill development, teamwork, and sportsmanship.
            </p>

            <div
              className="mt-2"
              data-aos-duration="1000"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <button
                onClick={() => setIsFormOpen(true)}
                className="inline-block py-4 mt-5 px-8 leading-none text-white font-akira bg-slate-800 hover:bg-gradient-to-tr from-yellow-300 to-red-500  shadow-lg text-xl font-bold transition-colors duration-300 transform hover:scale-105 rounded-full"
              >
                Enrol Now
              </button>
            </div>
          </div>
        </div>

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
                Enrol Now to start your {academyName} Academy
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
                  <button class="animated-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span class="text font-akira">SUBMIT</span>
                    <span class="circle"></span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="arr-1"
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
    </div>
  );
});

export default SportsAcademy;
