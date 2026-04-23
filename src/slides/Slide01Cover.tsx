import { Zap, Atom, Server, CircleDot, GitBranch, Globe } from 'lucide-react';


export default function Slide01Cover() {
  return (
    <>
      <div className="slide-bg-grid" />
      {/* Glow orbs */}
      <div className="slide-bg-glow" style={{
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)'
      }} />
      <div className="slide-bg-glow" style={{
        width: 300, height: 300,
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        top: '10%', right: '10%'
      }} />
      <div className="slide-bg-glow" style={{
        width: 250, height: 250,
        background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)',
        bottom: '15%', left: '8%'
      }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 900 }}>
        {/* Tech badge */}
        <div className="animate-fade-in" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.25)',
          borderRadius: 50, padding: '8px 20px', marginBottom: 32,
          backdropFilter: 'blur(10px)'
        }}>
          <span style={{ fontSize: 16 }}><Zap /></span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#a5b4fc', letterSpacing: '0.15em' }}>
            DEVELOPER CONFERENCE 2026
          </span>
          <span style={{ fontSize: 16 }}><Zap /></span>
        </div>

        {/* Main title */}
        <h1 className="slide-title animate-slide-up delay-1" style={{
          fontSize: 'clamp(36px, 5vw, 68px)',
          marginBottom: 24,
          maxWidth: 860,
          margin: '0 auto 24px'
        }}>
          De{' '}
          <span className="gradient-text">cero</span>{' '}
          a aplicación web moderna con{' '}
          <span className="gradient-text-cyan">Vite</span>{' '}
          en{' '}
          <span style={{ color: '#f59e0b' }}>Ubuntu Server</span>
        </h1>

        {/* Subtitle */}
        <p className="animate-slide-up delay-2" style={{
          fontSize: 18, color: 'var(--text-secondary)', marginBottom: 48, lineHeight: 1.6
        }}>
          Aprende a crear, desarrollar y desplegar apps modernas desde cero
        </p>

        {/* Tech stack chips */}
        <div className="animate-slide-up delay-3" style={{
          display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 56
        }}>
          {[
            { label: 'Vite', icon: <Zap size={14} />, color: 'purple' },
            { label: 'React', icon: <Atom size={14} />, color: 'cyan' },
            { label: 'Ubuntu Server', icon: <Server size={14} />, color: 'orange' },
            { label: 'Node.js', icon: <CircleDot size={14} />, color: 'green' },
            { label: 'GitHub', icon: <GitBranch size={14} />, color: 'purple' },
            { label: 'Nginx', icon: <Globe size={14} />, color: 'cyan' },
          ].map(t => (
            <span key={t.label} className={`chip ${t.color}`}>
              {t.icon} {t.label}
            </span>
          ))}
        </div>

        {/* Speaker line */}
        <div className="animate-fade-in delay-4" style={{
          display: 'flex', alignItems: 'center', gap: 20, justifyContent: 'center'
        }}>
          <div style={{ height: 1, width: 60, background: 'var(--border-subtle)' }} />
          <span style={{ fontSize: 13, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Desarrollo Web Moderno · Ubuntu Server · Despliegue
          </span>
          <div style={{ height: 1, width: 60, background: 'var(--border-subtle)' }} />
        </div>
      </div>

      {/* Floating decoration */}
      <div style={{
        position: 'absolute', bottom: 100, right: 60,
        animation: 'float 4s ease-in-out infinite',
        fontSize: 80, opacity: 0.06
      }}><Zap /></div>
      <div style={{
        position: 'absolute', top: 80, left: 80,
        animation: 'float 5s ease-in-out infinite 1s',
        fontSize: 60, opacity: 0.06
      }}><Globe /></div>
    </>
  );
}
