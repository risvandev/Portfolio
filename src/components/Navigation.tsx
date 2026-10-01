import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };
  return (
    <>
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? "py-4 bg-background/85 backdrop-blur-xl border-b border-border/30" : "py-6 bg-transparent"}`}>
        <div className="container px-6 md:px-8"><nav className="flex items-center justify-between">
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-lg font-semibold tracking-tight text-foreground hover:text-primary">RISVAN</button>
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map(item => <li key={item.label}><button onClick={() => scrollToSection(item.href)} className="text-sm text-muted-foreground hover:text-foreground">{item.label}</button></li>)}
          </ul>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-muted-foreground" aria-label="Toggle menu">
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav></div>
      </motion.header>
      <AnimatePresence>
        {isMobileMenuOpen && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            {navItems.map((item,index)=><motion.button key={item.label} initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:index*0.05}} onClick={()=>scrollToSection(item.href)} className="text-2xl font-medium text-foreground/85 hover:text-primary">{item.label}</motion.button>)}
          </nav>
        </motion.div>}
      </AnimatePresence>
    </>
  );
};
export default Navigation;