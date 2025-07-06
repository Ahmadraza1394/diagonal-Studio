import React from 'react';
import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectDetailHero from '../components/portfolio/ProjectDetailHero';
import ProjectInfo from '../components/portfolio/ProjectInfo';
import ProjectGallery from '../components/portfolio/ProjectGallery';

const ProjectDetailsPage = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectDetailHero project={project} />
      <ProjectInfo project={project} />
      <ProjectGallery project={project} />
    </div>
  );
};

export default ProjectDetailsPage;
