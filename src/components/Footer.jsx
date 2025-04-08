import React from "react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-custom-green text-white py-16 relative overflow-hidden">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-custom-green to-transparent opacity-50 z-0"></div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 z-10">
        {/* Sección 1: Logo y descripción */}
        <div className="space-y-4">
          <img
            src={logo}
            alt="INDETECH Logo"
            className="w-32 h-auto mb-4 mx-auto md:mx-0 transform hover:scale-110 transition duration-500 rounded-lg shadow-xl"
          />
          <p className="text-sm text-center md:text-left text-shadow-lg tracking-wider font-light opacity-90">
          <strong>INDETECH S.A.S</strong> es una empresa dedicada a ofrecer servicios tecnológicos innovadores y personalizados, diseñados para impulsar el crecimiento digital de sus clientes. 

          </p>
        </div>

        {/* Sección 2: Enlaces rápidos */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-shadow-md mb-4 tracking-widest">Enlaces</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#servicios"
                className="hover:underline hover:text-custom-blue text-shadow-md transition duration-300 ease-in-out"
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                href="#productos"
                className="hover:underline hover:text-custom-blue text-shadow-md transition duration-300 ease-in-out"
              >
                Productos
              </a>
            </li>
            <li>
              <a
                href="#nosotros"
                className="hover:underline hover:text-custom-blue text-shadow-md transition duration-300 ease-in-out"
              >
                Nosotros
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:underline hover:text-custom-blue text-shadow-md transition duration-300 ease-in-out"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 3: Información de contacto */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-shadow-md mb-4 tracking-widest">Contáctanos</h4>
          <ul className="space-y-2">
            <li>📍 Dirección: Medellin, CO</li>
            <li>
              📧 Email:{" "}
              <a href="mailto:contacto@indetech.com" className="text-custom-blue hover:underline">
                contacto@indetech.com
              </a>
            </li>
            <li>
              📞 Teléfono:{" "}
              <a href="tel:+1234567890" className="text-custom-blue hover:underline">
                +57 3175686476
              </a>
            </li>
          </ul>
        </div>

        {/* Sección 4: Redes sociales */}
        <div className="space-y-4">
          <h4 className="text-xl font-bold text-shadow-md mb-4 tracking-widest">Síguenos</h4>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-custom-blue text-3xl transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-custom-blue text-3xl transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="fab fa-twitter-square"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/indetechsas/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-custom-blue text-3xl transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/indetech__/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-custom-blue text-3xl transform hover:scale-110 transition duration-300 ease-in-out"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Pie de derechos reservados */}
      <div className="mt-12 text-center border-t border-white pt-4">
        <p className="text-sm text-shadow-md opacity-80">
          &copy; 2025 <strong>INDETECH S.A.S.</strong> Todos los derechos reservados.
          <p className="text-sm mt-2">Desarrollado por: <a href="" className="hover:underline hover:text-custom-blue">INDETECH S.A.S.</a></p>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
