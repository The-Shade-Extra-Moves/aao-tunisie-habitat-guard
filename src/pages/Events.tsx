import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Calendar, 
  MapPin, 
  Clock,
  Users,
  Star,
  Camera,
  Binoculars,
  GraduationCap,
  Heart,
  Shield,
  Leaf,
  Globe,
  ArrowRight,
  CheckCircle,
  AlertTriangle,
  Info,
  Ticket,
  Share
} from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: "spring-migration-2024",
      title: "Spring Migration Festival 2024",
      date: "April 15-17, 2024",
      time: "6:00 AM - 6:00 PM",
      location: "Ichkeul National Park",
      type: "Festival",
      participants: "500+ expected",
      price: "Free",
      status: "Open",
      description: "Join us for our annual spring migration celebration featuring guided birdwatching tours, expert talks, photography workshops, and family activities.",
      highlights: ["50+ species expected", "Expert-led tours", "Photography contest", "Children's activities", "Conservation talks"],
      organizer: "AAO_Tunisie & Ichkeul National Park",
      registrationDeadline: "April 10, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: "citizen-science-workshop",
      title: "Citizen Science Training Workshop",
      date: "April 20, 2024",
      time: "9:00 AM - 4:00 PM",
      location: "AAO Tunis Office",
      type: "Workshop",
      participants: "30 participants",
      price: "50 TND",
      status: "Almost Full",
      description: "Learn how to contribute to bird conservation through citizen science. Training on data collection, species identification, and mobile app usage.",
      highlights: ["Hands-on training", "Mobile app tutorial", "Field practice", "Certificate provided", "Ongoing support"],
      organizer: "AAO_Tunisie Education Team",
      registrationDeadline: "April 17, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: "youth-conservation-camp",
      title: "Youth Conservation Summer Camp",
      date: "July 8-12, 2024",
      time: "5-day program",
      location: "Boukornine National Park",
      type: "Camp",
      participants: "40 youth (12-17 years)",
      price: "200 TND",
      status: "Registration Opens Soon",
      description: "Immersive 5-day conservation experience for young people featuring field research, habitat restoration, and leadership development.",
      highlights: ["Field research training", "Habitat restoration", "Leadership skills", "Career guidance", "Conservation projects"],
      organizer: "AAO_Tunisie Youth Program",
      registrationDeadline: "June 1, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: "flamingo-count-2024",
      title: "Annual Greater Flamingo Count",
      date: "May 5, 2024",
      time: "5:00 AM - 12:00 PM",
      location: "Kelbia Wetlands",
      type: "Research",
      participants: "60 volunteers",
      price: "Free",
      status: "Open",
      description: "Participate in our annual flamingo census, contributing to vital population monitoring data for conservation planning.",
      highlights: ["Scientific contribution", "Professional training", "Data collection", "Conservation impact", "Team experience"],
      organizer: "AAO_Tunisie Research Team",
      registrationDeadline: "May 1, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: "corporate-volunteer-day",
      title: "Corporate Volunteer Day: Habitat Restoration",
      date: "April 30, 2024",
      time: "8:00 AM - 3:00 PM",
      location: "Korba Lagoons",
      type: "Volunteer",
      participants: "100 corporate volunteers",
      price: "Corporate sponsorship",
      status: "Corporate Only",
      description: "Team-building conservation activity for corporate groups focusing on wetland habitat restoration and bird-friendly infrastructure.",
      highlights: ["Team building", "Habitat restoration", "Corporate impact", "Lunch included", "Impact reporting"],
      organizer: "AAO_Tunisie Corporate Program",
      registrationDeadline: "April 25, 2024",
      image: "/api/placeholder/400/250"
    },
    {
      id: "bird-photography-masterclass",
      title: "Bird Photography Masterclass",
      date: "May 18-19, 2024",
      time: "6:00 AM - 6:00 PM daily",
      location: "Various locations",
      type: "Workshop",
      participants: "20 photographers",
      price: "300 TND",
      status: "Open",
      description: "Advanced bird photography workshop with professional photographers covering techniques, equipment, ethics, and field practice.",
      highlights: ["Professional instruction", "Equipment guidance", "Field practice", "Ethics training", "Portfolio review"],
      organizer: "AAO_Tunisie & Photo Experts",
      registrationDeadline: "May 10, 2024",
      image: "/api/placeholder/400/250"
    }
  ];

  const pastEvents = [
    {
      title: "Winter Bird Count 2024",
      date: "January 15, 2024",
      participants: "150 volunteers",
      results: "12,500 birds counted across 25 sites",
      type: "Research"
    },
    {
      title: "Teacher Training Workshop",
      date: "February 10, 2024",
      participants: "45 teachers",
      results: "25 schools now implementing bird education programs",
      type: "Education"
    },
    {
      title: "Community Clean-up Day",
      date: "March 3, 2024",
      participants: "200 volunteers",
      results: "500kg of waste removed from Sebkhet Kelbia",
      type: "Conservation"
    }
  ];

  const eventTypes = [
    {
      icon: Binoculars,
      name: "Birdwatching",
      description: "Guided tours and observation events",
      color: "text-primary"
    },
    {
      icon: GraduationCap,
      name: "Education",
      description: "Workshops, training, and learning sessions",
      color: "text-secondary"
    },
    {
      icon: Heart,
      name: "Volunteer",
      description: "Conservation action and community service",
      color: "text-accent"
    },
    {
      icon: Camera,
      name: "Photography",
      description: "Photo workshops and competitions",
      color: "text-earth"
    },
    {
      icon: Users,
      name: "Community",
      description: "Festivals, celebrations, and gatherings",
      color: "text-sky"
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
              <Calendar className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conservation <span className="text-primary">Events</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Join our community of conservationists through hands-on events, educational workshops, 
              research activities, and celebration of Tunisia's remarkable bird diversity.
            </p>
          </div>
        </div>
      </section>

      {/* Event Types */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <div 
                key={index}
                className={`text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up ${type.color}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <type.icon className="w-8 h-8 mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-1">{type.name}</h3>
                <p className="text-xs text-muted-foreground">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming <span className="text-primary">Events</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover exciting opportunities to connect with nature, learn from experts, and contribute to conservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card 
                key={event.id}
                className="overflow-hidden border-primary/10 hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted/50 flex items-center justify-center relative">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      {event.type === 'Festival' && <Calendar className="w-6 h-6 text-primary" />}
                      {event.type === 'Workshop' && <GraduationCap className="w-6 h-6 text-primary" />}
                      {event.type === 'Camp' && <Users className="w-6 h-6 text-primary" />}
                      {event.type === 'Research' && <Binoculars className="w-6 h-6 text-primary" />}
                      {event.type === 'Volunteer' && <Heart className="w-6 h-6 text-primary" />}
                    </div>
                    <p className="text-xs text-muted-foreground">Event Image</p>
                  </div>
                  
                  <div className="absolute top-3 right-3">
                    <Badge 
                      variant={event.status === 'Open' ? 'default' : event.status === 'Almost Full' ? 'secondary' : 'outline'}
                      className="text-xs"
                    >
                      {event.status}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {event.type}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      {event.participants}
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {event.description}
                  </p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 text-sm">Key Highlights:</h4>
                    <div className="space-y-1">
                      {event.highlights.slice(0, 3).map((highlight, idx) => (
                        <div key={idx} className="flex items-center text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-500 flex-shrink-0" />
                          {highlight}
                        </div>
                      ))}
                      {event.highlights.length > 3 && (
                        <div className="text-xs text-muted-foreground">
                          +{event.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between pt-2">
                    <div className="text-sm">
                      <span className="font-medium text-primary">{event.price}</span>
                      {event.price !== "Free" && <span className="text-muted-foreground"> per person</span>}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Register by {event.registrationDeadline}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full mt-4 group"
                    disabled={event.status === 'Corporate Only' || event.status === 'Registration Opens Soon'}
                  >
                    {event.status === 'Registration Opens Soon' ? (
                      <>
                        <Clock className="mr-2 h-4 w-4" />
                        Opens Soon
                      </>
                    ) : event.status === 'Corporate Only' ? (
                      <>
                        <Info className="mr-2 h-4 w-4" />
                        Corporate Only
                      </>
                    ) : (
                      <>
                        <Ticket className="mr-2 h-4 w-4" />
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events Success */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent <span className="text-primary">Successes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See the impact of our community events and conservation activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card 
                key={index}
                className="text-center border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {event.type === 'Research' && <Binoculars className="w-6 h-6 text-primary" />}
                    {event.type === 'Education' && <GraduationCap className="w-6 h-6 text-primary" />}
                    {event.type === 'Conservation' && <Shield className="w-6 h-6 text-primary" />}
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{event.date}</p>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-primary mb-1">{event.participants.split(' ')[0]}</div>
                    <div className="text-xs text-muted-foreground">{event.participants.split(' ').slice(1).join(' ')}</div>
                  </div>
                  <p className="text-sm text-muted-foreground">{event.results}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Integration */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-3xl p-12 border border-primary/10 fade-in-up">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Never Miss an <span className="text-primary">Event</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Subscribe to our event calendar and get notifications about upcoming conservation activities
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="btn-conservation px-8 py-3">
                  <Calendar className="mr-2 h-5 w-5" />
                  Subscribe to Calendar
                </Button>
                <Button variant="outline" className="px-8 py-3 border-primary/30 hover:bg-primary/5">
                  <Globe className="mr-2 h-5 w-5" />
                  Download ICS File
                </Button>
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
              Ready to Get <span className="text-primary">Involved?</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our community of conservation enthusiasts and make a real difference for Tunisia's birds
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Join Next Event
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Heart className="mr-2 h-5 w-5" />
                Become a Member
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;