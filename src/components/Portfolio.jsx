import React, { useState } from 'react';

function Portfolio() {
    // STATE: Track which filter is currently active
    // 'all' shows all projects, other values filter by category
    const [activeFilter, setActiveFilter] = useState('all');

    // PORTFOLIO PROJECTS DATA
    const projects = [
        {
            id: 1,
            category: 'app',
            image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&h=600&fit=crop',
            title: 'SyncSkills - Skills Audit Sytem'
        },
        {
            id: 2,
            category: 'web',
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
            title: 'AI Debate Arena'
        },
        {
            id: 3,
            category: 'app',
            image: 'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=800&h=600&fit=crop',
            title: 'Alpha Cinemas'
        },
        {
            id: 4,
            category: 'app',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop',
            title: 'Pet It'
        },
        {
            id: 5,
            category: 'graphic-design',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop',
            title: 'Posters, Flyers, Album Covers'
        },
        {
            id: 6,
            category: 'e-commerce',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop',
            title: 'Anna\'s Market'
        },
        {
            id: 7,
            category: 'music',
            image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&h=600&fit=crop',
            title: 'Rey Lion'
        }
    ];

    // FILTER PROJECTS: Only show projects matching the active filter
    // If filter is 'all', show everything
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="page">
            {/* PAGE HEADER */}
            <div className="about-header">
                <h1>PORTFOLIO</h1>
            </div>

            {/* FILTER BUTTONS: Click to filter projects by category */}
            <div className="portfolio-filters">
                <button
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('all')}
                >
                    ALL
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'web' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('web')}
                >
                    WEB DESIGN
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'app' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('app')}
                >
                    MOBILE APPLICATION
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'graphic-design' ? 'active' : ''}`}
                    onClick={() => setActiveFilter('print')}
                >
                    PRINT DESIGN
                </button>
            </div>

            {/* PROJECT GRID: Display filtered projects */}
            <div className="portfolio-grid">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="portfolio-item">
                        <img src={project.image} alt={project.title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;