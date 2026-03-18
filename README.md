<a id="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]

<br />
<div align="center">
  <h1>DAYKEEPER DOCS</h1>

  <h3 align="center">DayKeeper Documentation</h3>
  Documentation website for the DayKeeper API.
  <p align="center">
    <br />
    <a href="https://docs.daykeeper.app"><strong>See the Docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/luciano655dev/api.daykeeper.app">DayKeeper API</a>
    ·
    <a href="https://github.com/luciano655dev/daykeeper.app">DayKeeper App</a>
    ·
    <a href="https://github.com/luciano655dev/about.daykeeper.app">DayKeeper About</a>
    ·
    <a href="https://github.com/luciano655dev/docs.daykeeper.app">Docs Repo</a>
  </p>
</div>

## About DayKeeper Docs

DayKeeper is an open-source social network with a journal-style experience. This repository contains the source code for the DayKeeper documentation website, built to document the API clearly and keep the public reference aligned with the actual backend routes.

The docs cover authentication, users, feed/search, posts, comments, day events, day tasks, sessions, notifications, admin flows, analytics, media, webhooks, and system routes.

## Built With

- [![Docusaurus][Docusaurus]][Docusaurus-url]
- [![React][React.js]][React-url]
- [![Typescript][Typescript]][Typescript-url]
- [![NodeJS][NodeJS]][NodeJS-url]
- [![Markdown][Markdown]][Markdown-url]

## Getting Started

### Prerequisites

- Node.js `18+`
- npm

### Installation

```bash
npm install
```

### Local Development

```bash
npm run start
```

This starts the Docusaurus development server with live reload.

### Production Build

```bash
npm run build
```

Build output is generated in the `build/` directory.

### Serve the Built Site

```bash
npm run serve
```

## Available Scripts

- `npm run start` starts the local docs server.
- `npm run build` creates the production build.
- `npm run serve` serves the generated build locally.
- `npm run clear` clears Docusaurus caches.
- `npm run typecheck` runs the TypeScript check for the config and theme code.

## Project Structure

- `docs/` contains the documentation pages and category structure.
- `src/` contains theme overrides, custom pages, and styling.
- `static/` contains static assets.
- `docusaurus.config.ts` contains the site config, navbar, footer, and presets.
- `sidebars.ts` controls the docs sidebar behavior.

## Editing the Docs

Most content changes happen inside `docs/`. The current docs are organized by API area so the structure mirrors the backend route groups:

- `Auth`
- `Feed`
- `Post`
- `User`
- `Day`
- `Sessions`
- `Notifications`
- `Media`
- `System`
- `Analytics`
- `Admin`

If you update the API, the docs should be updated in the same pass so the published reference stays accurate.

## Related Links

- Docs: [https://docs.daykeeper.app](https://docs.daykeeper.app)
- App: [https://daykeeper.app](https://daykeeper.app)
- About: [https://about.daykeeper.app](https://about.daykeeper.app)
- API Repo: [https://github.com/luciano655dev/api.daykeeper.app](https://github.com/luciano655dev/api.daykeeper.app)
- App Repo: [https://github.com/luciano655dev/daykeeper.app](https://github.com/luciano655dev/daykeeper.app)
- About Repo: [https://github.com/luciano655dev/about.daykeeper.app](https://github.com/luciano655dev/about.daykeeper.app)

## Contributing

Contributions are welcome.

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-change`
3. Make your changes.
4. Run `npm run build` before opening a PR.
5. Open a pull request.

### Top contributors

<a href="https://github.com/luciano655dev/docs.daykeeper.app/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=luciano655dev/docs.daykeeper.app" alt="Contributors" />
</a>

## Contact

DayKeeper

- Instagram: [@daykeeperapp](https://instagram.com/daykeeperapp)
- Email: [contact@daykeeper.app](mailto:contact@daykeeper.app)

Project Link: [https://github.com/luciano655dev/docs.daykeeper.app](https://github.com/luciano655dev/docs.daykeeper.app)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[contributors-shield]: https://img.shields.io/github/contributors/luciano655dev/docs.daykeeper.app.svg?style=for-the-badge
[contributors-url]: https://github.com/luciano655dev/docs.daykeeper.app/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/luciano655dev/docs.daykeeper.app.svg?style=for-the-badge
[forks-url]: https://github.com/luciano655dev/docs.daykeeper.app/network/members
[stars-shield]: https://img.shields.io/github/stars/luciano655dev/docs.daykeeper.app.svg?style=for-the-badge
[stars-url]: https://github.com/luciano655dev/docs.daykeeper.app/stargazers
[issues-shield]: https://img.shields.io/github/issues/luciano655dev/docs.daykeeper.app.svg?style=for-the-badge
[issues-url]: https://github.com/luciano655dev/docs.daykeeper.app/issues
[Docusaurus]: https://img.shields.io/badge/Docusaurus-20232A?style=for-the-badge&logo=docusaurus&logoColor=3ECC5F
[Docusaurus-url]: https://docusaurus.io/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[Typescript]: https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript
[Typescript-url]: https://www.typescriptlang.org/docs/
[NodeJS]: https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js
[NodeJS-url]: https://nodejs.org/docs/latest/api/
[Markdown]: https://img.shields.io/badge/Markdown-20232A?style=for-the-badge&logo=markdown
[Markdown-url]: https://www.markdownguide.org/
