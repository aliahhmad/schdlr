# schdlr

A two-part scheduling application with a dedicated backend API and a separate frontend web app.

This repository is not configured as a monorepo. Each app has its own `package.json`, `package-lock.json`, and `node_modules` directory.

## Project overview

- `apps/api` — backend service built with Node.js, Prisma, and the Serverless Framework.
  - Uses `@prisma/client`, `prisma`, and PostgreSQL adapter dependencies.
  - Configured for AWS Lambda/API Gateway deployment via Serverless.

- `apps/web` — frontend React application built with Vite.
  - Uses React 19, React Router, Bootstrap, and OIDC auth packages.
  - Includes TypeScript typings and ESLint support.

## Project structure

- `apps/api/`
  - `package.json` — backend dependencies and configuration
  - `serverless.yml` — deployment configuration
  - `prisma/` — Prisma schema and migrations
  - `src/` — backend source files

- `apps/web/`
  - `package.json` — frontend dependencies and dev tooling
  - `src/` — React app source files
  - `public/` — static assets

- `infrastructure/` — supporting infrastructure definitions (optional)
- `packages/` — shared utilities or types (if used by apps)

## Setup

Install dependencies separately for each app.

### Backend

```bash
cd apps/api
npm install
```

### Frontend

```bash
cd apps/web
npm install
```

## Running the apps

### Start the frontend

From `apps/web`:

```bash
npm run dev
```

Then open the local Vite URL shown in the terminal.

### Backend development

From `apps/api`:

```bash
npm install
```

The current backend manifest does not include a dedicated `dev` or `start` script, so use the Serverless Framework commands directly if needed:

```bash
serverless dev
```

or deploy with:

```bash
serverless deploy
```

---

**Note:** AI assistance was used in generating code comments and documentation throughout this project.