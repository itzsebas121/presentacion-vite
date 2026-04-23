import { Zap, Atom, Globe, Lock, RefreshCw, Shield } from 'lucide-react';


export default function Slide08AppRunning() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 500, height: 500, background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)', top: '30%', left: '50%', transform: 'translateX(-50%)' }} />
      <div className="slide-num">08 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 50, alignItems: 'center' }}>
          <div>
            <div className="slide-label animate-fade-in">Resultado</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              La app está <span className="gradient-text-cyan">corriendo</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
              Desde cualquier navegador en la misma red, puedes acceder a la aplicación usando la IP del servidor Ubuntu.
            </p>
            <div className="animate-scale-in delay-3" style={{ background: 'rgba(6,182,212,0.08)', border: '1px solid rgba(6,182,212,0.25)', borderRadius: 12, padding: '16px 20px', marginBottom: 20 }}>
              <div style={{ fontSize: 11, color: '#67e8f9', fontFamily: 'var(--font-mono)', marginBottom: 10, letterSpacing: '0.08em' }}><Globe /> URL DE ACCESO</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 16, fontWeight: 600, color: 'var(--text-primary)', marginBottom: 6 }}>
                http://<span style={{ color: '#67e8f9' }}>192.168.1.100</span>:5173/
              </div>
              <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>Reemplaza la IP con la de tu servidor Ubuntu</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { icon: <Zap size={14} />, text: 'Tiempo de respuesta: menos de 50ms', color: '#fcd34d' },
                { icon: <RefreshCw size={14} />, text: 'Hot reload activo sin recargar', color: '#6ee7b7' },
                { icon: <Shield size={14} />, text: 'Solo accesible en tu red local', color: '#a5b4fc' },
              ].map(item => (
                <div key={item.text} className="animate-slide-up delay-4" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 8 }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: item.color }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-scale-in delay-2">
            <div style={{ background: '#1c2128', borderRadius: 12, overflow: 'hidden', border: '1px solid rgba(99,102,241,0.2)', boxShadow: '0 24px 60px rgba(0,0,0,0.6), 0 0 40px rgba(6,182,212,0.1)' }}>
              <div style={{ padding: '10px 14px', background: '#0d1117', borderBottom: '1px solid rgba(99,102,241,0.1)', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
                  <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
                </div>
                <div style={{ flex: 1, background: '#161b22', borderRadius: 6, padding: '4px 12px', fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', border: '1px solid rgba(99,102,241,0.1)' }}>
                  <Lock /> http://192.168.1.100:5173
                </div>
              </div>
              <div style={{ padding: 32, minHeight: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 20, background: 'linear-gradient(135deg, #0f0f23, #1a1a3e)' }}>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: 14, background: 'linear-gradient(135deg, #646cff, #9c47ff)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, boxShadow: '0 0 20px rgba(100,108,255,0.4)', animation: 'float 3s ease-in-out infinite' }}><Zap /></div>
                  <span style={{ fontSize: 24, color: 'var(--text-muted)' }}>+</span>
                  <div style={{ width: 64, height: 64, borderRadius: 14, background: 'linear-gradient(135deg, #61dafb, #0099cc)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28, boxShadow: '0 0 20px rgba(97,218,251,0.4)', animation: 'float 3s ease-in-out infinite 0.5s' }}><Atom /></div>
                </div>
                <h3 style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 20, color: 'white', textAlign: 'center' }}>Vite + React</h3>
                <p style={{ fontSize: 12, color: '#888', textAlign: 'center' }}>Edit <code style={{ color: '#a5b4fc' }}>src/App.tsx</code> and save to test HMR</p>
                <div style={{ background: 'rgba(100,108,255,0.15)', border: '1px solid rgba(100,108,255,0.3)', borderRadius: 24, padding: '8px 20px', fontFamily: 'var(--font-mono)', fontSize: 12, color: '#a5b4fc' }}>count is 0</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, justifyContent: 'flex-end', padding: '6px 14px', borderTop: '1px solid rgba(99,102,241,0.1)', background: '#0d1117' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#28c840' }} />
                <span style={{ fontSize: 10, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>HMR connected · 50ms</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
