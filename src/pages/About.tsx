import Navigation from "@/components/Navigation";
import AboutComponent from "@/components/About";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="pt-20">
        <AboutComponent />
      </div>
    </div>
  );
};

export default About;