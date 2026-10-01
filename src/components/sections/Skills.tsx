import { Code2, Database, Globe, Laptop, Network, ShieldCheck, Terminal } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const groups = [
  { icon: Code2, title: "Programming", items: ["Python", "C++", "Java", "JavaScript", "HTML / CSS"] },
  { icon: Laptop, title: "Development", items: ["Flutter", "Dart", "Node.js", "REST APIs"] },
  { icon: Database, title: "Data & Backend", items: ["MySQL", "PostgreSQL", "Supabase"] },
  { icon: Terminal, title: "Tools & Systems", items: ["Git", "GitHub", "Linux", "Ubuntu", "Kali Linux"] },
  { icon: ShieldCheck, title: "Security", items: ["Nmap", "Metasploit", "Networking Fundamentals"] },
  { icon: Globe, title: "Other Focus", items: ["DSA", "OOP", "Automation", "Web Scraping", "AI Agents"] },
];

const Skills = () => (
  <section id="skills" className="py-28 relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/20 to-transparent" />
    <div className="container px-6 md:px-8 relative z-10"><div className="max-w-4xl mx-auto">
      <ScrollReveal><span className="inline-block text-sm font-mono text-primary/80 tracking-wider uppercase mb-4">Skills</span></ScrollReveal>
      <ScrollReveal delay={0.1}><h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4">Tools I work with</h2></ScrollReveal>
      <ScrollReveal delay={0.15}><p className="text-muted-foreground text-lg mb-12 max-w-2xl">A practical stack I’m using while building my software and systems foundation.</p></ScrollReveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group,index)=>{const Icon=group.icon;return <ScrollReveal key={group.title} delay={0.08+index*0.05}><div className="h-full rounded-2xl bg-card/40 border border-border/40 p-5 hover:border-border/70 hover:bg-surface/50 transition-all">
          <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center mb-5"><Icon className="w-5 h-5 text-primary" /></div>
          <h3 className="font-medium mb-3">{group.title}</h3>
          <div className="flex flex-wrap gap-2">{group.items.map(item=><span key={item} className="text-xs font-mono text-muted-foreground px-2.5 py-1 rounded-md bg-background/40 border border-border/30">{item}</span>)}</div>
        </div></ScrollReveal>})}
      </div>
      <ScrollReveal delay={0.4}><div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground"><Network className="w-4 h-4 text-primary" /><span>Currently improving depth in Python, DSA, backend development, and computer systems.</span></div></ScrollReveal>
    </div></div>
  </section>
);
export default Skills;