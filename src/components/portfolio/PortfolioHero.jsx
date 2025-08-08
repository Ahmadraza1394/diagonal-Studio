import React from "react";

const PortfolioHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-white overflow-hidden">
      <img
        src="/assets/images/IMG_9716.JPG"
        alt="Diagonal Studio Portfolio"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75"
        style={{ filter: "brightness(0.8) contrast(1.1)" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-pantone-black/60 via-pantone-black/40 to-transparent z-5"></div>
      <div className="relative z-10 px-4">
        <h1 className="font-monument-extended text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider text-white drop-shadow-lg">
          Nuestro Portafolio
        </h1>
        <p className="font-abc-monument text-lg md:text-xl mt-4 max-w-3xl mx-auto text-white/90 drop-shadow-md">
          Un escaparate de calidad, innovación y dedicación.{" "}
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
