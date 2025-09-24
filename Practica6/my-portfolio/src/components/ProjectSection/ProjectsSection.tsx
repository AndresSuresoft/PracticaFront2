import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard"; 
import "../ProjectSection/ProjectSection.css";

import { type Project } from "../../data/ProjectData"; 

type ProjectsSectionProps = {
    projects: Project[]; 
};

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {

    return (
        <section className="projects__section">
            {projects.length === 0 ? (
                <p className="no-projects">“No projects to show yet!”.</p>
            ) : (
                <div className="cards-grid">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;