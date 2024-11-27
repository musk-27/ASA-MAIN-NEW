import Link from "next/link";
import Section from "../Layout/Section"; // Ensure this path is correct
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Swiper core styles
import "swiper/css/navigation"; // Navigation module styles
import "swiper/css/pagination"; // Pagination module styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Updated import for modules

const SectionHeader = () => (
  <div className="text-center">
    <div className="space-y-5">
      <h1
        data-aos-duration="1000"
        data-aos="fade-up"
        className="text-3xl text-white font-akira"
      >
        What we offer
      </h1>
      <p
        data-aos-duration="1000"
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-2xl m-auto text-sm italic text-white"
      >
        Arya Sports Academy aims at creating a hub of institutions, trainers,
        sports facilities, sporting equipment, pre and post-school activities,
        sports camps, and much more. We are a one-of-a-kind sports academy that
        provides world-class facilities and aims to reignite the passion for
        sports leading to the overall development of personalities in the youth.
      </p>
    </div>
  </div>
);

const SportsTile = ({ setImagedBackground, image, sportName }) => (
  <Link href={`/${sportName.toLowerCase()}`} passHref>
    <div
      onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
      onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
      // data-aos-duration="1000"
      // data-aos="fade-up"
      // data-aos-delay="400"
      className={`relative transition-all duration-300 bg-black bg-opacity-50 bg-right bg-cover cursor-default lg:w-3/3 w-full bg-blend-multiply ${image} h-96 hover:bg-opacity-5`}
    >
      <span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
        {sportName}
      </span>
    </div>
  </Link>
);




const SportsTileCollection = ({ setImagedBackground }) => {
  const sports = [
    { image: "bg-basketballHome", name: "Basketball" },
    { image: "bg-cricket", name: "Cricket" },
    { image: "bg-archery", name: "Archery" },
    { image: "bg-karate", name: "Karate" },
    { image: "bg-basketballHome", name: "Basketball" },
    { image: "bg-basketballHome", name: "Boxing" },
    { image: "bg-basketballHome", name: "Cycling" },
    { image: "bg-basketballHome", name: "Football" },
    { image: "bg-basketballHome", name: "Hockey" },
    { image: "bg-basketballHome", name: "Karate" },
    { image: "bg-basketballHome", name: "Running" },
    { image: "bg-basketballHome", name: "Shooting" },
    { image: "bg-basketballHome", name: "Soccer" },
    { image: "bg-basketballHome", name: "Swimming" },
    { image: "bg-basketballHome", name: "Taekwondo" },
    { image: "bg-basketballHome", name: "Tennis" },
    { image: "bg-basketballHome", name: "Volleyball" },
    { image: "bg-basketballHome", name: "Yoga" },
    // { image: "bg-yoga", name: "Yoga" },
    // { image: "bg-football", name: "Football" },
    // { image: "bg-basketball", name: "Basketball" },
    // { image: "bg-hockey", name: "Hockey" },
  ];

  return (
    <div className="relative my-12">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true, el: "" }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 15,
          },
        }}
      >
        {sports.map((sport, index) => (
          <SwiperSlide key={index}>
            <SportsTile
              image={sport.image}
              sportName={sport.name}
              setImagedBackground={setImagedBackground}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ListOfSportsSection = ({ imagedBackground, setImagedBackground }) => (
  <Section
    className={`min-h-screen py-1 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
  >
    <div className="max-w-screen-xl mx-auto px-4 py-24">
      <SectionHeader />
      <SportsTileCollection setImagedBackground={setImagedBackground} />
    </div>
  </Section>
);

export default ListOfSportsSection;
