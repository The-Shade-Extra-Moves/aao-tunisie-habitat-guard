import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Users,
  Building,
  Globe,
  Bird,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Calendar
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "12 Avenue Habib Bourguiba, Tunis 1001, Tunisia",
      color: "text-primary"
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      content: "+216 71 123 456\n+216 98 765 432 (Mobile)",
      color: "text-secondary"
    },
    {
      icon: Mail,
      title: "Email Addresses",
      content: "info@aao-tunisie.org\nresearch@aao-tunisie.org",
      color: "text-accent"
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM",
      color: "text-earth"
    }
  ];

  const socialLinks = [
    {
      icon: Facebook,
      name: "Facebook",
      handle: "@AAOTunisie",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@AAO_Tunisie",
      color: "hover:text-blue-400"
    },
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@aao_tunisie",
      color: "hover:text-pink-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "AAO Tunisie",
      color: "hover:text-blue-700"
    }
  ];

  const departments = [
    {
      icon: Users,
      title: "General Inquiries",
      email: "info@aao-tunisie.org",
      description: "General questions, membership, and volunteer opportunities"
    },
    {
      icon: Bird,
      title: "Research & Science",
      email: "research@aao-tunisie.org",
      description: "Scientific collaborations, data requests, and research partnerships"
    },
    {
      icon: Building,
      title: "Education Programs",
      email: "education@aao-tunisie.org",
      description: "School visits, workshops, and educational materials"
    },
    {
      icon: Globe,
      title: "Media & Press",
      email: "press@aao-tunisie.org",
      description: "Media inquiries, interviews, and press releases"
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
              <Mail className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Contact <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get in touch with our team for partnerships, research collaborations, 
              volunteer opportunities, or any questions about bird conservation in Tunisia.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-up">
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Send us a <span className="text-primary">Message</span>
              </h2>
              
              <Card className="border-primary/10">
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="Your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="+216 XX XXX XXX" />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this message about?" />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us more about your inquiry..." 
                      rows={6}
                    />
                  </div>
                  
                  <Button className="w-full btn-conservation text-lg py-3">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Contact <span className="text-primary">Information</span>
              </h2>
              
              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`p-3 rounded-lg bg-primary/10 ${info.color}`}>
                          <info.icon className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                          <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <div key={index} className={`flex items-center space-x-3 p-4 border border-primary/10 rounded-lg hover:shadow-[var(--shadow-medium)] transition-all duration-300 cursor-pointer ${social.color}`}>
                      <social.icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium text-foreground">{social.name}</div>
                        <div className="text-sm text-muted-foreground">{social.handle}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Department <span className="text-primary">Contacts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct your inquiry to the right department for faster response
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {departments.map((dept, index) => (
              <Card 
                key={index}
                className="text-center border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <dept.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{dept.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <div className="text-sm font-medium text-primary break-all">{dept.email}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Visit Our <span className="text-primary">Office</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Located in the heart of Tunis, our office is open to visitors by appointment
            </p>
          </div>

          <div className="bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5 rounded-3xl p-8 border border-primary/10 fade-in-up">
            <div className="aspect-video bg-muted/50 rounded-2xl flex items-center justify-center mb-8">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive map coming soon</p>
                <p className="text-sm text-muted-foreground mt-2">
                  12 Avenue Habib Bourguiba, Tunis 1001, Tunisia
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Schedule a <span className="text-primary">Visit</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                Interested in visiting our research facilities or library? 
                Contact us to arrange an appointment.
              </p>
              <Button className="btn-conservation px-8 py-3">
                <Calendar className="mr-2 h-5 w-5" />
                Schedule Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;