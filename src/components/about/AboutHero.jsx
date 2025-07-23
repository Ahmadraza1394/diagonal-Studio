import React from "react";

const AboutHero = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-pantone-black overflow-hidden">
      <img
        src="/assets/images/4.jpg"
        alt="Diagonal Team"
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-65"
        style={{ filter: "brightness(0.95) contrast(1.1)" }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/30 z-5"></div>
      <div className="relative z-10 px-4">
        <h1 className="font-monument-extended uppercase text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider text-white font-bold">
          About Us
        </h1>
        <p className="font-abc-monument text-lg md:text-2xl mt-4 max-w-3xl mx-auto text-white/90">
          Crafting architectural narratives that blend innovation,
          sustainability, and timeless design.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
