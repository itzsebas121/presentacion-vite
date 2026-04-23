import type { CSSProperties, ReactNode } from 'react';
import { Atom, Ban, CheckCircle, CircleDot, GitBranch, Globe, Hand, Hourglass, Mic, Package, Rocket, Server, Snail, Wrench, Zap } from 'lucide-react';

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

function BackdropScene({ num }: { num: string }) {
  const slideId = num.slice(0, 2);
  const secondaryIconSlots: CSSProperties[] = [
    { top: '8%', left: '22%' },
    { top: '16%', right: '26%' },
    { top: '34%', left: '6%' },
    { top: '38%', right: '8%' },
    { bottom: '34%', left: '10%' },
    { bottom: '28%', right: '16%' },
    { bottom: '16%', left: '28%' },
    { bottom: '10%', right: '30%' },
  ];

  const defaultConfig: BackdropConfig = {
    watermarkIcon: <CircleDot size={156} strokeWidth={1.1} />,
    watermarkTone: 'blue',
    icons: [
      { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
      { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '20%', right: '10%', animationDelay: '1.2s' } },
      { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.6s' } },
      { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.8s' } },
    ],
  };

  const backdropBySlide: Record<string, BackdropConfig> = {
    '02': {
      watermarkIcon: <CircleDot size={148} strokeWidth={1.1} />,
      watermarkTone: 'teal',
      icons: [
        { icon: <Server size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '10%', animationDelay: '0s' } },
        { icon: <Globe size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '12%', animationDelay: '1.2s' } },
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '16%', left: '16%', animationDelay: '0.8s' } },
        { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '20%', animationDelay: '1.6s' } },
      ],
    },
    '03': {
      watermarkIcon: <Server size={150} strokeWidth={1.1} />,
      watermarkTone: 'green',
      icons: [
        { icon: <Server size={18} strokeWidth={1.6} />, tone: 'green', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'amber', style: { top: '22%', right: '10%', animationDelay: '1s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'blue', style: { bottom: '16%', left: '12%', animationDelay: '0.5s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'teal', style: { bottom: '10%', right: '18%', animationDelay: '1.4s' } },
      ],
      logos: [
        { src: LOGO_UBUNTU, alt: 'Ubuntu logo', className: 'backdrop-ubuntu', style: { top: '4%', right: '3%' } },
        { src: LOGO_LINUX, alt: 'Linux logo', className: 'backdrop-linux', style: { bottom: '4%', left: '3%' } },
      ],
    },
    '04': {
      watermarkIcon: <Wrench size={150} strokeWidth={1.1} />,
      watermarkTone: 'blue',
      icons: [
        { icon: <CheckCircle size={18} strokeWidth={1.6} />, tone: 'green', style: { top: '14%', left: '8%', animationDelay: '0s' } },
        { icon: <Server size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '14%', animationDelay: '1.1s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '12%', animationDelay: '0.6s' } },
        { icon: <Ban size={18} strokeWidth={1.6} />, tone: 'red', style: { bottom: '12%', right: '18%', animationDelay: '1.7s' } },
      ],
    },
    '05': {
      watermarkIcon: <Globe size={150} strokeWidth={1.1} />,
      watermarkTone: 'amber',
      icons: [
        { icon: <Globe size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <CircleDot size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '10%', animationDelay: '1.1s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
      logos: [
        { src: LOGO_HTML, alt: 'HTML logo', className: 'backdrop-html', style: { top: '4%', right: '4%' } },
        { src: LOGO_CSS, alt: 'CSS logo', className: 'backdrop-css', style: { bottom: '4%', left: '4%' } },
        { src: LOGO_JAVASCRIPT, alt: 'JavaScript logo', className: 'backdrop-javascript', style: { bottom: '4%', right: '4%' } },
      ],
    },
    '06': {
      watermarkIcon: <Hourglass size={148} strokeWidth={1.1} />,
      watermarkTone: 'red',
      icons: [
        { icon: <Snail size={18} strokeWidth={1.6} />, tone: 'red', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { top: '22%', right: '10%', animationDelay: '1.1s' } },
        { icon: <Hourglass size={18} strokeWidth={1.6} />, tone: 'blue', style: { bottom: '18%', left: '14%', animationDelay: '0.6s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'teal', style: { bottom: '12%', right: '18%', animationDelay: '1.5s' } },
      ],
    },
    '07': {
      watermarkIcon: <Zap size={150} strokeWidth={1.1} />,
      watermarkTone: 'blue',
      icons: [
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <CircleDot size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '22%', right: '10%', animationDelay: '1s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
      logos: [
        { src: LOGO_VITE, alt: 'Vite logo', className: 'backdrop-vite', style: { bottom: '4%', left: '4%' } },
        { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { top: '4%', right: '4%' } },
      ],
    },
    '08': {
      watermarkIcon: <Rocket size={148} strokeWidth={1.1} />,
      watermarkTone: 'teal',
      icons: [
        { icon: <Globe size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '12%', animationDelay: '1.2s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.6s' } },
        { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.5s' } },
      ],
    },
    '09': {
      watermarkIcon: <Wrench size={148} strokeWidth={1.1} />,
      watermarkTone: 'green',
      icons: [
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '22%', right: '10%', animationDelay: '1.1s' } },
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
      logos: [
        { src: LOGO_TYPESCRIPT, alt: 'TypeScript logo', className: 'backdrop-typescript', style: { top: '4%', right: '4%' } },
        { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { bottom: '4%', left: '4%' } },
      ],
    },
    '10': {
      watermarkIcon: <Package size={148} strokeWidth={1.1} />,
      watermarkTone: 'blue',
      icons: [
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <CircleDot size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '12%', animationDelay: '1.2s' } },
        { icon: <Globe size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.4s' } },
      ],
      logos: [
        { src: LOGO_SVELTE, alt: 'Svelte logo', className: 'backdrop-svelte', style: { top: '4%', right: '4%' } },
        { src: LOGO_TAILWIND, alt: 'Tailwind logo', className: 'backdrop-tailwind', style: { bottom: '4%', left: '4%' } },
      ],
    },
    '11': {
      watermarkIcon: <GitBranch size={148} strokeWidth={1.1} />,
      watermarkTone: 'teal',
      icons: [
        { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '12%', animationDelay: '1.1s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.8s' } },
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.5s' } },
      ],
      logos: [
        { src: LOGO_GITHUB, alt: 'GitHub logo', className: 'backdrop-github', style: { top: '4%', right: '4%' } },
      ],
    },
    '12': {
      watermarkIcon: <Atom size={148} strokeWidth={1.1} />,
      watermarkTone: 'amber',
      icons: [
        { icon: <Atom size={18} strokeWidth={1.6} />, tone: 'amber', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <CheckCircle size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '24%', right: '12%', animationDelay: '1.1s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'teal', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Ban size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
      logos: [
        { src: LOGO_CHATGPT, alt: 'ChatGPT logo', className: 'backdrop-chatgpt', style: { top: '4%', right: '4%' } },
        { src: LOGO_GEMINI, alt: 'Gemini logo', className: 'backdrop-gemini', style: { bottom: '4%', left: '4%' } },
        { src: LOGO_COPILOT, alt: 'Copilot logo', className: 'backdrop-copilot', style: { bottom: '4%', right: '4%' } },
      ],
    },
    '13': {
      watermarkIcon: <Rocket size={148} strokeWidth={1.1} />,
      watermarkTone: 'green',
      icons: [
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '24%', right: '12%', animationDelay: '1.1s' } },
        { icon: <CheckCircle size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.8s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
      logos: [
        { src: LOGO_REACT, alt: 'React logo', className: 'backdrop-react', style: { top: '4%', right: '4%' } },
        { src: LOGO_TAILWIND, alt: 'Tailwind logo', className: 'backdrop-tailwind', style: { bottom: '4%', left: '4%' } },
      ],
    },
    '14': {
      watermarkIcon: <Server size={150} strokeWidth={1.1} />,
      watermarkTone: 'blue',
      icons: [
        { icon: <Server size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'teal', style: { top: '22%', right: '10%', animationDelay: '1.1s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'green', style: { bottom: '12%', right: '18%', animationDelay: '1.5s' } },
      ],
      logos: [
        { src: LOGO_UBUNTU, alt: 'Ubuntu logo', className: 'backdrop-ubuntu', style: { top: '4%', right: '4%' } },
        { src: LOGO_LINUX, alt: 'Linux logo', className: 'backdrop-linux', style: { bottom: '4%', left: '4%' } },
      ],
    },
    '15': {
      watermarkIcon: <Ban size={148} strokeWidth={1.1} />,
      watermarkTone: 'red',
      icons: [
        { icon: <Ban size={18} strokeWidth={1.6} />, tone: 'red', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Wrench size={18} strokeWidth={1.6} />, tone: 'amber', style: { top: '22%', right: '10%', animationDelay: '1.1s' } },
        { icon: <Package size={18} strokeWidth={1.6} />, tone: 'blue', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Hourglass size={18} strokeWidth={1.6} />, tone: 'teal', style: { bottom: '12%', right: '18%', animationDelay: '1.5s' } },
      ],
    },
    '16': {
      watermarkIcon: <CheckCircle size={148} strokeWidth={1.1} />,
      watermarkTone: 'teal',
      icons: [
        { icon: <Server size={18} strokeWidth={1.6} />, tone: 'green', style: { top: '12%', left: '8%', animationDelay: '0s' } },
        { icon: <Zap size={18} strokeWidth={1.6} />, tone: 'blue', style: { top: '24%', right: '12%', animationDelay: '1.1s' } },
        { icon: <GitBranch size={18} strokeWidth={1.6} />, tone: 'teal', style: { bottom: '18%', left: '14%', animationDelay: '0.7s' } },
        { icon: <Rocket size={18} strokeWidth={1.6} />, tone: 'amber', style: { bottom: '12%', right: '18%', animationDelay: '1.6s' } },
      ],
    },
  };

  const config = backdropBySlide[slideId] ?? defaultConfig;

  return (
    <div className="slide-backdrop" aria-hidden="true">
      <div className={`backdrop-watermark-icon ${config.watermarkTone}`}>{config.watermarkIcon}</div>
      {secondaryIconSlots.map((slot, index) => {
        const source = config.icons[index % config.icons.length];
        return (
          <BackdropIcon
            key={`${slideId}-icon-soft-${index}`}
            icon={source.icon}
            tone={source.tone}
            soft
            style={{ ...slot, animationDelay: `${0.3 * index}s` }}
          />
        );
      })}
      {config.icons.map((entry, index) => (
        <BackdropIcon key={`${slideId}-icon-${index}`} icon={entry.icon} tone={entry.tone} style={entry.style} />
      ))}
      {config.logos?.map((logo, index) => (
        <div key={`${slideId}-logo-${index}`} className={`backdrop-logo ${logo.className}`} style={logo.style}>
          <div className="backdrop-logo-glow" />
          <img src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </div>
  );
}

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
    <div className="card" style={{ borderColor: 'rgba(148,163,184,0.20)', background: 'rgba(255,255,255,0.68)' }}>
      <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
        <div className={`icon-badge ${tone}`} style={{ color: 'var(--text-primary)' }}>{icon}</div>
        <div>
          <div style={{ fontSize: 16, fontWeight: 700, color: 'var(--text-primary)', marginBottom: 6 }}>{title}</div>
          <div style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--text-secondary)' }}>{text}</div>
        </div>
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
            Charla técnica sobre la base que sostiene la aplicación: servidor, desarrollo web, Vite, GitHub e IA.
          </p>

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
      label="Contexto"
      title={<>Ubuntu Server en contexto real</>}
      subtitle={<>Antes del setup, conviene entender dónde encaja: qué resuelve, cuándo usarlo y qué decisiones evita improvisar en producción.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 72%)', top: '18%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 18, alignItems: 'start' }}>
        <MacFrame title="dónde se usa" accent="blue">
          <BulletList items={[
            'VPS y cloud cuando la app necesita estar disponible todo el tiempo.',
            'Entornos de laboratorio para practicar despliegue real, no solo local.',
            'Equipos que necesitan control fino de servicios, puertos y seguridad.',
          ]} />
        </MacFrame>

        <MacFrame title="qué evita" accent="teal">
          <BulletList items={[
            'Improvisar el servidor cuando ya toca desplegar.',
            'Confundir problemas de app con problemas de infraestructura.',
            'Depender de magia: aquí todo se entiende por comandos y servicios.',
          ]} />
        </MacFrame>
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge blue" style={{ width: 36, height: 36, fontSize: 18 }}><Server size={16} /></div>
          <div style={{ fontWeight: 700 }}>Idea clave</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Primero entendemos la base. El setup técnico viene después de explicar Vite, para que cada instalación tenga sentido dentro del flujo.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide04UbuntuProsCons() {
  return (
    <SectionSlide
      num="05 / 18"
      label="Ubuntu Server"
      title={<>Lo bueno, lo incómodo y un par de datos que suelen pasar de largo</>}
      subtitle={<>No busca verse perfecto. Justamente por eso sirve: deja ver ventajas reales y también el costo de administrar con más criterio.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 72%)', top: '22%', left: '16%' }}
    >
      <div className="grid-3" style={{ gap: 16 }}>
        <Card icon={<CheckCircle size={18} />} title="Ventajas" text="Ligero, estable, documentado y muy usado cuando una app necesita estar viva todo el tiempo." tone="green" />
        <Card icon={<Ban size={18} />} title="Desventajas" text="Al principio no resulta tan amigable: exige terminal, orden y un poco de paciencia." tone="red" />
        <Card icon={<Rocket size={18} />} title="Curiosidad" text="Gran parte de la nube y de los servidores que sostienen apps modernas terminan pisando Linux de una forma u otra." tone="amber" />
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge blue" style={{ width: 36, height: 36, fontSize: 18 }}><Wrench size={16} /></div>
          <div style={{ fontWeight: 700 }}>Punto clave</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Ubuntu Server no complica por capricho. Más bien deja ver dónde vive la aplicación, quién la sirve y qué pasa cuando algo no arranca como debería.
        </div>
      </div>
    </SectionSlide>
  );
}

export function Slide05WebEvolution() {
  return (
    <SectionSlide
      num="06 / 18"
      label="Historia"
      title={<>Cómo se hacía el desarrollo web antes</>}
      subtitle={<>Durante años el trabajo fue más manual, más frágil y más lento. El desarrollo moderno apareció para reducir fricción y devolverle tiempo al equipo.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(148,163,184,0.12) 0%, transparent 72%)', top: '20%', right: '18%' }}
    >
      <Timeline
        items={[
          { title: 'HTML y CSS directos', text: 'La página era la página. Había poco estado, poca automatización y casi nada de feedback rápido.', tone: 'blue' },
          { title: 'jQuery y plugins', text: 'Se resolvía mucho con scripts sueltos, bastante bricolaje y dependencias externas por todos lados.', tone: 'teal' },
          { title: 'Bundlers pesados', text: 'Webpack ordenó varias cosas, pero también cargó el proceso con configuración y tiempos de espera.', tone: 'amber' },
          { title: 'Flujo moderno', text: 'La experiencia cambió cuando el navegador y la herramienta empezaron a colaborar mejor.', tone: 'green' },
        ]}
      />
    </SectionSlide>
  );
}

export function Slide06SlowDevelopment() {
  return (
    <SectionSlide
      num="07 / 18"
      label="Dolor"
      title={<>Por qué la velocidad importa</>}
      subtitle={<>Cuando el desarrollo se vuelve lento no solo se pierde tiempo: también se pierde ritmo, foco y capacidad de iterar con naturalidad.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 72%)', top: '22%', left: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Hourglass size={18} />} title="Arranque pesado" text="Abrir el proyecto y esperar demasiado ya rompe la concentración antes de tocar una línea de código." tone="red" />
        <Card icon={<Snail size={18} />} title="Cambios que tardan" text="Si cada guardado obliga a reconstruir todo, la práctica se vuelve más defensiva que creativa." tone="red" />
        <Card icon={<Wrench size={18} />} title="Configuración que estorba" text="Cuando hay demasiadas piezas, la conversación deja de ser sobre la app y se convierte en una pelea con la herramienta." tone="amber" />
        <Card icon={<Package size={18} />} title="Bundle completo cada vez" text="Ver un cambio pequeño no debería depender de recomponer medio proyecto primero." tone="amber" />
      </div>
    </SectionSlide>
  );
}

export function Slide07WhatIsVite() {
  return (
    <SectionSlide
      num="08 / 18"
      label="Herramienta"
      title={<>¿Qué es <span className="gradient-text">Vite</span>?</>}
      subtitle={<>Una herramienta para desarrollo frontend que quita fricción. No promete milagros; simplemente deja de hacer lento lo que antes era innecesariamente pesado.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(96,165,250,0.12) 0%, transparent 72%)', top: '18%', right: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16, alignItems: 'stretch' }}>
        <MacFrame title="qué resuelve" accent="blue">
          <BulletList items={['Arranque rápido sin cargar un bundle gigante.', 'Recarga de cambios sin perder el estado todo el tiempo.', 'Una experiencia más cercana a editar archivos que a pelear con un build.']} />
        </MacFrame>

        <MacFrame title="qué no intenta ser" accent="amber">
          <BulletList items={['No es una religión de tooling.', 'No necesita explicar demasiado para mostrar valor.', 'No reemplaza el criterio del equipo; solo acelera el camino.']} />
        </MacFrame>
      </div>
    </SectionSlide>
  );
}

export function Slide08HowViteWorks() {
  return (
    <SectionSlide
      num="09 / 18"
      label="Mecánica"
      title={<>Cómo piensa Vite por dentro</>}
      subtitle={<>La idea es simple: servir módulos cuando hacen falta y dejar el paquete grande para el momento en que de verdad toca publicar.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 72%)', top: '20%', left: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Globe size={18} />} title="El navegador pide una parte" text="No hace falta levantar todo el castillo para mostrar una esquina de la página." tone="blue" />
        <Card icon={<Zap size={18} />} title="La herramienta responde rápido" text="Mientras el proyecto crece, la experiencia diaria sigue siendo ligera y predecible." tone="violet" />
        <Card icon={<GitBranch size={18} />} title="HMR mantiene el ritmo" text="Un cambio pequeño no debería borrar el estado ni obligar a rehacer el contexto visual." tone="green" />
        <Card icon={<Package size={18} />} title="Build solo cuando toca" text="La versión final se prepara al final del camino, no en cada movimiento de la edición." tone="amber" />
      </div>
    </SectionSlide>
  );
}

export function Slide09CreateProject() {
  return (
    <SectionSlide
      num="10 / 18"
      label="Ejemplo"
      title={<>Preparar entorno y crear el proyecto</>}
      subtitle={<>Ahora sí, después de Vite, hacemos setup de Ubuntu y luego creamos la app. Todo en orden para que no queden huecos.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 72%)', top: '20%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 18, alignItems: 'start' }}>
        <CodeBlock
          filename="setup-ubuntu.sh"
          lines={[
            { prompt: '$', text: 'sudo apt update && sudo apt upgrade -y' },
            { prompt: '$', text: 'sudo apt install -y curl git build-essential nginx' },
            { prompt: '$', text: 'curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -' },
            { prompt: '$', text: 'sudo apt install -y nodejs' },
            { prompt: '$', text: 'node -v && npm -v && git --version' },
            { prompt: '$', text: 'lsb_release -a' },
          ]}
        />

        <CodeBlock
          filename="create-vite.sh"
          lines={[
            { prompt: '$', text: 'npm create vite@latest' },
            { prompt: '?', text: 'se elige nombre, framework y variante' },
            { prompt: '$', text: 'cd mi-proyecto' },
            { prompt: '$', text: 'npm install' },
            { prompt: '$', text: 'npm run dev' },
          ]}
        />
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
          <div className="icon-badge green" style={{ width: 36, height: 36, fontSize: 18 }}><CheckCircle size={16} /></div>
          <div style={{ fontWeight: 700 }}>Resultado esperado</div>
        </div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          Servidor preparado, herramientas verificadas y proyecto Vite levantado. Desde aquí ya podemos iterar sin fricción.
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
      title={<>Leer la estructura del proyecto sin perderse en los archivos</>}
      subtitle={<>No alcanza con ver carpetas. Conviene saber qué hace cada una para que el proyecto deje de parecer una caja cerrada.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(148,163,184,0.12) 0%, transparent 72%)', top: '18%', left: '16%' }}
    >
      <MacFrame title="estructura-base" accent="blue">
        <div style={{ lineHeight: 2 }}>
          <div className="tree-line"><span className="tree-root">mi-proyecto/</span></div>
          <div className="tree-line tree-indent"><span className="tree-dir">src/</span><span className="tree-file">donde vive la app</span></div>
          <div className="tree-line tree-indent"><span className="tree-dir">public/</span><span className="tree-file">archivos sin transformar</span></div>
          <div className="tree-line tree-indent"><span className="tree-file">index.html</span><span className="tree-special">puerta de entrada</span></div>
          <div className="tree-line tree-indent"><span className="tree-file">main.tsx</span><span className="tree-special">arranque de la app</span></div>
          <div className="tree-line tree-indent"><span className="tree-file">App.tsx</span><span className="tree-special">núcleo visible</span></div>
          <div className="tree-line tree-indent"><span className="tree-file">package.json</span><span className="tree-special">scripts y dependencias</span></div>
        </div>
      </MacFrame>
    </SectionSlide>
  );
}

export function Slide11CloneOrInit() {
  return (
    <SectionSlide
      num="12 / 18"
      label="GitHub"
      title={<>Clonar un repo o arrancar uno nuevo</>}
      subtitle={<>Las dos opciones tienen sentido. En equipos reales suele aparecer un repositorio listo; en otros casos se parte desde un template y se arma la base desde cero.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 72%)', top: '20%', right: '18%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<GitBranch size={18} />} title="Clonar" text="Encaja cuando ya existe una base compartida, un proyecto del equipo o un repo que alguien dejó listo." tone="teal" />
        <Card icon={<Zap size={18} />} title="Inicializar" text="Sirve cuando conviene empezar de cero y dejar elegido desde el inicio el stack que se va a usar." tone="blue" />
      </div>

      <div className="card" style={{ marginTop: 18, background: 'rgba(255,255,255,0.68)' }}>
        <div style={{ fontWeight: 700, marginBottom: 10 }}>Lo importante de verdad</div>
        <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
          GitHub no solo guarda código. También organiza puntos de partida, versiones, ejemplos y proyectos que otra persona puede levantar sin adivinar demasiado.
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
      title={<>La IA como copiloto, no como atajo</>}
      subtitle={<>En este punto conviene dejarlo claro: ayuda bastante para pensar, escribir y probar, pero no reemplaza la revisión humana ni el criterio técnico. Su valor está en acelerar el proceso, no en saltarse la revisión.</>}
      glowStyle={{ width: 540, height: 540, background: 'radial-gradient(circle, rgba(245,158,11,0.12) 0%, transparent 72%)', top: '18%', left: '18%' }}
    >
      <div className="grid-3" style={{ gap: 16 }}>
        <Card icon={<Zap size={18} />} title="Aprender" text="Sirve para bajar conceptos a ejemplos más cortos, especialmente cuando el tema todavía suena abstracto." tone="amber" />
        <Card icon={<Wrench size={18} />} title="Construir" text="Puede proponer base de código o piezas repetitivas, siempre que alguien revise lo que queda adentro." tone="teal" />
        <Card icon={<Ban size={18} />} title="Verificar" text="Nada se asume correcto por venir de una IA; se revisa como se revisa cualquier otro texto o fragmento de código." tone="red" />
      </div>
    </SectionSlide>
  );
}

export function Slide13DevBuildProd() {
  return (
    <SectionSlide
      num="14 / 18"
      label="Flujo"
      title={<>Desarrollo, build y prueba final</>}
      subtitle={<>Aquí se separa lo que se edita a diario de lo que se deja listo para publicación. Es la parte que conecta el trabajo local con el resultado real.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(34,197,94,0.10) 0%, transparent 72%)', top: '20%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Rocket size={18} />} title="npm run dev" text="Entra el servidor local, aparece HMR y el cambio se nota casi al instante." tone="green" />
        <Card icon={<Package size={18} />} title="npm run build" text="Se prepara la versión final, ya pensada para servir en producción y no para editarla." tone="violet" />
        <Card icon={<CheckCircle size={18} />} title="npm run preview" text="Permite mirar el resultado empaquetado antes de llevarlo al servidor o al hosting." tone="blue" />
        <Card icon={<Globe size={18} />} title="listo para publicar" text="Cuando el build y la prueba cierran bien, lo que queda es mover el artefacto y servirlo." tone="amber" />
      </div>
    </SectionSlide>
  );
}

export function Slide14DeployOnUbuntu() {
  return (
    <SectionSlide
      num="15 / 18"
      label="Despliegue"
      title={<>Publicar en Ubuntu Server sin inventar demasiado</>}
      subtitle={<>La lógica suele ser simple: generar el build, copiarlo al servidor y dejar que un servidor web lo entregue con calma y estabilidad.</>}
      glowStyle={{ width: 560, height: 560, background: 'radial-gradient(circle, rgba(14,165,233,0.12) 0%, transparent 72%)', top: '20%', left: '18%' }}
    >
      <div className="grid-2" style={{ gap: 18, alignItems: 'stretch' }}>
        <CodeBlock
          filename="deploy.sh"
          lines={[
            { prompt: '$', text: 'npm run build' },
            { prompt: '$', text: 'scp -r dist/ usuario@servidor:/var/www/app' },
            { prompt: '$', text: 'sudo systemctl reload nginx' },
          ]}
        />

        <MacFrame title="qué se está haciendo" accent="teal">
          <BulletList items={['El build deja la app lista para servir archivos estáticos.', 'Nginx entra como una capa simple y rápida para publicar.', 'Ubuntu Server sostiene todo esto sin meter adorno de más.']} />
        </MacFrame>
      </div>
    </SectionSlide>
  );
}

export function Slide15CommonErrors() {
  return (
    <SectionSlide
      num="16 / 18"
      label="Errores"
      title={<>Errores comunes que suelen aparecer cuando la ruta todavía se está armando</>}
      subtitle={<>No hace falta memorizar soluciones exactas. Basta con reconocer qué parte del flujo está fallando para no buscar a ciegas.</>}
      glowStyle={{ width: 520, height: 520, background: 'radial-gradient(circle, rgba(239,68,68,0.10) 0%, transparent 72%)', top: '22%', right: '16%' }}
    >
      <div className="grid-2" style={{ gap: 16 }}>
        <Card icon={<Ban size={18} />} title="Versión de Node" text="Si la versión no encaja, algunas dependencias o scripts empiezan a comportarse raro sin avisar demasiado claro." tone="red" />
        <Card icon={<Wrench size={18} />} title="Dependencias faltantes" text="A veces el proyecto sí existe, pero el entorno todavía no está armado con todo lo que necesita." tone="amber" />
        <Card icon={<Snail size={18} />} title="Puerto ocupado" text="El servidor local puede no levantar simplemente porque otro proceso ya agarró el mismo puerto." tone="red" />
        <Card icon={<Hourglass size={18} />} title="Build roto" text="Cuando el build falla, el problema real suele estar más cerca de una importación o una ruta que de toda la app." tone="blue" />
      </div>
    </SectionSlide>
  );
}

export function Slide16Summary() {
  return (
    <SectionSlide
      num="17 / 18"
      label="Resumen"
      title={<>La ruta completa, sin huecos y sin saltos raros</>}
      subtitle={<>La charla quedó armada como una secuencia: servidor, contexto, herramienta, ejemplo y salida al mundo real.</>}
      glowStyle={{ width: 600, height: 600, background: 'radial-gradient(circle, rgba(255,255,255,0.88) 0%, rgba(226,232,240,0.22) 45%, transparent 72%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
    >
      <div className="grid-4" style={{ gap: 14, marginBottom: 18 }}>
        <div className="card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.68)' }}><div style={{ fontSize: 30, color: '#16a34a', fontWeight: 800 }}>1</div><div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Ubuntu Server</div></div>
        <div className="card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.68)' }}><div style={{ fontSize: 30, color: '#2563eb', fontWeight: 800 }}>2</div><div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Desarrollo web</div></div>
        <div className="card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.68)' }}><div style={{ fontSize: 30, color: '#7c3aed', fontWeight: 800 }}>3</div><div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>Vite</div></div>
        <div className="card" style={{ textAlign: 'center', background: 'rgba(255,255,255,0.68)' }}><div style={{ fontSize: 30, color: '#d97706', fontWeight: 800 }}>4</div><div style={{ color: 'var(--text-secondary)', fontSize: 13 }}>GitHub e IA</div></div>
      </div>

      <div className="card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, background: 'rgba(255,255,255,0.68)' }}>
        <div>
          <div style={{ fontWeight: 700, marginBottom: 6 }}>La idea principal</div>
          <div style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            La herramienta importa, pero el criterio importa más. Cuando la base está clara, el proyecto se levanta mejor, se explica mejor y se mantiene mejor.
          </div>
        </div>
        <div className="icon-badge green" style={{ width: 54, height: 54, fontSize: 24 }}><CheckCircle size={20} /></div>
      </div>
    </SectionSlide>
  );
}

export function Slide17Closing() {
  const chips = [
    { label: 'Vite', icon: <Zap size={14} />, tone: 'blue' },
    { label: 'Ubuntu', icon: <Server size={14} />, tone: 'green' },
    { label: 'GitHub', icon: <GitBranch size={14} />, tone: 'teal' },
    { label: 'IA', icon: <Atom size={14} />, tone: 'amber' },
  ] as const;

  return (
    <>
      <div className="slide-bg-grid" />
      <div className="slide-bg-glow" style={{ width: 720, height: 720, background: 'radial-gradient(circle, rgba(255,255,255,0.88) 0%, rgba(226,232,240,0.24) 44%, transparent 72%)', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <div className="slide-bg-glow" style={{ width: 300, height: 300, background: 'radial-gradient(circle, rgba(96,165,250,0.18) 0%, transparent 72%)', top: '10%', right: '10%' }} />
      <div className="slide-bg-glow" style={{ width: 260, height: 260, background: 'radial-gradient(circle, rgba(148,163,184,0.16) 0%, transparent 72%)', bottom: '10%', left: '10%' }} />

      <div style={{ textAlign: 'center', position: 'relative', zIndex: 1, maxWidth: 840 }}>
        <div className="animate-scale-in" style={{ fontSize: 72, marginBottom: 18, animation: 'float 3s ease-in-out infinite' }}><Zap /></div>
        <h2 className="slide-title animate-slide-up delay-1" style={{ fontSize: 'clamp(28px, 4.5vw, 60px)', marginBottom: 20, lineHeight: 1.18 }}>
          Gracias. Si algo se lleva la charla, que sea esto: <span className="gradient-text">entender el flujo completo</span> cambia la forma de construir.
        </h2>
        <div className="animate-fade-in delay-2" style={{ width: 86, height: 3, background: 'linear-gradient(90deg, rgba(37,99,235,0.8), rgba(20,184,166,0.8))', borderRadius: 2, margin: '26px auto' }} />
        <p className="animate-slide-up delay-3" style={{ fontSize: 18, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 34 }}>
          Cierro con una idea sencilla: servidor, herramienta, repositorio y despliegue no van por separado. Cuando se entienden juntos, todo se vuelve más claro.
        </p>
        <div className="animate-slide-up delay-4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 42 }}>
          {chips.map((chip) => (
            <span key={chip.label} className={`chip ${chip.tone}`} style={{ padding: '8px 16px' }}>
              {chip.icon} {chip.label}
            </span>
          ))}
        </div>
        <div className="animate-scale-in delay-5" style={{ display: 'inline-flex', alignItems: 'center', gap: 14, background: 'rgba(255,255,255,0.76)', border: '1px solid rgba(148,163,184,0.24)', borderRadius: 999, padding: '12px 26px', backdropFilter: 'blur(18px)' }}>
          <span style={{ fontSize: 22 }}><Mic size={14} /></span>
          <span style={{ fontFamily: 'var(--font-main)', fontWeight: 700, fontSize: 18, color: 'var(--text-primary)' }}>¿Preguntas?</span>
          <span style={{ fontSize: 22 }}><Hand size={14} /></span>
        </div>
      </div>

      <div style={{ position: 'absolute', bottom: 120, right: 80, animation: 'float 4s ease-in-out infinite 0.5s', fontSize: 40, opacity: 0.07 }}><Rocket /></div>
      <div style={{ position: 'absolute', top: 100, left: 100, animation: 'float 5s ease-in-out infinite 1s', fontSize: 36, opacity: 0.07 }}><Server /></div>
    </>
  );
}