const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30">
      <div className="container px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <span className="font-mono">MHD Risvan © 2025</span>
          <div className="flex items-center gap-6">

            <a
              href="https://www.linkedin.com/in/muhammedrisvan"
              target="_blank"
              rel="noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:mhdrisvan747@gmail.com"
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;