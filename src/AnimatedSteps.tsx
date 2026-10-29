import { useEffect, useRef, useState } from 'react';
import { Check, ChevronLeft, ChevronRight, FileCheck2, FileUp, ListChecks, LogIn, MonitorSmartphone, Pause, Play, RotateCcw, UserRound, UsersRound } from 'lucide-react';
import { steps } from './data';
import { StepPreview } from './StepPreview';
import { useSiteMotionPaused } from './SiteMotion';
import './animated-steps.css';
import './guide-redesign.css';

const icons = [MonitorSmartphone, LogIn, UsersRound, UserRound, FileUp, FileCheck2, ListChecks];

export function AnimatedSteps() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(true);
  const [visible, setVisible] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [hidden, setHidden] = useState(document.hidden);
  const rootRef = useRef<HTMLDivElement>(null);
  const sitePaused = useSiteMotionPaused();
  const playing = !sitePaused && !paused && visible && !reduced && !hidden;

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReduced(preference.matches);
    const updateVisibility = () => setHidden(document.hidden);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    document.addEventListener('visibilitychange', updateVisibility);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.2 });
    if (rootRef.current) observer.observe(rootRef.current);
    return () => { observer.disconnect(); preference.removeEventListener('change', updatePreference); document.removeEventListener('visibilitychange', updateVisibility); };
  }, []);

  useEffect(() => {
    if (!playing) return;
    const timer = window.setTimeout(() => {
      if (active === steps.length - 1) setPaused(true);
      else setActive(active + 1);
    }, 6500);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  function selectStep(index: number) {
    setActive(index);
    setPaused(true);
  }

  return <div ref={rootRef} className={`animated-guide${playing ? ' is-playing' : ''}`}>
    <div className="guide-toolbar">
      <div className="guide-position"><span className="guide-position-dot"/>Etapa <strong>{active + 1}</strong> de {steps.length}<span className="guide-status">{reduced ? 'Avance no seu ritmo' : playing ? 'Acompanhe o passo a passo' : 'Avance quando quiser'}</span></div>
      <div className="guide-controls">
        <button aria-label="Etapa anterior" disabled={active === 0} onClick={() => selectStep(active - 1)}><ChevronLeft size={17}/></button>
        {!reduced && <button className="guide-play" onClick={() => { if (active === steps.length - 1 && paused) setActive(0); setPaused(!paused); }} aria-label={playing ? 'Pausar passo a passo' : 'Reproduzir passo a passo'}>{playing ? <Pause size={14}/> : active === steps.length - 1 ? <RotateCcw size={14}/> : <Play size={14}/>}<span>{playing ? 'Pausar' : active === steps.length - 1 ? 'Rever' : 'Iniciar tour'}</span></button>}
        <button aria-label="Próxima etapa" disabled={active === steps.length - 1} onClick={() => selectStep(active + 1)}><ChevronRight size={17}/></button>
      </div>
    </div>
    <div className="guide-workspace">
      <nav className="guide-rail" aria-label="Etapas do guia de rematrícula">
        <p className="guide-rail-label">Explore o processo</p>
        <ol>{steps.map(([title], index) => {
          const Icon = icons[index];
          return <li key={title}><button className={active === index ? 'is-selected' : ''} onClick={() => selectStep(index)} aria-current={active === index ? 'step' : undefined} aria-controls="guide-screen-panel" aria-label={`Etapa ${index + 1}: ${title}`}>
            <span className="guide-rail-number">{String(index + 1).padStart(2, '0')}</span><Icon size={18}/><span>{title}</span><ChevronRight size={15}/>
            {active === index && playing && <span className="guide-rail-progress" key={active}/>}
          </button></li>;
        })}</ol>
        <div className="guide-rail-note"><Check size={16}/><p>Consulte seu prazo no calendário e faça o procedimento para cada filho.</p></div>
      </nav>
      <div id="guide-screen-panel" className="guide-screen-panel"><StepPreview key={active} active={active}/><div className="guide-panel-navigation"><button onClick={() => selectStep(active - 1)} disabled={active === 0}><ChevronLeft size={16}/> Anterior</button><span>{String(active + 1).padStart(2, '0')} / 07</span><button onClick={() => selectStep(active + 1)} disabled={active === steps.length - 1}>Próxima etapa <ChevronRight size={16}/></button></div></div>
    </div>
  </div>;
}
