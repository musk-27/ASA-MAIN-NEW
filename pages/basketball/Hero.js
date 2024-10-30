import Image from 'next/image';
import Slider from "../../components/Slider/Slider";

const Hero = () => {
  return (
    <section>
      {/* Slider component for the background and title */}
      

      <div className="container mx-auto flex justify-between items-center mt-8">
        <div className="max-w-lg space-y-6">
          {/* Subtitle and Join Us button */}
          <div className="flex items-center space-x-2">
            <span className="text-orange text-3xl">🏀</span>
            <div className="bg-green-500 w-12 h-6 rounded-full"></div>
          </div>
          <p className="text-gray-200 text-lg">
            Basketball is a team game that has gigantic ubiquity and is played with the assistance of a ball.
          </p>
          <button className="bg-pink text-white py-3 px-8 rounded-full">Join us</button>
        </div>
        <div className="relative w-1/2 h-80">
          {/* Basketball player image */}
          <Image src="/basketball-player.png" alt="Basketball player" layout="fill" objectFit="contain" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
