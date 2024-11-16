import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Slider from "../components/Slider/Slider";

import ImagesText from "./cricket/ImagesText";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderImage from "../pages/cricket/SliderImage";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css"; // Default styles
import "swiper/css/navigation"; // Optional: for navigation
import "swiper/css/pagination"; // Optional: for pagination
import PlayerSpotlights from "./cricket/PlayerSpotlights";
import UpcomingMatches from "./cricket/UpcomingMatches";
import CricketAcademy from "./cricket/CricketAcademy";
import ImageGallery from "./cricket/ImageGallery";
import Testimonials from "./cricket/Testimonials";
import CallToAction from "./cricket/CallToAction";
import SponsorsSection from "./cricket/SponsorsSection";
import AboutCricket from "./cricket/AboutCricket";
import CricketLearning from "./cricket/CricketLearning";
import AcheivementsNumbers from "./cricket/AcheivementsNumbers";
import CoachTest from "./cricket/CoachTest";
import Acheivements from "./cricket/Acheivements";
import Sponsors from "./cricket/Sponsors";
import Features from "./cricket/Features";
import FAQ from "./cricket/FAQ";
import SkillCricket from "./cricket/SkillCricket";
import Gallery from "./archery/Gallery";
const CricketPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const seo = {
    title: "Cricket - Arya Sports Academy",
    description: "Learn and play Cricket at Arya Sports Academy.",
  };

  const handleJoinNowClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const [imagedBackground, setImagedBackground] = useState("bg-sports-edited");

  const newImages = [
    { src: "/assets/images/CricketSlider/1.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/2.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/3.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/4.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/6.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/7.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/8.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/9.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/10.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/11.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/12.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/13.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/14.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/15.jpg", alt: "Daycare Services", priority: false },
    { src: "/assets/images/CricketSlider/16.jpg", alt: "Daycare Services", priority: false },
  ];

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider image={"bg-cricket"} title={"Cricket"} />
      </section>

      {/* FEATURES SECTION */}
      <Features />

      {/* <AboutCricket /> */}

      <CricketLearning />

      {/* NUMBERS */}
      <AcheivementsNumbers />

      <CoachTest />

      <Acheivements />
      <Gallery/>

      {/* <PlayerSpotlights /> */}
      {/* <UpcomingMatches /> */}
     
      {/* <SponsorsSection /> */}
      {/* <ImageGallery /> */}
      {/* <CallToAction /> */}
      <Sponsors />
      <Testimonials />

      {/* QUESTION SECITON */}
      {/* <SkillCricket /> */}

      {/* SPONSORS SECTION */}
      
      <FAQ />
      {/* <ImagesText
        imagedBackground={imagedBackground}
        setImagedBackground={setImagedBackground}
      /> */}

      {/* FAQ */}
     
      <div className="py-12 bg-black">
        <SliderImage title="ACHEVEMENTS" images={newImages} />
      </div>
      {/* Modal for Joining */}
      
    </Layout>
  );
};

export default CricketPage;
