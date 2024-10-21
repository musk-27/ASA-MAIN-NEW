export default function Gallery() {
    const images = [
      {
        src: "/assets/images/Cricket/1.jpg",
        alt: "Archery Event 1",
      },
      {
        src: "/assets/images/Cricket/2.jpg",
        alt: "Archery Event 2",
      },
      {
        src: "/assets/images/Cricket/3.jpg",
        alt: "Archery Event 3",
      },
      {
        src: "/assets/images/Cricket/4.jpg",
        alt: "Archery Event 4",
      },
      {
        src: "/assets/images/Cricket/5.jpg",
        alt: "Archery Event 5",
      },
      {
        src: "/assets/images/Cricket/6.jpg ",
        alt: "Archery Event 6",
      },
    ];
  
    return (
      <section className="py-16 px-8 bg-black lg:px-20 shadow-lg">
        <h2 className="text-xl lg:text-4xl font-bold mt-2 font-akira mb-6 uppercase  text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text text-center">
          Photo & Video Gallery
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {images.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }
  