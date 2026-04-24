import { memo, type CSSProperties, type ReactNode } from 'react';
import { Atom, Ban, CheckCircle, CircleDot, GitBranch, Globe, Hand, Hourglass, MessageCircle, Mic, Package, Rocket, Server, Snail, Sparkles, Wrench, Zap } from 'lucide-react';

type SectionSlideProps = {
  num: string;
  label: string;
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  glowStyle?: CSSProperties;
};

type CardProps = {
  icon: ReactNode;
  title: string;
  text: string;
  tone?: 'blue' | 'teal' | 'green' | 'amber' | 'red' | 'violet';
};

type MacFrameProps = {
  title: string;
  children: ReactNode;
  accent?: 'blue' | 'teal' | 'green' | 'amber' | 'red';
};

const frameAccent: Record<NonNullable<MacFrameProps['accent']>, string> = {
  blue: 'rgba(59,130,246,0.22)',
  teal: 'rgba(20,184,166,0.22)',
  green: 'rgba(34,197,94,0.22)',
  amber: 'rgba(245,158,11,0.22)',
  red: 'rgba(239,68,68,0.22)',
};

const LOGO_UBUNTU = 'https://cdn.worldvectorlogo.com/logos/ubuntu-2.svg';
const LOGO_LINUX = 'https://logos-world.net/wp-content/uploads/2020/09/Linux-Logo.png';
const LOGO_VITE = 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/1280px-Vitejs-logo.svg.png';
const LOGO_GITHUB = 'https://cdn-icons-png.flaticon.com/512/25/25231.png';
const LOGO_REACT = 'https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png';
const LOGO_SVELTE = 'https://raw.githubusercontent.com/detain/svg-logos/master/svg/s/svelte-wordmark-1.svg';
const LOGO_HTML = 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png';
const LOGO_CSS = 'https://cdn-icons-png.flaticon.com/512/919/919826.png';
const LOGO_JAVASCRIPT = 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png';
const LOGO_TYPESCRIPT = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/960px-Typescript_logo_2020.svg.png';
const LOGO_TAILWIND = 'https://cdn.worldvectorlogo.com/logos/tailwind-css-1.svg';
const LOGO_CHATGPT = 'https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png';
const LOGO_GEMINI = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Google_Gemini_logo.svg/1280px-Google_Gemini_logo.svg.png';
const LOGO_COPILOT = 'https://1000logos.net/wp-content/uploads/2023/11/Copilot-Logo.png';

type BackdropTone = CardProps['tone'];

type BackdropConfig = {
  watermarkIcon: ReactNode;
  watermarkTone: BackdropTone;
  icons: Array<{
    icon: ReactNode;
    tone: BackdropTone;
    style: CSSProperties;
  }>;
  logos?: Array<{
    src: string;
    alt: string;
    className: string;
    style: CSSProperties;
  }>;
};

function BackdropIcon({ icon, tone, style, soft = false }: { icon: ReactNode; tone: BackdropTone; style: CSSProperties; soft?: boolean }) {
  return (
    <span className={`backdrop-icon ${tone}${soft ? ' soft' : ''}`} style={style}>{icon}</span>
  );
}

const BackdropScene = memo(function BackdropScene({ num }: { num: string }) {
  const slideId = num.slice(0, 2);

  const defaultConfig: BackdropConfig = {
    watermarkIcon: <CircleDot size={156} strokeWidth={1.1} />,
    watermarkTone: 'blue',
    icons: [],
  };

  const backdropBySlide: Record<string, BackdropConfig> = {
    '02': { watermarkIcon: <CircleDot size={148} strokeWidth={1.1} />, watermarkTone: 'teal', icons: [] },
    '03': { watermarkIcon: <Server size={150} strokeWidth={1.1} />, watermarkTone: 'green', icons: [], logos: [{ src: LOGO_UBUNTU, alt: 'Ubuntu logo', className: 'backdrop-ubuntu', style: { top: '4%', right: '3%' } }, { src: LOGO_LINUX, alt: 'Linux logo', className: 'backdrop-linux', style: { bottom: '4%', left: '3%' } }] },
    '04': { watermarkIcon: <Wrench size={150} strokeWidth={1.1} />, watermarkTone: 'blue', icons: [] },
    '05': { watermarkIcon: <Globe size={150} strokeWidth={1.1} />, watermarkTone: 'amber', icons: [], logos: [{ src: LOGO_HTML, alt: 'HTML logo', className: 'backdrop-html', style: { top: '4%', right: '4%' } }, { src: LOGO_CSS, alt: 'CSS logo', className: 'backdrop-css', style: { bottom: '4%', left: '4%' } }, { src: LOGO_JAVASCRIPT, alt: 'JavaScript logo', className: 'backdrop-javascript', style: { bottom: '4%', right: '4%' } }] },
    '06': { watermarkIcon: <Hourglass size={148} strokeWidth={1.1} />, watermarkTone: 'red', icons: [] },
    '07': { watermarkIcon: <Zap size={150} strokeWidth={1.1} />, watermarkTone: 'blue', icons: [], logos: [{ src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { bottom: '4%', left: '4%' } }, { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { top: '4%', right: '4%' } }] },
    '08': { watermarkIcon: <Rocket size={148} strokeWidth={1.1} />, watermarkTone: 'teal', icons: [], logos: [{ src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { bottom: '4%', left: '4%' } }, { src: LOGO_JAVASCRIPT, alt: 'JavaScript logo', className: 'backdrop-javascript', style: { top: '4%', right: '4%' } }] },
    '09': { watermarkIcon: <Wrench size={148} strokeWidth={1.1} />, watermarkTone: 'green', icons: [], logos: [{ src: LOGO_TYPESCRIPT, alt: 'TypeScript logo', className: 'backdrop-typescript', style: { top: '4%', right: '4%' } }, { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { bottom: '4%', left: '4%' } }] },
    '10': { watermarkIcon: <Package size={148} strokeWidth={1.1} />, watermarkTone: 'blue', icons: [], logos: [{ src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { top: '4%', right: '4%' } }] },
    '11': { watermarkIcon: <CircleDot size={148} strokeWidth={1.1} />, watermarkTone: 'teal', icons: [] },
    '12': { watermarkIcon: <GitBranch size={148} strokeWidth={1.1} />, watermarkTone: 'teal', icons: [], logos: [{ src: LOGO_GITHUB, alt: 'GitHub logo', className: 'backdrop-github', style: { top: '4%', right: '4%' } }] },
    '13': { watermarkIcon: <Atom size={148} strokeWidth={1.1} />, watermarkTone: 'amber', icons: [], logos: [{ src: LOGO_CHATGPT, alt: 'ChatGPT logo', className: 'backdrop-chatgpt', style: { top: '4%', right: '4%' } }, { src: LOGO_GEMINI, alt: 'Gemini logo', className: 'backdrop-gemini', style: { bottom: '4%', left: '4%' } }, { src: LOGO_COPILOT, alt: 'Copilot logo', className: 'backdrop-copilot', style: { bottom: '4%', left: '4%' } }] },
    '14': { watermarkIcon: <Rocket size={148} strokeWidth={1.1} />, watermarkTone: 'green', icons: [], logos: [{ src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { top: '4%', right: '4%' } }, { src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { bottom: '4%', left: '4%' } }] },
    '15': { watermarkIcon: <Server size={150} strokeWidth={1.1} />, watermarkTone: 'blue', icons: [], logos: [{ src: LOGO_UBUNTU, alt: 'Ubuntu logo', className: 'backdrop-ubuntu', style: { top: '4%', right: '4%' } }, { src: LOGO_LINUX, alt: 'Linux logo', className: 'backdrop-linux', style: { bottom: '4%', left: '4%' } }] },
    '16': { watermarkIcon: <Ban size={148} strokeWidth={1.1} />, watermarkTone: 'red', icons: [] },
    '17': { watermarkIcon: <CheckCircle size={148} strokeWidth={1.1} />, watermarkTone: 'teal', icons: [] },
    '18': { watermarkIcon: <Sparkles size={148} strokeWidth={1.1} />, watermarkTone: 'violet', icons: [], logos: [{ src: LOGO_UBUNTU, alt: 'Ubuntu logo', className: 'backdrop-ubuntu', style: { top: '4%', left: '4%' } }, { src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { bottom: '4%', right: '4%' } }, { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { top: '4%', right: '4%' } }] },
  };

  const config = backdropBySlide[slideId] ?? defaultConfig;

  return (
    <div className="slide-backdrop" aria-hidden="true">
      <div className={`backdrop-watermark-icon ${config.watermarkTone}`}>{config.watermarkIcon}</div>
      {config.logos?.map((logo, index) => (
        <div key={`${slideId}-logo-${index}`} className={`backdrop-logo ${logo.className}`} style={logo.style}>
          <div className="backdrop-logo-glow" />
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
});

function SectionSlide({ num, label, title, subtitle, children, glowStyle }: SectionSlideProps) {
  return (
    <>
      <div className="slide-bg-grid" />
      <div
        className="slide-bg-glow"
        style={
          glowStyle ?? {
            width: 520,
            height: 520,
            background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 72%)',
            top: '16%',
            right: '16%',
          }
        }
      />
      <BackdropScene num={num} />
      <div className="slide-num">{num}</div>
      <div className="slide-content">
        <div className="title-block">
          <div className="slide-label animate-fade-in">{label}</div>
          <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(32px, 4vw, 54px)', marginBottom: 14 }}>
            {title}
          </h2>
          {subtitle ? (
            <p className="slide-subtitle animate-slide-up delay-2" style={{ fontSize: 17, maxWidth: 940, margin: '0 auto 26px' }}>
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </>
  );
}

function MacFrame({ title, children, accent = 'blue' }: MacFrameProps) {
  return (
    <div
      className="card"
      style={{
        padding: 0,
        borderColor: frameAccent[accent],
        background: 'rgba(255,255,255,0.64)',
        boxShadow: '0 24px 60px rgba(15, 23, 42, 0.08)',
        overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px', background: 'rgba(248,250,252,0.92)', borderBottom: '1px solid rgba(148,163,184,0.18)' }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span className="mac-dot red" />
          <span className="mac-dot yellow" />
          <span className="mac-dot green" />
        </div>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>{title}</div>
      </div>
      <div style={{ padding: 18 }}>{children}</div>
    </div>
  );
}

function Card({ icon, title, text, tone = 'blue' }: CardProps) {
  return (
    <div className="card" style={{ borderColor: 'rgba(148,163,184,0.20)', background: 'rgba(255,255,255,0.72)', padding: '18px 22px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div className={`icon-badge ${tone}`} style={{ width: 34, height: 34, fontSize: 18, color: 'var(--text-primary)', borderRadius: 10 }}>{icon}</div>
          <div style={{ fontSize: 16, fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.01em' }}>{title}</div>
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--text-secondary)', opacity: 0.9, paddingLeft: 46 }}>{text}</div>
      </div>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      {items.map((item) => (
        <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          <span style={{ color: '#2563eb', marginTop: 4 }}><CircleDot size={14} /></span>
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function CodeBlock({ filename, lines }: { filename: string; lines: Array<{ prompt?: string; text: string }> }) {
  return (
    <div className="code-block" style={{ background: 'rgba(255,255,255,0.78)', borderColor: 'rgba(148,163,184,0.18)' }}>
      <div className="code-header" style={{ background: 'rgba(248,250,252,0.96)', borderBottomColor: 'rgba(148,163,184,0.18)' }}>
        <div className="code-dots">
          <span className="code-dot red" />
          <span className="code-dot yellow" />
          <span className="code-dot green" />
        </div>
        <span className="code-filename">{filename}</span>
      </div>
      <div className="code-body">
        {lines.map((line, index) => (
          <div key={`${filename}-${index}`} className="code-line">
            <div className="code-line-num">{String(index + 1).padStart(2, '0')}</div>
            <div className="code-line-content">
              {line.prompt ? <span className="code-prompt">{line.prompt}</span> : null}
              {line.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Timeline({ items }: { items: Array<{ title: string; text: string; tone: 'blue' | 'teal' | 'green' | 'amber' | 'red' }> }) {
  return (
    <div className="grid-2" style={{ gap: 16 }}>
      {items.map((item) => (
        <div key={item.title} className="card" style={{ background: 'rgba(255,255,255,0.68)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <div className={`icon-badge ${item.tone}`} style={{ width: 36, height: 36, fontSize: 18 }}>
              <CircleDot size={14} />
            </div>
            <div style={{ fontWeight: 700 }}>{item.title}</div>
          </div>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: 14 }}>{item.text}</div>
        </div>
      ))}
    </div>
  );
}

export function Slide01Cover() {
  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow soft" style={{ width: 820, height: 820, background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0.05) 36%, transparent 72%)', top: '52%', left: '54%', transform: 'translate(-50%, -50%)' }} />
      <div className="slide-bg-glow soft" style={{ width: 340, height: 340, background: 'radial-gradient(circle, rgba(20,184,166,0.14) 0%, transparent 72%)', top: '12%', right: '10%' }} />
      <div className="slide-bg-glow soft" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(245,158,11,0.20) 0%, transparent 72%)', bottom: '8%', left: '8%' }} />

      <div className="cover-canvas">
        <div className="cover-code-field" />
        <div className="cover-code-sweep" />
        <div className="cover-icon-cloud" aria-hidden="true">
          <span className="backdrop-icon blue" style={{ top: '8%', left: '8%' }}><GitBranch size={16} strokeWidth={1.6} /></span>
          <span className="backdrop-icon teal" style={{ top: '12%', right: '14%' }}><Wrench size={16} strokeWidth={1.6} /></span>
          <span className="backdrop-icon amber" style={{ bottom: '18%', left: '12%' }}><Package size={16} strokeWidth={1.6} /></span>
          <span className="backdrop-icon green" style={{ bottom: '12%', right: '16%' }}><Zap size={16} strokeWidth={1.6} /></span>
          <span className="backdrop-icon soft blue" style={{ top: '28%', left: '4%' }}><CircleDot size={14} strokeWidth={1.6} /></span>
          <span className="backdrop-icon soft teal" style={{ top: '36%', right: '6%' }}><Globe size={14} strokeWidth={1.6} /></span>
          <span className="backdrop-icon soft amber" style={{ bottom: '30%', left: '22%' }}><Rocket size={14} strokeWidth={1.6} /></span>
          <span className="backdrop-icon soft green" style={{ bottom: '24%', right: '24%' }}><Server size={14} strokeWidth={1.6} /></span>
        </div>

        <div className="cover-logo cover-logo-linux">
          <div className="cover-logo-glow" />
          <img
            src="https://www.logo.wine/a/logo/Linux/Linux-Logo.wine.svg"
            alt="Linux logo"
            style={{ position: 'relative', zIndex: 1 }}
          />
        </div>
        <div className="cover-logo cover-logo-vite">
          <div className="cover-logo-glow" />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/3840px-Vitejs-logo.svg.png"
            alt="Vite logo"
            style={{ position: 'relative', zIndex: 1 }}
          />
        </div>
        <div className="cover-orb" style={{ top: '18%', right: '10%', width: 260, height: 260, background: 'radial-gradient(circle, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.18) 65%, transparent 72%)' }} />
        <div className="cover-orb" style={{ top: '54%', left: '26%', width: 180, height: 180, background: 'radial-gradient(circle, rgba(245,158,11,0.16) 0%, transparent 72%)' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 980, width: '100%' }}>
        <div style={{ maxWidth: 880, textAlign: 'left' }}>
          <div className="animate-fade-in" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, background: 'rgba(255,255,255,0.76)', border: '1px solid rgba(148,163,184,0.22)', borderRadius: 999, padding: '8px 16px', marginBottom: 24, backdropFilter: 'blur(18px)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: 999, background: '#28c840' }} />
            <span style={{ width: 1, height: 16, background: 'rgba(148,163,184,0.35)', marginLeft: 4, marginRight: 4 }} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Sebastián Tipan</span>
          </div>

          <h1 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(42px, 5vw, 80px)', lineHeight: 1.02, marginBottom: 18, maxWidth: 820 }}>
            De 0 a una aplicación web moderna usando <span className="gradient-text">Vite</span> en <span className="gradient-text-cyan">Ubuntu Server</span>
          </h1>

          <p className="animate-slide-up delay-2" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: 28, maxWidth: 700 }}>
          De la idea al despliegue: cómo construir y ejecutar una aplicación web moderna usando Vite, GitHub, IA y un servidor real. </p>

          <div className="animate-fade-in delay-3" style={{ display: 'flex', alignItems: 'center', gap: 14, flexWrap: 'wrap' }}>
            <span className="chip blue" style={{ padding: '7px 14px' }}><Zap size={14} /> Vite</span>
            <span className="chip green" style={{ padding: '7px 14px' }}><Server size={14} /> Ubuntu Server</span>
            <span className="chip amber" style={{ padding: '7px 14px' }}><Atom size={14} /> IA</span>
          </div>
        </div>
      </div>
    </>
  );
}

export function Slide02Roadmap() {
  return (
    <SectionSlide
      num="02 / 18"
      label="Mapa"
      title={<>Alcance y secuencia de la sesión</>}
      subtitle={<>Fundamentos de Ubuntu Server como base operativa, transición hacia un flujo de desarrollo moderno con Vite, preparación controlada del entorno y cierre con criterios de publicación en infraestructura Ubuntu.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(14,165,233,0.14) 0%, transparent 72%)', top: '20%', left: '16%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Server size={18} />} title="Fundamentos de Ubuntu Server" text="Concepto, contexto de uso y decisiones de infraestructura previas al desarrollo." tone="green" />
        <Card icon={<Wrench size={18} />} title="Limitaciones del enfoque tradicional" text="Puntos críticos que afectan tiempos de entrega y consistencia del flujo de trabajo." tone="red" />
        <Card icon={<Zap size={18} />} title="Vite: arquitectura y aporte" text="Principios operativos y beneficios concretos en la experiencia de desarrollo." tone="blue" />
        <Card icon={<Package size={18} />} title="Preparación de entorno en Ubuntu" text="Instalación de dependencias, validación de versiones y arranque del proyecto." tone="amber" />
        <Card icon={<GitBranch size={18} />} title="Repositorio, asistencia de IA y entrega" text="Flujo de clonado/inicialización, apoyo técnico con IA y paso a despliegue." tone="teal" />
        <Card icon={<CheckCircle size={18} />} title="Validación y cierre técnico" text="Errores frecuentes, verificación operativa y criterios finales para producción." tone="violet" />
      </div>
    </SectionSlide>
  );
}

export function Slide03UbuntuIntro() {
  return (
    <SectionSlide
      num="03 / 18"
      label="Base"
      title={<>¿Qué es <span className="gradient-text-cyan">Ubuntu Server</span>?</>}
      subtitle={<>Distribución Linux orientada a servicios y operación continua, diseñada para administrar infraestructura por terminal con foco en estabilidad, seguridad y mantenimiento predecible.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-3" style={{ gap: 14, marginBottom: 16 }}>
        <Card icon={<Server size={18} />} title="Rol principal" text="Ejecutar servicios 24/7: APIs, sitios web, bases de datos, colas y procesos de integración." tone="blue" />
        <Card icon={<Wrench size={18} />} title="Operación" text="Administración por SSH, configuración declarada y control de servicios con systemd." tone="teal" />
        <Card icon={<CheckCircle size={18} />} title="Perfil recomendado" text="Equipos que priorizan trazabilidad, continuidad operativa y despliegues repetibles." tone="green" />
      </div>

      <div className="grid-1" style={{ gap: 18, alignItems: 'start' }}>
        <MacFrame title="componentes-clave" accent="blue">
          <BulletList items={[
            'Kernel Linux + paquetes mantenidos por apt (repositorios oficiales).',
            'systemd para arranque, supervisión y recuperación de servicios.',
            'OpenSSH como canal estándar de administración remota segura.',
            'Políticas de permisos y usuarios para segmentar responsabilidades.',
          ]} />
        </MacFrame>
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge blue" style={{ width: 36, height: 36, fontSize: 18 }}><CircleDot size={16} /></div>
          <div style={{ fontWeight: 700 }}>Distinción práctica</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Ubuntu Desktop prioriza interacción gráfica; Ubuntu Server prioriza operación estable de servicios. En este recorrido se usa el perfil Server por su alineación con despliegue y producción.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide03UbuntuServer() {
  return (
    <SectionSlide
      num="04 / 18"
      label="Panorama"
      title={<>Ubuntu Server en escenarios de implementación reales</>}
      subtitle={<>En esta sección se delimita su aplicación práctica, los problemas que resuelve y los riesgos operativos que ayuda a prevenir en entornos productivos.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 18, alignItems: 'start' }}>
        <MacFrame title="ámbitos de aplicación" accent="blue">
          <BulletList items={[
            'VPS y cloud cuando la app necesita estar disponible todo el tiempo.',
            'Entornos de laboratorio para practicar despliegue real, no solo local.',
            'Equipos que necesitan control fino de servicios, puertos y seguridad.',
          ]} />
        </MacFrame>

        <MacFrame title="riesgos que reduce" accent="teal">
          <BulletList items={[
            'Improvisar el servidor cuando ya toca desplegar.',
            'Confundir problemas de app con problemas de infraestructura.',
            'Depender de magia: aquí todo se entiende por comandos y servicios.',
          ]} />
        </MacFrame>
      </div>

      <div className="card" style={{ marginTop: 14, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge blue" style={{ width: 36, height: 36, fontSize: 18 }}><Server size={16} /></div>
          <div style={{ fontWeight: 700 }}>Mensaje central</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Primero se entiende la base operativa; después se realiza la preparación técnica del entorno en el punto del flujo donde corresponde.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide04UbuntuProsCons() {
  return (
    <SectionSlide
      num="05 / 18"
      label="Evaluacion"
      title={<>Fortalezas, costos y criterio de adopción en Ubuntu Server</>}
      subtitle={<>Evaluación técnica para decidir su uso en entornos reales: beneficios operativos, exigencias de administración y condiciones recomendadas de implementación.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 72%)', top: '22%', left: '16%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<CheckCircle size={18} />} title="Fortaleza: estabilidad" text="Diseñado para operación continua, con ciclos de soporte prolongados en versiones LTS." tone="green" />
        <Card icon={<Rocket size={18} />} title="Fortaleza: eficiencia" text="Consumo de recursos contenido y mejor aprovechamiento de infraestructura en servidores." tone="blue" />
        <Card icon={<Wrench size={18} />} title="Costo operativo" text="Requiere disciplina en administración por terminal, permisos, servicios y monitoreo." tone="amber" />
        <Card icon={<Ban size={18} />} title="Riesgo habitual" text="Sin estandarización de procesos, los cambios manuales generan entornos difíciles de mantener." tone="red" />
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge teal" style={{ width: 36, height: 36, fontSize: 18 }}><CircleDot size={16} /></div>
          <div style={{ fontWeight: 700 }}>Criterio de decisión</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Ubuntu Server resulta recomendable cuando el equipo necesita control, trazabilidad y continuidad operativa. Su valor no está en simplificar la infraestructura, sino en hacerla explícita, gobernable y repetible.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide05WebEvolution() {
  return (
    <SectionSlide
      num="06 / 18"
      label="Diagnóstico"
      title={<>Por qué el desarrollo web tradicional dejó de escalar</>}
      subtitle={<>Antes de Vite, gran parte del ciclo estaba penalizado por tiempos de espera, acoplamiento de herramientas y validación tardía de cambios.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(148,163,184,0.12) 0%, transparent 72%)', top: '20%', right: '18%' }}
    >
      <Timeline
        items={[
          { title: 'Etapa 1: implementación artesanal', text: 'HTML, CSS y JavaScript sin estructura común; alta variabilidad entre proyectos y baja reutilización.', tone: 'blue' },
          { title: 'Etapa 2: crecimiento por parches', text: 'Acumulación de plugins y scripts auxiliares, con dependencias difíciles de mantener a mediano plazo.', tone: 'teal' },
          { title: 'Etapa 3: compilación centralizada', text: 'Los bundlers resolvieron integración, pero añadieron tiempos de arranque y complejidad operativa diaria.', tone: 'amber' },
          { title: 'Punto de inflexión', text: 'La prioridad pasó de “compilar todo” a “iterar rápido”, con herramientas orientadas a feedback inmediato.', tone: 'green' },
        ]}
      />

      <div className="card" style={{ marginTop: 16, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge amber" style={{ width: 36, height: 36, fontSize: 18 }}><CircleDot size={16} /></div>
          <div style={{ fontWeight: 700 }}>Punto crítico</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          El problema histórico no fue únicamente tecnológico; fue de flujo. Cuando el entorno ralentiza cada iteración, el equipo pierde capacidad de explorar, validar y corregir con oportunidad.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide06SlowDevelopment() {
  return (
    <SectionSlide
      num="07 / 18"
      label="Impacto"
      title={<>Impacto acumulado de la lentitud en el ciclo de desarrollo</>}
      subtitle={<>Cuando el feedback llega tarde, el problema no es solo de velocidad: también se comprometen previsibilidad, calidad de liberación y capacidad de respuesta del equipo.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 72%)', top: '22%', left: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Hourglass size={18} />} title="Entrega más costosa" text="Minutos perdidos por iteración se convierten en horas por sprint y afectan compromisos de entrega." tone="red" />
        <Card icon={<Snail size={18} />} title="Detección tardía de fallos" text="Si validar un cambio demora, los errores se descubren más tarde y con mayor costo de corrección." tone="red" />
        <Card icon={<Wrench size={18} />} title="Desgaste del equipo" text="El foco pasa de construir producto a sostener tooling, reduciendo motivación y claridad técnica." tone="amber" />
        <Card icon={<Package size={18} />} title="Riesgo de liberación" text="Con ciclos lentos, las pruebas se recortan y aumenta la probabilidad de incidentes en producción." tone="amber" />
      </div>

      <div className="card" style={{ marginTop: 16, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge red" style={{ width: 36, height: 36, fontSize: 18 }}><CircleDot size={16} /></div>
          <div style={{ fontWeight: 700 }}>Punto de decisión</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Reducir la latencia del ciclo de desarrollo es una decisión estratégica: mejora la calidad técnica, acelera validaciones y fortalece la confiabilidad del proceso de entrega.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide07WhatIsVite() {
  return (
    <SectionSlide
      num="08 / 18"
      label="Fundamentos"
      title={<>¿Qué es <span className="gradient-text">Vite</span>?</>}
      subtitle={<>Vite fue presentado en 2020 por Evan You (creador de Vue) para resolver un dolor concreto: ciclos de desarrollo lentos en proyectos cada vez más grandes.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 72%)', top: '18%', right: '18%' }}
    >
      <div className="card" style={{ marginBottom: 16, background: 'linear-gradient(130deg, rgba(255,255,255,0.76), rgba(239,246,255,0.66))', borderColor: 'rgba(59,130,246,0.20)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 12 }}>
          <div style={{ padding: '10px 12px', borderRadius: 12, background: 'rgba(59,130,246,0.10)' }}>
            <div style={{ fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Lanzamiento</div>
            <div style={{ marginTop: 4, fontSize: 20, fontWeight: 800, color: '#1d4ed8' }}>2020</div>
          </div>
          <div style={{ padding: '10px 12px', borderRadius: 12, background: 'rgba(20,184,166,0.10)' }}>
            <div style={{ fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Creador</div>
            <div style={{ marginTop: 4, fontSize: 18, fontWeight: 800, color: '#0f766e' }}>Evan You</div>
          </div>
          <div style={{ padding: '10px 12px', borderRadius: 12, background: 'rgba(245,158,11,0.11)' }}>
            <div style={{ fontSize: 12, letterSpacing: 0.6, textTransform: 'uppercase', color: 'var(--text-muted)' }}>Enfoque</div>
            <div style={{ marginTop: 4, fontSize: 18, fontWeight: 800, color: '#b45309' }}>ESM nativo + build final</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: 16, alignItems: 'stretch' }}>
        <MacFrame title="de dónde nació" accent="blue">
          <BulletList items={['Aparece en el ecosistema de Vue cuando los tiempos de arranque ya afectaban la iteración diaria.', 'Plantea una idea distinta: en desarrollo no empaquetar todo por adelantado.', 'Aprovecha módulos ES nativos del navegador para cargar solo lo necesario en cada momento.']} />
        </MacFrame>

        <MacFrame title="qué lo diferencia en la práctica" accent="teal">
          <BulletList items={['En dev server evita el bundle inicial masivo típico de enfoques clásicos.', 'Usa pre-bundling con esbuild para dependencias y HMR muy ágil durante cambios pequeños.', 'En producción genera build optimizado (Rollup), separando velocidad de edición y optimización final.']} />
        </MacFrame>
      </div>

      <div className="grid-2" style={{ gap: 16, marginTop: 16 }}>
        <Card icon={<Rocket size={18} />} title="Por qué ayuda al desarrollo" text="Reduce latencia entre editar y validar, lo que mejora foco técnico y ritmo de decisiones en equipo." tone="green" />
        <Card icon={<Atom size={18} />} title="Qué lo hace interesante hoy" text="No está atado a un solo framework: React, Vue, Svelte y otros comparten una base de tooling más consistente." tone="violet" />
      </div>
    </SectionSlide>
  );
}

export function Slide08HowViteWorks() {
  return (
    <SectionSlide
      num="09 / 18"
      label="Comparativa"
      title={<>Velocidad de construcción: mismo enfoque, varios frameworks</>}
      subtitle={<>Vite no compite por “framework ganador”; acelera el ciclo de trabajo en React, Vue y Svelte con una base común: feedback rápido durante desarrollo y build optimizado al final.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 72%)', top: '18%', left: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <MacFrame title="lectura rápida por framework" accent="blue">
          <BulletList
            items={[
              'React + Vite: arranque ágil en proyectos grandes y HMR estable para componentes con estado.',
              'Vue + Vite: integración natural con el ecosistema de Evan You y recarga fluida en SFC.',
              'Svelte + Vite: compilación ligera y ciclos cortos ideales para UI con alta iteración.',
            ]}
          />
        </MacFrame>

        <MacFrame title="dónde se nota más la diferencia" accent="teal">
          <BulletList
            items={[
              'Inicio de proyecto: menos espera para levantar el entorno por primera vez.',
              'Cambio incremental: edición y validación casi inmediata en tareas pequeñas.',
              'Escala del código: el crecimiento impacta menos en la experiencia diaria de desarrollo.',
            ]}
          />
        </MacFrame>
      </div>

      <div className="grid-3" style={{ gap: 14, marginTop: 16 }}>
        <Card icon={<Rocket size={18} />} title="Productividad visible" text="Menos tiempo muerto entre cambio y validación, más foco en decisiones de producto." tone="green" />
        <Card icon={<GitBranch size={18} />} title="Flujo de equipo" text="Frontend, QA y revisión técnica trabajan sobre iteraciones más cortas y predecibles." tone="blue" />
        <Card icon={<Package size={18} />} title="Salida a producción" text="Separar dev rápido de build final reduce fricción sin sacrificar optimización del artefacto." tone="amber" />
      </div>

      <div className="card" style={{ marginTop: 16, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge teal" style={{ width: 36, height: 36, fontSize: 18 }}><CircleDot size={16} /></div>
          <div style={{ fontWeight: 700 }}>Conclusión técnica</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          La ventaja de Vite no es solo “compilar rápido”: es permitir que distintos frameworks mantengan un ciclo de construcción moderno, con menos latencia operativa y mejor ritmo de entrega.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide09CreateProject() {
  const installSteps = [
    {
      command: 'sudo apt update && sudo apt upgrade -y',
      detail: 'Actualiza paquetes base y evita conflictos por repositorios desfasados.',
    },
    {
      command: 'sudo apt install -y curl git build-essential nginx',
      detail: 'Instala herramientas de descarga, versionado, compilacion y publicacion web.',
    },
    {
      command: 'curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -',
      detail: 'Agrega repositorio de Node.js estable para desarrollo moderno.',
    },
    {
      command: 'sudo apt install -y nodejs',
      detail: 'Habilita runtime y gestor de paquetes para Vite.',
    },
    {
      command: 'node -v && npm -v && git --version',
      detail: 'Valida versiones antes de iniciar el proyecto.',
    },
  ];

  const createSteps = [
    {
      command: 'npm create vite@latest',
      detail: 'Asistente inicial para elegir framework y variante.',
    },
    {
      command: 'cd mi-proyecto',
      detail: 'Cambio al directorio generado.',
    },
    {
      command: 'npm install',
      detail: 'Instala dependencias del proyecto.',
    },
    {
      command: 'npm run dev',
      detail: 'Arranca servidor local con hot reload.',
    },
    {
      command: 'npm run build && npm run preview',
      detail: 'Verifica build final y comportamiento antes de publicar.',
    },
  ];

  const packageCardStyle: CSSProperties = {
    padding: '12px 16px',
    borderRadius: 18,
    background: 'rgba(255,255,255,0.72)',
    minHeight: 80,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 6,
    border: '1px solid rgba(148,163,184,0.18)',
    boxShadow: '0 10px 28px rgba(15, 23, 42, 0.04)',
  };

  const packageHeaderStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
  };

  const packageTitleStyle: CSSProperties = {
    fontSize: 16,
    fontWeight: 800,
    color: 'var(--text-primary)',
    letterSpacing: '-0.01em',
  };

  const packageTextStyle: CSSProperties = {
    fontSize: 13,
    color: 'var(--text-secondary)',
    lineHeight: 1.5,
    margin: 0,
    opacity: 0.85,
  };

  return (
    <SectionSlide
      num="10 / 18"
      label="Setup"
      title={<>Entorno listo para Vite: instalacion y arranque del proyecto</>}
      subtitle={<>Configuracion enfocada en productividad: preparar el servidor, validar versiones y crear la aplicacion con un flujo claro.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(34,197,94,0.11) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-4" style={{ gap: 10, marginBottom: 14 }}>
        <div className="card animate-scale-in" style={packageCardStyle}>
          <div style={packageHeaderStyle}>
            <div className="icon-badge green" style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14 }}><Zap size={13} /></div>
            <div style={packageTitleStyle}>Node.js</div>
          </div>
          <p style={{ ...packageTextStyle, paddingLeft: 38 }}>Runtime para ejecutar Vite y scripts.</p>
        </div>
        <div className="card animate-scale-in delay-1" style={packageCardStyle}>
          <div style={packageHeaderStyle}>
            <div className="icon-badge blue" style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14 }}><Package size={13} /></div>
            <div style={packageTitleStyle}>npm</div>
          </div>
          <p style={{ ...packageTextStyle, paddingLeft: 38 }}>Gestor de paquetes para dependencias.</p>
        </div>
        <div className="card animate-scale-in delay-2" style={packageCardStyle}>
          <div style={packageHeaderStyle}>
            <div className="icon-badge teal" style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14 }}><GitBranch size={13} /></div>
            <div style={packageTitleStyle}>Git</div>
          </div>
          <p style={{ ...packageTextStyle, paddingLeft: 38 }}>Control de versiones colaborativo.</p>
        </div>
        <div className="card animate-scale-in delay-3" style={packageCardStyle}>
          <div style={packageHeaderStyle}>
            <div className="icon-badge amber" style={{ width: 28, height: 28, borderRadius: 8, fontSize: 14 }}><Globe size={13} /></div>
            <div style={packageTitleStyle}>Nginx</div>
          </div>
          <p style={{ ...packageTextStyle, paddingLeft: 38 }}>Servidor web para publicar el build.</p>
        </div>
      </div>

      <div className="grid-2" style={{ gap: 16 }}>
        <div className="terminal animate-slide-up delay-4">
          <div className="terminal-bar">
            <div className="code-dots">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
            </div>
            <div className="terminal-title">setup_entorno.sh</div>
          </div>
          <div className="terminal-body" style={{ minHeight: 220, padding: 14 }}>
            {installSteps.map((item, idx) => (
              <div key={item.command} style={{ marginBottom: 10 }}>
                <div className="terminal-line" style={{ fontSize: 12 }}>
                  <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
                  <span className="t-cmd" style={{ marginLeft: 6 }}>
                    <span className="t-cmd-main">{item.command.split(' ')[0]}</span>
                    <span className="t-cmd-args">{item.command.includes(' ') ? ` ${item.command.split(' ').slice(1).join(' ')}` : ''}</span>
                  </span>
                </div>
                <div className="t-output" style={{ fontSize: 11, marginTop: 2, fontStyle: 'italic', paddingLeft: 10, borderLeft: '2px solid rgba(14,165,233,0.15)' }}>
                  # {item.detail}
                </div>
              </div>
            ))}
            <div className="terminal-line" style={{ fontSize: 12 }}>
              <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
              <span className="t-cursor" />
            </div>
          </div>
        </div>

        <div className="terminal animate-slide-up delay-5">
          <div className="terminal-bar">
            <div className="code-dots">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
            </div>
            <div className="terminal-title">create_vite_app.sh</div>
          </div>
          <div className="terminal-body" style={{ minHeight: 220, padding: 14 }}>
            {createSteps.map((item, idx) => (
              <div key={item.command} style={{ marginBottom: 10 }}>
                <div className="terminal-line" style={{ fontSize: 12 }}>
                  <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
                  <span className="t-cmd" style={{ marginLeft: 6 }}>
                    <span className="t-cmd-main">{item.command.split(' ')[0]}</span>
                    <span className="t-cmd-args">{item.command.includes(' ') ? ` ${item.command.split(' ').slice(1).join(' ')}` : ''}</span>
                  </span>
                </div>
                <div className="t-output" style={{ fontSize: 11, marginTop: 2, fontStyle: 'italic', paddingLeft: 10, borderLeft: '2px solid rgba(34,197,94,0.15)' }}>
                  # {item.detail}
                </div>
              </div>
            ))}
            <div className="terminal-line" style={{ fontSize: 12 }}>
              <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
              <span className="t-cursor" />
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginTop: 10, padding: '12px 16px', background: 'rgba(255,255,255,0.68)', borderRadius: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <div className="icon-badge green" style={{ width: 24, height: 24, fontSize: 14 }}><CheckCircle size={12} /></div>
          <div style={{ fontWeight: 700, fontSize: 14 }}>Resultado operativo</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.4, fontSize: 13 }}>
          Configuración ágil para evitar bloqueos por entorno antes de empezar a desarrollar.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide10ProjectStructure() {
  return (
    <SectionSlide
      num="11 / 18"
      label="Estructura"
      title={<>Anatomía de un proyecto moderno con <span className="gradient-text">Vite</span></>}
      subtitle={<>Entender la jerarquía de archivos permite navegar el código con intención y saber exactamente dónde aplicar cada cambio.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 72%)', top: '18%', left: '16%' }}
    >
      <div className="grid-2" style={{ gap: 24, alignItems: 'start' }}>
        <MacFrame title="explorador-de-archivos" accent="blue">
          <div style={{ lineHeight: 1.8, fontSize: 13 }}>
            <div className="tree-line"><span className="tree-root">mi-proyecto/</span></div>
            <div className="tree-line tree-indent"><span className="tree-dir">public/</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— Recursos estáticos directos</span></div>
            <div className="tree-line tree-indent"><span className="tree-dir">src/</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— El núcleo del código</span></div>
            <div className="tree-line" style={{ paddingLeft: 40 }}><span className="tree-dir">assets/</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— Imágenes y estilos CSS</span></div>
            <div className="tree-line" style={{ paddingLeft: 40 }}><span className="tree-dir">components/</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— UI modular y reutilizable</span></div>
            <div className="tree-line" style={{ paddingLeft: 40 }}><span className="tree-file">App.tsx</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— Componente raíz</span></div>
            <div className="tree-line" style={{ paddingLeft: 40 }}><span className="tree-file">main.tsx</span> <span style={{ opacity: 0.5, fontSize: 11 }}>— Punto de hidratación</span></div>
            <div className="tree-line tree-indent"><span className="tree-file">index.html</span> <span className="tree-special">Punto de entrada ESM</span></div>
            <div className="tree-line tree-indent"><span className="tree-file">package.json</span> <span className="tree-special">Scripts y dependencias</span></div>
            <div className="tree-line tree-indent"><span className="tree-file">vite.config.ts</span> <span className="tree-special">Cerebro del proyecto</span></div>
          </div>
        </MacFrame>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="icon-badge blue" style={{ width: 32, height: 32, fontSize: 16 }}><Rocket size={14} /></div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>El rol del index.html</div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              A diferencia de otros bundlers, Vite trata al HTML como el punto de entrada principal, cargando los módulos JS de forma nativa.
            </p>
          </div>

          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="icon-badge teal" style={{ width: 32, height: 32, fontSize: 16 }}><Zap size={14} /></div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Carpeta src/ vs public/</div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Todo en <b>src</b> es procesado (optimizado), mientras que <b>public</b> sirve archivos tal cual están.
            </p>
          </div>

          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="icon-badge amber" style={{ width: 32, height: 32, fontSize: 16 }}><Package size={14} /></div>
              <div style={{ fontWeight: 800, fontSize: 15 }}>Configuración declarativa</div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              <b>vite.config.ts</b> centraliza plugins, alias de rutas y comportamiento del servidor en un solo lugar.
            </p>
          </div>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide11CloneOrInit() {
  return (
    <SectionSlide
      num="12 / 18"
      label="GitHub"
      title={<>Git y GitHub: El motor de la <span className="gradient-text-cyan">colaboración</span></>}
      subtitle={<>Git no es solo una herramienta para guardar código; es la base de la trazabilidad, el trabajo en equipo y la automatización moderna.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(20,184,166,0.12) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-3" style={{ gap: 14, marginBottom: 18 }}>
        <Card
          icon={<GitBranch size={18} />}
          title="¿Qué es Git?"
          text="Sistema que registra cada cambio, permitiendo volver atrás y trabajar en ramas paralelas sin romper la app."
          tone="teal"
        />
        <Card
          icon={<Globe size={18} />}
          title="GitHub / GitLab"
          text="Plataformas en la nube que alojan los repositorios y facilitan la revisión de código entre desarrolladores."
          tone="blue"
        />
        <Card
          icon={<Zap size={18} />}
          title="CI / CD"
          text="Automatización: cada vez que se sube código, el sistema lo prueba y lo despliega al servidor de forma automática."
          tone="amber"
        />
      </div>

      <div className="grid-2" style={{ gap: 18, alignItems: 'center' }}>
        <div className="terminal animate-slide-up">
          <div className="terminal-bar">
            <div className="code-dots">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
            </div>
            <div className="terminal-title">bash — clone_repo</div>
          </div>
          <div className="terminal-body" style={{ minHeight: 120 }}>
            <div className="terminal-line" style={{ fontSize: 13 }}>
              <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
              <span className="t-cmd" style={{ marginLeft: 6 }}>
                <span className="t-cmd-main">git</span>
                <span className="t-cmd-args"> clone https://github.com/user/repo.git</span>
              </span>
            </div>
            <div className="t-output" style={{ fontSize: 11, marginTop: 6 }}>
              Cloning into 'mi-proyecto'...<br />
              remote: Enumerating objects: 104, done.<br />
              remote: Total 104 (delta 0), reused 0 (delta 0)<br />
              Receiving objects: 100% (104/104), 24.5 KiB, done.
            </div>
            <div className="terminal-line" style={{ fontSize: 13, marginTop: 8 }}>
              <span className="t-user">dev</span><span className="t-at">@</span><span className="t-dir">ubuntu</span><span className="t-prompt">:~$</span>
              <span className="t-cursor" />
            </div>
          </div>
        </div>

        <div className="card" style={{ background: 'rgba(255,255,255,0.72)', borderLeft: '4px solid #14b8a6' }}>
          <div style={{ fontWeight: 800, marginBottom: 8, fontSize: 16 }}>¿Por qué clonar?</div>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            En entornos profesionales, rara vez se empieza un proyecto de cero. Clonar permite obtener una copia idéntica del trabajo compartido, con todo el historial y configuración listos para la operación en el servidor.
          </p>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide12AIInWorkflow() {
  return (
    <SectionSlide
      num="13 / 18"
      label="IA"
      title={<>La IA como <span className="gradient-text-green">copiloto estratégico</span></>}
      subtitle={<>La inteligencia artificial ha pasado de ser una curiosidad a una herramienta de productividad que acelera el ciclo de desarrollo sin sustituir el criterio técnico.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 72%)', top: '18%', left: '18%' }}
    >
      <div className="grid-3" style={{ gap: 16, marginBottom: 20 }}>
        <Card
          icon={<Zap size={18} />}
          title="Aceleración de código"
          text="Generación de estructuras base (boilerplate), funciones repetitivas y scripts de automatización en segundos."
          tone="green"
        />
        <Card
          icon={<Wrench size={18} />}
          title="Depuración inteligente"
          text="Análisis de errores complejos en la terminal y sugerencias de corrección basadas en patrones conocidos."
          tone="teal"
        />
        <Card
          icon={<CheckCircle size={18} />}
          title="Refactorización"
          text="Optimización de lógica existente para mejorar la legibilidad, el rendimiento y la mantenibilidad del software."
          tone="blue"
        />
      </div>

      <div className="grid-2" style={{ gap: 24, alignItems: 'center' }}>
        <div className="card" style={{ background: 'rgba(15, 23, 42, 0.03)', border: '1px dashed rgba(148,163,184,0.4)', borderRadius: 20, padding: 20 }}>
          <div style={{ display: 'flex', gap: 10, marginBottom: 12 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#28c840' }} />
          </div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-secondary)' }}>
            <span style={{ color: '#0ea5e9' }}>Prompt:</span> "Explica este error de Nginx y sugiere una configuración para un SPA con React..."
            <div style={{ marginTop: 10, padding: 12, background: 'white', borderRadius: 12, border: '1px solid rgba(148,163,184,0.15)', fontSize: 12, color: '#475569', lineHeight: 1.5 }}>
              "El error indica un fallo en la resolución de rutas. Para corregirlo, se debe redirigir todas las peticiones al index.html..."
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontWeight: 800, fontSize: 18, color: 'var(--text-primary)' }}>El factor humano</div>
          <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            La IA propone soluciones, pero el equipo técnico dispone. La validación de seguridad, el contexto del negocio y la arquitectura final siguen dependiendo totalmente de la supervisión humana experta.
          </p>
          <div className="chip green" style={{ alignSelf: 'flex-start', marginTop: 4 }}>
            <CheckCircle size={14} /> Supervisión necesaria
          </div>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide13DevBuildProd() {
  return (
    <SectionSlide
      num="14 / 18"
      label="Flujo"
      title={<>Del código al artefacto: el ciclo de <span className="gradient-text">producción</span></>}
      subtitle={<>El flujo de trabajo se divide en etapas críticas que garantizan tanto la velocidad al programar como la eficiencia al servir la aplicación.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 72%)', top: '20%', right: '16%' }}
    >
      <div className="pipeline animate-fade-in" style={{ marginBottom: 34 }}>
        <div className="pipe-step">
          <div className="pipe-node" style={{ borderColor: 'rgba(34,197,94,0.3)', background: 'rgba(34,197,94,0.05)' }}>
            <Zap size={24} color="#16a34a" />
            <span>DEV</span>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, color: '#16a34a' }}>Iteración rápida</div>
        </div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-step">
          <div className="pipe-node" style={{ borderColor: 'rgba(124,58,237,0.3)', background: 'rgba(124,58,237,0.05)' }}>
            <Package size={24} color="#7c3aed" />
            <span>BUILD</span>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, color: '#7c3aed' }}>Optimización</div>
        </div>
        <div className="pipe-arrow">→</div>
        <div className="pipe-step">
          <div className="pipe-node" style={{ borderColor: 'rgba(37,99,235,0.3)', background: 'rgba(37,99,235,0.05)' }}>
            <Globe size={24} color="#2563eb" />
            <span>PREVIEW</span>
          </div>
          <div style={{ fontSize: 11, fontWeight: 700, marginTop: 6, color: '#2563eb' }}>Verificación</div>
        </div>
      </div>

      <div className="grid-3" style={{ gap: 16 }}>
        <Card
          icon={<Rocket size={18} />}
          title="npm run dev"
          text="Inicia el servidor de desarrollo. Utiliza módulos ES nativos y HMR (Hot Module Replacement) para reflejar cambios al instante sin recargar toda la página."
          tone="green"
        />
        <Card
          icon={<Package size={18} />}
          title="npm run build"
          text="Transforma el código fuente en un paquete de archivos estáticos (dist/) optimizados, minificados y listos para ser servidos por Nginx en Ubuntu."
          tone="violet"
        />
        <Card
          icon={<CheckCircle size={18} />}
          title="npm run preview"
          text="Levanta un servidor local apuntando a la carpeta de producción. Es el paso final para asegurar que el empaquetado funciona exactamente como se espera."
          tone="blue"
        />
      </div>

      <div className="card" style={{ marginTop: 20, background: 'linear-gradient(90deg, rgba(255,255,255,0.8), rgba(248,250,252,0.8))', borderLeft: '4px solid #7c3aed' }}>
        <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
          <b>Dato clave:</b> El comando <i>build</i> realiza <i>tree-shaking</i>, eliminando el código que no se utiliza para que la aplicación cargue mucho más rápido en el navegador del usuario final.
        </p>
      </div>
    </SectionSlide>
  );
}

export function Slide14DeployOnUbuntu() {
  return (
    <SectionSlide
      num="15 / 18"
      label="Producción"
      title={<>Despliegue: De local a <span className="gradient-text">todo el mundo</span></>}
      subtitle={<>El proceso final donde el código se convierte en un producto accesible, estable y optimizado para cualquier usuario.</>}
      glowStyle={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 72%)', top: '15%', right: '10%' }}
    >
      <div style={{ display: 'flex', gap: 20, alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textAlign: 'center' }}>1. EMPAQUETADO</div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
              </div>
              <div className="terminal-title">local-terminal</div>
            </div>
            <div className="terminal-body" style={{ padding: 12, minHeight: 'auto' }}>
              <div className="terminal-line" style={{ fontSize: 12 }}>
                <span className="t-user">dev</span><span className="t-prompt">:~$</span> 
                <span className="t-cmd" style={{ marginLeft: 6 }}>
                  <span className="t-cmd-main">npm</span>
                  <span className="t-cmd-args"> run build</span>
                </span>
              </div>
              <div style={{ color: '#94a3b8', marginTop: 6, fontSize: 11, fontStyle: 'italic' }}>✓ dist/ created in 2.1s</div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 24, color: 'rgba(148,163,184,0.4)' }}>→</div>

        <div style={{ flex: 1.2 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textAlign: 'center' }}>2. PUBLICACIÓN</div>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
              </div>
              <div className="terminal-title">ubuntu-server</div>
            </div>
            <div className="terminal-body" style={{ padding: 12, minHeight: 'auto' }}>
              <div className="terminal-line" style={{ fontSize: 12 }}>
                <span className="t-user">root</span><span className="t-prompt">:#</span> 
                <span className="t-cmd" style={{ marginLeft: 6 }}>
                  <span className="t-cmd-main">cp</span>
                  <span className="t-cmd-args"> -r dist/* /var/www/app</span>
                </span>
              </div>
              <div style={{ color: '#059669', marginTop: 6, fontSize: 11, fontStyle: 'italic' }}>✓ Files synced to web root</div>
            </div>
          </div>
        </div>

        <div style={{ fontSize: 24, color: 'rgba(148,163,184,0.4)' }}>→</div>

        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 8, textAlign: 'center' }}>3. ONLINE</div>
          <div className="card" style={{ padding: 12, background: 'rgba(255,255,255,0.7)', textAlign: 'center', borderRadius: 16, border: '1px solid rgba(34,197,94,0.3)' }}>
            <div className="icon-badge green" style={{ margin: '0 auto 8px', width: 34, height: 34 }}><Globe size={18} /></div>
            <div style={{ fontWeight: 800, fontSize: 13, color: '#16a34a' }}>App en vivo</div>
            <div style={{ fontSize: 10, color: '#64748b', marginTop: 2 }}>miproyecto.com</div>
          </div>
        </div>
      </div>

      <div className="grid-2" style={{ gap: 20 }}>
        <div className="card" style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.75)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div className="icon-badge blue" style={{ width: 36, height: 36 }}><Server size={18} /></div>
            <div style={{ fontWeight: 800 }}>Infraestructura con Nginx</div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Nginx actúa como el anfitrión perfecto en Ubuntu, entregando el contenido de <b>/var/www/app</b> con mínima latencia y gestionando las rutas para que la aplicación funcione sin errores.
          </p>
        </div>

        <div className="card" style={{ padding: '18px 22px', background: 'rgba(255,255,255,0.75)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
            <div className="icon-badge green" style={{ width: 36, height: 36 }}><Zap size={18} /></div>
            <div style={{ fontWeight: 800 }}>Despliegue Atómico</div>
          </div>
          <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
            Al copiar únicamente el resultado del <i>build</i>, se asegura que el servidor no necesite instalar dependencias ni procesar código, manteniéndose ligero y seguro.
          </p>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide15CommonErrors() {
  return (
    <SectionSlide
      num="16 / 18"
      label="Soluciones"
      title={<>Resolución de problemas y <span className="gradient-text-red">gestión de errores</span></>}
      subtitle={<>Los fallos en producción son inevitables, pero contar con una metodología de diagnóstico permite resolverlos con rapidez y seguridad.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 20, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)', borderLeft: '4px solid #ef4444' }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Rutas SPA (404 Not Found)</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              <b>Causa:</b> Nginx intenta buscar una carpeta física al recargar. <br />
              <b>Solución:</b> Configurar <span className="tree-special">try_files $uri /index.html</span> para que React/Vite maneje el enrutamiento.
            </p>
          </div>

          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)', borderLeft: '4px solid #f59e0b' }}>
            <div style={{ fontWeight: 800, fontSize: 15, marginBottom: 6 }}>Permisos Denegados</div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              <b>Causa:</b> Nginx no tiene acceso de lectura a <span className="tree-special">/var/www/app</span>.<br />
              <b>Solución:</b> Ejecutar <span className="tree-special">chown -R www-data:www-data</span> para dar propiedad al servidor web.
            </p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="terminal">
            <div className="terminal-bar">
              <div className="code-dots">
                <span className="code-dot red" />
                <span className="code-dot yellow" />
                <span className="code-dot green" />
              </div>
              <div className="terminal-title">bash — check_logs</div>
            </div>
            <div className="terminal-body" style={{ padding: 12, minHeight: 120 }}>
              <div className="terminal-line" style={{ fontSize: 12 }}>
                <span className="t-user">dev</span><span className="t-prompt">:~$</span> 
                <span className="t-cmd" style={{ marginLeft: 6 }}>
                  <span className="t-cmd-main">sudo</span>
                  <span className="t-cmd-args"> tail -f /var/log/nginx/error.log</span>
                </span>
              </div>
              <div style={{ color: '#64748b', marginTop: 8, fontSize: 11, lineHeight: 1.4 }}>
                [error] 1024#0: *1 open() "/var/www/app/login" failed (2: No such file or directory)...
              </div>
            </div>
          </div>

          <div className="card" style={{ padding: '16px 20px', background: 'rgba(255,255,255,0.72)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
              <div className="icon-badge blue" style={{ width: 32, height: 32 }}><Wrench size={16} /></div>
              <div style={{ fontWeight: 800 }}>Herramientas de diagnóstico</div>
            </div>
            <p style={{ fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
              Usar <b>htop</b> para monitorear recursos, <b>journalctl</b> para logs del sistema y la pestaña <b>Network</b> de Chrome para depurar respuestas del servidor.
            </p>
          </div>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide16Summary() {
  return (
    <SectionSlide
      num="17 / 18"
      label="Resumen"
      title={<>Sinergia: El ecosistema de <span className="gradient-text-indigo">alto rendimiento</span></>}
      subtitle={<>La combinación de infraestructura estable y herramientas modernas no es casualidad; es la base de las aplicaciones más exitosas de la web actual.</>}
      glowStyle={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 72%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <div className="grid-2" style={{ gap: 32, alignItems: 'center' }}>
        <Timeline
          items={[
            { title: 'Ubuntu Server', text: 'Estabilidad y control total sobre el entorno de ejecución.', tone: 'blue' },
            { title: 'Vite & React', text: 'Velocidad de desarrollo extrema y optimización nativa.', tone: 'green' },
            { title: 'Git & Colaboración', text: 'Trazabilidad y automatización del ciclo de vida.', tone: 'teal' },
            { title: 'Nginx & Producción', text: 'Entrega de contenido eficiente, segura y escalable.', tone: 'amber' },
          ]}
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="card" style={{ padding: '24px 28px', background: 'rgba(255,255,255,0.75)', border: '1px solid rgba(99,102,241,0.15)', borderRadius: 24 }}>
            <div style={{ fontWeight: 800, fontSize: 18, marginBottom: 10, color: 'var(--text-primary)' }}>El valor de la integración</div>
            <p style={{ fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
              Ninguna herramienta es una isla. El éxito de un proyecto radica en cómo estas piezas se comunican entre sí para reducir la fricción técnica y maximizar el valor entregado al usuario final.
            </p>
          </div>

          <div className="card" style={{ padding: '16px 20px', background: 'linear-gradient(135deg, rgba(99,102,241,0.05), rgba(168,85,247,0.05))', borderRadius: 20 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="icon-badge violet" style={{ width: 32, height: 32 }}><Zap size={16} /></div>
              <div style={{ fontWeight: 800, fontSize: 14 }}>Objetivo final cumplido</div>
            </div>
            <div style={{ fontSize: 13, color: '#6366f1', fontWeight: 600, marginTop: 8 }}>
              #DesarrolloRápido #InfraestructuraEstable #FlujoProfesional
            </div>
          </div>
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide17Closing() {
  return (
    <SectionSlide
      num="18 / 18"
      label="Final"
      title={<>¡Muchas <span className="gradient-text">Gracias!</span></>}
      subtitle="Innovación, velocidad y control: el estándar del desarrollo web profesional."
      glowStyle={{ width: 700, height: 700, background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 72%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 20 }}>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 48, flexWrap: 'wrap' }}>
          <div className="card animate-slide-up delay-1" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 100, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(148,163,184,0.15)' }}>
            <div className="icon-badge blue" style={{ width: 32, height: 32, fontSize: 16 }}><img src={LOGO_GITHUB} style={{ width: 18 }} alt="GitHub" /></div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>GitHub</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>itzsebas121</div>
            </div>
          </div>
          <div className="card animate-slide-up delay-2" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 100, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(148,163,184,0.15)' }}>
            <div className="icon-badge teal" style={{ width: 32, height: 32, fontSize: 16 }}><img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" style={{ width: 18 }} alt="LinkedIn" /></div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>LinkedIn</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>sebastipan109</div>
            </div>
          </div>
          <div className="card animate-slide-up delay-3" style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: 12, borderRadius: 100, background: 'rgba(255,255,255,0.7)', border: '1px solid rgba(148,163,184,0.15)' }}>
            <div className="icon-badge green" style={{ width: 32, height: 32, fontSize: 16 }}><Globe size={20} /></div>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Portfolio</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-primary)' }}>sebasdev.site</div>
            </div>
          </div>
        </div>

        <div className="animate-fade-in delay-5" style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '16px 36px', background: 'var(--text-primary)', color: 'white', borderRadius: 100, fontWeight: 700, fontSize: 18, boxShadow: '0 20px 40px rgba(0,0,0,0.15)' }}>
          <MessageCircle size={20} /> ¿Alguna pregunta?
        </div>
      </div>
    </SectionSlide>
  );
}