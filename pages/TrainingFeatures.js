import React from 'react';

const TrainingFeatures = () => {
  const features = [
    {
      image: "/assets/images/cricket.jpg",
      title: "Expert Coaching",
      description: "Learn from experienced coaches with a proven track record in training athletes at all levels. Enhance your skills with personalized guidance."
    },
    {
      image: "/assets/images/football.jpg", // You can replace this with a different image
      title: "Comprehensive Training Programs",
      description: "Our programs are designed to cater to all age groups and skill levels, focusing on individual development in sports like football, cricket, and basketball."
    },
    {
      image: "/assets/images/fitness.jpg", // Add relevant image
      title: "Fitness and Conditioning",
      description: "Improve your overall fitness with specialized conditioning programs that enhance strength, endurance, and agility, vital for any sport."
    },
    {
      image: "/assets/images/teamwork.jpg", // Add relevant image
      title: "Teamwork and Sportsmanship",
      description: "We emphasize the importance of teamwork and sportsmanship, helping athletes develop crucial interpersonal skills on and off the field."
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative mb-4">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-md">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingFeatures;
