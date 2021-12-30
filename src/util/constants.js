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
        text: 'Inferno',
        icon: '/img/task-inferno.png',
    },
    SIRE: {
        text: 'Abyssal Sire',
        icon: '/img/abyssal-sire.png',
    },
    // Clues & Diaries
    BEGINNER: {
        text: 'Beginner',
        icon: '/img/task-grey.png',
    },
    EASY: {
        text: 'Easy',
        icon: '/img/task-green.png',
    },
    MEDIUM: {
        text: 'Medium',
        icon: '/img/task-blue.png',
    },
    HARD: {
        text: 'Hard',
        icon: '/img/task-purple.png',
    },
    ELITE: {
        text: 'Elite',
        icon: '/img/task-yellow.png',
    },
    MASTER: {
        text: 'Master',
        icon: '/img/task-red.png',
    },
    // Combat
    MELEE: {
        text: 'Melee',
        icon: '/img/task-combat-melee.png',
    },
    RANGED: {
        text: 'Ranged',
        icon: '/img/task-combat-ranged.png',
    },
    MAGIC: {
        text: 'Magic',
        icon: '/img/task-combat-magic.png',
    },
    // Minigames
    PEST_CONTROL: {
        text: 'Pest Control',
        icon: '/img/task-guthix.png',
    },
    // Stats
    TOTAL_LVL: {
        text: 'Total Level',
        icon: '/img/task-level.png',
    },
    MILESTONE_LVL: {
        text: 'Milestone Level',
        icon: '/img/task-bronze-star.png',
    },
    BASE_LVL: {
        text: 'Base Level',
        icon: '/img/task-gold-star.png',
    },
    COMBAT_LVL: {
        text: 'Combat Level',
        icon: '/img/task-combat.png',
    },
    // Quests
    NOVICE_QUEST: {
        text: 'Novice',
        icon: '/img/task-bronze-star.png',
    },
    INTERMEDIATE_QUEST: {
        text: 'Intermediate',
        icon: '/img/task-silver-star.png',
    },
    EXPERIENCED_QUEST: {
        text: 'Experienced',
        icon: '/img/task-gold-star.png',
    },
    MASTER_QUEST: {
        text: 'Master',
        icon: '/img/task-two-stars.png',
    },
    GRANDMASTER_QUEST: {
        text: 'Grandmaster',
        icon: '/img/task-three-stars.png',
    },
    // Raids
    TOB: {
        text: 'Theatre of Blood',
        icon: '/img/theatre-of-blood.png',
    },
    COX: {
        text: 'Chambers of Xeric',
        icon: '/img/chambers-of-xeric.png',
    },
    // Skilling
    THIEVING: {
        text: 'Thieving',
        icon: '/img/task-thieving.png',
    },
    // Other
    LOCATIONS: {
        text: 'Locations',
        icon: '/img/task-boot.png',
    },
    // : {
    //     text: '',
    //     icon: '/img/task-.png',
    // },
};

export const CATEGORY = {
    BOSSING: {
        text: 'Bossing',
        icon: '/img/task-bossing.png',
        subcategories: [SUBCATEGORY.SIRE, SUBCATEGORY.INFERNO],
    },
    CLUES: {
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
        text: 'Combat',
        icon: '/img/task-combat.png',
        subcategories: [SUBCATEGORY.MELEE, SUBCATEGORY.RANGED, SUBCATEGORY.MAGIC],
    },
    DIARIES: {
        text: 'Diaries',
        icon: '/img/task-diary.png',
        subcategories: [SUBCATEGORY.EASY, SUBCATEGORY.MEDIUM, SUBCATEGORY.HARD, SUBCATEGORY.ELITE],
    },
    MINIGAMES: {
        text: 'Minigames',
        icon: '/img/task-minigame.png',
        subcategories: [SUBCATEGORY.PEST_CONTROL],
    },
    STATS: {
        text: 'Stats',
        icon: '/img/task-total.png',
        subcategories: [SUBCATEGORY.TOTAL_LVL, SUBCATEGORY.BASE_LVL, SUBCATEGORY.MILESTONE_LVL, SUBCATEGORY.COMBAT_LVL],
    },
    QUESTS: {
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
        text: 'Raids',
        icon: '/img/task-raid.png',
        subcategories: [SUBCATEGORY.COX, SUBCATEGORY.TOB],
    },
    SKILLING: {
        text: 'Skilling',
        icon: '/img/task-fish.png',
        subcategories: [SUBCATEGORY.THIEVING],
    },
    OTHER: {
        text: 'Other',
        icon: '/img/task-inventory.png',
        subcategories: [],
    },
};
