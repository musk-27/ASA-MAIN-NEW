import React from "react";

const coachesData = [
  {
    name: "Ryan Lemon",
    role: "Software Engineering Team Lead",
    imgSrc:
      "https://data.artofproblemsolving.com/images/people/rlemon309x309.png",
  },
  {
    name: "John Doe",
    role: "Senior Developer",
    imgSrc:
      "https://data.artofproblemsolving.com/images/people/rlemon309x309.png",
  },
  {
    name: "Jane Smith",
    role: "Project Manager",
    imgSrc:
      "https://data.artofproblemsolving.com/images/people/rlemon309x309.png",
  },
  {
    name: "Sam Wilson",
    role: "UX/UI Designer",
    imgSrc:
      "https://data.artofproblemsolving.com/images/people/rlemon309x309.png",
  },
];

const TeamCoach = () => {
  return (
    <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">
      <div className="border-b mb-5 flex justify-between text-sm">
        <div className="text-yellow-600 flex items-center pb-2 pr-2 border-b-2 border-yellow-800 uppercase">
          <svg
            className="h-6 mr-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 455.005 455.005"
          >
            <path d="M446.158,267.615c-5.622-3.103-12.756-2.421-19.574,1.871l-125.947,79.309c-3.505,2.208-4.557,6.838-2.35,10.343 c2.208,3.505,6.838,4.557,10.343,2.35l125.947-79.309c2.66-1.675,4.116-1.552,4.331-1.432c0.218,0.12,1.096,1.285,1.096,4.428 c0,8.449-6.271,19.809-13.42,24.311l-122.099,76.885c-6.492,4.088-12.427,5.212-16.284,3.084c-3.856-2.129-6.067-7.75-6.067-15.423 c0-19.438,13.896-44.61,30.345-54.967l139.023-87.542c2.181-1.373,3.503-3.77,3.503-6.347s-1.323-4.974-3.503-6.347L184.368,50.615 c-2.442-1.538-5.551-1.538-7.993,0L35.66,139.223C15.664,151.815,0,180.188,0,203.818v4c0,23.63,15.664,52.004,35.66,64.595 l209.292,131.791c3.505,2.207,8.136,1.154,10.343-2.35c2.207-3.505,1.155-8.136-2.35-10.343L43.653,259.72 C28.121,249.941,15,226.172,15,207.818v-4c0-18.354,13.121-42.122,28.653-51.902l136.718-86.091l253.059,159.35l-128.944,81.196 c-20.945,13.189-37.352,42.909-37.352,67.661c0,13.495,4.907,23.636,13.818,28.555c3.579,1.976,7.526,2.956,11.709,2.956 c6.231,0,12.985-2.176,19.817-6.479l122.099-76.885c11.455-7.213,20.427-23.467,20.427-37.004 C455.004,277.119,451.78,270.719,446.158,267.615z"></path>
          </svg>
          <span className="lg:text-5xl text-xl text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
            Our Best Coaches
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {coachesData.map((coach, index) => (
          <div
            key={index}
            className="relative group transition-all duration-500 hover:bg-orange-100 hover:border-orange-700 hover:border-b w-[248px] h-[318px] mx-auto"
          >
            <img
              className="transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:rounded-br-[80px] w-[248px] h-[248px]"
              src={coach.imgSrc}
              alt={coach.name}
            />
            <div className="transition-all duration-500 p-1 group-hover:pl-1.5 pt-4">
              <p className="text-base text-white font-sans">{coach.name}</p>
              <p className="text-sm text-gray-400 font-sans">{coach.role}</p>
            </div>
            <svg
              className="transition-all duration-500 opacity-0 group-hover:opacity-100 absolute bottom-[12px] right-[3px]"
              xmlns="http://www.w3.org/2000/svg"
              width="45"
              height="64"
              viewBox="0 0 45 64"
              fill="none"
            >
              <path
                d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.680763L5.67927 0.685928Z"
                fill="#F5A623"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCoach;
