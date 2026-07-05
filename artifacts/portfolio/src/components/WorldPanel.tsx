import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type WorldPanelProps = {
  id: string;
  name: string;
  accent: string;
  intro: string;
  children: ReactNode;
};

export function WorldPanel({ id, name, accent, intro, children }: WorldPanelProps) {
  return (
    <motion.div
      className="absolute inset-0 z-30 overflow-y-auto overflow-x-hidden scroll-smooth"
      initial={{ opacity: 0, filter: "blur(14px)", scale: 1.05 }}
      animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
      exit={{ 
        opacity: 0, 
        filter: "blur(14px)", 
        scale: 0.95,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
      }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="min-h-[100dvh] pt-32 pb-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 md:mb-24 max-w-3xl"
        >
          <div className="font-mono text-xs tracking-widest uppercase mb-4" style={{ color: accent }}>
            World 0{id}
          </div>
          <h1 className="font-serif text-4xl md:text-6xl text-app-white mb-6 leading-tight">
            {name}
          </h1>
          <p className="font-sans text-lg md:text-xl text-app-muted font-light leading-relaxed">
            {intro}
          </p>
        </motion.div>

        <div className="relative">
          {/* Subtle colored glow behind content */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none"
            style={{ backgroundColor: accent }}
          />
          
          <div className="relative z-10">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Utility components for worlds
export function Card({ children, className = "", delay = 0 }: { children: ReactNode, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`glass-panel p-6 md:p-8 flex flex-col ${className}`}
    >
      {children}
    </motion.div>
  );
}
