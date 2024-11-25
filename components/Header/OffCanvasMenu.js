// // import { motion, AnimatePresence } from 'framer-motion';
// // import Link from 'next/link';
// // import { XIcon } from '@heroicons/react/outline';
// // import { HashtagIcon } from '@iconicicons/react';
// // import { Menu } from '../../data/MenuData';
// // import ContactFooterMenu from '../Footer/ContactFooterMenu';

// // const TwitterIcon = ({ className }) => (
// // 	<svg
// // 		className={className}
// // 		width="24"
// // 		height="24"
// // 		viewBox="0 0 24 24"
// // 		fill="none"
// // 		xmlns="http://www.w3.org/2000/svg"
// // 	>
// // 		<path
// // 			d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 7.27005 8.2975 5.75967 6.32575C4.97031 7.76816 5.37324 9.61305 6.68039 10.5399C6.20677 10.5249 5.74376 10.3892 5.33024 10.1449V10.1849C5.33024 11.6873 6.32871 12.981 7.71657 13.2784C7.27888 13.4053 6.81941 13.4241 6.37348 13.3328C6.76345 14.6184 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
// // 			stroke="#fff"
// // 			strokeWidth="1.5"
// // 			strokeLinecap="round"
// // 			strokeLinejoin="round"
// // 		></path>
// // 	</svg>
// // );

// // const SocialSection = () => (
// // 	<div
// // 		data-aos="fade-up"
// // 		data-aos-delay={Menu.length * 100}
// // 		data-aos-duration="1000"
// // 		className="flex items-center space-x-2"
// // 	>
// // 		<TwitterIcon className="text-white" />
// // 		<div className="flex items-center">
// // 			<HashtagIcon className="text-white animate-pulse" />
// // 			<p className="text-xs font-semibold tracking-widest text-transparent font-montserrat from-green-500 to-blue-400 bg-gradient-to-br bg-clip-text">
// // 				ClassroomOutsideClassroom{' '}
// // 			</p>
// // 		</div>
// // 	</div>
// // );

// // const OffCanvasMenu = ({ isShowMenu, pathname, setIsShowMenu }) => {
// // 	return (
// // 		<AnimatePresence>
// // 			{isShowMenu && (
// // 				<motion.div
// // 					transition={{ duration: 0.7 }}
// // 					initial={{ x: -500 }}
// // 					animate={{ x: 0 }}
// // 					exit={{ x: -500 }}
// // 					className="fixed left-0 z-50 w-full h-screen bg-white md:w-1/2"
// // 				>
// // 					<div className="h-screen bg-cover bg-sports-edited">
// // 						<div className="w-full h-screen px-6 pt-12 bg-black bg-opacity-0 backdrop-filter">
// // 							<div className="flex items-center justify-between">
// // 								<h1 className="text-white font-akira">
// // 									{' '}
// // 									Navigate{' '}
// // 								</h1>
// // 								<XIcon
// // 									onClick={() => setIsShowMenu(!isShowMenu)}
// // 									className="w-5 h-5 text-white"
// // 								/>
// // 							</div>
// // 							<hr className="w-1/2 my-3 text-white" />
// // 							<ul className="space-y-2">
// // 								{Menu.map((menuItem, i) => (
// // 									<div
// // 										data-aos="fade-up"
// // 										data-aos-delay={i * 100}
// // 										data-aos-duration="1000"
// // 										key={menuItem.name}
// // 									>
// // 										<Link href={menuItem.url}>
// // 											<li
// // 												className={`text-white hover:translate-x-3 transform transition cursor-pointer font-akira ${
// // 													pathname == menuItem.url &&
// // 													'bg-gradient-to-tr from-yellow-500 to-white text-transparent bg-clip-text'
// // 												}`}
// // 											>
// // 												{menuItem.name}
// // 											</li>
// // 										</Link>
// // 										<p className="text-xs italic text-white font-inter">
// // 											{menuItem.description}{' '}
// // 										</p>
// // 									</div>
// // 								))}
// // 							</ul>
// // 							<hr
// // 								data-aos="fade-up"
// // 								data-aos-delay={Menu.length * 100}
// // 								data-aos-duration="1000"
// // 								className="w-1/3 my-3 text-white"
// // 							/>
// // 							<SocialSection />
// // 							<hr
// // 								data-aos="fade-up"
// // 								data-aos-delay={Menu.length * 100}
// // 								data-aos-duration="1000"
// // 								className="w-1/3 my-3 text-white"
// // 							/>
// // 							<ContactFooterMenu />
// // 						</div>
// // 					</div>
// // 				</motion.div>
// // 			)}
// // 		</AnimatePresence>
// // 	);
// // };

// // export default OffCanvasMenu;

// import { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Link from 'next/link';
// import { XIcon } from '@heroicons/react/outline';
// import { HashtagIcon } from '@iconicicons/react';
// import { Menu } from '../../data/MenuData';
// import ContactFooterMenu from '../Footer/ContactFooterMenu';

// const TwitterIcon = ({ className }) => (
// 	<svg
// 		className={className}
// 		width="24"
// 		height="24"
// 		viewBox="0 0 24 24"
// 		fill="none"
// 		xmlns="http://www.w3.org/2000/svg"
// 	>
// 		<path
// 			d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 7.27005 8.2975 5.75967 6.32575C4.97031 7.76816 5.37324 9.61305 6.68039 10.5399C6.20677 10.5249 5.74376 10.3892 5.33024 10.1449V10.1849C5.33024 11.6873 6.32871 12.981 7.71657 13.2784C7.27888 13.4053 6.81941 13.4241 6.37348 13.3328C6.76345 14.6184 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
// 			stroke="#fff"
// 			strokeWidth="1.5"
// 			strokeLinecap="round"
// 			strokeLinejoin="round"
// 		></path>
// 	</svg>
// );

// const SocialSection = () => (
// 	<div
// 		data-aos="fade-up"
// 		data-aos-delay={Menu.length * 100}
// 		data-aos-duration="1000"
// 		className="flex items-center space-x-2"
// 	>
// 		<TwitterIcon className="text-white" />
// 		<div className="flex items-center">
// 			<HashtagIcon className="text-white animate-pulse" />
// 			<p className="text-xs font-semibold tracking-widest text-transparent font-montserrat from-green-500 to-blue-400 bg-gradient-to-br bg-clip-text">
// 				ClassroomOutsideClassroom{' '}
// 			</p>
// 		</div>
// 	</div>
// );

// const OffCanvasMenu = ({ isShowMenu, pathname, setIsShowMenu }) => {
// 	const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false); // State for dropdown

// 	return (
// 		<AnimatePresence>
// 			{isShowMenu && (
// 				<motion.div
// 					transition={{ duration: 0.7 }}
// 					initial={{ x: -500 }}
// 					animate={{ x: 0 }}
// 					exit={{ x: -500 }}
// 					className="fixed left-0 z-50 w-full h-screen bg-white md:w-1/2"
// 				>
// 					<div className="h-screen bg-cover bg-sports-edited">
// 						<div className="w-full h-screen px-6 pt-12 bg-black bg-opacity-0 backdrop-filter">
// 							<div className="flex items-center justify-between">
// 								<h1 className="text-white font-akira"> Navigate </h1>
// 								<XIcon
// 									onClick={() => setIsShowMenu(!isShowMenu)}
// 									className="w-5 h-5 text-white"
// 								/>
// 							</div>
// 							<hr className="w-1/2 my-3 text-white" />
// 							<ul className="space-y-2">
// 								{Menu.map((menuItem, i) => (
// 									<div
// 										data-aos="fade-up"
// 										data-aos-delay={i * 100}
// 										data-aos-duration="1000"
// 										key={menuItem.name}
// 									>
// 										{menuItem.subMenu ? (
// 											<div
// 												className="relative"
// 												onMouseEnter={() => setIsSportsDropdownOpen(true)}
// 												onMouseLeave={() => setIsSportsDropdownOpen(false)}
// 											>
// 												<Link href={menuItem.url}>
// 													<li
// 														className={`text-white hover:translate-x-3 transform transition cursor-pointer font-akira ${
// 															pathname === menuItem.url &&
// 															'bg-gradient-to-tr from-yellow-500 to-white text-transparent bg-clip-text'
// 														}`}
// 													>
// 														{menuItem.name}
// 													</li>
// 												</Link>
// 												{isSportsDropdownOpen && (
// 													<div className="absolute left-0 right-0 mt-1 bg-white shadow-lg">
// 														<ul className="space-y-1">
// 															{menuItem.subMenu.map((subItem) => (
// 																<li key={subItem.name} className="text-black cursor-pointer hover:bg-gray-200 p-2">
// 																	<Link href={subItem.url}>{subItem.name}</Link>
// 																	<p className="text-xs italic text-black font-inter">
// 																		{subItem.description}
// 																	</p>
// 																</li>
// 															))}
// 														</ul>
// 													</div>
// 												)}
// 											</div>
// 										) : (
// 											<Link href={menuItem.url}>
// 												<li
// 													className={`text-white hover:translate-x-3 transform transition cursor-pointer font-akira ${
// 														pathname === menuItem.url &&
// 														'bg-gradient-to-tr from-yellow-500 to-white text-transparent bg-clip-text'
// 													}`}
// 												>
// 													{menuItem.name}
// 												</li>
// 											</Link>
// 										)}
// 										{!menuItem.subMenu && (
// 											<p className="text-xs italic text-white font-inter">
// 												{menuItem.description}
// 											</p>
// 										)}
// 									</div>
// 								))}
// 							</ul>
// 							<hr className="w-1/3 my-3 text-white" />
// 							<SocialSection />
// 							<hr className="w-1/3 my-3 text-white" />
// 							<ContactFooterMenu />
// 						</div>
// 					</div>
// 				</motion.div>
// 			)}
// 		</AnimatePresence>
// 	);
// };

// export default OffCanvasMenu;

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { XIcon } from "@heroicons/react/outline";
import { HashtagIcon } from "@iconicicons/react";
import { Menu } from "../../data/MenuData";
import ContactFooterMenu from "../Footer/ContactFooterMenu";

const TwitterIcon = ({ className }) => (
  <svg
    className={className}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.31 18.25C14.7819 18.25 17.7744 13.4403 17.7744 9.26994C17.7744 9.03682 17.9396 8.83015 18.152 8.73398C18.8803 8.40413 19.8249 7.49943 18.8494 5.97828C18.2031 6.32576 17.6719 6.51562 16.9603 6.74448C15.834 5.47393 13.9495 5.41269 12.7514 6.60761C11.9785 7.37819 11.651 8.52686 11.8907 9.62304C9.49851 9.49618 7.27005 8.2975 5.75967 6.32575C4.97031 7.76816 5.37324 9.61305 6.68039 10.5399C6.20677 10.5249 5.74376 10.3892 5.33024 10.1449V10.1849C5.33024 11.6873 6.32871 12.981 7.71657 13.2784C7.27888 13.4053 6.81941 13.4241 6.37348 13.3328C6.76345 14.6184 7.87974 15.4989 9.15272 15.5245C8.09887 16.4026 6.79761 16.8795 5.45806 16.8782C5.22126 16.8776 4.98504 16.8626 4.75 16.8326C6.11076 17.7588 7.69359 18.25 9.31 18.2475V18.25Z"
      stroke="#fff"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

const SocialSection = () => (
  <div
    data-aos="fade-up"
    data-aos-delay={Menu.length * 100}
    data-aos-duration="1000"
    className="flex items-center space-x-2"
  >
    <TwitterIcon className="text-white" />
    <div className="flex items-center">
      <HashtagIcon className="text-white animate-pulse" />
      <p className="text-xs font-semibold tracking-widest text-transparent font-montserrat from-green-500 to-blue-400 bg-gradient-to-br bg-clip-text">
        ClassroomOutsideClassroom{" "}
      </p>
    </div>
  </div>
);

const OffCanvasMenu = ({ isShowMenu, pathname, setIsShowMenu }) => {
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);

  return (
    <AnimatePresence>
      {isShowMenu && (
        <motion.div
          transition={{ duration: 0.7 }}
          initial={{ x: -500 }}
          animate={{ x: 0 }}
          exit={{ x: -500 }}
          className="fixed left-0 z-50 w-full h-screen bg-black md:w-1/2"
        >
          <div className="h-screen bg-cover bg-sports-edited">
            <div className="w-full h-screen px-6 pt-12 bg-black bg-opacity-0 backdrop-filter">
              <div className="flex items-center justify-between">
                <h1 className="text-white font-akira"> Navigate </h1>
                <XIcon
                  onClick={() => setIsShowMenu(!isShowMenu)}
                  className="w-5 h-5 text-white"
                />
              </div>
              <hr className="w-1/2 my-3 text-white" />
              <ul className="space-y-2">
                {Menu.map((menuItem, i) => (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i * 100}
                    data-aos-duration="1000"
                    key={menuItem.name}
                  >
                   {menuItem.subMenu ? (
  <div>
    <button
      onClick={() =>
        setIsSportsDropdownOpen(!isSportsDropdownOpen)
      }
      className={`text-white hover:translate-x-3 transform transition cursor-pointer font-akira ${
        pathname === menuItem.url &&
        "bg-gradient-to-tr from-yellow-500 to-white text-transparent bg-clip-text"
      }`}
    >
      {menuItem.name}
    </button>
    {isSportsDropdownOpen && (
      <div className="grid grid-cols-4 gap-2 pl-4 mt-1">
        {menuItem.subMenu.map((subItem) => (
          <Link key={subItem.name} href={subItem.url}>
            <div className="text-white p-2 text-center hover:bg-gray-700 transition cursor-pointer">
              {subItem.name}
            </div>
          </Link>
        ))}
      </div>
    )}
  </div>
) : (
  <Link href={menuItem.url}>
    <li
      className={`text-white hover:translate-x-3 transform transition cursor-pointer font-akira ${
        pathname === menuItem.url &&
        "bg-gradient-to-tr from-yellow-500 to-white text-transparent bg-clip-text"
      }`}
    >
      {menuItem.name}
    </li>
  </Link>
)}

                    {!menuItem.subMenu && (
                      <p className="text-xs italic text-white font-inter">
                        {menuItem.description}
                      </p>
                    )}
                  </div>
                ))}
              </ul>
              <hr className="w-1/3 my-3 text-white" />
              <SocialSection />
              <hr className="w-1/3 my-3 text-white" />
              <ContactFooterMenu />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OffCanvasMenu;
