
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pencil, Trash2, Plus, Save } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { FooterData, FooterSection, FooterLink } from "@/components/Footer";

// Default footer data - in a real app, this would come from a database
const initialFooterData: FooterData = {
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

const AdminFooter = () => {
  const [footerData, setFooterData] = useState<FooterData>(initialFooterData);
  const [currentSection, setCurrentSection] = useState<FooterSection | null>(null);
  const [currentLink, setCurrentLink] = useState<FooterLink | null>(null);
  const [activeSectionId, setActiveSectionId] = useState<number | null>(null);
  const [activeLinkId, setActiveLinkId] = useState<number | null>(null);
  const { toast } = useToast();

  // Save footer data to localStorage
  const saveFooterData = () => {
    localStorage.setItem('footerData', JSON.stringify(footerData));
    toast({
      title: "Footer settings saved",
      description: "Your footer changes have been saved and are now live.",
    });
  };

  // Handle section title change
  const handleSectionTitleChange = (id: number, newTitle: string) => {
    setFooterData({
      ...footerData,
      sections: footerData.sections.map((section) => 
        section.id === id ? { ...section, title: newTitle } : section
      )
    });
  };

  // Add new section
  const handleAddSection = () => {
    const newId = Math.max(0, ...footerData.sections.map(s => s.id)) + 1;
    const newSection: FooterSection = {
      id: newId,
      title: "NEW SECTION",
      links: [],
    };
    
    setFooterData({
      ...footerData,
      sections: [...footerData.sections, newSection],
    });
    
    setCurrentSection(newSection);
    setActiveSectionId(newId);
  };

  // Delete section
  const handleDeleteSection = (id: number) => {
    setFooterData({
      ...footerData,
      sections: footerData.sections.filter(section => section.id !== id),
    });
    setActiveSectionId(null);
    setCurrentSection(null);
  };

  // Edit section
  const handleEditSection = (section: FooterSection) => {
    setCurrentSection(section);
    setActiveSectionId(section.id);
    setActiveLinkId(null);
    setCurrentLink(null);
  };

  // Add link to section
  const handleAddLink = (sectionId: number) => {
    const section = footerData.sections.find(s => s.id === sectionId);
    if (!section) return;
    
    const newId = Math.max(0, ...footerData.sections.flatMap(s => s.links.map(l => l.id))) + 1;
    const newLink: FooterLink = {
      id: newId,
      title: "New Link",
      url: "/",
      isExternal: false,
    };
    
    const updatedSections = footerData.sections.map(s => 
      s.id === sectionId 
        ? { ...s, links: [...s.links, newLink] } 
        : s
    );
    
    setFooterData({
      ...footerData,
      sections: updatedSections,
    });
    
    setCurrentLink(newLink);
    setActiveLinkId(newId);
  };

  // Delete link
  const handleDeleteLink = (sectionId: number, linkId: number) => {
    const updatedSections = footerData.sections.map(s => 
      s.id === sectionId 
        ? { ...s, links: s.links.filter(l => l.id !== linkId) } 
        : s
    );
    
    setFooterData({
      ...footerData,
      sections: updatedSections,
    });
    
    if (activeLinkId === linkId) {
      setActiveLinkId(null);
      setCurrentLink(null);
    }
  };

  // Edit link
  const handleEditLink = (sectionId: number, link: FooterLink) => {
    setCurrentLink(link);
    setActiveLinkId(link.id);
  };

  // Update link
  const handleUpdateLink = (sectionId: number, updatedLink: FooterLink) => {
    const updatedSections = footerData.sections.map(s => 
      s.id === sectionId 
        ? { 
            ...s, 
            links: s.links.map(l => l.id === updatedLink.id ? updatedLink : l)
          } 
        : s
    );
    
    setFooterData({
      ...footerData,
      sections: updatedSections,
    });
  };

  // Handle social links change
  const handleSocialLinkChange = (platform: keyof typeof footerData.socialLinks, value: string) => {
    setFooterData({
      ...footerData,
      socialLinks: {
        ...footerData.socialLinks,
        [platform]: value,
      }
    });
  };

  // Handle copyright change
  const handleCopyrightChange = (value: string) => {
    setFooterData({
      ...footerData,
      copyright: value,
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Footer Settings</h2>
        <Button onClick={saveFooterData}>
          <Save className="mr-2 h-4 w-4" /> Save Footer Settings
        </Button>
      </div>

      <Tabs defaultValue="sections" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="sections">Footer Sections</TabsTrigger>
          <TabsTrigger value="social">Social Links</TabsTrigger>
          <TabsTrigger value="copyright">Copyright</TabsTrigger>
        </TabsList>
        
        <TabsContent value="sections" className="space-y-6">
          <div className="flex justify-end">
            <Button onClick={handleAddSection}>
              <Plus className="mr-2 h-4 w-4" /> Add Section
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Sections List */}
            <Card className="col-span-1">
              <CardContent className="pt-6">
                <h3 className="font-medium mb-4">Footer Sections</h3>
                <ul className="space-y-2">
                  {footerData.sections.map((section) => (
                    <li 
                      key={section.id} 
                      className={`flex justify-between items-center p-2 rounded cursor-pointer ${activeSectionId === section.id ? 'bg-secondary/10' : 'hover:bg-gray-100'}`}
                      onClick={() => handleEditSection(section)}
                    >
                      <span>{section.title}</span>
                      <div className="flex items-center space-x-1">
                        <Button variant="ghost" size="sm" onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteSection(section.id);
                        }}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            {/* Section Editor */}
            {currentSection && (
              <Card className="col-span-2">
                <CardContent className="pt-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-medium">Edit Section</h3>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleAddLink(currentSection.id)}
                    >
                      <Plus className="mr-2 h-4 w-4" /> Add Link
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="section-title">Section Title</Label>
                      <Input
                        id="section-title"
                        value={currentSection.title}
                        onChange={(e) => handleSectionTitleChange(currentSection.id, e.target.value)}
                      />
                    </div>
                    
                    <h4 className="font-medium mt-6">Links</h4>
                    <ul className="space-y-2 mt-2">
                      {currentSection.links.map((link) => (
                        <li 
                          key={link.id} 
                          className={`flex justify-between items-center p-2 rounded cursor-pointer ${activeLinkId === link.id ? 'bg-primary/10' : 'hover:bg-gray-100'}`}
                          onClick={() => handleEditLink(currentSection.id, link)}
                        >
                          <span>{link.title}</span>
                          <div className="flex items-center space-x-1">
                            <Button variant="ghost" size="sm" onClick={(e) => {
                              e.stopPropagation();
                              handleDeleteLink(currentSection.id, link.id);
                            }}>
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          </div>
                        </li>
                      ))}
                    </ul>
                    
                    {currentLink && (
                      <div className="mt-6 p-4 border rounded-md bg-gray-50">
                        <h4 className="font-medium mb-3">Edit Link</h4>
                        <div className="space-y-3">
                          <div>
                            <Label htmlFor="link-title">Link Title</Label>
                            <Input
                              id="link-title"
                              value={currentLink.title}
                              onChange={(e) => setCurrentLink({...currentLink, title: e.target.value})}
                              onBlur={() => handleUpdateLink(currentSection.id, currentLink)}
                            />
                          </div>
                          <div>
                            <Label htmlFor="link-url">URL</Label>
                            <Input
                              id="link-url"
                              value={currentLink.url}
                              onChange={(e) => setCurrentLink({...currentLink, url: e.target.value})}
                              onBlur={() => handleUpdateLink(currentSection.id, currentLink)}
                            />
                          </div>
                          <div className="flex items-center space-x-2">
                            <input
                              type="checkbox"
                              id="is-external"
                              checked={currentLink.isExternal}
                              onChange={(e) => {
                                const updatedLink = {...currentLink, isExternal: e.target.checked};
                                setCurrentLink(updatedLink);
                                handleUpdateLink(currentSection.id, updatedLink);
                              }}
                              className="h-4 w-4"
                            />
                            <Label htmlFor="is-external">External Link (opens in new tab)</Label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </TabsContent>
        
        <TabsContent value="social">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Social Media Links</h3>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="facebook">Facebook URL</Label>
                  <Input
                    id="facebook"
                    value={footerData.socialLinks.facebook}
                    onChange={(e) => handleSocialLinkChange('facebook', e.target.value)}
                    placeholder="https://facebook.com/yourbrand"
                  />
                </div>
                <div>
                  <Label htmlFor="twitter">Twitter URL</Label>
                  <Input
                    id="twitter"
                    value={footerData.socialLinks.twitter}
                    onChange={(e) => handleSocialLinkChange('twitter', e.target.value)}
                    placeholder="https://twitter.com/yourbrand"
                  />
                </div>
                <div>
                  <Label htmlFor="linkedin">LinkedIn URL</Label>
                  <Input
                    id="linkedin"
                    value={footerData.socialLinks.linkedin}
                    onChange={(e) => handleSocialLinkChange('linkedin', e.target.value)}
                    placeholder="https://linkedin.com/company/yourbrand"
                  />
                </div>
                <div>
                  <Label htmlFor="instagram">Instagram URL</Label>
                  <Input
                    id="instagram"
                    value={footerData.socialLinks.instagram}
                    onChange={(e) => handleSocialLinkChange('instagram', e.target.value)}
                    placeholder="https://instagram.com/yourbrand"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="copyright">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-medium mb-4">Copyright Information</h3>
              <div>
                <Label htmlFor="copyright">Copyright Text</Label>
                <Input
                  id="copyright"
                  value={footerData.copyright}
                  onChange={(e) => handleCopyrightChange(e.target.value)}
                  placeholder="© 2024 Your Company. All Rights Reserved."
                />
                <p className="text-sm text-gray-500 mt-2">This text will appear at the bottom of your footer.</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminFooter;
