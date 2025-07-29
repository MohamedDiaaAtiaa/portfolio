import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Download, Calendar, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { downloadResume } from "@/utils/resumeUtils";

const About = () => {
  const personalInfo = [
    { icon: Calendar, label: "Birthdate", value: "29/11/2011" },
    { icon: Mail, label: "Email", value: "mohameddiaaatiaa@gmail.com" },
    { icon: Phone, label: "Phone", value: "+201150315842" },
    { icon: MessageCircle, label: "Discord", value: "rip_voidvastakentwice" },
    { icon: MapPin, label: "Address", value: "Egypt, Cairo, New Cairo, Al Shorouk city, al rabat al awsat" },
  ];

  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "Python", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Git & GitHub", level: 88 },
  ];

  const expertise = [
    { title: "Python", description: "Certified from Google", color: "bg-blue-500" },
    { title: "UI/UX Design", description: "Certified from IBM", color: "bg-purple-500" },
    { title: "Frontend Web Development", description: "Certified from IBM", color: "bg-green-500" },
    { title: "Full Stack Development", description: "Self-taught expert", color: "bg-red-500" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Who am I? */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl">
                Who am I?
                <div className="w-12 h-1 bg-primary rounded-full mt-2" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <h3 className="text-lg font-semibold text-foreground">
                A Web Designer / Developer Located In Cairo, Egypt
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Since a very young age, I was attracted towards frontend development in general as 
                it seemed as a vast open world for me to pour my creativity into, and here we are now!
              </p>
              <Button variant="outline" className="w-full" onClick={downloadResume}>
                <Download className="w-4 h-4" />
                Download My Resume
              </Button>
            </CardContent>
          </Card>

          {/* Personal Info */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl">
                Personal Info
                <div className="w-12 h-1 bg-primary rounded-full mt-2" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {personalInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <info.icon className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-foreground">{info.label}</p>
                    <p className="text-sm text-muted-foreground break-words">{info.value}</p>
                  </div>
                </div>
              ))}
              
              {/* Social Links */}
              <div className="flex space-x-4 pt-4 border-t border-border">
                <a href="https://www.linkedin.com/in/mohamed-diaa-4b0727332/" className="text-primary hover:text-primary-glow transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* My Expertise */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="text-2xl">
                My Expertise
                <div className="w-12 h-1 bg-primary rounded-full mt-2" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {expertise.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-12 h-12 ${skill.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <div className="w-6 h-6 bg-white rounded-sm" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{skill.title}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Skills Section */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-2xl text-center">
              Technical Skills
              <div className="w-12 h-1 bg-primary rounded-full mt-2 mx-auto" />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium text-foreground">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skill.level} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
                  {/* A lil bit about me */}
                  <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
                    <CardContent className="p-8 text-center">
                      <h3 className="text-2xl font-bold text-foreground mb-4">
                        Stuff about me!
                      </h3>
                      <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                        I'm a 13 year old (Almost 14), in Cairo, Egypt, my hobbies are Skating, Video Games,
                        <br /> Reading anything and everything, Martial arts (Teakwondo, Kung fu, and alot more!)
                      </p>
                      <a href="mailto:mohameddiaaatiaa@gmail.com">
                      <Button variant="gradient" size="lg">
                        
                        <Mail  className="w-5 h-5" />
                        Have something to say?
                      </Button>
                      </a>
                    </CardContent>
                  </Card>
      </div>
    </section>
  );
};

export default About;
