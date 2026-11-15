/* Find Help page logic. Resource content lives in findhelp-data.js */
(function () {
  const UI = {
    en: {
      banner: 'Find Resources',
      intro: 'Free and low-cost help from our Austin community partners and more.',
      lead: 'Tap what you need. Then tap “More details” to see hours and what to bring.',
      searchPh: 'Search: shower, ID, walker, taxes…',
      search: 'Search',
      all: 'All',
      allTitle: 'All resources',
      results: n => `${n} resource${n === 1 ? '' : 's'}`,
      resultsFor: q => `Results for “${q}”`,
      clear: 'Clear',
      free: 'Free', spanish: 'Español', noid: 'No ID needed',
      fFree: 'Free only', fEs: 'Spanish spoken', fNoid: 'No ID needed',
      website: 'Website', flyer: 'See flyer', copy: 'Copy info', call: 'Call', map: 'Map', mapAria: 'Open in Google Maps', copied: 'Copied! Paste it into a text or email.',
      more: 'More details', less: 'Less',
      when: 'When', where: 'Where', who: 'Who can go', bring: 'What to bring', has: 'Includes', note: 'Good to know', contact: 'Contact',
      textLbl: 'Text', empty: 'Nothing matches yet. Try another word or',
      seeAll: 'see all resources',
      billsEyebrow: 'Charity Care 101',
      billsTitle: 'Your hospital bill may be forgivable.',
      billsLead: 'Nonprofit hospitals must offer financial aid. Dollar For applies for you, for free.',
      s1: ['$0', 'cost to you'], s2: ['240+', 'days to apply'], s3: ['15 min', 'to sign up'],
      check: 'Check if I qualify',
      q1: 'What should I have ready?',
      a1: ['Your hospital bill', 'Last tax return (or a non-filing letter)', '3 recent pay stubs', '3 months of bank statements', 'No job? A benefits letter or a short note on how you pay for basics'],
      q2: 'How does Dollar For help?',
      a2: ['Checks if you qualify', 'Fills out and sends the hospital application', 'Follows up weekly (about 5 weeks) until the hospital decides'],
      q3: 'Bills from doctors, labs or ambulances?',
      a3: 'Dollar For handles nonprofit hospital bills only. Once the hospital approves you, send that approval letter to your other billers and ask them to honor it.',
      q4: 'Not a U.S. citizen?',
      a4: 'You can still get help. Dollar For does not ask about citizenship or share it with hospitals.',
      q5: 'Austin hospital income limits',
      th: ['Hospital', 'Discount', 'Free', 'Days'],
      hosp: ['Most Ascension Seton', 'Most St. David’s', 'Most Baylor Scott & White'],
      fpl: 'FPL = Federal Poverty Level. Policies change, so always confirm with the hospital.',
      partnersTitle: 'Browse by organization',
      partnersLead: 'Tap an organization to see everything it offers. All information comes from each organization’s own flyers.',
      updated: d => `Last checked ${d}. Hours and services can change, so call ahead when you can.`,
      fix: 'Work at one of these organizations and have an update? Email',
      emergency: 'Emergency? Call 911'
    },
    es: {
      banner: 'Encuentre Recursos',
      intro: 'Ayuda gratis o de bajo costo de nuestros socios comunitarios en Austin y más.',
      lead: 'Toque lo que necesita. Luego toque “Más detalles” para ver horarios y qué llevar.',
      searchPh: 'Buscar: ducha, ID, andadera, impuestos…',
      search: 'Buscar',
      all: 'Todo',
      allTitle: 'Todos los recursos',
      results: n => `${n} recurso${n === 1 ? '' : 's'}`,
      resultsFor: q => `Resultados para “${q}”`,
      clear: 'Borrar',
      free: 'Gratis', spanish: 'Español', noid: 'Sin ID',
      fFree: 'Solo gratis', fEs: 'Se habla español', fNoid: 'No necesita ID',
      website: 'Sitio web', flyer: 'Ver volante', copy: 'Copiar info', call: 'Llamar', map: 'Mapa', mapAria: 'Abrir en Google Maps', copied: '¡Copiado! Péguelo en un texto o correo.',
      more: 'Más detalles', less: 'Menos',
      when: 'Cuándo', where: 'Dónde', who: 'Quién califica', bring: 'Qué llevar', has: 'Incluye', note: 'Importante', contact: 'Contacto',
      textLbl: 'Texto', empty: 'No hay resultados. Pruebe otra palabra o',
      seeAll: 'vea todos los recursos',
      billsEyebrow: 'Atención Caritativa',
      billsTitle: 'Su factura del hospital podría ser perdonada.',
      billsLead: 'Los hospitales sin fines de lucro deben ofrecer ayuda financiera. Dollar For presenta la solicitud por usted, gratis.',
      s1: ['$0', 'de costo para usted'], s2: ['240+', 'días para solicitar'], s3: ['15 min', 'para inscribirse'],
      check: 'Ver si califico',
      q1: '¿Qué debo tener listo?',
      a1: ['Su factura del hospital', 'Su última declaración de impuestos (o carta de no declaración)', '3 talones de pago recientes', '3 meses de estados de cuenta', '¿Sin empleo? Una carta de beneficios o una nota sobre cómo paga sus gastos'],
      q2: '¿Cómo ayuda Dollar For?',
      a2: ['Revisa si usted califica', 'Llena y envía la solicitud al hospital', 'Da seguimiento semanal (unas 5 semanas) hasta que el hospital decida'],
      q3: '¿Facturas de doctores, laboratorios o ambulancias?',
      a3: 'Dollar For solo ayuda con facturas de hospitales sin fines de lucro. Cuando el hospital le apruebe, envíe esa carta de aprobación a los demás cobradores y pídales que la respeten.',
      q4: '¿No es ciudadano de EE. UU.?',
      a4: 'Igual puede recibir ayuda. Dollar For no pregunta por la ciudadanía ni la comparte con los hospitales.',
      q5: 'Límites de ingresos en hospitales de Austin',
      th: ['Hospital', 'Descuento', 'Gratis', 'Días'],
      hosp: ['La mayoría de Ascension Seton', 'La mayoría de St. David’s', 'La mayoría de Baylor Scott & White'],
      fpl: 'FPL = Nivel Federal de Pobreza. Las políticas cambian; confirme siempre con el hospital.',
      partnersTitle: 'Buscar por organización',
      partnersLead: 'Toque una organización para ver todo lo que ofrece. Toda la información viene de los volantes de cada organización.',
      updated: d => `Revisado en ${d}. Los horarios y servicios pueden cambiar; llame antes si puede.`,
      fix: '¿Trabaja en una de estas organizaciones y tiene una actualización? Escriba a',
      emergency: '¿Emergencia? Llame al 911'
    }
  };

  const ICONS = {
    bill: '<path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6M9 13h6M9 17h6"/>',
    steth: '<path d="M6 3v6a4 4 0 0 0 8 0V3"/><path d="M10 13v3a5 5 0 0 0 10 0v-2"/><circle cx="20" cy="12" r="2"/>',
    food: '<path d="M4 11h16a8 8 0 0 1-16 0z"/><path d="M8 7c0-2 2-2 2-4M12 7c0-2 2-2 2-4"/>',
    home: '<path d="M3 11l9-7 9 7"/><path d="M5 10v10h14V10"/><path d="M10 20v-6h4v6"/>',
    shower: '<path d="M4 20V8a4 4 0 0 1 8 0"/><path d="M9 8h6"/><path d="M11 12v1M14 12v1M17 12v1M12 16v1M15 16v1M18 16v1"/>',
    coin: '<circle cx="12" cy="12" r="9"/><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.7 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2"/>',
    elder: '<circle cx="11" cy="5" r="2.5"/><path d="M11 8v6l-3 7M11 14l3 7M8 11h6M17 11v10"/>',
    family: '<circle cx="8" cy="7" r="2.5"/><circle cx="16" cy="9" r="2"/><path d="M3 20v-2a5 5 0 0 1 10 0v2M13 20v-1.5a3.5 3.5 0 0 1 7 0V20"/>',
    laptop: '<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>',
    all: '<rect x="4" y="4" width="7" height="7" rx="1.5"/><rect x="13" y="4" width="7" height="7" rx="1.5"/><rect x="4" y="13" width="7" height="7" rx="1.5"/><rect x="13" y="13" width="7" height="7" rx="1.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
    web: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/>',
    flyer: '<path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5M8.5 13h7M8.5 17h5"/>',
    copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>',
    pin: '<path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z"/><circle cx="12" cy="10" r="2.5"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    user: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
    bag: '<path d="M5 8h14l-1 13H6z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/>',
    list: '<path d="M9 6h11M9 12h11M9 18h11"/><circle cx="4.5" cy="6" r="1"/><circle cx="4.5" cy="12" r="1"/><circle cx="4.5" cy="18" r="1"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>',
    chev: '<path d="M6 9l6 6 6-6"/>',
    search: '<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'
  };
  const svg = (k, s = 20) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const $ = id => document.getElementById(id);
  // Turn "Prosper Center North: 601 W Braker Ln, Austin, TX 78753 · 512-…" into a clean street address for Google Maps
  const cleanAddr = a => a.replace(/^[^:\d]*:\s*(?=\d)/, '').split(' · ')[0].trim();
  const FLYER_BASE = window.FH_FLYER_BASE || '../coderesources/flyers/';
  const flyerUrl = r => { const f = r.flyer; if (!f) return ''; const name = typeof f === 'string' ? f : (f[lang] || f.en); return FLYER_BASE + name; };
  const mapUrl = a => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(cleanAddr(a));

  let lang = 'en';
  try { lang = localStorage.getItem('fh-lang') || ((navigator.language || '').toLowerCase().startsWith('es') ? 'es' : 'en'); } catch (e) {}
  const state = { cat: 'all', org: '', q: '', free: false, spanish: false, noid: false };
  const T = () => UI[lang];

  /* ---------- static text ---------- */
  function paintStatic() {
    const t = T();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-t]').forEach(el => {
      const v = t[el.dataset.t];
      if (typeof v === 'string') el.textContent = v;
    });
    $('fh-q').placeholder = t.searchPh;
    document.querySelectorAll('.fh-lang button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    document.querySelectorAll('.fh-filter').forEach(b => { b.textContent = t[b.dataset.label]; });

    $('fh-tiles').innerHTML = FH_CATS.map(c => `
      <button class="fh-tile" data-cat="${c.id}" aria-pressed="false"><span class="ic">${svg(c.icon, 24)}</span><b>${c[lang][0]}</b><small>${c[lang][1]}</small></button>`).join('');
    $('fh-chips').innerHTML = `<button class="fh-chip" data-cat="all">${svg('all', 16)}${t.all}</button>` +
      FH_CATS.map(c => `<button class="fh-chip" data-cat="${c.id}">${svg(c.icon, 16)}${c[lang][0]}</button>`).join('');
    $('fh-plist').innerHTML = Object.entries(FH_ORGS).map(([k, o]) => {
      const ini = o.name.replace(/[’'.&]/g, '').split(/\s+/).filter(w => /^[A-Z]/.test(w)).slice(0, 2).map(w => w[0]).join('');
      return `<button class="fh-p" data-org="${k}"><span class="mono">${ini}</span><span>${esc(o.name)}<small>${esc(o[lang])}</small></span></button>`;
    }).join('');

    const li = a => a.map(x => `<li>${esc(x)}</li>`).join('');
    $('fh-a1').innerHTML = `<ul>${li(t.a1)}</ul>`;
    $('fh-a2').innerHTML = `<ol>${li(t.a2)}</ol>`;
    $('fh-a3').textContent = t.a3;
    $('fh-a4').textContent = t.a4;
    $('fh-a5').innerHTML = `<table class="fh-elig"><thead><tr>${t.th.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>
      <tr><td>${t.hosp[0]}</td><td>≤400% FPL</td><td>≤250% FPL</td><td>240</td></tr>
      <tr><td>${t.hosp[1]}</td><td>≤500% FPL</td><td>≤200% FPL</td><td>365</td></tr>
      <tr><td>${t.hosp[2]}</td><td>≤200% FPL</td><td>—</td><td>365</td></tr></tbody></table>
      <p style="font-size:.82rem;margin-top:8px">${t.fpl}</p>`;
    [['fh-s1', 's1'], ['fh-s2', 's2'], ['fh-s3', 's3']].forEach(([id, k]) => { $(id).innerHTML = `<b>${t[k][0]}</b><span>${t[k][1]}</span>`; });
    $('fh-updated').textContent = t.updated(FH_UPDATED[lang]);
  }

  /* ---------- cards ---------- */
  function fact(icon, label, html) { return html ? `<div class="fh-fact">${svg(icon, 18)}<div><b>${label}</b>${html}</div></div>` : ''; }
  function card(r, i) {
    const t = T(), L = r[lang] || r.en, o = FH_ORGS[r.org];
    const tags = [r.free ? `<span class="fh-tag free">${t.free}</span>` : '', r.spanish ? `<span class="fh-tag es">${t.spanish}</span>` : '',
      ...(L.tags || []).map(x => `<span class="fh-tag">${esc(x)}</span>`)].join('');
    const tel = p => p.replace(/[^0-9]/g, '');
    const acts = [
      r.phone ? `<a class="fh-btn call" href="tel:${tel(r.phone)}" aria-label="${t.call} ${r.phone}">${svg('phone', 16)}${t.call} ${r.phone}</a>` : '',
      r.addr ? `<a class="fh-btn web" href="${mapUrl(r.addr[0])}" target="_blank" rel="noopener" aria-label="${t.mapAria}">${svg('pin', 16)}${t.map}</a>` : '',
      r.web ? `<a class="fh-btn web" href="${r.web}" target="_blank" rel="noopener">${svg('web', 15)}${t.website}</a>` : '',
      r.flyer ? `<a class="fh-btn web" href="${flyerUrl(r)}" target="_blank" rel="noopener">${svg('flyer', 16)}${t.flyer}</a>` : '',
      `<button class="fh-btn copy" data-copy="${i}">${svg('copy', 15)}${t.copy}</button>`
    ].join('');
    const contact = [
      r.phone && r.phoneNote ? `${r.phone} (${esc(r.phoneNote[lang])})` : '',
      r.text ? `${t.textLbl}: ${r.text}` : '',
      r.email ? `<a href="mailto:${r.email}">${r.email}</a>` : '',
      r.web ? `<a href="${r.web}" target="_blank" rel="noopener">${esc(r.webText)}</a>` : ''
    ].filter(Boolean).join('<br>');
    const details = [
      fact('clock', t.when, L.when && esc(L.when)),
      fact('pin', t.where, r.addr && r.addr.map(a => `<a href="${mapUrl(a)}" target="_blank" rel="noopener" title="${t.mapAria}">${esc(a)}</a>`).join('<br>')),
      fact('user', t.who, L.who && esc(L.who)),
      fact('bag', t.bring, L.bring && esc(L.bring)),
      fact('list', t.has, L.has && ('<ul>' + L.has.map(h => `<li>${esc(h)}</li>`).join('') + '</ul>')),
      fact('info', t.note, L.note && esc(L.note)),
      fact('mail', t.contact, contact)
    ].join('');
    return `<article class="fh-card${r.featured ? ' featured' : ''}">
      <div class="fh-org">${esc(o.name)}</div>
      <h3>${esc(L.title)}</h3>
      <p class="fh-short">${esc(L.short)}</p>
      <div class="fh-tags">${tags}</div>
      <div class="fh-actions">${acts}</div>
      ${details ? `<details><summary>${svg('chev', 16)}<span class="m">${t.more}</span></summary><div class="fh-facts">${details}</div></details>` : ''}
    </article>`;
  }

  function haystack(r) {
    const parts = [FH_ORGS[r.org].name];
    ['en', 'es'].forEach(l => {
      const L = r[l]; if (!L) return;
      parts.push(L.title, L.short, L.who, L.when, L.bring, L.note, (L.has || []).join(' '), (L.tags || []).join(' '));
    });
    r.cats.forEach(c => { const C = FH_CATS.find(x => x.id === c); if (C) parts.push(C.en[0], C.es[0]); });
    parts.push((r.addr || []).join(' '));
    return parts.filter(Boolean).join(' ').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
  }
  FH_RESOURCES.forEach(r => { r._hay = haystack(r); });
  let current = [];

  function render() {
    const t = T();
    const words = state.q.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').split(/\s+/).filter(Boolean);
    current = FH_RESOURCES.filter(r =>
      (state.cat === 'all' || r.cats.includes(state.cat)) && (!state.org || r.org === state.org) &&
      (!state.free || r.free) && (!state.spanish || r.spanish) && (!state.noid || r.noid) &&
      words.every(w => r._hay.includes(w)));
    current.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

    const cat = FH_CATS.find(c => c.id === state.cat);
    $('fh-title').textContent = state.org ? FH_ORGS[state.org].name : state.q ? t.resultsFor(state.q) : cat ? cat[lang][0] : t.allTitle;
    $('fh-count').innerHTML = t.results(current.length) + ((state.q || state.org) ? ` · <button type="button" class="fh-link" data-clear>${t.clear}</button>` : '');
    $('fh-grid').innerHTML = current.length ? current.map(card).join('')
      : `<div class="fh-empty">${t.empty} <button type="button" class="fh-link" data-clear>${t.seeAll}</button>.</div>`;
    const plain = !state.org && !state.q;
    document.querySelectorAll('.fh-chip').forEach(c => c.setAttribute('aria-pressed', String(plain && c.dataset.cat === state.cat)));
    document.querySelectorAll('.fh-tile').forEach(c => c.setAttribute('aria-pressed', String(plain && c.dataset.cat === state.cat)));
  }

  function go(opts, scroll = true) {
    state.cat = opts.cat || 'all'; state.org = opts.org || ''; state.q = opts.q || '';
    if (!state.q) $('fh-q').value = '';
    try { history.replaceState(null, '', state.cat !== 'all' && !state.org && !state.q ? '#' + state.cat : location.pathname); } catch (e) {}
    render();
    if (scroll) $('fh-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function copyText(r) {
    const t = T(), L = r[lang] || r.en;
    return [L.title + ' (' + FH_ORGS[r.org].name + ')', r.phone && '☎ ' + r.phone, r.text && t.textLbl + ': ' + r.text,
      r.addr && r.addr.join(' / '), L.when && t.when + ': ' + L.when, L.bring && t.bring + ': ' + L.bring, r.web, r.email]
      .filter(Boolean).join('\n');
  }
  function toast(msg) { const el = $('fh-toast'); el.textContent = msg; el.classList.add('show'); setTimeout(() => el.classList.remove('show'), 2400); }
  function doCopy(txt) {
    const ok = () => toast(T().copied);
    const fallback = () => { const ta = document.createElement('textarea'); ta.value = txt; document.body.appendChild(ta); ta.select(); try { document.execCommand('copy'); ok(); } catch (e) {} ta.remove(); };
    if (navigator.clipboard) navigator.clipboard.writeText(txt).then(ok).catch(fallback); else fallback();
  }

  /* ---------- events ---------- */
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-cat],[data-org],[data-clear],[data-copy],[data-lang],.fh-filter,[data-jump]');
    if (!el || !el.closest('.fh')) return;
    if (el.dataset.lang) {
      lang = el.dataset.lang; try { localStorage.setItem('fh-lang', lang); } catch (x) {}
      paintStatic(); render(); return;
    }
    e.preventDefault();
    if (el.dataset.cat) go({ cat: el.dataset.cat });
    else if (el.dataset.org) go({ org: el.dataset.org });
    else if (el.dataset.jump) go({ cat: el.dataset.jump });
    else if (el.hasAttribute('data-clear')) go({ cat: 'all' });
    else if (el.dataset.copy) doCopy(copyText(current[+el.dataset.copy]));
    else if (el.classList.contains('fh-filter')) {
      const f = el.dataset.f; state[f] = !state[f]; el.setAttribute('aria-pressed', String(state[f])); render();
    }
  });
  $('fh-search').addEventListener('submit', e => { e.preventDefault(); go({ q: $('fh-q').value.trim() }); });
  window.addEventListener('hashchange', () => { const h = location.hash.slice(1); if (FH_CATS.some(c => c.id === h)) go({ cat: h }); });

  paintStatic();
  const start = location.hash.slice(1);
  if (FH_CATS.some(c => c.id === start)) go({ cat: start }); else render();
})();
