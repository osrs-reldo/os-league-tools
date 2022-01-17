![](/public/logo.png)

# O S - L E A G U E - T O O L S

## >> [https://osleague.tools](https://www.osleague.tools) <<

Your hub for all your OSRS leagues needs - calculators, relics info, task tracking and planning, and more!

Looking for more info, or have a bug report or suggestion? Check out the [Discord server](https://discord.gg/GQ5kVyU).

## Contributing

New contributors are always welcome. If you're interested in helping develop the site, take a look at the [issue tracker](https://os-league-tools.height.app/shattered-relics) to see what kind of things we are working on, and come by the [Discord](https://discord.gg/GQ5kVyU) to chat about what you'd like to help with.

### Code style

This project uses pre-commit hooks with [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) to maintain a consistent code style.

## Development

### Build

To build and start up locally, run:

```
npm install
npm run build
npm start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Theming and styles

All styling is done using [TailwindCSS](https://tailwindcss.com/docs) utility classes. Unused CSS classes are pruned by tailwind's preprocessor, so if you add any classes that don't already exist somewhere in the project, you'll need to regenerate the compiled CSS to see it reflected in the site.

Styles are always regenerated during the build step, or you can manually regenerate them with:

```
npm run build:styles
```

### Backend

Some functionality (hiscores, submitting feedback, anything to do with user data) relies on the Reldo backend API. If you need to test any of these features during local development, you will either need to clone [osrs-reldo-api](https://github.com/osrs-reldo/osrs-reldo-api) and start it up locally (app will look for it on port 8080 by default), or set an env variable `REACT_APP_RELDO_URL` to the endpoint that should receive the calls.

## Credits

Data/Images sourced from:

-   The official OSRS wiki
-   OSRS Leagues discord
-   Tweeting questions at Mod Ash
