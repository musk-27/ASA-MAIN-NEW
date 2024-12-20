export default function UpcomingEvents() {
    const events = [
      {
        title: "National Archery Championship",
        date: "December 2024",
        description: "Join us for the annual National Archery Championship, where archers from across the country compete for the top honors. Don't miss the excitement!",
      },
      {
        title: "Archery Workshop for Beginners",
        date: "January 2025",
        description: "A perfect opportunity for newcomers to learn the fundamentals of archery. This workshop will cover everything from basic techniques to safety protocols.",
      },
      {
        title: "State-Level Archery Tournament",
        date: "February 2025",
        description: "Participate in the State-Level Archery Tournament and showcase your skills against some of the best archers in the region.",
      },
      {
        title: "Family Fun Archery Day",
        date: "March 2025",
        description: "Bring your family and enjoy a day filled with archery games, contests, and fun activities suitable for all ages.",
      },
    ];
  
    return (
      <section className="py-16 px-8 bg-white">
        <h2
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
        className="xl:text-4xl text-xl text-black font-akira text-center lg:py-10 "
        // className="xl:text-4xl text-xl text-black font-akira text-center lg:py-10 text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
      >
        UPCOMING Events
      </h2>
        <ul className="list-none list-inside text-gray-300 mt-4 space-y-4">
          {events.map((event, index) => (
            <li key={index} className="p-4 bg-black rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-[#F47C47] font-montserrat">{event.title}</h3>
              <p className="text-gray-400 italic">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  