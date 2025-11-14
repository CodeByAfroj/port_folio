// @flow strict
import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const links = [
            { name: "ABOUT", to: "#about" },
            { name: "EXPERIENCE", to: "#experience" },
            { name: "SKILLS", to: "#skills" },
            { name: "EDUCATION", to: "#education" },
            { name: "PROJECTS", to: "#projects" },
          ]

  return (
    <nav className=" bg-transparent fixed top-0 left-0 w-full z-70 shadow-sm backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-[#16f2b3] text-3xl font-bold tracking-wide"
          onClick={closeMenu}
        >
          Afroj Mulani
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-white text-3xl cursor-pointer transition-all duration-300">
          {isOpen ? <FiX onClick={toggleMenu} /> : <FiMenu onClick={toggleMenu} />}
        </div>

        {/* Nav Links */}
        <ul
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-[#0a0a0a]/90 md:bg-transparent backdrop-blur-lg md:flex md:items-center md:space-x-8 transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4 md:opacity-100 md:visible md:translate-y-0"
          }`}
        >
          {links.map((link) => (
            <li key={link.to} className="text-center md:text-left">
              <HashLink
                smooth
                to={link.to}
                onClick={closeMenu}
                className="block py-3 md:py-0 text-white hover:text-pink-500 transition-all duration-300 text-sm font-medium tracking-wide"
              >
                {link.name}
              </HashLink>
            </li>
          ))}

        
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
