import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="testimonies" className="">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="italic inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Sports Enthusiasts
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="italic text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what sports members have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
          {/* Testimonial 1 */}
          <ul className="space-y-8 lg:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="relative group">
                <div className="absolute transition rounded-3xl opacity-25 -inset-1  duration-400"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      src="https://tailwindcss.com/img/erin-lindford.jpg"
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                      alt="Satya Nadella"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          John Doe
                        </p>
                        <p className="text-slate-500 font-medium">
                          Basketball Player
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        "The training sessions at the Arya Gurukul Basketball Camp helped me elevate my game to the next level. Highly recommend!"
                      </p>
                   
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>

          {/* Testimonial 2 */}
          <ul className="space-y-16 sm:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="400"
            >
              <div className="relative group">
                <a href="https://twitter.com/paraga" className="cursor-pointer">
                  <div className="">
                    <div className="flex items-center space-x-4 justify-center">
                      <div>
                        <h3 className="text-5xl leading-1 text-center  font-semibold text-white">
                          Great Experience!
                        </h3>
                      </div>
                    </div>
                    <div className="flex justify-center mt-5">
                      <button className="text-white text-lg bg-red-600 p-2 w-40 rounded-full">
                        View More
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </li>

            {/* Testimonial 3 */}
            <ul className="space-y-8 lg:block">
              <li
                className="text-sm leading-6"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="600"
              >
                <div className="relative group">
                  <div className="absolute transition rounded-3xl opacity-25 -inset-1  duration-400"></div>
                  <a
                    href="https://twitter.com/satyanadella"
                    className="cursor-pointer"
                  >
                    <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                      <img
                        src="https://tailwindcss.com/img/erin-lindford.jpg"
                        className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                        alt="Satya Nadella"
                      />
                      <div className="text-center space-y-2 sm:text-left">
                        <div className="space-y-0.5">
                          <p className="text-lg text-black font-semibold">
                            Jane Smith
                          </p>
                          <p className="text-slate-500 font-medium">
                            Coach & Trainer
                          </p>
                        </div>
                        <p className="text-sm text-gray-500">
                          "A fantastic experience for any aspiring player. The camp was intense, informative, and fun."
                        </p>
                       
                      </div>
                    </div>
                  </a>
                </div>
              </li>
            </ul>
          </ul>

          {/* Testimonial 4 */}
          <ul className="space-y-8 lg:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="relative group">
                <div className="absolute transition rounded-3xl opacity-25 -inset-1  duration-400"></div>
                <a
                  href="https://twitter.com/satyanadella"
                  className="cursor-pointer"
                >
                  <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                    <img
                      src="https://tailwindcss.com/img/erin-lindford.jpg"
                      className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
                      alt="Satya Nadella"
                    />
                    <div className="text-center space-y-2 sm:text-left">
                      <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                          Tom Williams
                        </p>
                        <p className="text-slate-500 font-medium">
                          Basketball Coach
                        </p>
                      </div>
                      <p className="text-sm text-gray-500">
                        "The team-building exercises at Arya Gurukul were invaluable. A great place to grow both as a player and a person."
                      </p>
                     
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
