import React, { useState } from "react";

const CricketLearning = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div class="min-h-screen flex flex-col p-8 sm:p-16 md:p-24 justify-center bg-black">
        <div data-theme="teal" class="mx-auto max-w-6xl">
          <h2 class="sr-only">Featured case study</h2>
          <section class="font-sans text-white">
            <div class="[ lg:flex lg:items-center ] [ fancy-corners fancy-corners--large fancy-corners--top-left fancy-corners--bottom-right ]">
              <div class="flex-shrink-0 self-stretch sm:flex-basis-40 md:flex-basis-50 xl:flex-basis-60">
                <div class="h-full">
                  <article class="h-full">
                    <div class="h-full">
                      <img
                        class="h-full object-cover"
                        src="/assets/images/Activities/basketallGround.jpg"
                        width="733"
                        height="412"
                        alt='""'
                        typeof="foaf:Image"
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div class="p-6 bg-grey">
                <div class="leading-relaxed">
                  <h2 class="leading-tight text-2xl font-bold font-akira">
                  Our World-Class Cricket Facilities
                  </h2>
                  <p class="mt-4">
                  At Arya Gurukul School, we proudly offer top-notch basketball facilities that promote athletic excellence and teamwork. Our modern courts feature high-quality flooring and regulation-sized hoops, providing an ideal environment for practice and competition.
                  </p>
                  <p class="mt-4">
                  With state-of-the-art basketball courts, modern training equipment, and top-notch infrastructure, our facilities enable players to develop their skills under the guidance of experienced coaches. We ensure that every student has access to the best resources for training and competition.
                  </p>
                  <p>
                    <a
                      class="mt-4 button button--secondary"
                      href="https://inviqa.com/cxcon-experience-transformation"
                    >
                      Explore this event
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>



     
    </div>
  );
};

export default CricketLearning;
