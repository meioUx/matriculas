# BC Educar — Rematrícula 2027

Hotsite estático em React, TypeScript e Vite. Calendário por situação escolar, checklist sem coleta de dados, 18 perguntas frequentes, menu responsivo e ação fixa no celular. Edital fornecido e logotipo oficial incluídos em `public/`.

## Executar

Requer Node.js 22.6 ou superior.

```powershell
npm.cmd install
npm.cmd run dev
```

## Validar e gerar entrega

```powershell
npm.cmd test
npm.cmd run build
npm.cmd run preview -- --port 5173
```

Hospedar o conteúdo de `dist/` em um servidor de arquivos estáticos HTTPS. Não precisa de banco de dados nem autenticação. Caminhos de ativos pressupõem publicação na raiz do domínio; adaptar o `base` do Vite e os caminhos de arquivos se a publicação for em subdiretório.

## Configuração e aprovação antes de publicar

Editar `src/data.ts`:

- `siteConfig.portalUrl`: URL HTTPS definitiva do BC Educar, incluindo a rota pública confirmada pela Secretaria. Referências técnicas fornecidas: `/rematricula` e `/responsavel/entrar`; não são domínios públicos confirmados. Enquanto vazia, os botões abrem orientação de acesso, sem enviar a uma URL fictícia.
- `siteConfig.digitalUrl`: endereço fornecido, https://digital.bc.sc.gov.br. É o portal de apresentação do aplicativo, não um link direto presumido para rematrícula. Confirmar a disponibilidade do módulo com a Secretaria.
- `siteConfig.contentApproved`: manter `false` até validação institucional. Esse campo controla a faixa de revisão; não é um controle de implantação.
- Validar `deadlineWarning`, orientações técnicas, limites de arquivos, passos do sistema, reserva de vaga, consentimentos e perguntas frequentes com a Secretaria antes da publicação. A orientação de perda de prazo segue o item 3.1, alínea l, do edital: procurar imediatamente a escola, sem promessa de mesma vaga, escola ou turno.
- Contatos e política de privacidade não foram inventados. Incluir quando fornecidos.

`src/calendar.ts` centraliza os seis cronogramas. Datas conferidas no item 3.1 do PDF fornecido, páginas 9–12. Estados de prazo calculados pela data de São Paulo, atualizados a cada minuto. “Dentro do período previsto” indica o calendário; não afirma disponibilidade técnica do sistema. Prazo de correção é independente do prazo de envio inicial. O seletor não determina elegibilidade automaticamente.

As informações técnicas do briefing foram usadas como conteúdo solicitado; o edital foi tratado como fonte documental. Não foi realizada publicação ou integração com dados de alunos.

## Acessibilidade e privacidade

HTML semântico, link para pular ao conteúdo, foco visível, seletor com rótulo, região de resultado anunciada, FAQ com `details/summary`, modal nativo com retenção e devolução de foco, preferência por movimento reduzido e espaço reservado para o botão fixo. Checklist apenas em memória da página, sem envio ou persistência. Não há analytics ou formulários de dados pessoais.

Verificação automatizada cobre seis períodos oficiais, limites de data no fuso de São Paulo e datas de correção entre meses. Build inclui verificação estrita de TypeScript. Uma auditoria WCAG completa e validação por leitores de tela permanecem recomendadas antes da divulgação oficial.

## Contatos das escolas

Preencher `src/schools.ts` com a lista oficial. Cada unidade contém `id`, `name`, `phone` opcional e `whatsapp` opcional (com código do país e DDD). Telefone gera link `tel:`; WhatsApp gera link `https://wa.me/`. Nenhuma mensagem é enviada automaticamente. Enquanto a lista estiver vazia, a seção anterior às dúvidas informa que os contatos estão em atualização. O FAQ concentra também mudança de escola, retenção, mais de um filho, perda de prazo e ajuda com o sistema.
