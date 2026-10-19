# Harshit Srivastava — Portfolio

Static portfolio for `https://subsavage.github.io`, built from a small content file and HTML template. It has no framework, runtime JavaScript, backend, or third-party build dependencies.

## Build and preview

Requires Node.js 24 or newer. From the repository root:

```sh
node build.mjs
```

The production site is written to `dist/`. Serve that directory with any static server to preview the generated page. The deployed HTML includes the experience, projects and skills in its initial source; it does not depend on browser-side rendering.

## Deploy

The existing GitHub Pages Actions workflow builds the static output and deploys `dist/` from the repository's default branch. In **Settings → Pages**, choose **GitHub Actions** as the publishing source. No package install step is needed.

## Update content

- Edit `content.js` for profile details, links, proof points, experience, projects, technical direction and skills.
- Edit `index.template.html` for page structure and metadata. `index.html` is also refreshed with rendered content by the build, so it can be previewed directly.
- Edit `styles.css` for the visual system and responsive layout.
- Replace `assets/Harshit-Srivastava-Resume.pdf` with the latest resume, keeping that filename or updating `content.js` and the header link in `index.html`.
- Add a project to the `projects` array in `content.js`. Each project supports a title, status, description, tags and distinct technical detail.
- `robots.txt` and `sitemap.xml` are copied into the production output by `build.mjs`.

Run `node build.mjs` after content or template edits to refresh `dist/`.
