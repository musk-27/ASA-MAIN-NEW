const GallerySection = () => {
    return (
      <section className="bg-black text-white py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-gradientFrom to-gradientTo bg-clip-text text-transparent mb-8" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
            Photo & Video Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6 animate-fadeIn" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
            <img src="/images/gallery1.jpg" alt="Archery Event" className="rounded-lg shadow-lg" />
            <img src="/images/gallery2.jpg" alt="Archery Practice" className="rounded-lg shadow-lg" />
            <img src="/images/gallery3.jpg" alt="Archery Tournament" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
    );
  };
  
  export default GallerySection;