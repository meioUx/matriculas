import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { Pause, Play } from 'lucide-react';
import './site-motion.css';
import './modern-motion.css';

const MotionContext = createContext(false);
export const useSiteMotionPaused = () => useContext(MotionContext);

export function SiteMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const pointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const progress = document.querySelector<HTMLElement>('.site-scroll-progress');
    let frame = 0;
    const update = () => {
      frame = 0;
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progress?.style.setProperty('--page-progress', String(distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const surfaces = Array.from(document.querySelectorAll<HTMLElement>('.campus-art, .dual-phone-gallery'));
    const reset = () => surfaces.forEach(surface => {
      surface.style.setProperty('--tilt-x', '0deg');
      surface.style.setProperty('--tilt-y', '0deg');
    });
    const move = (event: PointerEvent) => {
      if (paused || preference.matches || !pointer.matches || event.pointerType !== 'mouse') return;
      const surface = event.currentTarget as HTMLElement;
      const bounds = surface.getBoundingClientRect();
      surface.style.setProperty('--tilt-x', `${(0.5 - (event.clientY - bounds.top) / bounds.height) * 8}deg`);
      surface.style.setProperty('--tilt-y', `${((event.clientX - bounds.left) / bounds.width - 0.5) * 10}deg`);
    };
    surfaces.forEach(surface => {
      surface.addEventListener('pointermove', move);
      surface.addEventListener('pointerleave', reset);
    });
    preference.addEventListener('change', reset);
    pointer.addEventListener('change', reset);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    const resize = new ResizeObserver(schedule);
    resize.observe(document.body);
    update();
    return () => {
      cancelAnimationFrame(frame);
      resize.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      preference.removeEventListener('change', reset);
      pointer.removeEventListener('change', reset);
      surfaces.forEach(surface => {
        surface.removeEventListener('pointermove', move);
        surface.removeEventListener('pointerleave', reset);
      });
      reset();
    };
  }, [paused]);
  useEffect(() => {
    document.documentElement.dataset.motionPaused = String(paused);
    return () => { delete document.documentElement.dataset.motionPaused; };
  }, [paused]);
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add('motion-reveal');
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.08 });
    document.querySelectorAll('.section-heading, .calendar-panel, .digital-banner, .app-download-copy, .app-download-visual, .review-state, .school-contact-block, .compact-faq-intro, .compact-faq-content, .support-inner, .footer-top').forEach((element, index) => {
      (element as HTMLElement).style.setProperty('--reveal-delay', `${index % 3 * 75}ms`);
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);
  return <MotionContext.Provider value={paused}><div className="site-scroll-progress" aria-hidden="true"/>{children}<button className="site-motion-control" onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? 'Ativar animações do site' : 'Pausar animações do site'}>{paused ? <Play size={14}/> : <Pause size={14}/>}<span>{paused ? 'Ativar animações' : 'Pausar animações'}</span></button></MotionContext.Provider>;
}
