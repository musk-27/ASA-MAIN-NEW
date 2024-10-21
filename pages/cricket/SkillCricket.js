import React from "react";

const SkillCricket = () => {
  return (
    <div className="min-h-screen py-10">
      <h1 className="text-center py-10 lg:py-10 font-akira text-4xl">
        CONTACT US
      </h1>
      <div className="container mx-auto font-montserrat">
        <div className="flex flex-col lg:flex-row w-12/12 lg:w-12/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
          <div
            className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/assets/images/Cricket-bat-ball.webp')",
            }}
          >
            <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                suspendisse aliquam varius rutrum purus maecenas ac{" "}
                <a href="#" className="text-purple-500 font-semibold">
                  Learn more
                </a>
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2 py-10 px-4">
            <p className="mb-4 font-bold text-2xl">Enrol Now to start your Academy.</p>
            <form action="#">
              <div className="grid grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="number"
                  placeholder="Age"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-5">
                <input
                  type="number"
                  placeholder="Contact"
                  className="border border-gray-400 py-1 px-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-400 py-1 px-2"
                />
              </div>

              <div className="mt-5">
                <label htmlFor="grade" className="block mb-1">
                  Grade
                </label>
                <select
                  id="grade"
                  className="border border-gray-400 py-1 px-2 w-full"
                >
                  <option value="">Select Grade</option>
                  <option value="1">Grade 1</option>
                  <option value="2">Grade 2</option>
                  <option value="3">Grade 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="school" className="block mb-1">
                  School Name
                </label>
                <select
                  id="school"
                  className="border border-gray-400 py-1 px-2 w-full"
                >
                  <option value="">Select School</option>
                  <option value="school1">School 1</option>
                  <option value="school2">School 2</option>
                  <option value="school3">School 3</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="mt-5">
                <label htmlFor="games" className="block mb-1">
                  What Games Are You Enrolling For?
                </label>
                <select
                  id="games"
                  className="border border-gray-400 py-1 px-2 w-full"
                >
                  <option value="">Select Game</option>
                  <option value="cricket">Cricket</option>
                  <option value="football">Football</option>
                  <option value="basketball">Basketball</option>
                  {/* Add more options as needed */}
                </select>
              </div>

              <div className="mt-5">
                <input
                  type="text"
                  placeholder="Any Queries?"
                  className="border border-gray-400 py-1 px-2 w-full"
                />
              </div>

              {/* <div className="mt-5 flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>
                  I accept the{' '}
                  <a href="#" className="text-purple-500 font-semibold">Terms of Use</a> &{' '}
                  <a href="#" className="text-purple-500 font-semibold">Privacy Policy</a>
                </span>
              </div> */}

              <div className="mt-5 flex justify-center">
                <button class="animated-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="arr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                  <span class="text font-akira">Submit</span>
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
      </div>
    </div>
  );
};

export default SkillCricket;
