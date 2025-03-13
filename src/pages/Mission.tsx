
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const Mission = () => {
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-up");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        if (isVisible) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Our Mission | Zoolyum Creative Agency</title>
        <meta name="description" content="Learn about Zoolyum's mission to empower businesses through innovative creative solutions and digital excellence." />
        <meta property="og:title" content="Our Mission | Zoolyum Creative Agency" />
        <meta property="og:description" content="Discover how Zoolyum is driving change through creativity and innovation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zoolyum.com/mission" />
        <meta property="og:image" content="/lovable-uploads/d8065ca3-8770-4547-bd54-2883754725d0.png" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center fade-up">Our Mission</h1>
          
          <div className="prose prose-lg max-w-none fade-up">
            <p className="text-xl mb-8 text-center">
              At Zoolyum, we're on a mission to transform how businesses connect with their audiences through creativity, innovation, and strategic thinking.
            </p>
            
            <div className="bg-primary/5 p-8 rounded-lg mb-12 fade-up">
              <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
              <p>
                We envision a world where every business, regardless of size, has access to world-class creative solutions that drive meaningful growth and impact. We believe in the power of creativity to solve complex problems and create lasting connections.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="fade-up">
                <h3 className="text-xl font-semibold mb-3">Values That Drive Us</h3>
                <ul className="space-y-2">
                  <li><strong>Innovation:</strong> We constantly push boundaries and explore new ideas.</li>
                  <li><strong>Excellence:</strong> We hold ourselves to the highest standards in everything we do.</li>
                  <li><strong>Integrity:</strong> We build relationships based on trust, transparency, and honesty.</li>
                  <li><strong>Collaboration:</strong> We believe the best results come from working together.</li>
                  <li><strong>Impact:</strong> We measure our success by the positive change we create.</li>
                </ul>
              </div>
              
              <div className="fade-up">
                <h3 className="text-xl font-semibold mb-3">Our Commitments</h3>
                <ul className="space-y-2">
                  <li><strong>To Our Clients:</strong> Delivering exceptional results that exceed expectations.</li>
                  <li><strong>To Our Community:</strong> Contributing to positive social and environmental impact.</li>
                  <li><strong>To Our Team:</strong> Fostering a culture of growth, creativity, and well-being.</li>
                  <li><strong>To Our Industry:</strong> Advancing standards and practices through innovation.</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-secondary text-white p-8 rounded-lg mb-12 fade-up">
              <h2 className="text-2xl font-semibold mb-4">How We Work</h2>
              <p>
                Our approach combines deep industry expertise, creative thinking, and data-driven insights to deliver solutions that drive real business results. We're not just service providers – we're strategic partners invested in your success.
              </p>
            </div>
            
            <div className="text-center mb-16 fade-up">
              <h2 className="text-2xl font-semibold mb-4">Join Us on Our Journey</h2>
              <p className="mb-6">
                Whether you're a client, a collaborator, or a future team member, we invite you to be part of our mission to create meaningful impact through creativity and innovation.
              </p>
              <a href="/contact" className="inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>
      
      {/* Footer will be rendered by the shared component in the Index.tsx */}
      <Toaster />
    </div>
  );
};

export default Mission;
