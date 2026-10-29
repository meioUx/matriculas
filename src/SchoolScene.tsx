import { useState } from 'react';
import { CalendarDays, CheckCircle2, Pause, Play } from 'lucide-react';
import './school-scene.css';
import { useSiteMotionPaused } from './SiteMotion';

export function SchoolScene() {
  const [paused, setPaused] = useState(false);
  const sitePaused = useSiteMotionPaused();
  return <div className={`hero-art campus-art${paused || sitePaused ? ' is-paused' : ''}`}>
    <svg className="campus-illustration" viewBox="0 0 520 400" role="img" aria-labelledby="campus-title campus-description">
      <title id="campus-title">Um novo ano na escola</title>
      <desc id="campus-description">Escola com fachada azul, portas abertas, árvores e jardim. Nuvens passeiam pelo céu e a bandeira se move com a brisa.</desc>
      <defs>
        <linearGradient id="campus-sky" x1="0" y1="0" x2="0.7" y2="1"><stop stopColor="#dfecfa"/><stop offset="1" stopColor="#f0f6fc"/></linearGradient>
        <linearGradient id="campus-roof" x2="0" y2="1"><stop stopColor="#3568ab"/><stop offset="1" stopColor="#214b8b"/></linearGradient>
        <linearGradient id="campus-glass" x2="1" y2="1"><stop stopColor="#a2cee8"/><stop offset="1" stopColor="#d4eaf5"/></linearGradient>
        <linearGradient id="campus-facade" x2="0" y2="1"><stop stopColor="#fffef8"/><stop offset="1" stopColor="#f2ecd9"/></linearGradient>
        <filter id="campus-shadow" x="-30%" y="-30%" width="160%" height="180%"><feDropShadow dx="0" dy="9" stdDeviation="10" floodColor="#315581" floodOpacity=".12"/></filter>
        <g id="campus-window"><rect width="33" height="43" rx="4" fill="#5a7fa5"/><rect x="3" y="3" width="27" height="36" rx="2" fill="url(#campus-glass)"/><path d="M5 26L26 5M11 37L29 19" stroke="#fff" strokeWidth="4" opacity=".4"/><path d="M16.5 3V40M3 21H30" stroke="#fffdf4" strokeWidth="3"/><rect x="-3" y="41" width="39" height="5" rx="2" fill="#d2d9df"/></g>
        <g id="campus-flower"><path d="M0 0V12M0 7L-4 4" fill="none" stroke="#6a8f63" strokeWidth="1.7"/><circle cy="-2" r="4" fill="#efc654"/><circle cy="-2" r="1.5" fill="#b68136"/></g>
      </defs>
      <path d="M70 222C33 137 95 50 192 40C283 4 432 45 460 139C501 241 438 322 319 331C208 356 104 318 70 222Z" fill="url(#campus-sky)"/>
      <circle cx="408" cy="86" r="29" fill="#f4cf66"/>
      <circle className="campus-sun-ring" cx="408" cy="86" r="39" fill="none" stroke="#ecc65c" strokeWidth="1.5" strokeDasharray="2 10"/>
      <g className="campus-cloud cloud-left" fill="#fff"><path d="M84 106H151C166 106 166 88 152 87C149 63 119 63 114 82C95 73 81 86 84 94C73 94 73 106 84 106Z"/></g>
      <g className="campus-cloud cloud-right" fill="#fff" opacity=".9"><path d="M323 136H373C383 136 384 123 374 121C370 104 348 103 342 119C325 112 315 124 323 128C315 128 316 136 323 136Z"/></g>
      <g className="campus-birds" fill="none" stroke="#7294b9" strokeWidth="2.4" strokeLinecap="round"><path d="M194 93Q200 86 206 93Q212 86 218 93"/><path d="M221 78Q225 73 230 78Q235 73 240 78"/></g>
      <ellipse cx="265" cy="327" rx="214" ry="27" fill="#cadcce"/>
      <ellipse cx="263" cy="321" rx="205" ry="23" fill="#dce9d8"/>
      <path d="M248 304H279L311 349Q264 357 220 347Z" fill="#e9ddbf"/>
      <path d="M254 320H281M249 331H288M241 343H297" stroke="#d3c6aa" strokeWidth="2"/>
      <g filter="url(#campus-shadow)">
        <path d="M113 192L139 183H389V307L371 318H113Z" fill="#ddd8c8"/>
        <rect x="112" y="187" width="257" height="124" rx="4" fill="url(#campus-facade)"/>
        <path d="M103 185L239 123L378 184V195H103Z" fill="url(#campus-roof)"/>
        <path d="M103 185L239 123L378 184" fill="none" stroke="#527db5" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M113 291H369V311H113Z" fill="#e4ddc6"/>
        <use href="#campus-window" x="131" y="224"/><use href="#campus-window" x="180" y="224"/>
        <use href="#campus-window" x="279" y="224"/><use href="#campus-window" x="328" y="224"/>
        <rect x="215" y="195" width="56" height="116" rx="3" fill="#fffdf7"/>
        <rect x="219" y="252" width="49" height="59" rx="4" fill="#183e72"/>
        <path d="M219 254L236 259V311H219Z" fill="#dbb253"/><path d="M268 254L251 259V311H268Z" fill="#efcd79"/>
        <path d="M236 259V311M251 259V311" stroke="#af8935" strokeWidth="1.5"/><circle cx="230" cy="284" r="2" fill="#8a6831"/><circle cx="257" cy="284" r="2" fill="#8a6831"/>
        <rect x="207" y="306" width="69" height="7" rx="2" fill="#c4cbd1"/><rect x="202" y="313" width="79" height="7" rx="2" fill="#dce1e4"/>
        <rect x="188" y="199" width="111" height="19" rx="4" fill="#edf3fb"/>
        <text x="243" y="212" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="9" letterSpacing="2.2" fontWeight="700" fill="#315c91">BC EDUCAR</text>
        <circle cx="240" cy="165" r="13" fill="#f7f9fd" stroke="#7b9bc0" strokeWidth="2"/>
        <path d="M240 157V165L246 168" stroke="#315c91" strokeWidth="2" fill="none" strokeLinecap="round"/>
      </g>
      <path d="M240 123V81" stroke="#6e86a2" strokeWidth="2.5"/>
      <g className="campus-flag"><path d="M241 82C252 75 261 88 275 81V102C261 110 252 96 241 103Z" fill="#f0c44f"/><path d="M243 87C253 82 262 94 272 87V93C260 100 252 89 243 94Z" fill="#fff0b7" opacity=".6"/></g>
      <g className="campus-tree tree-west"><path d="M84 240V321" stroke="#927b5c" strokeWidth="8" strokeLinecap="round"/><path d="M84 280L67 267M84 270L98 253" stroke="#927b5c" strokeWidth="4" fill="none" strokeLinecap="round"/><g className="campus-leaves"><path d="M48 246C26 228 44 202 57 197C49 176 71 156 89 166C111 152 128 175 120 194C142 209 127 240 111 242C104 266 65 271 48 246Z" fill="#71966f"/><path d="M53 218C46 197 68 180 82 185C77 170 91 166 97 169C115 168 125 183 120 195C138 211 122 232 108 232C86 247 65 234 53 218Z" fill="#88aa7e"/><path d="M84 252V210M84 234L68 221M85 225L99 210" stroke="#5b835c" strokeWidth="2" opacity=".7" fill="none" strokeLinecap="round"/></g></g>
      <g className="campus-tree tree-east"><path d="M419 261V321" stroke="#927b5c" strokeWidth="7" strokeLinecap="round"/><g className="campus-leaves"><path d="M390 268C371 250 389 227 393 224C385 200 409 188 421 201C441 189 459 211 449 226C470 242 453 267 441 268C430 283 401 284 390 268Z" fill="#658d72"/><path d="M396 239C384 223 400 204 411 207C425 194 447 207 445 224C458 240 446 253 434 253C422 265 399 257 396 239Z" fill="#81a58a"/><path d="M419 269V227M419 251L431 238" fill="none" stroke="#557d61" strokeWidth="2" opacity=".6" strokeLinecap="round"/></g></g>
      <g fill="#88a87a"><ellipse cx="142" cy="313" rx="23" ry="10"/><ellipse cx="335" cy="313" rx="25" ry="10"/></g>
      <g className="campus-flowers"><use href="#campus-flower" x="127" y="299"/><use href="#campus-flower" x="146" y="303"/><use href="#campus-flower" x="331" y="300"/><use href="#campus-flower" x="347" y="302"/></g>
      <g stroke="#99b18e" strokeWidth="2" strokeLinecap="round"><path d="M67 329L64 323M67 329L70 322M385 332L382 327M385 332L389 325M171 333L169 328"/></g>
      <g className="campus-paper-plane"><path d="M126 137L162 121L148 150L141 139Z" fill="#fff" stroke="#89a7ca" strokeWidth="1.2" strokeLinejoin="round"/><path d="M141 139L162 121L145 142L148 150" fill="#d3e2f3" stroke="#89a7ca" strokeWidth="1" strokeLinejoin="round"/><path d="M102 152Q113 141 122 144" stroke="#a5bbd6" strokeWidth="1.4" strokeDasharray="3 4" fill="none"/></g>
      <g className="campus-butterfly"><g className="campus-butterfly-wing"><path d="M370 288C352 270 351 296 370 292C352 298 363 309 371 293" fill="#edc65a"/></g><path d="M371 288C381 276 390 292 373 293C385 294 383 305 372 294" fill="#e9b744"/><path d="M370 286L373 297" stroke="#95793c" strokeWidth="1.8" strokeLinecap="round"/></g>
      <g className="campus-child"><ellipse cx="184" cy="324" rx="9" ry="2.5" fill="#b5cbb4"/><path d="M181 310L179 322M187 310L190 322" stroke="#456386" strokeWidth="4" strokeLinecap="round"/><rect x="177" y="293" width="14" height="18" rx="5" fill="#e9bc50"/><rect x="174" y="296" width="5" height="12" rx="2" fill="#6586b2"/><path d="M189 298L196 294" stroke="#bf8d65" strokeWidth="3.5" strokeLinecap="round"/><circle cx="184" cy="285" r="7" fill="#cc9b77"/><path d="M177 285Q174 274 185 276Q194 277 191 284L186 280L177 285" fill="#594b40"/></g>
      <g className="campus-child second-child"><ellipse cx="305" cy="325" rx="9" ry="2.5" fill="#b5cbb4"/><path d="M302 312L300 323M308 312L310 323" stroke="#6a7190" strokeWidth="4" strokeLinecap="round"/><rect x="299" y="295" width="13" height="18" rx="4" fill="#7296c0"/><rect x="311" y="298" width="5" height="12" rx="2" fill="#e7b84e"/><path d="M300 300L293 296" stroke="#986d50" strokeWidth="3.5" strokeLinecap="round"/><circle cx="305" cy="287" r="7" fill="#a77a59"/><path d="M298 288Q294 277 304 277Q315 275 313 288L309 282L298 288" fill="#493f3a"/><circle cx="314" cy="286" r="3" fill="#493f3a"/></g>
      <g className="campus-spark" stroke="#c99b2b" strokeWidth="2" strokeLinecap="round"><path d="M60 141V151M55 146H65"/><path d="M461 176V184M457 180H465"/></g>
    </svg>
    <div className="campus-year"><span>A próxima etapa começa aqui</span><strong>2027<span>✦</span></strong><small>Aprender. Crescer. Descobrir.</small></div>
    <div className="campus-caption"><span className="campus-caption-icon"><CalendarDays size={22}/></span><div><strong>Cada etapa tem seu prazo</strong><span>Consulte o calendário do seu filho</span></div><CheckCircle2 size={19}/></div>
    <button className="campus-motion" disabled={sitePaused} onClick={() => setPaused(!paused)} aria-label={paused ? 'Reproduzir animação da escola' : 'Pausar animação da escola'} aria-pressed={paused}>{paused ? <Play size={13}/> : <Pause size={13}/>}<span>{paused ? 'Reproduzir' : 'Pausar animação'}</span></button>
  </div>;
}
