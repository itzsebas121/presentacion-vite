import { Zap, Server, GitBranch, Rocket } from 'lucide-react';


const takeaways = [
  { icon: <Zap size={14} />, color: '#fcd34d', colorBg: 'rgba(245,158,11,0.08)', colorBorder: 'rgba(245,158,11,0.2)', title: 'Vite acelera el desarrollo', desc: 'Cold start en milisegundos, HMR instantáneo, configuración mínima. El estándar del frontend moderno.' },
  { icon: <Rocket size={14} />, color: '#a5b4fc', colorBg: 'rgba(99,102,241,0.08)', colorBorder: 'rgba(99,102,241,0.2)', title: 'Inicio de proyectos simplificado', desc: 'Un solo comando genera una base de proyecto lista para React, Vue, TypeScript y más.' },
  { icon: <Server size={14} />, color: '#6ee7b7', colorBg: 'rgba(16,185,129,0.08)', colorBorder: 'rgba(16,185,129,0.2)', title: 'Ubuntu Server es tu plataforma', desc: 'Estable, gratuito y poderoso. Perfecto para montar y ejecutar aplicaciones web modernas en producción.' },
  { icon: <GitBranch size={14} />, color: '#c4b5fd', colorBg: 'rgba(139,92,246,0.08)', colorBorder: 'rgba(139,92,246,0.2)', title: 'GitHub facilita el trabajo real', desc: 'Clonar y levantar un proyecto existente es el flujo más común en el trabajo profesional.' },
];

export default function Slide16Conclusion() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 450, height: 450, background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)', top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="slide-num">16 / 17</div>
      <div className="slide-content">
        <div className="title-block">
          <div className="slide-label animate-fade-in">Resumen</div>
          <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            Lo que <span className="gradient-text">aprendimos</span> hoy
          </h2>
          <p className="animate-fade-in delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', maxWidth: 550, margin: '16px auto 0' }}>
            De una terminal vacía a una aplicación moderna desplegada en producción
          </p>
        </div>
        <div className="grid-2" style={{ gap: 16 }}>
          {takeaways.map((t, i) => (
            <div key={t.title} className={`animate-scale-in delay-${i + 2}`} style={{ background: t.colorBg, border: `1px solid ${t.colorBorder}`, borderRadius: 14, padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, flexShrink: 0, background: t.colorBg, border: `1px solid ${t.colorBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24 }}>{t.icon}</div>
                <h3 style={{ fontWeight: 700, fontSize: 16, color: t.color, lineHeight: 1.3 }}>{t.title}</h3>
              </div>
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="animate-scale-in delay-6" style={{ marginTop: 20, background: 'rgba(0,0,0,0.3)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 12, padding: '14px 20px', display: 'flex', gap: 24, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          {[
            { cmd: 'npm create vite@latest', label: 'Crear' },
            { cmd: 'npm install', label: 'Instalar' },
            { cmd: 'npm run dev', label: 'Desarrollar' },
            { cmd: 'npm run build', label: 'Compilar' },
            { cmd: 'nginx + dist/', label: 'Desplegar' },
          ].map(c => (
            <div key={c.cmd} style={{ textAlign: 'center' }}>
              <code style={{ fontFamily: 'var(--font-mono)', fontSize: 11, background: 'rgba(99,102,241,0.1)', borderRadius: 6, padding: '4px 10px', color: '#a5b4fc', display: 'block', marginBottom: 4 }}>$ {c.cmd}</code>
              <span style={{ fontSize: 10, color: 'var(--text-muted)' }}>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
