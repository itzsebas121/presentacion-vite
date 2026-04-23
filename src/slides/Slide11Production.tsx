import { Zap, Rocket, Package, Laptop, Flame, Folder, FileEdit, Bug, Minimize, Scissors, Check } from 'lucide-react';


export default function Slide11Production() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)', top: '20%', left: '15%' }} />
      <div className="slide-num">11 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 50, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Build para producción</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Paso a <span className="gradient-text-green">producción</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 20 }}>
              Un solo comando genera un bundle completamente optimizado, listo para ser desplegado en cualquier servidor web.
            </p>
            <div className="animate-scale-in delay-2 terminal" style={{ marginBottom: 16 }}>
              <div className="terminal-bar">
                <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
                <div className="terminal-title">Build command</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line"><span className="t-prompt">user</span><span className="t-at">@ubuntu:~/demo-vite$ </span><span style={{ color: '#fcd34d', fontWeight: 600 }}>npm run build</span></div>
                <div className="t-output">vite v6.x.x building for production...</div>
                <div className="t-output"><Check size={14} /> 34 modules transformed.</div>
                <div className="t-output" style={{ color: 'var(--accent-green)' }}>dist/index.html           0.46 kB │ gzip: 0.30 kB</div>
                <div className="t-output" style={{ color: 'var(--accent-green)' }}>dist/assets/index-xxx.css 1.39 kB │ gzip: 0.72 kB</div>
                <div className="t-output" style={{ color: 'var(--accent-green)' }}>dist/assets/index-xxx.js  143.36 kB │ gzip: 46.12 kB</div>
                <div className="t-output" style={{ color: '#6ee7b7' }}><Check size={14} /> built in 1.24s</div>
              </div>
            </div>
            <div className="animate-slide-up delay-3" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 24 }}><Folder /></span>
              <div>
                <code style={{ fontFamily: 'var(--font-mono)', color: '#6ee7b7', fontWeight: 700, fontSize: 15 }}>dist/</code>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>Carpeta generada con los archivos estáticos para producción</div>
              </div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div className="card animate-slide-up delay-2" style={{ borderColor: 'rgba(6,182,212,0.2)', background: 'rgba(6,182,212,0.04)' }}>
              <div style={{ fontSize: 12, color: '#67e8f9', fontFamily: 'var(--font-mono)', marginBottom: 14, letterSpacing: '0.05em' }}><Laptop /> MODO DESARROLLO</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { text: 'Servidor nativo ESM', icon: <Zap size={14} /> },
                  { text: 'Hot Module Replacement', icon: <Flame size={14} /> },
                  { text: 'Source maps completos', icon: <Bug size={14} /> },
                  { text: 'Sin minificación (debug fácil)', icon: <FileEdit size={14} /> }
                ].map((t, idx) => (
                  <div key={idx} style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>{t.icon} {t.text}</div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, background: 'rgba(6,182,212,0.1)', borderRadius: 6, padding: '6px 10px', color: '#67e8f9' }}>$ npm run dev</div>
            </div>
            <div className="animate-fade-in delay-3" style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: 20 }}>↓</div>
            <div className="card animate-slide-up delay-3" style={{ borderColor: 'rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.04)' }}>
              <div style={{ fontSize: 12, color: '#6ee7b7', fontFamily: 'var(--font-mono)', marginBottom: 14, letterSpacing: '0.05em' }}><Rocket /> MODO PRODUCCIÓN</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { text: 'Bundle optimizado con Rollup', icon: <Package size={14} /> },
                  { text: 'Minificación automática', icon: <Minimize size={14} /> },
                  { text: 'Tree-shaking (elimina código muerto)', icon: <Scissors size={14} /> },
                  { text: 'Code splitting inteligente', icon: <Zap size={14} /> }
                ].map((t, idx) => (
                  <div key={idx} style={{ fontSize: 13, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 6 }}>{t.icon} {t.text}</div>
                ))}
              </div>
              <div style={{ marginTop: 12, fontFamily: 'var(--font-mono)', fontSize: 12, background: 'rgba(16,185,129,0.1)', borderRadius: 6, padding: '6px 10px', color: '#6ee7b7' }}>$ npm run build</div>
            </div>
            <div className="animate-scale-in delay-4" style={{ display: 'flex', gap: 16, justifyContent: 'space-around', background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '14px 18px' }}>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 24, fontWeight: 800, color: '#ef4444', fontFamily: 'var(--font-main)' }}>143kb</div><div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>JS sin comprimir</div></div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>→</div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 24, fontWeight: 800, color: '#6ee7b7', fontFamily: 'var(--font-main)' }}>46kb</div><div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Con gzip</div></div>
              <div style={{ display: 'flex', alignItems: 'center', color: 'var(--text-muted)' }}>→</div>
              <div style={{ textAlign: 'center' }}><div style={{ fontSize: 24, fontWeight: 800, color: '#a5b4fc', fontFamily: 'var(--font-main)' }}>68%</div><div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>reducción</div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
