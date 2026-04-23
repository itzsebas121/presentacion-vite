import { Rocket, Package, Flame, Sparkles } from 'lucide-react';


export default function Slide04WhatFor() {
  const uses = [
    {
      icon: <Rocket size={14} />, title: 'Crear proyectos modernos', color: 'purple',
      desc: 'Genera scaffolding completo para React, Vue, Svelte, Solid y más con un solo comando.',
      chip: 'npm create vite@latest'
    },
    {
      icon: <Flame size={14} />, title: 'Servidor de desarrollo ultra-rápido', color: 'cyan',
      desc: 'Levanta un servidor local en milisegundos. Sin esperas, sin bundling innecesario.',
      chip: 'npm run dev'
    },
    {
      icon: <Package size={14} />, title: 'Build optimizado para producción', color: 'green',
      desc: 'Genera un bundle minificado y optimizado con code splitting automático usando Rollup.',
      chip: 'npm run build'
    },
    {
      icon: <Sparkles size={14} />, title: 'Mejor experiencia de desarrollo', color: 'orange',
      desc: 'HMR en tiempo real, soporte TypeScript nativo, imports CSS y assets sin configuración.',
      chip: 'Zero config'
    },
  ];

  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
        bottom: '10%', right: '15%',
      }} />
      <div className="slide-num">04 / 17</div>
      <div className="slide-content">
        <div className="title-block">
          <div className="slide-label animate-fade-in">Casos de uso</div>
          <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>
            ¿Para qué sirve{' '}<span className="gradient-text-cyan">Vite?</span>
          </h2>
        </div>
        <div className="grid-2" style={{ gap: 20 }}>
          {uses.map((u, i) => (
            <div key={u.title} className={`card animate-slide-up delay-${i + 2}`} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div className={`icon-badge ${u.color}`} style={{ width: 52, height: 52, fontSize: 24 }}>{u.icon}</div>
                <span className={`chip ${u.color}`} style={{ fontSize: 10, alignSelf: 'flex-start' }}>{u.chip}</span>
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 17, marginBottom: 8, color: 'var(--text-primary)' }}>{u.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
