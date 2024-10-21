// import MenuItem from './MenuItem';
import { Menu } from '../../data/MenuData';

/**
 *
 * @returns Menu for the sitelinks feature
 */
const FooterMenu = () => (
  <div>
    <h3 data-aos="fade-up" data-aos-delay={400} data-aos-duration="1000" className="my-2 text-white font-akira">
      {' '}
      Sitelinks{' '}
    </h3>
    <ul className="space-y-1">
      {Menu.map((menuItem) => (
        <li
          data-aos="fade-up"
          data-aos-delay={450}
          data-aos-duration="1000"
          key={menuItem.name}
          className="text-xs text-transparent transition-all duration-150 ease-in-out transform cursor-pointer hover:translate-x-1 hover:not-italic bg-gradient-to-tr hover:from-yellow-200 hover:to-red-500 bg-clip-text from-white to-white"
          >
          {menuItem.name}
          {/* <MenuItem pathname={router?.pathname} menuItem={menuItem} /> */}
        </li>
      ))}
    </ul>
  </div>
);

export default FooterMenu;
