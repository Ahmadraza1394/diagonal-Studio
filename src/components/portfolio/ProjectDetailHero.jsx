import React from "react";

const ProjectDetailHero = ({ project }) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center bg-pantone-black text-pantone-black overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-80"
        draggable={false}
      />
      <div className="relative z-10 px-4">
        <h1 className="font-monument text-4xl md:text-6xl lg:text-7xl uppercase tracking-wider">
          {project.title}
        </h1>
        <p className="font-museo text-lg md:text-xl mt-4 max-w-3xl mx-auto">
          {project.category}
        </p>
      </div>
    </section>
  );
};

export default ProjectDetailHero;
