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
    EASY: {
        text: 'Easy',
        value: 10,
        icon: '/img/task-easy.png',
    },
    MEDIUM: {
        text: 'Medium',
        value: 50,
        icon: '/img/task-medium.png',
    },
    HARD: {
        text: 'Hard',
        value: 100,
        icon: '/img/task-hard.png',
    },
    ELITE: {
        text: 'Elite',
        value: 250,
        icon: '/img/task-elite.png',
    },
    MASTER: {
        text: 'Master',
        value: 500,
        icon: '/img/task-master.png',
    },
};

export const SUBCATEGORY = {
    // Bossing
    INFERNO: {
        id: 0,
        text: 'Inferno',
        icon: '/img/task-inferno.png',
    },
    SIRE: {
        id: 1,
        text: 'Abyssal Sire',
        icon: '/img/abyssal-sire.png',
    },
    // Clues & Diaries
    BEGINNER: {
        id: 2,
        customSort: 0,
        text: 'Beginner',
        icon: '/img/task-grey.png',
    },
    EASY: {
        id: 3,
        customSort: 1,
        text: 'Easy',
        icon: '/img/task-green.png',
    },
    MEDIUM: {
        id: 4,
        customSort: 2,
        text: 'Medium',
        icon: '/img/task-blue.png',
    },
    HARD: {
        id: 5,
        customSort: 3,
        text: 'Hard',
        icon: '/img/task-purple.png',
    },
    ELITE: {
        id: 6,
        customSort: 4,
        text: 'Elite',
        icon: '/img/task-yellow.png',
    },
    MASTER: {
        id: 7,
        customSort: 5,
        text: 'Master',
        icon: '/img/task-red.png',
    },
    // Combat
    MELEE: {
        id: 8,
        text: 'Melee',
        icon: '/img/task-combat-melee.png',
    },
    RANGED: {
        id: 9,
        text: 'Ranged',
        icon: '/img/task-combat-ranged.png',
    },
    MAGIC: {
        id: 10,
        text: 'Magic',
        icon: '/img/task-combat-magic.png',
    },
    // Minigames
    PEST_CONTROL: {
        id: 11,
        text: 'Pest Control',
        icon: '/img/task-guthix.png',
    },
    // Stats
    TOTAL_LVL: {
        id: 12,
        text: 'Total Level',
        icon: '/img/task-level.png',
    },
    MILESTONE_LVL: {
        id: 13,
        text: 'Milestone Level',
        icon: '/img/task-bronze-star.png',
    },
    BASE_LVL: {
        id: 14,
        text: 'Base Level',
        icon: '/img/task-gold-star.png',
    },
    COMBAT_LVL: {
        id: 15,
        text: 'Combat Level',
        icon: '/img/task-combat.png',
    },
    // Quests
    NOVICE_QUEST: {
        id: 16,
        customSort: 0,
        text: 'Novice',
        icon: '/img/task-bronze-star.png',
    },
    INTERMEDIATE_QUEST: {
        id: 17,
        customSort: 1,
        text: 'Intermediate',
        icon: '/img/task-silver-star.png',
    },
    EXPERIENCED_QUEST: {
        id: 18,
        customSort: 2,
        text: 'Experienced',
        icon: '/img/task-gold-star.png',
    },
    MASTER_QUEST: {
        id: 19,
        customSort: 3,
        text: 'Master (quest)',
        icon: '/img/task-two-stars.png',
    },
    GRANDMASTER_QUEST: {
        id: 20,
        customSort: 4,
        text: 'Grandmaster',
        icon: '/img/task-three-stars.png',
    },
    // Raids
    TOB: {
        id: 21,
        text: 'Theatre of Blood',
        icon: '/img/theatre-of-blood.png',
    },
    COX: {
        id: 22,
        text: 'Chambers of Xeric',
        icon: '/img/chambers-of-xeric.png',
    },
    // Skilling
    THIEVING: {
        id: 23,
        text: 'Thieving',
        icon: '/img/task-thieving.png',
    },
    // Other
    LOCATIONS: {
        id: 24,
        text: 'Locations',
        icon: '/img/task-boot.png',
    },
    // : {
    //     id: ,
    //     text: '',
    //     icon: '/img/task-.png',
    // },
};

export const CATEGORY = {
    BOSSING: {
        id: 0,
        text: 'Bossing',
        icon: '/img/task-bossing.png',
        subcategories: [SUBCATEGORY.SIRE, SUBCATEGORY.INFERNO],
    },
    CLUES: {
        id: 1,
        text: 'Clues',
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
        text: 'Combat',
        icon: '/img/task-combat.png',
        subcategories: [SUBCATEGORY.MELEE, SUBCATEGORY.RANGED, SUBCATEGORY.MAGIC],
    },
    DIARIES: {
        id: 3,
        text: 'Diaries',
        icon: '/img/task-diary.png',
        subcategories: [SUBCATEGORY.EASY, SUBCATEGORY.MEDIUM, SUBCATEGORY.HARD, SUBCATEGORY.ELITE],
    },
    MINIGAMES: {
        id: 4,
        text: 'Minigames',
        icon: '/img/task-minigame.png',
        subcategories: [SUBCATEGORY.PEST_CONTROL],
    },
    STATS: {
        id: 5,
        text: 'Stats',
        icon: '/img/task-total.png',
        subcategories: [SUBCATEGORY.TOTAL_LVL, SUBCATEGORY.BASE_LVL, SUBCATEGORY.MILESTONE_LVL, SUBCATEGORY.COMBAT_LVL],
    },
    QUESTS: {
        id: 6,
        text: 'Quests',
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
        text: 'Raids',
        icon: '/img/task-raid.png',
        subcategories: [SUBCATEGORY.COX, SUBCATEGORY.TOB],
    },
    SKILLING: {
        id: 8,
        text: 'Skilling',
        icon: '/img/task-fish.png',
        subcategories: [SUBCATEGORY.THIEVING],
    },
    OTHER: {
        id: 9,
        text: 'Other',
        icon: '/img/task-inventory.png',
        subcategories: [],
    },
};
