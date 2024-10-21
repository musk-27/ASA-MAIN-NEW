import Link from "next/link";
import Section from "../../components/Layout/Section";

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
      className={`relative grid h-96 transition-all duration-300 bg-black bg-opacity-50 bg-right bg-cover cursor-pointer bg-blend-multiply ${image} hover:bg-opacity-5 filter grayscale hover:grayscale-0`}
      onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
      onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
      data-aos-duration="1000"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      <span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
        {sportName}
      </span>
    </div>
  </Link>
);

const SportsTileCollection = ({ setImagedBackground }) => (
  <div className="my-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-cricket'} sportName={'Cricket'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-archery'} sportName={'Archery'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-karate'} sportName={'Karate'} />
    <SportsTile setImagedBackground={setImagedBackground} image={'bg-ka3201rate'} sportName={'Karate'} />
    {/* Add more SportsTile components as needed */}
  </div>
);

const ImagesText = ({ imagedBackground, setImagedBackground }) => (
  <Section
    className={`min-h-screen px-12 py-24 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
  >
    <div className="max-w-screen-xl mx-auto px-6 py-24">
      <SectionHeader />
      <SportsTileCollection setImagedBackground={setImagedBackground} />
    </div>
  </Section>
);

export default ImagesText;
