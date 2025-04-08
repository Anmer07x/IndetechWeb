import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">Contáctanos</h2>
        <p className="text-gray-600 text-center mb-8">Déjanos tu mensaje y te responderemos lo antes posible.</p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileFocus={{ scale: 1.05 }}>
            <input 
              type="text" 
              name="name" 
              placeholder="Nombre" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </motion.div>
          
          <motion.div whileFocus={{ scale: 1.05 }}>
            <input 
              type="email" 
              name="email" 
              placeholder="Correo Electrónico" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </motion.div>
          
          <motion.div whileFocus={{ scale: 1.05 }}>
            <textarea 
              name="message" 
              rows="5" 
              placeholder="Tu mensaje..." 
              value={formData.message} 
              onChange={handleChange} 
              className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required
            ></textarea>
          </motion.div>
          
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            type="submit" 
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl shadow-md hover:bg-blue-700 transition"
          >
            Enviar
          </motion.button>
        </form>

        {success && (
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="text-center text-green-600 font-bold mt-4"
          >
            ¡Mensaje enviado con éxito!
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default ContactForm;