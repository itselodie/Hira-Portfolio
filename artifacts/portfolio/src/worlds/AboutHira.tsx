import { WorldPanel } from '@/components/WorldPanel';
import { motion } from 'framer-motion';

const IDENTITIES = ["Engineer", "AI Researcher", "Poet", "Novelist", "Human-centered thinker"];

export function AboutHira() {
  return (
    <WorldPanel
      id="5"
      name="The Story of Hira"
      accent="var(--app-green)"
      intro="An engineer and a writer are the same person asking the same question by different means."
    >
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* Identity Chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {IDENTITIES.map((identity, idx) => (
            <motion.div
              key={identity}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="px-5 py-2 rounded-full glass-panel border-[var(--app-green)]/30 text-app-white font-mono text-xs uppercase tracking-wider"
            >
              {identity}
            </motion.div>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="glass-panel p-8 md:p-12 lg:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--app-green)] opacity-5 rounded-full blur-[80px]" />
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl text-[var(--app-green)] mb-10"
          >
            Two ways of asking the same question
          </motion.h2>

          <div className="space-y-8 font-sans text-lg text-app-muted-dim leading-relaxed font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <strong className="text-app-white font-normal">I'm a final-year Computer Engineering diploma student</strong> at Women's Polytechnic, Aligarh Muslim University, holding a 9.42 CPI. Most of my technical work sits at the intersection of affective computing, neuromorphic engineering, and human-computer interaction — I'm interested in AI that doesn't just classify what someone feels, but reasons about why.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Outside the lab, I write — poetry that's placed in 30+ international contests, and serialized fiction that's found its own small readership on Wattpad and WebNovel. I don't experience these as two separate people. <strong className="text-app-white font-normal">The same instinct that makes me want to know why a model made a decision is the instinct that makes me want to know why a character does what they do.</strong>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-8 mt-8 border-t border-app-line/50"
            >
              <p className="text-xl md:text-2xl font-serif text-app-white italic">
                Build systems that treat people as more than data points, and write things that treat feelings as more than noise. Different tools, same commitment.
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </WorldPanel>
  );
}
