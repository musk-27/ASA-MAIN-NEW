// import Logo from "./Logo";
// import { useState } from "react";
// import MenuItem from "./MenuItem";
// import { useRouter } from "next/router";
// import { Menu } from "../../data/MenuData";
// import OffCanvasMenu from "./OffCanvasMenu";
// import { MenuAlt2Icon } from "@heroicons/react/outline";

// export default function Header() {
//   const [isShowMenu, setIsShowMenu] = useState(false);
//   const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
//   const [isCampDropdownOpen, setIsCampDropdownOpen] = useState(false); // New state for Camp dropdown
//   const router = useRouter();

//   return (
//     <div className="w-full bg-black">
//       <OffCanvasMenu
//         pathname={router?.pathname}
//         setIsShowMenu={setIsShowMenu}
//         isShowMenu={isShowMenu}
//       />
//       <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 relative">
//         <div id="center" className="hidden w-full text-left lg:block">
//           <ul className="flex items-center justify-start w-full space-x-12 text-left cursor-pointer">
//             {" "}
//             {/* Changed justify-start and text-left */}
//             {Menu.map((menuItem, i) => (
//               <div
//                 data-aos="fade-up"
//                 data-aos-delay={i * 100}
//                 data-aos-duration="1000"
//                 key={menuItem.name}
//               >
//                 {menuItem.subMenu ? (
//                   <div
//                     className="relative"
//                     onMouseEnter={() =>
//                       menuItem.name === "Sports"
//                         ? setIsSportsDropdownOpen(true) // Toggle Sports dropdown
//                         : setIsCampDropdownOpen(true) // Toggle Camp dropdown
//                     }
//                     onMouseLeave={() =>
//                       menuItem.name === "Sports"
//                         ? setIsSportsDropdownOpen(false) // Close Sports dropdown
//                         : setIsCampDropdownOpen(false) // Close Camp dropdown
//                     }
//                   >
//                     <MenuItem pathname={router?.pathname} menuItem={menuItem} />
//                     {/* Show submenu for Sports */}
//                     {menuItem.name === "Sports" && isSportsDropdownOpen && (
//                       <div className="absolute left-0 mt-0 dropdown-menu">
//                         {menuItem.subMenu
//                           .sort((a, b) => a.name.localeCompare(b.name)) // Sort here
//                           .map((subItem) => (
//                             <MenuItem
//                               key={subItem.name}
//                               pathname={router?.pathname}
//                               menuItem={subItem}
//                             />
//                           ))}
//                       </div>
//                     )}
//                     {/* Show submenu for Camp */}
//                     {menuItem.name === "Camp" && isCampDropdownOpen && (
//                       <div className="absolute left-0 mt-0 dropdown-menu">
//                         {menuItem.subMenu
//                           .sort((a, b) => a.name.localeCompare(b.name)) // Sort here
//                           .map((subItem) => (
//                             <MenuItem
//                               key={subItem.name}
//                               pathname={router?.pathname}
//                               menuItem={subItem}
//                             />
//                           ))}
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <MenuItem pathname={router?.pathname} menuItem={menuItem} />
//                 )}
//               </div>
//             ))}
//           </ul>
//         </div>

        // <div
        //   id="right"
        //   className="lg:flex sm:justify-between lg:justify-end md:justify-between w-full text-center lg:text-right"
        // >
        //   <div className="flex justify-between px-8 py-8">
        //     <MenuAlt2Icon
        //       onClick={() => setIsShowMenu(!isShowMenu)}
        //       className="w-6 h-6 text-white lg:hidden hover:text-yellow-500"
        //     />
        //     <Logo width={50} height={32} />
        //   </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import Logo from "./Logo";
import { useState } from "react";
import MenuItem from "./MenuItem";
import { useRouter } from "next/router";
import { Menu } from "../../data/MenuData";
import OffCanvasMenu from "./OffCanvasMenu";
import { MenuAlt2Icon } from "@heroicons/react/outline";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const [isSportsDropdownOpen, setIsSportsDropdownOpen] = useState(false);
  const [isCampDropdownOpen, setIsCampDropdownOpen] = useState(false); // New state for Camp dropdown
  const router = useRouter();

  return (
    <div className="w-full bg-black">
      <OffCanvasMenu
        pathname={router?.pathname}
        setIsShowMenu={setIsShowMenu}
        isShowMenu={isShowMenu}
      />
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-2 relative">
        {/* Centered Menu for Large Screens */}
        <div
          id="center"
          className="hidden lg:block w-full text-left" // Ensure this only shows on lg and above
        >
          <ul className="flex items-center justify-start w-full space-x-12 text-left cursor-pointer">
            {Menu.map((menuItem, i) => (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                data-aos-duration="1000"
                key={menuItem.name}
              >
                {menuItem.subMenu ? (
                  <div
                    className="relative"
                    onMouseEnter={() =>
                      menuItem.name === "Sports"
                        ? setIsSportsDropdownOpen(true)
                        : setIsCampDropdownOpen(true)
                    }
                    onMouseLeave={() =>
                      menuItem.name === "Sports"
                        ? setIsSportsDropdownOpen(false)
                        : setIsCampDropdownOpen(false)
                    }
                  >
                    <MenuItem pathname={router?.pathname} menuItem={menuItem} />
                    {/* Dropdown Menus */}
                    {menuItem.name === "Sports" && isSportsDropdownOpen && (
                      <div className="absolute left-0 mt-0 dropdown-menu">
                        {menuItem.subMenu
                          .sort((a, b) => a.name.localeCompare(b.name)) // Sort here
                          .map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              pathname={router?.pathname}
                              menuItem={subItem}
                            />
                          ))}
                      </div>
                    )}
                    {menuItem.name === "Camp" && isCampDropdownOpen && (
                      <div className="absolute left-0 mt-0 dropdown-menu">
                        {menuItem.subMenu
                          .sort((a, b) => a.name.localeCompare(b.name)) // Sort here
                          .map((subItem) => (
                            <MenuItem
                              key={subItem.name}
                              pathname={router?.pathname}
                              menuItem={subItem}
                            />
                          ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <MenuItem pathname={router?.pathname} menuItem={menuItem} />
                )}
              </div>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button and Logo */}
        <div
          id="right"
          className="flex justify-between w-full sm:justify-between lg:justify-end md:justify-between"
        >
          
          <MenuAlt2Icon
            onClick={() => setIsShowMenu(!isShowMenu)}
            className="mt-5 w-6 h-6 text-white lg:hidden hover:text-yellow-500"
          />
          
          <Logo width={50} height={32} className="p-8" />
        </div>
                
      </div>
    </div>
  );
}
