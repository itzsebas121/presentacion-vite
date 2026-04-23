import { Check, ArrowRight } from 'lucide-react';

import { GitBranch, Rocket, Package, Lightbulb, Folder } from 'lucide-react';


export default function Slide13CloneGitHub() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', top: '15%', right: '15%' }} />
      <div className="slide-num">13 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 50, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Flujo real</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Clonar desde <span style={{ color: '#8b5cf6' }}>GitHub</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              En la práctica real, la mayoría del tiempo no empezamos desde cero, sino que clonamos un repositorio existente y lo ejecutamos.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { num: '01', icon: <GitBranch size={14} />, color: '#8b5cf6', title: 'Clonar el repositorio', cmd: 'git clone URL_DEL_REPO', desc: 'Descarga todos los archivos del proyecto desde GitHub al servidor.' },
                { num: '02', icon: <Folder size={14} />, color: '#67e8f9', title: 'Entrar al directorio', cmd: 'cd nombre-del-repo', desc: 'Entra a la carpeta del proyecto recién clonado.' },
                { num: '03', icon: <Package size={14} />, color: '#6ee7b7', title: 'Instalar dependencias', cmd: 'npm install', desc: 'Descarga los paquetes definidos en package.json (node_modules no se sube a Git).' },
                { num: '04', icon: <Rocket size={14} />, color: '#fcd34d', title: 'Levantar el servidor', cmd: 'npm run dev -- --host', desc: 'Inicia Vite en modo desarrollo accesible desde la red.' },
              ].map((s, i) => (
                <div key={s.num} className={`animate-slide-up delay-${i + 2}`} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 7, flexShrink: 0, background: 'rgba(139,92,246,0.1)', border: '1px solid rgba(139,92,246,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: '#c4b5fd', fontWeight: 700 }}>{s.num}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: 13, color: s.color, marginBottom: 2 }}>{s.icon} {s.title}</div>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: '#e6edf3', marginBottom: 2, display: 'block' }}>$ {s.cmd}</code>
                    <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-scale-in delay-6" style={{ marginTop: 14, background: 'rgba(139,92,246,0.06)', border: '1px solid rgba(139,92,246,0.2)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 18 }}><Lightbulb /></span>
              <span style={{ fontSize: 12, color: '#c4b5fd' }}><strong>node_modules</strong> nunca se sube a Git. Por eso <code style={{ fontFamily: 'var(--font-mono)' }}>npm install</code> es siempre el primer paso.</span>
            </div>
          </div>
          <div className="terminal animate-scale-in delay-2">
            <div className="terminal-bar">
              <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
              <div className="terminal-title">ubuntu@server — bash</div>
            </div>
            <div className="terminal-body" style={{ fontSize: 13, lineHeight: 1.7 }}>
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#c4b5fd' }}>git clone https://github.com/user/mi-app-vite.git</span></div>
              <div className="t-output">Cloning into 'mi-app-vite'...</div>
              <div className="t-output">remote: Enumerating objects: 48, done.</div>
              <div className="t-output" style={{ color: '#6ee7b7' }}>Receiving objects: 100% (48/48) done.</div>
              <div style={{ marginTop: 10 }} />
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#67e8f9' }}>cd mi-app-vite</span></div>
              <div style={{ marginTop: 10 }} />
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#6ee7b7' }}>npm install</span></div>
              <div className="t-output">npm warn deprecated...</div>
              <div className="t-output" style={{ color: '#6ee7b7' }}>added 312 packages in 8.4s</div>
              <div style={{ marginTop: 10 }} />
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#fcd34d' }}>npm run dev -- --host</span></div>
              <div className="t-output"> </div>
              <div className="t-output" style={{ color: '#6ee7b7' }}><Check size={14} /> VITE v6.x.x ready in 287 ms</div>
              <div className="t-output"><span style={{ color: '#67e8f9' }}><ArrowRight size={14} /></span><span style={{ color: '#e6edf3' }}>Local:   </span><span style={{ color: '#a5b4fc' }}>http://localhost:5173/</span></div>
              <div className="t-output"><span style={{ color: '#67e8f9' }}><ArrowRight size={14} /></span><span style={{ color: '#e6edf3' }}>Network: </span><span style={{ color: '#6ee7b7' }}>http://192.168.1.100:5173/</span></div>
              <div className="terminal-line" style={{ marginTop: 8 }}><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cursor" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
