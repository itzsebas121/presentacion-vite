import { Globe, Clipboard, RefreshCw, PartyPopper, Check } from 'lucide-react';


const steps = [
  { num: '01', cmd: 'sudo apt install nginx -y', icon: <Globe size={14} />, color: '#67e8f9', title: 'Instalar Nginx', desc: 'Servidor web de alto rendimiento para servir archivos estáticos.' },
  { num: '02', cmd: 'sudo cp -r dist/* /var/www/html/', icon: <Clipboard size={14} />, color: '#a5b4fc', title: 'Copiar archivos', desc: 'Mueve el contenido de dist/ a la raíz del servidor web de Nginx.' },
  { num: '03', cmd: 'sudo systemctl restart nginx', icon: <RefreshCw size={14} />, color: '#6ee7b7', title: 'Reiniciar Nginx', desc: 'Aplica los cambios y sirve la nueva versión de la aplicación.' },
];

export default function Slide12Deploy() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)', top: '30%', right: '10%' }} />
      <div className="slide-num">12 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 50, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Despliegue</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Nginx en <span style={{ color: '#f59e0b' }}>Ubuntu Server</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              Con solo 3 comandos, tu aplicación Vite estará accesible en el servidor, lista para recibir visitas en el puerto 80.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {steps.map((s, i) => (
                <div key={s.num} className={`animate-slide-up delay-${i + 3}`} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '12px 14px' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, flexShrink: 0, background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-mono)', fontSize: 10, color: '#a5b4fc', fontWeight: 700 }}>{s.num}</div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 14, color: s.color, marginBottom: 4 }}>{s.icon} {s.title}</div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.5 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="animate-scale-in delay-6" style={{ marginTop: 16, background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 10, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 22 }}><PartyPopper size={14} /></span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13, color: '#6ee7b7' }}>App publicada</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>http://[IP-DEL-SERVIDOR]/</div>
              </div>
            </div>
          </div>
          <div className="terminal animate-scale-in delay-2">
            <div className="terminal-bar">
              <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
              <div className="terminal-title">ubuntu@server — bash</div>
            </div>
            <div className="terminal-body" style={{ fontSize: 13, lineHeight: 1.7 }}>
              <div className="t-output" style={{ color: 'var(--text-muted)', marginBottom: 8 }}># 1. Primero, compila la aplicación</div>
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd">npm run build</span></div>
              <div className="t-output" style={{ color: '#6ee7b7' }}><Check size={14} /> built in 1.24s → dist/</div>
              <div style={{ marginTop: 12 }} /><div className="t-output" style={{ color: 'var(--text-muted)' }}># 2. Instalar Nginx</div>
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#67e8f9' }}>sudo apt install nginx -y</span></div>
              <div className="t-output" style={{ color: '#6ee7b7' }}><Check size={14} /> nginx instalado correctamente</div>
              <div style={{ marginTop: 12 }} /><div className="t-output" style={{ color: 'var(--text-muted)' }}># 3. Copiar archivos de producción</div>
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#a5b4fc' }}>sudo cp -r dist/* /var/www/html/</span></div>
              <div style={{ marginTop: 12 }} /><div className="t-output" style={{ color: 'var(--text-muted)' }}># 4. Reiniciar Nginx</div>
              <div className="terminal-line"><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cmd" style={{ color: '#6ee7b7' }}>sudo systemctl restart nginx</span></div>
              <div style={{ marginTop: 12, padding: '8px 0', borderTop: '1px solid rgba(99,102,241,0.1)' }}>
                <div style={{ color: '#6ee7b7', fontSize: 12 }}>● nginx.service - active (running)</div>
                <div style={{ color: 'var(--accent-cyan)', fontSize: 12, marginTop: 4 }}><Globe /> Tu app está en: http://192.168.1.100/</div>
              </div>
              <div className="terminal-line" style={{ marginTop: 8 }}><span style={{ color: '#6ee7b7' }}>$ </span><span className="t-cursor" /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
