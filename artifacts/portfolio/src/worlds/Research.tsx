import { WorldPanel, Card } from '@/components/WorldPanel';
import { RESEARCH_PAPERS } from '@/data/worlds';
import { ExternalLink, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export function Research() {
  return (
    <WorldPanel
      id="2"
      name="Research Observatory"
      accent="var(--app-blue)"
      intro="Independent literature reviews on the physical substrates AI might run on next — after spending enough time on the software side to want to understand what's underneath it."
    >
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Left: Papers */}
        <div className="w-full lg:w-2/3 space-y-6">
          {RESEARCH_PAPERS.map((paper, idx) => (
            <Card key={paper.id} delay={idx * 0.2} className="relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-[var(--app-blue)] opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="mb-2 flex items-center gap-3">
                <span className="font-mono text-xs uppercase tracking-widest text-[var(--app-blue)]">
                  {paper.meta}
                </span>
                <span className="h-[1px] w-12 bg-[var(--app-line)] hidden sm:block"></span>
              </div>
              
              <h3 className="font-serif text-2xl lg:text-3xl text-app-white mb-6 leading-tight">
                {paper.title}
              </h3>
              
              <div className="bg-black/20 rounded-xl p-5 mb-6 border border-app-line relative">
                <Quote size={24} className="absolute -top-3 -left-2 text-[var(--app-blue)] opacity-20" />
                <p className="text-app-muted-dim text-sm md:text-base leading-relaxed italic">
                  "{paper.abstract}"
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-auto">
                <div className="font-mono text-xs text-app-muted">
                  DOI: {paper.doi}
                </div>
                <a 
                  href={paper.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[var(--app-blue)] hover:text-white transition-colors py-2 px-4 rounded-full border border-[var(--app-blue)] hover:bg-[var(--app-blue)]"
                >
                  <span>Read Paper</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Right: Knowledge Graph visualization (SVG purely decorative) */}
        <div className="w-full lg:w-1/3 min-h-[400px] glass-panel rounded-2xl relative overflow-hidden flex items-center justify-center p-8">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, var(--app-blue) 0%, transparent 70%)' }}></div>
          
          <svg viewBox="0 0 400 400" className="w-full max-w-sm drop-shadow-xl overflow-visible">
            <defs>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Lines */}
            <motion.path d="M200,200 L100,100" stroke="var(--app-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.5 }} />
            <motion.path d="M200,200 L300,120" stroke="var(--app-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.7 }} />
            <motion.path d="M200,200 L250,320" stroke="var(--app-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 0.9 }} />
            <motion.path d="M200,200 L100,280" stroke="var(--app-blue)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.1 }} />
            <motion.path d="M100,100 L300,120" stroke="var(--app-blue)" strokeWidth="0.5" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.5 }} />
            <motion.path d="M250,320 L100,280" stroke="var(--app-blue)" strokeWidth="0.5" opacity="0.2" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: 1.7 }} />
            
            {/* Nodes */}
            <g filter="url(#glow)">
              {/* Center */}
              <circle cx="200" cy="200" r="8" fill="var(--app-blue)" />
              <text x="200" y="225" fill="white" fontSize="12" fontFamily="Inter" textAnchor="middle" fontWeight="500">HCI</text>
              
              {/* Surrounding */}
              <circle cx="100" cy="100" r="5" fill="#F4F1FB" />
              <text x="100" y="85" fill="var(--app-muted)" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="middle">Neuromorphic Devices</text>
              
              <circle cx="300" cy="120" r="5" fill="#F4F1FB" />
              <text x="300" y="105" fill="var(--app-muted)" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="middle">Photonic Computing</text>
              
              <circle cx="250" cy="320" r="5" fill="#F4F1FB" />
              <text x="250" y="340" fill="var(--app-muted)" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="middle">Affective Computing</text>
              
              <circle cx="100" cy="280" r="5" fill="#F4F1FB" />
              <text x="100" y="300" fill="var(--app-muted)" fontSize="10" fontFamily="IBM Plex Mono" textAnchor="middle">Explainability</text>
            </g>
          </svg>
        </div>
      </div>
    </WorldPanel>
  );
}
