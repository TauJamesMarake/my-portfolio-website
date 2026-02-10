import React from 'react';
import { Linkedin, Instagram, Github, Mail } from 'lucide-react';

function SocialIcons() {
    // Each social platform has an icon and a label for accessibility
    const socials = [
        { icon: Linkedin, label: 'Linkedin', url: 'https://linkedin.com/in/tau-marake' },
        { icon: Github, label: 'Github', url: 'https://github.com/TauJamesMarake' },
        { icon: Instagram, label: 'Instagram', url: 'https://instagram.com/richsoulokiid' },
        { icon: Mail, label: 'Mail', url: 'mailto:jtaumarake@gmail.com' }
    ];

    return (
        <div className='social-icons'>
            {/* MAP THROUGH SOCIALS: Create an icon for each platform */}
            {socials.map((social, index) => {
                const Icon = social.icon;
                return (
                    <a
                        key={index}
                        href={social.url}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='social-icon'
                        title={social.label} // tooltip on hover
                        aria-label={social.label} // accessibility
                    >
                        <Icon size={20} />
                    </a>
                );
            })}
        </div>
    );
}

export default SocialIcons;