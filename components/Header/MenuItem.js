import Link from 'next/link';
import ActiveItem from './ActiveItem';
import { useState } from 'react';

const MenuItem = ({ menuItem, pathname }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (menuItem.subMenu) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  if (menuItem.subMenu) {
    return (
      <div 
        className="relative cursor-pointer" 
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <div className="px-5 py-3 text-sm text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text">
          {menuItem.name}
        </div>
        {/* {isDropdownOpen && (
          <div className="absolute left-0 mt-0 bg-white text-black shadow-lg">
            {menuItem.subMenu.map((subItem) => (
              <Link key={subItem.name} href={subItem.url}>
                <li className="px-10 py-2 text-sm hover:bg-gray-200 transition duration-200">
                  {subItem.name}
                </li>
              </Link>
            ))}
          </div>
        )} */}
      </div>
    );
  }

  if (menuItem.url === pathname) {
    return <ActiveItem name={menuItem.name} link={menuItem.link} />;
  }

  return (
    <Link href={menuItem.url}>
      <li className="px-5 py-3 text-sm text-transparent transition-all duration-200 transform font-akira bg-gradient-to-tr from-yellow-300 to-red-500 bg-clip-text hover:translate-y-2">
        {menuItem.name}
      </li>
    </Link>
  );
};

export default MenuItem;
