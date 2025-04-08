import React from "react";
import Potencia from "../assets/images/PotenciAfro.jpg";
import SCU from "../assets/images/Cubicaje.jpeg";
import sys from "../assets/images/sysme.jpg";
import tek from "../assets/images/tekstore.png";
import peli from "../assets/images/Movies.jpg";
import sis from "../assets/images/sisfi.jpg";
import { motion } from "framer-motion";

const projects = [
  {
    title: "PotenciAfro",
    description: "Plataforma de conexión y oportunidades para emprendedores afro.",
    image: Potencia,
    link: "https://potenciafroconectatech.com/",
  },
  {
    title: "SCU - Sistema de medición y cubicaje",
    description: "Herramienta para calcular cubicajes y optimizar logística.",
    image: SCU,
    link: "https://enlace-del-proyecto2.com",
  },
  {
    title: "SysMedical - Sistema de control de salud",
    description: "Sistema de gestión para clínicas y hospitales.",
    image: sys,
    link: "https://enlace-del-proyecto3.com",
  },
  {
    title: "TekStore - Tienda virtual",
    description: "E-commerce moderno con múltiples funcionalidades.",
    image: tek,
    link: "https://enlace-del-proyecto4.com",
  },
  {
    title: "MoviesApp - Sitio de películas",
    description: "Explora y descubre películas con una interfaz intuitiva.",
    image: peli,
    link: "https://enlace-del-proyecto5.com",
  },
  {
    title: "Creditop - Sistema de gestión financiera",
    description: "Gestión y control financiero para empresas.",
    image: sis,
    link: "https://enlace-del-proyecto6.com",
  },
];

const Portfolio = () => {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-extrabold text-gray-900 uppercase mb-6 tracking-wide">Portafolio</h2>
        <p className="text-white-700 text-lg mb-12 max-w-3xl mx-auto">
          Estos son algunos de los proyectos destacados en los que hemos trabajado.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              className="block bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:shadow-2xl"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-60 object-cover transform transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <h3 className="text-white text-3xl font-semibold">{project.title}</h3>
                </div>
              </div>
              <div className="p-6 text-center">
                <p className="text-white-600 text-lg font-medium">{project.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
