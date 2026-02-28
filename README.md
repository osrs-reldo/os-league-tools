![](./public/logo.png)

# O S - L E A G U E - T O O L S

## >> [https://osleague.tools](https://www.osleague.tools) <<

Your hub for all your OSRS leagues needs - calculators, relics info, task tracking and planning, and more!

Looking for more info, or have a bug report or suggestion? Check out the [Discord server](https://discord.gg/GQ5kVyU).

# Development

## Initial setup

Prerequisites:

- Node >=20 <=22
- Pnpm https://pnpm.io/installation

From the repository root:

1. Install dependencies: `pnpm install`
2. Initialize web environment variables: `cp ./apps/web/.env.example ./apps/web/.env`
3. Initialize API environment variables: `cp ./apps/api/.env.example ./apps/api/.env`
4. Build all packages: `pnpm build`

## Run app in dev mode

To build and start up locally, run:

```
pnpm dev
```

and open [http://localhost:5173](http://localhost:5173) to view it in the browser.

## API Explorer

The backend includes a dev-only tRPC explorer panel.

1. Ensure `ENABLE_TRPC_PANEL=true` in `apps/api/.env`
2. Start the API: `pnpm --filter @repo/api dev`
3. Open `http://localhost:3000/trpc-panel`

Notes:

- The panel is disabled in production.
- API server health check is available at `http://localhost:3000/health`.

## Local database setup (Postgres)

The API uses Postgres + Drizzle migrations.

### Option A: Docker

```bash
docker run --name reldo-postgres \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -e POSTGRES_DB=reldo_dev \
  -p 5432:5432 -d postgres:16
```

Set in `apps/api/.env`:

```bash
DATABASE_URL=postgres://postgres:postgres@localhost:5432/reldo_dev
```

Run migrations:

```bash
pnpm --filter @repo/api db:migrate
```

# About

## Apps and Packages

- `@repo/web`: Vite, React, TanStack Router and tRPC Client
- `@repo/api`: Express.js, Drizzle and tRPC Server
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: shared Tailwind configuration

### Code style

This project uses pre-commit hooks with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain a consistent code style.

## Tech stack & libraries

Original monorepo project template: https://github.com/noahflk/react-trpc-turbo

- Typescript
- Turborepo
- React Vite
- Express.js
- tRPC
- TanStack Router
- Tailwind CSS
