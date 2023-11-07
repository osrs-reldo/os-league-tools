import images from '../assets/images';

export const LEAGUE_START_DATE = new Date('2023-11-15T12:00:00+00:00');
export const LEAGUE_END_DATE = new Date('2024-01-10T12:00:00+00:00');

export const STATS = {
  Agility: {
    label: 'Agility',
    panelOrder: 4,
    icon: images['agility.gif'],
    iconMini: images['task-agility.png'],
    unchainedTalentEligible: true,
  },
  Attack: {
    label: 'Attack',
    panelOrder: 0,
    icon: images['attack.gif'],
    iconMini: images['task-attack.png'],
    unchainedTalentEligible: false,
  },
  Construction: {
    label: 'Construction',
    panelOrder: 21,
    icon: images['construction.gif'],
    iconMini: images['task-construction.png'],
    unchainedTalentEligible: true,
  },
  Cooking: {
    label: 'Cooking',
    panelOrder: 11,
    icon: images['cooking.gif'],
    iconMini: images['task-cooking.png'],
    isPossibleTutorialUnlock: false,
    unchainedTalentEligible: true,
  },
  Crafting: {
    label: 'Crafting',
    panelOrder: 13,
    icon: images['crafting.gif'],
    iconMini: images['task-crafting.png'],
    unchainedTalentEligible: true,
  },
  Defence: {
    label: 'Defence',
    panelOrder: 6,
    icon: images['defence.gif'],
    iconMini: images['task-defence.png'],
    unchainedTalentEligible: false,
  },
  Farming: {
    label: 'Farming',
    panelOrder: 20,
    icon: images['farming.gif'],
    iconMini: images['task-farming.png'],
    unchainedTalentEligible: true,
  },
  Firemaking: {
    label: 'Firemaking',
    panelOrder: 14,
    icon: images['firemaking.gif'],
    iconMini: images['task-firemaking.png'],
    isPossibleTutorialUnlock: false,
    unchainedTalentEligible: true,
  },
  Fishing: {
    label: 'Fishing',
    panelOrder: 8,
    icon: images['fishing.gif'],
    iconMini: images['task-fishing.png'],
    unchainedTalentEligible: true,
  },
  Fletching: {
    label: 'Fletching',
    panelOrder: 16,
    icon: images['fletching.gif'],
    iconMini: images['task-fletching.png'],
    unchainedTalentEligible: true,
  },
  Herblore: {
    label: 'Herblore',
    panelOrder: 7,
    icon: images['herblore.gif'],
    iconMini: images['task-herblore.png'],
    unchainedTalentEligible: true,
  },
  Hitpoints: {
    label: 'Hitpoints',
    panelOrder: 1,
    icon: images['hitpoints.gif'],
    iconMini: images['task-hitpoints.png'],
    unchainedTalentEligible: false,
  },
  Hunter: {
    label: 'Hunter',
    panelOrder: 22,
    icon: images['hunter.gif'],
    iconMini: images['task-hunter.png'],
    unchainedTalentEligible: true,
  },
  Magic: {
    label: 'Magic',
    panelOrder: 15,
    icon: images['magic.gif'],
    iconMini: images['task-magic.png'],
    unchainedTalentEligible: false,
  },
  Mining: {
    label: 'Mining',
    panelOrder: 2,
    icon: images['mining.gif'],
    iconMini: images['task-mining.png'],
    unchainedTalentEligible: true,
  },
  Prayer: {
    label: 'Prayer',
    panelOrder: 12,
    icon: images['prayer.gif'],
    iconMini: images['task-prayer.png'],
    unchainedTalentEligible: false,
  },
  Ranged: {
    label: 'Ranged',
    panelOrder: 9,
    icon: images['ranged.gif'],
    iconMini: images['task-ranged.png'],
    unchainedTalentEligible: false,
  },
  Runecraft: {
    label: 'Runecraft',
    panelOrder: 18,
    icon: images['runecraft.gif'],
    iconMini: images['task-runecraft.png'],
    unchainedTalentEligible: true,
  },
  Slayer: {
    label: 'Slayer',
    panelOrder: 19,
    icon: images['slayer.gif'],
    iconMini: images['task-slayer.png'],
    unchainedTalentEligible: true,
  },
  Smithing: {
    label: 'Smithing',
    panelOrder: 5,
    icon: images['smithing.gif'],
    iconMini: images['task-smithing.png'],
    unchainedTalentEligible: true,
  },
  Strength: {
    label: 'Strength',
    panelOrder: 3,
    icon: images['strength.gif'],
    iconMini: images['task-strength.png'],
    unchainedTalentEligible: false,
  },
  Thieving: {
    label: 'Thieving',
    panelOrder: 10,
    icon: images['thieving.gif'],
    iconMini: images['task-thieving.png'],
    unchainedTalentEligible: true,
  },
  Woodcutting: {
    label: 'Woodcutting',
    panelOrder: 17,
    icon: images['woodcutting.gif'],
    iconMini: images['task-woodcutting.png'],
    unchainedTalentEligible: true,
  },
  Overall: {
    label: 'Overall',
    panelOrder: 23,
    icon: images['task-total.png'],
    iconMini: images['task-total.png'],
    unchainedTalentEligible: false,
  },
  Combat: {
    label: 'Combat',
    panelOrder: null,
    icon: images['combat.png'],
    iconMini: images['task-combat.png'],
    unchainedTalentEligible: false,
  },
  QP: {
    label: 'Quest points',
    panelOrder: null,
    icon: images['tab-quests.png'],
    iconMini: images['task-quest.png'],
    unchainedTalentEligible: false,
  },
};

export const BOSSES = {
  ABYSSAL_SIRE: {
    hiscoresName: 'abyssalSire',
    label: 'Abyssal Sire',
    icon: images['abyssal-sire.png'],
  },
  ALCHEMICAL_HYDRA: {
    hiscoresName: 'alchemicalHydra',
    label: 'Alchemical Hydra',
    icon: images['alchemical-hydra.png'],
  },
  ARTIO: {
    hiscoresName: 'artio',
    label: 'Artio',
    icon: images['artio.png'],
  },
  BARROWS: {
    hiscoresName: 'barrows',
    label: 'Barrows',
    icon: images['barrows.png'],
  },
  BRYOPHYTA: {
    hiscoresName: 'bryophyta',
    label: 'Bryophyta',
    icon: images['bryophyta.png'],
  },
  CALLISTO: {
    hiscoresName: 'callisto',
    label: 'Callisto',
    icon: images['callisto.png'],
  },
  CALVARION: {
    hiscoresName: 'calvarion',
    label: "Calvar'ion",
    icon: images['calvarion.png'],
  },
  CERBERUS: {
    hiscoresName: 'cerberus',
    label: 'Cerberus',
    icon: images['cerberus.png'],
  },
  CHAMBERS_OF_XERIC: {
    hiscoresName: 'chambersOfXeric',
    label: 'Chambers of Xeric',
    icon: images['chambers-of-xeric.png'],
  },
  CHAMBERS_OF_XERIC_CHALLENGE_MODE: {
    hiscoresName: 'chambersOfXericChallengeMode',
    label: 'Chambers of Xeric: Challenge Mode',
    icon: images['chambers-of-xeric-challenge-mode.png'],
  },
  CHAOS_ELEMENTAL: {
    hiscoresName: 'chaosElemental',
    label: 'Chaos Elemental',
    icon: images['chaos-elemental.png'],
  },
  CHAOS_FANATIC: {
    hiscoresName: 'chaosFanatic',
    label: 'Chaos Fanatic',
    icon: images['chaos-fanatic.png'],
  },
  COMMANDER_ZILYANA: {
    hiscoresName: 'commanderZilyana',
    label: 'Commander Zilyana',
    icon: images['commander-zilyana.png'],
  },
  CORPOREAL_BEAST: {
    hiscoresName: 'corporealBeast',
    label: 'Corporeal Beast',
    icon: images['corporeal-beast.png'],
  },
  CRAZY_ARCHAEOLOGIST: {
    hiscoresName: 'crazyArchaeologist',
    label: 'Crazy Archaeologist',
    icon: images['crazy-archaeologist.png'],
  },
  DAGANNOTH_PRIME: {
    hiscoresName: 'dagannothPrime',
    label: 'Dagannoth Prime',
    icon: images['dagannoth-prime.png'],
  },
  DAGANNOTH_REX: {
    hiscoresName: 'dagannothRex',
    label: 'Dagannoth Rex',
    icon: images['dagannoth-rex.png'],
  },
  DAGANNOTH_SUPREME: {
    hiscoresName: 'dagannothSupreme',
    label: 'Dagannoth Supreme',
    icon: images['dagannoth-supreme.png'],
  },
  DERANGED_ARCHAEOLOGIST: {
    hiscoresName: 'derangedArchaeologist',
    label: 'Deranged Archaeologist',
    icon: images['deranged-archaeologist.png'],
    isDefaultUnlock: true,
  },
  DUKE_SUCELLUS: {
    hiscoresName: 'dukeSucellus',
    label: 'Duke Sucellus',
    icon: images['duke.png'],
  },
  GENERAL_GRAARDOR: {
    hiscoresName: 'generalGraardor',
    label: 'General Graardor',
    icon: images['general-graardor.png'],
  },
  GIANT_MOLE: {
    hiscoresName: 'giantMole',
    label: 'Giant Mole',
    icon: images['giant-mole.png'],
  },
  GROTESQUE_GUARDIANS: {
    hiscoresName: 'grotesqueGuardians',
    label: 'Grotesque Guardians',
    icon: images['grotesque-guardians.png'],
  },
  HESPORI: {
    hiscoresName: 'hespori',
    label: 'Hespori',
    icon: images['hespori.png'],
  },
  KALPHITE_QUEEN: {
    hiscoresName: 'kalphiteQueen',
    label: 'Kalphite Queen',
    icon: images['kalphite-queen.png'],
  },
  KING_BLACK_DRAGON: {
    hiscoresName: 'kingBlackDragon',
    label: 'King Black Dragon',
    icon: images['king-black-dragon.png'],
  },
  KRAKEN: {
    hiscoresName: 'kraken',
    label: 'Kraken',
    icon: images['kraken.png'],
  },
  KREEARRA: {
    hiscoresName: 'kreeArra',
    label: "Kree'Arra",
    icon: images['kreearra.png'],
  },
  KRIL_TSUTSAROTH: {
    hiscoresName: 'krilTsutsaroth',
    label: "K'ril Tsutsaroth",
    icon: images['kril-tsutsaroth.png'],
  },
  MIMIC: {
    hiscoresName: 'mimic',
    label: 'Mimic',
    icon: images['mimic.png'],
    isDefaultUnlock: true,
  },
  NEX: {
    hiscoresName: 'nex',
    label: 'Nex',
    icon: images['nex.png'],
  },
  NIGHTMARE: {
    hiscoresName: 'nightmare',
    label: 'Nightmare',
    icon: images['nightmare.png'],
  },
  PHOSANIS_NIGHTMARE: {
    hiscoresName: 'phosanisNightmare',
    label: "Phosani's Nightmare",
    icon: images['phosanis-nightmare.png'],
  },
  OBOR: {
    hiscoresName: 'obor',
    label: 'Obor',
    icon: images['obor.png'],
  },
  PHANTOM_MUSPAH: {
    hiscoresName: 'phantomMuspah',
    label: 'Phantom Muspah',
    icon: images['muspah.png'],
  },
  SARACHNIS: {
    hiscoresName: 'sarachnis',
    label: 'Sarachnis',
    icon: images['sarachnis.png'],
  },
  SCORPIA: {
    hiscoresName: 'scorpia',
    label: 'Scorpia',
    icon: images['scorpia.png'],
    isDefaultUnlock: true,
  },
  SKOTIZO: {
    hiscoresName: 'skotizo',
    label: 'Skotizo',
    icon: images['skotizo.png'],
  },
  SPINDEL: {
    hiscoresName: 'spindel',
    label: 'Spindel',
    icon: images['spindel.png'],
  },
  TEMPOROSS: {
    hiscoresName: 'tempoross',
    label: 'Tempoross',
    icon: images['tempoross.png'],
  },
  GAUNTLET: {
    hiscoresName: 'gauntlet',
    label: 'The Gauntlet',
    icon: images['the-gauntlet.png'],
  },
  CORRUPTED_GAUNTLET: {
    hiscoresName: 'corruptedGauntlet',
    label: 'The Corrupted Gauntlet',
    icon: images['the-corrupted-gauntlet.png'],
  },
  THE_LEVIATHAN: {
    hiscoresName: 'leviathan',
    label: 'The Leviathan',
    icon: images['leviathan.png'],
  },
  THE_WHISPERER: {
    hiscoresName: 'whisperer',
    label: 'The Whisperer',
    icon: images['whisperer.png'],
  },
  THEATRE_OF_BLOOD: {
    hiscoresName: 'theatreOfBlood',
    label: 'Theatre of Blood',
    icon: images['theatre-of-blood.png'],
  },
  THEATRE_OF_BLOOD_HARD_MODE: {
    hiscoresName: 'theatreOfBloodHardMode',
    label: 'Theatre of Blood: Hard Mode',
    icon: images['theatre-of-blood-hard-mode.png'],
  },
  THERMONUCLEAR_SMOKE_DEVIL: {
    hiscoresName: 'thermonuclearSmokeDevil',
    label: 'Thermonuclear Smoke Devil',
    icon: images['thermonuclear-smoke-devil.png'],
  },
  TOMBS_OF_AMASCUT: {
    hiscoresName: 'tombsOfAmascut',
    label: 'Tombs of Amascut',
    icon: images['toa.png'],
  },
  TOMBS_OF_AMASCUT_EXPERT: {
    hiscoresName: 'tombsOfAmascutExpertMode',
    label: 'Tombs of Amascut: Expert Mode',
    icon: images['toaExpert.png'],
  },
  TZKAL_ZUK: {
    hiscoresName: 'tzKalZuk',
    label: 'TzKal-Zuk',
    icon: images['tzkal-zuk.png'],
    isDefaultUnlock: true,
  },
  TZTOK_JAD: {
    hiscoresName: 'tzTokJad',
    label: 'TzTok-Jad',
    icon: images['tztok-jad.png'],
    isDefaultUnlock: true,
  },
  VARDORVIS: {
    hiscoresName: 'vardorvis',
    label: 'Vardorvis',
    icon: images['vardorvis.png'],
  },
  VENENATIS: {
    hiscoresName: 'venenatis',
    label: 'Venenatis',
    icon: images['venenatis.png'],
    isDefaultUnlock: true,
  },
  VETION: {
    hiscoresName: 'vetion',
    label: "Vet'ion",
    icon: images['vetion.png'],
    isDefaultUnlock: true,
  },
  VORKATH: {
    hiscoresName: 'vorkath',
    label: 'Vorkath',
    icon: images['vorkath.png'],
  },
  WINTERTODT: {
    hiscoresName: 'wintertodt',
    label: 'Wintertodt',
    icon: images['wintertodt.png'],
  },
  ZALCANO: {
    hiscoresName: 'zalcano',
    label: 'Zalcano',
    icon: images['zalcano.png'],
  },
  ZULRAH: {
    hiscoresName: 'zulrah',
    label: 'Zulrah',
    icon: images['zulrah.png'],
  },
};

export const DIFFICULTY = {
  BEGINNER: {
    label: 'Beginner',
    value: 5,
    icon: images['task-beginner.png'],
    sortOrder: 0,
  },
  EASY: {
    label: 'Easy',
    value: 5,
    icon: images['task-easy.png'],
    sortOrder: 1,
  },
  MEDIUM: {
    label: 'Medium',
    value: 25,
    icon: images['task-medium.png'],
    sortOrder: 2,
  },
  HARD: {
    label: 'Hard',
    value: 50,
    icon: images['task-hard.png'],
    sortOrder: 3,
  },
  ELITE: {
    label: 'Elite',
    value: 125,
    icon: images['task-elite.png'],
    sortOrder: 4,
  },
  MASTER: {
    label: 'Master',
    value: 250,
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
