import Layout from '../components/Layout/Layout';
import Slider from '../components/Slider/Slider';
import LargeBannerCTA from '../components/LargeBannerCTA/LargeBannerCTA';
import Testimonials from '../components/Testimonials/Testimonials'; // Add this line

const seo = {
  title: 'Arya Sports Academy – Welcome To Your Classroom',
  description: 'Arya Sports Academy is your classroom outside your classroom.',
};

function About() {
  return (
    <div>
      <Layout seo={seo}>
        {/* Hero Section */}
        <section className="bg-black">
          <Slider image={"bg-classroom"} title={"Welcome To Your Classroom"} />
        </section>

        {/* About Us Section */}
        <section className="min-h-screen bg-white py-24 px-12 lg:px-64">
          <div className="text-center mb-16">
            <h1 className="text-2xl lg:text-5xl font-akira mb-6">
              About Arya Sports Academy
            </h1>
            <p className="text-lg font-montserrat">
              Arya Sports Academy is more than just a sports institution. It's a
              place where life lessons are learned and leadership is developed.
              With a focus on holistic education, we aim to empower students to
              excel in all areas of life.
            </p>
            <iframe
              className="w-full h-[410px] mt-20 rounded-2xl"
              src="https://www.youtube.com/embed/i9XS0Jomy-Y?si=zltuPCo65Pfb5Xp2"
              title="Arya Sports Academy Overview"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* Team Section */}
        <section className="bg-gray-100 py-24 px-12 lg:px-64">
          <div className="text-center mb-16">
            <h2 className="text-2xl lg:text-5xl font-akira">Meet Our Team</h2>
            <p className="text-lg font-montserrat">
              Our team of passionate coaches and educators is dedicated to the
              growth and development of our students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Example Team Members */}
            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <img
                src="/assets/images/john.jpg"
                alt="Team Member 1"
                className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold">John Doe</h3>
              <p className="text-sm font-montserrat">Head Coach</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <img
                src="/assets/images/john.jpg"
                alt="Team Member 2"
                className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold">Jane Smith</h3>
              <p className="text-sm font-montserrat">Athletic Director</p>
            </div>

            <div className="bg-white p-8 shadow-lg rounded-lg text-center">
              <img
                src="/assets/images/john.jpg"
                alt="Team Member 3"
                className="mx-auto rounded-full mb-4 w-32 h-32 object-cover"
              />
              <h3 className="text-xl font-bold">Mike Johnson</h3>
              <p className="text-sm font-montserrat">Fitness Trainer</p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <Testimonials />

        {/* Large Call to Action Section */}
        <LargeBannerCTA />
      </Layout>
    </div>
  );
}

export default About;
