import React from 'react';
import { Inbox, Pencil } from 'lucide-react';

import { GitBranch, Globe, Rocket, Package } from 'lucide-react';


const steps = [
  { icon: <GitBranch size={14} />, label: 'GitHub', sub: 'Repositorio', color: '#8b5cf6', colorBg: 'rgba(139,92,246,0.1)', colorBorder: 'rgba(139,92,246,0.25)' },
  { icon: <Inbox size={14} />, label: 'Clone', sub: 'git clone', color: '#67e8f9', colorBg: 'rgba(6,182,212,0.1)', colorBorder: 'rgba(6,182,212,0.25)' },
  { icon: <Package size={14} />, label: 'Install', sub: 'npm install', color: '#6ee7b7', colorBg: 'rgba(16,185,129,0.1)', colorBorder: 'rgba(16,185,129,0.25)' },
  { icon: <Rocket size={14} />, label: 'Run', sub: 'npm run dev', color: '#a5b4fc', colorBg: 'rgba(99,102,241,0.1)', colorBorder: 'rgba(99,102,241,0.25)' },
  { icon: <Pencil size={14} />, label: 'Edit', sub: 'HMR activo', color: '#fcd34d', colorBg: 'rgba(245,158,11,0.1)', colorBorder: 'rgba(245,158,11,0.25)' },
  { icon: <Package size={14} />, label: 'Build', sub: 'npm run build', color: '#f9a8d4', colorBg: 'rgba(236,72,153,0.1)', colorBorder: 'rgba(236,72,153,0.25)' },
  { icon: <Globe size={14} />, label: 'Deploy', sub: 'Nginx / Hosting', color: '#fbbf24', colorBg: 'rgba(251,191,36,0.1)', colorBorder: 'rgba(251,191,36,0.25)' },
];

export default function Slide14Pipeline() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }} />
      <div className="slide-num">14 / 17</div>
      <div className="slide-content" style={{ textAlign: 'center' }}>
        <div className="slide-label animate-fade-in" style={{ justifyContent: 'center' }}>Visión completa</div>
        <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4vw, 52px)', marginBottom: 12, textAlign: 'center' }}>
          Flujo moderno <span className="gradient-text">de principio a fin</span>
        </h2>
        <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 40, textAlign: 'center' }}>
          Así se ve un pipeline de desarrollo moderno con Vite + Ubuntu Server
        </p>
        <div className="pipeline animate-scale-in delay-2" style={{ gap: 6 }}>
          {steps.map((s, i) => (
            <React.Fragment key={s.label}>
              <div className={`pipe-step animate-slide-up delay-${i + 2}`}>
                <div className="pipe-node" style={{ borderColor: s.colorBorder, background: s.colorBg, width: 88, height: 88 }}>
                  <span style={{ fontSize: 28 }}>{s.icon}</span>
                  <span style={{ color: s.color, fontWeight: 700 }}>{s.label}</span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)' }}>{s.sub}</div>
              </div>
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 20 }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: 18, lineHeight: 1 }}>→</span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="animate-fade-in delay-6" style={{ display: 'flex', justifyContent: 'center', gap: 20, marginTop: 28, flexWrap: 'wrap' }}>
          {[
            { label: 'Fuente', desc: 'Código en la nube', color: '#8b5cf6' },
            { label: 'Desarrollo', desc: 'Local / Servidor', color: '#6366f1' },
            { label: 'Producción', desc: 'Build optimizado', color: '#ec4899' },
            { label: 'Publicación', desc: 'Acceso mundial', color: '#f59e0b' },
          ].map(phase => (
            <div key={phase.label} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '10px 16px', textAlign: 'center', minWidth: 120 }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: phase.color, marginBottom: 4 }}>{phase.label}</div>
              <div style={{ fontSize: 11, color: 'var(--text-muted)' }}>{phase.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
