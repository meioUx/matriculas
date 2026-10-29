import { useState } from 'react';
import { ArrowRight, ChevronDown, CircleHelp } from 'lucide-react';
import { faqs } from './data';
import './faq.css';

const featuredIndexes = [2, 3, 5, 8, 11];
const featured = featuredIndexes.map(index => faqs[index]);
const remaining = faqs.filter((_, index) => !featuredIndexes.includes(index));

export function FAQ() {
  const [expanded, setExpanded] = useState(false);
  const question = ([title, answer]: string[]) => <details key={title} name="enrollment-faq"><summary>{title}</summary><p>{answer}</p></details>;
  return <section className="section faq-section compact-faq" id="duvidas">
    <div className="container compact-faq-grid">
      <div className="compact-faq-intro">
        <span className="section-kicker"><CircleHelp size={17}/> Dúvidas frequentes</span>
        <h2>Podemos ajudar?</h2>
        <p>Encontre aqui as principais respostas sobre a rematrícula.</p>
        <a href="#contato-escola" className="text-link">Falar com o setor de vagas <ArrowRight size={16}/></a>
      </div>
      <div className="compact-faq-content">
        <div className="faq-list">{featured.map(question)}<div id="more-faqs" hidden={!expanded}>{remaining.map(question)}</div></div>
        <button className="faq-toggle" aria-expanded={expanded} aria-controls="more-faqs" onClick={() => setExpanded(!expanded)}>{expanded ? 'Mostrar menos dúvidas' : 'Ver todas as dúvidas'}{!expanded && <span className="faq-count">+{remaining.length}</span>}<ChevronDown size={16} className={expanded ? 'rotated' : ''}/></button>
      </div>
    </div>
  </section>;
}
