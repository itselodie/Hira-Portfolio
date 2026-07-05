import { WorldPanel } from '@/components/WorldPanel';
import { TIMELINE } from '@/data/worlds';
import { motion } from 'framer-motion';

export function Milestones() {
  return (
    <WorldPanel
      id="4"
      name="Hall of Milestones"
      accent="var(--app-orange)"
      intro="The record so far — engineering and writing side by side, because they happened side by side."
    >
      <div className="relative max-w-4xl mx-auto py-12">
        {/* Vertical Line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-app-line to-transparent -translate-x-1/2" />
        
        <div className="space-y-16 md:space-y-24">
          {TIMELINE.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} pl-12 md:pl-0`}>
                
                {/* Center Node */}
                <motion.div 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.1, type: "spring" }}
                  className="absolute left-0 md:left-1/2 top-1 w-[30px] h-[30px] rounded-full bg-app-bg border border-app-line flex items-center justify-center -translate-x-1/2 z-10"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[var(--app-orange)] shadow-[0_0_10px_var(--app-orange)]" />
                </motion.div>

                {/* Content Panel */}
                <motion.div 
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className={`w-full md:w-1/2 ${isLeft ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}
                >
                  <div className="font-mono text-sm tracking-widest text-[var(--app-orange)] mb-3">
                    {item.year}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-app-white mb-4">
                    {item.title}
                  </h3>
                  <div className={`glass-panel p-6 inline-block w-full ${isLeft ? 'md:rounded-tr-none' : 'md:rounded-tl-none'}`}>
                    <p className="text-app-muted text-sm md:text-base leading-relaxed text-left">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
                
              </div>
            );
          })}
        </div>
      </div>
    </WorldPanel>
  );
}
