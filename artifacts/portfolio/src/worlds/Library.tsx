import { WorldPanel, Card } from '@/components/WorldPanel';
import { POEMS, NOVELS } from '@/data/worlds';
import { ExternalLink, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export function Library() {
  return (
    <WorldPanel
      id="3"
      name="Writer's Library"
      accent="var(--app-gold)"
      intro="Poetry and fiction, written in the hours code doesn't need me. Same questions — identity, resilience, what a person is made of — approached from the opposite direction."
    >
      {/* Quote Block */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="w-full text-center py-12 mb-12 border-y border-app-line relative"
      >
        <span className="font-serif text-3xl md:text-5xl text-app-white leading-tight italic">
          "I write to reason with feeling the way I code to reason with data — neither one works without the other."
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Column: Poetry */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--app-gold)]">Poetry</h2>
            <span className="h-[1px] flex-grow bg-[var(--app-line)]"></span>
          </div>

          <Card delay={0.3} className="!p-0 overflow-hidden">
            <div className="p-6 md:p-8 bg-black/20 border-b border-app-line">
              <div className="flex items-center gap-3 mb-2">
                <Award size={20} className="text-[var(--app-gold)]" />
                <h3 className="font-sans font-medium text-app-white text-lg">30+ International Placements</h3>
              </div>
              <p className="text-sm text-app-muted-dim">Including multiple 1st-place wins across platforms.</p>
            </div>
            
            <div className="divide-y divide-app-line">
              {POEMS.map((poem, idx) => (
                <div key={idx} className="p-4 md:px-8 flex justify-between items-center hover:bg-white/[0.02] transition-colors">
                  <span className="font-serif text-lg text-app-white">"{poem.title}"</span>
                  <span className="font-mono text-xs text-[var(--app-gold)] bg-[var(--app-gold)]/10 px-3 py-1 rounded-full">
                    {poem.placement}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="p-4 md:px-8 border-t border-app-line bg-black/20 text-center">
              <a 
                href="https://www.poetrysoup.com/poems_poets/poems_by_poet.aspx?ID=187177" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-app-muted hover:text-[var(--app-gold)] transition-colors"
              >
                Read on PoetrySoup <ExternalLink size={14} />
              </a>
            </div>
          </Card>
        </div>

        {/* Right Column: Fiction */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <h2 className="font-mono text-sm uppercase tracking-widest text-[var(--app-gold)]">Fiction</h2>
            <span className="h-[1px] flex-grow bg-[var(--app-line)]"></span>
          </div>

          <div className="space-y-6">
            {NOVELS.map((novel, idx) => (
              <Card key={idx} delay={0.4 + (idx * 0.1)} className="group relative">
                <div className="absolute top-0 left-0 w-1 h-full bg-[var(--app-gold)] opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="font-serif text-2xl text-app-white mb-3 group-hover:text-[var(--app-gold)] transition-colors">
                  {novel.title}
                </h3>
                
                <p className="text-app-muted-dim mb-6 leading-relaxed">
                  {novel.description}
                </p>
                
                {novel.badges && (
                  <div className="flex flex-wrap gap-2 mb-2">
                    {novel.badges.map(badge => (
                      <span key={badge} className="text-xs font-sans text-app-white/70 bg-black/30 px-2.5 py-1 rounded border border-app-line">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
              </Card>
            ))}
            
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.wattpad.com/user/itselodie1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 glass-panel py-3 px-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-app-white hover:text-[var(--app-gold)] hover:border-[var(--app-gold)] transition-colors"
              >
                Wattpad <ExternalLink size={14} />
              </a>
              <a 
                href="https://www.webnovel.com/profile/4506418755" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 glass-panel py-3 px-4 flex items-center justify-center gap-2 text-xs font-mono uppercase tracking-widest text-app-white hover:text-[var(--app-gold)] hover:border-[var(--app-gold)] transition-colors"
              >
                WebNovel <ExternalLink size={14} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </WorldPanel>
  );
}
