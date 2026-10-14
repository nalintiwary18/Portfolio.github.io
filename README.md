Kumar Nalin's portfolio, built with Next.js and exported as a static site.

Portfolio content is maintained in `app/portfolio.ts`. That file supplies the cards, full profile, JSON-LD, plain text, and JSON so they stay in sync. The current resume is `public/newres.pdf`.

The layout uses one column on phones, two columns on tablets, and the original six-column card layout on desktops. Cards grow with their content and shorter screens can scroll. Carousels support dots, keyboard arrows, swiping, and pause controls. Reduced-motion settings disable autoplay and the intro. Without JavaScript, all carousel entries remain readable.

Public resources for crawlers and agents:

- `/profile/`: complete HTML profile, including full work achievements, education, skills, and leadership.
- `/llms.txt`: complete profile as plain text.
- `/portfolio.json`: the same information as structured JSON.
- `/robots.txt` and `/sitemap.xml`: crawl rules and page discovery.

The homepage includes Schema.org profile and project data and links to the full profile and machine-readable versions. All resources are included in `out/` by `npm run build`; no backend is needed.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

The shared Google Fonts stylesheet in `app/layout.tsx` preserves the portfolio's Montserrat, Playfair Display, and project fonts.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
