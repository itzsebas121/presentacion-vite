import { Server, CircleDot, GitBranch, Package, Laptop, Lightbulb } from 'lucide-react';


export default function Slide06Prerequisites() {
  const reqs = [
    { icon: <Server size={14} />, name: 'Ubuntu Server', version: '22.04 LTS o superior', desc: 'Sistema operativo base del servidor', color: 'orange', cmd: 'lsb_release -a' },
    { icon: <CircleDot size={14} />, name: 'Node.js', version: 'v18+ (LTS recomendado)', desc: 'Runtime de JavaScript necesario para Vite', color: 'green', cmd: 'node --version' },
    { icon: <Package size={14} />, name: 'npm', version: 'v9+ (incluido con Node)', desc: 'Gestor de paquetes de Node.js', color: 'cyan', cmd: 'npm --version' },
    { icon: <GitBranch size={14} />, name: 'Git', version: 'v2.x', desc: 'Para clonar repositorios y control de versiones', color: 'purple', cmd: 'git --version' },
    { icon: <Laptop size={14} />, name: 'Acceso SSH / Terminal', version: 'Bash o zsh', desc: 'Conexión al servidor por línea de comandos', color: 'pink', cmd: 'ssh user@ip' },
  ];

  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 350, height: 350, background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', top: '15%', right: '10%' }} />
      <div className="slide-num">06 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="slide-label animate-fade-in">Antes de empezar</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4vw, 46px)', marginBottom: 16 }}>
              Requisitos <span className="gradient-text-green">previos</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              Asegúrate de tener el siguiente stack base instalado en tu Ubuntu Server antes de continuar.
            </p>
            <div className="animate-scale-in delay-3" style={{
              background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12, padding: '16px 18px'
            }}>
              <div style={{ fontSize: 11, color: '#6ee7b7', fontFamily: 'var(--font-mono)', marginBottom: 8, letterSpacing: '0.05em' }}>
                <Lightbulb /> INSTALAR NODE.JS RÁPIDO
              </div>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#a5b4fc' }}>
                curl -fsSL https://deb.nodesource.com<br/>
                /setup_20.x | sudo -E bash -<br/>
                sudo apt-get install -y nodejs
              </code>
            </div>
          </div>
          <div className="checklist">
            {reqs.map((r, i) => (
              <div key={r.name} className={`check-item animate-slide-up delay-${i + 2}`}>
                <div className="check-icon" style={{ fontSize: 16 }}>{r.icon}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontWeight: 700, fontSize: 15, color: 'var(--text-primary)' }}>{r.name}</span>
                    <span className={`chip ${r.color}`} style={{ fontSize: 10, padding: '2px 8px' }}>{r.version}</span>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{r.desc}</div>
                </div>
                <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', background: 'var(--bg-secondary)', padding: '2px 8px', borderRadius: 4, whiteSpace: 'nowrap' }}>{r.cmd}</code>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
