import { ArrowUpRight, CheckCircle2, Smartphone } from 'lucide-react';
import { siteConfig } from './data';
import './app-download.css';
import { PhoneGallery } from './PhoneGallery';

export function AppDownload() {
  return <section className="section app-download-section" id="bc-digital">
    <div className="container app-download-grid">
      <div className="app-download-copy">
        <span className="section-kicker"><Smartphone size={17}/> A Prefeitura na palma da sua mão</span>
        <h2>Baixe o BC Digital.</h2>
        <p>Mais praticidade para acompanhar os serviços do município. O módulo de rematrícula também estará disponível no aplicativo, conforme o calendário oficial.</p>
        <div className="app-download-benefits"><span><CheckCircle2 size={17}/> Download gratuito</span><span><Smartphone size={17}/> Para Android e iPhone</span></div>
        <div className="app-store-links">
          <a href={siteConfig.playStoreUrl} target="_blank" rel="noreferrer" className="app-store-badge" aria-label="Baixar BC Digital no Google Play (abre em nova aba)"><img src="/google-play-logo.svg" alt="" width="27" height="30"/><span><small>Disponível no</small><strong>Google Play</strong></span></a>
          <a href={siteConfig.appStoreUrl} target="_blank" rel="noreferrer" className="app-store-badge" aria-label="Baixar BC Digital na App Store (abre em nova aba)"><img src="/apple-logo.svg" alt="" width="26" height="31"/><span><small>Baixar na</small><strong>App Store</strong></span></a>
        </div>
        <a className="text-link download-site-link" href={siteConfig.digitalUrl} target="_blank" rel="noreferrer">Conheça o BC Digital <ArrowUpRight size={16}/><span className="sr-only"> (abre em nova aba)</span></a>
      </div>
      <div className="app-download-visual">
        <PhoneGallery/>
      </div>
    </div>
  </section>;
}
