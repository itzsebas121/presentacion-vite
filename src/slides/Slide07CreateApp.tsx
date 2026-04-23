import { Zap, Rocket, Package, Folder, Check, ArrowRight } from 'lucide-react';


const steps = [
  { num: '01', cmd: 'npm create vite@latest demo-vite', comment: '# Crea el proyecto con scaffolding interactivo', icon: <Zap size={14} />, color: '#a5b4fc', title: 'Crear el proyecto', desc: 'Descarga la plantilla y genera la estructura del proyecto. Elige React, Vue, Svelte u otro framework.' },
  { num: '02', cmd: 'cd demo-vite', comment: '# Entra al directorio del proyecto', icon: <Folder size={14} />, color: '#67e8f9', title: 'Entrar al directorio', desc: 'Todos los comandos siguientes deben ejecutarse dentro de esta carpeta.' },
  { num: '03', cmd: 'npm install', comment: '# Instala las dependencias del package.json', icon: <Package size={14} />, color: '#6ee7b7', title: 'Instalar dependencias', desc: 'Descarga todos los paquetes necesarios. Solo se ejecuta una vez (o cuando cambia package.json).' },
  { num: '04', cmd: 'npm run dev -- --host', comment: '# Levanta el servidor accesible en red', icon: <Rocket size={14} />, color: '#fcd34d', title: 'Iniciar en modo red', desc: 'El flag --host expone el servidor en la IP del servidor, no solo en localhost. Esencial en Ubuntu Server.' },
];

export default function Slide07CreateApp() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', bottom: '10%', left: '20%' }} />
      <div className="slide-num">07 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 40, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Demo en vivo</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Crear una app <span className="gradient-text">desde cero</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              En menos de 2 minutos tendrás una aplicación frontend moderna corriendo en tu servidor Ubuntu.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {steps.map((s, i) => (
                <div key={s.num} className={`animate-slide-up delay-${i + 2}`} style={{
                  display: 'flex', alignItems: 'flex-start', gap: 12,
                  background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)',
                  borderRadius: 10, padding: '12px 14px', backdropFilter: 'blur(10px)'
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 11, color: '#a5b4fc', fontWeight: 700, flexShrink: 0 }}>{s.num}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 14, color: s.color, marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="terminal animate-scale-in delay-2">
            <div className="terminal-bar">
              <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
              <div className="terminal-title">ubuntu@server:~</div>
            </div>
            <div className="terminal-body" style={{ fontSize: 13 }}>
              {steps.map((s, i) => (
                <div key={s.num} style={{ marginBottom: 14 }}>
                  <div className="terminal-line">
                    <span className="t-prompt">user</span><span className="t-at">@</span><span className="t-user">ubuntu</span><span className="t-at">:</span><span className="t-dir">~</span><span className="t-at">$ </span>
                    <span className="t-cmd" style={{ color: s.color }}>{s.cmd}</span>
                  </div>
                  <div className="t-output">{s.comment}</div>
                  {i === 3 && (<>
                    <div className="t-output" style={{ color: 'var(--accent-green)' }}><Check size={14} /> VITE v6.x.x  ready in 312 ms</div>
                    <div className="t-output" style={{ color: '#67e8f9' }}><ArrowRight size={14} /> Local:   http://localhost:5173/</div>
                    <div className="t-output" style={{ color: '#a5b4fc' }}><ArrowRight size={14} /> Network: http://192.168.1.100:5173/</div>
                  </>)}
                  {i === 2 && <div className="t-output" style={{ color: 'var(--accent-green)' }}>added 48 packages in 3.2s</div>}
                </div>
              ))}
              <div className="terminal-line">
                <span className="t-prompt">user</span><span className="t-at">@</span><span className="t-user">ubuntu</span><span className="t-at">:</span><span className="t-dir">~/demo-vite</span><span className="t-at">$ </span>
                <span className="t-cursor" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
