import { Zap, Atom, Server, GitBranch, Globe, Rocket, Settings, Mic, Hand } from 'lucide-react';


export default function Slide17Closing() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="slide-bg-glow" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)', top: '10%', right: '10%' }} />
      <div className="slide-bg-glow" style={{ width: 250, height: 250, background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, transparent 70%)', bottom: '10%', left: '10%' }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 800 }}>
        <div className="animate-scale-in" style={{ fontSize: 72, marginBottom: 24, animation: 'float 3s ease-in-out infinite' }}><Zap /></div>
        <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)', marginBottom: 24, lineHeight: 1.2 }}>
          "De un <span className="gradient-text">servidor vacío</span> a una aplicación moderna funcionando, <span className="gradient-text-cyan">en pocos minutos."</span>
        </h2>
        <div className="animate-fade-in delay-2" style={{ width: 80, height: 3, background: 'var(--gradient-main)', borderRadius: 2, margin: '28px auto' }} />
        <p className="animate-slide-up delay-3" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 40 }}>
          Con Vite, Ubuntu Server y GitHub tienes todo lo necesario para crear,<br />
          desarrollar y desplegar aplicaciones web profesionales desde cero.
        </p>
        <div className="animate-slide-up delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48 }}>
          {[
            { label: 'Vite', icon: <Zap size={14} />, color: 'purple' },
            { label: 'Ubuntu', icon: <Server size={14} />, color: 'green' },
            { label: 'React', icon: <Atom size={14} />, color: 'cyan' },
            { label: 'GitHub', icon: <GitBranch size={14} />, color: 'purple' },
            { label: 'Nginx', icon: <Globe size={14} />, color: 'cyan' },
          ].map(t => (
            <span key={t.label} className={`chip ${t.color}`} style={{ fontSize: 14, padding: '8px 18px', display: 'flex', alignItems: 'center', gap: '8px' }}>{t.icon} {t.label}</span>
          ))}
        </div>
        <div className="animate-scale-in delay-5" style={{ display: 'inline-flex', alignItems: 'center', gap: 16, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)', borderRadius: 50, padding: '12px 28px', backdropFilter: 'blur(10px)' }}>
          <span style={{ fontSize: 24 }}><Mic size={14} /></span>
          <span style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 18, background: 'var(--gradient-main)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>¿Preguntas?</span>
          <span style={{ fontSize: 24 }}><Hand size={14} /></span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 120, right: 80, animation: 'float 4s ease-in-out infinite 0.5s', fontSize: 40, opacity: 0.08 }}><Rocket /></div>
      <div style={{ position: 'absolute', top: 100, left: 100, animation: 'float 5s ease-in-out infinite 1s', fontSize: 36, opacity: 0.08 }}><Settings /></div>
    </>
  );
}
