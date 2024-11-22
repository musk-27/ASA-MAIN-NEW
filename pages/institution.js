import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Modal from "react-modal";
import CricketAcademy from "../pages/cricket/CricketAcademy";
import OurApproach from "./Institution/OurApproach";
import OurStoryVideo from "./Institution/OurStoryVideo";
import VissionMission from "./Institution/VissionMission";
import Features from "./Institution/Features";
import UpcomingEvents from "./Institution/UpcomingEvents";
import YoutubeVideo from "./Institution/YoutubeVideo";
import OurCenters from "./Institution/OurCenters";

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
      <div className="py-12">
        <OurApproach />
      </div>
      <div>
        <Features />
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




      <section class="pt-8 lg:pt-32 bg-[url('https://pagedone.io/asset/uploads/1691055810.png')] bg-center bg-cover">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
    <div class="border border-indigo-600 p-1 w-60 mx-auto rounded-full flex items-center justify-between mb-4">
      <span class="font-inter text-xs font-medium text-gray-900 ml-3">
      Explore top sports experiences.
      </span>
      <a
        href="javascript:;"
        class="w-8 h-8 rounded-full flex justify-center items-center bg-indigo-600"
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
    <h1 class="max-w-2xl mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
      Master Your Game with Our
      <span class="text-yellow-600">Sporting Tools</span>
    </h1>
    <p class="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
      Whether you're into football, tennis, basketball, or any other sport, our platform helps you stay at the top of your game.
    </p>
    <a
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
    </a>
    <div class="flex justify-center">
      <img
        src="https://pagedone.io/asset/uploads/1691054543.png"
        alt="Sports Dashboard Image"
      />
    </div>
  </div>
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
      <header class="relative">
        <div class="mx-auto w-full max-w-7xl px-5 md:px-10">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="mb-6 pb-4 text-4xl font-bold text-white md:text-6xl">
              The Website You Want Without The Dev Time.
            </h1>
            <p class="mx-auto mb-5 max-w-[528px] text-xl text-[#636262] lg:mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            <a
              href="#"
              class="inline-block rounded-full bg-[#c9fd02] px-8 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white"
            >
              Get Started
            </a>
          </div>
          <div class="mx-auto mt-16 grid max-w-[1040px] grid-cols-2 gap-8 py-20 sm:grid-cols-3 sm:gap-12 md:grid-cols-5">
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a267_Microsoft%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26a_PayPal%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a268_Google%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a269_Chase%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
            <div class="mx-auto">
              <img
                src="https://uploads-ssl.webflow.com/646f65e37fe0275cfb808405/646f66cdeeb4ddfdae25a26b_Walmart%20Logo.svg"
                alt=""
                class="inline-block"
              />
            </div>
          </div>
        </div>
      </header>
      <div class="flex flex-col p-5 lg:px-48 lg:py-11">
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
        <div class="bg-gray-100 p-5 mb-10">
          <h1 class="font-bold text-2xl mb-2">Tailwind Rocks!</h1>
          <p class="my-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius eaque
            a ipsam aliquid omnis, beatae possimus recusandae illum rem. Minima
            sequi voluptas repudiandae id? Quae, facere quam suscipit sed,
            aperiam sapiente pariatur soluta enim perferendis illum veniam
            excepturi doloribus ducimus voluptatibus numquam officiis expedita
            culpa hic sequi quasi reprehenderit iste obcaecati nostrum.
            Consequuntur aliquam, assumenda architecto animi veniam dolore
            dolor?
          </p>
          <button class="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded">
            Read More...
          </button>
        </div>
      </div>
      <div class="relative bg-red-600">
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
            <form class="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
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
            </form>
            <p class="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
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
            </a>
          </div>
        </div>
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
      <div class="max-w-screen-xl mx-auto px-6 md:px-8 lg:px-12 pt-6 lg:pt-12 pb-6 lg:pb-12">
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
      </div>
      <main class="dark:bg-gray-800 bg-white relative overflow-hidden h-screen">
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
      </main>
      <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>
      <div>
        <YoutubeVideo />
      </div>
      <div>
        <UpcomingEvents />
      </div>
      <div class="e-card playing">
        <div class="image"></div>

        <div class="wave"></div>
        <div class="wave"></div>
        <div class="wave"></div>

        <div class="infotop">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="icon"
          >
            <path
              fill="currentColor"
              d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674
  4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368
  21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204
  22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651
  17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862ZM4.10784
  14.7235V9.2763C4.10784 8.20928 4.6955 7.21559 5.64066 6.68166L10.4676 3.95848C10.9398 3.69152 11.4701
  3.55804 11.9996 3.55804C12.5291 3.55804 13.0594 3.69152 13.5324 3.95848L18.3593 6.68166C19.3045 7.21476
  19.8922 8.20928 19.8922 9.2763V9.75997C19.1426 9.60836 18.377 9.53091 17.6022 9.53091C14.7929 9.53091
  12.1041 10.5501 10.0309 12.3999C8.36735 13.8847 7.21142 15.8012 6.68783 17.9081L5.63981 17.3165C4.69466
  16.7834 4.10699 15.7897 4.10699 14.7235H4.10784ZM10.4676 20.0413L8.60933 18.9924C8.94996 17.0479 9.94402
  15.2665 11.4515 13.921C13.1353 12.4181 15.3198 11.5908 17.6022 11.5908C18.3804 11.5908 19.1477 11.6864
  19.8922 11.8742V14.7235C19.8922 15.2278 19.7589 15.7254 19.5119 16.1662C18.7615 15.3596 17.6806 14.8528
   16.4783 14.8528C14.2136 14.8528 12.3781 16.6466 12.3781 18.8598C12.3781 19.3937 12.4861 19.9021 12.68
   20.3676C11.9347 20.5316 11.1396 20.4203 10.4684 20.0413H10.4676Z"
            ></path>
          </svg>
          <br />
          UI / EX Designer
          <br />
          <div class="name">MikeAndrewDesigner</div>
        </div>
      </div>
      <div class="cardRotation relative w-[200px] h-[250px] rounded-[14px] z-[1111] overflow-hidden flex flex-col items-center justify-center shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
        <div class="bg absolute top-[5px] left-[5px] w-[190px] h-[240px] z-[2] bg-white/95 backdrop-blur-[24px] rounded-[10px] overflow-hidden outline-[2px] outline-white"></div>
        <div class="blob absolute z-[1] top-1/2 left-1/2 w-[150px] h-[150px] rounded-full bg-[#ff0000] opacity-100 filter blur-[12px] animate-blob-bounce"></div>
      </div>
      <div class="cardNumber relative max-w-[300px] max-h-[320px] bg-gradient-to-b from-[#c3e6ec] to-[#a7d1d9] rounded-lg p-8 m-3 text-decoration-none z-0 overflow-hidden font-sans group">
        <p class="card-title text-[#262626] text-[1.5em] font-bold mb-2">
          Product Name
        </p>
        <p class="small-desc text-[#452c2c] text-base font-normal leading-[1.5em]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
          veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
          officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
          eum nihil itaque!
        </p>
        <div class="go-corner absolute flex items-center justify-center w-[2em] h-[2em] top-0 right-0 overflow-hidden bg-gradient-to-tl from-[#6293c8] to-[#384c6c] rounded-tr-[4px] rounded-bl-[32px]">
          <div class="go-arrow text-white text-[1.5em] font-mono -mt-1 -mr-1">
            →
          </div>
        </div>
      </div>
      /* From Uiverse.io by eslam-hany */
      <div class="book">
        <p>Hello</p>
        <div class="cover">
          <p>Hover Me</p>
        </div>
      </div>
     
    </Layout>
  );
}

export default Institution;
