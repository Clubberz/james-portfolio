# James Clubley – Engineering Portfolio

A lightweight React + Vite + Tailwind site ready for GitHub Pages.

## Local dev
1. Install Node.js 20+
2. Install deps: `npm install`
3. Run dev server: `npm run dev`

## Configure for GitHub Pages
- Rename the repo to whatever you like, e.g. `jamesclubley-portfolio`.
- In `vite.config.js`, set:
  ```js
  base: '/REPO_NAME/'
  ```
  Replace `REPO_NAME` with your repo name.
- Commit and push to `main`.

## Deploy (GitHub Actions)
- This repo includes `.github/workflows/deploy.yml` which builds `npm run build` and publishes `/dist` to Pages.
- On first push to `main`, the workflow will run automatically.
- In GitHub → Settings → Pages, set **Source** to **GitHub Actions** (if not already).

## Custom domain (optional)
- In GitHub → Settings → Pages, add your domain (e.g., `jamesclubley.com`).
- Create a `CNAME` file in the project root with just the domain name inside, commit it, and push.
- In your DNS, create an `ALIAS`/`A` to GitHub Pages or follow GitHub instructions for apex/subdomain.

## Resume
- Put your PDF at `/public/resume.pdf` (create `public/` folder) and set `RESUME_URL = '/resume.pdf'` in `src/App.jsx`.

## Notes
- If assets don’t load on Pages, double-check the `base` option in `vite.config.js`.
- To test the production build locally: `npm run build && npm run preview`.
