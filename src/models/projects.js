import { ReactComponent as MoonIcon, } from '../icons/moon.svg';
import { ReactComponent as SunIcon } from '../icons/sun.svg';
import { ReactComponent as FIcon } from '../icons/f.svg';
import { ReactComponent as SquareCaretIcon } from '../icons/square-caret-right.svg';


// PROJECT LIST:
export const projects = [

    {
        name: 'MAS Automotive',
        tech: 'HTML5, CSS3, JavaScript, PHP, MySQL, Apache',
        text: 'MAS Auto – Automotive Workshop Website. A production-ready multi-page business website built for MAS Auto, a professional automotive workshop in Polokwane, South Africa. Features a dark automotive aesthetic theme, smooth scroll animations, filterable gallery with lightbox, service booking form with WhatsApp deep-link redirect, embedded Google Maps, and a PHP/MySQL backend with PHPMailer for enquiry handling.',
        image: <SquareCaretIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://mas-automotive.vercel.app"
    },
    {
        name: 'LEADit (Mini CRM)',
        tech: 'JavaScript, React.js, Node.js, Express.js, PostgreSQL(Supabase), Render',
        text: 'A simple yet functional CRM system that allows a business owner or admin to: view leads coming from website contact forms, update lead status (new → contacted → converted), add follow-up notes, manage leads from a secure admin panel. This mirrors how real-world companies manage incoming clients.',
        image: <SunIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: 'https://leadit-eight.vercel.app/'
    },
    {
        name: 'Student Accommodation Website',
        tech: "HTML5, CSS3, JavaScript, Node.js",
        text: "A full-stack web application designed to streamline the student housing application process. Users can browse available rooms, submit accommodation applications with integrated NSFAS funding support, and provides administrators with a comprehensive dashboard to manage applications efficiently.",
        image: <SunIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://taujamesmarake.github.io/student-accommodation/index.html"
    },
    {
        name: 'Professional Web Portfolio',
        tech: 'JavaScript, React.js, Node.js, PostgreSQL(Supabase)',
        text: 'A well-built portfolio website shows: What I can build, How I think as a developer, How professionally I present myself',
        image: <SquareCaretIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://jtaumarake-portfolio.vercel.app"
    },
    {
        name: 'Quiet Websites',
        tech: 'HTML5, CSS3, JavaScript',
        text: 'A collection of minimal web experiences that do very little, on purpose. They don\'t chase attention, collect data, or demand interaction. Each site focuses on one calm, thoughtful concept, using CLEAN design and lightweight code to create reflective moments on the web.',
        image: <MoonIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://taujamesmarake.github.io/quiet-websites/index.html"
    },
    {
        name: 'Future Self Messenger',
        tech: 'HTML5, CSS3, JavaScript, Node.js, Express, PostgreSQL',
        text: 'A full Stack web app for sending scheduled emails to your future self. fetaures real-time scheduling, automated email delivery, and a modern responsive UI',
        image: <FIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://github.com/TauJamesMarake/future-self-massenger"
    },
    {
        name: 'Todo REST API',
        tech: 'Vanilla HTML, CSS, JavaScript, Java21, Spring Boot, Maven',
        text: 'A fully functional REST API built with Java Spring Boot, serving as a learnign project for developers transitioning from C# ASP.NET Core. Every concept is mapped and explained side-by-side between the two ecosystems.',
        image: <MoonIcon style={{ fill: '#ffa500', width: '70px', height: '55px', padding: '4px' }} />,
        link: "https://github.com/TauJamesMarake/todoapi-java",
    },
];