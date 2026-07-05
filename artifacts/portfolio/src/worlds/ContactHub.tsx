import { WorldPanel } from '@/components/WorldPanel';
import { CONTACTS } from '@/data/worlds';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export function ContactHub() {
  return (
    <WorldPanel
      id="6"
      name="Communication Hub"
      accent="var(--app-pink)"
      intro="If any of this made you want to talk — I'd like that. Every open door, below."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {CONTACTS.map((contact, idx) => (
          <motion.a
            key={idx}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="group relative overflow-hidden glass-panel p-8 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300"
            style={{ '--hover-accent': contact.accent } as React.CSSProperties}
          >
            {/* Background Hover Effect */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
              style={{ backgroundColor: contact.accent }}
            />
            
            {/* Top Border Line Hover */}
            <div 
              className="absolute top-0 left-0 w-0 h-1 transition-all duration-500 ease-out group-hover:w-full"
              style={{ backgroundColor: contact.accent }}
            />

            <div className="flex justify-between items-start mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-app-muted group-hover:text-white transition-colors">
                {contact.type}
              </span>
              <ArrowUpRight 
                size={20} 
                className="text-app-muted opacity-50 group-hover:opacity-100 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" 
                style={{ color: contact.accent }}
              />
            </div>
            
            <div className="mt-auto">
              <h3 className="font-sans font-medium text-lg text-app-white break-words">
                {contact.label}
              </h3>
            </div>
            
            {/* Decorative Glow */}
            <div 
              className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full blur-[40px] opacity-0 group-hover:opacity-20 transition-opacity duration-500"
              style={{ backgroundColor: contact.accent }}
            />
          </motion.a>
        ))}
      </div>
    </WorldPanel>
  );
}
