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
    title: "MNDO — Decentralized Messaging",
    description:
      "Open-source privacy-focused messaging application built with Flutter. Uses the Nostr protocol for decentralized communication, Signal Protocol-based end-to-end encryption, and encrypted local storage.",
    tags: ["Flutter", "Nostr", "Signal Protocol", "SQLCipher", "Open Source"],
    liveUrl: "https://mndo.online",
    githubUrl: "https://github.com/MNDO-Messenger/MNDO",
    openInNewTab: true,
  },
  {
    title: "TilawaNow",
    description:
      "Independent web project focused on Quran reading and recitation, built as a practical learning project and published online.",
    tags: ["Web", "React", "Vite", "PWA", "Open Source"],
    liveUrl: "https://tilawanow.vercel.app/",
    githubUrl: "https://github.com/risvandev/tilawanow",
    openInNewTab: true,
  },
];