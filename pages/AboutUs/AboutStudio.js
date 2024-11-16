import React, { useState, useEffect } from 'react';
import TrainingFeatures from '../TrainingFeatures';
import Image from 'next/image';

const AboutStudio = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slides = [
        "/assets/images/cricket.jpg",
        "/assets/images/football.png",
        "/assets/images/CricketAcademy.JPG",
    ];

    // Auto slide effect
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

    const scrollCarousel = (direction) => {
        setCurrentIndex((prevIndex) => {
            const totalSlides = slides.length;
            return (prevIndex + direction + totalSlides) % totalSlides;
        });
    };

    return (
        <div className="">
            {/* Full-width Slanted Background */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 -top-10 h-[1600px] lg:h-[1500px] bg-black transform skew-y-3"></div>
                
                <section className="relative z-10 max-w-screen-xl mx-auto text-white py-16 px-4 lg:px-24">
                    <div className="mb-10">
                        <h2 className="text-4xl font-bold mb-4 font-akira text-center">
                            ABOUT OUR STUDIO
                        </h2>
                        {/* Main Carousel */}
                        <div className="relative w-full max-w-7xl mx-auto overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} className="min-w-full flex-shrink-0">
                                        <img
                                            src={slide}
                                            alt={`Slide ${index + 1}`}
                                            className="w-full h-[500px] object-cover" // Fixed height
                                        />
                                    </div>
                                ))}
                            </div>

                            <button
                                className="absolute top-1/2 left-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
                                onClick={() => scrollCarousel(-1)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                    ></path>
                                </svg>
                            </button>
                            <button
                                className="absolute top-1/2 right-0 transform -translate-y-1/2 p-3 bg-gray-700 bg-opacity-50 rounded-full text-white hover:bg-opacity-75 focus:outline-none"
                                onClick={() => scrollCarousel(1)}
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div className="lg:py-10">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
                                {/* Column 1: Paragraph */}
                                <div className="col-span-1">
                                    <p className="text-gray-300 text-justify">
                                        Welcome to our sports academy! We provide top-notch training in various sports, including cricket, football, and basketball. Our experienced coaches are dedicated to helping athletes of all levels reach their full potential.
                                    </p>
                                </div>

                                {/* Column 2: Bold Text */}
                                <div className="col-span-1 flex  items-center justify-center bg-yellow-500 rounded-2xl">
                                    <span className="text-xl font-bold italic">10+ Years of Excellence</span>
                                </div>

                                {/* Column 3: Second Paragraph */}
                                <div className="col-span-1">
                                    <p className="text-gray-300 text-justify">
                                        With a focus on teamwork, discipline, and personal growth, our academy fosters a love for sports while instilling essential life skills. Join us to experience training that is both fun and challenging!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <TrainingFeatures /> */}

                    {/* Main Image and Highlight Box */}
                  
                </section>
            </div>
        </div>
    );
}

export default AboutStudio;
