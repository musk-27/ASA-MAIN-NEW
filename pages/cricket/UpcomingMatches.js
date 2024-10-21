import React from 'react';

const UpcomingMatches = () => {
  const matches = [
    {
      date: '2024-10-20',
      time: '10:00 AM',
      opponent: 'Rival School A',
    },
    {
      date: '2024-10-27',
      time: '2:00 PM',
      opponent: 'Rival School B',
    },
    {
      date: '2024-11-03',
      time: '11:00 AM',
      opponent: 'Rival School C',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-akira text-gray-800 mb-8 text-center">Upcoming Matches & Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {matches.map((match, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">{match.opponent}</h3>
            <p className="text-gray-600">Date: {match.date}</p>
            <p className="text-gray-600">Time: {match.time}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingMatches;
