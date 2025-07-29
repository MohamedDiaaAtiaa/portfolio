import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, MessageCircle, Send, Github, Linkedin, Info } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive"
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "mohameddiaaatiaa@gmail.com",
      href: "mailto:mohameddiaaatiaa@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+201150315842",
      href: "tel:+201150315842"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Cairo, Egypt",
      href: "#"
    },
    {
      icon: MessageCircle,
      title: "Discord",
      value: "rip_voidvastakentwicc",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      href: "http://github.com/MohamedDiaaAtiaa",
      color: "hover:text-gray-600"
    },
    {
      icon: Linkedin,
      name: "LinkedIn", 
      href: "https://www.linkedin.com/in/mohamed-diaa-4b0727332/",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-20 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <div className="w-12 h-1 bg-primary rounded-full mx-auto mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or just having a chat about web development and design.
            </p>
          </div>


          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Contact Information
                    <div className="w-12 h-1 bg-primary rounded-full mt-2" />
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{info.title}</h4>
                        <a 
                          href={info.href}
                          className="text-sm text-muted-foreground hover:text-primary transition-colors break-words"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-12 h-12 bg-muted rounded-lg flex items-center justify-center transition-all hover:bg-primary hover:text-primary-foreground ${social.color}`}
                        title={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-2xl">
                  Send Message
                  <div className="w-12 h-1 bg-primary rounded-full mt-2" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello!"
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  
                  <Button type="submit" size="lg" className="w-full md:w-auto">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <Card className="mt-12 bg-gradient-to-r from-primary/10 to-primary-glow/10 border-primary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to work together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you have a project in mind, need a consultation, or just want to connect, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
              <a href="mailto:mohameddiaaatiaa@gmail.com">
              <Button variant="gradient" size="lg">
                
                <Mail  className="w-5 h-5" />
                Start a Conversation
              </Button>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
