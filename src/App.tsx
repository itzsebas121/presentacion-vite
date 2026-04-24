import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

import {
  Slide01Cover,
  Slide02Roadmap,
  Slide03UbuntuIntro,
  Slide03UbuntuServer,
  Slide04UbuntuProsCons,
  Slide05WebEvolution,
  Slide06SlowDevelopment,
  Slide07WhatIsVite,
  Slide08HowViteWorks,
  Slide09CreateProject,
  Slide10ProjectStructure,
  Slide11CloneOrInit,
  Slide12AIInWorkflow,
  Slide13DevBuildProd,
  Slide14DeployOnUbuntu,
  Slide15CommonErrors,
  Slide16Summary,
  Slide17Closing,
} from './presentationSlides';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const TOTAL_SLIDES = 18;

const slides = [
  Slide01Cover,
  Slide02Roadmap,
  Slide03UbuntuIntro,
  Slide03UbuntuServer,
  Slide04UbuntuProsCons,
  Slide05WebEvolution,
  Slide06SlowDevelopment,
  Slide07WhatIsVite,
  Slide08HowViteWorks,
  Slide09CreateProject,
  Slide10ProjectStructure,
  Slide11CloneOrInit,
  Slide12AIInWorkflow,
  Slide13DevBuildProd,
  Slide14DeployOnUbuntu,
  Slide15CommonErrors,
  Slide16Summary,
  Slide17Closing,
];

const slideTitles = [
  'Portada',
  'Ruta técnica de la presentación',
  'Qué es Ubuntu Server',
  'Escenarios reales de Ubuntu Server',
  'Fortalezas y costos de adopción',
  'Por qué el enfoque tradicional no escaló',
  'Impacto acumulado de la lentitud',
  '¿Qué es Vite?',
  'Velocidad con Vite en frameworks',
  'Setup técnico y arranque con Vite',
  'Cómo leer la estructura base',
  'Clonar vs arrancar desde cero',
  'IA aplicada al flujo técnico',
  'Dev, build y verificación',
  'Publicación en Ubuntu Server',
  'Errores frecuentes y resolución',
  'Resumen operativo final',
  'Cierre y preguntas',
];

export default function App() {
  const [current, setCurrent] = useState(0);
  const [previous, setPrevious] = useState(0);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const [showNav, setShowNav] = useState(true);

  const containerRef = useRef<HTMLDivElement>(null);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= TOTAL_SLIDES || index === current) return;
    setDirection(index > current ? 'next' : 'prev');
    setPrevious(current);
    setCurrent(index);
  }, [current]);

  const next = useCallback(() => goTo(current + 1), [goTo, current]);
  const prev = useCallback(() => goTo(current - 1), [goTo, current]);

  useGSAP(() => {
    const slidesElements = gsap.utils.toArray('.slide') as HTMLElement[];
    
    slidesElements.forEach((slide) => {
      const slideIndex = Number(slide.dataset.slideIndex);
      const isActive = slideIndex === current;
      const isExiting = slideIndex === previous;

      gsap.killTweensOf(slide);
      gsap.killTweensOf(slide.querySelectorAll('.slide-title, .animate-slide-up, .animate-fade-in, .animate-scale-in'));
      
      if (isActive) {
        gsap.fromTo(slide, 
          { autoAlpha: 0, xPercent: direction === 'next' ? 30 : -30 },
          { autoAlpha: 1, xPercent: 0, duration: 0.4, ease: 'none', force3D: true, pointerEvents: 'auto' }
        );
      } else if (isExiting) {
        gsap.to(slide, { autoAlpha: 0, xPercent: direction === 'next' ? -30 : 30, duration: 0.4, ease: 'none', force3D: true, pointerEvents: 'none' });
      } else {
        gsap.set(slide, { autoAlpha: 0, pointerEvents: 'none' });
      }
    });
  }, { dependencies: [current, direction, previous], scope: containerRef });

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (['ArrowRight', 'ArrowDown', ' ', 'PageDown'].includes(e.key)) { e.preventDefault(); next(); }
      else if (['ArrowLeft', 'ArrowUp', 'PageUp'].includes(e.key)) { e.preventDefault(); prev(); }
      else if (e.key === 'Home') goTo(0);
      else if (e.key === 'End') goTo(TOTAL_SLIDES - 1);
      else if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) document.exitFullscreen();
        else document.documentElement.requestFullscreen();
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [next, prev, goTo]);

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const diff = startX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
    };
    window.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchend', onTouchEnd);
    return () => { window.removeEventListener('touchstart', onTouchStart); window.removeEventListener('touchend', onTouchEnd); };
  }, [next, prev]);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const show = () => {
      setShowNav(true);
      clearTimeout(timer);
      timer = setTimeout(() => setShowNav(false), 3500);
    };
    window.addEventListener('mousemove', show);
    window.addEventListener('keydown', show);
    show();
    return () => { window.removeEventListener('mousemove', show); window.removeEventListener('keydown', show); clearTimeout(timer); };
  }, []);

  const progress = ((current + 1) / TOTAL_SLIDES) * 100;
  const visibleSlides = current === previous ? [current] : [previous, current];

  return (
    <div className="presentation" ref={containerRef}>
      {/* Progress bar */}
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      {/* Keyboard hint */}
      <div className="keyboard-hint" style={{ opacity: showNav ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: showNav ? 'auto' : 'none' }}>
        <span className="key">←</span><span className="key">→</span>
        <span style={{ marginLeft: 4 }}>navegar</span>
        <span style={{ marginLeft: 8 }}>·</span>
        <span className="key">F</span>
        <span style={{ marginLeft: 4 }}>pantalla completa</span>
      </div>

      {/* Slide title */}
      <div style={{
        position: 'fixed', top: 20, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', alignItems: 'center', gap: 14,
        padding: '10px 16px', borderRadius: 999,
        background: 'rgba(255,255,255,0.78)', backdropFilter: 'blur(20px)',
        border: '1px solid rgba(148,163,184,0.22)', boxShadow: '0 14px 36px rgba(15,23,42,0.08)',
        zIndex: 1000, opacity: showNav ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: 'none'
      }}>
        <div style={{ display: 'flex', gap: 7 }}>
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#ff5f57', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#febc2e', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)' }} />
          <span style={{ width: 11, height: 11, borderRadius: 999, background: '#28c840', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.35)' }} />
        </div>
        <div style={{ width: 1, height: 18, background: 'rgba(148,163,184,0.35)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
          <span style={{ fontFamily: 'var(--font-main)', fontSize: 12, fontWeight: 700, color: 'var(--text-primary)' }}>Sebastian Tipan</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 10, color: 'var(--text-muted)', letterSpacing: '0.08em' }}>{slideTitles[current]}</span>
        </div>
      </div>

      {/* Slides */}
      {visibleSlides.map((idx) => {
        const SlideComponent = slides[idx];
        return (
          <div
            key={idx}
            className="slide"
            data-slide-index={idx}
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: idx === current ? 10 : 9
            }}
          >
            <SlideComponent />
          </div>
        );
      })}

      {/* Navigation bar */}
      <div className="nav-bar" style={{ opacity: showNav ? 1 : 0, transition: 'opacity 0.4s ease', pointerEvents: showNav ? 'auto' : 'none' }}>
        <button className="nav-btn" onClick={prev} disabled={current === 0} title="Anterior (←)">‹</button>
        <div className="nav-dots">
          {Array.from({ length: TOTAL_SLIDES }, (_, i) => (
            <button
              key={i}
              className={`nav-dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              title={slideTitles[i]}
            />
          ))}
        </div>
        <span className="slide-counter">{String(current + 1).padStart(2, '0')} / {TOTAL_SLIDES}</span>
        <button className="nav-btn" onClick={next} disabled={current === TOTAL_SLIDES - 1} title="Siguiente (→)">›</button>
      </div>
    </div>
  );
}
