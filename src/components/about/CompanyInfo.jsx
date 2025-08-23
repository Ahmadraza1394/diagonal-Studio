import React from "react";

const CompanyInfo = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-monument text-3xl md:text-4xl text-pantone-black mb-6 font-bold">
          Nosotros
        </h2>
        <div className="space-y-5">
          <p className="font-abc-monument text-justify text-base md:text-lg text-pantone-black/80 leading-relaxed">
            Somos un estudio de arquitectura con más de 40 años de experiencia, especializado en el desarrollo de proyectos arquitectónicos y la ejecución de obra pública, privada e infraestructura con la más alta calidad.
          </p>
          <p className="font-abc-monument text-justify text-base md:text-lg text-pantone-black/80 leading-relaxed">
            Desarrollamos soluciones específicas para cada proyecto, con un equipo calificado y flexible que se adapta al tamaño y complejidad, manteniendo siempre la responsabilidad total.
          </p>
          <p className="font-abc-monument text-justify text-base md:text-lg text-pantone-black/80 leading-relaxed">
            Ejecutamos con control y calidad, visión integral y diseño con propósito: proyectos que funcionan, responden al contexto y generan valor a largo plazo.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="font-cardinal text-pantone-black/70 text-center">
            <span className="block text-2xl md:text-3xl font-bold text-pantone-black">40+ años</span>
            <span className="block text-sm">de experiencia</span>
          </div>
          <div className="font-cardinal text-pantone-black/70 text-center">
            <span className="block text-2xl md:text-3xl font-bold text-pantone-black">10,000 m²</span>
            <span className="block text-sm">construidos (últimos 5 años)</span>
          </div>
          <div className="font-cardinal text-pantone-black/70 text-center">
            <span className="block text-2xl md:text-3xl font-bold text-pantone-black">Ejecución</span>
            <span className="block text-sm">técnica con control y calidad</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyInfo;
