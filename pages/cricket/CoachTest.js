// import React from 'react';

// const CoachTest = () => {
//   const coaches = [
//     {
//       name: "Coach Rahul Singh",
//       image: "/assets/images/coach-rahul.jpg", // Replace with actual image path
//       achievements: [
//         "National Level Coach",
//         "10+ Years of Experience",
//         "Led teams to multiple championships",
//       ],
//       description:
//         "Our training programs are designed to push young athletes to their potential while making sure they enjoy the game. It's all about finding the right balance between skills development and fun.",
//     },
//     {
//       name: "Coach Priya Kapoor",
//       image: "/assets/images/coach-priya.jpg", // Replace with actual image path
//       achievements: [
//         "Certified Sports Trainer",
//         "Focus on Holistic Player Development",
//         "Mentored several state-level athletes",
//       ],
//       description:
//         "At [School Name], we focus on holistic player development, ensuring that each athlete excels both physically and mentally. The key is discipline, focus, and passion for the game.",
//     },
//   ];

//   return (
//     <section
//       className="bg-gray-900 bg-opacity-60 py-12 px-6 md:px-16 bg-cover bg-center relative"
//       style={{ backgroundImage: "url(/assets/images/Cricket-bat-ball.webp)" }}
//     >
//       {/* Overlay for better text visibility */}
//       <div className="absolute inset-0 bg-black opacity-60"></div>

//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
//         {/* Left Column: Program Description */}
//         <div className="flex flex-col justify-center text-white">
//           <h2
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="text-xl font-akira text-white mb-6"
//           >
//             Comprehensive Cricket Training Programs
//           </h2>
//           <p
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="text-lg leading-relaxed mb-4"
//           >
//             Our cricket training programs are designed to develop players at
//             all levels, from beginners to advanced athletes. Under the
//             guidance of expert coaches, players improve their batting,
//             bowling, fielding, and overall fitness.
//           </p>
//           <p
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="text-lg leading-relaxed mb-4"
//           >
//             We offer tailored programs based on age groups, ensuring that each
//             player receives age-appropriate training. Whether it’s
//             foundational skills or competitive match play, we cover all
//             aspects of the game.
//           </p>
//           <ul className="list-disc list-inside text-lg mb-4">
//             <li data-aos-duration="1000" data-aos="fade-up" data-aos-delay="100">
//               Age groups: 8-12 years, 13-17 years, and 18+.
//             </li>
//             <li data-aos-duration="1000" data-aos="fade-up" data-aos-delay="100">
//               Coaching levels: Beginner, Intermediate, Advanced.
//             </li>
//             <li data-aos-duration="1000" data-aos="fade-up" data-aos-delay="100">
//               Key skills: Batting, Bowling, Fielding, Wicketkeeping.
//             </li>
//             <li data-aos-duration="1000" data-aos="fade-up" data-aos-delay="100">
//               Fitness routines: Strength training, agility, and stamina improvement.
//             </li>
//           </ul>
//           <p
//             data-aos-duration="1000"
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="text-lg leading-relaxed"
//           >
//             Our goal is to ensure each player grows with a strong sense of
//             sportsmanship, fitness, and teamwork.
//           </p>
//         </div>

//         {/* Right Column: Coach Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {coaches.map((coach, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-md p-4">
//               <img
//                 src={coach.image}
//                 alt={coach.name}
//                 className="rounded-full w-32 h-32 mx-auto mb-4"
//               />
//               <h4 className="text-xl font-bold text-gray-800 text-center mb-2">
//                 {coach.name}
//               </h4>
//               <ul className="text-gray-600 mb-4">
//                 {coach.achievements.map((achievement, idx) => (
//                   <li key={idx} className="italic">• {achievement}</li>
//                 ))}
//               </ul>
//               <blockquote className="text-gray-600 italic">
//                 "{coach.description}"
//               </blockquote>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CoachTest;

import React from 'react';

const CoachTest = () => {
  const coaches = [
    {
      name: "Coach Rahul Singh",
      image: "/assets/images/Activities/Image1.jpg",
      description: "Our training programs are designed to push young athletes to their potential while making sure they enjoy the game.",
      achievements: [
        "National Level Coach",
        "10+ Years of Experience",
        "Led teams to multiple championships",
      ],
    },
    {
      name: "Coach Priya Kapoor",
      image: "/assets/images/Activities/Image1.jpg",
      description: "Our training programs are designed to push young athletes to their potential while making sure they enjoy the game.",
      achievements: [
        "Certified Sports Trainer",
        "Focus on Holistic Player Development",
        "Mentored several state-level athletes",
      ],
    }
  ];

  return (
    <section
      className="bg-gray-900 bg-opacity-60 py-12 px-6 md:px-16 bg-cover bg-center relative lg:py-20"
      style={{ backgroundImage: "url(/assets/images/Cricket-bat-ball.webp)" }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
        {/* Left Column: Program Description */}
        <div className="flex flex-col justify-center text-white">
          <h2 className="text-xl font-akira text-white mb-6" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Comprehensive Cricket Training Programs</h2>
          <p className="text-lg leading-relaxed mb-4" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
            Our cricket training programs are designed to develop players at all levels, from beginners to advanced athletes.
          </p>
          <p className="text-lg leading-relaxed mb-4" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
            We offer tailored programs based on age groups, ensuring that each player receives age-appropriate training.
          </p>
          <ul className="list-disc list-inside text-lg mb-4">
            <li data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Age groups: 8-12 years, 13-17 years, and 18+.</li>
            <li data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Coaching levels: Beginner, Intermediate, Advanced.</li>
            <li data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Key skills: Batting, Bowling, Fielding, Wicketkeeping.</li>
            <li data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Fitness routines: Strength training, agility, and stamina improvement.</li>
          </ul>
          <p className="text-lg leading-relaxed" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
            Our goal is to ensure each player grows with a strong sense of sportsmanship, fitness, and teamwork.
          </p>
        </div>

        {/* Right Column: Coaches Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {coaches.map((coach, index) => (
            <div key={index} className="rounded overflow-hidden shadow-lg bg-black p-3 bg-opacity-90">
              <div className="relative">
                <img className="w-full rounded-lg" src={coach.image} alt={coach.name} />
                <div className="absolute bottom-0 left-0 right-0 bg-gray-900 opacity-25 h-full"></div>
              </div>
              
              <div className="px-1 py-2" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
                <a href="#" className="font-akira font-semibold text-sm inline-block text-white transition duration-500 ease-in-out text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text ">
                  {coach.name}
                </a>
                <p className=" italic text-white text-sm mt-1 text-justify">{coach.description}</p>
              </div>
              <div className="px-2 py-0 flex flex-col">
                <h4 className="font-semibold text-md mb-2 text-white" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">Achievements:</h4>
                <ul className="list-disc px-1 text-white text-sm">
                  {coach.achievements.map((achievement, idx) => (
                    <li data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100" key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachTest;
