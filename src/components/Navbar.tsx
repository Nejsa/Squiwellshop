import { useState } from "react";

function Navbar() {
  const navLinks = ["Kniver", "Masker", "Figurer", "Om Oss"];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex justify-between items-center p-4 border-b border-gray-800">
      <h1 className="font-heading font-bold text-white text-2xl">
        Squiwell
        <span className="text-accent-purple hover:text-green-600 transition-colors">
          Shop
        </span>
      </h1>

      <div className="hidden md:flex gap-8 text-gray-400">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="hover:text-accent-purple transition-colors"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <div>🛒</div>
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full right-4 mt-2 w-48 bg-card border border-gray-800 rounded shadow-lg flex flex-col md:hidden z-50">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="px-4 py-3 text-gray-400 hover:bg-gray-800 hover:text-accent-purple transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
