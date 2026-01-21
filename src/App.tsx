import { useState, lazy, Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import SignatureIntro from "@/components/ui/signatureIntro";
import { ErrorBoundary } from "@/components/ErrorBoundary";

// Route-based code splitting
const Index = lazy(() => import("./pages/Index"));
const WritingsList = lazy(() => import("./pages/WritingsList"));
const WritingDetail = lazy(() => import("./pages/WritingDetail"));
const Books = lazy(() => import("./pages/Books"));
const Journey = lazy(() => import("./pages/Journey"));
const Impact = lazy(() => import("./pages/Impact"));
const Speaker = lazy(() => import("./pages/Speaker"));
const Gallery = lazy(() => import("./pages/Gallery"));
const Awards = lazy(() => import("./pages/Awards"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => {
  const [showPreloader, setShowPreloader] = useState(true);

  if (showPreloader) {
    return <SignatureIntro onComplete={() => setShowPreloader(false)} />;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<Layout />}>
                <Route
                  path="/"
                  element={
                    <Suspense
                      fallback={
                        <div className="min-h-screen flex items-center justify-center">
                          Loading…
                        </div>
                      }
                    >
                      <Index />
                    </Suspense>
                  }
                />
                <Route
                  path="/writings/:category"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <WritingsList />
                    </Suspense>
                  }
                />
                <Route
                  path="/writing/:id"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <WritingDetail />
                    </Suspense>
                  }
                />
                <Route
                  path="/books"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Books />
                    </Suspense>
                  }
                />
                <Route
                  path="/journey"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Journey />
                    </Suspense>
                  }
                />
                <Route
                  path="/impact"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Impact />
                    </Suspense>
                  }
                />
                <Route
                  path="/speaker"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Speaker />
                    </Suspense>
                  }
                />
                <Route
                  path="/events/gallery"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Gallery />
                    </Suspense>
                  }
                />
                <Route
                  path="/events/awards"
                  element={
                    <Suspense
                      fallback={
                        <div className="py-20 text-center">Loading…</div>
                      }
                    >
                      <Awards />
                    </Suspense>
                  }
                />
              </Route>
              <Route
                path="*"
                element={
                  <Suspense
                    fallback={<div className="py-20 text-center">Loading…</div>}
                  >
                    <NotFound />
                  </Suspense>
                }
              />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
