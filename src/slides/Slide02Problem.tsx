import { Package, Wrench, Hourglass, Snail } from 'lucide-react';


export default function Slide02Problem() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)',
        top: '30%', left: '30%',
      }} />
      <div className="slide-num">02 / 17</div>

      <div className="slide-content">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="slide-label animate-fade-in">El problema</div>
            <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginBottom: 20 }}>
              Las herramientas<br />
              <span style={{ color: '#ef4444' }}>lentas nos frenan</span>
            </h2>
            <div className="divider animate-scale-in delay-2" />
            <p className="animate-slide-up delay-2" style={{
              fontSize: 17, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 32
            }}>
              Durante años, el desarrollo frontend implicaba configuraciones complejas,
              servidores lentos y rebuilds interminables.
            </p>
            <div className="animate-scale-in delay-3" style={{
              background: 'rgba(239,68,68,0.06)',
              border: '1px solid rgba(239,68,68,0.25)',
              borderLeft: '4px solid #ef4444',
              borderRadius: '0 12px 12px 0',
              padding: '20px 24px',
            }}>
              <p style={{
                fontFamily: 'var(--font-main)', fontWeight: 700,
                fontSize: 18, color: '#fca5a5', lineHeight: 1.4
              }}>
                "Esperar demasiado para levantar una app ya no tiene sentido."
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {[
              { icon: <Hourglass size={14} />, title: 'Webpack tardando minutos', sub: 'Cold start de 30-60 segundos en proyectos medianos', delay: 'delay-2' },
              { icon: <Wrench size={14} />, title: 'Configuración interminable', sub: 'Docenas de plugins, loaders y babel configs', delay: 'delay-3' },
              { icon: <Snail size={14} />, title: 'HMR lento o roto', sub: 'Cada cambio hacía un rebuild completo del bundle', delay: 'delay-4' },
              { icon: <Package size={14} />, title: 'Bundles gigantes', sub: 'Sin tree-shaking eficiente ni code splitting real', delay: 'delay-5' },
            ].map(item => (
              <div key={item.title} className={`error-card animate-slide-up ${item.delay}`} style={{ alignItems: 'center' }}>
                <span style={{ fontSize: 22, flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: '#fca5a5', marginBottom: 2 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: 'var(--text-muted)' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
