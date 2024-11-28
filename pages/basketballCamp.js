import React from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderImage from "./cricket/SliderImage";
import CricketAcademy from "../pages/cricket/CricketAcademy";
import FAQ from "../pages/cricket/FAQ";

const basketballCamp = () => {
  const seo = {
    title: "Cricket - Arya Sports Academy",
    description: "Learn and play Cricket at Arya Sports Academy.",
  };

  const cricketImages = [
    { src: "/assets/images/CricketSlider/1.jpg", alt: "Cricket Image 1", priority: false },
    { src: "/assets/images/CricketSlider/2.jpg", alt: "Cricket Image 2", priority: false },
    { src: "/assets/images/CricketSlider/3.jpg", alt: "Cricket Image 3", priority: false },
    { src: "/assets/images/CricketSlider/4.jpg", alt: "Cricket Image 4", priority: false },
    { src: "/assets/images/CricketSlider/5.jpg", alt: "Cricket Image 5", priority: false },
  ];

  const images = [
    "/assets/images/cricket.jpg",
    "/assets/images/sports.jpeg",
    "/assets/images/football.jpg",
    "/assets/images/john.jpg",
  ];

  // React Slick slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const faqs = [
    {
      question: "What should participants bring?",
      answer:
        "Participants should bring their own water bottles, sports shoes, and comfortable clothing.",
    },
    {
      question: "What safety measures are in place?",
      answer:
        "Our camp adheres to strict safety guidelines, including first aid support and trained staff supervision.",
    },
    {
      question: "What is the daily schedule?",
      answer:
        "The camp runs from 10:00 AM to 4:00 PM daily, with breaks for snacks and lunch.",
    },
  ];

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider image={"bg-basketballHome"} title={"Basketball Camp"} />
      </section>

      {/* About the Camp */}

      <div className="bg-black">
        <div className="py-12 lg:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-xl lg:text-4xl font-bold mt-2 mb-6 uppercase text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text text-center">
              About the Camp
            </h2>
            <p
              className="text-lg text-white text-center mb-8"
              data-aos="fade-up"
            >
              Join our Basketball Camp to enhance your skills, learn teamwork,
              and experience the thrill of the game. Designed for all skill
              levels, this camp is led by professional coaches and trainers.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div data-aos="fade-right">
                <h3 className="font-bold text-xl text-red-800 italic">
                  Schedule
                </h3>
                <div className="text-white">
                  {" "}
                  <p className="mt-2">
                    Start Date: <strong>1st December 2024</strong>
                  </p>
                  <p>
                    End Date: <strong>15th December 2024</strong>
                  </p>
                  <p>
                    Daily Timings: <strong>10:00 AM – 4:00 PM</strong>
                  </p>
                </div>
              </div>

              {/* <div class="book">
              <div className="text-center flex flex-col">
                <p className="mt-2">
                  Start Date: <strong>1st December 2024</strong>
                </p>
                <p>
                  End Date: <strong>15th December 2024</strong>
                </p>
                <p>
                  Daily Timings: <strong>10:00 AM – 4:00 PM</strong>
                </p>
              </div>
              <div class="cover">
                <p>Schedule</p>
              </div>
            </div>
            <div class="book">
              <div className="text-center flex flex-col text-sm">
              <p className="mt-2">
                Arya Gurukul Sports Complex, Arya Gurukul School Campus.
              </p>
              </div>
              <div class="cover">
                <p>Location</p>
              </div>
            </div>
            <div class="book">
              <div className="text-center flex flex-col">
                <p className="mt-2">
                  This camp is open to participants aged{" "}
                  <strong>8–16 years</strong>.
                </p>
              </div>
              <div class="cover">
                <p>Age Group</p>
              </div>
            </div> */}
              <div data-aos="fade-left">
                <h3 className="font-bold text-xl text-red-800 italic">
                  Age Group
                </h3>
                <p className="mt-2 text-white">
                  This camp is open to participants aged{" "}
                  <strong>8–16 years</strong>.
                </p>
                <h3 className="font-bold text-xl text-red-800 mt-6 italic">
                  Location
                </h3>
                <div className="text-white">
                  {" "}
                  <p className="mt-2">
                    Arya Gurukul Sports Complex, Arya Gurukul School Campus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
{/* Camp Highlights */}

      <div className="bg-white py-12 lg:py-20">
      <h2
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="100"
        className="xl:text-4xl text-xl text-black font-akira text-center lg:py-10 "
        // className="xl:text-4xl text-xl text-black font-akira text-center lg:py-10 text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
      >
        camp Highlights
      </h2>
        <div className="lg:px-20 max-w-screen-xl mx-auto">
          <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
            <div className="cardNumber relative max-w-[300px] max-h-[320px]  rounded-lg p-8 m-3 text-decoration-none z-0 overflow-hidden font-sans group">
              <p className="card-title text-[#262626] text-xl font-bold mb-2">
                Basketball Camp 1
              </p>
              <p className="small-desc text-[#452c2c] text-base font-normal leading-relaxed">
                Join us for an exciting basketball training experience. Improve
                your skills and learn from the best!
              </p>
              <div className="go-corner absolute flex items-center justify-center w-8 h-8 top-0 right-0 overflow-hidden bg-gradient-to-tl from-yellow-300 to-red-500 rounded-tr-[4px] rounded-bl-[32px]">
                <div className="go-arrow text-white text-[1.5em] font-mono -mt-1 -mr-1">
                  →
                </div>
              </div>
            </div>

            <div className="cardNumber relative max-w-[300px] max-h-[320px] bg-gradient-to-b from-yellow-300 to-red-500 rounded-lg p-8 m-3 text-decoration-none z-0 overflow-hidden font-sans group">
              <p className="card-title text-[#262626] text-xl font-bold mb-2">
                Basketball Camp 2
              </p>
              <p className="small-desc text-[#452c2c] text-base font-normal leading-relaxed">
                Level up your game with advanced drills, strategies, and
                personalized coaching at our next basketball camp.
              </p>
              <div className="go-corner absolute flex items-center justify-center w-8 h-8 top-0 right-0 overflow-hidden bg-gradient-to-tl from-yellow-300 to-red-500 rounded-tr-[4px] rounded-bl-[32px]">
                <div className="go-arrow text-white text-[1.5em] font-mono -mt-1 -mr-1">
                  →
                </div>
              </div>
            </div>

            <div className="cardNumber relative max-w-[300px] max-h-[320px] bg-gradient-to-b from-yellow-300 to-red-500 rounded-lg p-8 m-3 text-decoration-none z-0 overflow-hidden font-sans group">
              <p className="card-title text-[#262626] text-xl font-bold mb-2">
                Basketball Camp 3
              </p>
              <p className="small-desc text-[#452c2c] text-base font-normal leading-relaxed">
                Get ready for an intense, action-packed camp to sharpen your
                shooting, dribbling, and defensive skills.
              </p>
              <div className="go-corner absolute flex items-center justify-center w-8 h-8 top-0 right-0 overflow-hidden bg-gradient-to-tl from-yellow-300 to-red-500 rounded-tr-[4px] rounded-bl-[32px]">
                <div className="go-arrow text-white text-[1.5em] font-mono -mt-1 -mr-1">
                  →
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      

      {/* Gallery Section */}

      <div className="py-12 bg-black">
      <SliderImage
  images={[
    { src: "/assets/images/slider1.jpg", alt: "Image 1", priority: true },
    { src: "/assets/images/slider2.jpg", alt: "Image 2", priority: false },
    { src: "/assets/images/slider3.jpg", alt: "Image 3", priority: true },
  ]}
/>
      </div>

      <section className="py-12 bg-black">
        <FAQ />
      </section>
      <section className="">
        <CricketAcademy
          backgroundImage="/assets/images/BasketballAcademy.jpg"
          // academyName="Basketball"
        />
      </section>
    </Layout>
  );
};

export default basketballCamp;
