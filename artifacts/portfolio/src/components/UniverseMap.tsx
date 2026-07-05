import { motion } from 'framer-motion';
import { Cpu, Microscope, Book, Flag, User, Mail } from 'lucide-react';
import { WORLDS_META } from '@/data/worlds';

const ICON_MAP: Record<string, any> = {
  cpu: Cpu,
  microscope: Microscope,
  book: Book,
  flag: Flag,
  user: User,
  mail: Mail
};

type PlanetProps = {
  id: string;
  name: string;
  accent: string;
  x: number;
  y: number;
  labelSide: 'top' | 'right' | 'bottom' | 'left';
  icon: string;
  onClick: () => void;
  index: number;
};

export function Planet({ id, name, accent, x, y, labelSide, icon, onClick, index }: PlanetProps) {
  const IconComponent = ICON_MAP[icon];
  
  return (
    <motion.div
      className="absolute group z-10"
      style={{ left: `${x}%`, top: `${y}%`, x: '-50%', y: '-50%' }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + (index * 0.1), duration: 0.8, type: "spring", bounce: 0.4 }}
    >
      <button 
        onClick={onClick}
        className="relative flex items-center justify-center w-16 h-16 md:w-20 md:h-20 focus:outline-none"
        aria-label={`Enter ${name}`}
      >
        {/* Orbital Ring */}
        <div 
          className="absolute inset-0 rounded-full border border-dashed transition-all duration-500 group-hover:scale-[1.3] group-hover:opacity-100 opacity-30"
          style={{ borderColor: accent, animation: 'orbit 9s linear infinite' }}
        >
          <div 
            className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full shadow-[0_0_10px_currentColor]"
            style={{ backgroundColor: accent, color: accent }}
          />
        </div>
        
        {/* Planet Orb */}
        <div 
          className="relative w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-110"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${accent}, #000 90%)`,
            boxShadow: `0 0 20px -5px ${accent}, inset -5px -5px 15px rgba(0,0,0,0.5), inset 5px 5px 10px rgba(255,255,255,0.3)`
          }}
        >
          {IconComponent && <IconComponent size={20} className="text-white/80 drop-shadow-md z-10" strokeWidth={1.5} />}
          
          {/* Specular highlight */}
          <div className="absolute top-1 left-2 w-4 h-2 bg-white/20 rounded-full blur-[2px] rotate-[-45deg]"></div>
        </div>

        {/* Info Label - Hidden on small screens, shown appropriately based on side */}
        <div 
          className={`absolute hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-300 w-48 text-left pointer-events-none ${
            labelSide === 'right' ? 'left-full ml-6 top-1/2 -translate-y-1/2 translate-x-4 group-hover:translate-x-0' :
            labelSide === 'left' ? 'right-full mr-6 top-1/2 -translate-y-1/2 -translate-x-4 group-hover:translate-x-0' :
            labelSide === 'top' ? 'bottom-full mb-6 left-1/2 -translate-x-1/2 -translate-y-4 group-hover:translate-y-0 text-center' :
            'top-full mt-6 left-1/2 -translate-x-1/2 translate-y-4 group-hover:translate-y-0 text-center'
          }`}
        >
          <div className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: accent }}>World 0{id}</div>
          <div className="font-serif text-lg text-app-white mb-1">{name}</div>
        </div>
      </button>
    </motion.div>
  );
}

type UniverseMapProps = {
  onSelectWorld: (id: string) => void;
};

export function UniverseMap({ onSelectWorld }: UniverseMapProps) {
  return (
    <motion.div 
      className="absolute inset-0 z-20 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0, filter: "blur(10px)", scale: 0.9 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ 
        opacity: 0, 
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Constellation SVG Lines */}
      <svg className="absolute inset-0 w-full h-full hidden md:block opacity-40 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--app-purple)" stopOpacity="0.5" />
            <stop offset="50%" stopColor="var(--app-blue)" stopOpacity="0.1" />
            <stop offset="100%" stopColor="var(--app-pink)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        
        {/* Draw lines between close planets */}
        <motion.path 
          d="M 22vw 23vh L 50vw 10vh L 78vw 23vh L 78vw 71vh L 50vw 90vh L 22vw 71vh Z" 
          fill="none" 
          stroke="url(#lineGrad)" 
          strokeWidth="1" 
          strokeDasharray="4 8"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
        />
        <motion.path 
          d="M 22vw 23vh L 50vw 90vh M 22vw 71vh L 50vw 10vh M 78vw 23vh L 50vw 90vh M 78vw 71vh L 50vw 10vh" 
          fill="none" 
          stroke="url(#lineGrad)" 
          strokeWidth="0.5" 
          strokeDasharray="2 10"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
        />
      </svg>

      {/* Central Text */}
      <motion.div 
        className="absolute z-0 text-center pointer-events-none flex flex-col items-center justify-center opacity-40 mix-blend-screen"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.4, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="font-mono text-xs uppercase tracking-[0.3em] mb-2 text-app-muted">Welcome to</span>
        <span className="font-serif text-3xl md:text-5xl mb-2 text-app-white opacity-50">Hira Fatima</span>
        <span className="font-mono text-xs tracking-wider text-app-muted max-w-xs md:max-w-md">a constellation of ideas, research, stories and code.</span>
      </motion.div>

      {/* Mobile planets container - grid layout for small screens */}
      <div className="md:hidden flex flex-wrap justify-center items-center gap-8 px-4 z-10 w-full max-w-xs">
        {WORLDS_META.map((world, idx) => (
          <motion.button
            key={world.id}
            onClick={() => onSelectWorld(world.id)}
            className="group flex flex-col items-center gap-2 focus:outline-none"
            aria-label={`Enter ${world.name}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + (idx * 0.08), duration: 0.6, type: "spring", bounce: 0.4 }}
          >
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `radial-gradient(circle at 30% 30%, ${world.accent}, #000 90%)`,
                boxShadow: `0 0 18px -4px ${world.accent}, inset -4px -4px 12px rgba(0,0,0,0.5), inset 4px 4px 8px rgba(255,255,255,0.25)`
              }}
            >
              <span className="text-white/80 text-xs font-mono">0{idx + 1}</span>
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-app-muted text-center leading-tight max-w-[72px]">{world.name}</span>
          </motion.button>
        ))}
      </div>

      {/* Desktop planets */}
      <div className="hidden md:block w-full h-full relative">
        {WORLDS_META.map((world, idx) => (
          <Planet
            key={world.id}
            {...world}
            onClick={() => onSelectWorld(world.id)}
            index={idx}
          />
        ))}
      </div>
    </motion.div>
  );
}
