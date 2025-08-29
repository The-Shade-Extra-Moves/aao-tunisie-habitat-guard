import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Microscope, 
  BarChart, 
  Download, 
  ExternalLink,
  Database,
  Globe,
  Users,
  Calendar,
  MapPin,
  TrendingUp,
  FileText,
  Camera,
  Satellite,
  Bird,
  Leaf
} from "lucide-react";

const Research = () => {
  const researchAreas = [
    {
      icon: Bird,
      title: "Migration Ecology",
      description: "Tracking migratory patterns, routes, and timing across North Africa and Europe",
      projects: ["Sahara Crossing Study", "Mediterranean Flyway Analysis", "Climate Impact Assessment"],
      publications: 15,
      color: "border-primary/20 bg-primary/5"
    },
    {
      icon: Leaf,
      title: "Habitat Conservation",
      description: "Analyzing habitat quality, restoration effectiveness, and ecosystem health",
      projects: ["Wetland Restoration Impact", "Forest Bird Communities", "Urban Biodiversity"],
      publications: 12,
      color: "border-secondary/20 bg-secondary/5"
    },
    {
      icon: Database,
      title: "Population Dynamics",
      description: "Long-term monitoring of breeding success, survival rates, and population trends",
      projects: ["National Bird Census", "Breeding Success Analysis", "Demographic Modeling"],
      publications: 18,
      color: "border-accent/20 bg-accent/5"
    },
    {
      icon: Globe,
      title: "Climate Change",
      description: "Investigating climate impacts on bird distributions, breeding, and survival",
      projects: ["Temperature Impact Study", "Precipitation Correlation", "Future Distribution Models"],
      publications: 10,
      color: "border-earth/20 bg-earth/5"
    }
  ];

  const currentProjects = [
    {
      title: "GPS Tracking of Storks Across Sahara",
      status: "Active",
      duration: "2023-2025",
      partners: ["BirdLife International", "Max Planck Institute"],
      description: "Using advanced GPS technology to track White Stork migration routes and stopover sites.",
      progress: 75,
      findings: ["New stopover sites identified", "Shorter migration duration observed", "Habitat preference changes documented"]
    },
    {
      title: "Flamingo Population Recovery Assessment",
      status: "Analysis",
      duration: "2022-2024",
      partners: ["Tour du Valat", "MEDWET"],
      description: "Comprehensive study of Greater Flamingo population recovery in Tunisian wetlands.",
      progress: 90,
      findings: ["40% population increase since 2018", "Successful breeding in 3 new sites", "Improved habitat quality metrics"]
    },
    {
      title: "Urban Bird Adaptation Study",
      status: "Planning",
      duration: "2024-2026",
      partners: ["University of Tunis", "Urban Wildlife Initiative"],
      description: "Investigating how birds adapt to urban environments in Tunisia's major cities.",
      progress: 25,
      findings: ["Preliminary species inventory completed", "Urban habitat mapping initiated", "Community engagement protocols developed"]
    }
  ];

  const publications = [
    {
      title: "Migration Timing Shifts in North African Waterbirds: A 20-Year Analysis",
      journal: "Journal of Avian Biology",
      year: "2023",
      authors: "Ben Salem, A., Mansouri, F., et al.",
      citations: 45,
      openAccess: true
    },
    {
      title: "Effectiveness of Wetland Restoration on Bird Community Recovery",
      journal: "Conservation Biology",
      year: "2023",
      authors: "Dridi, K., Ben Salem, A., et al.",
      citations: 32,
      openAccess: true
    },
    {
      title: "Citizen Science Contributions to Bird Monitoring in Tunisia",
      journal: "Biological Conservation",
      year: "2022",
      authors: "Bouazizi, L., Mansouri, F., et al.",
      citations: 67,
      openAccess: false
    },
    {
      title: "Climate Change Impacts on Saharan Bird Migration Routes",
      journal: "Global Change Biology",
      year: "2022",
      authors: "Ben Salem, A., International Team",
      citations: 89,
      openAccess: true
    }
  ];

  const datasets = [
    {
      title: "Tunisia Bird Migration Database (1975-2023)",
      description: "Comprehensive database of bird migration observations, banding data, and GPS tracking",
      records: "500,000+",
      lastUpdated: "March 2024",
      access: "Open Access"
    },
    {
      title: "Wetland Bird Communities Dataset",
      description: "Annual censuses of waterbird populations across 25 protected wetland sites",
      records: "125,000+",
      lastUpdated: "February 2024",
      access: "Research Access"
    },
    {
      title: "Citizen Science Observations",
      description: "Community-contributed bird sightings and breeding observations",
      records: "50,000+",
      lastUpdated: "Daily",
      access: "Open Access"
    }
  ];

  const researchTools = [
    {
      icon: Satellite,
      title: "GPS Tracking",
      description: "State-of-the-art satellite transmitters for long-distance migration studies"
    },
    {
      icon: Camera,
      title: "Camera Traps",
      description: "Automated monitoring of breeding sites and feeding areas"
    },
    {
      icon: Microscope,
      title: "Genetic Analysis",
      description: "DNA barcoding and population genetics for conservation planning"
    },
    {
      icon: BarChart,
      title: "Statistical Modeling",
      description: "Advanced statistical methods for population and habitat analysis"
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
              <Microscope className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Research & <span className="text-primary">Science</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advancing our understanding of bird ecology, migration patterns, and conservation 
              effectiveness through rigorous scientific research and innovative methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research <span className="text-primary">Focus Areas</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary approach addresses critical questions in avian ecology and conservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {researchAreas.map((area, index) => (
              <Card 
                key={index}
                className={`${area.color} border hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-white/50 rounded-lg flex items-center justify-center mb-4">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                    <Badge variant="secondary">{area.publications} papers</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{area.description}</p>
                  <div>
                    <h4 className="font-medium text-foreground mb-2">Active Projects:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {area.projects.map((project, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Current <span className="text-primary">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ongoing research initiatives that are shaping our understanding of Tunisia's bird ecology
            </p>
          </div>

          <div className="space-y-8">
            {currentProjects.map((project, index) => (
              <Card 
                key={index}
                className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {project.duration}
                        </div>
                        <Badge variant={project.status === 'Active' ? 'default' : project.status === 'Analysis' ? 'secondary' : 'outline'}>
                          {project.status}
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">{project.progress}%</div>
                      <div className="text-sm text-muted-foreground">Complete</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        Research Partners
                      </h4>
                      <div className="space-y-2">
                        {project.partners.map((partner, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs mr-2">
                            {partner}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-3 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2 text-primary" />
                        Key Findings
                      </h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.findings.map((finding, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></div>
                            {finding}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm text-muted-foreground">{project.progress}%</span>
                    </div>
                    <div className="w-full bg-background rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${project.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications & Datasets */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Publications */}
            <div className="fade-in-up">
              <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <FileText className="w-8 h-8 mr-3 text-primary" />
                Recent Publications
              </h3>
              
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <Card key={index} className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg leading-tight mb-2">{pub.title}</CardTitle>
                          <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                          <div className="flex items-center gap-4 text-sm">
                            <span className="text-primary font-medium">{pub.journal}</span>
                            <span className="text-muted-foreground">{pub.year}</span>
                            <Badge variant="outline" className="text-xs">
                              {pub.citations} citations
                            </Badge>
                          </div>
                        </div>
                        <div className="flex flex-col gap-2 ml-4">
                          {pub.openAccess && (
                            <Badge variant="secondary" className="text-xs">
                              Open Access
                            </Badge>
                          )}
                          <Button size="sm" variant="outline">
                            <ExternalLink className="w-3 h-3 mr-1" />
                            View
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </div>

            {/* Datasets */}
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center">
                <Database className="w-8 h-8 mr-3 text-primary" />
                Research Datasets
              </h3>
              
              <div className="space-y-6">
                {datasets.map((dataset, index) => (
                  <Card key={index} className="border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-lg">{dataset.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{dataset.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-3 gap-4 text-center mb-4">
                        <div>
                          <div className="text-lg font-bold text-primary">{dataset.records}</div>
                          <div className="text-xs text-muted-foreground">Records</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-secondary">{dataset.lastUpdated}</div>
                          <div className="text-xs text-muted-foreground">Updated</div>
                        </div>
                        <div>
                          <Badge variant={dataset.access === 'Open Access' ? 'default' : 'secondary'} className="text-xs">
                            {dataset.access}
                          </Badge>
                        </div>
                      </div>
                      <Button size="sm" className="w-full">
                        <Download className="w-3 h-3 mr-2" />
                        Access Dataset
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Tools */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Research <span className="text-primary">Tools & Methods</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology and methodologies driving our scientific discoveries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchTools.map((tool, index) => (
              <Card 
                key={index}
                className="text-center border-primary/20 bg-white/50 backdrop-blur-sm hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <tool.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{tool.description}</p>
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
              Collaborate with <span className="text-primary">Our Research</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our research network, access our datasets, or propose collaborative studies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-conservation text-lg px-8 py-4">
                <Users className="mr-2 h-5 w-5" />
                Research Partnership
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/5">
                <Download className="mr-2 h-5 w-5" />
                Access Data
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Research;