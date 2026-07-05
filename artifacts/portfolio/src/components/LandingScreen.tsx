import { motion } from 'framer-motion';

type LandingScreenProps = {
  onEnter: () => void;
};

export function LandingScreen({ onEnter }: LandingScreenProps) {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex items-center justify-center flex-col px-6 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        scale: 1.1,
        filter: "blur(10px)",
        transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 text-app-purple tracking-[0.2em] uppercase text-xs font-mono font-medium"
      >
        Computer Engineering & Poetry
      </motion.div>
      
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient font-medium"
      >
        Hira Fatima
      </motion.h1>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.62, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl mx-auto space-y-4 text-app-muted text-sm md:text-base leading-relaxed"
      >
        <p className="text-app-white font-medium">
          Building products where intelligence meets creativity.
        </p>
        <p>
          A studio where explainable AI systems and unexplainable feelings get built out of the same instinct. Six worlds. One person.
        </p>
      </motion.div>
      
      <motion.button
        onClick={onEnter}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 group relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-app-bg-glass border border-app-line text-app-white hover:border-app-purple hover:bg-[rgba(155,123,255,0.1)] transition-all duration-300"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-app-purple opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-app-purple"></span>
        </span>
        <span className="font-mono text-sm tracking-wide">Enter my studio</span>
      </motion.button>
    </motion.div>
  );
}
