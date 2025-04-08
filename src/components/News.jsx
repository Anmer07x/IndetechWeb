import React from "react";
import techImage from "../assets/images/remember.png"; // Asegúrate de tener una imagen relevante

const TecnologiaCard = () => {
  return (
    <div className="relative bg-gradient-to-br from-teal-600 to-green-700 hover:from-teal-700 hover:to-green-800 p-6 md:p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-shadow duration-500 overflow-hidden text-white">
      {/* Fondo animado */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-transparent to-cyan-500 opacity-30 blur-2xl transform scale-125 animate-pulse"></div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-12">
        {/* Imagen grande e impactante */}
        <div className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-hidden border-4 md:border-8 border-cyan-400 shadow-lg transform hover:scale-110 transition-transform duration-300">
          <img
            src={techImage}
            alt="Innovación tecnológica"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Texto principal */}
        <div className="flex-1 space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="text-2xl md:text-4xl font-extrabold text-cyan-300 leading-tight">
            💡 Recuerda que...
          </h2>
          <p className="text-base md:text-lg leading-relaxed uppercase">
            En <span className="font-semibold text-blue-200 ">Indetech S.A.S</span>, creemos que la <strong>tecnología</strong> no es solo una herramienta, sino una solución integral para transformar tu negocio.{" "}
            <span className="font-bold text-cyan-200 underline decoration-wavy decoration-custom-green">
              ¡Eleva tus procesos con nuestras soluciones digitales!
            </span>
          </p>

          {/* Consejo adicional */}
          <div className="bg-gray-800 bg-opacity-90 p-4 rounded-xl shadow-inner border-l-4 border-cyan-500">
            <p className="text-sm md:text-base text-cyan-300 italic uppercase">
              📣 <strong>Consejo:</strong> Automatizar procesos con software especializado no solo reduce costos, sino que aumenta la eficiencia y permite a tu equipo enfocarse en lo que realmente importa. ¡Potencia tu productividad con Indetech!
            </p>
          </div>
        </div>
      </div>

      {/* Elementos decorativos adicionales */}
      <div className="absolute top-0 left-0 w-24 h-24 md:w-32 md:h-32 bg-cyan-200 rounded-full opacity-50 blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-36 h-36 md:w-48 md:h-48 bg-blue-300 rounded-full opacity-40 blur-3xl animate-pulse"></div>
    </div>
  );
};

export default TecnologiaCard;
