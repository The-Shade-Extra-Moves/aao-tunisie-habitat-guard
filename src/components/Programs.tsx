import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Binoculars, 
  Camera, 
  GraduationCap, 
  MapPin, 
  Shield, 
  Users,
  ArrowRight,
  Leaf
} from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: Shield,
      title: "STOP! Braconnage",
      description: "Citizen reporting platform to combat illegal hunting and protect migratory birds.",
      features: ["Real-time reporting", "GPS tracking", "Community alerts", "Law enforcement coordination"],
      color: "bg-primary/5 border-primary/20",
      iconColor: "text-primary"
    },
    {
      icon: Camera,
      title: "Sciences Citoyennes",
      description: "Engage citizens in bird monitoring, counting, and biodiversity research.",
      features: ["Bird count programs", "Photo documentation", "Data collection", "Scientific contribution"],
      color: "bg-secondary/5 border-secondary/20",
      iconColor: "text-secondary"
    },
    {
      icon: GraduationCap,
      title: "Mini Club d'Ornithologie",
      description: "Educational programs for children and families to learn about bird conservation.",
      features: ["School workshops", "Field trips", "Interactive learning", "Young naturalist training"],
      color: "bg-accent/5 border-accent/20",
      iconColor: "text-accent"
    },
    {
      icon: MapPin,
      title: "ZICO & ZCB Management",
      description: "Protection and management of Important Bird Areas and Key Biodiversity Areas.",
      features: ["Site monitoring", "Habitat restoration", "Species protection", "Community engagement"],
      color: "bg-earth/5 border-earth/20",
      iconColor: "text-earth"
    },
    {
      icon: Binoculars,
      title: "Migration Monitoring",
      description: "Track and study bird migration patterns across Tunisia's diverse ecosystems.",
      features: ["GPS tracking", "Migration routes", "Seasonal studies", "Climate impact analysis"],
      color: "bg-sky/5 border-sky/20",
      iconColor: "text-sky"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Collaborate with local communities, farmers, and stakeholders for conservation.",
      features: ["Farmer education", "Sustainable practices", "Economic incentives", "Local leadership"],
      color: "bg-primary/5 border-primary/20",
      iconColor: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Conservation <span className="text-primary">Programs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Innovative initiatives that combine technology, science, and community engagement 
            to protect Tunisia's avian biodiversity.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {programs.map((program, index) => (
            <Card 
              key={index}
              className={`${program.color} border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg bg-white/50 flex items-center justify-center mb-4 ${program.iconColor}`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className={`w-1.5 h-1.5 rounded-full mr-3 ${program.iconColor.replace('text-', 'bg-')}`}></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="ghost" className="w-full group hover:bg-white/20">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-2xl p-12 border border-primary/10 fade-in-up">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Join Our Conservation <span className="text-primary">Community</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're a researcher, educator, student, or nature enthusiast, 
            there's a place for you in our mission to protect Tunisia's birds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-conservation text-lg px-8 py-4">
              <Users className="mr-2 h-5 w-5" />
              Become a Volunteer
            </Button>
            <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
              <Shield className="mr-2 h-5 w-5" />
              Support Our Work
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;