# Boppo Developer Docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

> **Pushing to `main` on GitHub deploys the site.** The [Deploy to GitHub Pages](.github/workflows/deploy.yml) workflow builds and publishes https://developer.boppo.com on every push to `main`, so anything merged there goes live.

## Installation

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Every push to `main` on GitHub runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and deploys it to GitHub Pages at https://developer.boppo.com. There is no separate release step: merging a PR into `main` publishes it.
