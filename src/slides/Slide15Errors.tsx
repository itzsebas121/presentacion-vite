import { Globe, AlertTriangle, Package, Lightbulb, Lock, X, Check, Link } from 'lucide-react';


const errors = [
  { icon: <AlertTriangle size={14} />, code: 'ENGINE ERROR', title: 'Node.js incompatible', problem: 'La versión de Node.js no es compatible con Vite', fix: 'Instala Node 18+ con nvm o NodeSource', cmd: 'node --version  # Debe ser >= 18', color: '#ef4444', colorBg: 'rgba(239,68,68,0.06)', colorBorder: 'rgba(239,68,68,0.2)' },
  { icon: <Package size={14} />, code: 'MODULE NOT FOUND', title: 'Falta npm install', problem: 'Error: Cannot find module "react"', fix: 'Siempre ejecuta npm install después de clonar', cmd: 'npm install', color: '#f59e0b', colorBg: 'rgba(245,158,11,0.06)', colorBorder: 'rgba(245,158,11,0.2)' },
  { icon: <Lock size={14} />, code: 'ECONNREFUSED', title: 'Puerto bloqueado', problem: 'No puedo acceder a la app desde el navegador', fix: 'Abre el puerto 5173 en el firewall del servidor', cmd: 'sudo ufw allow 5173', color: '#6366f1', colorBg: 'rgba(99,102,241,0.06)', colorBorder: 'rgba(99,102,241,0.2)' },
  { icon: <Globe size={14} />, code: 'HOST NOT EXPOSED', title: 'Olvidaste el flag --host', problem: 'La app corre pero solo en localhost del server', fix: 'Usa siempre --host para exponer en red', cmd: 'npm run dev -- --host', color: '#06b6d4', colorBg: 'rgba(6,182,212,0.06)', colorBorder: 'rgba(6,182,212,0.2)' },
  { icon: <Link size={14} />, code: 'PEER DEP CONFLICT', title: 'Conflicto de dependencias', problem: 'npm WARN ERESOLVE peer dep conflict', fix: 'Fuerza la resolución o usa --legacy-peer-deps', cmd: 'npm install --legacy-peer-deps', color: '#8b5cf6', colorBg: 'rgba(139,92,246,0.06)', colorBorder: 'rgba(139,92,246,0.2)' },
];

export default function Slide15Errors() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)', top: '20%', right: '10%' }} />
      <div className="slide-num">15 / 17</div>
      <div className="slide-content">
        <div className="title-block">
          <div className="slide-label animate-fade-in">Troubleshooting</div>
          <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}>
            Errores <span style={{ color: '#ef4444' }}>comunes</span> y sus soluciones
          </h2>
        </div>
        <div className="grid-2" style={{ gap: 12 }}>
          {errors.map((e, i) => (
            <div key={e.title} className={`animate-slide-up delay-${i + 2}`} style={{ background: e.colorBg, border: `1px solid ${e.colorBorder}`, borderRadius: 12, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: 20 }}>{e.icon}</span>
                <div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: e.color, background: e.colorBg, border: `1px solid ${e.colorBorder}`, borderRadius: 4, padding: '1px 6px', marginRight: 8 }}>{e.code}</span>
                  <span style={{ fontWeight: 700, fontSize: 14, color: e.color }}>{e.title}</span>
                </div>
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}><span style={{ color: '#f87171' }}><X size={14} /></span>{e.problem}</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}><span style={{ color: '#6ee7b7' }}><Check size={14} /></span>{e.fix}</div>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'rgba(0,0,0,0.3)', borderRadius: 6, padding: '4px 10px', color: e.color, display: 'block' }}>$ {e.cmd}</code>
            </div>
          ))}
          <div className="animate-slide-up delay-7" style={{ background: 'rgba(16,185,129,0.06)', border: '1px solid rgba(16,185,129,0.2)', borderRadius: 12, padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <span style={{ fontSize: 28, flexShrink: 0 }}><Lightbulb /></span>
            <div>
              <div style={{ fontWeight: 700, fontSize: 14, color: '#6ee7b7', marginBottom: 6 }}>Pro tip: Lee siempre el error</div>
              <div style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.6 }}>Vite tiene mensajes de error muy claros y descriptivos. El stack trace generalmente indica exactamente el archivo y línea donde ocurre el problema.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
