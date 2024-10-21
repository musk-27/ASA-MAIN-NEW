import { useState } from "react";
import Layout from "../components/Layout/Layout";
import Slider from "../components/Slider/Slider";
import Section from "../components/Layout/Section";
import LargeBannerCTA from "../components/LargeBannerCTA/LargeBannerCTA";

const seo = {
  title: "Arya Sports Academy – Our Philosophy",
  description: "Discover the philosophy behind Arya Sports Academy.",
};

function Philosophy() {
  const [isDark, setIsDark] = useState(false);

  return (
    <Layout seo={seo}>
      {/* Hero Section */}
      <section className="bg-black">
        <Slider image={"bg-archery"} title={"Our Philosophy"} />
      </section>

      {/* Philosophy Section */}
      <section
        className={`min-h-screen transition-all duration-500 ${
          isDark ? "bg-black" : "bg-white"
        }`}
      >
        <div className="px-12 py-24 lg:px-64 lg:py-32">
          <div className="flex">
            <div className="md:w-1/2">
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
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url('/assets/images/archery-uniform-size.jpeg')`, // Use the correct path to your 'bg-archery' image
        }}
      >
        <div className="flex flex-col lg:flex-row justify-between px-12 lg:px-64 py-24 lg:py-32 gap-12">
          {" "}
          {/* Added gap-12 */}
          {/* Mission on the left */}
          <div
            className="lg:w-1/2 space-y-8 p-8 bg-opacity-50 bg-black text-white"
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
          {/* Vision on the right */}
          <div
            className="lg:w-1/2 space-y-8 p-8 bg-opacity-50 bg-black text-white"
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

      {/* Values Section */}
      <Section className="bg-light-gray py-12 p-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-akira text-center mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card for Integrity */}
            <div
              data-aos="fade-up"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="text-6xl mb-4 text-primary">
                <i className="fas fa-balance-scale"></i>
              </div>
              <h3 className="text-xl font-bold">Integrity</h3>
              <p className="text-base font-montserrat mt-4">
                We instill the value of honesty and sportsmanship in all our
                students.
              </p>
            </div>

            {/* Card for Resilience */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="text-6xl mb-4 text-primary">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="text-xl font-bold">Resilience</h3>
              <p className="text-base font-montserrat mt-4">
                Through the challenges of sports, students learn to persevere in
                the face of adversity.
              </p>
            </div>

            {/* Card for Teamwork */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="text-6xl mb-4 text-primary">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold">Teamwork</h3>
              <p className="text-base font-montserrat mt-4">
                We emphasize the importance of collaboration and mutual support
                among team members.
              </p>
            </div>

            {/* Card for Leadership */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center"
            >
              <div className="text-6xl mb-4 text-primary">
                <i className="fas fa-chess-king"></i>
              </div>
              <h3 className="text-xl font-bold">Leadership</h3>
              <p className="text-base font-montserrat mt-4">
                Our programs foster leadership skills by encouraging students to
                take initiative and responsibility.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <LargeBannerCTA />
    </Layout>
  );
}

export default Philosophy;
