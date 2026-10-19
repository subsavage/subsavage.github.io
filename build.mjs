import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = process.cwd();
const output = path.join(root, "dist");
const source = fs.readFileSync(path.join(root, "content.js"), "utf8");
const context = { window: {} };
vm.runInNewContext(source, context, { filename: "content.js" });
const data = context.window.PORTFOLIO;

if (!data?.profile?.name || !Array.isArray(data.experience) || !Array.isArray(data.proof)) {
  throw new Error("Portfolio content is missing required profile, experience, or proof data.");
}

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;"
}[character]));
const join = (items, render, separator = "") => items.map(render).join(separator);
const externalLink = (url, label, accessibleName) =>
  `<a href="${escapeHtml(url)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeHtml(accessibleName)}">${escapeHtml(label)} <span aria-hidden="true">↗</span></a>`;

const proofHtml = join(data.proof, (item) => `<article class="proof-item">
  <span class="proof-index">${escapeHtml(item.index)}</span>
  <strong class="proof-value">${escapeHtml(item.value)}</strong>
  <p class="proof-label">${escapeHtml(item.label)}</p>
  <p class="proof-context">${escapeHtml(item.context)}</p>
</article>`);

const experienceHtml = join(data.experience.slice(0, 3), (entry, index) => `<article class="experience-entry">
  <div class="entry-rail">
    <span class="entry-index">${String(index + 1).padStart(2, "0")} / 03</span>
    ${entry.current ? '<span class="current-label">CURRENT</span>' : ""}
    <span class="entry-date">${escapeHtml(entry.dates)}</span>
  </div>
  <div class="entry-main">
    <header class="entry-top"><h3>${escapeHtml(entry.company)}</h3><span class="entry-role">${escapeHtml(entry.role)}</span></header>
    <p class="entry-domain">${escapeHtml(entry.domain)}</p>
    <p class="entry-summary">${escapeHtml(entry.summary)}</p>
    <ul class="entry-points">${join(entry.points, (point) => `<li>${escapeHtml(point)}</li>`)}</ul>
    ${entry.note ? `<p class="nda-note">${escapeHtml(entry.note)}</p>` : ""}
    <div class="entry-details">
      <div class="tech-list" aria-label="Technologies">${join(entry.tech, (item) => `<span>${escapeHtml(item)}</span>`)}</div>
      ${entry.productLinks?.length ? `<nav class="product-links" aria-label="${escapeHtml(entry.company)} app listings"><span class="product-links-label">LIVE PRODUCT</span>${join(entry.productLinks, (item) => externalLink(item.url, item.label, `Open ${entry.company} on ${item.label} (opens in a new tab)`))}</nav>` : ""}
    </div>
  </div>
</article>`);

const earlier = data.experience.slice(3);
const earlierHtml = `<section class="earlier-block" aria-labelledby="earlier-title">
  <div class="earlier-heading"><h3 id="earlier-title">Earlier roles</h3><span>FOUNDATIONS</span></div>
  ${join(earlier, (entry) => `<article class="earlier-entry">
    <div class="earlier-meta">${escapeHtml(entry.dates)}</div>
    <div class="earlier-content"><h4>${escapeHtml(entry.company)}</h4><span class="earlier-role">${escapeHtml(entry.role)}</span><p>${join(entry.points, escapeHtml, " ")}</p></div>
  </article>`)}
</section>`;

const directionHtml = join(data.direction, (step, index) => `${index ? '<span class="direction-arrow" aria-hidden="true">→</span>' : ""}<span class="direction-step"><small>0${index + 1}</small>${escapeHtml(step)}</span>`);
const projectHtml = join(data.projects, (project) => `<article class="project-entry">
  <div><span class="project-index">${escapeHtml(project.index)}</span><span class="project-status">${escapeHtml(project.kind)}</span></div>
  <div class="project-main"><h3>${escapeHtml(project.title)}</h3><p>${escapeHtml(project.description)}</p><p class="project-detail">${escapeHtml(project.detail)}</p><div class="tech-list" aria-label="Technologies">${join(project.tags, (tag) => `<span>${escapeHtml(tag)}</span>`)}</div></div>
</article>`);
const skillsHtml = join(data.skills, (group) => `<div class="skill-row"><strong class="skill-category">${escapeHtml(group.category)}</strong><span class="skill-items">${join(group.items, escapeHtml, " · ")}</span></div>`);
const heroLinks = [
  externalLink(data.links.github, "GitHub", "Open Harshit’s GitHub profile (opens in a new tab)"),
  externalLink(data.links.linkedin, "LinkedIn", "Open Harshit’s LinkedIn profile (opens in a new tab)"),
  `<a href="${escapeHtml(data.links.resume)}" target="_blank" rel="noopener noreferrer">Resume <span aria-hidden="true">↗</span></a>`
].join("");
const footerLinks = [
  externalLink(data.links.github, "GitHub", "Open Harshit’s GitHub profile (opens in a new tab)"),
  externalLink(data.links.linkedin, "LinkedIn", "Open Harshit’s LinkedIn profile (opens in a new tab)"),
  `<a href="mailto:${escapeHtml(data.links.email)}">Email</a>`
].join("");

const sameAs = [data.links.github, data.links.linkedin];
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: data.profile.name,
  jobTitle: data.profile.role,
  description: data.profile.description,
  url: data.profile.url,
  email: data.links.email,
  sameAs
};
let html = fs.readFileSync(path.join(root, "index.template.html"), "utf8");
const title = `${data.profile.name} | ${data.profile.role}`;
html = html.replaceAll("{{JSON_LD}}", JSON.stringify(person).replace(/</g, "\\u003c"));
html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`);
html = html.replace(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${escapeHtml(data.profile.description)}">`);
html = html.replace(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${escapeHtml(title)}">`);
html = html.replace(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${escapeHtml(data.profile.description)}">`);
html = html.replace(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${escapeHtml(data.profile.url)}">`);
html = html.replace(/href="https:\/\/subsavage\.github\.io\/"/, `href="${escapeHtml(data.profile.url)}"`);
const replacements = [
  ["hero-links", heroLinks], ["proof-items", proofHtml], ["experience-list", experienceHtml + earlierHtml],
  ["direction-path", directionHtml], ["project-list", projectHtml], ["skills-list", skillsHtml], ["footer-links", footerLinks]
];
for (const [id, contents] of replacements) {
  const pattern = new RegExp(`(<[a-z][^>]*\\bid="${id}"[^>]*>)([\\s\\S]*?)(<\\/[a-z]+>)`, "i");
  const match = html.match(pattern);
  if (!match) throw new Error(`Missing HTML mount point: #${id}`);
  html = html.replace(pattern, `$1${contents}$3`);
}
html = html.replace('href="mailto:harshitproff4@gmail.com"', `href="mailto:${escapeHtml(data.links.email)}"`);
html = html.replace("© 2026 Harshit Srivastava", `© ${new Date().getFullYear()} ${escapeHtml(data.profile.name)}`);

fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
html = html.replace(/[ \\t]+$/gm, "");
fs.writeFileSync(path.join(output, "index.html"), html, "utf8");
fs.writeFileSync(path.join(root, "index.html"), html, "utf8");
fs.copyFileSync(path.join(root, "styles.css"), path.join(output, "styles.css"));
fs.copyFileSync(path.join(root, "favicon.svg"), path.join(output, "favicon.svg"));
fs.cpSync(path.join(root, "assets"), path.join(output, "assets"), { recursive: true });
for (const file of ["robots.txt", "sitemap.xml"]) fs.copyFileSync(path.join(root, file), path.join(output, file));
console.log(`Built ${data.profile.url} into dist/ (${data.experience.length} roles, ${data.proof.length} proof points, ${data.projects.length} project).`);

