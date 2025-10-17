import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ExperiencesPage from "./pages/experiences/page";
import ResumePage from "./pages/resume/page";
import CertificatesPage from "./pages/Certificates/page";
import ResearchPaperPage from "./pages/researchpaper/page";
import ExtracurricularPage from "./pages/extracurricular/page";
import Header from "./components/Header";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Header />
    <TooltipProvider>
      <Toaster />
      
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/resumes" element={<ResumePage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/researchpaper" element={<ResearchPaperPage />} />
          <Route path="/extraxcurricular" element={<ExtracurricularPage />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
