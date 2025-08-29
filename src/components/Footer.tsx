import { Bird, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Conservation Programs", href: "#programs" },
    { name: "Research", href: "#research" },
    { name: "Community", href: "#community" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "STOP! Braconnage", href: "#" },
    { name: "Sciences Citoyennes", href: "#" },
    { name: "Mini Club d'Ornithologie", href: "#" },
    { name: "ZICO Management", href: "#" },
    { name: "Migration Monitoring", href: "#" },
  ];

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Organization Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                  <Bird className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="font-bold text-xl">AAO_Tunisie</div>
                  <div className="text-sm text-secondary-foreground/70">Les Amis des Oiseaux</div>
                </div>
              </div>
              
              <p className="text-secondary-foreground/80 leading-relaxed">
                Tunisia's leading NGO for bird conservation, biodiversity protection, 
                and sustainable ecosystems since 1975.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Tunis, Tunisia</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>contact@aao-tunisie.org</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+216 XX XXX XXX</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Our Programs</h3>
              <ul className="space-y-3">
                {programs.map((program) => (
                  <li key={program.name}>
                    <a
                      href={program.href}
                      className="text-secondary-foreground/70 hover:text-primary transition-colors"
                    >
                      {program.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
              <p className="text-secondary-foreground/70 mb-4">
                Get updates on our conservation efforts and upcoming events.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="w-full btn-conservation">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-secondary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-secondary-foreground/60 text-sm">
              © 2024 AAO_Tunisie. All rights reserved. | Partner of BirdLife International
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;