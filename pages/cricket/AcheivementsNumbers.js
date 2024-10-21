import React, { useEffect, useState, useRef } from "react";

const AchievementsNumbers = () => {
  const [counted, setCounted] = useState(false);
  const [expertMinutes, setExpertMinutes] = useState(0);
  const [averageRating, setAverageRating] = useState(0);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);
  const [appDownloads, setAppDownloads] = useState(0);

  const sectionRef = useRef(null);

  const countUp = (setter, target, duration) => {
    const start = performance.now();
    const step = (timestamp) => {
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setter(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCounted(false); // Reset counted to allow re-animation
          countUp(setExpertMinutes, 1500, 2000);
          countUp(setAverageRating, 10, 2000); // Assuming you want a percentage
          countUp(setSessionsCompleted, 25, 2000);
          countUp(setAppDownloads, 10, 2000);
          setCounted(true); // Mark as counted after starting animations
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [counted]);

  return (
    <section ref={sectionRef} className="flex flex-col mt-1 lg:py-20 py-10">
      <h2
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
        className="xl:text-4xl text-xl text-white font-akira text-center lg:py-10 text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
      >
        Our Outstanding Achievements
      </h2>
      <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-y-5 lg:gap-y-0 gap-x-5 place-items-center w-full max-w-[1200px] mx-auto px-5 font-akira">
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="700"
          className="flex flex-col justify-center items-center bg-black shadow-md px-4 h-[126px] w-full md:w-[281px] md:h-[192px] rounded-lg justify-self-center border border-gray-300"
        >
          <div className="flex flex-row justify-center items-center">
            <p className="text-transparent  transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2 ">
              {expertMinutes}+
            </p>
          </div>
          <p className="text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-white font-montserrat font-bold">
            Student Trained
          </p>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="600"
          className="flex flex-col justify-center items-center bg-black shadow-md px-4 h-[126px] w-full md:w-[281px] md:h-[192px] rounded-lg justify-self-center border border-gray-300"
        >
          <div className="flex flex-row justify-center items-center">
            <p className="text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              {averageRating}+
            </p>
          </div>
          <p className="text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-white font-bold font-montserrat">
            Certified Coach
          </p>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="800"
          className="flex flex-col justify-center items-center bg-black shadow-md px-4 h-[126px] w-full md:w-[281px] md:h-[192px] rounded-lg justify-self-center border border-gray-300"
        >
          <div className="flex flex-row justify-center items-center">
            <p className="text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              {sessionsCompleted}+
            </p>
          </div>
          <p className="text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-white font-montserrat font-bold">
            Tournament Wins
          </p>
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="900"
          className="flex flex-col justify-center items-center bg-black shadow-md px-4 h-[126px] w-full md:w-[281px] md:h-[192px] rounded-lg justify-self-center border border-gray-300"
        >
          <div className="flex flex-row justify-center items-center">
            <p className="text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text font-bold text-3xl sm:text-4xl lg:text-5xl leading-9 text-primary ml-2">
              {appDownloads}+
            </p>
          </div>
          <p className="text-base sm:text-lg leading-6 mt-3 md:mt-6 text-center text-white font-montserrat font-bold">
            Players played under 19 team
          </p>
        </div>
      </div>
    </section>
  );
};

export default AchievementsNumbers;
