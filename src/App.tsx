// App.tsx
import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useVersion } from "@/context/VersionContext";
import Navbar from "@/components/Navbar";

const queryClient = new QueryClient();

// Versioned pages and UI components
const Pages = {
  v1: {
    Index: React.lazy(() => import("./pages/v1/Index")),
    PrivacyPolicy: React.lazy(() => import("./pages/v1/privacyPolicy")),
    CookiePolicy: React.lazy(() => import("./pages/v1/cookies")),
    TermsOfService: React.lazy(() => import("./pages/v1/terms")),
    NotFound: React.lazy(() => import("./pages/v1/NotFound")),
    Toaster: React.lazy(() => import("./components/v1/ui/toaster").then(mod => ({ default: mod.Toaster }))),
    TooltipProvider: React.lazy(() => import("./components/v1/ui/tooltip").then(mod => ({ default: mod.TooltipProvider }))),
  },
  v2: {
    Index: React.lazy(() => import("./pages/v2/Index")),
    PrivacyPolicy: React.lazy(() => import("./pages/v2/privacyPolicy")),
    CookiePolicy: React.lazy(() => import("./pages/v2/cookies")),
    TermsOfService: React.lazy(() => import("./pages/v2/terms")),
    NotFound: React.lazy(() => import("./pages/v2/NotFound")),
    Toaster: React.lazy(() => import("./components/v2/ui/toaster").then(mod => ({ default: mod.Toaster }))),
    TooltipProvider: React.lazy(() => import("./components/v2/ui/tooltip").then(mod => ({ default: mod.TooltipProvider }))),
  },
  v3: {
    Index: React.lazy(() => import("./pages/v3/Index")),
    PrivacyPolicy: React.lazy(() => import("./pages/v3/privacyPolicy")),
    CookiePolicy: React.lazy(() => import("./pages/v3/cookies")),
    TermsOfService: React.lazy(() => import("./pages/v3/terms")),
    NotFound: React.lazy(() => import("./pages/v3/NotFound")),
    Toaster: React.lazy(() => import("./components/v3/ui/toaster").then(mod => ({ default: mod.Toaster }))),
    TooltipProvider: React.lazy(() => import("./components/v3/ui/tooltip").then(mod => ({ default: mod.TooltipProvider }))),
  },
};

const App: React.FC = () => {
  const { version } = useVersion();

  // Load version-specific CSS dynamically
  useEffect(() => {
    const prev = document.getElementById("version-css") as HTMLLinkElement | null;
    if (prev) prev.remove();

    const link = document.createElement("link");
    link.id = "version-css";
    link.rel = "stylesheet";
    link.href = `src/styles/${version}.css`; // e.g., v1.css
    document.head.appendChild(link);

    return () => link.remove();
  }, [version]);

  const current = Pages[version as "v1" | "v2" | "v3"] || Pages.v1;

  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading UI...</div>}>
        <current.TooltipProvider>
          <Suspense fallback={<div>Loading Toaster...</div>}>
            <current.Toaster />
          </Suspense>
          <BrowserRouter>
            <Navbar />
            <Suspense fallback={<div>Loading pages...</div>}>
              <Routes>
                <Route path="/" element={<current.Index />} />
                <Route path="/privacyPolicy" element={<current.PrivacyPolicy />} />
                <Route path="/cookies" element={<current.CookiePolicy />} />
                <Route path="/terms" element={<current.TermsOfService />} />
                <Route path="*" element={<current.NotFound />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </current.TooltipProvider>
      </Suspense>
    </QueryClientProvider>
  );
};

export default App;
