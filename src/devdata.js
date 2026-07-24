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
import ThePIGGame from "./img/3The-PIG-Game.png";
import RAGSystem from "./img/12RAG-System.png";
import AISlideGenerator from "./img/13AI-Slide-Generator.png";
import ThreadsForAgents from "./img/14Threads-for-Agents.png";


// The flagship, in-depth pieces of work; rendered larger with a Case Study modal
export const featuredWorks = [
    {
        id: 7,
        title: "Multi-Retrieval RAG System",
        img: RAGSystem,
        link: "https://github.com/Codexgrey/capstone_RAG",
        repo: "https://github.com/Codexgrey/capstone_RAG",
        description: "AI-native RAG platform comparing Vector/Keyword/Hybrid retrieval, built with a 5-person team.",
        caseStudy: {
            problem: "Compare retrieval strategies for grounding LLM answers in a document corpus, and determine which approach - pure vector, pure keyword, or a hybrid - gives the most accurate, hallucination-free answers.",
            contribution: "Designed and built the Vector Retrieval pipeline (FAISS + sentence-transformers), defined the shared ingest/retrieve API contract used across all three retrieval modules, and worked as Team Lead in a 5-person team spanning frontend, backend, and the other two retrieval strategies.",
            stack: ["React", "TypeScript", "FastAPI", "PostgreSQL", "FAISS", "ChromaDB", "Groq LLM", "JWT Auth"],
            outcome: "Benchmarked against 5,000+ TriviaQA questions with EM/F1, Precision@k, and MRR metrics; shipped a working chat UI with citation-grounded answers and per-method evaluation tooling.",
        },
    },

    {
        id: 8,
        title: "AI Slide Deck Generator",
        img: AISlideGenerator,
        link: "https://github.com/Codexgrey/ai-slide-generator",
        repo: "https://github.com/Codexgrey/ai-slide-generator",
        description: "AI presentation tool built at a university AI research center with a 3-person team.",
        caseStudy: {
            problem: "Build an AI tool that turns a topic or pasted content into a structured slide deck, as a feature for a university AI research center's in-house assistant.",
            contribution: "Built the core frontend flows - authentication (NextAuth), dashboard, the slide-generation form, and slide previews - working as Team Lead in a 3-person team.",
            stack: ["Next.js", "TypeScript", "Redux Toolkit", "NextAuth", "PostgreSQL", "Prisma", "Docker"],
            outcome: "Shipped as a feature on NEU's in-house AI system, \"Prof Dux\", built during summer 2025 training at the AIIT Center." +
                    " This project is currently private on GitHub due to its association with the university's internal systems." +
                    " It is currently being used by the AIIT Center to generate slide decks for internal presentations and research dissemination." +
                    " However, you can view the foundation of the project on my GitHub profile, where I have shared some of the code and documentation related to the AI Slides Generator.",
            
        },
    },

    {
        id: 9,
        title: "Threadnought: Threads for Agents",
        img: ThreadsForAgents,
        link: "https://github.com/Codexgrey/threads_for_Agents",
        repo: "https://github.com/Codexgrey/threads_for_Agents",
        description: "A Threads-style social feed built for AI agents to post, reply, and discover each other; solo project.",
        caseStudy: {
            problem: "Design and build a Threads-style social feed made for AI agents, with a spec covering good UX across desktop, mobile, and agents themselves: fast loads, Gmail sign-up, search, profiles, and a machine-readable site map.",
            contribution: "Built solo, end to end: the server-rendered feed (Next.js App Router, React Server Components), auth, search, and profiles, plus the agent-facing layer; a structured llms.txt site map and a JSON twin of every view under /api/*.",
            stack: ["Next.js", "React", "Tailwind CSS", "Drizzle ORM", "PostgreSQL", "NextAuth", "Cloudflare R2", "Vercel"],
            outcome: "Ships a fully working preview with zero infrastructure via an in-memory mock dataset (19 agent personas, ~60 posts); the same code path serves live Postgres data once wired up, with public JSON endpoints so agents can read the site without rendering JS.",
        },
    },

    {
        id: 1,
        title: "NASA Media Library API",
        img: NasaSearch,
        link: "https://codexgrey.github.io/NASA-Search/",
        repo: "https://github.com/Codexgrey/NASA-Search",
        description: "React SPA searching NASA's image & video library, with pagination and asset-type filters.",
        caseStudy: {
            problem: "Build a React SPA that lets users search and browse NASA's public Image & Video Library API, with pagination and asset-type filtering across images, audio, and video.",
            contribution: "Built solo: modular component architecture (Search, AssetDetail, Paginate, Spinner) with full client-side routing and pagination.",
            stack: ["React", "JavaScript", "CSS", "NASA Image & Video Library API"],
            outcome: "Deployed on GitHub Pages; a working search tool covering images, audio, and video assets with a detail view per result.",
        },
    },
];

// Smaller learning/practice projects; shown in a simpler grid below the featured work
export const practiceWorks = [
    {
        id: 2,
        title: "My portfolio",
        img: Portfolio,
        link: "https://Codexgrey.github.io/Portfolio",
        repo: "https://github.com/Codexgrey/Portfolio",
        description: "This site; a React portfolio with light/dark mode and project galleries.",
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
        id: 5,
        title: "Javascript - PIG GAME APP",
        img: ThePIGGame,
        link: "https://codexgrey.github.io/The-PIG-Game/",
        repo: "https://github.com/Codexgrey/The-PIG-Game",
        description: "Two-player dice game built with vanilla JavaScript, DOM manipulation, and event handling.",
    },
];
