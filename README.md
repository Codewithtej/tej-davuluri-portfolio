# Tej Davuluri Portfolio

A self-contained, animated career portfolio for Tej Davuluri. It presents professional experience as an interactive exponential career graph, rotating recommendations, technical projects, photography, personal interests and recruiter contact options.

## Live design

The repository is a portable Vite and React implementation of the completed portfolio. All required photographs, company logos and the résumé are stored inside the repository. The built site does not depend on the original Wix image URLs or the previous hosting platform.

## Features

- Animated full-screen introduction with pointer-following violet light
- Interactive `y = 2^t` career graph
- Circular company logos in graph points and expanded role cards
- Hover, keyboard and touch-friendly role details
- Compact three-column expertise summary
- Auto-sliding recommendation band with manual controls
- Linked GitHub project cards
- Complete 23-image My Canvas gallery with lightbox
- Mars Rover Manipal, running and mentoring stories
- Recruiter-focused LinkedIn, email and phone actions
- Responsive layouts for desktop, tablet and mobile
- Reduced-motion-aware animation behavior inherited from the production design

## Project structure

```text
.
├── .github/workflows/deploy-pages.yml
├── public
│   ├── documents/tej-davuluri-resume.pdf
│   ├── images
│   │   ├── canvas/        # 23 My Canvas photographs
│   │   ├── companies/     # Pergo, Merkle, Isazi, Pharmavite and Meta logos
│   │   ├── hero/          # Landing portrait
│   │   └── personal/      # Rover, marathon and mentoring photographs
│   ├── apple-touch-icon.png
│   ├── favicon-32x32.png
│   ├── favicon.ico
│   └── favicon.svg
├── src
│   ├── text/siteContent.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Run locally

Requirements: Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

The deployable static site is generated in `dist/`.

## Deploy to GitHub Pages

1. Push this repository to GitHub using `main` as the default branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment**, select **GitHub Actions**.
4. Push to `main`, or run the included workflow manually from the **Actions** tab.

The included workflow installs dependencies, builds the site and deploys `dist/`. `vite.config.ts` uses a relative base path, so it works for both account sites and project sites without editing the repository name.

## Other static hosts

The same repository works on Netlify, Vercel, Cloudflare Pages and similar services:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: `22`

## Editing content

Update structured portfolio content in `src/text/siteContent.ts`. Replace images without changing code by keeping the existing filenames, or update their paths in the content file.

Visual styling and animation live in `src/styles.css`. Page structure and interactions live in `src/App.tsx`.

## Asset ownership

The portfolio includes personal photographs, recommendation text, company marks and a résumé supplied or approved for this website. Confirm you have the right to publish each asset before making the repository public.
