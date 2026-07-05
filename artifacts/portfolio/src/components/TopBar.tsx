import { motion } from 'framer-motion';
import { Menu, ArrowLeft, Volume2, VolumeX, Map } from 'lucide-react';
import { useAmbient } from '@/hooks/useAmbient';
import { WORLDS_META } from '@/data/worlds';
import { useState } from 'react';

type TopBarProps = {
  currentView: string;
  onNavigate: (view: string) => void;
};

export function TopBar({ currentView, onNavigate }: TopBarProps) {
  const { ambientOn, toggleAmbient } = useAmbient();
  const [menuOpen, setMenuOpen] = useState(false);

  const isMap = currentView === 'map';

  return (
    <>
      <div className="fixed top-0 left-0 w-full p-4 md:p-6 z-45 flex items-center justify-between pointer-events-none">
        
        {/* Left Side: Back/Map Button */}
        <div className="pointer-events-auto flex items-center gap-2">
          {!isMap ? (
            <button 
              onClick={() => onNavigate('map')}
              className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel glass-panel-hover text-app-white font-mono text-xs uppercase tracking-wider"
            >
              <ArrowLeft size={14} />
              <span className="hidden sm:inline">Studio Map</span>
            </button>
          ) : (
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-panel text-app-white font-mono text-xs uppercase tracking-wider opacity-50 cursor-default">
              <Map size={14} />
              <span>Studio Map</span>
            </div>
          )}
        </div>

        {/* Right Side: Controls */}
        <div className="pointer-events-auto flex items-center gap-2 md:gap-3">
          <button
            onClick={toggleAmbient}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass-panel glass-panel-hover text-app-white font-mono text-xs uppercase tracking-wider"
            title={ambientOn ? "Disable animations" : "Enable animations"}
          >
            {ambientOn ? <Volume2 size={14} /> : <VolumeX size={14} />}
            <span className="hidden sm:inline">Ambient</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center w-10 h-10 rounded-full glass-panel glass-panel-hover text-app-white"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="world-nav-menu"
            >
              <Menu size={18} />
            </button>

            {menuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 glass-panel bg-app-bg/90 p-2 flex flex-col gap-1 origin-top-right">
                <div className="px-3 py-2 text-xs font-mono text-app-muted uppercase tracking-widest border-b border-app-line mb-1">
                  Navigation
                </div>
                {WORLDS_META.map(world => (
                  <button
                    key={world.id}
                    onClick={() => {
                      onNavigate(world.id);
                      setMenuOpen(false);
                    }}
                    className={`text-left px-3 py-2 rounded-md font-sans text-sm transition-colors hover:bg-white/10 ${
                      currentView === world.id ? 'text-white bg-white/5' : 'text-app-muted-dim hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: world.accent }} />
                      <span>{world.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Background click catcher for menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
