import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 px-6 bg-gray-100" id="about">
      <div className="w-full max-w-6xl mx-auto mt-10">
        <h1 className="text-5xl font-semibold text-center mb-8 text-shadow text-custom-green">
          Quienes Somos
        </h1>
        <p className="text-xl text-center mb-8 uppercase "> <strong>INDETECH S.A.S</strong> es una empresa dedicada a ofrecer servicios tecnológicos innovadores y personalizados, diseñados para impulsar el crecimiento digital de sus clientes. Su portafolio incluye la creación de sitios web, desarrollo de aplicaciones, gestión de redes sociales y servicios de programación, entre otros, con un enfoque en soluciones que se adapten a las necesidades específicas de cada cliente.
        </p>

        {/* Sección Visión */}
        <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10 mb-12">
          {/* Cuadro de conversación para Visión */}
          <div className="lg:w-1/2 p-8 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg shadow-2xl hover:from-teal-600 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105 mb-6 lg:mb-0">
            {/* Flecha a la izquierda con colores y efectos */}
            <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-teal-500 to-green-600 text-white z-50 rounded-lg shadow-xl rotate-45"></div>

            {/* Título */}
            <h3 className="text-3xl font-semibold uppercase text-shadow-md">
              <br />
              Visión
              <br />
              <br />
            </h3>
          </div>

          {/* Cuadro de conversación para el texto */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg relative">
            <p className="text-lg">
              Ser reconocidos como líderes en el mercado tecnológico por nuestra
              excelencia en servicios de programación, desarrollo digital y
              atención al cliente, estableciendo un estándar de innovación y
              calidad que inspire a empresas y emprendedores en todo el país.
            </p>
          </div>
        </div>

        {/* Sección Misión */}
        <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 lg:space-x-10">
          {/* Cuadro de conversación para el texto */}
          <div className="lg:w-1/2 bg-white p-8 rounded-xl shadow-lg relative mb-10 lg:mb-0">
            <p className="text-lg">
              Proveer soluciones tecnológicas innovadoras y personalizadas en
              desarrollo web, aplicaciones y estrategias digitales, ayudando a
              nuestros clientes a transformar sus ideas en realidades efectivas
              y rentables, mientras fomentamos relaciones sólidas basadas en
              confianza y resultados.
            </p>
          </div>

          {/* Cuadro de conversación para Misión */}
          <div className="lg:w-1/2 p-8 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-lg shadow-2xl hover:from-teal-600 hover:to-green-700 transition duration-300 ease-in-out transform hover:scale-105 mb-10 lg:mb-4">
            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-teal-500 to-green-600 text-white z-50 rounded-lg shadow-xl rotate-45"></div>
            <h3 className="text-3xl font-semibold uppercase text-shadow">
              <br />
              Misión
              <br />
              <br />
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
