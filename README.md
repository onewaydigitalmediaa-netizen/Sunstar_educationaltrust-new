# SUN STAR Educational Trust — React Website

A fully responsive React/Vite educational consultancy and Tamil Nadu college directory website using SUN STAR's supplied brand assets and **SUN STAR FEES STRUCTURE 2026.pdf**.

**What is included**

- Professional, mobile-friendly SUN STAR blue/cyan/yellow design.
- Home, College Directory, College Detail, Courses, Admissions, Services, About, Contact, Enquiry and 404 pages.
- Searchable/filterable/paginated **71 college and institution** directory from the PDF index.
- **61 clearly labelled representative fee examples** individually transcribed from the booklet. They are **not universal starting fees or binding quotes**.
- Complete **115-page optimized fee PDF** and per-page WebP previews included under `public/`.
- Individual college pages linking to the correct original PDF page, course/stream labels where verified, and document previews.
- WhatsApp, click-to-call, enquiry form, Google Maps query link, and MBBS Abroad information.
- Responsive navigation, hover animations, reduced-motion support, and basic SEO metadata.

## Run locally

Requirements: Node.js 18+ (Node.js 20/22 recommended) and npm.

```bash
npm install
npm run dev
```

Open the URL shown by Vite (normally **http://localhost:5173**).

## Production build

```bash
npm run build
npm run preview
```

Upload the generated `dist/` to a static hosting platform. The included `vercel.json` and `public/_redirects` support client-side route fallbacks on Vercel and Netlify. For Apache, configure a fallback to `index.html`.

> The source ZIP does not contain `node_modules` or a prebuilt `dist` folder. Running `npm install` requires an Internet connection to the npm registry.

## Where to update content

| Content | File |
|---|---|
| Colleges, cities, streams, sample fees, PDF page references | `src/data/colleges.json` |
| Phone, WhatsApp, email, office address, PDF path | `src/data/site.js` |
| Homepage copy and featured sections | `src/pages/Home.jsx` |
| Detailed college page presentation | `src/pages/CollegeDetail.jsx` |
| All global CSS and responsive breakpoints | `src/styles.css` |
| Logos, brochure and photos | `public/assets/` |
| Complete optimized PDF | `public/documents/SUN-STAR-FEES-2026-27.pdf` |

To add a college, append a unique record to `src/data/colleges.json` using the same schema. Fee examples must be verified against the relevant institution and labelled with the correct course, quota/category and year. If a PDF page isn't present, use `pdfPage: null` and `availableInFile: false`.

`src/data/catalog-summary.json` gives the supplied file-data count.

## Enquiry form behavior

This is a **frontend-only React project**, as requested. On form submission, the browser opens WhatsApp with a pre-filled message addressed to **+91 9042964616**. **The student must send the message in WhatsApp**. The website does not capture/store enquiries in a database and does not send emails on its own. Calls open the device's dialler.

If you want an admin dashboard, enquiry inbox, CRM, server-side email, authentication, or automatic data updates, you will need a backend and service credentials in a later phase. Do not include credentials in the frontend.

## Source fidelity and caveats

- Data is from the **user-supplied 2026 SUN STAR booklet**, not scraped/verified from official college sites.
- The uploaded document contains 115 PDF pages, including three front index pages. The website includes an optimized, readable copy of all 115 pages, plus WebP preview images.
- **Printed pages 108–109**, referred to in the index for **V.S.B. College of Engineering Technical Campus** and **Erode Arts and Science College**, are **not present in the provided PDF**. The corresponding entries show this limitation, rather than inventing details.
- Fee structures vary by course, entry year, government/management quota, community and optional charges. The displayed samples **must not be treated as guaranteed prices**, nor directly compared without matching their categories.
- Some institution groups have multiple constituent colleges; the examples identify their source page and, where needed, a constituent college. The complete fee table remains in the PDF.
- Course/stream lists are provided where they could be read reliably; if not transcribed, the college profile directs visitors to the source page.
- Availability, scholarship eligibility, recognition, seat allocations and final payable fees require direct verification with the relevant institutions.
- Website contact details come from the SUN STAR brochure/visiting card: **+91 9944204010**, **WhatsApp +91 9042964616**, **sunstarmedabroad@gmail.com**.
- Original images were supplied by SUN STAR and remain their respective owner's assets.
- This is an independent SUN STAR design influenced at a high level by the user-provided reference websites; no reference site's layout/assets/code were copied.

## Optional asset-preparation scripts

`python scripts/build_catalog.py` rebuilds the curated JSON catalog from its source records. The included `scripts/prepare_assets.py` can regenerate photo crops, page previews and a compressed PDF when the source files are placed in a folder specified using `SUNSTAR_SOURCE_DIR`. Regeneration is not required to run the supplied project.

## Quick quality check

```bash
python scripts/validate_project.py
```

## November 2026 — SUN STAR verified color guide refresh

The official brand palette, site-wide glass/gradient enhancements, optimized homepage WebP banners and hosting security headers are part of this package. See [SECURITY-PERFORMANCE-REPORT.md](./SECURITY-PERFORMANCE-REPORT.md) for exact checks, performance improvements, and deployment limitations.

No page routes or college records were removed. Keep the original PNG banners as a fallback/source asset; the carousel uses corresponding WebP files for faster loading.
