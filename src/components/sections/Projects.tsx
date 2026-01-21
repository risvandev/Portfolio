import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";


interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  openInNewTab?: boolean;
}

const projects: Project[] = [
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

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
        className="group relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-border hover:bg-surface transition-all duration-500"
      >
        {/* Hover glow effect */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="View on GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  aria-label="View live project"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono text-muted-foreground/80 px-3 py-1 rounded-full bg-secondary/50 border border-border/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              Projects
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Selected work
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              A collection of projects that reflect my learning journey and interests.
            </p>
          </ScrollReveal>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;