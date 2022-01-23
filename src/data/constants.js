/* eslint-disable  */
import images from '../assets/images';

export const STATS = {
    Agility: {
        label: 'Agility',
        panelOrder: 9,
        icon: images['agility.gif'],
        iconMini: images['task-agility.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Attack: {
        label: 'Attack',
        panelOrder: 0,
        icon: images['attack.gif'],
        iconMini: images['task-attack.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 20,
    },
    Construction: {
        label: 'Construction',
        panelOrder: 7,
        icon: images['construction.gif'],
        iconMini: images['task-construction.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 30,
    },
    Cooking: {
        label: 'Cooking',
        panelOrder: 19,
        icon: images['cooking.gif'],
        iconMini: images['task-cooking.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 20,
    },
    Crafting: {
        label: 'Crafting',
        panelOrder: 12,
        icon: images['crafting.gif'],
        iconMini: images['task-crafting.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 30,
    },
    Defence: {
        label: 'Defence',
        panelOrder: 2,
        icon: images['defence.gif'],
        iconMini: images['task-defence.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Farming: {
        label: 'Farming',
        panelOrder: 22,
        icon: images['farming.gif'],
        iconMini: images['task-farming.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 20,
    },
    Firemaking: {
        label: 'Firemaking',
        panelOrder: 20,
        icon: images['firemaking.gif'],
        iconMini: images['task-firemaking.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Fishing: {
        label: 'Fishing',
        panelOrder: 18,
        icon: images['fishing.gif'],
        iconMini: images['task-fishing.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Fletching: {
        label: 'Fletching',
        panelOrder: 13,
        icon: images['fletching.gif'],
        iconMini: images['task-fletching.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 20,
    },
    Herblore: {
        label: 'Herblore',
        panelOrder: 10,
        icon: images['herblore.gif'],
        iconMini: images['task-herblore.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 30,
    },
    Hitpoints: {
        label: 'Hitpoints',
        panelOrder: 8,
        icon: images['hitpoints.gif'],
        iconMini: images['task-hitpoints.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Hunter: {
        label: 'Hunter',
        panelOrder: 15,
        icon: images['hunter.gif'],
        iconMini: images['task-hunter.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Magic: {
        label: 'Magic',
        panelOrder: 5,
        icon: images['magic.gif'],
        iconMini: images['task-magic.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 20,
    },
    Mining: {
        label: 'Mining',
        panelOrder: 16,
        icon: images['mining.gif'],
        iconMini: images['task-mining.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Prayer: {
        label: 'Prayer',
        panelOrder: 4,
        icon: images['prayer.gif'],
        iconMini: images['task-prayer.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 30,
    },
    Ranged: {
        label: 'Ranged',
        panelOrder: 3,
        icon: images['ranged.gif'],
        iconMini: images['task-ranged.png'],
        isPossibleTutorialUnlock: true,
        unlockCost: 20,
    },
    Runecraft: {
        label: 'Runecraft',
        panelOrder: 6,
        icon: images['runecraft.gif'],
        iconMini: images['task-runecraft.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Slayer: {
        label: 'Slayer',
        panelOrder: 14,
        icon: images['slayer.gif'],
        iconMini: images['task-slayer.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 30,
    },
    Smithing: {
        label: 'Smithing',
        panelOrder: 17,
        icon: images['smithing.gif'],
        iconMini: images['task-smithing.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 20,
    },
    Strength: {
        label: 'Strength',
        panelOrder: 1,
        icon: images['strength.gif'],
        iconMini: images['task-strength.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 20,
    },
    Thieving: {
        label: 'Thieving',
        panelOrder: 11,
        icon: images['thieving.gif'],
        iconMini: images['task-thieving.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 0,
    },
    Woodcutting: {
        label: 'Woodcutting',
        panelOrder: 21,
        icon: images['woodcutting.gif'],
        iconMini: images['task-woodcutting.png'],
        isPossibleTutorialUnlock: false,
        unlockCost: 10,
    },
    Overall: {
        label: 'Overall',
        panelOrder: 23,
        icon: images['task-total.png'],
        iconMini: images['task-total.png'],
        isPossibleTutorialUnlock: null,
        unlockCost: null,
    },
    QP: {
        label: 'Quest points',
        panelOrder: null,
        icon: images['tab-quests.png'],
        iconMini: images['task-quest.png'],
        isPossibleTutorialUnlock: null,
        unlockCost: null,
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

export const SUBCATEGORY = {
    // Bossing
    INFERNO: {
        id: 0,
        label: 'Inferno',
        icon: images['task-inferno.png'],
    },
    SIRE: {
        id: 1,
        label: 'Abyssal Sire',
        icon: images['abyssal-sire.png'],
    },
    // Clues & Diaries
    BEGINNER: {
        id: 2,
        customSort: 0,
        label: 'Beginner',
        icon: images['task-grey.png'],
    },
    EASY: {
        id: 3,
        customSort: 1,
        label: 'Easy',
        icon: images['task-green.png'],
    },
    MEDIUM: {
        id: 4,
        customSort: 2,
        label: 'Medium',
        icon: images['task-blue.png'],
    },
    HARD: {
        id: 5,
        customSort: 3,
        label: 'Hard',
        icon: images['task-purple.png'],
    },
    ELITE: {
        id: 6,
        customSort: 4,
        label: 'Elite',
        icon: images['task-yellow.png'],
    },
    MASTER: {
        id: 7,
        customSort: 5,
        label: 'Master',
        icon: images['task-red.png'],
    },
    // Combat
    MELEE: {
        id: 8,
        label: 'Melee',
        icon: images['task-combat-melee.png'],
    },
    RANGED: {
        id: 9,
        label: 'Ranged',
        icon: images['task-combat-ranged.png'],
    },
    MAGIC: {
        id: 10,
        label: 'Magic',
        icon: images['task-combat-magic.png'],
    },
    // Minigames
    PEST_CONTROL: {
        id: 11,
        label: 'Pest Control',
        icon: images['task-guthix.png'],
    },
    // Stats
    TOTAL_LVL: {
        id: 12,
        label: 'Total Level',
        icon: images['task-level.png'],
    },
    MILESTONE_LVL: {
        id: 13,
        label: 'Milestone Level',
        icon: images['task-bronze-star.png'],
    },
    BASE_LVL: {
        id: 14,
        label: 'Base Level',
        icon: images['task-gold-star.png'],
    },
    COMBAT_LVL: {
        id: 15,
        label: 'Combat Level',
        icon: images['task-combat.png'],
    },
    // Quests
    NOVICE_QUEST: {
        id: 16,
        customSort: 0,
        label: 'Novice',
        icon: images['task-bronze-star.png'],
    },
    INTERMEDIATE_QUEST: {
        id: 17,
        customSort: 1,
        label: 'Intermediate',
        icon: images['task-silver-star.png'],
    },
    EXPERIENCED_QUEST: {
        id: 18,
        customSort: 2,
        label: 'Experienced',
        icon: images['task-gold-star.png'],
    },
    MASTER_QUEST: {
        id: 19,
        customSort: 3,
        label: 'Master (quest)',
        icon: images['task-two-stars.png'],
    },
    GRANDMASTER_QUEST: {
        id: 20,
        customSort: 4,
        label: 'Grandmaster',
        icon: images['task-three-stars.png'],
    },
    // Raids
    TOB: {
        id: 21,
        label: 'Theatre of Blood',
        icon: images['theatre-of-blood.png'],
    },
    COX: {
        id: 22,
        label: 'Chambers of Xeric',
        icon: images['chambers-of-xeric.png'],
    },
    // Skilling
    THIEVING: {
        id: 23,
        label: 'Thieving',
        icon: images['task-thieving.png'],
    },
    // Other
    LOCATIONS: {
        id: 24,
        label: 'Locations',
        icon: images['task-boot.png'],
    },
    // : {
    //     id: ,
    //     label: '',
    //     icon: images['task-.png'],
    // },
};

export const CATEGORY = {
    BOSSING: {
        id: 0,
        label: 'Bossing',
        icon: images['task-bossing.png'],
        subcategories: [SUBCATEGORY.SIRE, SUBCATEGORY.INFERNO],
    },
    CLUES: {
        id: 1,
        label: 'Clues',
        icon: images['task-clue.png'],
        subcategories: [
            SUBCATEGORY.BEGINNER,
            SUBCATEGORY.EASY,
            SUBCATEGORY.MEDIUM,
            SUBCATEGORY.HARD,
            SUBCATEGORY.ELITE,
            SUBCATEGORY.MASTER,
        ],
    },
    COMBAT: {
        id: 2,
        label: 'Combat',
        icon: images['task-combat.png'],
        subcategories: [SUBCATEGORY.MELEE, SUBCATEGORY.RANGED, SUBCATEGORY.MAGIC],
    },
    DIARIES: {
        id: 3,
        label: 'Diaries',
        icon: images['task-diary.png'],
        subcategories: [SUBCATEGORY.EASY, SUBCATEGORY.MEDIUM, SUBCATEGORY.HARD, SUBCATEGORY.ELITE],
    },
    MINIGAMES: {
        id: 4,
        label: 'Minigames',
        icon: images['task-minigame.png'],
        subcategories: [SUBCATEGORY.PEST_CONTROL],
    },
    STATS: {
        id: 5,
        label: 'Stats',
        icon: images['task-total.png'],
        subcategories: [SUBCATEGORY.TOTAL_LVL, SUBCATEGORY.BASE_LVL, SUBCATEGORY.MILESTONE_LVL, SUBCATEGORY.COMBAT_LVL],
    },
    QUESTS: {
        id: 6,
        label: 'Quests',
        icon: images['task-quest.png'],
        subcategories: [
            SUBCATEGORY.NOVICE_QUEST,
            SUBCATEGORY.INTERMEDIATE_QUEST,
            SUBCATEGORY.EXPERIENCED_QUEST,
            SUBCATEGORY.MASTER_QUEST,
            SUBCATEGORY.GRANDMASTER_QUEST,
        ],
    },
    RAIDS: {
        id: 7,
        label: 'Raids',
        icon: images['task-raid.png'],
        subcategories: [SUBCATEGORY.COX, SUBCATEGORY.TOB],
    },
    SKILLING: {
        id: 8,
        label: 'Skilling',
        icon: images['task-fish.png'],
        subcategories: [SUBCATEGORY.THIEVING],
    },
    OTHER: {
        id: 9,
        label: 'Other',
        icon: images['task-inventory.png'],
        subcategories: [],
    },
};

export const QUEST_DIFFICULTY = {
    NOVICE: {
        id: 0,
        label: 'Novice',
        icon: images['task-bronze-star.png'],
    },
    INTERMEDIATE: {
        id: 1,
        label: 'Intermediate',
        icon: images['task-silver-star.png'],
    },
    EXPERIENCED: {
        id: 2,
        label: 'Experienced',
        icon: images['task-gold-star.png'],
    },
    MASTER: {
        id: 3,
        label: 'Master',
        icon: images['task-two-stars.png'],
    },
    GRANDMASTER: {
        id: 4,
        label: 'Grandmaster',
        icon: images['task-three-stars.png'],
    },
};

export const QUEST_LENGTH = {
    VERY_SHORT: {
        id: 0,
        label: 'Very Short',
        icon: images['task-bronze-sword.png'],
    },
    SHORT: {
        id: 1,
        label: 'Short',
        icon: images['task-iron-sword.png'],
    },
    MEDIUM: {
        id: 2,
        label: 'Medium',
        icon: images['task-mith-sword.png'],
    },
    LONG: {
        id: 3,
        label: 'Long',
        icon: images['task-rune-sword.png'],
    },
    VERY_LONG: {
        id: 4,
        label: 'Very Long',
        icon: images['task-dragon-sword.png'],
    },
};

export const QUEST_SERIES = {
    CAMELOT: {
        id: 0,
        label: 'Camelot',
        icon: images['task-kandarin.png'],
    },
    DESERT: {
        id: 1,
        label: 'Desert',
        icon: images['task-kharidian.png'],
    },
    DORGESHUUN: {
        id: 2,
        label: 'Dorgeshuun',
        icon: images['task-bandos.png'],
    },
    GUILDS: {
        id: 3,
        label: 'Guilds / Dragonkin',
        icon: images['task-legend.png'],
    },
    ELEMENTAL: {
        id: 4,
        label: 'Elemental Workshop',
        icon: images['task-elemental.png'],
    },
    ELF: {
        id: 5,
        label: 'Elven',
        icon: images['task-tiranwnn.png'],
    },
    GNOME: {
        id: 6,
        label: 'Gnome',
        icon: images['task-gnome.png'],
    },
    FAIRY: {
        id: 7,
        label: 'Fairy Tale',
        icon: images['task-cosmic.png'],
    },
    FREMENNIK: {
        id: 8,
        label: 'Fremennik',
        icon: images['task-fremennik.png'],
    },
    KOUREND: {
        id: 9,
        label: 'Great Kourend',
        icon: images['task-xeric.png'],
    },
    KARAMJA: {
        id: 10,
        label: 'Karamja',
        icon: images['task-karamja.png'],
    },
    MAHJARRAT: {
        id: 11,
        label: 'Mahjarrat / Return of Zaros',
        icon: images['task-zaros.png'],
    },
    MYREQUE: {
        id: 12,
        label: 'Myreque',
        icon: images['task-morytania.png'],
    },
    OGRE: {
        id: 13,
        label: 'Ogre',
        icon: images['task-goblin.png'],
    },
    PIRATE: {
        id: 14,
        label: 'Pirate',
        icon: images['task-steel-scim.png'],
    },
    RED_AXE: {
        id: 15,
        label: 'Rise of the Red Axe',
        icon: images['task-dragon-baxe.png'],
    },
    TEMPLE_KNIGHT: {
        id: 16,
        label: 'Temple Knight / Sea Slug',
        icon: images['task-steel-kite.png'],
    },
    TROLL: {
        id: 17,
        label: 'Troll',
        icon: images['task-bossing.png'],
    },
};

export const QUEST_STATUS = {
    NOT_STARTED: 'NOT_STARTED',
    IN_PROGRESS: 'IN_PROGRESS',
    FINISHED: 'FINISHED',
};

export const DEFAULT_NOTES_TEXT = '(none)';
