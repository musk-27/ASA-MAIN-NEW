import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Section from "../components/Layout/Section";
import Slider from "../components/Slider/Slider";
import cricketImg from "../public/assets/images/cricket.jpg";

import HeroSection from "./archery/HeroSection"
import AboutArchery from "./archery/AboutArchery"
// import AchievementsSection from "./archery/Achievements"
import CallToAction from "./archery/CallToAction"
// import GallerySection from "./archery/PhotoGallery"
import FAQs from "./archery/FAQs";
import TrainingAndCoaches from "./archery/TrainingAndCoaches"
import Facilities from "./archery/Facilities";
import Testimonials from "./archery/Testimonials";
import UpcomingEvents from "./archery/UpcomingEvents";
// import Gallery from "./archery/Gallery";
import Features from "./archery/Features";

const ArcheryPage = () => {
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

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider image={"bg-archery"} title={"Archery"} />
      </section>
      {/* Latest Match Results Section */}
      <div className=" ">
        <Features/>
      <HeroSection />
      <AboutArchery />
      <TrainingAndCoaches />
      <Facilities />
      <Testimonials />
      <UpcomingEvents />
      {/* <Gallery /> */}
      <FAQs />
      <CallToAction />
    </div>
     
    </Layout>
  );
};

export default ArcheryPage;
