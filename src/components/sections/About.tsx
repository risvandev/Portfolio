import ScrollReveal from "../ScrollReveal";

const About = () => (
  <section id="about" className="py-28 relative">
    <div className="container px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">About</span>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Learning by building.</h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-[1.25fr_0.75fr] gap-10 md:gap-16">
          <div className="space-y-5 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={0.2}>
              <p>I’m Muhammed Risvan, a Computer Science & Engineering student at Albertian Institute of Science and Technology in Kochi. I enjoy understanding how software works beneath the surface and turning ideas into working applications.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p>I’m currently building my foundation in Python, C++, data structures, algorithms, Linux, databases, and software engineering. I learn fastest through practical projects, experimentation, and repeatedly improving systems I have already built.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <p>My main public project is <span className="text-foreground">MNDO</span>, an open-source privacy-focused decentralized messaging application. Alongside software development, I continue exploring cybersecurity, automation, web technologies, and AI-assisted development.</p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={0.25}>
            <div className="rounded-2xl border border-border/50 bg-card/40 p-6 h-fit">
              <p className="text-sm font-mono text-primary/80 uppercase tracking-wider mb-5">Current focus</p>
              <div className="space-y-4">
                {[
                  ["01", "Python & DSA"],
                  ["02", "Software Development"],
                  ["03", "Linux & Systems"],
                  ["04", "Cybersecurity Fundamentals"],
                  ["05", "AI & Automation"],
                ].map(([n, label]) => (
                  <div key={n} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">{n}</span>
                    <span className="text-sm text-foreground/85">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;