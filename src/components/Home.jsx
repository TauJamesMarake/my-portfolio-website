import React from 'react';
import profilePicture from '../images/profile_picture.jpg';
import { FlutterIcon, JavaScriptIcon, CSharpIcon, ReactIcon, nodejs } from '../models/icons.js';

function Home({ onNavigate }) {
    return (
        <div className="page home-page">
            {/* LEFT SIDE */}
            <div className="home-content">
                <h2>TAU <span className='middle-name'>J. </span><span className="name">MARAKE</span></h2>

                {/* TAGLINES */}
                <div className="home-tagline-title bio text-center">
                    <span className="block sm:inline"><h1>Full - Stack Developer</h1></span>
                    <br className="hidden sm:block" />
                    <span className="block sm:inline subtitle" style={{ fontSize: 20 }}>
                        <div className='icon'>
                            <img src={FlutterIcon} height={15} width={15} alt='flutter' /> Flutter
                        </div>
                        <div className='icon'>
                            <img src={CSharpIcon} height={20} width={20} alt="csharp" /> C#
                        </div>
                        <div className='icon'>
                            <img src={JavaScriptIcon} height={20} width={20} alt="JavaScript" /> JavaScript
                        </div>
                        <div className='icon'>
                            <img src={ReactIcon} height={20} width={20} alt="react" /> React.js
                        </div>
                        <div className='icon'>
                            <img src={nodejs} height={20} width={20} alt="nodejs" style={{ objectFit: 'cover', objectPosition: 'top' }} />
                            Node.js
                        </div>
                    </span>
                    <br className="hidden sm:block" />
                </div>
                <br />

                {/* <h4 className='home-tagline'>OTHER...</h4> */}
                {/* <div className="home-tagline-title" style={{ fontSize: 18 }}>
                    IT Technician • Small Bsiness Owner (Anna's Spice & Treats)<br />
                    Indepedent Music Producer (Rey Lion, Distibuted via CDBaby).<br />
                    UI/UX Design • Graphic Design • Digital Artist
                </div> */}

                {/* <h4 className='home-tagline'>CREATIVE AND DESIGN</h4>
                <div className="home-tagline-title">
                    UI/UX Design • Graphic Design • Digital Artist
                </div>
                <br /> */}

                {/* <h4 className='home-tagline'>
                    READY TO HANDLE YOUR NEW PROJECT
                </h4> */}

                {/* DESCRIPTION */}
                <p className="home-description">
                    I build digital experiences that blend functionality, creativity, and intent, helping businesses get more customers and manage operations online. From crafted interfaces to structured systems, my work reflects a quiet precision.<br /><br />
                    There's more - <em>explore the craft behind the code.</em>
                </p>

                {/* CTA ABOUT ME BUTTON */}
                <button className="home-btn" onClick={() => onNavigate(1)}><span >MORE ABOUT ME</span></button>
            </div>

            {/* RIGHT SIDE */}
            <div className="home-image">
                <div className="home-image-circle">
                    <img
                        src={profilePicture}
                        alt="Tau - Software / Web Developer"
                    />
                </div>
            </div>
        </div >
    );
}

export default Home;