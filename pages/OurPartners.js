import React from "react";
import {
  FaFootballBall,
  FaBasketballBall,
  FaBaseballBall,
  FaTableTennis,
  FaRunning,
} from "react-icons/fa";
import { GiSoccerBall, GiTennisRacket, GiCycling } from "react-icons/gi";

import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

const OurPartners = () => {
  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-visionmissionbg"} title={"Our Partners"} />
      </section>

      {/* LOGO SLIDER */}
      <section className=" bg-black text-white py-16">
        {/* Top Section */}
        <div className="overflow-hidden">
          <div className="flex justify-start items-center gap-16 animate-marquee">
            {/* Replace these with your real logos */}
            <img
              src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg"
              alt="Client 1"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/premium-vector/football-soccer-logo_609550-353.jpg?semt=ais_hybrid"
              alt="Client 2"
              className="h-32"
            />
            <img
              src="https://e7.pngegg.com/pngimages/180/135/png-clipart-sports-logo-youth-brand-coach-youth-sports-text-sport.png"
              alt="Client 3"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/free-vector/sport-logo-template-with-abstract-symbol_23-2148661986.jpg?semt=ais_hybrid"
              alt="Client 4"
              className="h-32"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yaOSF3XFHfjxOQalkLsDSI3S3EaxQ_BuzQ&s"
              alt="Client 5"
              className="h-32"
            />
            {/* Repeat the images to make the loop smoother */}
            <img
              src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg"
              alt="Client 1"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/premium-vector/football-soccer-logo_609550-353.jpg?semt=ais_hybrid"
              alt="Client 2"
              className="h-32"
            />
            <img
              src="https://e7.pngegg.com/pngimages/180/135/png-clipart-sports-logo-youth-brand-coach-youth-sports-text-sport.png"
              alt="Client 3"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/free-vector/sport-logo-template-with-abstract-symbol_23-2148661986.jpg?semt=ais_hybrid"
              alt="Client 4"
              className="h-32"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yaOSF3XFHfjxOQalkLsDSI3S3EaxQ_BuzQ&s"
              alt="Client 5"
              className="h-32"
            />
            <img
              src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg"
              alt="Client 1"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/premium-vector/football-soccer-logo_609550-353.jpg?semt=ais_hybrid"
              alt="Client 2"
              className="h-32"
            />
            <img
              src="https://e7.pngegg.com/pngimages/180/135/png-clipart-sports-logo-youth-brand-coach-youth-sports-text-sport.png"
              alt="Client 3"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/free-vector/sport-logo-template-with-abstract-symbol_23-2148661986.jpg?semt=ais_hybrid"
              alt="Client 4"
              className="h-32"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yaOSF3XFHfjxOQalkLsDSI3S3EaxQ_BuzQ&s"
              alt="Client 5"
              className="h-32"
            />
            <img
              src="https://t4.ftcdn.net/jpg/03/02/12/83/360_F_302128359_q6aCwgAvdYZBPF4XSwxXddLPE0h3Kor1.jpg"
              alt="Client 1"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/premium-vector/football-soccer-logo_609550-353.jpg?semt=ais_hybrid"
              alt="Client 2"
              className="h-32"
            />
            <img
              src="https://e7.pngegg.com/pngimages/180/135/png-clipart-sports-logo-youth-brand-coach-youth-sports-text-sport.png"
              alt="Client 3"
              className="h-32"
            />
            <img
              src="https://img.freepik.com/free-vector/sport-logo-template-with-abstract-symbol_23-2148661986.jpg?semt=ais_hybrid"
              alt="Client 4"
              className="h-32"
            />
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6yaOSF3XFHfjxOQalkLsDSI3S3EaxQ_BuzQ&s"
              alt="Client 5"
              className="h-32"
            />
          </div>
        </div>

        
      </section>
      {/* Bottom Section */}
      <div className="bg-white text-black py-16 lg:py-20 mt-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Heading, Content, and Button */}
            <div className="text-center lg:text-left">
              <p className="text-2xl">Trusted by </p>
              <p className="text-2xl font-bold font-akira mb-4">
                great brands{" "}
              </p>
              <p className="text-gray-600 mb-8">
                The full monty the wireless bog-standard bloke barmy lurgy
                David, mufty Oxford blatant. A bit of how's your father.
              </p>
              <button className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-yellow-700">
                More Customers
              </button>
            </div>

            {/* Right Column: Logos */}
            <div className="grid grid-cols-4 gap-8 items-center">
              {/* Replace these with your real brand logos */}
              <img
                src="https://i.pinimg.com/originals/1c/bc/46/1cbc46e2387233f13513ccc5b3368b96.jpg"
                alt="Brand 1"
                className="h-14 mx-auto"
              />
              <img
                src="https://p7.hiclipart.com/preview/591/549/285/football-team-logo-american-football-football-thumbnail.jpg"
                alt="Brand 2"
                className="h-14 mx-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrAcnfbB1rBYZV1WEBzaSV1ZkCAxEn-3FNig&s"
                alt="Brand 3"
                className="h-14 mx-auto"
              />
              <img
                src="https://img.freepik.com/premium-psd/football-logo-isolated-transparent-background-psd-file_1263741-56414.jpg?semt=ais_hybrid"
                alt="Brand 4"
                className="h-14 mx-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHBw3SG60cMoQ26bqpf5d8a6VSUtKRnKZ-bg&s"
                alt="Brand 5"
                className="h-14 mx-auto"
              />
              <img
                src="https://marketplace.canva.com/EAGMajFIDRI/2/0/1600w/canva-black-brown-modern-concept-football-club-logo-NdkQDTZPH-8.jpg"
                alt="Brand 6"
                className="h-14 mx-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHyDrNstbNi2rTpWlUnpfwp-zO_eu7XnHMLQ&s"
                alt="Brand 7"
                className="h-14 mx-auto"
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKeKKsXnsttcG28EvQUjMy3jyIAVMYRnIDJw&s"
                alt="Brand 8"
                className="h-14 mx-auto"
              />
            </div>
          </div>
        </div>

    {/* TRUSTED PARTNERS */}
      {/* <div className="bg-gray-50 min-h-screen py-10">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-bold text-gray-800">Our Clients</h1>
          <p className="text-lg text-gray-600">World-class protection</p>
          <p className="text-sm text-gray-500 mt-2">
            Trusted by top players and sports professionals worldwide.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {[
            {
              name: "Football Club",
              icon: <FaFootballBall className="text-green-500 text-3xl" />,
            },
            {
              name: "Basketball League",
              icon: <FaBasketballBall className="text-orange-500 text-3xl" />,
            },
            {
              name: "Baseball Stars",
              icon: <FaBaseballBall className="text-red-500 text-3xl" />,
            },
            {
              name: "Table Tennis Pros",
              icon: <FaTableTennis className="text-blue-500 text-3xl" />,
            },
            {
              name: "Soccer Champions",
              icon: <GiSoccerBall className="text-teal-500 text-3xl" />,
            },
            {
              name: "Tennis Legends",
              icon: <GiTennisRacket className="text-yellow-500 text-3xl" />,
            },
            {
              name: "Cycling Heroes",
              icon: <GiCycling className="text-gray-500 text-3xl" />,
            },
            {
              name: "Marathon Runners",
              icon: <FaRunning className="text-purple-500 text-3xl" />,
            },
          ].map((client, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-4 bg-white shadow-md rounded-lg"
            >
              {client.icon}
              <span className="mt-2 text-sm font-medium text-gray-800">
                {client.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            Discover just how
            <span className="text-blue-500"> amazing sports tech can be.</span>
          </h2>
        </div>
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Fitness Tracker",
              icon: <FaRunning className="text-green-500 text-3xl" />,
            },
            {
              name: "Match Analytics",
              icon: <GiSoccerBall className="text-teal-500 text-3xl" />,
            },
            {
              name: "Tennis Insights",
              icon: <GiTennisRacket className="text-yellow-500 text-3xl" />,
            },
            {
              name: "Cycling Data",
              icon: <GiCycling className="text-gray-500 text-3xl" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-4 bg-white shadow-md rounded-lg"
            >
              {feature.icon}
              <span className="mt-2 text-sm font-medium text-gray-800">
                {feature.name}
              </span>
            </div>
          ))}
        </div>
      </div> */}
    </Layout>
  );
};

export default OurPartners;
