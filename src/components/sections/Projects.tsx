import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { motion } from "framer-motion";


import { projects, Project } from "@/data/projects";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

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
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}

            <ScrollReveal delay={0.4}>
              <Link to="/projects" className="group relative h-full min-h-[200px] flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-card/30 border border-border/30 hover:border-primary/50 hover:bg-surface/50 transition-all duration-500 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <ArrowRight className="w-8 h-8 text-primary group-hover:translate-x-1 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-medium text-foreground mb-2">See All Projects</h3>
                <p className="text-muted-foreground text-sm">View the complete archive of my work</p>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;