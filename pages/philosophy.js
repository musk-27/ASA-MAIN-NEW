import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Section from "../components/Layout/Section";
import LargeBannerCTA from "../components/LargeBannerCTA/LargeBannerCTA";
import Modal from "react-modal";
import { FaPlay } from "react-icons/fa";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

Modal.setAppElement("#__next"); // Ensure accessibility for the modal

function Philosophy() {
  const [isDark, setIsDark] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-visionmissionbg"} title={"Our Philosophy"} />
      </section>

      <section   className={`min-h-screen transition-all py-24 duration-500 ${
          isDark ? "bg-black" : "bg-white"
        }`}>
        <div className="flex flex-col lg:flex-row items-center justify-between px-12 lg:px-64 gap-12">
          {/* Text Column */}
          {/* <div className="lg:w-1/2 space-y-6">
            <h2 className="text-2xl lg:text-4xl font-akira">Learn More</h2>
            <p className="text-base font-montserrat">
              Dive deeper into our philosophy and approach to sports. Discover
              how we create an environment that nurtures resilience, discipline,
              and leadership in every student.
            </p>
          </div> */}
 <div className="lg:w-1/2 space-y-6">
              <div
                className={`space-y-2 transition-all duration-500 ${
                  isDark ? "text-white" : "text-black"
                }`}
              >
                <h1
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className="text-2xl lg:text-5xl md:text-3xl font-akira"
                  onMouseEnter={() => setIsDark(!isDark)}
                  onMouseLeave={() => setIsDark(!isDark)}
                >
                  Our Philosophy
                </h1>
                <p
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  data-aos-delay="100"
                  className="text-base text-justify font-montserrat"
                >
                  At Arya Sports Academy, we believe in holistic development
                  through sports. Sports are not just about physical strength;
                  they teach discipline, teamwork, leadership, and the ability
                  to face challenges with resilience. Our philosophy is centered
                  on nurturing these qualities in our students, helping them
                  apply lessons from the field to all aspects of life.
                </p>
                <p
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  className="text-base text-justify font-montserrat"
                >
                  We aim to create a learning environment where students can
                  explore their potential, develop life skills, and grow into
                  leaders. At Arya Sports Academy, education happens both on and
                  off the field.
                </p>
              </div>
            </div>

        </div>

        {/* Modal for YouTube Video */}
       {/* Modal for YouTube Video */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  className="flex justify-center items-center h-screen"
  overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center"
>
  <div className="relative bg-white rounded-lg overflow-hidden">
    <button
      onClick={closeModal}
      className="absolute top-0 right-2 text-2xl text-white hover:text-red-800"
    >
      &times;
    </button>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/eSSyLSGBSp8?si=jqKqV-oaYqnRA-1k&controls=0"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</Modal>

      </section>

      {/* Mission and Vision Section */}
      <section
  className="min-h-screen bg-cover bg-center relative"
  style={{
    backgroundImage: `url('/assets/images/visionmissionbg.jpg')`, // Use the correct path to your 'bg-archery' image
  }}
>
  {/* Dull overlay for background image only */}
  <div className="absolute inset-0 bg-black opacity-40 z-0"></div> {/* Semi-transparent overlay for the background */}

  <div className="flex flex-col lg:flex-row justify-between px-12 lg:px-64 py-24 lg:py-32 gap-12 relative z-10">
    <div
      className="lg:w-1/2 space-y-8 p-8 bg-opacity-50 bg-black text-white rounded-3xl"
      data-aos="fade-right"
    >
      <h2 className="text-2xl lg:text-4xl font-akira">Our Mission</h2>
      <p className="text-base font-montserrat">
        Our mission is to empower students to excel in both academics and
        sports by providing them with the resources, guidance, and
        opportunities needed to develop life-long skills, resilience, and
        leadership. Through sports, we aim to foster holistic growth and
        help students realize their full potential.
      </p>
    </div>
    <div
      className="lg:w-1/2 space-y-8 p-8 bg-opacity-50 bg-black text-white rounded-3xl"
      data-aos="fade-left"
    >
      <h2 className="text-2xl lg:text-4xl font-akira">Our Vision</h2>
      <p className="text-base font-montserrat">
        Our vision is to create a premier sports academy that serves as a
        beacon for student-athletes to thrive, not only on the field but
        in life. We envision a future where every student has the
        confidence, discipline, and character to lead and inspire others
        in their community.
      </p>
    </div>
  </div>
</section>


      {/* New Video Section */}
      
    </Layout>
  );
}

export default Philosophy;
