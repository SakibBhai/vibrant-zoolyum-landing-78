
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import { Toaster } from "@/components/ui/toaster";
import PortfolioPreview from "@/components/PortfolioPreview";
import CaseStudyPreview from "@/components/CaseStudyPreview";
import BlogPreview from "@/components/BlogPreview";
import FAQ from "@/components/FAQ";
import { Helmet } from "react-helmet";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Index = () => {
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
        <title>Zoolyum | Creative Agency for Digital Excellence</title>
        <meta name="description" content="Zoolyum is a full-service creative agency specializing in branding, web design, digital marketing, and content creation to help businesses achieve growth and success." />
        <meta name="keywords" content="creative agency, branding, web design, digital marketing, content creation, business growth" />
        <meta property="og:title" content="Zoolyum | Creative Agency for Digital Excellence" />
        <meta property="og:description" content="Elevate your brand with our comprehensive creative and digital services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zoolyum.com" />
        <meta property="og:image" content="/lovable-uploads/d8065ca3-8770-4547-bd54-2883754725d0.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Zoolyum | Creative Agency" />
        <meta name="twitter:description" content="Elevate your brand with our comprehensive creative and digital services." />
        <link rel="canonical" href="https://zoolyum.com" />
      </Helmet>
      
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <PortfolioPreview />
        <CaseStudyPreview />
        <BlogPreview />
        <FAQ />
        <Contact />
      </main>
      
      {/* New Footer with Multiple Columns */}
      <footer className="bg-secondary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* EXPLORE Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">EXPLORE</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link to="/mission" className="text-gray-300 hover:text-white transition-colors">Our Mission</Link></li>
                <li><Link to="/team" className="text-gray-300 hover:text-white transition-colors">Meet the Team</Link></li>
                <li><Link to="/success-stories" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link to="/collaborations" className="text-gray-300 hover:text-white transition-colors">Collaborations</Link></li>
              </ul>
            </div>
            
            {/* SERVICES Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">SERVICES</h3>
              <ul className="space-y-2">
                <li><Link to="/services/collaborations" className="text-gray-300 hover:text-white transition-colors">Creative Collaborations</Link></li>
                <li><Link to="/services/branding" className="text-gray-300 hover:text-white transition-colors">Branding & Visual Identity</Link></li>
                <li><Link to="/services/workshops" className="text-gray-300 hover:text-white transition-colors">Workshops & Masterclasses</Link></li>
                <li><Link to="/services/consultation" className="text-gray-300 hover:text-white transition-colors">Consultation Services</Link></li>
                <li><Link to="/services/exhibitions" className="text-gray-300 hover:text-white transition-colors">Art Exhibitions</Link></li>
                <li><Link to="/services/community" className="text-gray-300 hover:text-white transition-colors">Online Community</Link></li>
              </ul>
            </div>
            
            {/* CONNECT Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CONNECT</h3>
              <ul className="space-y-2">
                <li><Link to="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/newsletter" className="text-gray-300 hover:text-white transition-colors">Join Our Newsletter</Link></li>
                <li><a href="https://instagram.com/zoolyum" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Follow Us on Instagram</a></li>
                <li><a href="https://facebook.com/zoolyum" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Like Us on Facebook</a></li>
                <li><a href="https://youtube.com/zoolyum" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-white transition-colors">Subscribe on YouTube</a></li>
              </ul>
            </div>
            
            {/* RESOURCES Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">RESOURCES</h3>
              <ul className="space-y-2">
                <li><Link to="/blog" className="text-gray-300 hover:text-white transition-colors">Blog</Link></li>
                <li><Link to="/tools" className="text-gray-300 hover:text-white transition-colors">Creative Tools</Link></li>
                <li><Link to="/industry" className="text-gray-300 hover:text-white transition-colors">Industry Trends</Link></li>
                <li><Link to="/events" className="text-gray-300 hover:text-white transition-colors">Event Calendar</Link></li>
                <li><Link to="/faq" className="text-gray-300 hover:text-white transition-colors">FAQs</Link></li>
              </ul>
            </div>
            
            {/* LEGAL Column */}
            <div>
              <h3 className="text-lg font-semibold mb-4">LEGAL</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</Link></li>
                <li><Link to="/refund" className="text-gray-300 hover:text-white transition-colors">Refund Policy</Link></li>
                <li><Link to="/copyright" className="text-gray-300 hover:text-white transition-colors">Copyright Information</Link></li>
                <li><Link to="/disclaimer" className="text-gray-300 hover:text-white transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
          </div>
          
          {/* Separator Line */}
          <div className="border-t border-gray-700 my-8"></div>
          
          {/* Bottom Footer Section */}
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Quick Links */}
            <div className="flex space-x-6 mb-4 md:mb-0">
              <Link to="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">Terms</Link>
              <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">Privacy</Link>
              <Link to="/cookies" className="text-sm text-gray-300 hover:text-white transition-colors">Cookies</Link>
            </div>
            
            {/* Copyright */}
            <div className="text-sm text-gray-300 mb-4 md:mb-0">© 2024 By Zoolyum. All Rights Reserved.</div>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a href="https://facebook.com/zoolyum" target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://linkedin.com/company/zoolyum" target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com/zoolyum" target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <Toaster />
    </div>
  );
};

export default Index;
