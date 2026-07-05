import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { AmbientProvider } from '@/hooks/useAmbient';
import { CosmicBackground } from '@/components/CosmicBackground';
import { LandingScreen } from '@/components/LandingScreen';
import { UniverseMap } from '@/components/UniverseMap';
import { TopBar } from '@/components/TopBar';

import { AILab } from '@/worlds/AILab';
import { Research } from '@/worlds/Research';
import { Library } from '@/worlds/Library';
import { Milestones } from '@/worlds/Milestones';
import { AboutHira } from '@/worlds/AboutHira';
import { ContactHub } from '@/worlds/ContactHub';

type ViewState = 'landing' | 'map' | string;

export default function App() {
  const [currentView, setCurrentView] = useState<ViewState>('landing');

  const renderWorld = (id: string) => {
    switch (id) {
      case '1': return <AILab key="world-1" />;
      case '2': return <Research key="world-2" />;
      case '3': return <Library key="world-3" />;
      case '4': return <Milestones key="world-4" />;
      case '5': return <AboutHira key="world-5" />;
      case '6': return <ContactHub key="world-6" />;
      default: return null;
    }
  };

  return (
    <AmbientProvider>
      <div className="relative min-h-[100dvh] w-full overflow-hidden bg-app-bg text-app-white selection:bg-app-purple selection:text-white">
        <CosmicBackground />

        {/* Global UI */}
        <AnimatePresence>
          {currentView !== 'landing' && (
            <TopBar currentView={currentView} onNavigate={setCurrentView} />
          )}
        </AnimatePresence>

        {/* Main Content Area */}
        <AnimatePresence mode="wait">
          {currentView === 'landing' && (
            <LandingScreen key="landing" onEnter={() => setCurrentView('map')} />
          )}
          
          {currentView === 'map' && (
            <UniverseMap key="map" onSelectWorld={(id) => setCurrentView(id)} />
          )}

          {currentView !== 'landing' && currentView !== 'map' && (
            renderWorld(currentView)
          )}
        </AnimatePresence>

        {/* Signature */}
        <AnimatePresence>
          {currentView !== 'landing' && (
            <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 text-xs font-mono text-app-muted mix-blend-screen pointer-events-none opacity-50">
              Made with passion & curiosity 💜
            </div>
          )}
        </AnimatePresence>
      </div>
    </AmbientProvider>
  );
}
