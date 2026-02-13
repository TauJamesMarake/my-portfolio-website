import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import SocialIcons from './components/SocialIcons';
import Home from './components/Home';
import About from './components/About';
import Resume from './components/Resume';
// import Portfolio from './components/Portfolio';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
    // State management
    const [activePage, setActivePage] = useState(0);
    const [slideDirection, setSlideDIrection] = useState('');


    // THis function determines the slide dorection and updates the active page
    const handlePageChange = (newPage) => {
        setSlideDIrection(newPage > activePage ? 'left' : 'right');
        setActivePage(newPage);
    };

    return (
        <><div className='app-container'>
            {/* SIDEBAR: Navigation menu component */}
            <Sidebar activePage={activePage} onPageChange={handlePageChange} />

            {/* MAIN CONTENT: Container with 3D persepective for page transitions */}
            <div className='content-wrapper'>
                {/* This div applies the slide animation classes dynamically */}
                <div className={`pages-container slide-${slideDirection}`}>
                    {/* Render the active page component */}
                    {activePage === 0 && <Home onNavigate={handlePageChange} />}
                    {activePage === 1 && <About />}
                    {activePage === 2 && <Projects />}
                    {activePage === 3 && <Resume />}
                    {/* {activePage === 3 && <Portfolio />} */}
                    {activePage === 4 && <Contact />}
                </div>
            </div>

            {/* SOCIAL ICONS */}
            <SocialIcons />
        </div><Router>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </Router></>
    );
}

export default App;