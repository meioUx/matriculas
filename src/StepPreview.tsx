import { CheckCircle2, Clock3, FileText, GraduationCap, Image, ShieldCheck, Upload } from 'lucide-react';
import { steps } from './data';
import './step-preview.css';

function DemoField({ label, value }: { label: string; value: string }) {
  return <div className="tutorial-field"><span>{label}</span><div>{value || ' '}</div></div>;
}

function LoginPreview({ portal = false }: { portal?: boolean }) {
  return <>{portal && <div className="tutorial-portal-brand"><GraduationCap/><div><strong>BC Matrículas</strong><small>Secretaria de Educação de Balneário Camboriú</small></div><img src="/logo-governo.png" alt=""/></div>}<div className="tutorial-panel login-panel"><small>Já tem uma conta?</small><h4>Seu próximo passo<br/>começa por aqui.</h4><p>Entre no Painel do responsável para acompanhar seus filhos.</p><DemoField label="E-mail" value={portal ? '' : 'responsavel@exemplo.com'}/><DemoField label="Senha" value="••••••••"/><span className="tutorial-demo-button">Entrar no painel</span><span className="tutorial-forgot">Esqueci minha senha</span>{!portal && <><div className="tutorial-or">ou entre com</div><div className="tutorial-gov"><strong>gov.br</strong><span>Disponível em breve</span></div><p className="tutorial-small">Por enquanto, utilize seu e-mail e senha para acessar.</p></>}</div></>;
}

function Screen({ step }: { step: number }) {
  if (step < 2) return <LoginPreview portal={step === 0}/>;
  if (step === 2) return <div className="tutorial-panel child-panel"><small>REMATRÍCULA 2027</small><h4>Aluno demonstrativo</h4><p>Unidade escolar do aluno</p><span className="tutorial-badge">Aguardando confirmação do responsável</span><p className="tutorial-small">Prazo: consulte o calendário da sua situação escolar.</p><span className="tutorial-demo-button">Iniciar ou continuar rematrícula</span></div>;
  if (step === 3) return <div className="tutorial-data-grid"><div className="tutorial-panel"><h5>Dados do aluno</h5><DemoField label="Nome do aluno" value="Aluno demonstrativo"/><DemoField label="Data de nascimento" value="Conferir no cadastro"/></div><div className="tutorial-panel"><h5>Responsável e contato</h5><DemoField label="Nome do responsável" value="Responsável demonstrativo"/><DemoField label="E-mail de contato" value="responsavel@exemplo.com"/><DemoField label="Telefone com DDD" value="Conferir no cadastro"/></div><div className="tutorial-panel"><h5>Endereço residencial</h5><DemoField label="Endereço" value="Confira seu endereço"/><DemoField label="Número" value=""/><DemoField label="Bairro" value=""/><DemoField label="Município" value="Balneário Camboriú — SC"/></div><div className="tutorial-panel"><h5>Autorização de uso de imagem</h5><Image size={25}/><p>Leia o termo completo e registre a sua escolha.</p><div className="tutorial-radio">○ Autorizo</div><div className="tutorial-radio">○ Não autorizo</div></div></div>;
  if (step === 4) return <div className="tutorial-panel"><h4>Documentos para rematrícula</h4><p>Confira os arquivos antes de enviar.</p>{['Comprovante de residência', 'Declaração Vacinal'].map((name, index) => <div className="tutorial-upload" key={name}><span className="tutorial-doc-number">{index + 1}</span><strong>{name}</strong><div><Upload size={15}/><span>documento-exemplo.pdf</span><CheckCircle2 size={15}/></div><small>Arquivo de exemplo · pronto para enviar</small></div>)}<p className="tutorial-small">Os dados e arquivos seguirão para conferência da escola.</p><span className="tutorial-demo-button">Enviar dados e documentos para análise</span></div>;
  if (step === 5) return <><div className="tutorial-panel tutorial-success"><small>DOCUMENTOS RECEBIDOS</small><Clock3 size={24}/><h4>Sua solicitação está em análise</h4><p>A escola vai conferir os dados e documentos enviados. Acompanhe as orientações pelo portal.</p></div><div className="tutorial-panel"><h4>Documentos enviados</h4>{['Comprovante de residência', 'Declaração Vacinal'].map(name => <div className="tutorial-document-row" key={name}><FileText size={19}/><strong>{name}</strong><span>Em análise</span></div>)}</div></>;
  return <div className="tutorial-panel tutorial-success"><small>RESULTADO</small><h4>Resultado da rematrícula</h4><div className="tutorial-result-status"><ShieldCheck size={22}/><strong>Vaga reservada na turma de destino — aguardando resultado e encerramento do ano</strong></div><div className="tutorial-destination"><span>Escola de destino</span><strong>Unidade informada no portal</strong><span>Série, turma e turno</span><strong>Consulte o resultado do aluno</strong></div><p>A efetivação da matrícula depende do resultado escolar final e do encerramento do ano letivo.</p><span className="tutorial-back">Voltar para Meus filhos</span></div>;
}

export function StepPreview({ active }: { active: number }) {
  return <div className={`tutorial-preview tutorial-preview-${active}`}>
    <div className="tutorial-browser"><div className="tutorial-browser-bar"><span/><span/><span/><small>BC Educar · Demonstração</small></div><div key={active} className="tutorial-screen"><div aria-hidden="true"><Screen step={active}/></div></div></div>
    <div className="tutorial-explanation"><span className="tutorial-step-label">Etapa {active + 1} de 7</span><h3>{steps[active][0]}</h3><p>{steps[active][1]}</p></div>
  </div>;
}
