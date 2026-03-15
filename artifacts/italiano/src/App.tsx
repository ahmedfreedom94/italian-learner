import { useState, useEffect } from "react";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CategoryDetail from "@/pages/CategoryDetail";
import NotFound from "@/pages/not-found";
import InterstitialAd from "@/components/InterstitialAd";
import BannerAd from "@/components/BannerAd";
import { initAdMob } from "@/lib/admob";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/category/:id" component={CategoryDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [showAd, setShowAd] = useState(() => {
    const seen = sessionStorage.getItem("ad_shown");
    return !seen;
  });

  useEffect(() => {
    initAdMob().catch(() => {});
  }, []);

  function handleAdClose() {
    sessionStorage.setItem("ad_shown", "1");
    setShowAd(false);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {/* We constrain the app view to max-w-md to make it feel like a mobile app even on desktop */}
        <div className="min-h-screen bg-zinc-100 flex justify-center w-full overflow-x-hidden">
          <div className="w-full max-w-md bg-gradient-to-b from-[#e8f4fd] to-[#d6ebfe] min-h-screen shadow-2xl relative overflow-x-hidden no-scrollbar flex flex-col pb-16">
            
            {/* Playful decorative background shapes */}
            <div className="absolute top-0 left-0 w-full h-64 overflow-hidden pointer-events-none opacity-40 z-0">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-xl"></div>
              <div className="absolute top-20 -right-10 w-32 h-32 bg-white rounded-full mix-blend-overlay blur-xl"></div>
            </div>

            {/* App Content */}
            <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
              <Router />
            </WouterRouter>

          </div>
        </div>

        {/* Bottom Banner Ad — always visible */}
        <BannerAd />

        {/* Interstitial Ad — shown once per session on launch */}
        {showAd && <InterstitialAd onClose={handleAdClose} />}

        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
