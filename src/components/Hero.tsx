import { Button } from "@/components/ui/button";
import { Bird, Heart, Shield, Users } from "lucide-react";
import heroImage from "@/assets/hero-conservation.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20" />
      </div>

      {/* Floating Birds Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <Bird className="absolute top-20 left-20 w-8 h-8 text-sky bird-float opacity-70" />
        <Bird className="absolute top-40 right-32 w-6 h-6 text-accent bird-float opacity-60" style={{ animationDelay: '2s' }} />
        <Bird className="absolute bottom-40 left-40 w-7 h-7 text-primary bird-float opacity-50" style={{ animationDelay: '4s' }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto fade-in-up">
          {/* Logo/Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
              <Bird className="w-10 h-10 text-primary" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AAO_<span className="text-accent">Tunisie</span>
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-semibold text-white/90 mb-8">
            Protecting Birds, Preserving the Future
          </h2>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Tunisia's leading NGO for bird conservation, biodiversity protection, and sustainable ecosystems since 1975. 
            Partner of BirdLife International, we safeguard species, restore habitats, and inspire communities to live in harmony with nature.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="btn-conservation text-lg px-8 py-4 hover:scale-105 transition-transform"
            >
              <Shield className="mr-2 h-5 w-5" />
              Join Conservation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-8 py-4"
            >
              <Heart className="mr-2 h-5 w-5" />
              Learn More
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-white/80">Years of Conservation</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">200+</div>
              <div className="text-white/80">Bird Species Protected</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl font-bold text-accent mb-2">15</div>
              <div className="text-white/80">Protected Areas</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;