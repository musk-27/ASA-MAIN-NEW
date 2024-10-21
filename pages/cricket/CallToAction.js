import React from 'react';

const CallToAction = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-16 text-center">
      <h2 className="text-3xl font-akira text-gray-800 mb-4">Join the Cricket Team</h2>
      <p className="text-gray-600 mb-6">
        Be part of our dynamic cricket team and develop your skills with us. 
      </p>
      <a href="/apply" className="bg-blue-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-700">
        Apply Now!
      </a>
    </section>
  );
};

export default CallToAction;
