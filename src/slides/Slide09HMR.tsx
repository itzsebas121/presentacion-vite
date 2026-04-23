import { Zap, Target, Save, RefreshCw, Check } from 'lucide-react';


export default function Slide09HMR() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)', top: '20%', right: '10%' }} />
      <div className="slide-num">09 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 50, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Hot Module Replacement</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Cambios <span style={{ color: '#ef4444' }}>en vivo</span> sin recargar
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 24 }}>
              HMR es la tecnología más poderosa de Vite. Cuando modificas un archivo, solo ese módulo se actualiza en el navegador, sin perder el estado de la aplicación.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
              {[
                { icon: <Target size={14} />, text: 'Solo actualiza el módulo cambiado', color: '#fcd34d' },
                { icon: <Save size={14} />, text: 'El estado de React se preserva', color: '#6ee7b7' },
                { icon: <Zap size={14} />, text: 'Feedback instantáneo al guardar', color: '#a5b4fc' },
                { icon: <RefreshCw size={14} />, text: 'Sin reload completo de página', color: '#f9a8d4' },
              ].map(item => (
                <div key={item.text} className="animate-slide-up delay-3" style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 14px', background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 8 }}>
                  <span style={{ fontSize: 18 }}>{item.icon}</span>
                  <span style={{ fontSize: 14, color: item.color }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div className="animate-scale-in delay-4" style={{ display: 'flex', gap: 20, alignItems: 'center', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.15)', borderRadius: 12, padding: '14px 18px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 36, fontWeight: 900, color: '#ef4444', fontFamily: 'var(--font-main)', lineHeight: 1 }}>&lt;50ms</div>
                <div style={{ fontSize: 11, color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Tiempo HMR</div>
              </div>
              <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>Guardar un archivo → ver el cambio en el navegador en menos de 50 milisegundos.</div>
            </div>
          </div>
          <div className="animate-scale-in delay-2">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
                <span className="code-filename">src/App.tsx</span>
                <span style={{ marginLeft: 'auto', background: 'rgba(16,185,129,0.15)', color: '#6ee7b7', borderRadius: 4, padding: '2px 8px', fontSize: 10, fontFamily: 'var(--font-mono)', border: '1px solid rgba(16,185,129,0.2)' }}><Check size={14} /> HMR active</span>
              </div>
              <div className="code-body" style={{ fontSize: 13 }}>
                {[
                  { num: 1, content: <><span className="code-keyword">import</span> <span style={{ color: '#e6edf3' }}>{'{ useState }'}</span> <span className="code-keyword">from</span> <span className="code-string">'react'</span></> },
                  { num: 2, content: '' },
                  { num: 3, content: <><span className="code-keyword">function</span> <span style={{ color: '#d2a8ff' }}>App</span><span style={{ color: '#e6edf3' }}>()</span> <span style={{ color: '#e6edf3' }}>{'{'}</span></> },
                  { num: 4, content: <>&nbsp;&nbsp;<span className="code-keyword">const</span> [<span style={{ color: '#79c0ff' }}>count</span>, <span style={{ color: '#79c0ff' }}>setCount</span>] = <span style={{ color: '#d2a8ff' }}>useState</span>(<span style={{ color: '#f78166' }}>0</span>)</> },
                  { num: 5, content: '' },
                  { num: 6, content: <>&nbsp;&nbsp;<span className="code-keyword">return</span> (</> },
                  { num: 7, hl: true, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;div</span> <span style={{ color: '#ffa657' }}>className</span>=<span className="code-string">"app"</span><span style={{ color: '#7ee787' }}>&gt;</span></> },
                  { num: 8, hl: true, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;h1&gt;</span><span style={{ color: '#e6edf3' }}>Hola, Vite <Zap /></span><span style={{ color: '#7ee787' }}>&lt;/h1&gt;</span></> },
                  { num: 9, hl: true, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;p&gt;</span><span style={{ color: '#e6edf3' }}>Contador: </span><span style={{ color: '#79c0ff' }}>{'{'}</span><span style={{ color: '#e6edf3' }}>count</span><span style={{ color: '#79c0ff' }}>{'}'}</span><span style={{ color: '#7ee787' }}>&lt;/p&gt;</span></> },
                  { num: 10, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;button</span> <span style={{ color: '#ffa657' }}>onClick</span>=<span style={{ color: '#e6edf3' }}>{'{() => setCount(c => c + 1)}'}</span><span style={{ color: '#7ee787' }}>&gt;</span></> },
                  { num: 11, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Incrementar</> },
                  { num: 12, content: <>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;/button&gt;</span></> },
                  { num: 13, content: <>&nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#7ee787' }}>&lt;/div&gt;</span></> },
                  { num: 14, content: <>&nbsp;&nbsp;)</> },
                  { num: 15, content: <><span style={{ color: '#e6edf3' }}>{'}'}</span></> },
                  { num: 16, content: '' },
                  { num: 17, content: <><span className="code-keyword">export default</span> <span style={{ color: '#d2a8ff' }}>App</span></> },
                ].map(line => (
                  <div key={line.num} className="code-line" style={{ background: (line as any).hl ? 'rgba(99,102,241,0.08)' : 'transparent', borderLeft: (line as any).hl ? '2px solid rgba(99,102,241,0.4)' : '2px solid transparent', paddingLeft: 4, borderRadius: 2 }}>
                    <span className="code-line-num">{line.num}</span>
                    <span className="code-line-content">{line.content}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ marginTop: 12, background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.25)', borderRadius: 10, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981', animation: 'pulse-glow 2s infinite' }} />
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#6ee7b7' }}>[vite] hmr update: /src/App.tsx (43ms)</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
