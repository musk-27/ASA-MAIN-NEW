// /**
//  * Common Footer on the website
//  * @returns
//  */

// import ContactFooterMenu from './ContactFooterMenu';
// import FooterMenu from './FooterMenu';
// import Logo from '../Header/Logo';

// export default function Footer() {
// 	return (
// 		<div>
// 			<div className="bg-black">
// 				<div className="px-12 py-12 space-y-6 md:py-24 md:flex-row md:space-y-0 md:flex md:items-center md:px-6 md:space-x-6 md:justify-evenly">
// 					<div id="first" className="w-full group">
// 						<h1
// 							data-aos="fade-up"
// 							data-aos-delay={300}
// 							data-aos-duration="1000"
// 							className="text-white transition-all duration-150 transform border-yellow-500 cursor-pointer group-hover:translate-y-2 font-akira md:flex md:items-center md:justify-center"
// 						>
// 							High Quality <br /> Training At <br /> ASA
// 						</h1>
// 					</div>
// 					<div id="second" className="w-full cursor-pointer md:flex md:items-center md:justify-center">
// 						<FooterMenu />
// 					</div>
// 					<div
// 						id="third"
// 						className="w-full space-y-2 cursor-pointer md:space-y-0 md:flex-col md:items-center md:justify-center md:flex"
// 					>
// 						<ContactFooterMenu />
// 					</div>
// 					<div id="fourth" className="w-full py-16 md:py-0 md:flex md:items-center md:justify-center">
// 						<Logo width={100} height={63} />
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }




import ContactFooterMenu from './ContactFooterMenu';
import FooterMenu from './FooterMenu';
import Logo from '../Header/Logo';

export default function Footer() {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto px-6 py-12 space-y-6 md:py-24 md:flex-row md:space-y-0 md:flex md:items-center md:px-6 md:space-x-6 md:justify-evenly">
        <div id="first" className="w-full group">
          <h1
            data-aos="fade-up"
            data-aos-delay={300}
            data-aos-duration="1000"
            className="text-white transition-all duration-150 transform border-yellow-500 cursor-pointer group-hover:translate-y-2 font-akira md:flex md:items-center md:justify-center"
          >
            High Quality <br /> Training At <br /> ASA
          </h1>
        </div>
        <div id="second" className="w-full cursor-pointer md:flex md:items-center md:justify-center">
          <FooterMenu />
        </div>
        <div id="third" className="w-full space-y-2 cursor-pointer md:space-y-0 md:flex-col md:items-center md:justify-center md:flex">
          <ContactFooterMenu />
        </div>
        <div id="fourth" className="w-full py-16 md:py-0 md:flex md:items-center md:justify-center">
          <Logo width={100} height={63} />
        </div>
      </div>
    </div>
  );
}
