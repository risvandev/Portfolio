import ScrollReveal from "../ScrollReveal";

const groups = [
  { title: "Programming", items: ["Python", "C++", "Java", "JavaScript", "HTML / CSS"] },
  { title: "Development", items: ["Flutter", "Dart", "Node.js", "REST APIs"] },
  { title: "Data & Backend", items: ["MySQL", "PostgreSQL", "Supabase"] },
  { title: "Systems & Tools", items: ["Git", "GitHub", "Linux", "Ubuntu", "Kali Linux"] },
  { title: "Security", items: ["Nmap", "Metasploit", "Networking Fundamentals"] },
  { title: "Focus", items: ["DSA", "OOP", "Automation", "Web Scraping", "AI Agents"] },
];

const Skills = () => (
  <section id="skills" className="py-28 relative">
    <div className="container px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
            Skills
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
            What I work with
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl">
            A practical stack I’m using while building depth in software and computer systems.
          </p>
        </ScrollReveal>

        <div className="divide-y divide-border/40 border-y border-border/40">
          {groups.map((group, index) => (
            <ScrollReveal key={group.title} delay={0.08 + index * 0.05}>
              <div className="grid md:grid-cols-[180px_1fr] gap-4 md:gap-10 py-7">
                <h3 className="text-sm font-mono uppercase tracking-wider text-primary/80">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-x-5 gap-y-3">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="text-base md:text-lg text-foreground/85 hover:text-foreground transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.4}>
          <p className="mt-7 text-sm text-muted-foreground">
            Currently improving depth in Python, DSA, backend development, and computer systems.
          </p>
        </ScrollReveal>
      </div>
    </div>
  </section>
);

export default Skills;