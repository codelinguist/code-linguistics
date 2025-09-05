import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur-md z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-xl font-bold text-primary">
          SA Portfolio
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-smooth">
            About
          </a>
          <a href="#blog" className="text-muted-foreground hover:text-primary transition-smooth">
            Blog
          </a>
          <Button variant="hero" size="sm">
            Contact
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;