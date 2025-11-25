import React from "react";
import ProjectReference from "./ProjectReference";

const ProjectInfo = ({ project }) => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="font-cardinal text-3xl md:text-4xl text-pantone-black mb-4">
            Información del Proyecto
          </h2>

          <p className="font-abc-monument text-justify text-base text-pantone-black/80 leading-relaxed mb-6">
            {project.description}
          </p>
          {/* Project Reference */}
          {project.reference && (
            <div className="mt-6">
              <ProjectReference reference={project.reference} />
            </div>
          )}
        </div>
        <div>
          <h2 className="font-cardinal text-3xl md:text-4xl text-pantone-black mb-4">
            Detalles
          </h2>
          <ul className="font-supreme text-base text-pantone-black/80 leading-relaxed space-y-2">
            {project.details.map((detail) => (
              <li key={detail.label}>
                <span className="font-monument text-pantone-7515">
                  {detail.label}:
                </span>{" "}
                {detail.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
