# School Website Starter (Beginner Friendly)

## 1) Update your placeholders
Edit `/assets/js/site-config.js`:
- `schoolName`
- `email`
- `phone`
- `address`
- `siteUrl` (your final domain)
- `whatsappNumber` (country code + number, no spaces)
- `admissionFormEndpoint` and `contactFormEndpoint` (Formspree URLs)
- `announcements` (homepage ticker text items)
- `counters` (homepage achievement numbers)

Note: current values are launch-ready sample data. Replace with your real school data before going live.

## 2) Add your images
- Gallery images: `/assets/images/gallery/`
- Home/social preview image: `/assets/images/og-image.jpg`

## 3) Update notices/news (mini CMS)
- News source file: `/assets/data/news.json`
- Editor page: `/pages/admin-news.html`
- News page auto-loads this JSON.
- Public page: `/pages/news.html`

## 4) Multilingual support
- Language toggle (EN/HI) is in the header.
- Default language is controlled by `defaultLanguage` in `/assets/js/site-config.js`.

## 5) Admission funnel + tracking
- Form redirects to: `/pages/admission-success.html`
- Captures hidden lead fields automatically:
  - `lead_id`
  - `utm_source`
  - `utm_medium`
  - `utm_campaign`
  - `referrer`

## 5) Run locally
Open `index.html` directly in your browser.

## 6) Deploy on Netlify
- Push this project to GitHub.
- In Netlify: `Add new site -> Import from Git`.
- Build command: none.
- Publish directory: `.`

## 7) Deploy on Vercel
- Push this project to GitHub.
- In Vercel: `Add New -> Project`, select repo.
- Framework preset: `Other`.
- Build command: none.
- Output directory: `.`

## 8) Final SEO checklist
- Make sure domain in `robots.txt`, `sitemap.xml`, and `siteUrl` in `assets/js/site-config.js` all match
- Submit sitemap URL in Google Search Console
