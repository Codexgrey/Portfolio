/**
 * How do I display images from Google Drive on a react front-end website?

    - Obtain the public link of your uploaded google drive image:
      e.g https://drive.google.com/file/d/1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl/view?usp=sharing
      
    - Extract the id from the link: id = 1JP0HZf4Gd5d9ohXX6rVyuMwuZJ-369Bl
    
    - DROPBOX change end of link from "dl=0" to "raw=1"
    - NOW* just -> remove "&st=76ttj6qk" and set dl=1
 */

import NasaSearch from "./img/2NASA-Search.png";
import Portfolio from "./img/0portfolio.png";
import KAC233 from "./img/1KAC233.png";
import SocialProofSection from "./img/4Social-Proof-Section.png";
import ThePIGGame from "./img/3The-PIG-Game.png";
import BudgetApp from "./img/5Budget-App.png";
import RAGSystem from "./img/12RAG-System.png";
import AISlideGenerator from "./img/13AI-Slide-Generator.png";


export const devworks = [
    {
        id: 7,
        title: "Multi-Retrieval RAG System",
        img: RAGSystem,
        link: "https://github.com/Codexgrey/capstone_RAG",
        repo: "https://github.com/Codexgrey/capstone_RAG",
        description: "AI-native RAG platform comparing Vector/Keyword/Hybrid retrieval, built with a 5-person team.",
    },

    {
        id: 8,
        title: "AI Slide Deck Generator",
        img: AISlideGenerator,
        link: "https://github.com/Codexgrey/ai-slide-generator",
        repo: "https://github.com/Codexgrey/ai-slide-generator",
        description: "AI presentation tool built at a university AI research center with a 3-person team.",
    },

    {
        id: 1,
        title: "NASA Media Library API",
        img: NasaSearch,
        link: "https://codexgrey.github.io/NASA-Search/",
        repo: "https://github.com/Codexgrey/NASA-Search",
        description: "React SPA searching NASA's image & video library, with pagination and asset-type filters.",
    },

    {
        id: 2,
        title: "My portfolio",
        img: Portfolio,
        link: "https://Codexgrey.github.io/Portfolio",
        repo: "https://github.com/Codexgrey/Portfolio",
        description: "This site — a React portfolio with light/dark mode and project galleries.",
    },

    {
        id: 3,
        title: "Events Website",
        img: KAC233,
        link: "https://codexgrey.github.io/KAC233/",
        repo: "https://github.com/Codexgrey/KAC233",
        description: "Workshop/event website built to practice HTML, CSS, and JavaScript.",
    },

    {
        id: 4,
        title: "Social Proof Section",
        img: SocialProofSection,
        link: "https://codexgrey.github.io/Social-Proof-Section/",
        repo: "https://github.com/Codexgrey/Social-Proof-Section",
        description: "Frontend Mentor coding challenge — a responsive social proof/testimonials section.",
    },

    {
        id: 5,
        title: "Javascript - PIG GAME APP",
        img: ThePIGGame,
        link: "https://codexgrey.github.io/The-PIG-Game/",
        repo: "https://github.com/Codexgrey/The-PIG-Game",
        description: "Two-player dice game built with vanilla JavaScript, DOM manipulation, and event handling.",
    },

    {
        id: 6,
        title: "BUDGET APP",
        img: BudgetApp,
        link: "https://codexgrey.github.io/Budget-App/",
        repo: "https://github.com/Codexgrey/Budget-App",
        description: "Income/expense budget tracker built with vanilla JavaScript.",
    },
];