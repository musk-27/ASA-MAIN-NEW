// // import Link from "next/link";
// // import Section from "../Layout/Section";

// // const SectionHeader = () => (
// //   <div className="text-center">
	
// //     <div className="space-y-5">
// //       <h1
// //         data-aos-duration="1000"
// //         data-aos="fade-up"
// //         className="text-3xl text-white font-akira"
// //       >
// //         {" "}
// //         What we offer
// //       </h1>
// //       <p
// //         data-aos-duration="1000"
// //         data-aos="fade-up"
// //         data-aos-delay="200"
// //         className="max-w-2xl m-auto text-sm italic text-white"
// //       >
// //         Arya Sports Academy aims at creating a hub of institutions, trainers,
// //         sports facilities, sporting equipment, pre and post-school activities,
// //         sports camps, and much more. We are a one-of-a-kind sports academy that
// //         provides world-class facilities and aims to reignite the passion for
// //         sports leading to the overall development of personalities in the youth.
// //       </p>
// //     </div>
// //   </div>
// // );

// // const SportsTile = ({ setImagedBackground, image, sportName }) => (
// // 	<Link href={`/${sportName.toLowerCase()}`} passHref>
// // 		<div
// // 			className={`relative grid h-96 transition-all duration-300 bg-black bg-opacity-50 bg-right bg-cover cursor-pointer bg-blend-multiply ${image} hover:bg-opacity-5 filter grayscale hover:grayscale-0`}
// // 			onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
// // 			onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
// // 			data-aos-duration="1000"
// // 			data-aos="fade-up"
// // 			data-aos-delay="400"
// // 		>
// // 			<span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
// // 				{sportName}
// // 			</span>
// // 		</div>
// // 	</Link>
// // );



// // const SportsTileCollection = ({ setImagedBackground }) => (
// // 	<div className="my-12 grid grid-cols-1 gap-5 lg:grid-cols-3">
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-cricket'}
// // 			sportName={'Cricket'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-archery'}
// // 			sportName={'Archery'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 		<SportsTile
// // 			setImagedBackground={setImagedBackground}
// // 			image={'bg-karate'}
// // 			sportName={'Karate'}
// // 		/>
// // 	</div>
// // );


// // const ListOfSportsSection = ({ imagedBackground, setImagedBackground }) => (
// //   <Section
// //     className={`min-h-screen px-12 py-24 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
// //   >
// // 	<div className="max-w-screen-xl mx-auto px-6 py-24">

// //     <SectionHeader />
// //     <SportsTileCollection setImagedBackground={setImagedBackground} />
// // 	</div>
// //   </Section>
// // );

// // export default ListOfSportsSection;










// // import Link from "next/link";
// // import Section from "../Layout/Section"; // Ensure this path is correct
// // import { Swiper, SwiperSlide } from "swiper/react";
// // import "swiper/css"; // Swiper core styles
// // import "swiper/css/navigation"; // Navigation module styles
// // import "swiper/css/pagination"; // Pagination module styles
// // import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import Autoplay
// // import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing icons

// // // Swiper modules
// // SwiperCore.use([Navigation, Pagination, Autoplay]); // Use the Autoplay module

// // const SectionHeader = () => (
// //   <div className="text-center">
// //     <div className="space-y-5">
// //       <h1
// //         data-aos-duration="1000"
// //         data-aos="fade-up"
// //         className="text-3xl text-white font-akira"
// //       >
// //         What we offer
// //       </h1>
// //       <p
// //         data-aos-duration="1000"
// //         data-aos="fade-up"
// //         data-aos-delay="200"
// //         className="max-w-2xl m-auto text-sm italic text-white"
// //       >
// //         Arya Sports Academy aims at creating a hub of institutions, trainers,
// //         sports facilities, sporting equipment, pre and post-school activities,
// //         sports camps, and much more. We are a one-of-a-kind sports academy that
// //         provides world-class facilities and aims to reignite the passion for
// //         sports leading to the overall development of personalities in the youth.
// //       </p>
// //     </div>
// //   </div>
// // );

// // const SportsTile = ({setImagedBackground, image, sportName }) => (
// //   <Link href={`/${sportName.toLowerCase()}`} passHref>
// //     <div
// //       className={`relative h-96 w-full bg-black bg-opacity-50 bg-right bg-cover cursor-pointer bg-blend-multiply ${image} hover:bg-opacity-5 filter grayscale hover:grayscale-0`}
// //       data-aos-duration="1000"
// //       data-aos="fade-up"
// //       data-aos-delay="400"
// //       onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
// // 			onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
// //     >
// //       <span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
// //         {sportName}
// //       </span>
// //     </div>
// //   </Link>
// // );

// // const SportsTileCollection = (setImagedBackground) => {
// //   return (
// //     <div className="relative">
// //       <Swiper
// //         spaceBetween={15}
// //         slidesPerView={3}
// //         navigation={{
// //           nextEl: '.swiper-button-next',
// //           prevEl: '.swiper-button-prev',
// //         }}
// //         pagination={{ clickable: true }}
// //         autoplay={{
// //           delay: 3000,
// //           disableOnInteraction: false,
// //         }}
// //         breakpoints={{
// //           640: {
// //             slidesPerView: 2,
// //             spaceBetween: 20,
// //           },
// //           768: {
// //             slidesPerView: 3,
// //             spaceBetween: 40,
// //           },
// //           1024: {
// //             slidesPerView: 3,
// //             spaceBetween: 15,
// //           },
// //         }}
// //       >
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" setImagedBackground={setImagedBackground} />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-cricket" sportName="Cricket" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-archery" sportName="Archery" />
// //         </SwiperSlide>
// //         <SwiperSlide>
// //           <SportsTile image="bg-karate" sportName="Karate" />
// //         </SwiperSlide>
// //         {/* Add more SwiperSlide components for additional sports */}
// //       </Swiper>
      
// //       {/* Custom Navigation Arrows with Icons */}
     
// //     </div>
// //   );
// // };

// // const ListOfSportsSection = ({ imagedBackground ,setImagedBackground}) => (
// //   <Section
// //     className={`min-h-screen px-12 py-24 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
// //   >
// //     <div className="max-w-screen-xl mx-auto px-6 py-24">
// //       <SectionHeader />
// //       <SportsTileCollection  setImagedBackground={setImagedBackground}/>
// //     </div>
// //   </Section>
// // );

// // export default ListOfSportsSection;


// import Link from "next/link";
// import Section from "../Layout/Section"; // Ensure this path is correct
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css"; // Swiper core styles
// import "swiper/css/navigation"; // Navigation module styles
// import "swiper/css/pagination"; // Pagination module styles
// import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper"; // Import Autoplay
// import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"; // Importing icons

// // Swiper modules
// SwiperCore.use([Navigation, Pagination, Autoplay]); // Use the Autoplay module

// const SectionHeader = () => (
//   <div className="text-center">
//     <div className="space-y-5">
//       <h1
//         data-aos-duration="1000"
//         data-aos="fade-up"
//         className="text-3xl text-white font-akira"
//       >
//         What we offer
//       </h1>
//       <p
//         data-aos-duration="1000"
//         data-aos="fade-up"
//         data-aos-delay="200"
//         className="max-w-2xl m-auto text-sm italic text-white"
//       >
//         Arya Sports Academy aims at creating a hub of institutions, trainers,
//         sports facilities, sporting equipment, pre and post-school activities,
//         sports camps, and much more. We are a one-of-a-kind sports academy that
//         provides world-class facilities and aims to reignite the passion for
//         sports leading to the overall development of personalities in the youth.
//       </p>
//     </div>
//   </div>
// );

// const SportsTile = ({ setImagedBackground, image, sportName }) => (
//   <Link href={`/${sportName.toLowerCase()}`} passHref>
//     <div
//       className={`mt-10 relative h-96 w-full bg-black bg-opacity-50 bg-right bg-cover cursor-pointer bg-blend-multiply ${image} hover:bg-opacity-5 filter grayscale hover:grayscale-0`}
//       // data-aos-duration="1000"
//       // data-aos="fade-up"
//       // data-aos-delay="400"
//       onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
//       onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
//     >
//       <span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
//         {sportName}
//       </span>
//     </div>
//   </Link>
// );

// const SportsTileCollection = ({ setImagedBackground }) => {
//   const sports = [
//     { image: "bg-cricket", name: "Cricket" },
//     { image: "bg-archery", name: "Archery" },
//     { image: "bg-karate", name: "Karate" },
//     { image: "bg-karate", name: "Yoga" },
//     { image: "bg-karate", name: "Football" },
//     { image: "bg-karate", name: "Basketball" },
//     { image: "bg-karate", name: "Hockey" },
//     // Add more sports here if needed
//   ];

//   return (
//     <div className="relative">
//       <Swiper
//         spaceBetween={15}
//         slidesPerView={1}
//         navigation={{
//           nextEl: '.swiper-button-next',
//           prevEl: '.swiper-button-prev',
//         }}
//         pagination={{ clickable: true }}
//         autoplay={{
//           delay: 3000,
//           disableOnInteraction: false,
//         }}
//         breakpoints={{
//           640: {
//             slidesPerView: 1,
//             spaceBetween: 20,
//           },
//           768: {
//             slidesPerView: 2,
//             spaceBetween: 40,
//           },
//           1024: {
//             slidesPerView: 3,
//             spaceBetween: 15,
//           },
//         }}
//       >
//         {sports.map((sport, index) => (
//           <SwiperSlide key={index}>
//             <SportsTile
//               image={sport.image}
//               sportName={sport.name}
//               setImagedBackground={setImagedBackground}
//             />
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// const ListOfSportsSection = ({ imagedBackground, setImagedBackground }) => (
//   <Section
//     className={`min-h-screen px-12 py-1 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
//   >
//     <div className="max-w-screen-xl mx-auto px-6 py-24">
//       <SectionHeader />
//       <SportsTileCollection setImagedBackground={setImagedBackground} />
//     </div>
//   </Section>
// );

// export default ListOfSportsSection;






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
      className={`relative h-96 w-full bg-black bg-opacity-50 bg-right bg-cover cursor-pointer bg-blend-multiply ${image} hover:bg-opacity-5 filter grayscale hover:grayscale-0`}
      onMouseEnter={() => setImagedBackground(`${image} bg-opacity-75`)}
      onMouseLeave={() => setImagedBackground(`${image} bg-opacity-100`)}
    >
      <span className="absolute left-0 right-0 bottom-3 text-base text-center text-white font-akira z-10">
        {sportName}
      </span>
    </div>
  </Link>
);

const SportsTileCollection = ({ setImagedBackground }) => {
  const sports = [
    { image: "bg-cricket", name: "Cricket" },
    { image: "bg-archery", name: "Archery" },
    { image: "bg-karate", name: "Karate" },
    { image: "bg-yoga", name: "Yoga" },
    { image: "bg-football", name: "Football" },
    { image: "bg-basketball", name: "Basketball" },
    { image: "bg-hockey", name: "Hockey" },
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={15}
        slidesPerView={1}
        // navigation
        pagination={{ clickable: true ,el:""}}
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
    className={`min-h-screen px-12 py-1 bg-black bg-center bg-cover transition-all duration-300 bg-blend-multiply ${imagedBackground}`}
  >
    <div className="max-w-screen-xl mx-auto px-6 py-24">
      <SectionHeader />
      <SportsTileCollection setImagedBackground={setImagedBackground} />
    </div>
  </Section>
);

export default ListOfSportsSection;
