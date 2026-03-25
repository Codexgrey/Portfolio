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


export const devworks = [
    {
        id: 1,
        title: "NASA Media Library API",
        img: NasaSearch,
        link: "https://codexgrey.github.io/NASA-Search/",
        repo: "https://github.com/Codexgrey/NASA-Search",
    },

    {
        id: 2,
        title: "My portfolio",
        img: Portfolio,
        link: "https://Codexgrey.github.io/Portfolio",
        repo: "https://github.com/Codexgrey/Portfolio",
    },

    {
        id: 3,
        title: "Events Website",
        img: KAC233,
        link: "https://codexgrey.github.io/KAC233/",
        repo: "https://github.com/Codexgrey/KAC233",
    },

    {
        id: 4,
        title: "Social Proof Section",
        img: SocialProofSection,
        link: "https://codexgrey.github.io/Social-Proof-Section/",
        repo: "https://github.com/Codexgrey/Social-Proof-Section",
    },

    {
        id: 5,
        title: "Javascript - PIG GAME APP",
        img: ThePIGGame,
        link: "https://codexgrey.github.io/The-PIG-Game/",
        repo: "https://github.com/Codexgrey/The-PIG-Game",
    },

    {
        id: 6,
        title: "BUDGET APP",
        img: BudgetApp,
        link: "https://codexgrey.github.io/Budget-App/",
        repo: "https://github.com/Codexgrey/Budget-App",
    },
];