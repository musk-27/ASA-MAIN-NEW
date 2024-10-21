import React from 'react';

const SponsorsSection = () => {
  const sponsors = [
    { logo: '/assets/images/sponsor1.png', name: 'Sponsor 1' },
    { logo: '/assets/images/sponsor2.png', name: 'Sponsor 2' },
    { logo: '/assets/images/sponsor3.png', name: 'Sponsor 3' },
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-akira text-gray-800 mb-8 text-center">Our Sponsors</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {sponsors.map((sponsor, index) => (
          <div key={index} className="flex justify-center">
            <img src={sponsor.logo} alt={sponsor.name} className="h-16 object-contain" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SponsorsSection;
