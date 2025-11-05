const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold gradient-text mb-2">Divyesh Idhate</h3>
            <p className="text-muted-foreground">Website Designer & Developer</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <a 
              href="https://www.fiverr.com/s/P2oVVwP" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-glow transition-colors font-medium"
            >
              Hire me on Fiverr
            </a>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
