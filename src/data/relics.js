import images from '../assets/images';

export const NONE_RELIC_ID = -1;

export const RELIC_UNLOCK_THRESHOLDS = [0, 10, 300, 1500, 3000, 7500, 15000];

export const PASSIVE_RELICS = [
  {
    exp: {
      multiplier: 5,
      increased: true,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: ['Unlimited run energy', 'Stackable clue scrolls'],
  },
  {
    exp: {
      multiplier: 5,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: true,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: false,
    },
    drops: {
      multiplier: 3,
      increased: true,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 12,
      increased: true,
    },
    drops: {
      multiplier: 3,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 12,
      increased: false,
    },
    drops: {
      multiplier: 4,
      increased: true,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 16,
      increased: true,
    },
    drops: {
      multiplier: 4,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
];

export const RELICS = [
  [
    {
      label: 'Superior Sorcerer',
      description: [
        '· Magic weapons with attack speed 4 or above have this stat halved, rounded down.',
        '· Magic weapons with attack speed 3 or below have this stat halved, rounded up.',
        "· You save 90% of your Runes when casting spells. This includes charges when using powerd staves such as the Trident of the Seas, Trident of the Swamp, Sanguinesti Staff, Tumeken's Shadow, and the Enchanted Slayer Staff.",
        '· Bind spells will always hit on an unfrozen target.',
        '· Acquire the Arcane Grimoire, which allows you to change between Spellbooks you have unlocked. Must be at a bank to obtain the item.',
        '· Acquire a Rune Pouch.',
        '· All Rune Pouches store 2 more types of Runes.',
        '· Magic attacks will deal an additional 25% as splash damage to surrounding targets up to 5 additional targets (only works in multicombat areas).',
        '· Magic accuracy is increased by 175%.',
        '· Magic damage is increased by 20%.',
      ],
      icon: images['relic-superior-sorcerer.png'],
    },
    {
      label: "Brawler's Resolve",
      description: [
        '· Melee weapons with attack speed 4 or above have this stat halved, rounded down.',
        '· Melee weapons with attack speed 3 or below have this stat halved, rounded up.',
        '· Immune to all status effects, including but not limited to Poison, Venom, and Firebreath, with the exception of stuns and roots. This applies in both PvE and PvP.',
        '· 10% chance to deal a critical strike on a successful melee hit, dealing double damage.',
        '· Melee accuracy is increased by 50%.',
        '· Melee, Ranged, and Magic defence is increased by 50%.',
      ],
      icon: images['relic-brawlers-resolve.png'],
    },
    {
      label: "Archer's Embrace",
      description: [
        '· Ranged weapons with attack speed 4 or above have this stat halved, rounded down.',
        '· Ranged weapons with attack speed 3 or below have this stat halved, rounded up.',
        "· 90% of ammunition is saved when using Ranged weapons. This effect stacks with Ava's devices resulting in a 98% ammo saving bonus. Crystal bow, Chinchompas, and Toxic Blowpipe charged are included in this effect.",
        '· Enchanged Bolts have a 2x boosted chance to proc.',
        '· 10% change that your weapon will fire and extra projectile (Bows, Crossbows, Ballista and most thrown weapons)',
        '· Ranged accuracy is increased by 100%.',
      ],
      icon: images['relic-archers-embrace.png'],
    },
  ],
  [
    {
      label: 'Globetrotter',
      description: [
        '· Receive a unique teleport amulet that allows teleporting to a large number of teleport locations from teleport jewellery and spellbooks.',
        '· Can only teleport to locations within regions the player has unlocked.',
      ],
      icon: images['relic-globetrotter.png'],
    },
    {
      label: 'Relic 2.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 2.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 3.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 3.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 3.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 4.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 4.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 4.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 5.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 5.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 5.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 6.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 6.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 6.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 7.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 7.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 7.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
];
