import React from 'react';
import { Home, User, FileText, Briefcase, MessageSquare, Mail } from 'lucide-react';
import profilePicture from '../images/profile_picture.jpg'

// Receives the current page and a function to change pages from Main.js

function Sidebar({ activePage, onPageChange }) {

    const MenuItems = [
        { icon: Home, label: 'HOME' },
        { icon: User, label: 'ABOUT ME' },
        { icon: FileText, label: 'RESUME' },
        // { icon: Briefcase, label: 'PORTFOLIO' },
        { icon: MessageSquare, label: 'PROJECTS' },
        { icon: Mail, label: 'CONTACT ME' },
    ];

    return (
        <div className='sidebar'>
            {/* PROFILE IMAGE */}
            <div className='sidebar-profile'>
                <img
                    src={profilePicture}
                    alt='Profile'
                />
            </div>

            {/* NAVIGATION MENU: Map through menu items to create clickable links */}
            <nav className='slidebar-nav'>
                {MenuItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div
                            key={index}
                            // Add 'active' class if this item is the current page
                            className={`nav-item ${activePage === index ? 'active' : ''}`}
                            // Call the onPageChange function passed from the Main.js
                            onClick={() => onPageChange(index)}
                        >
                            <Icon size={18} />
                            <span className='slidebar-label'>{item.label}</span>
                        </div>
                    );
                })}
            </nav>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Tau J. Marake</p>
            </div>
        </div>
    );
}

export default Sidebar;