import { motion } from "framer-motion";
import Banners from "../assets/images/banners.png";

const Banner = () => {
  return (
    <div className="relative h-[500px] lg:h-[700px] shadow-2xl overflow-hidden bg-gradient-to-r from-green-500 via-teal-500 to-green-800">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Banners})`,
          opacity: 0.25,
        }}
      ></div>

      <div className="flex justify-center items-center h-full text-center text-white relative px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="z-10 space-y-6"
        >
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight tracking-wide text-shadow">
            BIENVENIDOS A INDETECH S.A.S
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="mt-4 text-lg lg:text-xl font-medium uppercase tracking-wider text-shadow"
          >
            Transformamos ideas innovadoras en soluciones digitales
          </motion.p>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            onClick={() =>
              document
                .getElementById("services-section")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 px-8 py-4 text-xl font-semibold uppercase tracking-wider bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg shadow-2xl hover:from-teal-600 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105 box-shadow"
          >
            Explorar Servicios
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
