import { useEffect, useState } from "react";
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
import Footer, { FooterData } from "@/components/Footer";

// Default footer data if localStorage is empty
const defaultFooterData: FooterData = {
  sections: [
    {
      id: 1,
      title: "EXPLORE",
      links: [
        { id: 1, title: "About Us", url: "/about", isExternal: false },
        { id: 2, title: "Our Mission", url: "/mission", isExternal: false },
        { id: 3, title: "Meet the Team", url: "/team", isExternal: false },
        { id: 4, title: "Success Stories", url: "/success-stories", isExternal: false },
        { id: 5, title: "Collaborations", url: "/collaborations", isExternal: false },
      ],
    },
    {
      id: 2,
      title: "SERVICES",
      links: [
        { id: 6, title: "Creative Collaborations", url: "/services/collaborations", isExternal: false },
        { id: 7, title: "Branding & Visual Identity", url: "/services/branding", isExternal: false },
        { id: 8, title: "Workshops & Masterclasses", url: "/services/workshops", isExternal: false },
        { id: 9, title: "Consultation Services", url: "/services/consultation", isExternal: false },
        { id: 10, title: "Art Exhibitions", url: "/services/exhibitions", isExternal: false },
        { id: 11, title: "Online Community", url: "/services/community", isExternal: false },
      ],
    },
    {
      id: 3,
      title: "CONNECT",
      links: [
        { id: 12, title: "Contact Us", url: "/contact", isExternal: false },
        { id: 13, title: "Join Our Newsletter", url: "/newsletter", isExternal: false },
        { id: 14, title: "Follow Us on Instagram", url: "https://instagram.com/zoolyum", isExternal: true },
        { id: 15, title: "Like Us on Facebook", url: "https://facebook.com/zoolyum", isExternal: true },
        { id: 16, title: "Subscribe on YouTube", url: "https://youtube.com/zoolyum", isExternal: true },
      ],
    },
    {
      id: 4,
      title: "RESOURCES",
      links: [
        { id: 17, title: "Blog", url: "/blog", isExternal: false },
        { id: 18, title: "Creative Tools", url: "/tools", isExternal: false },
        { id: 19, title: "Industry Trends", url: "/industry", isExternal: false },
        { id: 20, title: "Event Calendar", url: "/events", isExternal: false },
        { id: 21, title: "FAQs", url: "/faq", isExternal: false },
      ],
    },
    {
      id: 5,
      title: "LEGAL",
      links: [
        { id: 22, title: "Terms of Service", url: "/terms", isExternal: false },
        { id: 23, title: "Privacy Policy", url: "/privacy", isExternal: false },
        { id: 24, title: "Cookie Policy", url: "/cookies", isExternal: false },
        { id: 25, title: "Refund Policy", url: "/refund", isExternal: false },
        { id: 26, title: "Copyright Information", url: "/copyright", isExternal: false },
        { id: 27, title: "Disclaimer", url: "/disclaimer", isExternal: false },
      ],
    },
  ],
  copyright: "© 2024 By Zoolyum. All Rights Reserved.",
  socialLinks: {
    facebook: "https://facebook.com/zoolyum",
    twitter: "https://twitter.com/zoolyum",
    linkedin: "https://linkedin.com/company/zoolyum",
    instagram: "https://instagram.com/zoolyum",
  },
};

const Index = () => {
  // Load footer data from localStorage or use default
  const [footerData, setFooterData] = useState<FooterData>(() => {
    const savedData = localStorage.getItem('footerData');
    return savedData ? JSON.parse(savedData) : defaultFooterData;
  });

  // Update footerData when localStorage changes (useful for admin changes)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedData = localStorage.getItem('footerData');
      if (savedData) {
        setFooterData(JSON.parse(savedData));
      }
    };
    
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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
      
      <Footer data={footerData} />
      
      <Toaster />
    </div>
  );
};

export default Index;
