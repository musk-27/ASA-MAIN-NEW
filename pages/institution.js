import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Modal from "react-modal";
import CricketAcademy from "../pages/cricket/CricketAcademy";
import OurApproach from "./Institution/OurApproach";
import OurStoryVideo from "./Institution/OurStoryVideo";
import VissionMission from "./Institution/VissionMission";
import Features from "./Institution/Features";
import UpcomingEvents from "../pages/archery/UpcomingEvents";
import YoutubeVideo from "./Institution/YoutubeVideo";
import OurCenters from "./Institution/OurCenters";
import CircleCTA from "../components/LargeBannerCTA/CircleCTA";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

Modal.setAppElement("#__next"); // Ensure accessibility for the modal

function Institution() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-visionmissionbg"} title={"Our Institution"} />
      </section>
      <div class="relative bg-black">
        <div class="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            class="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z"></path>
          </svg>
        </div>
        <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div class="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 class="mb-6 font-sans text-3xl text-center font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              Subscribe to our newsletter
            </h2>
            <p class="mb-6 text-base text-indigo-200 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            {/* <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required=""
                type="text"
                class="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                class="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-gray-200 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form> */}
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            {/* <a
              href="/"
              aria-label="Scroll down"
              class="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z"></path>
              </svg>
            </a> */}
          </div>
        </div>
      </div>
      <div className="py-12">
        <OurApproach />
      </div>
      <div>
        {/* <Features /> */}
      </div>
      {/* <div className="py-0">
        <OurStoryVideo />
      </div> */}
     <section class="bg-black overflow-visible my-0 py-24 mt-24">
  <div class="text-white items-center text-center flex flex-col">
    <h2 class="font-bold text-2xl lg:text-4xl">Gear Up for the Ultimate Sports Challenge</h2>
    <p class="mx-auto mt-6 max-w-xl text-lg md:text-xl leading-8 text-slate-400">
      Ready to push your limits? Dive into our wide range of sports equipment and apparel. Sign up now for an exciting demo and get a feel of the action!
    </p>
    <a
      class="mt-8 rounded-md bg-white px-5 py-2.5 text-base font-semibold leading-7 text-black hover:bg-gray-200 transition focus:outline-none focus:ring focus:border-blue-300"
      href="#"
    >
      Claim Your 15% Off! Get Ready for Action
    </a>
  </div>
</section>

      
      <div className="py-0">
        <VissionMission />
      </div>
      {/* Cricket Academy Section */}
      <section className="">
        <CricketAcademy
          backgroundImage="/assets/images/BasketballAcademy.jpg"
          // academyName="Basketball"
        />
      </section>
     
      <OurCenters/>


      <div>
        <UpcomingEvents />
      </div>

      <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-white">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <h2 class="sr-only">Featured case study</h2>
          <section class="font-sans text-black">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img
                        class="h-full object-cover"
                        src="https://inviqa.com/sites/default/files/styles/pullout/public/2020-08/XD-1.jpeg?h=f75d236a&itok=PBoXPDmW"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-4xl font-bold">
                    CXcon: Experience Transformation
                  </h2>
                  <p class="mt-4">
                    Our second CXcon in October was dedicated to experience
                    transformation. The free one-day virtual event&nbsp;brought
                    together 230+ heads of digital, thought leaders, and UX
                    practitioners to discuss all aspects of experience design..
                  </p>
                  <p class="mt-4">
                    In a jam-packed day filled with keynote sessions, panels,
                    and virtual networking we explored topics including design
                    leadership, UX ethics, designing for emotion and innovation
                    at scale.
                  </p>
                  <p>
                    <a
                      class="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Explore this event
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
    <div class="border border-yellow-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
      <span class="font-inter text-xs font-medium text-gray-900 ml-3">
      Explore top sports experiences.
      </span>
      <a
        href="javascript:;"
        class="w-8 h-8 rounded-full flex justify-center items-center bg-[#F47C47]"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.83398 8.00019L12.9081 8.00019M9.75991 11.778L13.0925 8.44541C13.3023 8.23553 13.4073 8.13059 13.4073 8.00019C13.4073 7.86979 13.3023 7.76485 13.0925 7.55497L9.75991 4.22241"
            stroke="white"
            stroke-width="1.6"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </a>
    </div>
    <div className="flex flex-col items-center"><h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
      Master Your Game with Our
      <span class="text-[#F47C47]">Sporting Tools</span>
    </h1>
    <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
      Whether you're into football, tennis, basketball, or any other sport, our platform helps you stay at the top of your game.
    </p>
    <CircleCTA
      link="/OurPartners"
      title="Explore Our"
      subtitle="Partners"
      imageClass="bg-sports-edited"
    /></div>
    {/* <a
      href="javascript:;"
      class="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
    >
      Join Now
      <svg
        class="ml-2"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a> */}
    <div class="flex justify-center mt-5">
      <img
        src="https://www.cupolasports.com/wp-content/uploads/2023/12/IMG_7885-1140x468.jpg"
        alt="Sports Dashboard Image"
      />
    </div>
  </div>
</section>

      
     
      
      
      {/* <div class="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pt-6 lg:pt-12 pb-6 lg:pb-12">
        <div class="bg-yellow-100 py-8 lg:py-12 px-6 relative text-center">
          <p class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Start monitoring your websites with our bot
          </p>
          <p class="prose lg:prose-lg xl:prose-2xl mx-auto">
            Monitor 5 sites for just €5 per month
          </p>
          <div class="h-12 w-12 bg-yellow-100 left-1/2 -ml-6 -bottom-6 absolute transform rotate-45">
            &nbsp;
          </div>
        </div>
        <div class="pt-12 lg:pt-16 text-center">
          <a
            href="#"
            class="bg-indigo-600 hover:bg-indigo-700 transition ease-in-out duration-150 text-base text-white px-4 lg:px-8 py-4 inline-block font-bold rounded-md shadow-xl"
          >
            Start your free 7-day trial
          </a>
          <p class="pt-4">No credit card required, cancel anytime.</p>
        </div>
      </div> */}
      {/* <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
        <div class="bg-white dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
          <div class=" mx-auto px-6 flex relative py-16">
            <div class="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
              <span class="w-20 h-2 bg-gray-800 dark:bg-white mb-12"></span>
              <h1 class="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none dark:text-white text-gray-800">
                Be on
                <span class="text-5xl sm:text-7xl">Time</span>
              </h1>
              <p class="text-sm sm:text-base text-gray-700 dark:text-white">
                Dimension of reality that makes change possible and
                understandable. An indefinite and homogeneous environment in
                which natural events and human existence take place.
              </p>
              <div class="flex mt-8">
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-pink-500 border-2 border-transparent text-white text-md mr-4 hover:bg-pink-400"
                >
                  Get started
                </a>
                <a
                  href="#"
                  class="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-pink-500 text-pink-500 dark:text-white hover:bg-pink-500 hover:text-white text-md"
                >
                  Read more
                </a>
              </div>
            </div>
            <div class="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
              <img
                src="https://www.tailwind-kit.com/images/object/10.png"
                class="max-w-xs md:max-w-sm m-auto"
              />
            </div>
          </div>
        </div>
      </main> */}
      {/* <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-indigo-700 rounded-3xl p-8 text-center sm:p-16 md:px-24 md:py-20 lg:px-28">
          <div class="max-w-2xl mx-auto">
            <h2 class="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Ready to explore the wonders of AI Translation?
            </h2>
            <p class="max-w-lg text-base text-indigo-100 mx-auto mt-4 sm:text-lg">
              Discover how AI-powered translation can enhance your communication
              across languages in just a few hours.
            </p>
          </div>
          <div class="flex flex-col justify-center gap-4 mt-8 sm:flex-row sm:items-center sm:gap-5">
            <a
              class="inline-flex items-center justify-center bg-white text-lg font-semibold text-indigo-700 shadow-sm transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              href="/pricing"
            >
              Start a free trial
            </a>
            <a
              class="inline-flex items-center justify-center bg-indigo-700 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-white transition-all duration-150 rounded-xl px-8 py-4 hover:bg-indigo-800"
              href="/book-a-demo"
            >
              Book a demo
            </a>
          </div>
          <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-medium text-white mt-8">
            <li class="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                class="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Optimized translation output
            </li>
            <li class="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                class="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Seamless integration with existing workflows
            </li>
            <li class="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                class="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Support for 100+ languages
            </li>
            <li class="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                class="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Flexible subscription plans
            </li>
            <li class="inline-flex items-center gap-2">
              <svg
                aria-hidden="true"
                class="h-5 w-5 shrink-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="M176.49,95.51a12,12,0,0,1,0,17l-56,56a12,12,0,0,1-17,0l-24-24a12,12,0,1,1,17-17L112,143l47.51-47.52A12,12,0,0,1,176.49,95.51ZM236,128A108,108,0,1,1,128,20,108.12,108.12,0,0,1,236,128Zm-24,0a84,84,0,1,0-84,84A84.09,84.09,0,0,0,212,128Z"></path>
              </svg>
              Effortless cancellation process
            </li>
          </ul>
        </div>
      </div> */}
      {/* <div>
        <YoutubeVideo />
      </div> */}
     
      
      
      

     
     
    </Layout>
  );
}

export default Institution;
