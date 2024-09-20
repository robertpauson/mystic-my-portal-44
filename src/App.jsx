import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Necromancer from "./pages/Necromancer";
import Seductress from "./pages/Seductress";
import Seducer from "./pages/Seducer";
import Protector from "./pages/Protector";
import WorldPerception from "./pages/WorldPerception";
import SocialConnections from "./pages/SocialConnections";
import Incarnations from "./pages/Incarnations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/necromancer" element={<Necromancer />} />
          <Route path="/seductress" element={<Seductress />} />
          <Route path="/seducer" element={<Seducer />} />
          <Route path="/protector" element={<Protector />} />
          <Route path="/world-perception" element={<WorldPerception />} />
          <Route path="/social-connections" element={<SocialConnections />} />
          <Route path="/incarnations" element={<Incarnations />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
