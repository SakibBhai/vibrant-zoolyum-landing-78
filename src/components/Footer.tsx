
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export interface FooterLink {
  id: number;
  title: string;
  url: string;
  isExternal: boolean;
}

export interface FooterSection {
  id: number;
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  sections: FooterSection[];
  copyright: string;
  socialLinks: {
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
  };
}

interface FooterProps {
  data: FooterData;
}

const Footer = ({ data }: FooterProps) => {
  const renderLink = (link: FooterLink) => {
    if (link.isExternal) {
      return (
        <a 
          href={link.url} 
          target="_blank" 
          rel="noreferrer" 
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.title}
        </a>
      );
    } else {
      return (
        <Link 
          to={link.url} 
          className="text-gray-300 hover:text-white transition-colors"
        >
          {link.title}
        </Link>
      );
    }
  };

  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {data.sections.map((section) => (
            <div key={section.id}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.id}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
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
          <div className="text-sm text-gray-300 mb-4 md:mb-0">{data.copyright}</div>
          
          {/* Social Icons */}
          <div className="flex space-x-4">
            {data.socialLinks.facebook && (
              <a href={data.socialLinks.facebook} target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="Facebook">
                <Facebook size={18} />
              </a>
            )}
            {data.socialLinks.linkedin && (
              <a href={data.socialLinks.linkedin} target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            )}
            {data.socialLinks.twitter && (
              <a href={data.socialLinks.twitter} target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="Twitter">
                <Twitter size={18} />
              </a>
            )}
            {data.socialLinks.instagram && (
              <a href={data.socialLinks.instagram} target="_blank" rel="noreferrer" className="bg-white bg-opacity-10 p-2 rounded-full hover:bg-opacity-20 transition-colors" aria-label="Instagram">
                <Instagram size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
