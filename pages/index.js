import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Section from "../components/Layout/Section";
import LargeBannerCTA from "../components/LargeBannerCTA/LargeBannerCTA";
import ListOfSportsSection from "../components/ListOfSportsSection/ListOfSportsSection";
import OurStoryVideo from "./Institution/OurStoryVideo";
import CricketAcademy from "./cricket/CricketAcademy";
import AchievementsNumbers from "./cricket/AcheivementsNumbers";

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

        <OurStoryVideo/>

        <section className="">
        <AchievementsNumbers />
      </section>

      <div className="h-screen w-screen bg-black">
        <div className="mx-auto max-w-7xl pt-16 sm:pt-24">
          <div className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="px-6 sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:flex lg:items-center lg:text-left">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <span className="rounded-full uppercase bg-pink-500 px-3 py-0.5 text-sm font-semibold leading-5 text-white">
                      Excelling in Sports
                    </span>
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                      Arya Gurukul Sports Academy <br />
                      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-red-600">
                        Excellence in Action
                      </span>
                      <br />
                    </h1>
                  </div>

                  <p className="text-base text-gray-200 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    At Arya Global Sports Academy, we cultivate athletic
                    excellence, teamwork, and leadership. Our expert coaches are
                    committed to developing young athletes, preparing them not
                    just for sports but for life. Whether on the field, court,
                    or track, we provide the resources and guidance to help
                    every student athlete reach their full potential.
                  </p>
                </div>

                <div className="border-t border-gray-700"></div>

                <div className="flex space-x-4 items-center text-white">
                  <div className="flex items-center space-x-2">
                    <div className="flex flex-shrink-0 -space-x-1">
                      <img
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        className="h-10 w-10 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/29.jpg"
                      />
                      <img
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        className="h-10 w-10 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/90.jpg"
                      />
                      <img
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        className="h-10 w-10 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                      />
                      <img
                        loading="lazy"
                        width="40"
                        height="40"
                        decoding="async"
                        className="h-10 w-10 max-w-none rounded-full ring-2 ring-white"
                        style={{ color: "transparent" }}
                        src="https://randomuser.me/api/portraits/men/5.jpg"
                      />
                    </div>

                    <span className="flex-shrink-0 text-xs font-medium leading-5">
                      +15
                    </span>
                  </div>

                  <div className="h-4 border-l border-gray-700"></div>

                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                    <svg
                      className="h-4 w-4 fill-current text-yellow-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"></path>
                    </svg>
                  </div>
                  <div className="h-4 border-l border-gray-700"></div>

                  <a href="" target="_blank">
                    <img
                      src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1&theme=light"
                      className="w-32 h-8 md:w-48 md:h-12 lg:w-64 lg:h-16"
                      width="250"
                      height="54"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div className="flex items-center w-full col-span-6">
              <div className="px-6 h-full lg:h-full w-full max-w-2xl col-span-6 flex items-center mx-auto">
                <div style={{ width: "100%", height: "100%" }}>
                  <div style={{ width: "100%", height: "100%" }}>
                    <iframe
                      frameBorder="0"
                      allowFullScreen="1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/eSSyLSGBSp8?controls=0"
                      id="widget2"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>





      
     

      <div class="md:mx-auto md:container px-4 dark:bg-gray-900">
        <div class="pt-10 md:pt-40">
          <div class="container mx-auto">
            <div class="flex flex-wrap items-center pb-12">
              <div class="md:w-1/2 lg:w-2/3 w-full xl:pr-20 md:pr-6">
                <div class="py-2 text-color">
                  <h1
                    role="heading"
                    class="font-akira text-2xl dark:text-white  lg:text-6xl md:leading-snug tracking-tighter f-f-l font-black"
                  >
                    Arya Gurukul Sports Programs
                  </h1>
                  <p
                    role="contentinfo"
                    class="text-md dark:text-white lg:text-2xl lg:leading-7 md:leading-10 f-f-r py-4 md:py-8 text-justify"
                  >
                    At Arya Global School, we believe that sports play a crucial
                    role in shaping a child's growth and development. Our sports
                    programs are designed to help students explore their passion
                    for sports while promoting physical fitness, teamwork, and
                    discipline. From basketball to athletics, our school offers
                    a range of sports activities that cater to every student,
                    whether they're looking to compete or simply stay active.
                    Our dedicated coaches provide personalized training to each
                    student, fostering not only athletic skills but also life
                    skills like perseverance and leadership.
                  </p>
                </div>
              </div>
              <div class="lg:w-1/3 md:w-1/2 w-full relative h-96 flex items-end justify-center">
                <img
                  class="absolute w-full h-full inset-0 object-cover object-center rounded-md"
                  src="/assets/images/visionmissionbg.jpg"
                  alt="A girl enjoying in sunlight"
                  role="img"
                />
                <div class="relative z-10 bg-white rounded shadow p-6 w-10/12 -mb-20">
                  <div class="flex items-center justify-between w-full sm:w-full mb-8">
                    <h2 class="text-2xl font-serif font-bold text-green-600">
                      Excel in Sports and Build Lifelong Skills
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="">
        <CricketAcademy
          backgroundImage="/assets/images/BasketballAcademy.jpg"
          // academyName="Basketball"
        />
      </section>
      </Layout>
    </>
  );
}
