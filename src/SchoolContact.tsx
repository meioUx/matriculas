import { ArrowUpRight, Mail, MessageCircle } from 'lucide-react';
import './school-contact.css';

const message = 'Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20o%20Fila%20%C3%9Anica.';
const channels = [
  { name: 'Central de Vagas', phone: '(47) 99982-1995', digits: '5547999821995' },
  { name: 'Região Norte', phone: '(47) 99982-2317', digits: '5547999822317' },
  { name: 'Região Sul', phone: '(47) 99232-7947', digits: '5547992327947' },
];

export function SchoolContact() {
  return <section className="section school-contact-section" id="contato-escola" aria-labelledby="vacancies-contact-title">
    <div className="container school-contact-block">
      <div className="school-contact-intro"><span className="school-contact-icon"><MessageCircle size={27}/></span><div><span className="section-kicker">Canais de Atendimento</span><h2 id="vacancies-contact-title">Dúvidas? Fale com o setor de vagas</h2><p>Entre em contato pelo WhatsApp da Central de Vagas ou da sua região, ou envie um e-mail.</p></div></div>
      <div className="vacancies-contact-channels">
        {channels.map(channel => <a key={channel.digits} className="vacancies-contact-link" href={`https://wa.me/${channel.digits}?text=${message}`} target="_blank" rel="noreferrer"><MessageCircle size={20}/><span><strong>{channel.name} <small>(WhatsApp)</small></strong><span>{channel.phone}</span></span><ArrowUpRight size={17}/><span className="sr-only"> (abre em nova aba)</span></a>)}
        <a className="vacancies-contact-link" href="mailto:vagas@edu.bc.sc.gov.br"><Mail size={20}/><span><strong>E-mail Oficial</strong><span>vagas@edu.bc.sc.gov.br</span></span><ArrowUpRight size={17}/></a>
      </div>
    </div>
  </section>;
}
