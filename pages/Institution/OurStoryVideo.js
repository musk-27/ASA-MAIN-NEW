import React from 'react'

const OurStoryVideo = () => {
  return (
    <div>{/* YouTube Video Section */}
    <section className="py-16 bg-black">
      <div className="max-w-screen-xl mx-auto text-center text-white">
        <h2 className="text-3xl lg:text-5xl font-akira mb-6">Watch Our Story</h2>
        <div className="relative">
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/eSSyLSGBSp8?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg p-4"
          ></iframe>
        </div>
      </div>
    </section></div>
  )
}

export default OurStoryVideo