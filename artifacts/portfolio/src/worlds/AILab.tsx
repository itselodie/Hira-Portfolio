import { useState } from 'react';
import { WorldPanel, Card } from '@/components/WorldPanel';
import { AI_PROJECTS } from '@/data/worlds';
import { ExternalLink, Github, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function AILab() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  };

  return (
    <WorldPanel
      id="1"
      name="AI Laboratory"
      accent="var(--app-purple)"
      intro="Six shipped projects, mostly built around one question: can software respond to a person's emotional state with something more honest than a canned reply?"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {AI_PROJECTS.map((project, idx) => (
          <Card key={project.id} delay={idx * 0.1} className="group">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-serif text-2xl text-app-white group-hover:text-app-purple transition-colors">
                {project.title}
              </h3>
              <div className="flex gap-3 text-app-muted">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="hover:text-app-white transition-colors" aria-label="GitHub">
                    <Github size={20} strokeWidth={1.5} />
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="hover:text-app-white transition-colors" aria-label="Live Demo">
                    <ExternalLink size={20} strokeWidth={1.5} />
                  </a>
                )}
              </div>
            </div>
            
            <p className="text-app-muted-dim text-sm md:text-base leading-relaxed mb-6 flex-grow">
              {project.tagline}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs font-mono text-[var(--app-purple)] bg-[rgba(155,123,255,0.1)] px-3 py-1 rounded-full border border-[rgba(155,123,255,0.2)]">
                  {tag}
                </span>
              ))}
            </div>

            {project.problem && (
              <div className="mt-auto pt-4 border-t border-app-line">
                <button 
                  onClick={() => toggleExpand(project.id)}
                  className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-app-muted hover:text-app-white transition-colors w-full justify-between"
                >
                  <span>Project Deep Dive</span>
                  {expandedId === project.id ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                
                <AnimatePresence>
                  {expandedId === project.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="py-4 space-y-4">
                        <div>
                          <h4 className="text-xs font-mono text-[var(--app-purple)] uppercase mb-1">Problem</h4>
                          <p className="text-sm text-app-muted-dim">{project.problem}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono text-[var(--app-purple)] uppercase mb-1">Solution</h4>
                          <p className="text-sm text-app-muted-dim">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="text-xs font-mono text-[var(--app-purple)] uppercase mb-1">Lesson</h4>
                          <p className="text-sm text-app-white border-l-2 border-[var(--app-purple)] pl-3 italic">
                            {project.lesson}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Card>
        ))}
      </div>
    </WorldPanel>
  );
}
