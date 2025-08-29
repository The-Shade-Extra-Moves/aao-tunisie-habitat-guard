import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  FileText, 
  Calendar, 
  User,
  Clock,
  Search,
  Tag,
  TrendingUp,
  Bird,
  Camera,
  Microscope,
  Users,
  Globe,
  ArrowRight,
  BookOpen,
  Heart,
  Share
} from "lucide-react";

const Blog = () => {
  const featuredPost = {
    id: "spring-migration-2024",
    title: "Spring Migration 2024: Record Numbers at Ichkeul",
    excerpt: "This spring brought unprecedented numbers of migratory birds to Ichkeul National Park, with several rare species making their first recorded appearances in Tunisia.",
    author: "Dr. Ahmed Ben Salem",
    date: "March 28, 2024",
    readTime: "8 min read",
    category: "Research",
    image: "/api/placeholder/800/400",
    tags: ["Migration", "Ichkeul", "Conservation", "Research"]
  };

  const recentPosts = [
    {
      id: "citizen-science-impact",
      title: "How Citizen Scientists Are Revolutionizing Bird Monitoring",
      excerpt: "Our citizen science program has collected over 50,000 observations this year, providing crucial data for conservation decisions.",
      author: "Leila Bouazizi",
      date: "March 25, 2024",
      readTime: "5 min read",
      category: "Education",
      image: "/api/placeholder/400/250",
      tags: ["Citizen Science", "Technology", "Community"]
    },
    {
      id: "flamingo-breeding-success",
      title: "Greater Flamingo Breeding Success at Kelbia Wetlands",
      excerpt: "The 2024 breeding season shows remarkable success for Greater Flamingos, with over 2,000 pairs nesting successfully.",
      author: "Fatima Mansouri",
      date: "March 20, 2024",
      readTime: "6 min read",
      category: "Conservation",
      image: "/api/placeholder/400/250",
      tags: ["Flamingos", "Breeding", "Wetlands", "Success Story"]
    },
    {
      id: "stop-braconnage-update",
      title: "STOP! Braconnage Platform Reaches 5,000 Reports Milestone",
      excerpt: "Our anti-poaching platform has processed 5,000 reports since launch, leading to significant reductions in illegal hunting.",
      author: "Karim Dridi",
      date: "March 15, 2024",
      readTime: "4 min read",
      category: "Conservation",
      image: "/api/placeholder/400/250",
      tags: ["Anti-Poaching", "Technology", "Law Enforcement"]
    },
    {
      id: "youth-engagement-program",
      title: "Engaging Young Minds: Mini Club d'Ornithologie Expansion",
      excerpt: "Our youth program has expanded to 85 schools across Tunisia, inspiring the next generation of conservationists.",
      author: "Leila Bouazizi",
      date: "March 10, 2024",
      readTime: "7 min read",
      category: "Education",
      image: "/api/placeholder/400/250",
      tags: ["Youth", "Education", "Schools", "Future"]
    },
    {
      id: "gps-tracking-insights",
      title: "GPS Tracking Reveals New Stork Migration Routes",
      excerpt: "Our latest GPS tracking data shows White Storks are adapting their migration routes in response to climate change.",
      author: "Dr. Ahmed Ben Salem",
      date: "March 5, 2024",
      readTime: "9 min read",
      category: "Research",
      image: "/api/placeholder/400/250",
      tags: ["GPS Tracking", "Migration", "Climate Change", "White Storks"]
    },
    {
      id: "community-partnership",
      title: "Building Bridges: Community Partnership Success Stories",
      excerpt: "Local communities are becoming powerful allies in conservation, with farmers adopting bird-friendly practices.",
      author: "Karim Dridi",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "Community",
      image: "/api/placeholder/400/250",
      tags: ["Community", "Partnerships", "Farmers", "Collaboration"]
    }
  ];

  const categories = [
    { name: "Research", count: 24, color: "text-primary" },
    { name: "Conservation", count: 18, color: "text-secondary" },
    { name: "Education", count: 15, color: "text-accent" },
    { name: "Community", count: 12, color: "text-earth" },
    { name: "Technology", count: 8, color: "text-sky" }
  ];

  const popularTags = [
    "Migration", "Wetlands", "Citizen Science", "GPS Tracking", "Conservation Success",
    "Youth Education", "Anti-Poaching", "Climate Change", "Community Engagement", "Research"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center fade-in-up">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-8">
              <FileText className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Conservation <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stories from the field, research insights, conservation successes, and updates 
              from Tunisia's leading bird conservation organization.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center mb-8 fade-in-up">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input 
                  placeholder="Search articles, research, and conservation stories..." 
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button className="h-12 px-6 btn-conservation">
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-3 justify-center fade-in-up" style={{ animationDelay: '0.1s' }}>
              {categories.map((category, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className={`hover:bg-primary/5 ${category.color}`}
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-primary/10 hover:shadow-[var(--shadow-large)] transition-all duration-300 fade-in-up">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-square bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <Bird className="w-16 h-16 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Featured Article Image</p>
                  </div>
                </div>
                
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      Featured
                    </Badge>
                    <Badge variant="outline">
                      {featuredPost.category}
                    </Badge>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-foreground mb-4 leading-tight">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Button className="btn-conservation group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Recent <span className="text-primary">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with the latest conservation research, field reports, and community stories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <Card 
                key={post.id}
                className="overflow-hidden border-primary/10 hover:shadow-[var(--shadow-medium)] transition-all duration-300 hover:scale-105 fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video bg-muted/50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      {post.category === 'Research' && <Microscope className="w-6 h-6 text-primary" />}
                      {post.category === 'Conservation' && <Bird className="w-6 h-6 text-primary" />}
                      {post.category === 'Education' && <BookOpen className="w-6 h-6 text-primary" />}
                      {post.category === 'Community' && <Users className="w-6 h-6 text-primary" />}
                    </div>
                    <p className="text-xs text-muted-foreground">Article Image</p>
                  </div>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Share className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-lg leading-tight line-clamp-2">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center">
                      <User className="w-3 h-3 mr-1" />
                      {post.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(0, 2).map((tag, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {post.tags.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{post.tags.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Button variant="outline" className="w-full text-sm group">
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 fade-in-up">
            <Button variant="outline" className="px-8 py-3">
              <TrendingUp className="mr-2 h-4 w-4" />
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tags */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-foreground mb-8 fade-in-up">
              Popular <span className="text-primary">Topics</span>
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center fade-in-up" style={{ animationDelay: '0.1s' }}>
              {popularTags.map((tag, index) => (
                <Button 
                  key={index}
                  variant="outline" 
                  size="sm"
                  className="hover:bg-primary/5 hover:border-primary/30"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary/5 via-sky/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center fade-in-up">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Stay <span className="text-primary">Connected</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest conservation news, research updates, and field stories
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
                type="email"
              />
              <Button className="btn-conservation">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground mt-4">
              Join 5,000+ conservation enthusiasts. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;