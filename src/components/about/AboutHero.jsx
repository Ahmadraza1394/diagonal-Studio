import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-pantone-black overflow-hidden">
      <img
        src="/assets/images/1.jpg"
        alt="Diagonal Studio Team"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-75 "
        style={{ filter: "brightness(1) contrast(1.1)" }}
        draggable={false}
      />
      <div className="relative z-10 px-4">
        <h1 className="font-monument text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider">
          About Diagonal Studio
        </h1>
        <p className="font-museo text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          Crafting architectural narratives that blend innovation,
          sustainability, and timeless design.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
