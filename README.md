# Harshit Srivastava — Portfolio

A static personal portfolio for `https://subsavage.github.io`. It uses HTML, CSS and JavaScript with no framework, package manager, backend or build step.

## Run locally

Open `index.html` in a browser, or serve the repository root with any static file server. The optional Google Fonts stylesheet has system fallbacks.

## Deploy to GitHub Pages

All site files, including `index.html`, are at the repository root. Asset URLs are relative (`./styles.css`, `./assets/...`), which is appropriate for the root `username.github.io` site.

1. In repository **Settings → Pages**, select **GitHub Actions** as the publishing source.
2. The workflow at `.github/workflows/pages.yml` uploads the repository root and deploys it when changes are pushed to the default branch. It can also be run manually from the default branch.
3. No dependency installation or production build command is required; the HTML, CSS, JavaScript and static assets are the production site.

## Update content

- Edit `content.js` for links, metrics, experience, product store links, projects, technical direction and skills.
- Replace `assets/Harshit-Srivastava-Resume.pdf` with the current resume, keeping that filename or updating the path in `content.js` and `index.html`.
- Add a project in the `projects` array in `content.js`; each project supports `title`, `kind`, `index`, `description`, `tags` and `details`. Extend `main.js` only when there is project media or case-study content ready to render.
- `styles.css` contains the visual system and responsive rules. `index.html` contains the semantic page structure and metadata.

Keep personal contributions and company/product metrics clearly distinguished when updating the content.
