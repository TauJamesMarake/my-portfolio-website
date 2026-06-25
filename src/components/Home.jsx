import React from 'react';
import profilePicture from '../images/profile_picture.jpg';
import { FlutterIcon, JavaScriptIcon, CSharpIcon, ReactIcon, } from '../models/icons.js';

function Home({ onNavigate }) {
    return (
        <div className="page home-page">
            {/* LEFT SIDE */}
            <div className="home-content">
                <h2>TAU <span className='middle-name'>J. </span>MARAKE</h2>

                {/* TAGLINES */}
                <div className="home-tagline-title bio">
                    <h1>Full Stack Developer & <br />Digital Systems Builder</h1>
                    <div className="subtitle">
                        <span className='icon'>
                            <img src={FlutterIcon} alt='flutter' /> Flutter
                        </span>
                        <span className='icon'>
                            <img src={CSharpIcon} alt="csharp" /> C# ASP .NET
                        </span>
                        <span className='icon'>
                            <img src={JavaScriptIcon} alt="JavaScript" /> JavaScript
                        </span>
                        <span className='icon'>
                            <img src={ReactIcon} alt="react" /> React.js
                        </span>
                    </div>
                </div>
                <br />

                {/* DESCRIPTION */}
                <p className="home-description">
                    I build software that solves real business problems.<br />
                    From client websites and management systems to internal business tools. I design and develop digital solutions that work in the real world.<br /><br />
                    <em>Johannesburg, Gauteng.</em>
                </p>

                {/* CTA ABOUT ME BUTTON */}
                <button className="home-btn" onClick={() => onNavigate(1)}>
                    <span>SEE THE WORKS</span>
                </button>
            </div>

            {/* RIGHT SIDE - profile picture */}
            <div className="home-image">
                <div className="home-image-circle">
                    <img
                        src={profilePicture}
                        alt="Tau - Software / Web Developer"
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;