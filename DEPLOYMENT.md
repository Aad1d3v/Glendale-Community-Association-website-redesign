# Deployment

The site is a static Vite + React bundle. Nothing runs on the server except a
web server handing out files, which is why the production image is nginx and
nothing else.

## Deploy from GitHub with Render

The root [render.yaml](render.yaml) configures a Render static site: it installs
locked dependencies, builds with `npm run build`, publishes `dist/`, and rewrites
client-side routes to `index.html`.

1. Push this repository to GitHub.
2. In Render, choose **New → Blueprint** and connect the repository.
3. Review the discovered `render.yaml` configuration and create the site.
4. Render builds and deploys commits from the linked branch automatically.

The static site needs no application server or fixed runtime port. Add a custom
domain in the Render dashboard if desired. Deployment itself must be started
from your Render account; it has not been launched from this workspace.

## Run it with Docker

```bash
cp .env.example .env          # optional, only if you want to change ports
docker compose up --build -d  # build and start
open http://localhost:8080    # the site
```

Check that the container reported itself healthy:

```bash
docker compose ps
curl -i http://localhost:8080/healthz   # -> 200 ok
```

Stop it, or stop it and remove the image:

```bash
docker compose down
docker compose down --rmi local
```

### Build the image directly

```bash
docker build -t ggmca-website:latest .
docker run --rm -p 8080:8080 --name ggmca-web ggmca-website:latest
```

### Development with hot reload

The `dev` service is behind a Compose profile so it never starts by accident:

```bash
docker compose --profile dev up dev
open http://localhost:5173
```

## Ports

| Variable   | Default | What it does                                    |
| ---------- | ------- | ----------------------------------------------- |
| `APP_PORT` | `8080`  | Host port for the production container.         |
| `DEV_PORT` | `5173`  | Host port for the Vite dev server.              |

To serve the site on port 80, set `APP_PORT=80`, or leave it alone and terminate
TLS at a reverse proxy in front of the container.

## Configuration

Copy `.env.example` to `.env` and edit. Two kinds of values live there:

- **Runtime** (`APP_PORT`, `DEV_PORT`, `NODE_ENV`) - read by Compose.
- **Build time** (`VITE_*`) - Vite inlines these into the JavaScript bundle, so
  they are fixed the moment the image is built. Changing one means rebuilding:

  ```bash
  docker compose up --build -d
  ```

  `VITE_SITE_URL` is used for canonical links and social metadata, so it must be
  the real public origin (for example `https://myglendale.ca`) in production.

An empty value counts as unset, not as "off": `src/config.ts` falls back to its
own default, because an unset Docker build arg also arrives as an empty string
and the two build paths must produce the same site. To change which profile a
social icon points at, set the full URL rather than blanking it.

## Migrating from the current host

The existing site is a set of static pages and PDF documents. To move:

1. Download the current PDFs and place them in `public/documents/` using the
   file names listed in the archive data, or update that data to match.
2. Point DNS at the new host and terminate TLS there.
3. Keep the old URLs working. Every legacy path that is not known to the router
   is served the app's 404 page, so add redirects at the proxy if any old link
   is still referenced from print material or email signatures.

## Operating notes

- The container runs as the unprivileged `nginx` user (uid 101) and listens on
  8080; it never needs root and publishes no writable volume.
- Hashed assets under `/assets/` are served with a one-year immutable cache.
  `index.html` is always revalidated, so a redeploy is picked up immediately
  without cache-busting tricks.
- Security headers, including a same-origin-only Content-Security-Policy, are
  set in `nginx.conf`. Add any new third-party origin there or it will be
  blocked by the browser.

## Not verified in this environment

The Docker CLI was not available on the machine where this project was
authored, so the image was **not** built, started or health-checked here. The
Dockerfile, `nginx.conf` and `docker-compose.yml` are written against official
image tags (`node:24-alpine`, `nginxinc/nginx-unprivileged:alpine`) and should
be validated with the `docker compose up --build -d` command above before they
go anywhere near production. The application bundle itself is verified: it
type-checks and builds, and the built output was served and exercised locally.
