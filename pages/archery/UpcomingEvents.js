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
      <section className="py-16 px-8 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange text-center mb-6">
          Upcoming Events
        </h2>
        <ul className="list-disc list-inside text-gray-300 mt-4 space-y-4">
          {events.map((event, index) => (
            <li key={index} className="p-4 bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h3 className="text-xl font-semibold text-gradientYellow">{event.title}</h3>
              <p className="text-gray-400">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  