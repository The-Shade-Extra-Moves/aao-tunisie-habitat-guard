import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  Heart, 
  Camera, 
  GraduationCap,
  Calendar,
  MapPin,
  Clock,
  Star,
  Shield,
  Leaf,
  Binoculars,
  BookOpen,
  Globe,
  ArrowRight,
  CheckCircle,
  Gift,
  CreditCard,
  Building
} from "lucide-react";

const GetInvolved = () => {
  const volunteerRoles = [
    {
      icon: Binoculars,
      title: "Field Researcher",
      commitment: "Weekend trips",
      skills: "Basic ornithology knowledge",
      description: "Assist with bird surveys, migration monitoring, and habitat assessments in the field.",
      activities: ["Bird counts and surveys", "GPS data collection", "Photography documentation", "Habitat monitoring"],
      spots: 15,
      color: "border-primary/20 bg-primary/5"
    },
    {
      icon: Camera,
      title: "Citizen Scientist",
      commitment: "Flexible hours",
      skills: "Smartphone photography",
      description: "Contribute to our citizen science programs through bird observations and data collection.",
      activities: ["Bird sighting reports", "Photo submissions", "Breeding behavior notes", "Migration timing data"],
      spots: 50,
      color: "border-secondary/20 bg-secondary/5"
    },
    {
      icon: GraduationCap,
      title: "Education Ambassador",
      commitment: "2-4 hours/week",
      skills: "Public speaking comfort",
      description: "Help deliver educational programs in schools, universities, and community centers.",
      activities: ["School presentations", "Workshop assistance", "Event coordination", "Material preparation"],
      spots: 20,
      color: "border-accent/20 bg-accent/5"
    },
    {
      icon: Shield,
      title: "Conservation Guardian",
      commitment: "On-call basis",
      skills: "Local area knowledge",
      description: "Monitor protected areas and report threats through our STOP! Braconnage platform.",
      activities: ["Site monitoring", "Threat reporting", "Community outreach", "Conservation advocacy"],
      spots: 30,
      color: "border-earth/20 bg-earth/5"
    },
    {
      icon: BookOpen,
      title: "Digital Volunteer",
      commitment: "Remote work",
      skills: "Computer literacy",
      description: "Support our online initiatives through content creation, data entry, and social media.",
      activities: ["Data entry", "Social media content", "Website updates", "Newsletter writing"],
      spots: 25,
      color: "border-sky/20 bg-sky/5"
    },
    {
      icon: Users,
      title: "Event Coordinator",
      commitment: "Event-based",
      skills: "Organizational skills",
      description: "Help organize and coordinate conservation events, workshops, and public activities.",
      activities: ["Event planning", "Logistics coordination", "Volunteer management", "Community engagement"],
      spots: 10,
      color: "border-primary/20 bg-primary/5"
    }
  ];

  const upcomingEvents = [
    {
      title: "Spring Migration Count",
      date: "March 15-17, 2024",
      location: "Ichkeul National Park",
      type: "Field Work",
      participants: "25 volunteers",
      description: "Join our annual spring migration survey at one of Tunisia's most important wetlands."
    },
    {
      title: "Youth Conservation Workshop",
      date: "March 22, 2024",
      location: "Tunis Environmental Center",
      type: "Education",
      participants: "50 students",
      description: "Interactive workshop teaching young people about bird conservation and environmental protection."
    },
    {
      title: "Community Clean-Up Day",
      date: "April 5, 2024",
      location: "Sebkhet Kelbia Wetlands",
      type: "Conservation",
      participants: "100 volunteers",
      description: "Habitat restoration and cleanup event at critical waterbird habitat site."
    },
    {
      title: "Birdwatching for Beginners",
      date: "April 12, 2024",
      location: "Boukornine National Park",
      type: "Education",
      participants: "30 families",
      description: "Family-friendly introduction to birdwatching and nature observation skills."
    }
  ];

  const donationOptions = [
    {
      icon: Heart,
      title: "Monthly Supporter",
      amount: "25 TND/month",
      impact: "Funds daily field research activities",
      perks: ["Quarterly newsletters", "Volunteer appreciation events", "Conservation updates"]
    },
    {
      icon: Shield,
      title: "Conservation Champion",
      amount: "100 TND/month",
      impact: "Supports habitat restoration projects",
      perks: ["Exclusive field trip invitations", "Annual conservation report", "Direct researcher updates"]
    },
    {
      icon: Star,
      title: "Legacy Partner",
      amount: "500 TND/month",
      impact: "Funds major conservation initiatives",
      perks: ["Recognition on website", "Personal conservation briefings", "VIP event access"]
    }
  ];

  const corporatePartnership = [
    {
      icon: Building,
      title: "Corporate Sponsorship",
      description: "Partner with us for CSR initiatives and environmental programs"
    },
    {
      icon: Users,
      title: "Employee Engagement",
      description: "Team building through conservation volunteering activities"
    },
    {
      icon: Globe,
      title: "Sustainability Programs",
      description: "Integrate bird conservation into your sustainability goals"
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
              <Users className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Get <span className="text-primary">Involved</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join Tunisia's largest bird conservation community. Whether you have one hour 
              a week or one day a month, there's a meaningful way for you to help protect our birds.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Volunteer <span className="text-primary">Opportunities</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Find the perfect role that matches your interests, skills, and availability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {volunteerRoles.map((role, index) => (
              <Card 
                key={index}
                className={`${role.color} border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center mb-4">
                    <role.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-lg">{role.title}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {role.spots} spots
                    </Badge>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {role.commitment}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2" />
                      {role.skills}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{role.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Key Activities:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {role.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full mt-4" variant="outline">
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join us for hands-on conservation activities and learning opportunities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {event.date}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {event.location}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-2" />
                          {event.participants}
                        </div>
                      </div>
                    </div>
                    <Badge variant={event.type === 'Field Work' ? 'default' : event.type === 'Education' ? 'secondary' : 'outline'}>
                      {event.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <Button className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Register
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Support & Donations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Support Our <span className="text-primary">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your financial support directly funds conservation research, habitat protection, and education programs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {donationOptions.map((option, index) => (
              <Card 
                key={index}
                className="text-center border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <div className="text-2xl font-bold text-primary mt-2">{option.amount}</div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground font-medium">{option.impact}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Supporter Perks:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {option.perks.map((perk, idx) => (
                        <li key={idx} className="flex items-center">
                          <Gift className="w-3 h-3 mr-2 text-accent flex-shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full btn-conservation">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Donate Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* One-time donation */}
          <div className="text-center bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-2xl p-8 border border-primary/10 fade-in-up">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Make a <span className="text-primary">One-Time Donation</span>
            </h3>
            <p className="text-muted-foreground mb-6">Every contribution, large or small, makes a difference</p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              {["50 TND", "100 TND", "250 TND", "500 TND", "Custom"].map((amount, index) => (
                <Button key={index} variant="outline" className="hover:bg-primary/5">
                  {amount}
                </Button>
              ))}
            </div>
            <Button className="btn-conservation px-8 py-3">
              <Heart className="mr-2 h-5 w-5" />
              Donate Once
            </Button>
          </div>
        </div>
      </section>

      {/* Corporate Partnership */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Corporate <span className="text-primary">Partnerships</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Partner with AAO_Tunisie to strengthen your environmental impact and engage your team in meaningful conservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {corporatePartnership.map((partnership, index) => (
              <Card 
                key={index}
                className="text-center border-primary/20 bg-white/50 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <partnership.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{partnership.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{partnership.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Button className="btn-conservation text-lg px-8 py-4">
              <Building className="mr-2 h-5 w-5" />
              Explore Partnership
            </Button>
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
              Join thousands of conservation heroes protecting Tunisia's birds and habitats
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Start Volunteering
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Heart className="mr-2 h-5 w-5" />
                Donate Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GetInvolved;