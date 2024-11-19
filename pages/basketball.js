import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Principles from "./basketball/Principles";
import Sponsors from "./cricket/Sponsors";
import ImageSection from "./basketball/ImageSection";
import CenterImage from "./basketball/CenterImage";
import SportsPress from "./basketball/SportsPress";
import Testimonials from "./basketball/Testimonials";
import AchievementsNumbers from "../pages/cricket/AcheivementsNumbers";
import CricketAcademy from "../pages/cricket/CricketAcademy";
import FAQ from "../pages/cricket/FAQ";
import CricketLearning from "../pages/cricket/CricketLearning";
import SliderImage from "./cricket/SliderImage";
import SliderSection from "../pages/basketball/SliderSection";
import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";

Modal.setAppElement("#__next"); // Ensure accessibility for the modal

// const images = [
//   "/assets/images/CricketSlider/10.jpg",
//   "/assets/images/CricketSlider/11.jpg",
//   "/assets/images/CricketSlider/8.jpg",
// ];

// const content = [
//   "Basketball is more than just a game.",
//   "Elevate your skills to the next level.",
//   "Join our community of passionate players.",
// ];


export default function Basketball() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const seo = {
    title: "Cricket - Arya Sports Academy",
    description: "Learn and play Cricket at Arya Sports Academy.",
  };

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider
          image={"bg-basketballHome"}
          title={"The Future of Basketball is here"}
        />
      </section>
      <section
        className={`min-h-screen transition-all py-24 duration-500 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="flex flex-col lg:flex-row items-center justify-between px-12 lg:px-64 gap-12">
          <div className="lg:w-1/2 space-y-6">
            <div
              className={`space-y-2 transition-all duration-500 ${
                isDark ? "text-white" : "text-black"
              }`}
            >
              <h1
                data-aos-duration="1000"
                data-aos="fade-up"
                className="text-2xl lg:text-5xl md:text-3xl font-akira"
                onMouseEnter={() => setIsDark(!isDark)}
                onMouseLeave={() => setIsDark(!isDark)}
              >
                Basketball Excellence
              </h1>
              <p
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="100"
                className="text-base text-justify font-montserrat"
              >
                At Arya Sports Academy, basketball is more than just a sport;
                it’s a powerful tool for shaping character and building
                community. The game teaches precision, agility, and mental
                toughness while fostering teamwork and communication skills.
              </p>
              <p
                data-aos-duration="1000"
                data-aos="fade-up"
                data-aos-delay="200"
                className="text-base text-justify font-montserrat"
              >
                We focus on helping players develop their skills in shooting,
                passing, and defensive strategies. Beyond the court, our
                students learn to approach challenges with confidence and
                adaptability. Through basketball, we aim to nurture leaders who
                can excel both in the game and in life.
              </p>
            </div>
          </div>

          {/* Play Button Column */}
          <div className="lg:w-1/2 flex justify-center">
            <button
              className="bg-red-600 text-white rounded-full p-8 lg:p-12"
              onClick={openModal}
            >
              <FaPlay className="text-7xl" />
            </button>
          </div>
        </div>

        {/* Modal for YouTube Video */}
        {/* Modal for YouTube Video */}
        <Modal
          isOpen={isModalOpen}
          onRequestClose={closeModal}
          className="flex justify-center items-center h-screen"
          overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
        >
          <div className="relative bg-white rounded-lg overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-0 right-2 text-2xl text-white hover:text-red-800"
            >
              &times;
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/eSSyLSGBSp8?si=jqKqV-oaYqnRA-1k&controls=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </Modal>
      </section>
      <section className="py-12 bg-black">
        <CricketLearning />
      </section>
      <section className="py-12 bg-black">
        <CenterImage />
      </section>
      <section className="py-12 bg-black">
        <Principles />
      </section>
      <section className="py-12 bg-black">
        <SliderSection
         
        />
      </section>
     

      <section className="py-12 ">
        <AchievementsNumbers />
      </section>
      <div className="py-12 bg-black">
        <SliderImage />
      </div>

      <section className="py-12 bg-black">
        <ImageSection />
      </section>

      <section className="py-12 bg-black">
        <SportsPress />
      </section>

      <section className="py-12 bg-black">
        <Testimonials />
      </section>
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
}
