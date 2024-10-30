import { useState } from 'react';

export default function AboutArchery() {
  const [hovered, setHovered] = useState(false); // State to track hover on the button

  return (
    <div className={`min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center transition-all duration-300 ${hovered ? 'bg-cover bg-center' : 'bg-white'} bg-no-repeat`} style={{ backgroundImage: hovered ? "url('/assets/Images/Activities/Image1.jpg')" : 'none' }}>
      <div data-theme="teal" className="mx-auto max-w-6xl">
        <h2 className="sr-only">About Archery</h2>
        <section className="font-sans text-black">
          <div className="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
            <div className="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
              <div className="h-full">
                <article className="h-full">
                  <div className="h-full">
                    <img
                      className="h-full object-cover rounded-lg filter grayscale hover:grayscale-0"
                      src="/assets/Images/Activities/Image1.jpg" // Same image for the main display
                      width="733"
                      height="412"
                      alt="Archery at Arya Gurukul"
                      typeof="foaf:Image"
                    />
                  </div>
                </article>
              </div>
            </div>
            <div className="p-6 bg-black text-white rounded-lg shadow-lg">
              <div className="leading-relaxed">
                <h2 className="xl:text-4xl text-3xl text-white font-akira   text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
                  About Archery at Arya Gurukul
                </h2>
                <p className="mt-4">
                  At Arya Gurukul, archery is more than just a sport—it is a discipline that teaches students focus, patience, and precision. 
                  Rooted in tradition, archery has a rich history that dates back thousands of years. It has evolved from a means of survival to a 
                  competitive sport that cultivates valuable life skills.
                </p>
                {/* <p className="mt-4">
                  Our archery program is designed to be inclusive and accessible to all students, regardless of skill level. 
                  Through expert coaching and a supportive environment, we encourage each archer to strive for personal excellence. 
                  Whether participating in friendly competitions or honing individual skills, our students find joy and fulfillment in the art of archery.
                </p> */}
                <p className="mt-4">
                  Join us to experience the thrill of archery and develop your skills in this exciting sport!
                </p>
                <p className='flex items-center justify-center'>
                  <a
                    onMouseEnter={() => setHovered(true)} // Set hover state on mouse enter
                    onMouseLeave={() => setHovered(false)} // Reset hover state on mouse leave
                    className="mt-4 inline-block px-6 py-2 bg-gradient-to-r font-bold font-akira text-lg from-yellow-300 to-red-400 text-white rounded transition-transform hover:scale-105 text-center "
                    href="/join"
                  >
                    Join Now
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
