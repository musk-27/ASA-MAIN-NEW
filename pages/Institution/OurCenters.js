import React from 'react';

const OurCenters = () => {
  // Array of centers with title, description, image, and URL for "Read More"
  const centers = [
    {
      title: "Arya Gurukul Ambernath",
      description: "Arya Gurukul Ambernath offers state-of-the-art sports facilities and encourages students to participate in various sporting events. From basketball to football, the center provides a wide array of activities.",
      image: "/assets/images/visionmissionbg.jpg",
      readMoreLink: "/ambernath"  // Link for the "Read More" button
    },
    {
      title: "Arya Gurukul Nandivali",
      description: "Arya Gurukul Nandivali has become a hub for sports enthusiasts, offering a range of outdoor and indoor sports facilities. Students can explore sports like tennis, badminton, and athletics with expert coaching.",
      image: "/assets/images/visionmissionbg.jpg",
      readMoreLink: "/nandivali"  // Link for the "Read More" button
    },
    // Add more centers here if needed
  ];

  return (
    <section>
      <div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-24 max-w-7xl">
        <div className="grid w-full grid-cols-1 gap-6 mx-auto lg:grid-cols-2">
          {/* Mapping through centers array */}
          {centers.map((center, index) => (
            <div key={index} className="p-6">
              <img
                className="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl"
                src={center.image}  // Dynamic image source
                alt={center.title}   // Dynamic alt text
              />
              <h1 className="mx-auto mb-8 text-2xl font-semibold leading-none tracking-tighter text-neutral-600 lg:text-3xl">
                {center.title}  {/* Dynamic title */}
              </h1>
              <p className="mx-auto text-base leading-relaxed text-gray-500">
                {center.description} {/* Dynamic description */}
              </p>
              <div className="mt-4 flex justify-start">
                {/* Dynamic "Read More" button with link */}
                <a
                  href={center.readMoreLink}  // Dynamic "Read More" link
                  className="font-semibold text-blue-600 hover:text-neutral-600 whitespace-nowrap"
                  title="read more"
                >
                  Read More »
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCenters;
