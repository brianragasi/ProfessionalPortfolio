# Brian Ragasi — Professional Portfolio

A conventional professional portfolio built with React, TypeScript, Vite, and
custom responsive CSS. It is separate from the Windows XP portfolio.

## Run locally

```bash
npm install
npm run dev
```

Use `npm run build` for a production build.

## Deploy to Cloudflare Workers

The Vite production build is deployed as Cloudflare Workers Static Assets. The
Worker configuration serves `dist` and falls back to `index.html` for SPA routes.

```bash
npm run deploy
```

The Worker name is `professional-portfolio`. Wrangler prints the public
`*.workers.dev` address after a successful deployment.

## Content

Personal details, projects, skills, and images imported from the original
`ProfessionalPortfolio` project are centralized in `src/data.ts`.

## Contact form

The contact form uses FormSubmit to forward inquiries to
`ragasibrian2@gmail.com`. Its first real submission requires one-time activation:
submit the form, open the confirmation email from FormSubmit, and activate it.
No Gmail password is stored in this project.
