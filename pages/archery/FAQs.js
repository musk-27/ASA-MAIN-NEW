import { useState } from 'react';

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What age group can participate?",
      answer: "Students aged 10 and above can join the program.",
    },
    {
      question: "What equipment do I need?",
      answer: "We provide bows and arrows for training, but you can bring your own if you prefer.",
    },
    {
      question: "Is prior experience required?",
      answer: "No prior experience is necessary. Our program is designed for beginners.",
    },
    {
      question: "How long is the training program?",
      answer: "The training program runs for 12 weeks, with classes held twice a week.",
    },
    {
      question: "Can parents join the training sessions?",
      answer: "Parents can join the training sessions as spectators, but only students can participate.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-8">
      <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gradientYellow to-gradientOrange text-center mb-8">
        FAQs
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-900 p-4 rounded transition-shadow duration-300 shadow-md hover:shadow-lg">
            <div 
              className="flex justify-between items-center cursor-pointer" 
              onClick={() => handleToggle(index)}
            >
              <span className="text-lg font-semibold">
                {faq.question}
              </span>
              <span className="text-xl">
                {openIndex === index ? '-' : '+'}
              </span>
            </div>
            {openIndex === index && (
              <p className="mt-2 text-gray-300">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
