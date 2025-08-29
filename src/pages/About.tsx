import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Bird, 
  Users, 
  Award, 
  Globe, 
  Calendar,
  MapPin,
  Heart,
  Leaf,
  Target,
  Eye,
  Star,
  Trophy,
  Shield
} from "lucide-react";

const About = () => {
  const timeline = [
    {
      year: "1975",
      title: "Foundation",
      description: "AAO_Tunisie was founded by passionate ornithologists and nature lovers committed to protecting Tunisia's bird diversity."
    },
    {
      year: "1980s",
      title: "Early Conservation",
      description: "First major habitat protection initiatives in key wetlands and establishment of bird monitoring programs."
    },
    {
      year: "1990s", 
      title: "BirdLife Partnership",
      description: "Became the official BirdLife International partner for Tunisia, joining the global conservation network."
    },
    {
      year: "2000s",
      title: "Expansion",
      description: "Launched citizen science programs, STOP! Braconnage platform, and educational initiatives."
    },
    {
      year: "2010s",
      title: "Innovation",
      description: "Integrated GPS tracking, modern research techniques, and digital platforms for conservation."
    },
    {
      year: "2020s",
      title: "Future Vision",
      description: "Leading Mediterranean bird conservation with AI-powered monitoring and sustainable tourism."
    }
  ];

  const team = [
    {
      name: "Dr. Ahmed Ben Salem",
      role: "Director & Senior Ornithologist",
      description: "30+ years in bird conservation, leading migration studies across North Africa.",
      icon: Bird
    },
    {
      name: "Fatima Mansouri",
      role: "Research Coordinator",
      description: "Specialist in wetland ecology and citizen science program development.",
      icon: Leaf
    },
    {
      name: "Karim Dridi",
      role: "Conservation Programs Manager",
      description: "Expert in habitat restoration and community engagement initiatives.",
      icon: Shield
    },
    {
      name: "Leila Bouazizi",
      role: "Education & Outreach Director",
      description: "Develops educational programs and coordinates with schools and universities.",
      icon: Users
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: "International Recognition",
      description: "UNEP Global 500 Award for outstanding environmental achievement"
    },
    {
      icon: Star,
      title: "Scientific Excellence", 
      description: "50+ peer-reviewed publications in leading ornithological journals"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Active partnerships with conservation organizations across 25 countries"
    },
    {
      icon: Award,
      title: "Government Partnership",
      description: "Official advisor to Tunisia's Ministry of Environment on biodiversity policy"
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
              <Bird className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">AAO_Tunisie</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For nearly 50 years, we've been Tunisia's voice for birds, dedicating our expertise, 
              passion, and innovation to protecting the country's remarkable avian diversity and 
              the ecosystems they depend on.
            </p>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <Card className="border-primary/20 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To protect birds and their habitats, combat threats to biodiversity, and empower 
                  citizens and institutions to preserve Tunisia's natural heritage through science, 
                  education, and advocacy.
                </p>
              </CardContent>
            </Card>

            <Card className="border-secondary/20 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up" style={{ animationDelay: '0.1s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-2xl text-foreground">Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A Tunisia where birds and people live in harmony, where every wetland, forest, 
                  and landscape is a sanctuary for life, and where conservation drives sustainable futures.
                </p>
              </CardContent>
            </Card>

            <Card className="border-accent/20 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-2xl text-foreground">Values</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  Scientific integrity, community collaboration, environmental stewardship, and 
                  sustainable development that respects both nature and local communities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our <span className="text-primary">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From humble beginnings to becoming Tunisia's leading bird conservation organization
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div 
                key={index} 
                className="flex items-start mb-12 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-24 text-right mr-8">
                  <div className="text-2xl font-bold text-primary">{item.year}</div>
                </div>
                <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full mt-2 mr-8 border-4 border-primary/20"></div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Meet Our <span className="text-primary">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated experts combining decades of experience in ornithology, conservation, and education
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card 
                key={index}
                className="text-center border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recognition & <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our commitment to excellence has been recognized nationally and internationally
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="text-center border-primary/20 bg-white/50 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20 fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Join Our <span className="text-primary">Conservation Family</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a researcher, educator, student, or nature enthusiast, 
              there's a place for you in our mission to protect Tunisia's birds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Get Involved
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Heart className="mr-2 h-5 w-5" />
                Support Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;