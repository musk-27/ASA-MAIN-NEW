// import React from 'react';

// const YoutubeVideo = () => {
//   return (
//     <div>
//       <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
//         <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
//           <video
//             className="min-w-full min-h-full absolute object-cover"
//             src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
//             type="video/mp4"
//             autoPlay
//             muted
//             loop
//           ></video>
//         </div>
//         {/* <div className="video-content space-y-2 z-10">
//           <h1 className="font-light text-6xl">Full Hero Video</h1>
//           <h3 className="font-light text-3xl">With TailwindCSS</h3>
//         </div> */}
//       </section>
//     </div>
//   );
// };

// export default YoutubeVideo;


import React, { useEffect, useRef, useState } from 'react';

const YoutubeVideo = () => {
  const videoRef = useRef(null); // Reference to the video iframe
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    // Initialize Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set the video to visible when it enters the viewport
          observer.disconnect(); // Stop observing after the video is visible
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current); // Start observing the video element
    }

    // Clean up observer when component unmounts
    return () => {
      if (videoRef.current) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <section className="relative h-screen flex flex-col items-center justify-center text-center text-white">
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
          <iframe
            ref={videoRef} // Assigning the reference to the iframe
            className="min-w-full min-h-full absolute object-cover"
            src={`https://www.youtube.com/embed/eSSyLSGBSp8?controls=0&autoplay=${isVisible ? 1 : 0}&mute=1&loop=1&playlist=eSSyLSGBSp8`}
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
        {/* <div className="video-content space-y-2 z-10">
          <h1 className="font-light text-6xl">Full Hero Video</h1>
          <h3 className="font-light text-3xl">With TailwindCSS</h3>
        </div> */}
      </section>
    </div>
  );
};

export default YoutubeVideo;
