import { Zap, Atom, Package, Lightbulb, Settings, Folder, FileText, FileEdit, Home, Palette, Image } from 'lucide-react';


export default function Slide10Structure() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 400, height: 400, background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)', bottom: '15%', right: '15%' }} />
      <div className="slide-num">10 / 17</div>
      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 50, alignItems: 'flex-start' }}>
          <div>
            <div className="slide-label animate-fade-in">Arquitectura</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(26px, 3.5vw, 44px)', marginBottom: 16 }}>
              Estructura del <span className="gradient-text">proyecto</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{ fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28 }}>
              Cada archivo tiene un propósito específico. Vite genera una estructura limpia y mínima para que puedas arrancar sin distracciones.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { file: 'index.html', icon: <Home size={14} />, color: '#fcd34d', desc: 'Punto de entrada. Vite lo usa directamente, sin un paso de compilación intermedio.' },
                { file: 'src/', icon: <Folder size={14} />, color: '#a5b4fc', desc: 'Todo tu código fuente: componentes, estilos, lógica y assets.' },
                { file: 'package.json', icon: <Package size={14} />, color: '#6ee7b7', desc: 'Dependencias y scripts del proyecto (dev, build, preview).' },
                { file: 'vite.config.ts', icon: <Settings size={14} />, color: '#f9a8d4', desc: 'Configuración de Vite: plugins, aliases, proxy y opciones de build.' },
              ].map((item, i) => (
                <div key={item.file} className={`animate-slide-up delay-${i + 3}`} style={{ background: 'var(--bg-glass)', border: '1px solid var(--border-subtle)', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
                  <span style={{ fontSize: 20, flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <code style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: item.color, fontWeight: 600 }}>{item.file}</code>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 4, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="animate-scale-in delay-2">
            <div className="code-block">
              <div className="code-header">
                <div className="code-dots"><div className="code-dot red" /><div className="code-dot yellow" /><div className="code-dot green" /></div>
                <span className="code-filename">Árbol de archivos</span>
              </div>
              <div className="code-body">
                <div className="file-tree" style={{ fontSize: 14 }}>
                  <div className="tree-line"><span style={{ color: '#67e8f9' }}><Folder /></span><span className="tree-root">demo-vite/</span></div>
                  <div className="tree-indent">
                    <div className="tree-line"><span style={{ color: '#fcd34d' }}><FileText /></span><span className="tree-special">index.html</span><span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>← entrada</span></div>
                    <div className="tree-line"><span style={{ color: '#fcd34d' }}><FileText /></span><span className="tree-special">package.json</span></div>
                    <div className="tree-line"><span style={{ color: '#f9a8d4' }}><Settings /></span><span className="tree-special">vite.config.ts</span></div>
                    <div className="tree-line"><span style={{ color: '#f9a8d4' }}><FileEdit /></span><span className="tree-file">tsconfig.json</span></div>
                    <div className="tree-line" style={{ marginTop: 8 }}><span style={{ color: '#a5b4fc' }}><Folder /></span><span className="tree-dir">src/</span></div>
                    <div className="tree-indent">
                      <div className="tree-line"><span><FileText /></span><span className="tree-file">main.tsx</span><span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>← root</span></div>
                      <div className="tree-line"><span><Atom /></span><span className="tree-file">App.tsx</span><span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>← componente raíz</span></div>
                      <div className="tree-line"><span><Palette size={14} /></span><span className="tree-file">App.css</span></div>
                      <div className="tree-line"><span><Palette size={14} /></span><span className="tree-file">index.css</span></div>
                      <div className="tree-line"><span style={{ color: '#a5b4fc' }}><Folder /></span><span className="tree-dir">assets/</span></div>
                      <div className="tree-indent">
                        <div className="tree-line"><span><Image size={14} />️</span><span className="tree-file">react.svg</span></div>
                        <div className="tree-line"><span><Zap /></span><span className="tree-file">vite.svg</span></div>
                      </div>
                    </div>
                    <div className="tree-line" style={{ marginTop: 8 }}><span style={{ color: '#6ee7b7' }}><Folder /></span><span className="tree-dir">public/</span></div>
                    <div className="tree-indent"><div className="tree-line"><span><Image size={14} />️</span><span className="tree-file">vite.svg</span></div></div>
                    <div className="tree-line" style={{ marginTop: 8 }}><span style={{ color: '#475569' }}><Folder /></span><span style={{ color: 'var(--text-muted)' }}>node_modules/</span><span style={{ color: 'var(--text-muted)', fontSize: 12, marginLeft: 8 }}>← no tocar</span></div>
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 14, background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.2)', borderRadius: 10, padding: '12px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ fontSize: 20 }}><Lightbulb /></span>
              <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>
                Después del <code style={{ color: '#a5b4fc', fontFamily: 'var(--font-mono)' }}>npm run build</code>, aparecerá la carpeta{' '}
                <code style={{ color: '#fcd34d', fontFamily: 'var(--font-mono)' }}>dist/</code> con la app lista para producción.
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
