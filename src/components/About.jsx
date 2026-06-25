import React from 'react';
import { Briefcase } from 'lucide-react';
import { techStack } from '../models/techStack.js';
import { skills } from '../models/skills.js'

// Displays skills, services, and techstack
function About({ onNavigate }) {
    return (
        <div className="page">
            {/* PAGE HEADER: Title */}
            <div className="about-header">
                <h1>ABOUT</h1>
            </div>

            {/* INTRODUCTION SECTION */}
            <div className="about-intro">
                <h2>TAU JAMES MARAKE</h2>
                <p>
                    Information Technology graduate, Full-Stack Developer, and IT professional based in Johannesburg, Gauteng with a background that spans software development, system design and technical operations.
                    Graduated with an IT Diploma (NQF 6) from the Central University of Technology, 2026. During the academic years, I spent 2 years as an IT Student Assistant maintaining a computing environment of over 200 workstations and developing a practical foundation in systems administration alongside studies.
                    <br /><br />
                    My approach to software developement is shaped by a belief that technology must solve real problems for real people. My projects reflect this: a student accomodation plartform built for an active client, a live website for an automotive workshop in Polokwane and order management system designed to replace a broken spreadsheet workflow for a mineral distribution company (in production).
                    <br /><br />
                    Fluent in six (6) South African langauges, English, Sesotho, Setswana, Sepedi, IsiZulu, and IsiXhosa. I understand the business and cultural context of building software for the South African market.<br />
                    I'm currently available to Junior Developer roles, Freelance engagements, and Technology Consulting Work.
                </p>
            </div>

            {/* TWO COLUMN LAYOUT */}
            <div className="about-content">
                {/* LEFT COLUMN: What I Do, Skills/Services */}
                <div className="what-i-do">
                    <h3>Services</h3>

                    {/* Scrollable container */}
                    {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                            <div className="skill-icon">
                                <Briefcase size={30} />
                            </div>
                            <div className="skill-info">
                                <h4>{skill.title}</h4>
                                <p>{skill.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* RIGHT COLUMN */}
                <div className="tech-stack">
                    <h3>Tech Stack</h3>
                    <div className="skills-scroll-container">
                        <div className="tech-grid">
                            {/* MAP THROUGH TECH STACK */}
                            {techStack.map((tech, index) => (
                                <div key={index} className="tech-item">
                                    <div className="tech-icon">{tech.icon}</div>
                                    <div className="tech-label">{tech.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
