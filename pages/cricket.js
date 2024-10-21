import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Slider from "../components/Slider/Slider";

import ImagesText from "./cricket/ImagesText";
import { Swiper, SwiperSlide } from "swiper/react";
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
     
      <CricketAcademy />
      {/* Modal for Joining */}
      
    </Layout>
  );
};

export default CricketPage;
