import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { downloadResume } from "@/utils/resumeUtils";
const Hero = () => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10" />
      
      {/* Social Links - Top Right */}
      <div className="absolute top-20 right-6 z-20 flex space-x-4">
        <a href="http://github.com/MohamedDiaaAtiaa" className="text-white/80 hover:text-primary transition-colors">
          <Github className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/mohamed-diaa-4b0727332/" className="text-white/80 hover:text-primary transition-colors">
          <Linkedin className="w-5 h-5" />
        </a>
        <a href="mailto:mohameddiaaatiaa@gmail.com" className="text-white/80 hover:text-primary transition-colors">
          <Mail className="w-5 h-5" />
        </a>
      </div>

      {/* Main Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <h2 className="text-white/90 text-lg md:text-xl mb-4 font-light">
          Hello, I am
        </h2>
        <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Mohamed Diaa
        </h1>
        <p className="text-white/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Frontend Designer | Web Developer
        </p>
        <Button variant="hero" size="lg" className="group">
          <Download onClick={downloadResume} className="w-5 h-5 group-hover:animate-bounce" />
          View Resume
        </Button>
      </div>

      {/* Profile Image - Bottom Center */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 z-20">
        <Avatar className="w-32 h-32 border-4 border-white shadow-2xl">
          <AvatarImage src="/lovable-uploads/61019319-c5bd-49a8-a36a-17f35b836230.png" alt="Mohamed Diaa" />
          <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">
            MD
          </AvatarFallback>
        </Avatar>
      </div>
    </section>
  );
};

export default Hero;