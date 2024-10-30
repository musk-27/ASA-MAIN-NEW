// import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

// export default function Home() {
//   useEffect(() => {
//     AOS.init();
//   }, []);

//   return (
//     <section id="testimonies" className="bg-slate-900">
//       <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
//         <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
//           <div className="mb-12 space-y-5 md:mb-16 md:text-center">
//             <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
//               Words from Others
//             </div>
//             <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
//               It's not just us.
//             </h1>
//             <p className="text-xl text-gray-100 md:text-center md:text-2xl">
//               Here's what others have to say about us.
//             </p>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
//           <ul className="space-y-8">
//             <li className="text-sm leading-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="300">
//               <div className="relative group">
//                 <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-pink-600 blur duration-400"></div>
//                 <a href="https://twitter.com/tim_cook" className="cursor-pointer">
//                   <div className="relative p-6 space-y-6 leading-none rounded-3xl bg-slate-800 ring-1 ring-gray-900/5">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
//                         className="w-12 h-12 bg-center bg-cover border rounded-full"
//                         alt="Tim Cook"
//                       />
//                       <div>
//                         <h3 className="text-lg font-semibold text-white">
//                           Basketball Training
//                         </h3>
//                         <p className="text-yellow-500 text-md italic">
//                           April 15, 2023
//                         </p>
//                       </div>
//                     </div>
//                     <p className="leading-normal text-gray-300 text-md">
//                       Join us for basketball training at the State Sports Arena with Coach Spencer.
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </li>
//           </ul>

//           <ul className="space-y-16 sm:block">
//             <li className="text-sm leading-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="400">
//               <div className="relative group">
//                 <a href="https://twitter.com/paraga" className="cursor-pointer">
//                   <div className="">
//                     <div className="flex items-center space-x-4">
//                       <div>
//                         <h3 className="text-5xl leading-1 text-center font-semibold text-white">
//                           Sportpress compatible
//                         </h3>
//                       </div>
//                     </div>
//                     <div className="flex justify-center mt-5">
//                       <button className="text-white text-lg bg-red-600 p-2 w-40 rounded-full">
//                         View More
//                       </button>
//                     </div>
//                   </div>
//                 </a>
//               </div>
//             </li>

//             <li className="text-sm leading-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="500">
//               <div className="relative group">
//                 <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-pink-600 blur duration-400"></div>
//                 <a href="https://twitter.com/tim_cook" className="cursor-pointer">
//                   <div className="relative p-6 space-y-6 leading-none rounded-3xl bg-slate-800 ring-1 ring-gray-900/5">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src="https://pbs.twimg.com/profile_images/1535420431766671360/Pwq-1eJc_400x400.jpg"
//                         className="w-12 h-12 bg-center bg-cover border rounded-full"
//                         alt="Tim Cook"
//                       />
//                       <div>
//                         <h3 className="text-lg font-semibold text-white">
//                           Basketball Club
//                         </h3>
//                         <p className="text-yellow-500 italic text-md">
//                           June 10 - Sept 30
//                         </p>
//                       </div>
//                     </div>
//                     <p className="leading-normal text-gray-300 text-md">
//                       Join our club and participate in matches and events from June to September.
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </li>
//           </ul>

//           <ul className="hidden space-y-8 lg:block">
//             <li className="text-sm leading-6" data-aos="zoom-in" data-aos-duration="600" data-aos-delay="600">
//               <div className="relative group">
//                 <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 blur duration-400"></div>
//                 <a href="https://twitter.com/satyanadella" className="cursor-pointer">
//                   <div className="relative p-6 space-y-6 leading-none rounded-3xl bg-slate-800 ring-1 ring-gray-900/5">
//                     <div className="flex items-center space-x-4">
//                       <img
//                         src="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
//                         className="w-12 h-12 bg-center bg-cover border rounded-full"
//                         alt="Satya Nadella"
//                       />
//                       <div>
//                         <h3 className="text-lg font-semibold text-white">
//                           Basketball Program
//                         </h3>
//                         <p className="text-yellow-500 italic text-md">
//                           July 9 - Oct 20
//                         </p>
//                       </div>
//                     </div>
//                     <p className="leading-normal text-gray-300 text-md">
//                       Core basketball sessions focusing on team performance improvements.
//                     </p>
//                   </div>
//                 </a>
//               </div>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="testimonies" className="bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center text-cn bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 lg:gap-8">
        <ul className=" space-y-8 lg:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="relative group">
                <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 blur duration-400"></div>
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
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>

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
                    <div className="flex items-center space-x-4">
                      <div>
                        <h3 className="text-5xl leading-1 text-center font-semibold text-white">
                          Sportpress compatible
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

            <ul className=" space-y-8 lg:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="relative group">
                <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 blur duration-400"></div>
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
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                      </button>
                    </div>
                  </div>
                </a>
              </div>
            </li>
          </ul>
          </ul>

          <ul className=" space-y-8 lg:block">
            <li
              className="text-sm leading-6"
              data-aos="zoom-in"
              data-aos-duration="600"
              data-aos-delay="600"
            >
              <div className="relative group">
                <div className="absolute transition rounded-3xl opacity-25 -inset-1 bg-gradient-to-r from-yellow-600 to-orange-600 blur duration-400"></div>
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
                          Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                          Product Engineer
                        </p>
                      </div>
                      <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        Message
                      </button>
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
