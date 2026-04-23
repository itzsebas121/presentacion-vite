import { Zap, CheckCircle, Ban } from 'lucide-react';


export default function Slide03WhatIsVite() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)',
        top: '20%', right: '20%',
      }} />
      <div className="slide-num">03 / 17</div>

      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div className="slide-label animate-fade-in">Definición</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginBottom: 16 }}>
              ¿Qué es{' '}
              <span className="gradient-text-cyan">Vite?</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{
              fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24
            }}>
              <strong style={{ color: 'var(--text-primary)' }}>Vite</strong> (pronunciado <em>"vit"</em>, francés para "rápido") es una
              herramienta de desarrollo frontend de nueva generación, creada por{' '}
              <strong style={{ color: '#a5b4fc' }}>Evan You</strong>, el creador de Vue.js.
            </p>
            <p className="animate-slide-up delay-3" style={{
              fontSize: 16, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28
            }}>
              Usa <strong style={{ color: '#67e8f9' }}>ES Modules nativos del navegador</strong> durante desarrollo y emplea{' '}
              <strong style={{ color: '#6ee7b7' }}>Rollup</strong> para el build final.
            </p>
            <div className="animate-scale-in delay-3" style={{
              background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(6,182,212,0.1))',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: 16, padding: '16px 20px',
              display: 'inline-flex', alignItems: 'center', gap: 14
            }}>
              <span style={{ fontSize: 36 }}><Zap /></span>
              <div>
                <div style={{ fontFamily: 'var(--font-main)', fontWeight: 800, fontSize: 28, lineHeight: 1 }}>
                  <span className="gradient-text">Vite</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)', marginTop: 4 }}>
                  Next Generation Frontend Tooling
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div className="animate-fade-in delay-2" style={{
              fontSize: 12, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)',
              textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8
            }}>Antes vs. Ahora</div>

            <div className="card animate-slide-up delay-2" style={{
              borderColor: 'rgba(239,68,68,0.2)', background: 'rgba(239,68,68,0.04)'
            }}>
              <div style={{ fontSize: 12, color: '#f87171', fontFamily: 'var(--font-mono)', marginBottom: 10, letterSpacing: '0.05em' }}>
                <Ban size={14} /> HERRAMIENTAS ANTIGUAS
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['Webpack', 'Parcel', 'Gulp', 'Grunt', 'Browserify'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(239,68,68,0.08)', color: '#fca5a5',
                    border: '1px solid rgba(239,68,68,0.15)',
                    borderRadius: 6, padding: '3px 10px', fontSize: 12, fontFamily: 'var(--font-mono)'
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text-muted)' }}>
                Bundle completo en cada cambio · Arranque lento
              </div>
            </div>

            <div className="card animate-slide-up delay-3" style={{
              borderColor: 'rgba(99,102,241,0.25)', background: 'rgba(99,102,241,0.06)'
            }}>
              <div style={{ fontSize: 12, color: '#a5b4fc', fontFamily: 'var(--font-mono)', marginBottom: 10, letterSpacing: '0.05em' }}>
                <CheckCircle /> VITE
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['ESM Nativo', 'esbuild', 'Rollup', 'HMR instantáneo'].map(t => (
                  <span key={t} style={{
                    background: 'rgba(99,102,241,0.1)', color: '#a5b4fc',
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: 6, padding: '3px 10px', fontSize: 12, fontFamily: 'var(--font-mono)'
                  }}>{t}</span>
                ))}
              </div>
              <div style={{ marginTop: 10, fontSize: 13, color: 'var(--text-muted)' }}>
                Sirve archivos bajo demanda · Arranque instantáneo
              </div>
            </div>

            <div className="card animate-slide-up delay-4" style={{ padding: '14px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#f87171', fontFamily: 'var(--font-main)' }}>~60s</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Webpack cold start</div>
                </div>
                <div style={{ fontSize: 20, color: 'var(--text-muted)' }}>→</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 28, fontWeight: 800, color: '#6ee7b7', fontFamily: 'var(--font-main)' }}>&lt;1s</div>
                  <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Vite cold start</div>
                </div>
                <div style={{
                  background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 8, padding: '6px 10px', textAlign: 'center'
                }}>
                  <div style={{ fontSize: 20, fontWeight: 800, color: '#6ee7b7', fontFamily: 'var(--font-main)' }}>60x</div>
                  <div style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>más rápido</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
