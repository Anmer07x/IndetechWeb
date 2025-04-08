import React from "react";
import Desa from "../assets/images/desarrollo.jpg"
import Redes from "../assets/images/redes.jpg"
import Publi from "../assets/images/publicidad.jpg"
import Corpo from "../assets/images/corp.jpg"
import Finans from "../assets/images/finanzas.jpg"
import Proyec  from "../assets/images/proyecto.jpg"

const Services = () => {
  const services = [
    {
      title: "Desarrollo y Optimizacion de Sitios Web",
      description: "Diseñamos y optimizamos sitios web personalizados, asegurándonos de que sean atractivos, rápidos y funcionales, adaptados a las necesidades de tu negocio y alineados con las últimas tendencias tecnológicas.",
      color: "bg-red-500",
      image: Desa,
    },
    {
      title: "Gestión Avanzada de Redes Sociales",
      description: "Diseñamos pensando en tus necesidades específicas.Nos encargamos de planificar, crear y administrar contenido estratégico en redes sociales para aumentar tu visibilidad, interacción con clientes y posicionamiento de marca.",
      color: "bg-purple-500",
      image: Redes,
    },
    {
      title: "Diseño de Campañas Publicitarias Automatizadas",
      description: "Implementamos campañas digitales automatizadas que se ajustan dinámicamente a tu público objetivo, optimizando la inversión y maximizando el impacto en plataformas digitales.",
      color: "bg-blue-500",
      image: Publi,
    },
    {
      title: "Automatización de Procesos Empresariales",
      description: "Integramos herramientas tecnológicas para transformar procesos manuales en flujos de trabajo automatizados, mejorando la productividad y eliminando errores humanos.",
      color: "bg-green-500",
      image: Corpo,
    },
    {
      title: "Sistemas de Gestión Financiera",
      description: "Desarrollamos e implementamos soluciones tecnológicas que te permiten monitorear, analizar y controlar las finanzas de tu empresa con precisión y en tiempo real.",
      color: "bg-gray-500",
      image: Finans,

    },
    {
      title: "Formulación de proyectos",
      description: "Brindamos asesoría completa en la estructuración y planificación de proyectos, asegurando su viabilidad, sostenibilidad y éxito a través de estrategias bien fundamentadas.",
      color: "bg-yellow-500",
      image: Proyec,
    },
  ];

  return (
    
    <div id="services-section" className="w-full max-w-6xl mx-auto mt-10 p-6">
    <h1 className="text-5xl font-semibold text-center mb-8 text-shadow text-custom-green">
  Descubre Nuestros Servicios Especializados
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="p-6 shadow-lg rounded-lg border hover:shadow-2xl transition-shadow duration-300  border-gray-400"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover mb-4"
            />
            <div
              className={`w-12 h-12 ${service.color} rounded-full flex items-center justify-center mb-4 text-white`}
            >
              <span className="font-bold text-lg">{index + 1}</span>
            </div>
            <h2 className="text-xl font-bold mb-2">{service.title}</h2>
            <p className="text-gray-600 mb-4 font-semibold">{service.description}</p>
            <button
              className={`px-4 py-2 ${service.color} text-white font-semibold rounded-md hover:bg-opacity-50 transition-colors duration-300`}
            >
              Conocer más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
