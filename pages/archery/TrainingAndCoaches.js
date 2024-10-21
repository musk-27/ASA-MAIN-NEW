import { useState } from 'react';

export default function TrainingAndCoaches() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const coaches = [
    {
      name: 'Coach A',
      experience: '5 years experience',
      testimonial: 'Coach A has been an incredible mentor, guiding athletes to success with dedication and skill.',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      name: 'Coach B',
      experience: 'National level coach',
      testimonial: 'Coach B brings years of experience and unmatched passion for coaching.',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      name: 'Coach C',
      experience: '5 years experience',
      testimonial: 'Coach C excels at developing young talent into exceptional athletes.',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
    {
      name: 'Coach D',
      experience: 'National level coach',
      testimonial: 'Coach D has a unique approach that brings out the best in every athlete.',
      imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHx1c2VyfGVufDB8MHx8fDE2OTQwOTU5Nzl8MA&ixlib=rb-4.0.3&q=80&w=1080',
    },
  ];

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange font-akira text-center">
        Training & Coaches
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6">
        {coaches.map((coach, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg transition-transform duration-300 relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="relative">
              <img
                className="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-105"
                src={coach.imageUrl}
                alt={`${coach.name}'s Profile Image`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-transparent to-gray-800 opacity-50"></div>
            </div>
            <div className="px-6 py-4">
              <div className="text-xl font-semibold text-gray-800">{coach.name}</div>
              <p className="text-gray-300">{coach.experience}</p>
              {/* Show testimonial only on hover */}
              <p className="mt-2 text-gray-500">{coach.testimonial}</p>
            </div>
            <div className="px-6 py-4">
              <a href="#" className="text-blue-500 hover:underline">View Profile</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
