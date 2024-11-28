import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Principles from "./basketball/Principles";
import Sponsors from "./cricket/Sponsors";
import ImageSection from "./basketball/ImageSection";
import SportInfoSection from "./basketball/SportInfoSection";
import SportsPress from "./basketball/SportsPress";
import Testimonials from "./basketball/Testimonials";
import AchievementsNumbers from "../pages/cricket/AcheivementsNumbers";
import CricketAcademy from "../pages/cricket/CricketAcademy";
import FAQ from "../pages/cricket/FAQ";
import SportLearning from "../pages/cricket/SportLearning";
import SliderImage from "./cricket/SliderImage";
import SliderSection from "./basketball/SportSliderSection";
import { useState } from "react";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";
import CircleCTA from "../components/LargeBannerCTA/CircleCTA";
import SportsSelection from "./SportsSelection";
import FeatureCard from "../pages/basketball/FeatureCard"; // Import the new FeatureCard component
import {
  FaDumbbell,
  FaClipboardList,
  FaUsers,
  FaStopwatch,
  FaTrophy,
} from "react-icons/fa";
import SportSliderSection from "./basketball/SportSliderSection";

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

export default function Archery() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const seo = {
    title: "Cricket - Arya Sports Academy",
    description: "Learn and play Cricket at Arya Sports Academy.",
  };

  const basketballImages = [
    "/assets/images/CricketSlider/10.jpg",
    "/assets/images/CricketSlider/11.jpg",
    "/assets/images/CricketSlider/8.jpg",
  ];

  const basketballContent = [
    "Join the Arya Gurukul Basketball Camp: A New Era of Sports Training.",
    "Sharpen Your Skills with Professional Coaches at Arya Gurukul.",
    "Become the Player You Were Meant to Be at Our Exclusive Basketball Camp.",
  ];

  const cricketImages = [
    { src: "/assets/images/CricketSlider/1.jpg", alt: "Cricket Image 1", priority: false },
    { src: "/assets/images/CricketSlider/2.jpg", alt: "Cricket Image 2", priority: false },
    { src: "/assets/images/CricketSlider/3.jpg", alt: "Cricket Image 3", priority: false },
    { src: "/assets/images/CricketSlider/4.jpg", alt: "Cricket Image 4", priority: false },
    { src: "/assets/images/CricketSlider/5.jpg", alt: "Cricket Image 5", priority: false },
  ];

  const features = [
    {
      title: "Expert Coaching",
      description:
        "Our academy features experienced coaches who provide personalized training to help each child develop their skills and confidence on the court.",
      borderColor: "border-yellow-500",
    },
    {
      title: "Skill Development Programs",
      description:
        "Our programs focus on individual skill development, including dribbling, shooting, passing, and defensive strategies, tailored for various age groups and skill levels.",
      borderColor: "border-green-500",
    },
    {
      title: "Competitive Opportunities",
      description:
        "We offer various leagues and tournaments, providing young athletes the chance to showcase their skills in competitive settings.",
      borderColor: "border-green-500",
    },
    {
      title: "Positive Team Environment",
      description:
        "Our academy fosters a supportive and positive atmosphere, encouraging teamwork, sportsmanship, and friendships that last a lifetime.",
      borderColor: "border-yellow-500",
    },
  ];

  const leftSection = [
    {
      icon: FaDumbbell,
      title: "Training",
      description: "Effective cricket training from our experienced coaches",
    },
    {
      icon: FaClipboardList,
      title: "Authority",
      description: "We focus on developing cricket values and independence",
    },
    {
      icon: FaUsers,
      title: "Youth Academy",
      description: "A special cricket program for younger players",
    },
  ];

  const rightSection = [
    {
      icon: FaStopwatch,
      title: "Precision & Timing",
      description: "Learn the precision needed for a perfect cricket shot",
    },
    {
      icon: FaUsers,
      title: "Team Unity",
      description: "Cricket teaches the power of teamwork and coordination",
    },
    {
      icon: FaTrophy,
      title: "Championship",
      description:
        "All players get the chance to participate in cricket tournaments",
    },
  ];

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider
          image={"bg-basketballHome"}
          title={"The Future of Basketball is here"}
        />
      </section>
      <div
        className={`transition-all duration-500 w-full ${
          isDark ? "bg-black" : "bg-white"
        }`}
        onMouseEnter={() => setIsDark(true)}
        onMouseLeave={() => setIsDark(false)}
      >
        <section className="py-24 max-w-screen-xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between px-4 lg:px-20 gap-12">
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
                  adaptability. Through basketball, we aim to nurture leaders
                  who can excel both in the game and in life.
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
      </div>

      <section className="py-12 bg-black">
        {/* <SportLearning /> */}
        <SportLearning
          image="/assets/images/Activities/basketallGround.jpg"
          title="Basketball Facilities"
          description="At Arya Gurukul School, we proudly offer top-notch basketball
            facilities that promote athletic excellence and teamwork. Our
            modern courts feature high-quality flooring and regulation-sized
            hoops, providing an ideal environment for practice and competition.
            With state-of-the-art basketball courts, modern training equipment,
            and top-notch infrastructure, our facilities enable players to
            develop their skills under the guidance of experienced coaches. We
            ensure that every student has access to the best resources for
            training and competition."
          link="/Enrol"
          ctaTitle="Enrol Now"
          ctaSubtitle="With Us"
          imageClass="bg-basketballHome"
        />
      </section>

      <section className="py-12 bg-black">
        {/* <CenterImage /> */}
        <SportInfoSection
          title="Join Our World-Class Cricket Training"
          leftSection={leftSection}
          imageSrc="/assets/images/CenterImage.png" // Replace with the relevant cricket image
          rightSection={rightSection}
        />
      </section>

      <section className="py-12 bg-black">
        <SportsSelection />
      </section>
      <section className="py-12 bg-black">
        <Principles />
      </section>
      <section className="py-12 bg-black">
      <SportSliderSection
  images={["/assets/images/CricketSlider/10.jpg", "/assets/images/CricketSlider/11.jpg", "/assets/images/CricketSlider/8.jpg"]}
  content={["Join the Arya Gurukul Basketball Camp...", "Sharpen Your Skills...", "Become the Player..."]}
  title="Arya Gurukul Basketball Camp"
  ctaLink="/BasketballCamp"
  ctaTitle="Sign Up for the"
  ctaSubtitle="Basketball Camp"
  ctaClass="bg-sports-edited"
/>
      </section>

      <div className="py-12 bg-black">
      <SliderImage
  images={[
    { src: "/assets/images/CricketSlider/1.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/2.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/3.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/4.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/6.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/7.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/8.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/9.jpg", alt: "Daycare Services", priority: false },
  { src: "/assets/images/CricketSlider/10.jpg", alt: "Daycare Services", priority: false },
  ]}
/>

       
      </div>

      <section className="py-12 bg-black">
      <div className="max-w-screen-xl mx-auto py-8 px-4 lg:py-16 lg:px-6 text-white">
      <div className="text-center mb-10">
        <p
          className="text-center text-white text-2xl font-akira lg:text-5xl text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
          data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Highlighted Features
        </p>
        <h2 className="text-xl tracking-tight italic text-primary-800 mt-4">
          The academy provides children the opportunity to learn and enhance their basketball skills.
        </h2>
      </div>

      <div className="flex flex-col md:flex-col lg:flex-row">
        {/* Image Section */}
        <ImageSection
          src="/assets/images/basketball.jpg"
          alt="Basketball Training"
          aosDuration="1000"
          aosDelay="100"
        />

        {/* Feature Cards Section */}
        <div className="flex-1 flex flex-col sm:flex-row flex-wrap md:mt-10 lg:mt-0 -mb-4 -mx-2">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              borderColor={feature.borderColor}
              aosDelay={index * 200}
              aosDuration="500"
            />
          ))}
        </div>
      </div>
    </div>
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
