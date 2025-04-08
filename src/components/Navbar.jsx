import React, { useState } from 'react';
import logo from '../assets/images/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-custom-green p-4 lg:p-6 z-50 shadow-xl sticky top-0 backdrop-blur-md bg-opacity-60">
      <div className="flex items-center justify-between">
        {/* Contenedor del logo y nombre */}
        <div className="flex items-center space-x-6">
          <a href="/" className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-14 rounded-full shadow-xl transform hover:scale-105 transition-transform duration-300"
            />
          </a>
          <div className="text-white text-4xl font-semibold uppercase tracking-wide text-shadow">
            INDETECH S.A.S
          </div>
        </div>

        {/* Botón para abrir/cerrar menú en pantallas pequeñas */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-4xl focus:outline-none transform hover:scale-110 transition duration-200"
          >
            {isOpen ? 'X' : '☰'}
          </button>
        </div>

        {/* Menú de navegación en pantallas grandes */}
        <div className="hidden lg:flex space-x-10 text-white font-semibold text-xl tracking-wide">
          <ul className="flex space-x-10">
          
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="services-section"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Menú desplegable en pantallas pequeñas */}
      {isOpen && (
        <div className="lg:hidden mt-4 bg-custom-green bg-opacity-90 p-6 rounded-lg shadow-2xl z-50 absolute left-0 right-0">
          <ul className="flex flex-col space-y-6 text-white font-semibold text-xl text-shadow-md">
          
            <li>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="services-section"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Servicios
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="hover:text-teal-500 transition-all duration-300 cursor-pointer"
                onClick={toggleMenu}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
