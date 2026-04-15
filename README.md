# Falcon Fast Flooring - Website

Static website for [Falcon Fast Flooring](https://ffcfastflooring.mihay.net/) — professional flooring services in Acworth, GA & the Greater Atlanta area.

## Stack

- **Static HTML/CSS/JS** — no build step required
- **Nginx Alpine** — minimal Docker container
- **Cloudflare WAF** — frontend protection
- **GitHub Container Registry** — image hosting

## Local Development

```bash
docker compose up --build
```

Site available at `http://localhost:8080`

## Deployment

Push to `main` triggers the GitHub Actions workflow which builds and pushes the Docker image to `ghcr.io/latchmihay/ffcfastflooring.com:latest`.
