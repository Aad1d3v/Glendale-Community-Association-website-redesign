# Glendale / Glendale Meadows Community Association

A responsive website redesign for the [Glendale / Glendale Meadows Community Association](https://myglendale.ca/), in southwest Calgary. The site is a static single-page app built with React, TypeScript, Vite, and Tailwind CSS v4; production files are served by an unprivileged nginx container.

## Features

- Pages for home, facilities and rentals, membership, childcare, community events, about and governance, resources, and contact.
- Responsive navigation, mobile booking and membership actions, and layouts tuned for small screens through desktop.
- Searchable and filterable document archive, event listings, facility information, and a hall booking request form.
- Self-hosted variable fonts and illustrated facility scenes. No application server or database is required.

## Requirements

- Node.js 24 and npm (the Docker images use Node 24).
- Docker with the Compose plugin for container workflows.

## Local development

```bash
npm ci
npm run dev
```

Vite prints the local URL (normally `http://localhost:5173`). The app works with no `.env` file; to customize contact details or site metadata, copy `.env.example` to `.env` and edit the values.

Useful scripts:

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start Vite's development server with hot reload. |
| `npm run typecheck` | Run TypeScript without emitting files. |
| `npm run build` | Typecheck and create the production bundle in `dist/`. |
| `npm run preview` | Serve the built bundle locally (Vite preview, normally port 4173). |
| `npm run docs:placeholders` | Generate placeholder PDFs for entries in the document archive. |
| `npm run fonts:vendor` | Vendor the configured font files into `public/fonts/`. |

## Configuration

The complete template and defaults are in [.env.example](.env.example). `APP_PORT` and `DEV_PORT` configure host ports for Docker Compose. `VITE_*` values configure site identity, contact information, and social URLs.

Vite embeds `VITE_*` values into the client bundle at build time. They are public, not secrets; rebuild the production image after changing them. Blank or unset values use the application defaults in `src/config.ts`.

| Variable | Default |
| --- | --- |
| `APP_PORT` | `8080` |
| `DEV_PORT` | `5173` |
| `VITE_SITE_URL` | `https://myglendale.ca` |
| `VITE_SITE_NAME` | `Glendale / Glendale Meadows Community Association` |
| `VITE_CONTACT_EMAIL` | `info@myglendale.ca` |
| `VITE_CONTACT_PHONE` | `403-242-2110` |
| `VITE_ADDRESS` | `4500 25 Avenue SW, Calgary, AB T3E 0M1` |
| `VITE_SOCIAL_FACEBOOK` | `https://www.facebook.com/myglendale` |
| `VITE_SOCIAL_INSTAGRAM` | `https://www.instagram.com/myglendale` |
| `VITE_SOCIAL_X` | `https://x.com/myglendale` |

Confirm contact and social details with the association before a public release.

## Project structure

```text
src/
  components/brand/       Brand mark and logo lockup
  components/illustrations/  Facility and childcare illustrations
  components/layout/      Header, footer, skip link, mobile action bar
  components/ui/          Reusable interface components
  content/                Page copy and structured content data
  hooks/                  Page metadata and route scroll behavior
  pages/                  Route-level page compositions
  sections/               Reusable page sections
  styles/                 Global styles and font-face definitions
public/
  documents/              Downloadable document archive
  fonts/                  Self-hosted fonts and their licenses
  images/                 Supplied community images and diagrams
scripts/                  Font and placeholder-document utilities
```

Routes are `/`, `/facilities`, `/membership`, `/childcare`, `/community`, `/about`, `/resources`, and `/contact`; unknown paths show a not-found page. Route content is lazy-loaded so each page is split into its own JavaScript chunk.

### Updating content and assets

Most page-specific text and data live in `src/content/`:

- `site.ts` — association details, navigation, and footer links.
- `facilities.ts` — hall, court, and rink content, rates, and booking steps.
- `membership.ts` — membership tiers, seasonal add-ons, benefits, and FAQs.
- `events.ts` — events, programs, and volunteer roles.
- `documents.ts` — archive entries; each slug maps to `/documents/<slug>.pdf`.
- `childcare.ts` — Seedlings programme content.
- `about.ts` — history, board roles, committees, and governance.
- `contact.ts` — contact topics, visitor information, and FAQs.

Some operational details are explicitly provisional in the content source (including facility rates and event dates); verify them with the association before launch. Childcare capacity and room ratios also need confirmation against the current licence.

The PDFs currently in `public/documents/` are generated placeholders, not official records. Replace them with approved documents at the matching paths before publishing. After adding archive entries, run `npm run docs:placeholders` to create matching placeholders for local testing.

The booking form currently hands a composed request to the visitor's email client; it does not submit to a backend. The site also includes supplied logo artwork, self-hosted fonts, vector illustrations, and community images/diagrams under `public/`.

## Docker

Run the production nginx container on `http://localhost:8080`:

```bash
cp .env.example .env # optional: customize ports or public site details
docker compose up --build -d
docker compose ps
```

The container exposes `/healthz` for health checks. Stop it with `docker compose down`. For hot-reload development in Docker, use the opt-in `dev` profile:

```bash
docker compose --profile dev up dev
```

See [DEPLOYMENT.md](DEPLOYMENT.md) for direct image build/run commands, configuration details, and deployment operating notes. The production image builds the static app and serves it as nginx; Node.js is not needed at runtime.

## Accessibility

The interface includes a skip link, visible focus styles, keyboard-operable navigation, reduced-motion support, labeled form controls, and semantic page structures. The mobile navigation drawer closes with Escape. Continue to check keyboard use, contrast, and screen-reader output when changing shared components.
