import { useState } from "react";
import Image from "next/image";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Testimonials from "../components/Testimonials/Testimonials";
import TrainingFeatures from "./TrainingFeatures";
import FitnessHeroSection from "./FitnessHeroSection";
import Link from "next/link";
import WhyChooseUs from "./AboutUs/WhyChooseUs";
import ServingUs from "./AboutUs/ServingUs";
import AboutStudio from "./AboutUs/AboutStudio";
import VideoSection from "./AboutUs/VideoSection";
import WhatandWhy from "./AboutUs/WhatandWhy";
import SliderImage from "../pages/cricket/SliderImage";
import TeamCoach from "./AboutUs/TeamCoach";
import CricketAcademy from "./cricket/CricketAcademy";
import FAQ from "./cricket/FAQ";

const seo = {
  title: "Arya Sports Academy – Welcome To Your Classroom",
  description: "Arya Sports Academy is your classroom outside your classroom.",
};




function About() {
  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-aboutUs"} title={"About Us"} />
      </section>

      <div className="py-12">
        <WhyChooseUs />
      </div>
      <div className="py-12">
        <VideoSection />
      </div>
      <div className="py-12">
        <WhatandWhy />
      </div>

      <ServingUs />

      <div className="py-12 bg-black">
        <SliderImage />
      </div>

      {/* <AboutStudio/> */}

      <div className="bg-black py-12">
        <TeamCoach />
      </div>
      {/* <div className="bg-black py-12"><Testimonials /></div> */}

      <section className="bg-black text-white py-12 px-6">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold mb-2 text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">WORKING HOURS</h2>
          <p className="text-gray-400 max-w-md mx-auto">
            Augue ornare felis, neque adipiscing vitae, elementum egestas quam
            id. Cum odio.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <div className="border border-yellow-400 rounded-md px-8 py-4 text-center">
            <p className="text-gray-400">WEEKDAYS:</p>
            <p className="text-2xl font-bold">6AM-10PM</p>
          </div>
          <div className="border border-yellow-400 rounded-md px-8 py-4 text-center">
            <p className="text-gray-400">SIGN UP</p>
            <p className="text-2xl font-bold">6AM-10PM</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/contact">
            <span className="text-gray-400 hover:text-white flex items-center justify-center gap-1 cursor-pointer font-akira text-2xl">
              CONTACT US <span>&#8594;</span>
            </span>
          </Link>
        </div>
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

export default About;
