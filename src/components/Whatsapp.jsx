import React from "react";
import FaWhatsapp from "../assets/images/Icons/social.png";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573125474581?text=Hola,%20estoy%20interesado%20en%20sus%20servicios.%20¿Puedo%20obtener%20más%20información?"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition duration-300"
    >
      {/* Icono de WhatsApp */}
      <img src={FaWhatsapp} alt="Icono de WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
