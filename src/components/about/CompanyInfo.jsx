import React from "react";

const CompanyInfo = () => {
  return (
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* History Section with Image */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-monument text-3xl uppercase md:text-4xl text-pantone-black mb-4 font-bold">
                Misión
              </h2>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80 leading-relaxed">
                Desarrollar proyectos integrales con un servicio personalizado,
                mejorando la calidad de vida de nuestros clientes de acuerdo a
                sus necesidades.
              </p>
            </div>
            <div className="order-first lg:order-last">
              <img
                src="/assets/images/1.jpg"
                alt="Our History"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Vision Section with Image */}
        <div className="mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-first">
              <img
                src="/assets/images/2.jpg"
                alt="Our Vision"
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-monument uppercase text-3xl md:text-4xl text-pantone-black mb-4 font-bold">
                VISIÓN
              </h2>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80 leading-relaxed">
                Ser un referente en el ámbito arquitectónico, reconocidos por la
                calidad en el proceso, los resultados y el enfoque humano. Nos
                enfocamos en la eficiencia del diseño, el uso de la energía y la
                tecnología de vanguardia para alcanzar la excelencia.
              </p>
            </div>
          </div>
        </div>

        {/* Expertise Section */}
        <div>
          <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-8 text-center font-bold">
            EXPERTIS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/1.jpg"
                alt="Architectural Design"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Diseño arquitectónico
              </h3>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
                Soluciones integrales desde el concepto inicial hasta la
                construcción final.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/3.jpg"
                alt="Desarrollo de espacios urbanos"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Desarrollo de espacios urbanos
              </h3>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
                Creación de espacios urbanos vibrantes y funcionales.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/2.jpg"
                alt="Proyectos de ingeniería"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Proyectos de ingeniería
              </h3>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
                Experiencia en ingeniería estructural, hidrosanitaria, eléctrica
                e hidráulica.
              </p>
            </div>
            <div className="bg-pantone-719/10 p-6 rounded-lg">
              <img
                src="/assets/images/1.jpg"
                alt="Gestión de proyectos"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="font-monument text-pantone-7515 mb-2 font-bold">
                Gestión de proyectos
              </h3>
              <p className="font-abc-monument text-lg md:text-xl text-pantone-black/80">
                Supervisión, presupuestación y programación para proyectos de
                cualquier tamaño.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyInfo;
