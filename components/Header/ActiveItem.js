const ActiveItem = ({ name, link }) => (
  <li className="px-5 py-3 text-sm text-transparent transition-all duration-200 transform hover:translate-y-2 bg-gradient-to-tr from-green-300 to-blue-500 bg-clip-text hover:rotate-0 font-akira">
    {name}
  </li>
);

export default ActiveItem;
