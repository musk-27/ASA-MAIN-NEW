import Image from 'next/image'; // Import Next.js Image component for optimized image handling
import Link from 'next/link'; // For redirection
import { useState } from 'react'; // To manage hover state
import { Swiper, SwiperSlide } from 'swiper/react'; // Import Swiper components
import 'swiper/swiper-bundle.css'; // Import Swiper styles

export default function HeroSection() {
  const [hovered, setHovered] = useState(false); // State to track hover

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between h-screen bg-black text-white p-8">
      {/* Left Side - Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="font-akira text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange animate-fadeInUp">
          Archery at Arya Gurukul
        </h1>
        <p className="mt-4 text-xl animate-fadeInUp text-gray-300">
          Master the art of focus, precision, and discipline. Join our renowned Archery Program where students learn
          valuable life skills through the ancient sport of archery.
        </p>

        {/* Button with Redirection */}
        <Link href="/join" className="mt-6 inline-block px-6 py-2 bg-gradient-to-r from-gradientYellow to-gradientOrange text-white rounded hover:scale-105 transition-transform">
          Join the Archery Club Today
        </Link>
      </div>

      {/* Right Side - Image Slider */}
      <div className="md:w-1/2 mt-8 md:mt-0 relative flex items-center justify-center">
        {/* Swiper Slider */}
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 1500, // Time between slides in milliseconds
            disableOnInteraction: false, // Continue autoplay after interaction
          }}
          pagination={{
            clickable: true, // Enable clickable pagination dots
          }}
          loop={true} // Enable loop mode for continuous sliding
          className="w-full max-w-md h-auto rounded-lg overflow-hidden shadow-lg animate-fadeIn"
        >
          {/* Swiper Slides */}
          <SwiperSlide>
            <Image
              src="/assets/Activities/Image1.jpg" // Replace with actual image path
              alt="Archery Image 1"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/Activities/Image2.jpg" // Replace with actual image path
              alt="Archery Image 2"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/Activities/Image3.jpg" // Replace with actual image path
              alt="Archery Image 3"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="/assets/Activities/Image4.jpg" // Replace with actual image path
              alt="Archery Image 4"
              layout="responsive"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </SwiperSlide>
        </Swiper>

        {/* Info Card */}
        <div
          className={`absolute bottom-4 left-0 right-0 mx-auto p-4 bg-gray-800 rounded-lg shadow-lg max-w-md transition-opacity duration-300 ${
            hovered ? 'opacity-100' : 'opacity-0'
          }`} // Fade effect on hover
        >
          <h2 className="text-2xl font-bold">Why Archery?</h2>
          <p className="text-gray-400 mt-2">
            Archery improves concentration, patience, and self-discipline. Whether you're a beginner or experienced archer, our program provides opportunities for everyone.
          </p>
        </div>
      </div>
    </section>
  );
}
