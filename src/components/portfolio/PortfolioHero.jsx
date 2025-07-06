import React from "react";

const PortfolioHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-pantone-black overflow-hidden">
      <img
        src="/assets/images/2.jpg" // Replace with a suitable hero image
        alt="Diagonal Studio Portfolio"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-70"
        draggable={false}
      />
      <div className="relative z-10 px-4">
        <h1 className="font-monument text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider">
          Our Portfolio
        </h1>
        <p className="font-museo text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          A showcase of our commitment to design excellence and innovation.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
