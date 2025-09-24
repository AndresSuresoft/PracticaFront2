import React from "react";
import './ProjectCard.css';

// ⚠️ Usamos 'type' Project de manera directa
type Project = {
    id: number;
    title: string;
    description: string;
    image: string;
    link?: string;
};

type ProjectCardProps = {
    project: Project; 
};

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    return (
        <div className="card__container" key={project.id}>
            <img
                className="card__image"
                src={project.image}
                alt={project.title}
            />
            <h2 className="card__title">{project.title}</h2>
            <p className="card__description">{project.description}</p>

            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="card__button">Ver proyecto</button>
                </a>
            )}
        </div>
    );
};

export default ProjectCard;