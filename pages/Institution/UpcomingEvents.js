import React from "react";

const UpcomingEvents = () => {
  return (
    <div className="bg-black">
      <h2
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
        className="xl:text-4xl text-xl text-white font-akira text-center lg:py-10"
      >
        Our Outstanding Achievements
      </h2>
      <div className="p-4">
        <h1 className="text-4xl text-center font-semibold mb-6 font-akira text-white">
          UPCOMING SPORTS EVENTS
        </h1>
        <div className="">
          <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
            {/* Event 1: Basketball Game Scheduled */}
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-yellow-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-yellow-500 shadow text-center">
                  <i className="fas fa-basketball-ball text-white"></i>
                </div>
              </div>
              <div className="bg-gradient-to-b from-yellow-500 to-red-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-white">Basketball Game Scheduled</h3>
                <p className="leading-tight text-justify w-full">
                  21 November 2024, 06:00 PM - Local Basketball Championship at City Arena
                </p>
              </div>
            </div>

            {/* Event 2: Basketball Match Postponed */}
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-500 shadow text-center">
                  <i className="fas fa-exclamation-circle text-white"></i>
                </div>
              </div>
              <div className="bg-gradient-to-b from-red-500 to-yellow-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-white">Match Postponed</h3>
                <p className="leading-tight text-justify">
                  23 November 2024, 03:00 PM - Due to weather conditions, the match has been rescheduled.
                </p>
              </div>
            </div>

            {/* Event 3: Basketball Training Camp */}
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
                  <i className="fas fa-user-friends text-white"></i>
                </div>
              </div>
              <div className="bg-green-500 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-white">Basketball Training Camp</h3>
                <p className="leading-tight text-justify">
                  25 November 2024, 09:00 AM - Basketball Skills Development at Downtown Gym
                </p>
              </div>
            </div>

            {/* Event 4: Event Cancelled */}
            <div className="flex md:contents">
              <div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-red-600 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-red-600 shadow text-center">
                  <i className="fas fa-times-circle text-white"></i>
                </div>
              </div>
              <div className="bg-red-600 col-start-4 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
                <h3 className="font-semibold text-lg mb-1 text-white">Event Cancelled</h3>
                <p className="leading-tight text-justify text-white">
                  The Annual Basketball Championship has been cancelled due to unforeseen circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
