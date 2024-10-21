import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Section from "../components/Layout/Section";
import LargeBannerCTA from "../components/LargeBannerCTA/LargeBannerCTA";
import ListOfSportsSection from "../components/ListOfSportsSection/ListOfSportsSection";

const seo = {
  title: "Arya Sports Academy – Welcome To Your Classroom",
  description: "Arya Sports Academy is your classroom outside your classroom.",
};

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [imagedBackground, setImagedBackground] = useState("bg-sports-edited");

  return (
    <>
      <Layout seo={seo}>
        <section className="bg-black">
          <Slider image={"bg-slider-one"} title={"This is a classroom"} />
        </section>
        <section
          id={"main"}
          className={`min-h-screen transition-all duration-500 ${
            isDark ? "bg-black" : "bg-white"
          }`}
        >
          <div className={`max-w-screen-xl mx-auto px-6 lg:px-40 py-24`}>
            <div className="flex">
              <div className="md:w-1/2">
                <div
                  className={`space-y-2 transition-all duration-500  ${
                    isDark ? "text-white" : "text-black"
                  }`}
                >
                  <h1
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    className="space-y-2 text-2xl lg:text-5xl md:text-3xl font-akira cursor-rockon"
                    onMouseEnter={() => setIsDark(!isDark)}
                    onMouseLeave={() => setIsDark(!isDark)}
                  >
                    Creating Education in Unexpected Places
                  </h1>
                  <p
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-base text-justify font-montserrat"
                  >
                    Addressing the requirement of life skills and creating
                    active interactive learning opportunities can take place in
                    many ways. We, humans, are social beings and when presented
                    with any social challenge we aim to be the best versions of
                    ourselves.
                  </p>
                  <p
                    data-aos-duration="1000"
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-base text-justify font-montserrat"
                  >
                    This is why playing a sport brings forth many unique
                    discoveries about our personalities, our skill sets, our
                    social skills, and our values. Presenting Arya Sports
                    Academy, where one can express and explore through the
                    medium of sports!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ListOfSportsSection
          imagedBackground={imagedBackground}
          setImagedBackground={setImagedBackground}
        />
        <LargeBannerCTA />
      </Layout>
    </>
  );
}
