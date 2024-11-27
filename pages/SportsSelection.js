import { useState, useEffect } from "react";
import Link from "next/link";

const allSports = [
  {
    name: "Cricket",
    image: "/assets/images/cricket.jpg",
    link: "/cricket",
  },
  {
    name: "Archery",
    image: "/assets/images/archery.jpg",
    link: "/archery",
  },
  {
    name: "Badminton",
    image: "/assets/images/badminton.jpg",
    link: "/badminton",
  },
  {
    name: "Hockey",
    image: "/assets/images/hockey.jpg",
    link: "/hockey",
  },
  {
    name: "Soccer",
    image: "/assets/images/hockey.jpg",
    link: "/soccer",
  },
  {
    name: "Tennis",
    image: "/assets/images/hockey.jpg",
    link: "/tennis",
  },
  {
    name: "Shooting",
    image: "/assets/images/hockey.jpg",
    link: "/shooting",
  },
  {
    name: "Football",
    image: "/assets/images/hockey.jpg",
    link: "/football",
  },
  {
    name: "Swimming",
    image: "/assets/images/hockey.jpg",
    link: "/swimming",
  },
  {
    name: "Yoga",
    image: "/assets/images/hockey.jpg",
    link: "/yoga",
  },
  {
    name: "Boxing",
    image: "/assets/images/hockey.jpg",
    link: "/boxing",
  },
  {
    name: "Running",
    image: "/assets/images/hockey.jpg",
    link: "/running",
  },
  {
    name: "Badminton",
    image: "/assets/images/hockey.jpg",
    link: "/badminton",
  },
  {
    name: "Hockey",
    image: "/assets/images/hockey.jpg",
    link: "/hockey",
  },
  {
    name: "Taekwondo",
    image: "/assets/images/hockey.jpg",
    link: "/taekwondo",
  },
  {
    name: "Karate",
    image: "/assets/images/hockey.jpg",
    link: "/karate",
  },
  {
    name: "Cycling",
    image: "/assets/images/hockey.jpg",
    link: "/cycling",
  },
  {
    name: "Volleyball",
    image: "/assets/images/hockey.jpg",
    link: "/volleyball",
  },
];

const SportsSelection = () => {
  const [selectedSports, setSelectedSports] = useState([]);

  useEffect(() => {
    // Shuffle sports array and pick the first 3
    const shuffledSports = [...allSports]
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    setSelectedSports(shuffledSports);
  }, []); // Empty array ensures this runs only once when the component mounts

  return (
    <section className="bg-black py-12 lg:px-20">
      <div className="mx-auto px-4">
        <p
          className="text-center text-white py-10 text-2xl md:text-4xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Explore Our Sports
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8">
          {selectedSports.map((sport, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
            >
              <Link href={sport.link}>
                <div className="relative group">
                  <img
                    src={sport.image}
                    alt={sport.name}
                    className="w-full h-48 object-cover group-hover:opacity-80 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:bg-opacity-75 transition-all duration-300">
                    <h3 className="text-white text-2xl font-semibold">
                      {sport.name}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SportsSelection;
