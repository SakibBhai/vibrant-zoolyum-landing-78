
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Index from "./pages/Index";
import Portfolio from "./pages/Portfolio";
import CaseStudy from "./pages/CaseStudy";
import Blog from "./pages/Blog";
import Admin from "./pages/Admin";
import Mission from "./pages/Mission";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <>
    <Helmet>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#FF5001" />
      <meta name="description" content="Zoolyum - Creative agency specializing in branding, web design, and digital marketing solutions that drive results." />
      <meta name="keywords" content="creative agency, branding, web design, digital marketing, UI/UX design" />
    </Helmet>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/case-study" element={<CaseStudy />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/mission" element={<Mission />} />
            <Route path="/admin" element={<Admin />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </>
);

export default App;
