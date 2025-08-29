import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bird, Menu, X, Heart, Shield, Users, BookOpen } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about", icon: Heart },
    { name: "Programs", href: "#programs", icon: Shield },
    { name: "Research", href: "#research", icon: BookOpen },
    { name: "Community", href: "#community", icon: Users },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Bird className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-xl text-foreground">AAO_Tunisie</div>
              <div className="text-xs text-muted-foreground">Les Amis des Oiseaux</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              FR | EN
            </Button>
            <Button className="btn-conservation">
              <Heart className="mr-2 h-4 w-4" />
              Donate
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-muted-foreground hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-border/50 shadow-lg">
            <nav className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="text-lg">{item.name}</span>
                </a>
              ))}
              <div className="pt-4 border-t border-border/30 space-y-3">
                <Button variant="ghost" className="w-full justify-start text-muted-foreground hover:text-primary">
                  FR | EN
                </Button>
                <Button className="w-full btn-conservation">
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;