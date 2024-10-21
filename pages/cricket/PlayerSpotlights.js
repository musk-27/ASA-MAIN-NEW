import React from 'react';

const PlayerSpotlights = () => {
  const players = [
    {
      name: 'John Doe',
      position: 'Batsman',
      achievements: 'Top scorer in the last championship.',
      image: '/assets/images/player1.webp', // Replace with actual image paths
    },
    {
      name: 'Jane Smith',
      position: 'Bowler',
      achievements: 'Leading wicket-taker in the state tournament.',
      image: '/assets/images/player2.webp',
    },
    {
      name: 'Mike Johnson',
      position: 'All-rounder',
      achievements: 'MVP of the regional league.',
      image: '/assets/images/player3.webp',
    },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-akira text-gray-800 mb-8 text-center">
        Meet Our Star Players
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((player, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={player.image} alt={player.name} className="w-full h-40 object-cover rounded-t-lg" />
            <h3 className="text-xl font-semibold mt-4">{player.name}</h3>
            <p className="text-gray-600">{player.position}</p>
            <p className="text-gray-500 mt-2">{player.achievements}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PlayerSpotlights;
