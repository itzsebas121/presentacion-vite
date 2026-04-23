import { useState, useEffect, useCallback, useRef } from 'react';
import './App.css';

import Slide01Cover from './slides/Slide01Cover';
import Slide02Problem from './slides/Slide02Problem';
import Slide03WhatIsVite from './slides/Slide03WhatIsVite';
import Slide04WhatFor from './slides/Slide04WhatFor';
import Slide05WhyVite from './slides/Slide05WhyVite';
import Slide06Prerequisites from './slides/Slide06Prerequisites';
import Slide07CreateApp from './slides/Slide07CreateApp';
import Slide08AppRunning from './slides/Slide08AppRunning';
import Slide09HMR from './slides/Slide09HMR';
import Slide10Structure from './slides/Slide10Structure';
import Slide11Production from './slides/Slide11Production';
import Slide12Deploy from './slides/Slide12Deploy';
import Slide13CloneGitHub from './slides/Slide13CloneGitHub';
import Slide14Pipeline from './slides/Slide14Pipeline';
import Slide15Errors from './slides/Slide15Errors';
import Slide16Conclusion from './slides/Slide16Conclusion';
import Slide17Closing from './slides/Slide17Closing';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const TOTAL_SLIDES = 17;

const slides = [
  Slide01Cover,
  Slide02Problem,
  Slide03WhatIsVite,
  Slide04WhatFor,
  Slide05WhyVite,
  Slide06Prerequisites,
  Slide07CreateApp,
  Slide08AppRunning,
  Slide09HMR,
  Slide10Structure,
  Slide11Production,
  Slide12Deploy,
  Slide13CloneGitHub,
  Slide14Pipeline,
  Slide15Errors,
  Slide16Conclusion,
  Slide17Closing,
];

const slideTitles = [
  'Portada',
  'El problema',
  '¿Qué es Vite?',
  '¿Para qué sirve?',
  '¿Por qué usar Vite?',
  'Requisitos previos',
  'Crear app desde cero',
  'Ver la app corriendo',
  'HMR en vivo',
  'Estructura del proyecto',
  'Paso a producción',
  'Despliegue con Nginx',
  'Clonar desde GitHub',
  'Pipeline completo',
  'Errores comunes',
  'Conclusión',
  'Cierre final',
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
    
    slidesElements.forEach((slide, idx) => {
      const isActive = idx === current;
      const isExiting = idx === previous;
      
      if (isActive) {
        // Animación de entrada: Túnel Dinámico Alterno
        const isNextDir = direction === 'next';
        const alt = current % 2 === 0 ? 1 : -1; // Altera la dirección (izquierda/derecha)
        
        gsap.fromTo(slide, 
          { 
            autoAlpha: 0, 
            scale: isNextDir ? 0.3 : 2.5, 
            x: isNextDir ? 400 * alt : -400 * alt, 
            y: isNextDir ? 50 * alt : -50 * alt,
            rotation: isNextDir ? 10 * alt : -10 * alt,
            pointerEvents: 'none',
            transformOrigin: '50% 50%'
          },
          { 
            autoAlpha: 1, 
            scale: 1,
            x: 0,
            y: 0,
            rotation: 0,
            duration: 1.2, 
            ease: 'power3.inOut', // La curva más fluida posible
            force3D: true, // Fuerza aceleración pura por GPU para máximo FPS
            pointerEvents: 'auto',
            onStart: () => {
              // Textos y parallax interno
              const titles = slide.querySelectorAll('.slide-title');
              if (titles.length) {
                gsap.fromTo(titles, 
                  { y: 80, autoAlpha: 0, scale: 0.9 },
                  { y: 0, autoAlpha: 1, scale: 1, duration: 1.0, ease: 'power3.out', stagger: 0.1, delay: 0.4 }
                );
              }
              
              const animatedElements = slide.querySelectorAll('.animate-slide-up, .animate-fade-in, .animate-scale-in');
              if (animatedElements.length) {
                gsap.fromTo(animatedElements,
                  { y: 60, autoAlpha: 0 },
                  { y: 0, autoAlpha: 1, duration: 1.0, ease: 'power3.out', stagger: 0.05, delay: 0.5 }
                );
              }
            }
          }
        );
      } else if (isExiting && current !== previous) {
        // Animación de salida: Viaja en dirección opuesta al entrante
        const isNextDir = direction === 'next';
        const alt = current % 2 === 0 ? 1 : -1; // Usa el alternador del slide actual

        gsap.to(slide, {
          autoAlpha: 0,
          scale: isNextDir ? 2.5 : 0.3,
          x: isNextDir ? -400 * alt : 400 * alt,
          y: isNextDir ? -50 * alt : 50 * alt,
          rotation: isNextDir ? -10 * alt : 10 * alt,
          duration: 1.2,
          ease: 'power3.inOut',
          pointerEvents: 'none',
          force3D: true
        });
      } else {
        // Para todos los demás slides (los 15 restantes), ocultarlos instantáneamente para no destruir los FPS
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
        position: 'fixed', top: 24, left: '50%', transform: 'translateX(-50%)',
        fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-muted)',
        letterSpacing: '0.08em', opacity: showNav ? 1 : 0, transition: 'opacity 0.4s ease',
        zIndex: 1000, background: 'rgba(10,14,26,0.85)', backdropFilter: 'blur(10px)',
        border: '1px solid var(--border-subtle)', borderRadius: 20, padding: '5px 14px',
        textTransform: 'uppercase', pointerEvents: 'none'
      }}>
        {slideTitles[current]}
      </div>

      {/* Slides */}
      {slides.map((SlideComponent, idx) => {
        return (
          <div
            key={idx}
            className="slide"
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: idx === current ? 10 : 1
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
