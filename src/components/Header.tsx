import { Button } from "@/components/ui/button";
import { Leaf, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg">
              Plant Health <span className="text-primary">Advisory</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("diagnosis")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Diagnosis
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              About
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("diagnosis")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <nav className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("diagnosis")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Diagnosis
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About
              </button>
              <Button
                onClick={() => scrollToSection("diagnosis")}
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full w-full mt-2"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
