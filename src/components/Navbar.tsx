function Navbar() {
  return (
    <nav className="flex justify-between items-center px-[100px] py-6 shadow-md bg-white">
      <h1 className="text-3xl font-bold text-gray-800">Cyril's App</h1>

      <ul className="flex gap-5 text-lg font-medium  text-gray-700">
        <li>
          <a href="#home" className="hover:text-gray-700 transition-colors duration-30 text-green-800">Home</a>
        </li>
        <li>
          <a href="#projects" className="hover:text-green-700 transition-colors duration-30">Projects</a>
        </li>
        <li>
          <a href="#about" className="hover:text-green-700 transition-colors duration-30">About</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;