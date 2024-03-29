import images from '../assets/images';

export const NONE_RELIC_ID = -1;

export const RELIC_UNLOCK_THRESHOLDS = [0, 500, 1200, 2000, 4000, 7500, 15000, 24000];

export const PASSIVE_RELICS = [
  {
    exp: {
      multiplier: 5,
      increased: true,
    },
    drops: {
      multiplier: 2,
      increased: true,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [
      'Run energy is never drained whilst running.',
      'All clue scrolls will drop as stackable scroll boxes.',
      'Players will only receive steps they can complete within an unlocked region.',
    ],
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
      multiplier: 3,
      increased: true,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 3,
      increased: false,
    },
    extras: [
      'Players will be given a crystal of memories, which can teleport players back from where they most recently teleported from.',
      'Has a cooldown of six minutes, which can be reduced by one for every 300 total levels the player has (no cooldown at 1800 total level)',
      'The crystal will not save teleports casted from an instance, with some exceptions.',
    ],
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
      multiplier: 3,
      increased: false,
    },
    extras: [
      'The Bigger and Badder slayer unlock is unlocked (If already purchased, 150 slayer reward points are refunded).',
      'Superior slayer monsters have a 1/50 chance to spawn.',
      'Slayer point rewards are increased by 5x and are no longer limited to a minimum of a 10-task streak.',
    ],
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
      multiplier: 5,
      increased: true,
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
      multiplier: 5,
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
      multiplier: 8,
      increased: true,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 16,
      increased: false,
    },
    drops: {
      multiplier: 5,
      increased: true,
    },
    minigames: {
      multiplier: 8,
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
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        "· Players are given the Sage's greaves, which are boots that grant 2/3rds of the player's Agility level as experience whilst running, roughly every 10 ticks.",
        '· Players will always succeed in performing actions for Thieving, Agility, Hunter, and Firemaking.',
        '· The maximum amount of coin pouches players can hold is tripled.',
        '· The player will automatically re-pickpocket an NPC until they can no longer do so (ex. obtaining the maximum amount of coin pouches allowed)',
        '· Pickpocketed loot is doubled and converted to bank notes. Stacks with rogues outfit for quadruple loot.',
        '· Box traps will lure creatures faster, and give double loot and Hunter experience.',
        '· Impling jars will never break upon opening one.',
        '· Players can burn multiple logs per action (up to nine), providing there is space to do so.',
      ],
      icon: images['relic-trickster.png'],
    },
  ],
  [
    {
      label: "Fairy's Flight",
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        '· Players are given a fairy mushroom which allows teleporting to any fairy ring, spirit tree, or tool leprechaun.',
        '· Can only teleport to locations within regions the player has unlocked.',
      ],
      icon: images['relic-fairys-flight.png'],
    },
    {
      label: 'Globetrotter',
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        '· Players are given a globetrotter pendant which allows teleporting to all locations from an ornate jewellery box and nearly all spellbook teleport spells.',
        '· Can only teleport to locations within regions the player has unlocked.',
      ],
      icon: images['relic-globetrotter.png'],
    },
  ],
  [
    {
      label: "Banker's Note",
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        "· Players are given a banker's note which allows players to use note-able items on it to turn them into banknotes or unnote them. Items must be used on the banker's note.",
        `· The "Activate" option allows players to note and un-note items in one action with a quantity of the player's choosing. An item must first be used on the banker's note in order for this to work.`,
      ],
      icon: images['relic-bankers-note.png'],
    },
    {
      label: 'Fire Sale',
      description: [
        '· All item shops with coins as currency are free. This only applies to shops with a standard shop interface (e.g. general stores).',
        '· These items can be automatically noted if the player chooses so.',
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
      label: 'Bloodthirsty',
      description: [
        '· Players can receive and cancel slayer tasks remotely via slayer helmets/gem/rings.',
        '· Superior slayer creatures will have the following buffs:',
        ' · Spawn chance is increased to 1/25.',
        ' · Slayer points are given upon killing one based on Slayer level requirement and difficulty.',
        " · Two rolls on their normal counterpart's drop table (excluding unique superior table)",
        " · 25% chance for a superior slayer monster to spawn as a bloodthirsty variant, which gives three rolls on their normal counterpart's drop table.",
        '· Expeditious bracelets and bracelets of slaughter have a 35% chance to proc their effects, and no longer consumes charges.',
      ],
      icon: images['relic-bloodthirsty.png'],
    },
    {
      label: 'Infernal Gathering',
      description: [
        '· Must be unlocked in a bank as the player is given items upon unlocking this relic.',
        '· The player is given a set of Trailblazer tools that act as undegradable variants of crystal tools with no requirements, plus some additional effects:',
        ' · Trailblazer axe - Any logs chopped are burned, granting Firemaking experience regardless of level requirements. Performs 1 tick quicker than normal tools.',
        ' · Trailblazer pickaxe - Any ore mined will be smelted into a metal bar (if applicable), granting Smithing experience regardless of level requirements. Performs 1 tick quicker than normal tools.',
        " · Trailblazer harpoon - Any fish caught are cooked, granting Cooking experience regardless of level requirements. If equipped, it will also work for fish that don't require a harpoon to be caught, e.g. trout. Performs 2 ticks quicker than normal tools.",
      ],
      icon: images['relic-infernal-gathering.png'],
    },
    {
      label: 'Treasure Seeker',
      description: [
        '· NPCs that drop clue scrolls have a 1/15 chance of dropping one, including impling jars.',
        '· The rate of obtaining clue vessels are increased by 10x.',
        '· Clue scrolls have the lowest possible amount of steps.',
        '· Reward caskets will give the maximum amount of reward rolls.',
        '· Upon opening a reward casket, there is a chance that players will receive another reward casket of the same tier; this is more common the lower the tier.',
        ' · Additionally, there is a chance for the bonus casket to be upgraded to a tier above the one players initially opened.',
      ],
      icon: images['relic-treasure-seeker.png'],
    },
  ],
  [
    {
      label: 'Equilibrium',
      description: [
        "· Each time the player gains experience, they will gain additional experience equal to 10% of the player's total level (20% for the player's lowest level skill).",
        '· Additional experience given by this relic is not multiplied by the Leagues XP multiplier.',
        '· If chosen with Production Prodigy, each item processed will trigger this effect.',
      ],
      icon: images['relic-equilibrium.png'],
    },
    {
      label: "Farmer's Fortune",
      description: [
        '· Players will have a 20% chance to save the seed or sapling that was planted.',
        '· Farming patches will grow instantly and never catch diseases.',
        '· Players will harvest farming patches x25 faster, giving triple the usual yield and turning them into bank notes.',
      ],
      icon: images['relic-farmers-fortune.png'],
    },
    {
      label: 'Ruinous Powers',
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        '· Players are given the Ruinous Powers book, an item that allows players to alternate between the standard prayer book and the Ruinous Powers prayer book.',
      ],
      icon: images['relic-ruinous-powers.png'],
    },
  ],
  [
    {
      label: 'Berserker',
      description: [
        '· Damage dealt is increased by 0.4% for each hitpoint missing.',
        '· The player is guaranteed to hit their max hit on an NPC if the NPC is at full health.',
      ],
      icon: images['relic-berserker.png'],
    },
    {
      label: 'Soul Stealer',
      description: [
        "· The player's minimum hit is increased by 10%. For example, a damage roll of 0-50 would be increased to 5-50.",
        "· Upon a successful hit, there is a 50% chance that the player's Hitpoints and prayer points are restored by 10% of the damage dealt, rounded up.",
        '· The restoration effect excludes multi-target attacks and special attacks.',
        " · The Scythe of Vitur's multi-hit effect will apply if all three hits are hitting the same target.",
        ' · The venator bow will only apply for the first hit.',
      ],
      icon: images['relic-soul-stealer.png'],
    },
    {
      label: 'Weapon Master',
      description: [
        "· Special attacks always result in a successful hit against NPCs, and the minimum damage dealt is increased from 0 to 20% of the player's max hit.",
        "· The player's special attack energy is restored by 30% every 30 seconds. The lightbearer will increase this to 30% every 15 seconds.",
        '· If players do not have enough special attack energy to perform a special attack, they can instead choose to perform additional special attacks by sacrificing 25 Hitpoints.',
      ],
      icon: images['relic-weapon-master.png'],
    },
  ],
  [
    {
      label: 'Guardian',
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        '· Players are given the Guardian horn, which allows players to summon a guardian thrall that attacks for 30 minutes, with a damage roll of 6-15, an attack speed of 5, and an accuracy roll of 45,000.',
        '· The guardian thrall will attack with a style that the NPC has the lowest defence bonus for.',
        '· In multicombat areas, the guardian thrall will attempt to cast an area-of-effect attack if the primary target is weak to ranged or magic. This can be toggled via the guardian horn.',
        '· Arceuus thralls can be used alongside the guardian thrall.',
        '· Players cannot bring the guardian horn into locations where items are restricted. The Gauntlet is the only exception to this rule.',
        "· The guardian's outfit can be switched via the horn.",
      ],
      icon: images['relic-guardian.png'],
    },
    {
      label: 'Executioner',
      description: [
        '· Must be unlocked in a bank as the player is given an item upon unlocking this relic.',
        "· Players are given the Sage's axe, which allows players to instantly kill targets who have less than 20% of their health remaining.",
        "· The axe's attack range is 6 tiles (7 tiles on longrange).",
        "· NPCs with ranged damage reduction are still applied when using the Sage's axe (ex. the 1/7th ranged damage reduction from the Kraken).",
      ],
      icon: images['relic-executioner.png'],
    },
    {
      label: 'Undying Retribution',
      description: [
        "· Upon death, the player's hitpoints and prayer points are fully restored, dealing damage up to 200% of the player's Prayer level (50% for other players).",
        ' · The effect will only work in the same places that Retribution does.',
        '· There is a three-minute cooldown between uses, or when the player actually dies.',
        '· The damage effect will not work on NPCs that are immune to recoil damage, except for Nex, the Hespori, Vorkath, and all Wilderness bosses.',
        '· Dying with the effect active will not count towards death penalties in raids. For example, raid points are not deducted in the Chambers of Xeric if the effect activates.',
      ],
      icon: images['relic-undying-retribution.png'],
    },
  ],
];
