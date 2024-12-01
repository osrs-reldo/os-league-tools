import React from 'react';
import images from '../assets/images';

export const CATEGORY = {
  BOSSING: {
    label: 'Bossing',
    icon: images['task-bossing.png'],
    subcategories: {
      AMOXLIATL: {
        label: 'Amoxliatl',
        icon: images['amoxliatl.png'],
      },
      ARAXXOR: {
        label: 'Araxxor',
        icon: images['araxxor.png'],
      },
      BARROWS: {
        label: 'Barrows',
        icon: images['barrows.png'],
      },
      BRYOPHYTA: {
        label: 'Bryophyta',
        icon: images['bryophyta.png'],
      },
      CERBERUS: {
        label: 'Cerberus',
        icon: images['cerberus.png'],
      },
      CORP: {
        label: 'Corporeal Beast',
        icon: images['corporeal-beast.png'],
      },
      DKS: {
        label: 'Dagannoth Kings',
        icon: images['dagannoth-supreme.png'],
      },
      DT2: {
        label: 'The Forgotten Four',
        icon: images['duke.png'],
      },
      GAUNTLET: {
        label: 'Corrupted Gauntlet',
        icon: images['the-gauntlet.png'],
      },
      GENERAL: {
        label: 'General',
        icon: images['task-green.png'],
      },
      GGS: {
        label: 'Grotesque Guardians',
        icon: images['grotesque-guardians.png'],
      },
      GWD: {
        label: 'God Wars',
        icon: images['general-graardor.png'],
      },
      HUEYCOATL: {
        label: 'Hueycoatl',
        icon: images['the-huey-coatl.png'],
      },
      HYDRA: {
        label: 'Alchemical Hydra',
        icon: images['alchemical-hydra.png'],
      },
      INFERNO: {
        label: 'Inferno',
        icon: images['tzkal-zuk.png'],
      },
      JAD: {
        label: 'Fight Caves',
        icon: images['tztok-jad.png'],
      },
      KQ: {
        label: 'Kalphite Queen',
        icon: images['kalphite-queen.png'],
      },
      KRAKEN: {
        label: 'Kraken',
        icon: images['kraken.png'],
      },
      MOLE: {
        label: 'Giant Mole',
        icon: images['giant-mole.png'],
      },
      MOONS: {
        label: 'Moons of Peril',
        icon: images['lunar-chests.png'],
      },
      MUSPAH: {
        label: 'Phantom Muspah',
        icon: images['muspah.png'],
      },
      NEX: {
        label: 'Nex',
        icon: images['nex.png'],
      },
      NIGHTMARE: {
        label: 'Nightmare',
        icon: images['nightmare.png'],
      },
      OBOR: {
        label: 'Obor',
        icon: images['obor.png'],
      },
      SARACHNIS: {
        label: 'Sarachnis',
        icon: images['sarachnis.png'],
      },
      SCURRIUS: {
        label: 'Scurrius',
        icon: images['scurrius.png'],
      },
      SIRE: {
        label: 'Abyssal Sire',
        icon: images['abyssal-sire.png'],
      },
      SKOTIZO: {
        label: 'Skotizo',
        icon: images['skotizo.png'],
      },
      SOL: {
        label: 'The Colosseum',
        icon: images['sol-heredit.png'],
      },
      THERMY: {
        label: 'Thermy',
        icon: images['thermonuclear-smoke-devil.png'],
      },
      VORKATH: {
        label: 'Vorkath',
        icon: images['vorkath.png'],
      },
      WILDERNESS: {
        label: 'Wilderness',
        icon: images['chaos-elemental.png'],
      },
      ZULRAH: {
        label: 'Zulrah',
        icon: images['zulrah.png'],
      },
    },
  },
  CLUES: {
    label: 'Clues',
    icon: images['task-clue.png'],
    subcategories: {
      BEGINNER: {
        customSort: 0,
        label: 'Beginner',
        icon: images['task-grey.png'],
      },
      EASY: {
        customSort: 1,
        label: 'Easy',
        icon: images['task-green.png'],
      },
      MEDIUM: {
        customSort: 2,
        label: 'Medium',
        icon: images['task-blue.png'],
      },
      HARD: {
        customSort: 3,
        label: 'Hard',
        icon: images['task-purple.png'],
      },
      ELITE: {
        customSort: 4,
        label: 'Elite',
        icon: images['task-yellow.png'],
      },
      MASTER: {
        customSort: 5,
        label: 'Master',
        icon: images['task-red.png'],
      },
      SHARED: {
        customSort: 6,
        label: 'Shared',
        icon: images['task-book-blue.png'],
      },
      GENERAL: {
        customSort: 7,
        label: 'General',
        icon: images['task-green.png'],
      },
    },
  },
  COMBAT: {
    label: 'Combat',
    icon: images['task-combat.png'],
    subcategories: {
      ATTACK: {
        label: 'Attack',
        icon: images['task-attack.png'],
      },
      DEFENCE: {
        label: 'Defence',
        icon: images['task-defence.png'],
      },
      GENERAL: {
        label: 'General',
        icon: images['task-green.png'],
      },
      HITPOINTS: {
        label: 'Hitpoints',
        icon: images['task-hitpoints.png'],
      },
      LEVEL: {
        label: 'Combat level',
        icon: images['task-combat.png'],
      },
      MAGIC: {
        label: 'Magic',
        icon: images['task-combat-magic.png'],
      },
      MELEE: {
        label: 'Melee',
        icon: images['task-combat-melee.png'],
      },
      PRAYER: {
        label: 'Prayer',
        icon: images['task-prayer.png'],
      },
      RANGED: {
        label: 'Ranged',
        icon: images['task-combat-ranged.png'],
      },
      SLAYER: {
        label: 'Slayer',
        icon: images['task-slayer.png'],
      },
      STRENGTH: {
        label: 'Strength',
        icon: images['task-strength.png'],
      },
    },
  },
  DIARIES: {
    label: 'Diaries',
    icon: images['task-diary.png'],
    subcategories: {
      EASY: {
        customSort: 0,
        label: 'Easy',
        icon: images['task-bronze-star.png'],
      },
      MEDIUM: {
        customSort: 1,
        label: 'Medium',
        icon: images['task-silver-star.png'],
      },
      HARD: {
        customSort: 2,
        label: 'Hard',
        icon: images['task-gold-star.png'],
      },
      ELITE: {
        customSort: 3,
        label: 'Elite',
        icon: images['task-two-stars.png'],
      },
      MASTER: {
        customSort: 4,
        label: 'Master',
        icon: images['task-three-stars.png'],
      },
      GRANDMASTER: {
        customSort: 5,
        label: 'Grandmaster',
        icon: images['task-crest.png'],
      },
      GENERAL: {
        customSort: 6,
        label: 'General',
        icon: images['task-green.png'],
      },
    },
  },
  MINIGAMES: {
    label: 'Minigames & Skilling bosses',
    icon: images['task-minigame.png'],
    subcategories: {
      TEMPOROSS: {
        label: 'Tempoross',
        icon: images['tempoross.png'],
      },
      WINTERTODT: {
        label: 'Wintertodt',
        icon: images['wintertodt.png'],
      },
      ZALCANO: {
        label: 'Zalcano',
        icon: images['zalcano.png'],
      },
      BA: {
        label: 'Barbarian Assault',
        icon: images['task-strength.png'],
      },
      OTHER: {
        label: 'Other',
        icon: images['task-green.png'],
      },
      PC: {
        label: 'Pest Control',
        icon: images['task-guthix.png'],
      },
      SHADES: {
        label: "Shades of Mort'ton",
        icon: images['task-firemaking.png'],
      },
      CHOMPIES: {
        label: 'Chompy Bird Hunting',
        icon: images['task-ranged.png'],
      },
    },
  },
  QUESTS: {
    label: 'Quests',
    icon: images['task-quest.png'],
    subcategories: {
      NOVICE: {
        customSort: 0,
        label: 'Novice',
        icon: images['task-bronze-star.png'],
      },
      INTERMEDIATE: {
        customSort: 1,
        label: 'Intermediate',
        icon: images['task-silver-star.png'],
      },
      EXPERIENCED: {
        customSort: 2,
        label: 'Experienced',
        icon: images['task-gold-star.png'],
      },
      MASTER: {
        customSort: 3,
        label: 'Master',
        icon: images['task-two-stars.png'],
      },
      GRANDMASTER: {
        customSort: 4,
        label: 'Grandmaster',
        icon: images['task-three-stars.png'],
      },
    },
  },
  RAIDS: {
    label: 'Raids',
    icon: images['task-raid.png'],
    subcategories: {
      TOB: {
        label: 'Theatre of Blood',
        icon: images['theatre-of-blood.png'],
      },
      COX: {
        label: 'Chambers of Xeric',
        icon: images['chambers-of-xeric.png'],
      },
      TOA: {
        label: 'Tombs of Amascut',
        icon: images['toa.png'],
      },
    },
  },
  SKILLING: {
    label: 'Skilling',
    icon: images['task-total.png'],
    subcategories: {
      AGILITY: { label: 'Agility', icon: images['task-agility.png'] },
      CONSTRUCTION: { label: 'Construction', icon: images['task-construction.png'] },
      COOKING: { label: 'Cooking', icon: images['task-cooking.png'] },
      CRAFTING: { label: 'Crafting', icon: images['task-crafting.png'] },
      FARMING: { label: 'Farming', icon: images['task-farming.png'] },
      FIREMAKING: { label: 'Firemaking', icon: images['task-firemaking.png'] },
      FISHING: { label: 'Fishing', icon: images['task-fishing.png'] },
      FLETCHING: { label: 'Fletching', icon: images['task-fletching.png'] },
      GENERAL: { label: 'General', icon: images['task-green.png'] },
      HERBLORE: { label: 'Herblore', icon: images['task-herblore.png'] },
      HUNTER: { label: 'Hunter', icon: images['task-hunter.png'] },
      MINING: { label: 'Mining', icon: images['task-mining.png'] },
      RUNECRAFT: { label: 'Runecraft', icon: images['task-runecraft.png'] },
      SMITHING: { label: 'Smithing', icon: images['task-smithing.png'] },
      THIEVING: { label: 'Thieving', icon: images['task-thieving.png'] },
      WOODCUTTING: { label: 'Woodcutting', icon: images['task-woodcutting.png'] },
    },
  },
  OTHER: {
    label: 'Other',
    icon: images['task-inventory.png'],
    subcategories: {
      BASE: {
        label: 'Base Level',
        icon: images['task-gold-star.png'],
      },
      GENERAL: { label: 'General', icon: images['task-green.png'] },
      MILESTONE: {
        label: 'Milestone Level',
        icon: images['task-bronze-star.png'],
      },
      TOTAL: {
        label: 'Total Level',
        icon: images['task-level.png'],
      },
      COLLECTION_LOG: {
        label: 'Collection Log',
        icon: images['task-diary.png'],
      },
    },
  },
};

export const getCategoriesForStore = () => {
  const allCategories = [];

  Object.values(CATEGORY).forEach(({ label: catLabel, subcategories }) => {
    Object.values(subcategories).forEach(({ label: subcatLabel }) => {
      allCategories.push(`${catLabel}-${subcatLabel}`);
    });
  });

  return allCategories;
};

export function formatCategoriesForCheckboxTree() {
  const nodes = [];

  const checkboxLabel = ({ icon, label }) => (
    <span className='inline-flex items-center'>
      <img className='mr-2' src={icon} alt={label} /> {label}
    </span>
  );

  for (const category of Object.values(CATEGORY)) {
    nodes.push({
      label: checkboxLabel(category),
      value: category.label,
      children: Object.values(category.subcategories).map(subcategory => ({
        label: checkboxLabel(subcategory),
        value: `${category.label}-${subcategory.label}`,
      })),
    });
  }

  return nodes;
}
