function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 border-b border-gray-800">
      <h1 className="font-heading font-bold text-white text-2xl">
        Squiwell
        <span className="text-accent-purple hover:text-green-600 transition-colors">
          Shop
        </span>
      </h1>
      <div className="flex gap-8 text-gray-400 ">
        <a href="#" className="hover:text-accent-purple transition-colors">
          Kniver
        </a>
        <a href="#" className="hover:text-accent-purple transition-colors">
          Masker
        </a>
        <a href="#" className="hover:text-accent-purple transition-colors">
          Figurer
        </a>
        <a href="#" className="hover:text-accent-purple transition-colors">
          Om Oss
        </a>
      </div>
      <div>🛒</div>
    </nav>
  );
}

export default Navbar;
