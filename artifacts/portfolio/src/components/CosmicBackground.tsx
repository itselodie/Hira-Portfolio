import { useEffect, useRef } from 'react';
import { useAmbient } from '@/hooks/useAmbient';

export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { ambientOn } = useAmbient();
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  useEffect(() => {
    if (!canvasRef.current || !ambientOn || prefersReducedMotion) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > canvas.width) this.vx = -this.vx;
        if (this.y < 0 || this.y > canvas.height) this.vy = -this.vy;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(155, 123, 255, 0.55)';
        ctx.fill();
      }
    }
    
    // Initialize particles
    for (let i = 0; i < 70; i++) {
      particles.push(new Particle());
    }
    
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(p => p.update());
      particles.forEach(p => p.draw());
      
      // Draw connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 130) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            // Opacity based on distance
            const opacity = 1 - (distance / 130);
            ctx.strokeStyle = `rgba(87, 168, 255, ${opacity * 0.12})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [ambientOn, prefersReducedMotion]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-app-bg">
      {/* Starfield */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(1px 1px at 10% 20%, white, transparent), radial-gradient(1.5px 1.5px at 30% 50%, rgba(255,255,255,0.8), transparent), radial-gradient(2px 2px at 80% 80%, rgba(155, 123, 255, 0.9), transparent), radial-gradient(1px 1px at 60% 10%, white, transparent), radial-gradient(1px 1px at 90% 40%, white, transparent)',
          backgroundSize: '300px 300px',
          animation: (!prefersReducedMotion && ambientOn) ? 'star-twinkle 6s alternate infinite' : 'none',
          opacity: 0.5
        }}
      />
      
      {/* Nebulas */}
      <div 
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[100px] opacity-30 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, var(--app-purple) 0%, transparent 70%)',
          top: '-10%',
          left: '-10%',
          animation: (!prefersReducedMotion && ambientOn) ? 'nebula-drift 46s alternate ease-in-out infinite' : 'none'
        }}
      />
      <div 
        className="absolute w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] rounded-full blur-[120px] opacity-20 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, var(--app-blue) 0%, transparent 70%)',
          bottom: '-10%',
          right: '-5%',
          animation: (!prefersReducedMotion && ambientOn) ? 'nebula-drift-2 66s alternate ease-in-out infinite' : 'none'
        }}
      />
      <div 
        className="absolute w-[60vw] h-[60vw] max-w-[600px] max-h-[600px] rounded-full blur-[90px] opacity-15 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, var(--app-pink) 0%, transparent 70%)',
          top: '30%',
          left: '20%',
          animation: (!prefersReducedMotion && ambientOn) ? 'nebula-drift-3 55s alternate ease-in-out infinite' : 'none'
        }}
      />
      
      {/* Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10 opacity-70" />
    </div>
  );
}
