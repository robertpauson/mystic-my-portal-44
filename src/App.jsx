import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CharacterSelect from "./pages/CharacterSelect";
import Career from "./pages/Career";
import SocialConnections from "./pages/SocialConnections";
import WorldPerception from "./pages/WorldPerception";
import Necromancer from "./pages/Necromancer";
import Seductress from "./pages/Seductress";
import Seducer from "./pages/Seducer";
import Protector from "./pages/Protector";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/character-select" element={<CharacterSelect />} />
          <Route path="/career" element={<Career />} />
          <Route path="/social-connections" element={<SocialConnections />} />
          <Route path="/world-perception" element={<WorldPerception />} />
          <Route path="/necromancer" element={<Necromancer />} />
          <Route path="/seductress" element={<Seductress />} />
          <Route path="/seducer" element={<Seducer />} />
          <Route path="/protector" element={<Protector />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
