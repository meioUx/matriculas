import { BatteryFull, CalendarCheck2, Check, ChevronLeft, ChevronRight, FileSearch, GraduationCap, Home, Info, Settings, Star, UserRoundPlus, Wifi } from 'lucide-react';
import './phone-gallery.css';
import './phone-screens.css';

function AppScreen({ confirmation = false }: { confirmation?: boolean }) {
  return <div className="bc-screen" aria-hidden="true">
    <div className="bc-screen-status"><b>11:38</b><span><Wifi/><BatteryFull/></span></div>
    <div className="bc-screen-header"><div className="bc-screen-brand"><img src="/logo-app.png" alt=""/><Settings/></div><div className="bc-screen-title"><ChevronLeft/>{confirmation ? 'REMATRÍCULA' : 'MATRÍCULAS'}</div></div>
    <div className="bc-screen-content">{confirmation ? <>
      <div className="bc-screen-progress"><span><Check/></span><i/><span>2</span><i/><span>3</span><i/><span>4</span><i/><span>5</span></div>
      <div className="bc-screen-stage">Etapa 2 de 5 · <b>Confirmação</b></div>
      <div className="bc-screen-card confirmation"><small>REMATRÍCULA 2027</small><h4>Aluno demonstrativo</h4><span className="bc-screen-pill">Aguardando confirmação do responsável</span><p><b>Prazo para confirmação e documentos:</b><br/>Consulte o calendário oficial</p><div className="bc-screen-school"><p>Escola de origem<strong>Unidade escolar</strong></p><p>Série atual<strong>1º ano</strong></p></div><p><b>Destino planejado:</b> conforme as regras da rede e a disponibilidade de vagas.</p></div>
      <div className="bc-screen-card confirmation"><small>CONFIRMAÇÃO DE INTERESSE</small><h4>Deseja renovar a matrícula para 2027?</h4><p>Depois da confirmação, você confere os dados e envia os documentos solicitados.</p><span className="bc-screen-submit">Confirmar interesse</span></div>
    </> : <><h4>Matrículas na rede municipal</h4><p>Renove a vaga de quem já estuda na rede ou inscreva um novo aluno nas escolas e creches de Balneário Camboriú.</p>{[
      { Icon: GraduationCap, title: 'Rematrícula', text: 'Confirme a continuidade do seu filho para o próximo ano e envie os documentos.' },
      { Icon: UserRoundPlus, title: 'Matrícula nova', text: 'Inscreva um aluno que ainda não estuda na rede municipal.' },
      { Icon: FileSearch, title: 'Consultar protocolo', text: 'Acompanhe a situação de uma inscrição já realizada.' },
    ].map(({ Icon, title, text }) => <div className="bc-screen-card" key={title}><span className="bc-screen-card-icon"><Icon/></span><div><h4>{title}</h4><p>{text}</p></div><ChevronRight/></div>)}<div className="bc-screen-notice"><Info/><span><b>Dados do cadastro escolar</b><br/>A rematrícula usa o CPF da sua conta.</span></div></>}</div>
    <div className="bc-screen-nav"><Home/><span><GraduationCap/></span><CalendarCheck2/><Star/></div>
  </div>;
}

export function PhoneGallery() {
  return <div className="phone-gallery dual-phone-gallery">
    <div className="phone-gallery-halo" aria-hidden="true"/>
    {[false, true].map(confirmation => <figure key={String(confirmation)} className={`phone-gallery-figure${confirmation ? ' phone-confirmation' : ' phone-matriculas'}`}>
      <div className="phone-device-frame"><span className="phone-device-speaker" aria-hidden="true"/><span className="phone-device-volume" aria-hidden="true"/><AppScreen confirmation={confirmation}/></div>

    </figure>)}
    <p className="phone-demo-caption">Telas demonstrativas baseadas nas referências do aplicativo.</p>
  </div>;
}
