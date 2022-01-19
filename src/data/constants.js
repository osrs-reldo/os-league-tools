export const SKILLS = {
    ALPHABETICAL: [
        'Agility',
        'Attack',
        'Construction',
        'Cooking',
        'Crafting',
        'Defence',
        'Farming',
        'Firemaking',
        'Fishing',
        'Fletching',
        'Herblore',
        'Hitpoints',
        'Hunter',
        'Magic',
        'Mining',
        'Prayer',
        'Ranged',
        'Runecraft',
        'Slayer',
        'Smithing',
        'Strength',
        'Thieving',
        'Woodcutting',
    ],
    SKILL_PANEL: [
        'Attack',
        'Hitpoints',
        'Mining',
        'Strength',
        'Agility',
        'Smithing',
        'Defence',
        'Herblore',
        'Fishing',
        'Ranged',
        'Thieving',
        'Cooking',
        'Prayer',
        'Crafting',
        'Firemaking',
        'Magic',
        'Fletching',
        'Woodcutting',
        'Runecraft',
        'Slayer',
        'Farming',
        'Construction',
        'Hunter',
    ],
};

export const DIFFICULTY = {
    BEGINNER: {
        label: 'Beginner',
        value: 5,
        icon: '/img/task-beginner.png',
    },
    EASY: {
        label: 'Easy',
        value: 5,
        icon: '/img/task-easy.png',
    },
    MEDIUM: {
        label: 'Medium',
        value: 25,
        icon: '/img/task-medium.png',
    },
    HARD: {
        label: 'Hard',
        value: 50,
        icon: '/img/task-hard.png',
    },
    ELITE: {
        label: 'Elite',
        value: 125,
        icon: '/img/task-elite.png',
    },
    MASTER: {
        label: 'Master',
        value: 250,
        icon: '/img/task-master.png',
    },
};

export const SUBCATEGORY = {
    // Bossing
    INFERNO: {
        id: 0,
        label: 'Inferno',
        icon: '/img/task-inferno.png',
    },
    SIRE: {
        id: 1,
        label: 'Abyssal Sire',
        icon: '/img/abyssal-sire.png',
    },
    // Clues & Diaries
    BEGINNER: {
        id: 2,
        customSort: 0,
        label: 'Beginner',
        icon: '/img/task-grey.png',
    },
    EASY: {
        id: 3,
        customSort: 1,
        label: 'Easy',
        icon: '/img/task-green.png',
    },
    MEDIUM: {
        id: 4,
        customSort: 2,
        label: 'Medium',
        icon: '/img/task-blue.png',
    },
    HARD: {
        id: 5,
        customSort: 3,
        label: 'Hard',
        icon: '/img/task-purple.png',
    },
    ELITE: {
        id: 6,
        customSort: 4,
        label: 'Elite',
        icon: '/img/task-yellow.png',
    },
    MASTER: {
        id: 7,
        customSort: 5,
        label: 'Master',
        icon: '/img/task-red.png',
    },
    // Combat
    MELEE: {
        id: 8,
        label: 'Melee',
        icon: '/img/task-combat-melee.png',
    },
    RANGED: {
        id: 9,
        label: 'Ranged',
        icon: '/img/task-combat-ranged.png',
    },
    MAGIC: {
        id: 10,
        label: 'Magic',
        icon: '/img/task-combat-magic.png',
    },
    // Minigames
    PEST_CONTROL: {
        id: 11,
        label: 'Pest Control',
        icon: '/img/task-guthix.png',
    },
    // Stats
    TOTAL_LVL: {
        id: 12,
        label: 'Total Level',
        icon: '/img/task-level.png',
    },
    MILESTONE_LVL: {
        id: 13,
        label: 'Milestone Level',
        icon: '/img/task-bronze-star.png',
    },
    BASE_LVL: {
        id: 14,
        label: 'Base Level',
        icon: '/img/task-gold-star.png',
    },
    COMBAT_LVL: {
        id: 15,
        label: 'Combat Level',
        icon: '/img/task-combat.png',
    },
    // Quests
    NOVICE_QUEST: {
        id: 16,
        customSort: 0,
        label: 'Novice',
        icon: '/img/task-bronze-star.png',
    },
    INTERMEDIATE_QUEST: {
        id: 17,
        customSort: 1,
        label: 'Intermediate',
        icon: '/img/task-silver-star.png',
    },
    EXPERIENCED_QUEST: {
        id: 18,
        customSort: 2,
        label: 'Experienced',
        icon: '/img/task-gold-star.png',
    },
    MASTER_QUEST: {
        id: 19,
        customSort: 3,
        label: 'Master (quest)',
        icon: '/img/task-two-stars.png',
    },
    GRANDMASTER_QUEST: {
        id: 20,
        customSort: 4,
        label: 'Grandmaster',
        icon: '/img/task-three-stars.png',
    },
    // Raids
    TOB: {
        id: 21,
        label: 'Theatre of Blood',
        icon: '/img/theatre-of-blood.png',
    },
    COX: {
        id: 22,
        label: 'Chambers of Xeric',
        icon: '/img/chambers-of-xeric.png',
    },
    // Skilling
    THIEVING: {
        id: 23,
        label: 'Thieving',
        icon: '/img/task-thieving.png',
    },
    // Other
    LOCATIONS: {
        id: 24,
        label: 'Locations',
        icon: '/img/task-boot.png',
    },
    // : {
    //     id: ,
    //     label: '',
    //     icon: '/img/task-.png',
    // },
};

export const CATEGORY = {
    BOSSING: {
        id: 0,
        label: 'Bossing',
        icon: '/img/task-bossing.png',
        subcategories: [SUBCATEGORY.SIRE, SUBCATEGORY.INFERNO],
    },
    CLUES: {
        id: 1,
        label: 'Clues',
        icon: '/img/task-clue.png',
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
        icon: '/img/task-combat.png',
        subcategories: [SUBCATEGORY.MELEE, SUBCATEGORY.RANGED, SUBCATEGORY.MAGIC],
    },
    DIARIES: {
        id: 3,
        label: 'Diaries',
        icon: '/img/task-diary.png',
        subcategories: [SUBCATEGORY.EASY, SUBCATEGORY.MEDIUM, SUBCATEGORY.HARD, SUBCATEGORY.ELITE],
    },
    MINIGAMES: {
        id: 4,
        label: 'Minigames',
        icon: '/img/task-minigame.png',
        subcategories: [SUBCATEGORY.PEST_CONTROL],
    },
    STATS: {
        id: 5,
        label: 'Stats',
        icon: '/img/task-total.png',
        subcategories: [SUBCATEGORY.TOTAL_LVL, SUBCATEGORY.BASE_LVL, SUBCATEGORY.MILESTONE_LVL, SUBCATEGORY.COMBAT_LVL],
    },
    QUESTS: {
        id: 6,
        label: 'Quests',
        icon: '/img/task-quest.png',
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
        icon: '/img/task-raid.png',
        subcategories: [SUBCATEGORY.COX, SUBCATEGORY.TOB],
    },
    SKILLING: {
        id: 8,
        label: 'Skilling',
        icon: '/img/task-fish.png',
        subcategories: [SUBCATEGORY.THIEVING],
    },
    OTHER: {
        id: 9,
        label: 'Other',
        icon: '/img/task-inventory.png',
        subcategories: [],
    },
};

export const QUEST_DIFFICULTY = {
    NOVICE: {
        id: 0,
        label: 'Novice',
        icon: '/img/task-bronze-star.png',
    },
    INTERMEDIATE: {
        id: 1,
        label: 'Intermediate',
        icon: '/img/task-silver-star.png',
    },
    EXPERIENCED: {
        id: 2,
        label: 'Experienced',
        icon: '/img/task-gold-star.png',
    },
    MASTER: {
        id: 3,
        label: 'Master',
        icon: '/img/task-two-stars.png',
    },
    GRANDMASTER: {
        id: 4,
        label: 'Grandmaster',
        icon: '/img/task-three-stars.png',
    },
};

export const QUEST_LENGTH = {
    VERY_SHORT: {
        id: 0,
        label: 'Very Short',
        icon: '/img/task-bronze-sword.png',
    },
    SHORT: {
        id: 1,
        label: 'Short',
        icon: '/img/task-iron-sword.png',
    },
    MEDIUM: {
        id: 2,
        label: 'Medium',
        icon: '/img/task-mith-sword.png',
    },
    LONG: {
        id: 3,
        label: 'Long',
        icon: '/img/task-rune-sword.png',
    },
    VERY_LONG: {
        id: 4,
        label: 'Very Long',
        icon: '/img/task-dragon-sword.png',
    },
};

export const QUEST_SERIES = {
    CAMELOT: {
        id: 0,
        label: 'Camelot',
        icon: '/img/task-kandarin.png',
    },
    DESERT: {
        id: 1,
        label: 'Desert',
        icon: '/img/task-kharidian.png',
    },
    DORGESHUUN: {
        id: 2,
        label: 'Dorgeshuun',
        icon: '/img/task-bandos.png',
    },
    GUILDS: {
        id: 3,
        label: 'Guilds / Dragonkin',
        icon: '/img/task-legend.png',
    },
    ELEMENTAL: {
        id: 4,
        label: 'Elemental Workshop',
        icon: '/img/task-elemental.png',
    },
    ELF: {
        id: 5,
        label: 'Elven',
        icon: '/img/task-tiranwnn.png',
    },
    GNOME: {
        id: 6,
        label: 'Gnome',
        icon: '/img/task-gnome.png',
    },
    FAIRY: {
        id: 7,
        label: 'Fairy Tale',
        icon: '/img/task-cosmic.png',
    },
    FREMENNIK: {
        id: 8,
        label: 'Fremennik',
        icon: '/img/task-fremennik.png',
    },
    KOUREND: {
        id: 9,
        label: 'Great Kourend',
        icon: '/img/task-xeric.png',
    },
    KARAMJA: {
        id: 10,
        label: 'Karamja',
        icon: '/img/task-karamja.png',
    },
    MAHJARRAT: {
        id: 11,
        label: 'Mahjarrat / Return of Zaros',
        icon: '/img/task-zaros.png',
    },
    MYREQUE: {
        id: 12,
        label: 'Myreque',
        icon: '/img/task-morytania.png',
    },
    OGRE: {
        id: 13,
        label: 'Ogre',
        icon: '/img/task-goblin.png',
    },
    PIRATE: {
        id: 14,
        label: 'Pirate',
        icon: '/img/task-steel-scim.png',
    },
    RED_AXE: {
        id: 15,
        label: 'Rise of the Red Axe',
        icon: '/img/task-dragon-baxe.png',
    },
    TEMPLE_KNIGHT: {
        id: 16,
        label: 'Temple Knight / Sea Slug',
        icon: '/img/task-steel-kite.png',
    },
    TROLL: {
        id: 17,
        label: 'Troll',
        icon: '/img/task-bossing.png',
    },
};

export const DEFAULT_NOTES_TEXT = '(none)';
