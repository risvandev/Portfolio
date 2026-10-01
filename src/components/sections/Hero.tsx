import { motion } from "framer-motion";
import { ArrowDown, Github, Mail, MapPin } from "lucide-react";

const Hero = () => (
  <section className="relative min-h-[100svh] flex items-start md:items-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/30" />
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[560px] md:w-[720px] h-[440px] md:h-[520px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

    <div className="container relative z-10 px-6 md:px-8 pt-32 pb-20 md:pt-0 md:pb-0">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-2 text-xs sm:text-sm font-mono text-primary/80 mb-5 md:mb-6"
        >
          <MapPin className="w-4 h-4 shrink-0" />
          Kochi, Kerala
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className="max-w-xl text-xs sm:text-sm font-mono uppercase tracking-[0.18em] sm:tracking-[0.2em] text-muted-foreground mb-4"
        >
          Computer Science & Engineering Student
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[3.2rem] leading-[0.96] sm:text-6xl sm:leading-none md:text-7xl lg:text-8xl font-semibold tracking-tight mb-7 md:mb-6"
        >
          Muhammed <span className="block sm:inline text-gradient-accent">Risvan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
        >
          I build software, explore systems, and learn by shipping real projects.
          Currently focused on <span className="text-foreground">Python</span>,
          software development, and privacy-focused applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="flex flex-wrap gap-3 mt-9 md:mt-10"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-primary text-primary-foreground text-sm sm:text-base font-medium hover:opacity-90 transition-opacity"
          >
            View Projects
            <ArrowDown className="w-4 h-4" />
          </a>

          <a
            href="https://github.com/risvandev"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-border bg-card/40 text-foreground text-sm sm:text-base hover:bg-surface transition-colors"
          >
            <Github className="w-4 h-4" />
            GitHub
          </a>

          <a
            href="mailto:risvandev@gmail.com"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg border border-border bg-card/40 text-foreground text-sm sm:text-base hover:bg-surface transition-colors"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </motion.div>
      </div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-7 md:bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 hidden sm:block"
    >
      <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
        <ArrowDown className="w-5 h-5" />
      </motion.div>
    </motion.div>
  </section>
);

export default Hero;