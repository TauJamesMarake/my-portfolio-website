import React from 'react';
function Projects() {
    // PROJECT LIST:
    const projects = [
        {
            name: 'Quiet Websites (richsoulo)',
            tech: 'HTML5, CSS3, JavaScript',
            text: 'Quet Websites, a collection of minimal web experiences that do very little, on purpose. They Don\'t chase attention, collect data, or demand interaction. Each site focuses on one calm, thoughtful concept, using clean design and lightweight code to create reflective moments on the web.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop'
        },
        {
            name: 'Future Self Messenger',
            tech: 'HTML5, CSS3, JavaScript, Node.JS',
            text: 'TBD',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
        },
        {
            name: 'AI Debate Arena',
            tech: 'JavaScript, TypeScript, OpenAI',
            text: 'TBD',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
        },
        {
            name: 'Web Portfolio',
            tech: 'JavaScript, React.JS',
            text: 'This very own portfolio, intended to showcase my personal work and my React.js skills',
            image: ""
        },
        // {
        //     name: 'James',
        //     tech: 'Product Manager',
        //     text: 'Highly recommended! Sarita understood our vision perfectly and delivered exceptional results every time.',
        //     image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
        // }
    ];

    return (
        <div className="page">
            {/* PAGE HEADER */}
            <div className="about-header">
                <h1>PROJECTS</h1>
            </div>

            {/* Display projects cards */}
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        {/* CARD HEADER */}
                        <div className="project-header">
                            {/* <div className="project-avatar">
                                <img src={project.image} alt={project.name} />
                            </div> */}
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.tech}</p>
                            </div>
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