import images from '../assets/images';

export const LEAGUE_START_DATE = new Date('2024-11-27T12:00:00+00:00');
export const LEAGUE_END_DATE = new Date('2025-01-22T12:00:00+00:00');

export const STATS = {
  Agility: {
    label: 'Agility',
    panelOrder: 4,
    icon: images['agility.gif'],
    iconMini: images['task-agility.png'],
    productionProdigyEligible: false,
  },
  Attack: {
    label: 'Attack',
    panelOrder: 0,
    icon: images['attack.gif'],
    iconMini: images['task-attack.png'],
    productionProdigyEligible: false,
  },
  Construction: {
    label: 'Construction',
    panelOrder: 21,
    icon: images['construction.gif'],
    iconMini: images['task-construction.png'],
    productionProdigyEligible: false,
  },
  Cooking: {
    label: 'Cooking',
    panelOrder: 11,
    icon: images['cooking.gif'],
    iconMini: images['task-cooking.png'],
    isPossibleTutorialUnlock: false,
    productionProdigyEligible: true,
  },
  Crafting: {
    label: 'Crafting',
    panelOrder: 13,
    icon: images['crafting.gif'],
    iconMini: images['task-crafting.png'],
    productionProdigyEligible: true,
  },
  Defence: {
    label: 'Defence',
    panelOrder: 6,
    icon: images['defence.gif'],
    iconMini: images['task-defence.png'],
    productionProdigyEligible: false,
  },
  Farming: {
    label: 'Farming',
    panelOrder: 20,
    icon: images['farming.gif'],
    iconMini: images['task-farming.png'],
    productionProdigyEligible: false,
  },
  Firemaking: {
    label: 'Firemaking',
    panelOrder: 14,
    icon: images['firemaking.gif'],
    iconMini: images['task-firemaking.png'],
    isPossibleTutorialUnlock: false,
    productionProdigyEligible: false,
  },
  Fishing: {
    label: 'Fishing',
    panelOrder: 8,
    icon: images['fishing.gif'],
    iconMini: images['task-fishing.png'],
    productionProdigyEligible: false,
  },
  Fletching: {
    label: 'Fletching',
    panelOrder: 16,
    icon: images['fletching.gif'],
    iconMini: images['task-fletching.png'],
    productionProdigyEligible: true,
  },
  Herblore: {
    label: 'Herblore',
    panelOrder: 7,
    icon: images['herblore.gif'],
    iconMini: images['task-herblore.png'],
    productionProdigyEligible: true,
  },
  Hitpoints: {
    label: 'Hitpoints',
    panelOrder: 1,
    icon: images['hitpoints.gif'],
    iconMini: images['task-hitpoints.png'],
    productionProdigyEligible: false,
  },
  Hunter: {
    label: 'Hunter',
    panelOrder: 22,
    icon: images['hunter.gif'],
    iconMini: images['task-hunter.png'],
    productionProdigyEligible: false,
  },
  Magic: {
    label: 'Magic',
    panelOrder: 15,
    icon: images['magic.gif'],
    iconMini: images['task-magic.png'],
    productionProdigyEligible: false,
  },
  Mining: {
    label: 'Mining',
    panelOrder: 2,
    icon: images['mining.gif'],
    iconMini: images['task-mining.png'],
    productionProdigyEligible: false,
  },
  Prayer: {
    label: 'Prayer',
    panelOrder: 12,
    icon: images['prayer.gif'],
    iconMini: images['task-prayer.png'],
    productionProdigyEligible: false,
  },
  Ranged: {
    label: 'Ranged',
    panelOrder: 9,
    icon: images['ranged.gif'],
    iconMini: images['task-ranged.png'],
    productionProdigyEligible: false,
  },
  Runecraft: {
    label: 'Runecraft',
    panelOrder: 18,
    icon: images['runecraft.gif'],
    iconMini: images['task-runecraft.png'],
    productionProdigyEligible: false,
  },
  Slayer: {
    label: 'Slayer',
    panelOrder: 19,
    icon: images['slayer.gif'],
    iconMini: images['task-slayer.png'],
    productionProdigyEligible: false,
  },
  Smithing: {
    label: 'Smithing',
    panelOrder: 5,
    icon: images['smithing.gif'],
    iconMini: images['task-smithing.png'],
    productionProdigyEligible: true,
  },
  Strength: {
    label: 'Strength',
    panelOrder: 3,
    icon: images['strength.gif'],
    iconMini: images['task-strength.png'],
    productionProdigyEligible: false,
  },
  Thieving: {
    label: 'Thieving',
    panelOrder: 10,
    icon: images['thieving.gif'],
    iconMini: images['task-thieving.png'],
    productionProdigyEligible: false,
  },
  Woodcutting: {
    label: 'Woodcutting',
    panelOrder: 17,
    icon: images['woodcutting.gif'],
    iconMini: images['task-woodcutting.png'],
    productionProdigyEligible: false,
  },
  Overall: {
    label: 'Overall',
    panelOrder: 23,
    icon: images['task-total.png'],
    iconMini: images['task-total.png'],
    productionProdigyEligible: false,
  },
  Combat: {
    label: 'Combat',
    panelOrder: null,
    icon: images['combat.png'],
    iconMini: images['task-combat.png'],
    productionProdigyEligible: false,
  },
  QP: {
    label: 'Quest points',
    panelOrder: null,
    icon: images['tab-quests.png'],
    iconMini: images['task-quest.png'],
    productionProdigyEligible: false,
  },
};

export const BOSSES = {
  SOUL_WARS_ZEAL: {
    highscoresName: 'soulWarsZeal',
    label: 'Soul Wars Zeal',
    icon: images['soul-wars-zeal.png'],
    regions: ['Misthalin'],
  },
  RIFTS_CLOSED: {
    highscoresName: 'riftsClosed',
    label: 'Rifts Closed',
    icon: images['rifts-closed.png'],
    regions: ['Desert'],
  },
  COLLESEUM_GLORY: {
    highscoresName: 'colosseumGlory',
    label: 'Colosseum Glory',
    icon: images['colosseum-glory.png'],
    regions: ['Varlamore'],
  },
  ABYSSAL_SIRE: {
    hiscoresName: 'abyssalSire',
    label: 'Abyssal Sire',
    icon: images['abyssal-sire.png'],
    regions: ['Misthalin'],
  },
  ALCHEMICAL_HYDRA: {
    hiscoresName: 'alchemicalHydra',
    label: 'Alchemical Hydra',
    icon: images['alchemical-hydra.png'],
    regions: ['Kourend'],
  },
  AMOXLIATL: {
    highscoresName: 'amoxliatl',
    label: 'Amoxliatl',
    icon: images['amoxliatl.png'],
    regions: ['Varlamore'],
  },
  ARAXXOR: {
    highscoresName: 'araxxor',
    label: 'Araxxor',
    icon: images['araxxor.png'],
    regions: ['Morytania'],
  },
  ARTIO: {
    hiscoresName: 'artio',
    label: 'Artio',
    icon: images['artio.png'],
    regions: ['Wilderness'],
  },
  BARROWS: {
    hiscoresName: 'barrows',
    label: 'Barrows Chests',
    icon: images['barrows.png'],
    regions: ['Morytania'],
  },
  BRYOPHYTA: {
    hiscoresName: 'bryophyta',
    label: 'Bryophyta',
    icon: images['bryophyta.png'],
    regions: ['Misthalin'],
  },
  CALLISTO: {
    hiscoresName: 'callisto',
    label: 'Callisto',
    icon: images['callisto.png'],
    regions: ['Wilderness'],
  },
  CALVARION: {
    hiscoresName: 'calvarion',
    label: "Calvar'ion",
    icon: images['calvarion.png'],
    regions: ['Wilderness'],
  },
  CERBERUS: {
    hiscoresName: 'cerberus',
    label: 'Cerberus',
    icon: images['cerberus.png'],
    regions: ['Asgarnia'],
  },
  CHAMBERS_OF_XERIC: {
    hiscoresName: 'chambersOfXeric',
    label: 'Chambers of Xeric',
    icon: images['chambers-of-xeric.png'],
    regions: ['Kourend'],
  },
  CHAMBERS_OF_XERIC_CHALLENGE_MODE: {
    hiscoresName: 'chambersOfXericChallengeMode',
    label: 'Chambers of Xeric: Challenge Mode',
    icon: images['chambers-of-xeric-challenge-mode.png'],
    regions: ['Kourend'],
  },
  CHAOS_ELEMENTAL: {
    hiscoresName: 'chaosElemental',
    label: 'Chaos Elemental',
    icon: images['chaos-elemental.png'],
    regions: ['Wilderness'],
  },
  CHAOS_FANATIC: {
    hiscoresName: 'chaosFanatic',
    label: 'Chaos Fanatic',
    icon: images['chaos-fanatic.png'],
    regions: ['Wilderness'],
  },
  COMMANDER_ZILYANA: {
    hiscoresName: 'commanderZilyana',
    label: 'Commander Zilyana',
    icon: images['commander-zilyana.png'],
    regions: ['Asgarnia'],
  },
  CORPOREAL_BEAST: {
    hiscoresName: 'corporealBeast',
    label: 'Corporeal Beast',
    icon: images['corporeal-beast.png'],
    regions: ['Wilderness'],
  },
  CRAZY_ARCHAEOLOGIST: {
    hiscoresName: 'crazyArchaeologist',
    label: 'Crazy Archaeologist',
    icon: images['crazy-archaeologist.png'],
    regions: ['Wilderness'],
  },
  DAGANNOTH_PRIME: {
    hiscoresName: 'dagannothPrime',
    label: 'Dagannoth Prime',
    icon: images['dagannoth-prime.png'],
    regions: ['Fremennik'],
  },
  DAGANNOTH_REX: {
    hiscoresName: 'dagannothRex',
    label: 'Dagannoth Rex',
    icon: images['dagannoth-rex.png'],
    regions: ['Fremennik'],
  },
  DAGANNOTH_SUPREME: {
    hiscoresName: 'dagannothSupreme',
    label: 'Dagannoth Supreme',
    icon: images['dagannoth-supreme.png'],
    regions: ['Fremennik'],
  },
  DERANGED_ARCHAEOLOGIST: {
    hiscoresName: 'derangedArchaeologist',
    label: 'Deranged Archaeologist',
    icon: images['deranged-archaeologist.png'],
    regions: ['Misthalin'],
  },
  DUKE_SUCELLUS: {
    hiscoresName: 'dukeSucellus',
    label: 'Duke Sucellus',
    icon: images['duke.png'],
    regions: ['Desert', 'Fremennik'],
  },
  GENERAL_GRAARDOR: {
    hiscoresName: 'generalGraardor',
    label: 'General Graardor',
    icon: images['general-graardor.png'],
    regions: ['Asgarnia'],
  },
  GIANT_MOLE: {
    hiscoresName: 'giantMole',
    label: 'Giant Mole',
    icon: images['giant-mole.png'],
    regions: ['Asgarnia'],
  },
  GROTESQUE_GUARDIANS: {
    hiscoresName: 'grotesqueGuardians',
    label: 'Grotesque Guardians',
    icon: images['grotesque-guardians.png'],
    regions: ['Morytania'],
  },
  HESPORI: {
    hiscoresName: 'hespori',
    label: 'Hespori',
    icon: images['hespori.png'],
    regions: ['Kourend'],
  },
  KALPHITE_QUEEN: {
    hiscoresName: 'kalphiteQueen',
    label: 'Kalphite Queen',
    icon: images['kalphite-queen.png'],
    regions: ['Desert'],
  },
  KING_BLACK_DRAGON: {
    hiscoresName: 'kingBlackDragon',
    label: 'King Black Dragon',
    icon: images['king-black-dragon.png'],
    regions: ['Wilderness'],
  },
  KRAKEN: {
    hiscoresName: 'kraken',
    label: 'Kraken',
    icon: images['kraken.png'],
    regions: ['Kandarin'],
  },
  KREEARRA: {
    hiscoresName: 'kreeArra',
    label: "Kree'Arra",
    icon: images['kreearra.png'],
    regions: ['Asgarnia'],
  },
  KRIL_TSUTSAROTH: {
    hiscoresName: 'krilTsutsaroth',
    label: "K'ril Tsutsaroth",
    icon: images['kril-tsutsaroth.png'],
    regions: ['Asgarnia'],
  },
  LUNAR_CHESTS: {
    highscoresName: 'lunarChests',
    label: 'Lunar Chests',
    icon: images['lunar-chests.png'],
    regions: ['Varlamore'],
  },
  MIMIC: {
    hiscoresName: 'mimic',
    label: 'Mimic',
    icon: images['mimic.png'],
    regions: ['Kourend'],
  },
  NEX: {
    hiscoresName: 'nex',
    label: 'Nex',
    icon: images['nex.png'],
    regions: ['Asgarnia'],
  },
  NIGHTMARE: {
    hiscoresName: 'nightmare',
    label: 'Nightmare',
    icon: images['nightmare.png'],
    regions: ['Morytania'],
  },
  PHOSANIS_NIGHTMARE: {
    hiscoresName: 'phosanisNightmare',
    label: "Phosani's Nightmare",
    icon: images['phosanis-nightmare.png'],
    regions: ['Morytania'],
  },
  OBOR: {
    hiscoresName: 'obor',
    label: 'Obor',
    icon: images['obor.png'],
    regions: ['Misthalin'],
  },
  PHANTOM_MUSPAH: {
    hiscoresName: 'phantomMuspah',
    label: 'Phantom Muspah',
    icon: images['muspah.png'],
    regions: ['Fremennik'],
  },
  SARACHNIS: {
    hiscoresName: 'sarachnis',
    label: 'Sarachnis',
    icon: images['sarachnis.png'],
    regions: ['Kourend'],
  },
  SCORPIA: {
    hiscoresName: 'scorpia',
    label: 'Scorpia',
    icon: images['scorpia.png'],
    regions: ['Wilderness'],
  },
  SCURRIUS: {
    highscoresName: 'scurrius',
    label: 'Scurrius',
    icon: images['scurrius.png'],
    regions: ['Misthalin'],
  },
  SKOTIZO: {
    hiscoresName: 'skotizo',
    label: 'Skotizo',
    icon: images['skotizo.png'],
    regions: ['Kourend'],
  },
  SOL_HEREDIT: {
    highscoresName: 'solHeredit',
    label: 'Sol Heredit',
    icon: images['sol-heredit.png'],
    regions: ['Varlamore'],
  },
  SPINDEL: {
    hiscoresName: 'spindel',
    label: 'Spindel',
    icon: images['spindel.png'],
    regions: ['Wilderness'],
  },
  TEMPOROSS: {
    hiscoresName: 'tempoross',
    label: 'Tempoross',
    icon: images['tempoross.png'],
    regions: ['Desert'],
  },
  GAUNTLET: {
    hiscoresName: 'gauntlet',
    label: 'The Gauntlet',
    icon: images['the-gauntlet.png'],
    regions: ['Tirannwn'],
  },
  CORRUPTED_GAUNTLET: {
    hiscoresName: 'corruptedGauntlet',
    label: 'The Corrupted Gauntlet',
    icon: images['the-corrupted-gauntlet.png'],
    regions: ['Tirannwn'],
  },
  HUEYCOATL: {
    highscoresName: 'hueycoatl',
    label: 'The Hueycoatl',
    icon: images['the-huey-coatl.png'],
    regions: ['Varlamore'],
  },
  THE_LEVIATHAN: {
    hiscoresName: 'leviathan',
    label: 'The Leviathan',
    icon: images['leviathan.png'],
    regions: ['Desert', 'Misthalin'],
  },
  THE_WHISPERER: {
    hiscoresName: 'whisperer',
    label: 'The Whisperer',
    icon: images['whisperer.png'],
    regions: ['Desert', 'Asgarnia'],
  },
  THEATRE_OF_BLOOD: {
    hiscoresName: 'theatreOfBlood',
    label: 'Theatre of Blood',
    icon: images['theatre-of-blood.png'],
    regions: ['Morytania'],
  },
  THEATRE_OF_BLOOD_HARD_MODE: {
    hiscoresName: 'theatreOfBloodHardMode',
    label: 'Theatre of Blood: Hard Mode',
    icon: images['theatre-of-blood-hard-mode.png'],
    regions: ['Morytania'],
  },
  THERMONUCLEAR_SMOKE_DEVIL: {
    hiscoresName: 'thermonuclearSmokeDevil',
    label: 'Thermonuclear Smoke Devil',
    icon: images['thermonuclear-smoke-devil.png'],
    regions: ['Kandarin'],
  },
  TOMBS_OF_AMASCUT: {
    hiscoresName: 'tombsOfAmascut',
    label: 'Tombs of Amascut',
    icon: images['toa.png'],
    regions: ['Desert'],
  },
  TOMBS_OF_AMASCUT_EXPERT: {
    hiscoresName: 'tombsOfAmascutExpertMode',
    label: 'Tombs of Amascut: Expert Mode',
    icon: images['toaExpert.png'],
    regions: ['Desert'],
  },
  TZKAL_ZUK: {
    hiscoresName: 'tzKalZuk',
    label: 'TzKal-Zuk',
    icon: images['tzkal-zuk.png'],
    regions: ['Karamja'],
  },
  TZTOK_JAD: {
    hiscoresName: 'tzTokJad',
    label: 'TzTok-Jad',
    icon: images['tztok-jad.png'],
    regions: ['Karamja'],
  },
  VARDORVIS: {
    hiscoresName: 'vardorvis',
    label: 'Vardorvis',
    icon: images['vardorvis.png'],
    regions: ['Desert', 'Kourend'],
  },
  VENENATIS: {
    hiscoresName: 'venenatis',
    label: 'Venenatis',
    icon: images['venenatis.png'],
    regions: ['Wilderness'],
  },
  VETION: {
    hiscoresName: 'vetion',
    label: "Vet'ion",
    icon: images['vetion.png'],
    regions: ['Wilderness'],
  },
  VORKATH: {
    hiscoresName: 'vorkath',
    label: 'Vorkath',
    icon: images['vorkath.png'],
    regions: ['Fremennik'],
  },
  WINTERTODT: {
    hiscoresName: 'wintertodt',
    label: 'Wintertodt',
    icon: images['wintertodt.png'],
    regions: ['Kourend'],
  },
  ZALCANO: {
    hiscoresName: 'zalcano',
    label: 'Zalcano',
    icon: images['zalcano.png'],
    regions: ['Tirannwn'],
  },
  ZULRAH: {
    hiscoresName: 'zulrah',
    label: 'Zulrah',
    icon: images['zulrah.png'],
    regions: ['Tirannwn'],
  },
};

export const DIFFICULTY = {
  EASY: {
    label: 'Easy',
    value: 10,
    icon: images['task-easy.png'],
    sortOrder: 1,
  },
  MEDIUM: {
    label: 'Medium',
    value: 30,
    icon: images['task-medium.png'],
    sortOrder: 2,
  },
  HARD: {
    label: 'Hard',
    value: 80,
    icon: images['task-hard.png'],
    sortOrder: 3,
  },
  ELITE: {
    label: 'Elite',
    value: 200,
    icon: images['task-elite.png'],
    sortOrder: 4,
  },
  MASTER: {
    label: 'Master',
    value: 400,
    icon: images['task-master.png'],
    sortOrder: 5,
  },
};

export const DIARY_DIFFICULTY = {
  EASY: {
    label: 'Easy',
    icon: images['task-easy.png'],
    sortOrder: 1,
  },
  MEDIUM: {
    label: 'Medium',
    icon: images['task-medium.png'],
    sortOrder: 2,
  },
  HARD: {
    label: 'Hard',
    icon: images['task-hard.png'],
    sortOrder: 3,
  },
  ELITE: {
    label: 'Elite',
    icon: images['task-elite.png'],
    sortOrder: 4,
  },
};

export const CLUE_TIERS = ['Beginner', 'Easy', 'Medium', 'Hard', 'Elite', 'Master'];

export const DEFAULT_NOTES_TEXT = '(none)';

export const DIARY_LOCATIONS = {
  ARDOUGNE: {
    id: 0,
    label: 'Ardougne',
    icon: images['task-kandarin.png'],
  },
  DESERT: {
    id: 1,
    label: 'Desert',
    icon: images['task-kharidian.png'],
  },
  FALADOR: {
    id: 2,
    label: 'Falador',
    icon: images['task-asgarnia.png'],
  },
  FREMENNIK: {
    id: 3,
    label: 'Fremennik',
    icon: images['task-fremennik.png'],
  },
  KANDARIN: {
    id: 4,
    label: 'Kandarin',
    icon: images['task-kandarin.png'],
  },
  KARAMJA: {
    id: 5,
    label: 'Karamja',
    icon: images['task-karamja.png'],
  },
  KOUREND: {
    id: 6,
    label: 'Kourend',
    icon: images['task-xeric.png'],
  },
  LUMBRIDGE: {
    id: 7,
    label: 'Lumbridge',
    icon: images['task-misthalin.png'],
  },
  MORYTANIA: {
    id: 8,
    label: 'Morytania',
    icon: images['task-morytania.png'],
  },
  VARROCK: {
    id: 9,
    label: 'Varrock',
    icon: images['task-misthalin.png'],
  },
  WESTERN: {
    id: 10,
    label: 'W. Provinces',
    icon: images['task-tiranwnn.png'],
  },
  WILDERNESS: {
    id: 11,
    label: 'Wilderness',
    icon: images['task-wilderness.png'],
  },
};
