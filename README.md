# O S - L E A G U E - T O O L S

## >> [osleague.tools](https://www.osleague.tools) <<

Your hub for all your OSRS leagues needs - calculators, relics and regions info, task tracking and planning, and more!

Looking for more info, or have a bug report or suggestion? Check out the [Discord server](https://discord.gg/GQ5kVyU).

## Contributing

Until launch, this whole thing was a one-developer hack job. I'm always happy to have new contributors, so if you think you can make it better, then feel free to open a PR. You can also come by the discord to discuss or get help on development.

## Development

### Build

To build and start up locally, run:

```
npm install
npm run build
npm start
```

and open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Updating task/calculator data

To update any data relating to tasks or skill calculators, you'll first need to edit the corresponding .csv file found in `/scripts/inputs`.

After making your changes, run either `parseCalcSpreadsheets.py` or `parseTaskSpreadsheet.py` (depending on which one you edited) to generate the json resource files. Once that's done, you will see your changes reflected in the site.

### Backend

The hiscores functionality relies on a backend api that you can find over at [os-league-tools-api](https://github.com/chaiinchomp/os-league-tools-api).

## Credits

Data/Images sourced from:

-   The official OSRS wiki
-   OSRS Leagues discord
-   Tweeting questions at Mod Ash
