import Navigation from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, Calendar } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Using Python to Interact with the Operating System",
      provider: "Google (Coursera)",
      issueDate: "Dec 10, 2024",
      description: "Advanced Python course covering system administration, file handling, and automation using Python scripts.",
      skills: ["Python", "System Administration", "File Handling", "Automation"],
      credentialUrl: "https://coursera.org/verify/Q9V3QZWTKCX9",
      image: "/lovable-uploads/46e186d6-eb16-46a7-9bdd-f5909da5938f.png"
    },
    {
      id: 2,
      title: "Software Developer Career Guide and Interview Preparation",
      provider: "IBM (Coursera)",
      issueDate: "Jul 9, 2024",
      description: "Comprehensive career development course focusing on software development skills and interview preparation.",
      skills: ["Career Development", "Interview Skills", "Software Development", "Professional Skills"],
      credentialUrl: "https://coursera.org/verify/Q8PWDSFEVXW4",
      image: "/lovable-uploads/ed6b7559-eef3-4cd9-9a74-acc19b89f3b4.png"
    },
    {
      id: 3,
      title: "Crash Course on Python",
      provider: "Google (Coursera)",
      issueDate: "Dec 10, 2024",
      description: "Foundational Python programming course covering basic syntax, data structures, and programming concepts.",
      skills: ["Python", "Programming Fundamentals", "Data Structures", "Problem Solving"],
      credentialUrl: "https://coursera.org/verify/RZR0WZ7AL8GL",
      image: "/lovable-uploads/4d0b4500-3ef1-49f9-9e23-7db966fa3e7d.png"
    },
    {
      id: 4,
      title: "Create Charts and Dashboards Using Microsoft Excel",
      provider: "Coursera Project Network",
      issueDate: "Dec 10, 2024",
      description: "Hands-on project focusing on data visualization and dashboard creation using Microsoft Excel.",
      skills: ["Excel", "Data Visualization", "Charts", "Dashboards"],
      credentialUrl: "https://coursera.org/verify/4NB1XLAJBOAS",
      image: "/lovable-uploads/f704c737-e0eb-445a-a21d-e5cc444f4c54.png"
    },
    {
      id: 5,
      title: "Build a free website with WordPress",
      provider: "Coursera Project Network",
      issueDate: "Dec 10, 2024",
      description: "Practical project on building and deploying websites using WordPress platform.",
      skills: ["WordPress", "Web Development", "CMS", "Website Design"],
      credentialUrl: "https://coursera.org/verify/6YF3LD0WKHBB",
      image: "/lovable-uploads/f3779506-5cbe-4f65-a06e-46cc2d9d851b.png"
    },
    {
      id: 6,
      title: "Using Basic Formulas and Functions in Microsoft Excel",
      provider: "Coursera Project Network",
      issueDate: "Dec 10, 2024",
      description: "Excel fundamentals course covering essential formulas, functions, and data manipulation techniques.",
      skills: ["Excel", "Formulas", "Functions", "Data Analysis"],
      credentialUrl: "https://coursera.org/verify/8DCRQLQ9B55L",
      image: "/lovable-uploads/9cd40265-c5ae-48a5-9b5d-cc2071effe4d.png"
    },
    {
      id: 7,
      title: "Getting Started with Microsoft Excel",
      provider: "Coursera Project Network", 
      issueDate: "Dec 10, 2024",
      description: "Introduction to Microsoft Excel covering basic navigation, formatting, and data entry techniques.",
      skills: ["Excel", "Data Entry", "Formatting", "Spreadsheets"],
      credentialUrl: "https://coursera.org/verify/573YST9M9E5A",
      image: "/lovable-uploads/4641793d-56e1-48b3-9ade-2189e3a3e199.png"
    },
    {
      id: 8,
      title: "Developing Websites and Front-Ends with Bootstrap",
      provider: "IBM (Coursera)",
      issueDate: "Jul 7, 2024",
      description: "Frontend development course focusing on responsive web design using Bootstrap framework.",
      skills: ["Bootstrap", "Frontend Development", "Responsive Design", "CSS"],
      credentialUrl: "https://coursera.org/verify/BSBHT2XONWTH",
      image: "/lovable-uploads/499eecbc-67d1-47b9-8ef0-d4f6779c8fd5.png"
    },
    {
      id: 9,
      title: "Introduction to HTML, CSS, & JavaScript",
      provider: "IBM (Coursera)",
      issueDate: "Jul 7, 2024",
      description: "Comprehensive introduction to web development fundamentals covering HTML, CSS, and JavaScript.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      credentialUrl: "https://coursera.org/verify/LJVYDYWZA5SE",
      image: "/lovable-uploads/59246b11-498e-4906-9cff-a8c7d25a2549.png"
    },
    {
      id: 10,
      title: "Developing Front-End Apps with React",
      provider: "IBM (Coursera)",
      issueDate: "Jul 13, 2024",
      description: "Advanced React development course covering modern React patterns, hooks, state management, and building scalable applications.",
      skills: ["React", "Hooks", "State Management", "Component Architecture"],
      credentialUrl: "https://coursera.org/verify/T4QN8GUQSB9D",
      image: "/lovable-uploads/c98f0d5c-076d-464d-a65c-5a5d8e8bceed.png"
    },
    {
      id: 11,
      title: "Designing User Interfaces and Experiences (UI/UX)",
      provider: "IBM (Coursera)",
      issueDate: "Jul 7, 2024",
      description: "Comprehensive UI/UX design course covering user research, wireframing, prototyping, and design systems.",
      skills: ["UI/UX Design", "User Research", "Prototyping", "Design Systems"],
      credentialUrl: "https://coursera.org/verify/BNUFVKPL6SZ5",
      image: "/lovable-uploads/7418ab65-58d3-41a2-8d2d-7c8b4b92777b.png"
    },
    {
      id: 12,
      title: "Introduction to Software Engineering",
      provider: "IBM (Coursera)",
      issueDate: "Jul 5, 2024",
      description: "Foundational software engineering course covering development methodologies, version control, and software lifecycle.",
      skills: ["Software Engineering", "Version Control", "SDLC", "Agile Methodology"],
      credentialUrl: "https://coursera.org/verify/SQ63SU37SXCC",
      image: "/lovable-uploads/1c69518e-f173-48e5-ae77-d8a13e141099.png"
    },
    {
      id: 13,
      title: "Getting Started with Front-End and Web Development",
      provider: "IBM (Coursera)",
      issueDate: "Jul 5, 2024",
      description: "Introduction to web development fundamentals covering HTML, CSS, JavaScript, and modern development practices.",
      skills: ["Web Development", "HTML", "CSS", "JavaScript", "Development Tools"],
      credentialUrl: "https://coursera.org/verify/W5AJQZU2ZHF9",
      image: "/lovable-uploads/4f24d2b9-9050-489a-b889-2b1e07fc075b.png"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              My <span className="text-primary">Certifications</span>
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of my professional certifications and completed courses that showcase my commitment to continuous learning and skill development.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <Card key={cert.id} className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-primary-glow/10 flex items-center justify-center overflow-hidden">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-foreground">{cert.title}</h3>
                    <Badge variant="outline" className="text-primary border-primary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {cert.issueDate}
                    </Badge>
                  </div>
                  
                  <p className="text-sm text-primary font-medium mb-3">{cert.provider}</p>
                  
                  <p className="text-muted-foreground mb-4 text-sm">
                    {cert.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-foreground mb-2">Skills Covered:</p>
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    <Button 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.open(cert.credentialUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Credential
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">13+</div>
                <div className="text-muted-foreground">Certifications</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">400+</div>
                <div className="text-muted-foreground">Hours of Learning</div>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">3</div>
                <div className="text-muted-foreground">Platforms</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;