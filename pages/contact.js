import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Modal from "react-modal";
import CricketAcademy from "./cricket/CricketAcademy";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

Modal.setAppElement("#__next"); // Ensure accessibility for the modal

function Contact() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-visionmissionbg"} title={"Contact Us"} />
      </section>

      {/* Mission and Vision Section */}
      <div className="bg-gray-100 py-12 px-6 lg:px-60">
        <div className="max-w-7xl mx-auto space-y-16">
          {/* Mission Section */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8">
            <div className="flex-1">
              <p className="text-orange-500 font-semibold">About Us</p>
              <h2 className="text-3xl font-bold mt-2 font-akira">
                Our Mission
              </h2>
              <p className="text-gray-600 mt-4 text-lg text-justify">
                Our mission is to empower students to excel in both academics
                and sports by providing them with the resources, guidance, and
                opportunities needed to develop life-long skills, resilience,
                and leadership. Through sports, we aim to foster holistic growth
                and help students realize their full potential.
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-black bg-red-600 rounded-md hover:bg-orange-600">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img
                src="/assets/images/visionmissionbg.jpg"
                alt="Our Mission"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Vision Section */}
          <div className="flex flex-col lg:flex-row-reverse items-center lg:items-start space-y-8 lg:space-y-0 lg:space-x-8 lg:space-x-reverse">
            <div className="flex-1">
              <p className="text-orange-500 font-semibold">What We Do</p>
              <h2 className="text-3xl font-bold mt-2 font-akira">Our Vision</h2>
              <p className="text-gray-600 mt-4 text-lg text-justify">
                Our vision is to create a premier sports academy that serves as
                a beacon for student-athletes to thrive, not only on the field
                but in life. We envision a future where every student has the
                confidence, discipline, and character to lead and inspire others
                in their community.
              </p>
              <button className="mt-6 px-6 py-3 bg-orange-500 text-black bg-green-600 rounded-md hover:bg-orange-600">
                Learn More
              </button>
            </div>
            <div className="flex-1">
              <img
                src="/assets/images/missionImage.PNG"
                alt="Our Vision"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* YouTube Video Section */}
      <section className="py-16 bg-black">
        <div className="max-w-screen-xl mx-auto text-center text-white">
          <h2 className="text-3xl font-akira mb-6">Watch Our Story</h2>
          <div className="relative">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/eSSyLSGBSp8?controls=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Two Column Text and Image Section */}
      <section className="py-16 px-6 lg:px-60">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-akira mb-4">Our Approach</h2>
              <p className="text-gray-600 text-lg">
                At Arya Sports Academy, we adopt a student-centric approach to
                training. Our coaches are dedicated to nurturing the unique
                talents of each athlete, fostering teamwork, discipline, and
                personal growth. Our commitment to excellence helps athletes
                excel not only in sports but also in academics, developing
                qualities that will serve them for a lifetime.
              </p>
            </div>
            <div className="flex-1">
              <img
                src="/assets/images/academyApproach.jpg"
                alt="Our Approach"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Cricket Academy Section */}
      <section className="">
        <CricketAcademy
          backgroundImage="/assets/images/BasketballAcademy.jpg"
          // academyName="Basketball"
        />
      </section>
    </Layout>
  );
}

export default Contact;
