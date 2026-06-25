import React from 'react';
import { ReactComponent as ShareIcon } from '../icons/share-from-square.svg';
import { projects } from '../models/projects.js'

function Projects() {

    const handleVisitSite = (link) => {
        if (link) {
            window.open(link, '_blank', 'noopener,noreferrer');
        }
    };

    return (
        <div className="page">
            <div className="about-header">
                <h1>PROJECTS <span>({projects.length})</span></h1>
            </div>

            {/* Display project cards */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* CARD HEADER */}
                        <div className="project-header">
                            <div className="project-avatar">
                                {project.image}
                            </div>
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.tech}</p>
                            </div>

                            {/* VISIT SITE BUTTON */}
                            <button
                                className="project-link-btn"
                                onClick={() => handleVisitSite(project.link)}
                                disabled={!project.link}
                            >
                                {project.link ? <ShareIcon style={{ width: '25px', height: '25px' }} /> : 'Coming Soon'}
                            </button>
                        </div>

                        {/* PROJECT TEXT */}
                        <p className="project-text">{project.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
