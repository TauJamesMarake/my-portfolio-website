import { FlutterIcon, KotlinIcon, DartIcon, TypeScriptIcon, GitIcon, PyIcon, JavaScriptIcon, CSharpIcon, HtmlIcon, ReactIcon, CssIcon, nodejs } from './icons';
// import { VSCodeIcon, FigmaIcon, PhotoShop, CanvaIcon } from './icons';

const techStack = [
    { icon: <img src={FlutterIcon} width={35} height={35} alt="flutter icon" />, label: 'FLUTTER' },
    { icon: <img src={DartIcon} width={35} height={35} alt="dart icon" />, label: 'DART' },
    { icon: <img src={CSharpIcon} alt="csharp icon" />, label: 'C# ASP.NET' },
    { icon: <img src={PyIcon} width={40} height={40} alt="python icon" />, label: 'PYTHON' },
    { icon: <img src={JavaScriptIcon} alt="javascript icon" />, label: 'JAVASCRIPT' },
    { icon: <img src={TypeScriptIcon} alt="typescript icon" />, label: 'TYPESCRIPT' },
    { icon: <img src={ReactIcon} alt="react icon" />, label: 'REACT' },
    { icon: <img src={HtmlIcon} alt="html icon" />, label: 'HTML5' },
    { icon: <img src={CssIcon} alt="css icon" />, label: 'CSS' },
    { icon: <img src={GitIcon} alt="git icon" />, label: 'GIT' },
    { icon: <img src={nodejs} alt="node icon" />, label: 'NODE.JS' },
    { icon: <img src={KotlinIcon} width={40} height={40} alt="kotlin icon" />, label: 'KOTLIN' }
];

// const tools = [
//     { icon: <img src={VSCodeIcon} width={40} height={40} alt='vscode' />, label: 'VSCode' },
//     { icon: <img src={FigmaIcon} alt='figma icon' />, label: 'Figma' },
//     { icon: <img src={PhotoShop} alt='adobe photoshop icon' />, label: "Adobe Photoshop" },
//     { icon: <img src={CanvaIcon} alt='canva icon' />, label: "Canva" }
// ]

export { techStack };