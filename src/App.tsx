import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import SignatureIntro from "@/components/ui/signatureIntro";
import Index from "./pages/Index";
import WritingsList from "./pages/WritingsList";
import WritingDetail from "./pages/WritingDetail";
import Books from "./pages/Books";
import Journey from "./pages/Journey";
import Impact from "./pages/Impact";
import Speaker from "./pages/Speaker";
import Gallery from "./pages/Gallery";
import Awards from "./pages/Awards";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  if (showPreloader) {
    return <SignatureIntro onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/writing" element={<Index />} />
              <Route path="/writings/:category" element={<WritingsList />} />
              <Route path="/writing/:id" element={<WritingDetail />} />
              <Route path="/books" element={<Books />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/speaker" element={<Speaker />} />
              <Route path="/events/gallery" element={<Gallery />} />
              <Route path="/events/awards" element={<Awards />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
