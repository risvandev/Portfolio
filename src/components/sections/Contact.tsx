import { Check, Copy, Github, Linkedin, Mail, MapPin } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import { useState } from "react";

const EMAIL = "risvandev@gmail.com";

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contact" className="py-28 relative">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">
              Contact
            </span>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">
              Open to opportunities.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg max-w-2xl">
              I’m currently based in Kochi and looking for software development,
              Python, and CSE internship opportunities alongside my degree.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <div className="mt-10 pt-8 border-t border-border/40">
              <p className="text-sm font-mono uppercase tracking-wider text-primary/80 mb-4">
                Email
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-2xl md:text-3xl font-medium tracking-tight text-foreground hover:text-primary transition-colors break-all"
                >
                  {EMAIL}
                </a>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyEmail}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-muted-foreground border border-border/40 hover:text-foreground hover:border-border transition-colors"
                    aria-label="Copy email address"
                  >
                    {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    {copied ? "Copied" : "Copy"}
                  </button>

                  <a
                    href={`mailto:${EMAIL}`}
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-sm bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                  >
                    <Mail className="w-4 h-4" />
                    Mail
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7 text-sm text-muted-foreground">
                <a href="https://github.com/risvandev" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/muhammedrisvan" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-foreground transition-colors">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Kochi, Kerala
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;