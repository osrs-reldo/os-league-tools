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
      label: 'Endless Harvest',
      description: [
        '· Resources gathered from Fishing, Woodcutting and Mining are multiplied by 2x',
        '· All resources gathered by this Relic are sent directly to your Bank if you have space, otherwise they are placed in your inventory',
        '· Items which cannot be banked will be plaved in your Inventory instead, even if you have Bank space',
        '· Fill your bank with bank fillers to have resources sent to your Inventory',
      ],
      icon: images['relic-endless-harvest.png'],
    },
    {
      label: 'Production Prodigy',
      description: [
        '· When doing the following activities all items are processed at once granting full XP',
        ' · Smelting ores, smithing bars and making Cannonballs',
        ' · Fletching logs, stringing bows and cutting bolt tips',
        ' · Cleaning herbs and making potions which do not have a stackable secondary ingredient',
        ' · Cooking food and making jugs of wine',
        ' · Crafting leather, uncut gems, glassblowing, jewellery, pottery, battlestaves and spinning flax or wool',
        '· There is a 25% chance that you will make an additional product, which will be sent to your Bank if you have space. Additional products will also grants XP',
        '· Additionally Crafting, Smithing, Herblore, Fletching and Cooking are boosted by +12',
      ],
      icon: images['relic-production-prodigy.png'],
    },
    {
      label: 'Trickster',
      description: [
        '· You will automatically re-pickpocket your target',
        '· Loot from pickpoketing is doubled and noted',
        '· Coin pouch limit is multiplied by 3',
        "· You will be given the Sage's Greaves, that will grant Agility XP that scales with your agility level while running",
        '· Box traps lure creatures faster',
        '· Loot from box traps is doubled',
        '· Impling jars cannot break',
        '· You can burn up to 9 logs simultaneously',
        '· You cannnot fail actions for Thieving, Agility, Hunter and Firemaking',
      ],
      icon: images['relic-trickster.png'],
    },
  ],
  [
    {
      label: "Fairy's Flight",
      description:
        'Receive a unique teleport item that allows teleporting to any fairy ring, spirit tree, or tool leprechaun, provided the player has access to the select destinations.',
      icon: images['relic-fairys-flight.png'],
    },
    {
      label: 'Globetrotter',
      description: [
        '· Receive a unique teleport amulet that allows teleporting to a large number of teleport locations from teleport jewellery and spellbooks.',
        '· Can only teleport to locations within regions the player has unlocked.',
      ],
      icon: images['relic-globetrotter.png'],
    },
  ],
  [
    {
      label: "Banker's Note",
      description: [
        '· Receive a unique banknote item that allows you to note and un-note items from the comfort of your inventory.',
        '· Noting will note the maximum quantity of the identical item in your inventory. Un-noting will fill all empty inventory spaces with the actual item.',
      ],
      icon: images['relic-bankers-note.png'],
    },
    {
      label: 'Fire Sale',
      description: [
        '· All item shops with coins as currency are free. This only applies to shops with a standard shop interface (e.g. general stores).',
        '· These items can be automatically noted.',
        '· Shops will no longer buy items for gold.',
      ],
      icon: images['relic-fire-sale.png'],
    },
  ],
  [
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
  ],
  [
    {
      label: 'Treasure Seeker',
      description: 'Unknown effects',
      icon: images['relic-treasure-seeker.png'],
    },
    {
      label: 'Bloodthirsty',
      description: 'Unknown effects',
      icon: images['relic-bloodthirsty.png'],
    },
    {
      label: 'Infernal Gathering',
      description: 'Unknown effects',
      icon: images['relic-infernal-gathering.png'],
    },
  ],
  [
    {
      label: 'Equilibrium',
      description: 'Unknown effects',
      icon: images['relic-equilibrium.png'],
    },
    {
      label: "Farmer's Fortune",
      description: 'Unknown effects',
      icon: images['relic-farmers-fortune.png'],
    },
    {
      label: 'Ruinous Powers',
      description: '· Unlocks the Ruinous Powers prayers.',
      icon: images['relic-ruinous-powers.png'],
    },
  ],
  [
    {
      label: 'Soul Stealer',
      description: 'Unknown effects',
      icon: images['relic-soul-stealer.png'],
    },
    {
      label: 'Weapon Master',
      description: ['· Special attack with 100% accuracy.', '· Sacrifice Hitpoints for additional special attacks.'],
      icon: images['relic-weapon-master.png'],
    },
    {
      label: 'Berserker',
      description: 'Unknown effects',
      icon: images['relic-berserker.png'],
    },
  ],
  [
    {
      label: 'Executioner',
      description: 'Gives the player an axe that will deal killing blows to an enemy with less than 20% hitpoints.',
      icon: images['relic-executioner.png'],
    },
    {
      label: 'Undying Retribution',
      description: [
        '· Upon death, instead be instantly revived with full hitpoints.',
        '· On death, deal damage to nearby opponent(s) in a 5x5 area centred around the player.',
        '· Deaths from Undying Retribution procs do not count towards death penalties in raids.',
      ],
      icon: images['relic-undying-retribution.png'],
    },
    {
      label: 'Guardian',
      description: [
        '· Receive a horn that summons an exceptionally powerful ally for the player:',
        ' · Has a max hit of 15.',
        ' · Can be used alongside thralls.',
        ' · Despite not having guaranteed hits, the Guardian still has very high accuracy, with a flat accuracy roll of 45,000.',
        ' · Can use all three combat styles.',
        ' · Will change attack style to whichever is best to use for its current target.',
        ' · Can potentially deal area of effect damage, up to 9 targets.',
        ' · Lasts for 30 minutes at a time.',
        ' · Has no cooldown and can be instantly re-summoned.',
        ' · Can be summoned wherever, whenever, except for locations where items are restricted. The Gauntlet is the only exception to this rule and can therefore have the Guardian summoned within.',
        ' · Gender can be toggled.',
      ],
      icon: images['relic-guardian.png'],
    },
  ],
];
