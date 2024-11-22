import React from 'react'

const VissionMission = () => {
  return (
    <div>{/* Mission and Vision Section */}
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
    </div></div>
  )
}

export default VissionMission