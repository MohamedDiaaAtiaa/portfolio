import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Download } from "lucide-react";
import { useState } from "react";
import bankingAppImage from "@/assets/ui-banking-app.png";
import ecommerceAppImage from "@/assets/ui-ecommerce-app.png";
import socialDashboardImage from "@/assets/ui-social-dashboard.png";
import musicAppImage from "@/assets/ui-music-app.png";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Y-Store E-Commerce Platform",
      description: "Modern e-commerce platform with neon aesthetic and gaming theme",
      image: "/lovable-uploads/3528e74d-8961-434a-9f93-344de0317e53.png",
      category: "Web",
      technologies: ["React", "Node.js", "CSS3", "JavaScript"],
      liveUrl: "https://y-store.github.io/Shop/",
      githubUrl: "https://github.com/Y-Store/Shop"
    },
    {
      id: 2,
      title: "SF25 Science Fair Platform",
      description: "Science fair management system with modern interface and project showcase",
      image: "/lovable-uploads/78b43603-4c3d-4153-8a78-b42d56f159a7.png",
      category: "Web",
      technologies: ["React", "TypeScript", "CSS Grid", "APIs"],
      liveUrl: "https://mls25.github.io/SF/",
      githubUrl: "https://github.com/MLS25/SF"
    },
    {
      id: 3,
      title: "Fortnite Store Interface",
      description: "Gaming marketplace interface with dark theme and modern design",
      image: "/lovable-uploads/fe65a999-b7d5-4b9b-a47a-6d470b8df245.png",
      category: "Web",
      technologies: ["React", "CSS3", "JavaScript", "UI/UX"],
      liveUrl: "",
      githubUrl: ""
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Personal portfolio website with modern design and animations",
      image: "/lovable-uploads/7cddf6e6-f174-4fea-8ed1-af76d5d67e2d.png",
      category: "Web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "",
      githubUrl: "https://github.com/MohamedDiaaAtiaa/portfolio"
    },
    {
      id: 5,
      title: "Startify Dropshipping Platform",
      description: "Complete dropshipping solution with automated fulfillment and supplier management",
      image: "/lovable-uploads/88268b20-07c9-46e4-bcb5-83047ed85258.png",
      category: "Web",
      technologies: ["React", "TypeScript", "Node.js", "API Integration"],
      liveUrl: "https://preview--bridge-n-flow.lovable.app/",
      githubUrl: "https://github.com/MohamedDiaaAtiaa/bridge-n-flow"
    },
    {
      id: 6,
      title: "Banking App UI Design",
      description: "Modern mobile banking interface with dark theme and neon accents",
      image: bankingAppImage,
      category: "UI/UX",
      technologies: ["Figma", "UI Design", "Mobile", "Dark Theme"],
      liveUrl: "",
      githubUrl: "",
      downloadable: true
    },
    {
      id: 7,
      title: "E-Commerce App UI",
      description: "Futuristic shopping app with glassmorphism design and modern layouts",
      image: ecommerceAppImage,
      category: "UI/UX",
      technologies: ["Figma", "UI Design", "Glassmorphism", "Mobile"],
      liveUrl: "",
      githubUrl: "",
      downloadable: true
    },
    {
      id: 8,
      title: "Social Media Dashboard",
      description: "Clean analytics dashboard with modern minimalist design approach",
      image: socialDashboardImage,
      category: "UI/UX",
      technologies: ["Figma", "UI Design", "Dashboard", "Analytics"],
      liveUrl: "",
      githubUrl: "",
      downloadable: true
    },
    {
      id: 9,
      title: "Music Streaming App UI",
      description: "Dark mode music player with album artwork and neon purple accents",
      image: musicAppImage,
      category: "UI/UX",
      technologies: ["Figma", "UI Design", "Music Player", "Dark Mode"],
      liveUrl: "",
      githubUrl: "",
      downloadable: true
    }
  ];

  const filters = ["All", "Web", "UI/UX"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const downloadImage = async (imageSrc: string, fileName: string) => {
    try {
      const response = await fetch(imageSrc);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${fileName}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              My <span className="text-primary">Portfolio</span>
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto" />
          </div>

          {/* Filter Tabs */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-2 bg-muted p-1 rounded-lg">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                    activeFilter === filter
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-video bg-muted overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <Badge variant="outline" className="text-primary border-primary">
                      {project.category}
                    </Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex space-x-2">
                    {project.liveUrl && (
                      <Button size="sm" className="flex-1" asChild>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Code
                        </a>
                      </Button>
                    )}
                    {(project as any).downloadable && (
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        onClick={() => downloadImage(project.image, project.title)}
                        className="flex items-center gap-2"
                      >
                        <Download className="w-4 h-4" />
                        PNG
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;