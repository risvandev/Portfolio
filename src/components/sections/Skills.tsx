import { Shield, Code, Terminal, Lock, Globe, Database } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

interface Skill {
  icon: React.ElementType;
  label: string;
}

const skills: Skill[] = [
  { icon: Shield, label: "Network Security" },
  { icon: Code, label: "Web Development" },
  { icon: Terminal, label: "System Administration" },
  { icon: Lock, label: "Cryptography" },
  { icon: Globe, label: "Full Stack" },
  { icon: Database, label: "Databases" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-32 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
      
      <div className="container px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              Skills
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Areas of focus
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
              Technologies and domains I'm actively learning and working with.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <ScrollReveal key={skill.label} delay={0.1 + index * 0.05}>
                <div className="group flex items-center gap-4 p-5 rounded-xl bg-card/30 border border-border/30 hover:border-border/60 hover:bg-surface/50 transition-all duration-400">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                    <skill.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <span className="text-sm md:text-base text-foreground/80 font-medium">
                    {skill.label}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;