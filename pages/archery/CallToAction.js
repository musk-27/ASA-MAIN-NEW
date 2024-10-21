export default function CallToAction() {
    return (
      <section className="py-16 px-8 text-center bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange mb-4">
          Join the Archery Club Today!
        </h2>
        <p className="text-gray-300 mb-6">
          Experience the thrill of archery, improve your skills, and make new friends. Don’t miss out!
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-gradientYellow to-gradientOrange text-white rounded-lg shadow transition-transform transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gradientYellow focus:ring-opacity-50">
          Enroll Now
        </button>
      </section>
    );
  }
  