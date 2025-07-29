import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { downloadResume } from "@/utils/resumeUtils";

const Resume = () => {
  const experience = [
    {
      period: "2025 - Present time",
      title: "Full-stack Developer | Web Dev",
      description: "At the current time, I'm a proudly self-taught full-stack developer. Playing around with CyberSecurity and learning how jobs actually work by helping people make roblox games using Lua/Luau. This helps me to gain more experience to be versatile in actual jobs later on."
    },
    {
      period: "2024",
      title: "Frontend Developer",
      description: "At that state, I was certified from IBM in frontend development!"
    },
    {
      period: "2020-2022",
      title: "Frontend Developer",
      description: "Started out frontend development with prograde junior, until they sadly had to shut down."
    },
    {
      period: "2017-2022",
      title: "Beginner",
      description: "Started learning scratch on udemy which gave me an amazing start to programming."
    }
  ];

  const education = [
    {
      period: "2025 - Present",
      degree: "MLS",
      description: "8th Grader with many achievements, and many more to come!"
    },
        {
      period: "2024",
      degree: "Coursera - At homoe",
      description: "Started digging into Coursera 👀"
    },
    {
      period: "2022",
      degree: "MLS",
      description: "Got my first major achievement, 17th place locally in Create your E-book competition."
    },
        {
      period: "2020",
      degree: "Online mentorship - At home",
      description: "Prograde junior, Got taught HTML5, CSS3, JS, in conclusion, the basics of web dev"
    },
    {
      period: "2016",
      degree: "Udemy - At home",
      description: "This was when everything started! MIT Scratch via a Udemy course"
    }
  ];

  const skills = [
    { name: "HTML5 & CSS3", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Python", level: 85 },
    { name: "Figma", level: 90 },
    { name: "Angular & Bootstrap", level: 75 },
    { name: "Node.js", level: 70 },
  ];

  const languages = [
    { name: "English", level: 95 },
    { name: "German (A1)", level: 16.66},
    { name: "Arabic (Home language)", level: 100 },
    { name: "Others im not qualified enough in", level: 10  },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              My <span className="text-primary">Resume</span>
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-6" />
            <Button onClick={downloadResume} className="mb-8">
              <Download className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {exp.period}
                      </Badge>
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-primary pl-6 relative">
                    <div className="absolute -left-2 top-0 w-4 h-4 bg-primary rounded-full" />
                    <div className="space-y-2">
                      <Badge variant="outline" className="text-primary border-primary">
                        {edu.period}
                      </Badge>
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Skills</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-foreground">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Languages Section */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Languages
                <div className="w-12 h-1 bg-primary rounded-full mt-2 mx-auto" />
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                {languages.map((lang, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-foreground">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}%</span>
                    </div>
                    <Progress value={lang.level} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Resume;
