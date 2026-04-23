import { Zap, Target, Flame, Lock, Puzzle, Globe } from 'lucide-react';


export default function Slide05WhyVite() {
  const features = [
    { icon: <Zap size={14} />, label: 'Velocidad', color: '#f59e0b', colorBg: 'rgba(245,158,11,0.08)', colorBorder: 'rgba(245,158,11,0.2)', stat: '<500ms', statLabel: 'Cold start', desc: 'Arranca en menos de medio segundo independientemente del tamaño del proyecto.' },
    { icon: <Flame size={14} />, label: 'Hot Module Replacement', color: '#ef4444', colorBg: 'rgba(239,68,68,0.08)', colorBorder: 'rgba(239,68,68,0.2)', stat: 'Instantáneo', statLabel: 'HMR', desc: 'Los cambios en el código se reflejan en el navegador sin recargar toda la página.' },
    { icon: <Target size={14} />, label: 'Config mínima', color: '#6366f1', colorBg: 'rgba(99,102,241,0.08)', colorBorder: 'rgba(99,102,241,0.2)', stat: '0', statLabel: 'Config necesaria', desc: 'Funciona out-of-the-box. Sin babel.config, sin webpack.config, sin magia oculta.' },
    { icon: <Puzzle size={14} />, label: 'Multi-framework', color: '#06b6d4', colorBg: 'rgba(6,182,212,0.08)', colorBorder: 'rgba(6,182,212,0.2)', stat: '10+', statLabel: 'Frameworks', desc: 'Compatible con React, Vue, Svelte, Solid, Qwik, Lit y más desde el día 1.' },
    { icon: <Lock size={14} />, label: 'TypeScript nativo', color: '#10b981', colorBg: 'rgba(16,185,129,0.08)', colorBorder: 'rgba(16,185,129,0.2)', stat: '100%', statLabel: 'TS support', desc: 'TypeScript funciona sin instalación extra. Transpilación sin type-checking en dev.' },
    { icon: <Globe size={14} />, label: 'Ecosistema activo', color: '#8b5cf6', colorBg: 'rgba(139,92,246,0.08)', colorBorder: 'rgba(139,92,246,0.2)', stat: '18M+', statLabel: 'descargas/semana', desc: 'El tooling más adoptado del ecosistema frontend moderno.' },
  ];

  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="slide-num">05 / 17</div>
      <div className="slide-content">
        <div className="title-block">
          <div className="slide-label animate-fade-in">Ventajas clave</div>
          <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            ¿Por qué usar <span className="gradient-text">Vite?</span>
          </h2>
        </div>
        <div className="grid-3" style={{ gap: 14 }}>
          {features.map((f, i) => (
            <div key={f.label} className={`animate-scale-in delay-${i + 2}`} style={{
              background: f.colorBg, border: `1px solid ${f.colorBorder}`,
              borderRadius: 14, padding: '18px 20px', display: 'flex', flexDirection: 'column', gap: 10,
              transition: 'all 0.3s ease'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 24 }}>{f.icon}</span>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 20, color: f.color, lineHeight: 1 }}>{f.stat}</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>{f.statLabel}</div>
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: f.color, marginBottom: 6 }}>{f.label}</div>
                <div style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.55 }}>{f.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
