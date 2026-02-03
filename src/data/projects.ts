
export interface Project {
    title: string;
    description: string;
    tags: string[];
    liveUrl?: string;
    githubUrl?: string;
    openInNewTab?: boolean;
}

export const projects: Project[] = [
    {
        title: "Growrin - All-in-One Financial Calculator",
        description: "A comprehensive financial tool designed to simplify complex calculations for investment, savings, and loan planning.",
        tags: ["Finance", "Web App", "Calculator", "React", "Utility"],
        liveUrl: "https://growrin.vercel.app/",
        openInNewTab: true
    },
    {
        title: "AI Chat Bot",
        description: "An intelligent conversational agent capable of understanding context and providing helpful responses.",
        tags: ["AI", "NLP", "React", "OpenAI API"],
        githubUrl: "#",
        openInNewTab: true
    },
    {
        title: "E-commerce Platform",
        description: "A full-featured online store with product management, shopping cart, and secure checkout functionality.",
        tags: ["E-commerce", "React", "Node.js", "Stripe"],
        liveUrl: "#",
        openInNewTab: true
    },
    {
        title: "Lebrinex - Modern Library Management",
        description: "Lebrinex is a modern library management system built to explore and streamline core library workflows through a clean, intuitive web interface.",
        tags: ["Web Application", "React", "Vite", "Authentication", "UI/UX", "Frontend Development"],
        liveUrl: "https://lebrinex.vercel.app/",
        openInNewTab: true
    },
    {
        title: "TilawaNow — Quran Reading & Recitation Platform",
        description: "TilawaNow is a Qur’an learning platform that brings recitation, meanings, and contextual understanding together in a clean, focused web experience.",
        tags: ["Web Application", "React", "Vite", "PWA", "Audio Playback", "AI Integration"],
        liveUrl: "https://tilawanow.vercel.app/",
        openInNewTab: true
    },
    {
        title: "Auth Flow",
        description: "Authentication library implementing modern security practices including PKCE, token rotation, and secure storage.",
        tags: ["Node.js", "OAuth", "Security"],
        githubUrl: "#",
        openInNewTab: true
    },
];
