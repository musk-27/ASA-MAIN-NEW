import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";

import SliderImage from "../pages/cricket/SliderImage";
// import 'swiper/swiper-bundle.min.css';
import "swiper/css"; // Default styles
import "swiper/css/navigation"; // Optional: for navigation
import "swiper/css/pagination"; // Optional: for pagination
import Testimonials from "./cricket/Testimonials";
import CricketLearning from "./cricket/CricketLearning";
import AcheivementsNumbers from "./cricket/AcheivementsNumbers";
import CoachTest from "./cricket/CoachTest";
import Acheivements from "./cricket/Acheivements";
import Sponsors from "./cricket/Sponsors";
import Features from "./cricket/Features";
import FAQ from "./cricket/FAQ";
const CricketPage = () => {
  const seo = {
    title: "Cricket - Arya Sports Academy",
    description: "Learn and play Cricket at Arya Sports Academy.",
  };

  const newImages = [
    {
      src: "/assets/images/CricketSlider/1.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/2.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/3.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/4.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/6.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/7.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/8.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/9.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/10.jpg",
      alt: "Daycare Services",
      priority: false,
    },
    {
      src: "/assets/images/CricketSlider/11.jpg",
      alt: "Daycare Services",
      priority: false,
    }
  ];

  return (
    <Layout seo={seo}>
      <section className="bg-black">
        <Slider image={"bg-cricket"} title={"Cricket"} />
      </section>

      <Features />


      <CricketLearning />

      <AcheivementsNumbers />

      <CoachTest />

      <Acheivements />

      <Sponsors />
      <Testimonials />


      <FAQ />

      <div className="py-12 bg-black">
        <SliderImage title="ACHEVEMENTS" images={newImages} />
      </div>
    </Layout>
  );
};

export default CricketPage;
