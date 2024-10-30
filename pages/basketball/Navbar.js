const Navbar = () => {
    return (
      <nav className="flex items-center justify-between py-4 px-8 bg-dark-blue">
        <div className="text-white text-2xl font-bold">🏀 Academy</div>
        <ul className="flex space-x-8 text-white">
          <li>Coaches</li>
          <li>Gallery</li>
          <li>Players</li>
          <li>News</li>
        </ul>
        <div className="flex items-center space-x-4">
          <button className="bg-pink px-6 py-2 rounded-full text-white">Contact</button>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
  