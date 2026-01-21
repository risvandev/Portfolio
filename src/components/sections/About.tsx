import ScrollReveal from "../ScrollReveal";

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              About
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
              Building with intention
            </h2>
          </ScrollReveal>

          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <ScrollReveal delay={0.2}>
              <p>
                I’m Muhammed Risvan, a higher secondary student and self-taught learner with a long-standing curiosity about how systems work — and how they can be made more secure and reliable. My interest lies at the intersection of cybersecurity and software development, where understanding structure matters as much as writing code.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p>
                My curiosity around hacking started early. Once I had access to a computer, I naturally gravitated toward exploring how things worked beneath the surface. Stories and work from people like Jonathan James, Michael Calce, and Ryan Montgomery shaped my perspective early on — not as shortcuts, but as reminders that curiosity, when guided well, can become a discipline.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-foreground/80">
                Rather than chasing trends, I focus on building a solid foundation. I learn by doing: creating applications, experimenting in controlled environments, working with vulnerable virtual machines, and understanding why systems behave the way they do. Building real projects helps me think clearly about security, structure, and long-term reliability.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="text-foreground/80">
                Currently, I’m deepening my understanding of cybersecurity fundamentals while actively developing real-world applications. My goal is to grow steadily, combining hands-on development with a security-first mindset, and to build systems that are not just functional — but trustworthy.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;