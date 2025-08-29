import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Shield, 
  Camera, 
  GraduationCap, 
  MapPin, 
  Binoculars, 
  Users,
  ArrowRight,
  Leaf,
  Target,
  Clock,
  TrendingUp,
  Globe,
  BookOpen,
  Heart,
  AlertTriangle,
  CheckCircle
} from "lucide-react";

const Programs = () => {
  const mainPrograms = [
    {
      id: "stop-braconnage",
      icon: Shield,
      title: "STOP! Braconnage",
      subtitle: "Anti-Poaching Initiative",
      description: "Our flagship citizen reporting platform combating illegal hunting across Tunisia's migratory routes.",
      status: "Active",
      impact: "2,500+ reports processed",
      features: [
        "Real-time incident reporting via mobile app",
        "GPS location tracking for rapid response",
        "Community alert system for volunteers",
        "Direct coordination with law enforcement",
        "Anonymous reporting options for safety",
        "Educational campaigns on hunting laws"
      ],
      results: [
        "85% reduction in illegal hunting in monitored areas",
        "150+ prosecutions leading to convictions",
        "500+ volunteers actively reporting incidents",
        "Partnership with 12 police stations nationwide"
      ],
      color: "border-primary/20 bg-primary/5",
      iconColor: "text-primary"
    },
    {
      id: "citizen-science",
      icon: Camera,
      title: "Sciences Citoyennes",
      subtitle: "Citizen Science Network",
      description: "Engaging citizens in scientific bird monitoring, data collection, and biodiversity research.",
      status: "Expanding",
      impact: "10,000+ observations recorded",
      features: [
        "Bird count programs during migration seasons",
        "Photo documentation and species identification",
        "Habitat quality assessment protocols",
        "Climate change impact monitoring",
        "Mobile apps for data collection",
        "Training workshops for participants"
      ],
      results: [
        "300+ active citizen scientists nationwide",
        "15,000+ bird observations logged annually",
        "12 new species recorded in unexpected locations",
        "Data contributed to 8 research publications"
      ],
      color: "border-secondary/20 bg-secondary/5",
      iconColor: "text-secondary"
    },
    {
      id: "mini-club",
      icon: GraduationCap,
      title: "Mini Club d'Ornithologie",
      subtitle: "Youth Education Program",
      description: "Inspiring the next generation through hands-on education and family-friendly conservation activities.",
      status: "Growing",
      impact: "5,000+ children reached",
      features: [
        "Interactive school workshops and presentations",
        "Guided field trips to protected areas",
        "Nature photography competitions",
        "Junior ornithologist certification programs",
        "Family birdwatching events",
        "Educational materials and activity books"
      ],
      results: [
        "85 schools participating across Tunisia",
        "200+ teachers trained in bird education",
        "15 youth conservation clubs established",
        "92% of participants report increased nature awareness"
      ],
      color: "border-accent/20 bg-accent/5",
      iconColor: "text-accent"
    },
    {
      id: "protected-areas",
      icon: MapPin,
      title: "ZICO & ZCB Management",
      subtitle: "Protected Area Stewardship",
      description: "Managing Important Bird Areas and Key Biodiversity Areas for long-term conservation success.",
      status: "Ongoing",
      impact: "25 sites under management",
      features: [
        "Site monitoring and threat assessment",
        "Habitat restoration and improvement",
        "Species population monitoring",
        "Community engagement and education",
        "Sustainable tourism development",
        "Research and scientific documentation"
      ],
      results: [
        "8 sites achieved improved conservation status",
        "45% increase in key species populations",
        "300 hectares of habitat restored",
        "15 community partnerships established"
      ],
      color: "border-earth/20 bg-earth/5",
      iconColor: "text-earth"
    }
  ];

  const additionalPrograms = [
    {
      icon: Binoculars,
      title: "Migration Monitoring",
      description: "Advanced tracking of bird migration patterns using GPS technology and field observations.",
      participants: "50+ researchers"
    },
    {
      icon: Users,
      title: "Community Partnerships",
      description: "Collaborative initiatives with farmers, fishing communities, and local stakeholders.",
      participants: "120+ partners"
    },
    {
      icon: BookOpen,
      title: "Research & Publications",
      description: "Scientific studies contributing to global understanding of Mediterranean bird ecology.",
      participants: "25+ publications"
    },
    {
      icon: Globe,
      title: "International Cooperation",
      description: "Cross-border initiatives with BirdLife partners and Mediterranean conservation networks.",
      participants: "12 countries"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <Leaf className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conservation <span className="text-primary">Programs</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive initiatives combining cutting-edge science, community engagement, 
              and innovative technology to protect Tunisia's avian biodiversity and habitats.
            </p>
          </div>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {mainPrograms.map((program, index) => (
              <div 
                key={program.id}
                className={`${program.color} rounded-3xl p-8 border hover:shadow-[var(--shadow-large)] transition-all duration-300 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Program Header */}
                  <div className="lg:col-span-1">
                    <div className={`w-16 h-16 rounded-xl bg-white/50 flex items-center justify-center mb-6 ${program.iconColor}`}>
                      <program.icon className="w-8 h-8" />
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {program.status}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {program.impact}
                      </Badge>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{program.title}</h3>
                    <p className="text-primary font-medium mb-4">{program.subtitle}</p>
                    <p className="text-muted-foreground leading-relaxed mb-6">{program.description}</p>
                    <Button variant="outline" className="group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  {/* Features & Results */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-primary" />
                        Key Features
                      </h4>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <div className={`w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0 ${program.iconColor.replace('text-', 'bg-')}`}></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2 text-secondary" />
                        Impact Results
                      </h4>
                      <ul className="space-y-3">
                        {program.results.map((result, idx) => (
                          <li key={idx} className="flex items-start text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-green-500 mt-1 mr-3 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Programs */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Supporting <span className="text-primary">Initiatives</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Additional programs that strengthen our conservation network and expand our impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalPrograms.map((program, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <program.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{program.title}</CardTitle>
                  <Badge variant="outline" className="w-fit text-xs">
                    {program.participants}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{program.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-3xl p-12 border border-primary/10 fade-in-up">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Collective <span className="text-primary">Impact</span>
              </h3>
              <p className="text-lg text-muted-foreground">Our programs create measurable change across Tunisia</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">500K+</div>
                <div className="text-muted-foreground">Birds Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">3,000+</div>
                <div className="text-muted-foreground">Active Participants</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">85%</div>
                <div className="text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-earth mb-2">25</div>
                <div className="text-muted-foreground">Protected Sites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to Make a <span className="text-primary">Difference?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our programs and become part of Tunisia's largest bird conservation network
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Join a Program
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Heart className="mr-2 h-5 w-5" />
                Volunteer Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;