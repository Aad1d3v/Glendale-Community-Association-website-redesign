# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Glendale / Glendale Meadows Community Association - production image
#
# Stage 1 compiles the Vite + React + TypeScript single-page app to ./dist.
# Stage 2 serves those static files with nginx running as a non-root user.
# ---------------------------------------------------------------------------

# ---------------------------------------------------------------------------
# Stage 1 - build
# ---------------------------------------------------------------------------
FROM node:24-alpine AS build

WORKDIR /app

# Install dependencies from the lockfile first so Docker can cache this layer
# independently of source changes. Requires package-lock.json to be committed.
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy the rest of the sources and produce the static bundle in /app/dist.
COPY . .

# The public build must never receive a development environment flag.
ARG VITE_SITE_URL
ARG VITE_SITE_NAME
ARG VITE_CONTACT_EMAIL
ARG VITE_CONTACT_PHONE
ARG VITE_ADDRESS
ARG VITE_SOCIAL_FACEBOOK
ARG VITE_SOCIAL_INSTAGRAM
ARG VITE_SOCIAL_X

ENV NODE_ENV=production \
    VITE_SITE_URL=$VITE_SITE_URL \
    VITE_SITE_NAME=$VITE_SITE_NAME \
    VITE_CONTACT_EMAIL=$VITE_CONTACT_EMAIL \
    VITE_CONTACT_PHONE=$VITE_CONTACT_PHONE \
    VITE_ADDRESS=$VITE_ADDRESS \
    VITE_SOCIAL_FACEBOOK=$VITE_SOCIAL_FACEBOOK \
    VITE_SOCIAL_INSTAGRAM=$VITE_SOCIAL_INSTAGRAM \
    VITE_SOCIAL_X=$VITE_SOCIAL_X

RUN npm run build

# ---------------------------------------------------------------------------
# Stage 2 - serve
#
# nginxinc/nginx-unprivileged already runs as uid 101 and is configured to
# listen on an unprivileged port, so this container needs no root at runtime.
# ---------------------------------------------------------------------------
FROM nginxinc/nginx-unprivileged:alpine AS runtime

LABEL org.opencontainers.image.title="GGMCA Website" \
      org.opencontainers.image.description="Glendale / Glendale Meadows Community Association website" \
      org.opencontainers.image.vendor="Glendale/Glendale Meadows Community Association" \
      org.opencontainers.image.source="https://myglendale.ca"

ENV NODE_ENV=production

COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://127.0.0.1:8080/healthz || exit 1

CMD ["nginx", "-g", "daemon off;"]
