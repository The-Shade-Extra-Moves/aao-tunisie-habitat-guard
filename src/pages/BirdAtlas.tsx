import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Bird, 
  Search, 
  Filter,
  MapPin,
  Calendar,
  Camera,
  Volume2,
  Star,
  TrendingUp,
  Shield,
  AlertTriangle,
  Info,
  Binoculars,
  Leaf,
  Globe,
  Clock,
  Users
} from "lucide-react";

const BirdAtlas = () => {
  const featuredSpecies = [
    {
      id: "greater-flamingo",
      name: "Greater Flamingo",
      scientificName: "Phoenicopterus roseus",
      status: "Stable",
      population: "15,000-20,000",
      image: "/api/placeholder/300/200",
      habitat: "Wetlands, Salt lakes",
      season: "Year-round resident",
      conservation: "Least Concern",
      description: "Tunisia's most iconic waterbird, forming spectacular flocks in coastal lagoons and salt lakes.",
      threats: ["Habitat loss", "Disturbance", "Water pollution"],
      sites: ["Lac de Tunis", "Sebkhet Kelbia", "Chott el Jerid"]
    },
    {
      id: "white-stork",
      name: "White Stork",
      scientificName: "Ciconia ciconia",
      status: "Increasing",
      population: "2,500 pairs",
      image: "/api/placeholder/300/200",
      habitat: "Towns, Agricultural areas",
      season: "Breeding visitor",
      conservation: "Least Concern",
      description: "A beloved species that nests on buildings and migrates across the Sahara to sub-Saharan Africa.",
      threats: ["Power line collisions", "Habitat change", "Climate change"],
      sites: ["Tunis suburbs", "Kairouan", "Sousse"]
    },
    {
      id: "marbled-teal",
      name: "Marbled Teal",
      scientificName: "Marmaronetta angustirostris",
      status: "Vulnerable",
      population: "200-300 pairs",
      image: "/api/placeholder/300/200",
      habitat: "Shallow wetlands",
      season: "Breeding resident",
      conservation: "Vulnerable",
      description: "A rare duck species requiring urgent conservation attention in Tunisia's wetlands.",
      threats: ["Wetland drainage", "Water abstraction", "Hunting pressure"],
      sites: ["Ichkeul", "Kelbia", "Korba lagoons"]
    },
    {
      id: "audouins-gull",
      name: "Audouin's Gull",
      scientificName: "Ichthyaetus audouinii",
      status: "Recovering",
      population: "1,500 pairs",
      image: "/api/placeholder/300/200",
      habitat: "Rocky coasts, Islands",
      season: "Breeding resident",
      conservation: "Least Concern",
      description: "A Mediterranean endemic that has recovered thanks to conservation efforts on offshore islands.",
      threats: ["Coastal development", "Disturbance", "Overfishing"],
      sites: ["Zembra Island", "Kuriat Islands", "La Galite"]
    }
  ];

  const habitatTypes = [
    {
      icon: Leaf,
      name: "Wetlands",
      species: 180,
      description: "Lakes, marshes, and coastal lagoons hosting waterbirds",
      keySpecies: ["Greater Flamingo", "Purple Heron", "Glossy Ibis"]
    },
    {
      icon: Globe,
      name: "Mediterranean Coast",
      species: 95,
      description: "Rocky shores, sandy beaches, and marine environments",
      keySpecies: ["Audouin's Gull", "Peregrine Falcon", "Cory's Shearwater"]
    },
    {
      icon: Bird,
      name: "Agricultural Areas",
      species: 85,
      description: "Farmland, olive groves, and rural landscapes",
      keySpecies: ["White Stork", "Little Owl", "Bee-eater"]
    },
    {
      icon: MapPin,
      name: "Mountain Forests",
      species: 65,
      description: "Cork oak and pine forests in northern mountains",
      keySpecies: ["Barbary Partridge", "Booted Eagle", "Crossbill"]
    },
    {
      icon: Shield,
      name: "Desert & Steppe",
      species: 45,
      description: "Arid regions and semi-desert landscapes",
      keySpecies: ["Houbara Bustard", "Cream-colored Courser", "Desert Lark"]
    }
  ];

  const migrationHighlights = [
    {
      period: "Spring (March-May)",
      species: "120+ species",
      highlights: ["Trans-Saharan migrants arriving", "Peak passage of raptors", "Breeding season begins"]
    },
    {
      period: "Summer (June-August)",
      species: "200+ species",
      highlights: ["Breeding activity at peak", "Seabird colonies active", "Post-breeding dispersal"]
    },
    {
      period: "Autumn (September-November)",
      species: "180+ species",
      highlights: ["Migration to Africa", "Juvenile birds learning routes", "Stopover at key sites"]
    },
    {
      period: "Winter (December-February)",
      species: "150+ species",
      highlights: ["Wintering waterbirds", "European visitors", "Resident species active"]
    }
  ];

  const conservationStatus = [
    { status: "Critically Endangered", count: 2, color: "bg-red-500" },
    { status: "Endangered", count: 8, color: "bg-orange-500" },
    { status: "Vulnerable", count: 15, color: "bg-yellow-500" },
    { status: "Near Threatened", count: 25, color: "bg-blue-500" },
    { status: "Least Concern", count: 320, color: "bg-green-500" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <Binoculars className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Tunisia Bird <span className="text-primary">Atlas</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Discover Tunisia's 370+ bird species through our comprehensive digital atlas. 
              From resident species to migratory visitors, explore the rich avian diversity of North Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center fade-in-up">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search by species name, habitat, or conservation status..." 
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="mr-2 h-5 w-5" />
                Filters
              </Button>
              <Button className="h-12 px-6 btn-conservation">
                <Camera className="mr-2 h-5 w-5" />
                Add Sighting
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Species */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-primary">Species</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Spotlight on some of Tunisia's most remarkable and conservation-significant bird species
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredSpecies.map((species, index) => (
              <Card 
                key={species.id}
                className="overflow-hidden border-primary/10 hover:shadow-[var(--shadow-large)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Bird className="w-12 h-12 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Photo coming soon</p>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl mb-1">{species.name}</CardTitle>
                      <p className="text-sm italic text-muted-foreground mb-3">{species.scientificName}</p>
                    </div>
                    <Badge 
                      variant={species.status === 'Vulnerable' ? 'destructive' : species.status === 'Stable' ? 'default' : 'secondary'}
                    >
                      {species.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Users className="w-4 h-4 mr-1" />
                        Population
                      </div>
                      <div className="font-medium">{species.population}</div>
                    </div>
                    <div>
                      <div className="flex items-center text-muted-foreground mb-1">
                        <Clock className="w-4 h-4 mr-1" />
                        Season
                      </div>
                      <div className="font-medium">{species.season}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">{species.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Key Sites
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {species.sites.map((site, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {site}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2 text-orange-500" />
                      Main Threats
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {species.threats.map((threat, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {threat}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Info className="mr-2 h-4 w-4" />
                      Full Details
                    </Button>
                    <Button size="sm" variant="outline">
                      <Volume2 className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="outline">
                      <Camera className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Habitat Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Habitat <span className="text-primary">Diversity</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore Tunisia's diverse ecosystems and their unique bird communities
            </p>
          </div>

          <div className="space-y-6">
            {habitatTypes.map((habitat, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <habitat.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-foreground">{habitat.name}</h3>
                        <div className="text-2xl font-bold text-primary">{habitat.species} species</div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <p className="text-muted-foreground mb-3">{habitat.description}</p>
                      <div>
                        <h4 className="font-medium text-foreground mb-2">Key Species:</h4>
                        <div className="flex flex-wrap gap-2">
                          {habitat.keySpecies.map((species, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {species}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-center lg:text-right">
                      <Button variant="outline">
                        <Binoculars className="mr-2 h-4 w-4" />
                        Explore Habitat
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Patterns */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Migration <span className="text-primary">Calendar</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Track the seasonal movements of Tunisia's migratory birds throughout the year
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {migrationHighlights.map((period, index) => (
              <Card 
                key={index}
                className="text-center border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{period.period}</CardTitle>
                  <Badge variant="secondary" className="text-xs">
                    {period.species}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2 text-left">
                    {period.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Status */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Conservation <span className="text-primary">Status</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Understanding the conservation challenges facing Tunisia's bird species
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-12">
              {conservationStatus.map((status, index) => (
                <Card 
                  key={index}
                  className="text-center border-primary/20 bg-white/50 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className={`w-8 h-8 ${status.color} rounded-full mx-auto mb-2`}></div>
                    <div className="text-2xl font-bold text-foreground">{status.count}</div>
                    <p className="text-sm text-muted-foreground">{status.status}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="text-center bg-white/30 backdrop-blur-sm rounded-2xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Priority <span className="text-primary">Conservation</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                25 species require immediate conservation attention. Our research and protection 
                programs focus on the most vulnerable populations.
              </p>
              <Button className="btn-conservation px-8 py-3">
                <Shield className="mr-2 h-5 w-5" />
                Conservation Priorities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center fade-in-up">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Contribute to Our <span className="text-primary">Atlas</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Help us document Tunisia's bird diversity by submitting your observations and photographs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Camera className="mr-2 h-5 w-5" />
                Submit Sighting
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Users className="mr-2 h-5 w-5" />
                Join Citizen Science
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BirdAtlas;