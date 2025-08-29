import { Target, Eye, Heart, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const Mission = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className="fade-in-up">
            <div className="mb-8">
              <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-primary font-medium">Our Purpose</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Building a Sustainable <span className="text-primary">Future</span>
              </h2>
            </div>

            <div className="space-y-8">
              {/* Mission */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg flex-shrink-0">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    To protect birds and their habitats, combat threats to biodiversity, and empower citizens 
                    and institutions to preserve Tunisia's natural heritage through science, education, and advocacy.
                  </p>
                </div>
              </div>

              {/* Vision */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-secondary/10 rounded-lg flex-shrink-0">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    A Tunisia where birds and people live in harmony, where every wetland, forest, and landscape 
                    is a sanctuary for life, and where conservation drives sustainable futures.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">Values</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Scientific integrity, community collaboration, environmental stewardship, and sustainable 
                    development that respects both nature and local communities.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Mission
              </Button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="relative fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative bg-gradient-to-br from-primary/5 via-sky/5 to-accent/5 rounded-3xl p-8 border border-primary/10">
              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-primary mb-2">1975</div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Programs</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-accent mb-2">200+</div>
                  <div className="text-sm text-muted-foreground">Species</div>
                </div>
                <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                  <div className="text-3xl font-bold text-earth mb-2">25</div>
                  <div className="text-sm text-muted-foreground">Sites</div>
                </div>
              </div>

              {/* Partnership Badges */}
              <div className="bg-white/30 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h4 className="font-semibold text-foreground mb-4">Key Partnerships</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span>BirdLife International Partner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span>UICN Member Organization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span>Ramsar Convention Partner</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-earth rounded-full"></div>
                    <span>AEWA Collaborative Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;