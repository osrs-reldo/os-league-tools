![](/public/logo.png)

# O S - L E A G U E - T O O L S

## >> [https://osleague.tools](https://www.osleague.tools) <<

Your hub for all your OSRS leagues needs - calculators, relics info, task tracking and planning, and more!

Looking for more info, or have a bug report or suggestion? Check out the [Discord server](https://discord.gg/GQ5kVyU).

# TODO - pasted from react-trpc-turbo readme

## Technologies used

- Turborepo
- React Vite
- Express.js
- tRPC
- TanStack Router
- Tailwind CSS

### Apps and Packages

- `@repo/web`: Vite, React, TanStack Router and tRPC Client
- `@repo/api`: Express.js, Drizzle and tRPC Server
- `@repo/eslint-config`: `eslint` configurations
- `@repo/typescript-config`: `tsconfig.json`s used throughout the monorepo
- `@repo/tailwind-config`: shared Tailwind configuration

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

To get started, clone the repository and install the dependencies:

```
pnpm install
```

Then, copy the `.env.example` file to `.env` in the web/ folder and fill in the necessary environment variables. For local development, the defaul value will work. If you want to deploy the app, you will need to specify where the backend is hosted.

```
cp ./apps/web/.env.example ./apps/web/.env
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

### Develop

To run all apps and packages in development mode, run the following command:

```
pnpm dev
```

# TODO - EVERYTHING BELOW IS OUTDATED

## Contributing

New contributors are always welcome. If you're interested in helping develop the site, take a look at the [issue tracker](https://os-league-tools.height.app/trailblazer-reloaded) to see what kind of things we are working on, and come by the [Discord](https://discord.gg/GQ5kVyU) to chat about what you'd like to help with.

### Code style

This project uses pre-commit hooks with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain a consistent code style.

## Development

### Build

To build and start up locally, run:

```
npm install
npm run dev
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Theming and styles

All styling is done using [TailwindCSS](https://tailwindcss.com/docs) utility classes. Unused CSS classes are pruned by tailwind's preprocessor, so if you add any classes that don't already exist somewhere in the project, you'll need to regenerate the compiled CSS to see it reflected in the site.

Styles are always regenerated during the dev build step, or you can manually regenerate them with:

```
npm run build:styles
```

### Backend

Some functionality (hiscores, submitting feedback, anything to do with user data) relies on the Reldo backend API. If you need to test any of these features during local development, you will can either:

- To develop against a local version of the API, clone [osrs-reldo-api](https://github.com/osrs-reldo/osrs-reldo-api) and start it up. The app will look for it on port 8080 by default.
- Or if you just want to hit the prod endpoint, create a `.env` file in this project's root folder and add the env variable: `REACT_APP_RELDO_URL=https://osrs-reldo-api.herokuapp.com`
