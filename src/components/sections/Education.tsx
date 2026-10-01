import ScrollReveal from "../ScrollReveal";

const Education = () => (
  <section id="education" className="py-28 relative">
    <div className="container px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
            Education
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-10">
            Academic background
          </h2>
        </ScrollReveal>

        <div className="border-y border-border/40 divide-y divide-border/40">
          {[
            {
              period: "2026 — 2030",
              title: "B.Tech — Computer Science & Engineering",
              place: "Albertian Institute of Science and Technology (AISAT), Kochi",
              detail: "Currently pursuing",
            },
            {
              period: "2026",
              title: "Higher Secondary — Computer Science",
              place: "Govt. HSS Karuvanpoyil, Kozhikode",
              detail: "Kerala State Board · 90%",
            },
            {
              period: "2024",
              title: "Secondary School",
              place: "St. Mary's Higher Secondary School, Koodathai",
              detail: "Kerala State Board · 97%",
            },
          ].map((item, index) => (
            <ScrollReveal key={item.title} delay={0.12 + index * 0.08}>
              <article className="grid md:grid-cols-[120px_1fr] gap-3 md:gap-10 py-7">
                <div className="font-mono text-xs text-primary/80 pt-1">
                  {item.period}
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-medium">{item.title}</h3>
                  <p className="text-muted-foreground mt-1">{item.place}</p>
                  <p className="text-sm text-foreground/70 mt-3">{item.detail}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Education;