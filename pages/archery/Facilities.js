export default function Facilities() {
    return (
      <section className="py-16 px-8 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange text-center">
          Facilities
        </h2>
        <p className="mt-4 text-center text-gray-300">
          Our state-of-the-art archery range is equipped with modern bows, arrows, and safety gear to ensure a top-notch training experience.
        </p>
        
        <div className="mt-8">
          <img 
            src="/assets/Activities/Image1.jpg" 
            alt="Archery Range" 
            className="w-full h-64 object-cover rounded-lg shadow-md" 
          />
        </div>
  
        <div className="mt-8 flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white">Facilities Features:</h3>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li>✔ Modern bows and arrows</li>
            <li>✔ Professional coaching staff</li>
            <li>✔ Safety gear for all participants</li>
            <li>✔ Regular maintenance and upgrades</li>
            <li>✔ Spacious and well-lit range area</li>
          </ul>
        </div>
      </section>
    );
  }
  