# ERTHO website

A responsive single-page site for ERTHO, using plain HTML, Tailwind CSS 4 and a small JavaScript file. The build produces static files in `dist/`. All fonts and page assets are local; visitors do not need a Tailwind CDN or JavaScript framework.

## Local development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:4173. Run `npm run watch:css` in a second terminal while changing Tailwind classes, then refresh the browser. The preview server is local-only.

```sh
npm run build
npm run preview
```

These commands compile the CSS, create `dist/`, and preview the production files. Hash navigation and relative asset paths support a GitHub Pages repository subdirectory without route rewrites.

## Where to edit

| File | Purpose |
| --- | --- |
| `index.html` | All page copy, section order, links and Tailwind layout classes |
| `src/styles.css` | Tailwind import, brand tokens, shared components and a few custom effects |
| `src/app.js` | Mobile navigation, section highlighting and email-copy feedback |
| `assets/` | Local logo, photography, organogram, decorative SVG and compiled CSS |
| `site-context/brand-positioning.md` | Current business positioning, audience, priorities and content boundaries |
| `site-context/` | Original content archive and earlier supplied copy |

Edit `src/styles.css`, not the generated `assets/styles.css`. Rebuild after changing HTML classes or styles. Native HTML details/summary controls power the service and project disclosures. Navigation, reading, downloads and direct contact links work without JavaScript; the no-JavaScript version exposes mobile links and hides the copy button.

## GitHub Pages

The included **Deploy to GitHub Pages** workflow is manual. It builds and uploads only `dist/`; the context documents and development files are not in the deployed artifact.

1. Push the project to your chosen GitHub repository.
2. Set **Settings → Pages → Source** to **GitHub Actions**.
3. From the repository’s **Actions** tab, run **Deploy to GitHub Pages** on the intended branch.

No repository, deployment or DNS changes have been made. Do not add a custom-domain `CNAME` until the intended domain and DNS migration are confirmed. An old multi-page site’s `/home`, `/about` and `/contact` URLs will need a migration decision before replacing that site; the new site uses `#home`, `#about` and `#contact`.

References: [GitHub Pages custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), [Tailwind CLI](https://tailwindcss.com/docs/installation/tailwind-cli).

## Verification

```sh
npx playwright install chromium
npm run build
npm run preview
# In another terminal:
npm run check
```

The browser checks cover desktop/mobile layout, navigation, keyboard dismissal, service and case-study disclosures, the resource download, email copying, local links/assets, and automated accessibility checks. Screenshots go to `/tmp/ertho-desktop.png` and `/tmp/ertho-mobile.png`. Set `CHROMIUM_PATH` if using an existing Chromium executable.

## Content and assets

The service categories are provisional: Practical consulting, Governance best practice, and Learning & collaboration. Primary goal: consulting enquiries; secondary goal: retainers. There is no enquiry form, payment processing or membership system.

- Logo: supplied ERTHO horizontal PNG, preserved unchanged.
- Landscape and workshop photographs: ERTHO’s original homepage assets.
- Organogram: the original free resource preview, offered as a PNG, not a full editable toolkit.
- See [asset sources](assets/SOURCES.md) for source URLs.

The contact details are taken from the supplied copy. Confirm current professional roles and final case-study wording with the client before public launch.
