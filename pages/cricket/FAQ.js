import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-montserrat bg-black py-10">
      <section className="max-w-5xl mx-auto">
        <div className="flex items-center justify-center flex-col gap-y-2 py-5" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
          <h2
            
            className="text-center text-sm md:text-3xl lg:text-4xl font-bold font-akira text-transparent transition-all duration-200 transform bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text"
          >
            Frequently Asked Questions
          </h2>
        </div>
        <div className="w-full px-4 md:px-10 xl:px-2 py-4" data-aos-duration="1000"
          data-aos="fade-up"
          data-aos-delay="100">
          <div
            data-aos-duration="1000"
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto w-full max-w-5xl border border-slate-400/20 rounded-lg bg-white"
          >
            {[
              {
                question: "What age do I need to be to join the academy?",
                answer: "We accept players from ages 6 to 18.",
              },
              {
                question: "Do I need previous cricket experience?",
                answer: "No, we welcome beginners as well as experienced players.",
              },
              {
                question: "What training programs do you offer?",
                answer: "We offer skills development, fitness training, and match simulations.",
              },
              {
                question: "Are there any fees to join the academy?",
                answer: "Yes, there is an annual fee which covers training and facilities.",
              },
              {
                question: "What facilities are available at the academy?",
                answer: "Our academy has indoor nets, outdoor pitches, and fitness facilities.",
              },
              {
                question: "How often do the training sessions take place?",
                answer: "Training sessions are held three times a week.",
              },
              {
                question: "Will there be opportunities to participate in matches?",
                answer: "Yes, we organize regular matches and tournaments for all levels.",
              },
              {
                question: "Can parents watch the training sessions?",
                answer: "Yes, parents are welcome to watch and support their children during training.",
              },
            ].map((item, index) => (
              <div key={index} className="border-b border-[#0A071B]/10">
                <button
                  className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5 text-black"
                  onClick={() => toggleAnswer(index)}
                >
                  <span>{item.question}</span>
                  <span className={`mt-1.5 md:mt-0 flex-shrink-0 transition-transform duration-200 text-2xl h-5 w-5 text-black`}>
                    {activeIndex === index ? '-' : '+'}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="answer pt-2 pb-5 px-5 text-sm lg:text-base text-black font-medium">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
