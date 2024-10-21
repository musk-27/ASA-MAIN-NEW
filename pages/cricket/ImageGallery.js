import React from 'react';

const ImageGallery = () => {
  const images = [
    '/assets/images/gallery1.webp',
    '/assets/images/gallery2.webp',
    '/assets/images/gallery3.webp',
    '/assets/images/gallery4.webp',
    '/assets/images/gallery5.webp',
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16">
      <h2 className="text-3xl font-akira text-gray-800 mb-8 text-center">Image Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-lg">
            <img src={image} alt={`Gallery ${index + 1}`} className="w-full h-auto object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
