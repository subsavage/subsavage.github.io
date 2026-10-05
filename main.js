(() => {
  const data = window.PORTFOLIO;
  const $ = (selector) => document.querySelector(selector);
  const safe = (s) => String(s).replace(/[&<>"']/g, (c) => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[c]));
  const link = (url, label) => `<a href="${safe(url)}" target="_blank" rel="noreferrer">${safe(label)} ↗</a>`;
  $('#hero-links').innerHTML = link(data.links.github, 'GitHub') + link(data.links.linkedin, 'LinkedIn') + `<a href="${safe(data.links.resume)}" target="_blank" rel="noreferrer">Resume ↗</a>`;
  $('#footer-links').innerHTML = link(data.links.github, 'GitHub') + link(data.links.linkedin, 'LinkedIn') + link(data.links.email, 'Email');
  $('#contact-link').href = data.links.email;
  $('#metrics').innerHTML = data.metrics.map(m => `<div class="metric"><strong>${safe(m.value)}</strong><span>${safe(m.label)}</span></div>`).join('');
  $('#experience-list').innerHTML = data.experience.map(e => `<article class="experience-item"><div class="experience-meta">${e.current ? '<span class="current-label">CURRENT</span>' : ''}<span class="date">${safe(e.dates)}</span>${safe(e.domain)}</div><div class="experience-main"><div><div class="company-line"><h3>${safe(e.company)}</h3><span class="role">${safe(e.role)}</span></div><p class="experience-domain">${safe(e.domain)}</p>${e.summary ? `<p class="experience-copy">${safe(e.summary)}</p>` : ''}<ul class="experience-points">${e.points.map(p => `<li>${safe(p)}</li>`).join('')}</ul>${e.note ? `<p class="nda-note">${safe(e.note)}</p>` : ''}${e.productLinks?.length ? `<div class="product-links"><span>LIVE PRODUCT</span>${e.productLinks.map(item => link(item.url, item.label)).join('')}</div>` : ''}</div>${e.signal ? `<aside class="experience-signal"><strong>${safe(e.signal)}</strong><span>${safe(e.signalLabel)}</span></aside>` : ''}<div class="tech-line">${safe(e.tech)}</div></div></article>`).join('');
  $('#pathway').innerHTML = data.pathway.map((step, i) => `<span class="path-step"><b>0${i+1}</b> ${safe(step)}</span>`).join('');
  $('#projects').innerHTML = data.projects.map(p => `<article class="project-card"><div class="project-top"><span class="project-kind">${safe(p.kind)}</span><span class="project-index">${safe(p.index)}</span></div><h3>${safe(p.title)}</h3><p>${safe(p.description)}</p><div class="project-tags">${p.tags.map(t => `<span>${safe(t)}</span>`).join('')}</div><p class="nda-note">${safe(p.details)}</p></article>`).join('');
  $('#skills').innerHTML = data.skills.map(s => `<div class="skill-row"><strong>${safe(s.category)}</strong><span>${safe(s.items)}</span></div>`).join('');
  $('#year').textContent = new Date().getFullYear();
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('reveal'); observer.unobserve(entry.target); } }), {threshold: 0.08});
    document.querySelectorAll('.experience-item,.project-card,.metric').forEach(el => observer.observe(el));
  }
})();
