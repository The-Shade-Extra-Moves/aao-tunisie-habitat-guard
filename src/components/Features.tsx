import { 
  Bird, 
  BookOpen, 
  Globe, 
  Microscope, 
  Shield, 
  Users, 
  Leaf, 
  Camera,
  MapPin,
  Heart
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Conservation Programs",
      description: "Protection of migratory species and their flyways, monitoring endangered birds, and habitat restoration.",
      color: "text-primary"
    },
    {
      icon: Microscope,
      title: "Research & Science",
      description: "National censuses, bird banding, GPS tracking, migration studies, and scientific publications.",
      color: "text-secondary"
    },
    {
      icon: Users,
      title: "Citizen Engagement",
      description: "STOP! Braconnage platform, citizen science programs, and Mini Club d'Ornithologie for families.",
      color: "text-accent"
    },
    {
      icon: MapPin,
      title: "Protected Areas",
      description: "Management of ZICO, ZCB sites, Ramsar wetlands, and ecotourism initiatives.",
      color: "text-earth"
    },
    {
      icon: BookOpen,
      title: "Education & Awareness",
      description: "School campaigns, university programs, training for young ornithologists, and biodiversity workshops.",
      color: "text-sky"
    },
    {
      icon: Globe,
      title: "Global Partnerships",
      description: "BirdLife International partner, UICN member, collaboration with ministries and NGOs.",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Conservation <span className="text-primary">Mission</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive programs combining science, community engagement, and international cooperation 
            to protect Tunisia's biodiversity and bird populations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="conservation-card group hover:scale-105 transition-transform duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors ${feature.color}`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stats */}
        <div className="mt-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-2xl p-12 border border-primary/10">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">Our Impact</h3>
            <p className="text-lg text-muted-foreground">Measurable results in biodiversity conservation</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500K+</div>
              <div className="text-muted-foreground">Birds Monitored</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">25</div>
              <div className="text-muted-foreground">Habitat Sites</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">1000+</div>
              <div className="text-muted-foreground">Volunteers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-earth mb-2">50</div>
              <div className="text-muted-foreground">Research Papers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;