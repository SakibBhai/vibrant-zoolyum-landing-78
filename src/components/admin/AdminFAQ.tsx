
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Pencil, Trash2, Plus, Eye, MoveUp, MoveDown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const AdminFAQ = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentFAQ, setCurrentFAQ] = useState<FAQItem>({
    id: 0,
    question: "",
    answer: "",
  });
  const { toast } = useToast();

  useEffect(() => {
    // Load FAQs from localStorage
    const savedFAQs = localStorage.getItem("faqData");
    if (savedFAQs) {
      setFaqs(JSON.parse(savedFAQs));
    } else {
      // Default FAQs if none exist
      const defaultFAQs = [
        {
          id: 1,
          question: "What services does Zoolyum offer?",
          answer: "Zoolyum offers a comprehensive range of creative and digital services including branding, web design and development, digital marketing, content creation, and strategic consulting tailored to meet your business needs."
        },
        {
          id: 2,
          question: "How does the creative process work?",
          answer: "Our creative process begins with understanding your business goals, followed by research, strategy development, concept creation, execution, and continuous refinement. We maintain open communication throughout the entire journey to ensure your vision is achieved."
        },
        {
          id: 3,
          question: "How long does a typical project take?",
          answer: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while comprehensive branding projects can take 2-3 months. During our initial consultation, we'll provide a personalized timeline for your specific project."
        },
        {
          id: 4,
          question: "Do you work with businesses of all sizes?",
          answer: "Yes! We work with businesses of all sizes, from startups to established enterprises. Our flexible approach allows us to tailor our services to match your specific needs and budget constraints."
        },
        {
          id: 5,
          question: "What makes Zoolyum different from other agencies?",
          answer: "Zoolyum stands out through our strategic approach, creative excellence, and commitment to measurable results. We focus on building long-term partnerships rather than one-off projects, becoming an extension of your team dedicated to your ongoing success."
        }
      ];
      setFaqs(defaultFAQs);
      localStorage.setItem("faqData", JSON.stringify(defaultFAQs));
    }
  }, []);

  const saveFAQs = (updatedFAQs: FAQItem[]) => {
    localStorage.setItem("faqData", JSON.stringify(updatedFAQs));
    setFaqs(updatedFAQs);
  };

  const handleAddNew = () => {
    setIsEditing(true);
    setCurrentFAQ({
      id: Date.now(),
      question: "",
      answer: "",
    });
  };

  const handleEdit = (faq: FAQItem) => {
    setIsEditing(true);
    setCurrentFAQ(faq);
  };

  const handleDelete = (id: number) => {
    const updatedFAQs = faqs.filter(faq => faq.id !== id);
    saveFAQs(updatedFAQs);
    toast({
      title: "FAQ deleted",
      description: "The FAQ has been removed successfully",
    });
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    const updatedFAQs = [...faqs];
    [updatedFAQs[index - 1], updatedFAQs[index]] = [updatedFAQs[index], updatedFAQs[index - 1]];
    saveFAQs(updatedFAQs);
    toast({
      title: "FAQ moved up",
      description: "The FAQ order has been updated",
    });
  };

  const handleMoveDown = (index: number) => {
    if (index === faqs.length - 1) return;
    const updatedFAQs = [...faqs];
    [updatedFAQs[index], updatedFAQs[index + 1]] = [updatedFAQs[index + 1], updatedFAQs[index]];
    saveFAQs(updatedFAQs);
    toast({
      title: "FAQ moved down",
      description: "The FAQ order has been updated",
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (faqs.some(f => f.id === currentFAQ.id)) {
      // Update existing FAQ
      const updatedFAQs = faqs.map(f => f.id === currentFAQ.id ? currentFAQ : f);
      saveFAQs(updatedFAQs);
      toast({
        title: "FAQ updated",
        description: "The FAQ has been updated successfully",
      });
    } else {
      // Add new FAQ
      const updatedFAQs = [...faqs, currentFAQ];
      saveFAQs(updatedFAQs);
      toast({
        title: "FAQ added",
        description: "The new FAQ has been added successfully",
      });
    }
    
    setIsEditing(false);
    setCurrentFAQ({ id: 0, question: "", answer: "" });
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentFAQ({ id: 0, question: "", answer: "" });
  };

  const handlePreview = () => {
    toast({
      title: "FAQ Preview",
      description: "This would show a preview of all FAQs in a real implementation",
    });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handlePreview}>
            <Eye className="mr-2 h-4 w-4" /> Preview
          </Button>
          <Button onClick={handleAddNew}>
            <Plus className="mr-2 h-4 w-4" /> Add New FAQ
          </Button>
        </div>
      </div>

      {isEditing ? (
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="question" className="text-sm font-medium">Question</label>
                <Input 
                  id="question" 
                  value={currentFAQ.question} 
                  onChange={(e) => setCurrentFAQ({...currentFAQ, question: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="answer" className="text-sm font-medium">Answer</label>
                <Textarea 
                  id="answer" 
                  value={currentFAQ.answer} 
                  onChange={(e) => setCurrentFAQ({...currentFAQ, answer: e.target.value})}
                  rows={5}
                  required
                />
              </div>
              
              <div className="flex gap-2 justify-end">
                <Button type="button" variant="outline" onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="submit">
                  {currentFAQ.id !== 0 ? "Update FAQ" : "Add FAQ"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="bg-white rounded-lg border mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[50px]">Order</TableHead>
                  <TableHead>Question</TableHead>
                  <TableHead className="w-[100px] text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faqs.map((faq, index) => (
                  <TableRow key={faq.id}>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center">
                        <button 
                          onClick={() => handleMoveUp(index)}
                          className="text-gray-500 hover:text-gray-700 p-1 disabled:opacity-50"
                          disabled={index === 0}
                        >
                          <MoveUp size={16} />
                        </button>
                        <button 
                          onClick={() => handleMoveDown(index)}
                          className="text-gray-500 hover:text-gray-700 p-1 disabled:opacity-50"
                          disabled={index === faqs.length - 1}
                        >
                          <MoveDown size={16} />
                        </button>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">{faq.question}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button size="sm" variant="ghost" onClick={() => handleEdit(faq)}>
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" onClick={() => handleDelete(faq.id)}>
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="preview">
              <AccordionTrigger>Preview FAQs</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 p-4 bg-gray-50 rounded-lg">
                  {faqs.map((faq, index) => (
                    <div key={faq.id} className="p-4 bg-white rounded-lg shadow">
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      )}
    </div>
  );
};

export default AdminFAQ;
