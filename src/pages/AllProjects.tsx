
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "../data/projects";

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground py-20 px-6">
            <div className="container max-w-5xl mx-auto">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">All Projects</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl">
                        A comprehensive list of my open source projects, experiments, and applications.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative p-6 md:p-8 rounded-2xl bg-card/50 border border-border/50 hover:border-border hover:bg-surface transition-all duration-500 flex flex-col h-full"
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-4">
                                    <h3 className="text-xl font-medium text-foreground group-hover:text-primary transition-colors duration-300">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-3">
                                        {project.githubUrl && (
                                            <a
                                                href={project.githubUrl}
                                                target={project.openInNewTab ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                                aria-label="View on GitHub"
                                            >
                                                <Github className="w-5 h-5" />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a
                                                href={project.liveUrl}
                                                target={project.openInNewTab ? "_blank" : undefined}
                                                rel="noopener noreferrer"
                                                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                                                aria-label="View live project"
                                            >
                                                <ExternalLink className="w-5 h-5" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className="text-muted-foreground leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
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
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
