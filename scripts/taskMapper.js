const CATEGORY_MAPPING = {
    0: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    2: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    3: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    4: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    5: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    6: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    7: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    8: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    9: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    10: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    11: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    12: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    13: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    14: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    15: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    16: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    17: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    18: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    19: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    20: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    21: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    22: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    23: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    24: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    25: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    30: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    31: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    39: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    40: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    48: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    49: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    57: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    58: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    66: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    67: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    75: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    76: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    84: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    85: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    93: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    94: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    102: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    103: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    111: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    112: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    120: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    121: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    129: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    130: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    138: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    139: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    147: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    148: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    156: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    157: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    165: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    166: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    174: {
        category: 'CLUES',
        subcategory: 'MASTER',
    },
    175: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    183: {
        category: 'CLUES',
        subcategory: 'HARD',
    },
    184: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    192: {
        category: 'CLUES',
        subcategory: 'EASY',
    },
    193: {
        category: 'CLUES',
        subcategory: 'MEDIUM',
    },
    201: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    202: {
        category: 'CLUES',
        subcategory: 'BEGINNER',
    },
    210: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    211: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    219: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    220: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    228: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    229: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    233: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    234: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    235: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    236: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    237: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    238: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    241: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    242: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    245: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    246: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    247: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    248: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    249: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    250: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    251: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    252: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    253: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    257: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    258: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    266: {
        category: 'OTHER',
        subcategory: 'FAVOUR',
    },
    267: {
        category: 'OTHER',
        subcategory: 'FAVOUR',
    },
    268: {
        category: 'OTHER',
        subcategory: 'FAVOUR',
    },
    269: {
        category: 'OTHER',
        subcategory: 'FAVOUR',
    },
    270: {
        category: 'OTHER',
        subcategory: 'FAVOUR',
    },
    271: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    272: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    273: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    274: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    275: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    276: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    277: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    278: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    279: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    281: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    282: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    283: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    284: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    285: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    286: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    288: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    313: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    314: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    316: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    322: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    323: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    324: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    325: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    326: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    328: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    329: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    330: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    331: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    332: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    333: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    334: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    339: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    340: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    341: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    342: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    343: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    344: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    345: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    346: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    347: {
        category: 'BOSSING',
        subcategory: 'SKOTIZO',
    },
    348: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    349: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    350: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    351: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    352: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    353: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    354: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    359: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    360: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    361: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    362: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    363: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    364: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    368: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    369: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    370: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    371: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    372: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    373: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    377: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    378: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    379: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    381: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    382: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    383: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    384: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    385: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    386: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    388: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    389: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    390: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    391: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    392: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    393: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    394: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    395: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    396: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    397: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    398: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    399: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    400: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    401: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    402: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    403: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    404: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    405: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    406: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    407: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    408: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    409: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    410: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    411: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    412: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    413: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    414: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    415: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    416: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    417: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    418: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    419: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    420: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    421: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    422: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    423: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    424: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    425: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    426: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    427: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    428: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    429: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    430: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    431: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    432: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    433: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    434: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    462: {
        category: 'CLUES',
        subcategory: 'ELITE',
    },
    470: {
        category: 'BOSSING',
        subcategory: 'MIMIC',
    },
    471: {
        category: 'BOSSING',
        subcategory: 'MIMIC',
    },
    472: {
        category: 'BOSSING',
        subcategory: 'MIMIC',
    },
    473: {
        category: 'BOSSING',
        subcategory: 'MIMIC',
    },
    474: {
        category: 'BOSSING',
        subcategory: 'MIMIC',
    },
    475: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    476: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    477: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    478: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    479: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    480: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    481: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    482: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    483: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    484: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    485: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    486: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    487: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    489: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    490: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    491: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    492: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    493: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    494: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    495: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    496: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    497: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    498: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    499: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    500: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    501: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    502: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    503: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    504: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    505: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    506: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    507: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    508: {
        category: 'OTHER',
        subcategory: 'MILESTONE',
    },
    509: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    510: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    511: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    512: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    513: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    514: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    515: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    516: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    517: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    518: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    519: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    520: {
        category: 'OTHER',
        subcategory: 'TOTAL',
    },
    521: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    522: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    523: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    524: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    525: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    526: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    527: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    528: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    529: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    530: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    531: {
        category: 'OTHER',
        subcategory: 'BASE',
    },
    532: {
        category: 'COMBAT',
        subcategory: 'ATTACK',
    },
    533: {
        category: 'COMBAT',
        subcategory: 'ATTACK',
    },
    534: {
        category: 'COMBAT',
        subcategory: 'STRENGTH',
    },
    535: {
        category: 'COMBAT',
        subcategory: 'STRENGTH',
    },
    536: {
        category: 'COMBAT',
        subcategory: 'DEFENCE',
    },
    537: {
        category: 'COMBAT',
        subcategory: 'DEFENCE',
    },
    538: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    539: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    540: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    541: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    542: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    543: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    544: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    545: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    546: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    547: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    548: {
        category: 'COMBAT',
        subcategory: 'HITPOINTS',
    },
    549: {
        category: 'COMBAT',
        subcategory: 'HITPOINTS',
    },
    550: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    551: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    552: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    553: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    554: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    555: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    556: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    557: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    558: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    559: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    560: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    561: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    562: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    563: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    564: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    565: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    566: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    567: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    568: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    569: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    570: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    571: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    572: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    573: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    574: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    575: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    576: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    577: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    578: {
        category: 'SKILLING',
        subcategory: 'GENERAL',
    },
    579: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    580: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    581: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    582: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    583: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    584: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    585: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    586: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    587: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    588: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    589: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    590: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    591: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    592: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    593: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    594: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    595: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    596: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    597: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    598: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    599: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    600: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    601: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    602: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    603: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    604: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    605: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    606: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    607: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    608: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    609: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    610: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    611: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    612: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    613: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    614: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    615: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    616: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    617: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    618: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    619: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    620: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    621: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    622: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    623: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    624: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    625: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    626: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    627: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    628: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    629: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    630: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    631: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    632: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    633: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    634: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    635: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    636: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    637: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    638: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    639: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    640: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    641: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    642: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    643: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    644: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    645: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    646: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    647: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    648: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    649: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    650: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    651: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    652: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    653: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    654: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    655: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    656: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    657: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    658: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    659: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    660: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    661: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    662: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    663: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    664: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    665: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    666: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    667: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    668: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    669: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    670: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    671: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    672: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    673: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    674: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    675: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    676: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    677: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    678: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    679: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    680: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    681: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    682: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    683: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    684: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    685: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    686: {
        category: 'SKILLING',
        subcategory: 'FIREMAKING',
    },
    687: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    688: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    689: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    690: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    691: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    692: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    693: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    694: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    695: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    696: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    697: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    698: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    699: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    700: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    701: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    702: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    703: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    704: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    705: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    706: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    707: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    708: {
        category: 'BOSSING',
        subcategory: 'GENERAL',
    },
    709: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    710: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    711: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    712: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    713: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    714: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    715: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    716: {
        category: 'COMBAT',
        subcategory: 'LEVEL',
    },
    717: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    718: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    719: {
        category: 'BOSSING',
        subcategory: 'GENERAL',
    },
    720: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    721: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    722: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    723: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    724: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    725: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    726: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    727: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    728: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    729: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    730: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    731: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    732: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    733: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    734: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    735: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    736: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    737: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    738: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    739: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    740: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    741: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    742: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    743: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    744: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    745: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    746: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    747: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    748: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    749: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    750: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    751: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    752: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    753: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    754: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    755: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    756: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    757: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    758: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    759: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    760: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    761: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    762: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    763: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    764: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    765: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    766: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    767: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    768: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    769: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    770: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    771: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    772: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    773: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    774: {
        category: 'SKILLING',
        subcategory: 'WOODCUTTING',
    },
    775: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    776: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    777: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    778: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    779: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    780: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    781: {
        category: 'BOSSING',
        subcategory: 'OBOR',
    },
    782: {
        category: 'BOSSING',
        subcategory: 'OBOR',
    },
    783: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    784: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    785: {
        category: 'BOSSING',
        subcategory: 'BRYOPHYTA',
    },
    786: {
        category: 'BOSSING',
        subcategory: 'BRYOPHYTA',
    },
    787: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    788: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    789: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    790: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    791: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    792: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    793: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    794: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    795: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    796: {
        category: 'BOSSING',
        subcategory: 'SIRE',
    },
    797: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    798: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    799: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    800: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    801: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    802: {
        category: 'QUESTS',
        subcategory: 'GRANDMASTER',
    },
    803: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    804: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    805: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    806: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    807: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    808: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    809: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    810: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    811: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    812: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    813: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    814: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    815: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    816: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    817: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    818: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    820: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    821: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    822: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    823: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    824: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    825: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    826: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    827: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    828: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    829: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    830: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    831: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    832: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    834: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    835: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    836: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    837: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    838: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    839: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    840: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    841: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    842: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    843: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    844: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    845: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    846: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    847: {
        category: 'BOSSING',
        subcategory: 'ZALCANO',
    },
    848: {
        category: 'BOSSING',
        subcategory: 'ZALCANO',
    },
    849: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    850: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    851: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    852: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    853: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    854: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    855: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    856: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    857: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    858: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    859: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    860: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    861: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    862: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    863: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
    864: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    865: {
        category: 'BOSSING',
        subcategory: 'GAUNTLET',
    },
    866: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
    867: {
        category: 'BOSSING',
        subcategory: 'ZALCANO',
    },
    868: {
        category: 'BOSSING',
        subcategory: 'ZALCANO',
    },
    869: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
    870: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    871: {
        category: 'BOSSING',
        subcategory: 'ZULRAH',
    },
    872: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    873: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    874: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    875: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    876: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    877: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    878: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    879: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    880: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    881: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    882: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    883: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    884: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    885: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    886: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    887: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    888: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    889: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    890: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    891: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    892: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    893: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    894: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    895: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    896: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    897: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
    898: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    899: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    900: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    901: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    902: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    903: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    904: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    905: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    906: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    907: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    908: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    909: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    910: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    911: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    912: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    913: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    914: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    915: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    916: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    917: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    918: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    919: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    920: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    921: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    922: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    923: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    924: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    925: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    926: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    927: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    928: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    929: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    930: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    931: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    932: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    933: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    934: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    935: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    936: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    937: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    938: {
        category: 'BOSSING',
        subcategory: 'DKS',
    },
    939: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    940: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    941: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    942: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    943: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    944: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    945: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    946: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    947: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    948: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    949: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    950: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    951: {
        category: 'CLUES',
        subcategory: 'SHARED',
    },
    952: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    953: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    954: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    955: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    956: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    957: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    958: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    959: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    960: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    961: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    962: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    963: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    964: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    965: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    966: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    967: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    968: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    969: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    970: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    971: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    972: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    973: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    974: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    975: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    976: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    977: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    978: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    979: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    980: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    981: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    982: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    983: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    984: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    985: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    986: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    987: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    988: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    989: {
        category: 'BOSSING',
        subcategory: 'JAD',
    },
    990: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    991: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    992: {
        category: 'BOSSING',
        subcategory: 'INFERNO',
    },
    993: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    994: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    995: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    996: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    997: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    998: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    999: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1000: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1001: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1002: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1003: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1004: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1005: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1006: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1007: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1008: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1009: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1010: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1011: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1012: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1013: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1014: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1015: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1016: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1017: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1018: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1019: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1020: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1021: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1022: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1023: {
        category: 'SKILLING',
        subcategory: 'FLETCHING',
    },
    1024: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    1025: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    1026: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    1027: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1028: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1029: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1030: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1031: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1032: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    1033: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1034: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    1035: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1036: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1037: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    1038: {
        category: 'MINIGAMES',
        subcategory: 'BA',
    },
    1039: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1040: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1041: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1042: {
        category: 'BOSSING',
        subcategory: 'THERMY',
    },
    1043: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1044: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1045: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1046: {
        category: 'BOSSING',
        subcategory: 'THERMY',
    },
    1047: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1048: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1049: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    1050: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    1051: {
        category: 'BOSSING',
        subcategory: 'KRAKEN',
    },
    1052: {
        category: 'BOSSING',
        subcategory: 'KRAKEN',
    },
    1053: {
        category: 'BOSSING',
        subcategory: 'KRAKEN',
    },
    1054: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1055: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1056: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1057: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1058: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1059: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1060: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1061: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1062: {
        category: 'MINIGAMES',
        subcategory: 'BA',
    },
    1063: {
        category: 'MINIGAMES',
        subcategory: 'BA',
    },
    1064: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1066: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1067: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    1068: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    1069: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1070: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1071: {
        category: 'MINIGAMES',
        subcategory: 'BA',
    },
    1072: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1073: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1074: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1075: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1076: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1077: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1078: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1079: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1080: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1081: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1082: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1083: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1084: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1085: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1086: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1087: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1088: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1089: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1090: {
        category: 'BOSSING',
        subcategory: 'CERBERUS',
    },
    1091: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1092: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1093: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1094: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1095: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1096: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    1097: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1098: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1099: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1100: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    1101: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    1102: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    1103: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    1104: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1105: {
        category: 'BOSSING',
        subcategory: 'MOLE',
    },
    1106: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1107: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1108: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1109: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1110: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1111: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1112: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1113: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1114: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1115: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1116: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1117: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1118: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1119: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1120: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1121: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1122: {
        category: 'BOSSING',
        subcategory: 'CERBERUS',
    },
    1123: {
        category: 'BOSSING',
        subcategory: 'CERBERUS',
    },
    1124: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1125: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1126: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1127: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    1128: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1129: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1130: {
        category: 'BOSSING',
        subcategory: 'CERBERUS',
    },
    1131: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1132: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1133: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1134: {
        category: 'BOSSING',
        subcategory: 'GWD',
    },
    1135: {
        category: 'BOSSING',
        subcategory: 'MOLE',
    },
    1136: {
        category: 'BOSSING',
        subcategory: 'MOLE',
    },
    1137: {
        category: 'BOSSING',
        subcategory: 'MOLE',
    },
    1138: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1139: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1140: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1141: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1142: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1143: {
        category: 'MINIGAMES',
        subcategory: 'PC',
    },
    1144: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1145: {
        category: 'BOSSING',
        subcategory: 'MOLE',
    },
    1146: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1147: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1148: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1149: {
        category: 'MINIGAMES',
        subcategory: 'PC',
    },
    1150: {
        category: 'MINIGAMES',
        subcategory: 'PC',
    },
    1151: {
        category: 'MINIGAMES',
        subcategory: 'PC',
    },
    1152: {
        category: 'MINIGAMES',
        subcategory: 'PC',
    },
    1153: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1154: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1155: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1156: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1157: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1158: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1159: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1160: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1161: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1162: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1163: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1164: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1165: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1166: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1167: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1168: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1169: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1170: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1171: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1172: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1173: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1174: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1175: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1176: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1177: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1178: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1179: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    1180: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    1181: {
        category: 'SKILLING',
        subcategory: 'FARMING',
    },
    1182: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1183: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1184: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1185: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1186: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1187: {
        category: 'BOSSING',
        subcategory: 'KQ',
    },
    1188: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1189: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1190: {
        category: 'BOSSING',
        subcategory: 'KQ',
    },
    1191: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1192: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1193: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1194: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1195: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1196: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1197: {
        category: 'BOSSING',
        subcategory: 'KQ',
    },
    1198: {
        category: 'BOSSING',
        subcategory: 'KQ',
    },
    1199: {
        category: 'BOSSING',
        subcategory: 'KQ',
    },
    1200: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1201: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1202: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1203: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1204: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1205: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1206: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1207: {
        category: 'MINIGAMES',
        subcategory: 'MTA',
    },
    1208: {
        category: 'MINIGAMES',
        subcategory: 'MTA',
    },
    1209: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1210: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    1211: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1212: {
        category: 'MINIGAMES',
        subcategory: 'MTA',
    },
    1213: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1214: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1215: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1216: {
        category: 'MINIGAMES',
        subcategory: 'MTA',
    },
    1217: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1218: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1219: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1220: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    1221: {
        category: 'QUESTS',
        subcategory: 'INTERMEDIATE',
    },
    1222: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1223: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1224: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1225: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1226: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1227: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1228: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1229: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1230: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1231: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1232: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1233: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1234: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1235: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1236: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1237: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    1238: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1239: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1240: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1241: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1242: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1243: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1244: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1245: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1246: {
        category: 'BOSSING',
        subcategory: 'CERBERUS',
    },
    1247: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1248: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1249: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1250: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1251: {
        category: 'BOSSING',
        subcategory: 'GGS',
    },
    1252: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1253: {
        category: 'BOSSING',
        subcategory: 'BARROWS',
    },
    1254: {
        category: 'BOSSING',
        subcategory: 'BARROWS',
    },
    1255: {
        category: 'BOSSING',
        subcategory: 'BARROWS',
    },
    1256: {
        category: 'BOSSING',
        subcategory: 'BARROWS',
    },
    1257: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1258: {
        category: 'BOSSING',
        subcategory: 'GGS',
    },
    1259: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1260: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1261: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1262: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1263: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1264: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1265: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1266: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1267: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1268: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1269: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1270: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1271: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1272: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1273: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1274: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1275: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1276: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1277: {
        category: 'BOSSING',
        subcategory: 'GGS',
    },
    1278: {
        category: 'BOSSING',
        subcategory: 'GGS',
    },
    1279: {
        category: 'BOSSING',
        subcategory: 'GGS',
    },
    1280: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1281: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1282: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1283: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1284: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1285: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1286: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1287: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1288: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    1289: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
    1291: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1292: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    1293: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1294: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1295: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1296: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    1297: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1298: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    1299: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    1300: {
        category: 'COMBAT',
        subcategory: 'PRAYER',
    },
    1301: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1302: {
        category: 'SKILLING',
        subcategory: 'COOKING',
    },
    1303: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    1304: {
        category: 'SKILLING',
        subcategory: 'AGILITY',
    },
    1305: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1306: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1307: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1308: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1309: {
        category: 'SKILLING',
        subcategory: 'HUNTER',
    },
    1310: {
        category: 'SKILLING',
        subcategory: 'CRAFTING',
    },
    1311: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1312: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1313: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1314: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1315: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1316: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1317: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1318: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1319: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1320: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1321: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1322: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1323: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1324: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1325: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1326: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1327: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1328: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1329: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1330: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1331: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1332: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1333: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1334: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1335: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1336: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1337: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1338: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1339: {
        category: 'BOSSING',
        subcategory: 'CORP',
    },
    1340: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1341: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1342: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1343: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1344: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1345: {
        category: 'BOSSING',
        subcategory: 'WILDERNESS',
    },
    1346: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1347: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1348: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1349: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    1350: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1351: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1352: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1353: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1354: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1355: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1356: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1357: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1358: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1359: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1360: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1361: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1362: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1363: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1364: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1365: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1366: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1367: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1368: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1369: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1370: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1371: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1372: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1373: {
        category: 'SKILLING',
        subcategory: 'CONSTRUCTION',
    },
    1374: {
        category: 'COMBAT',
        subcategory: 'GENERAL',
    },
    1375: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1376: {
        category: 'SKILLING',
        subcategory: 'HERBLORE',
    },
    1377: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1378: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1379: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1380: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1381: {
        category: 'SKILLING',
        subcategory: 'SMITHING',
    },
    1382: {
        category: 'BOSSING',
        subcategory: 'ZALCANO',
    },
    1383: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1384: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1385: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1386: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1387: {
        category: 'QUESTS',
        subcategory: 'EXPERIENCED',
    },
    1388: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1389: {
        category: 'COMBAT',
        subcategory: 'SLAYER',
    },
    1390: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1391: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1392: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1393: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1394: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1395: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1396: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1397: {
        category: 'RAIDS',
        subcategory: 'COX',
    },
    1398: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    1399: {
        category: 'BOSSING',
        subcategory: 'SARACHNIS',
    },
    1400: {
        category: 'BOSSING',
        subcategory: 'VORKATH',
    },
    1401: {
        category: 'BOSSING',
        subcategory: 'HYDRA',
    },
    1402: {
        category: 'SKILLING',
        subcategory: 'FISHING',
    },
    1403: {
        category: 'SKILLING',
        subcategory: 'THIEVING',
    },
    1404: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    1405: {
        category: 'COMBAT',
        subcategory: 'MELEE',
    },
    1406: {
        category: 'COMBAT',
        subcategory: 'RANGED',
    },
    1407: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1408: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1409: {
        category: 'SKILLING',
        subcategory: 'RUNECRAFT',
    },
    1410: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1411: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1412: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1413: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1414: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1415: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1416: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1417: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1418: {
        category: 'BOSSING',
        subcategory: 'NIGHTMARE',
    },
    1419: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1420: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1421: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1422: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1423: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1424: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1425: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1426: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1427: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1428: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1429: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1430: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1431: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1432: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1433: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1434: {
        category: 'BOSSING',
        subcategory: 'TEMPOROSS',
    },
    1435: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1436: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1437: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1438: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1439: {
        category: 'DIARIES',
        subcategory: 'EASY',
    },
    1440: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1441: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1442: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1443: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1444: {
        category: 'DIARIES',
        subcategory: 'MEDIUM',
    },
    1445: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1446: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1447: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1448: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1449: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1450: {
        category: 'DIARIES',
        subcategory: 'HARD',
    },
    1451: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1452: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1453: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1454: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1455: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1456: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1457: {
        category: 'DIARIES',
        subcategory: 'ELITE',
    },
    1458: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1459: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1460: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1461: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1462: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1463: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1464: {
        category: 'DIARIES',
        subcategory: 'MASTER',
    },
    1465: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1466: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1467: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1468: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1469: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1470: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1471: {
        category: 'DIARIES',
        subcategory: 'GRANDMASTER',
    },
    1472: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1473: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1474: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1475: {
        category: 'COMBAT',
        subcategory: 'MAGIC',
    },
    1476: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1477: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1478: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1479: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1480: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1481: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1482: {
        category: 'MINIGAMES',
        subcategory: 'OTHER',
    },
    1483: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1484: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1485: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1486: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1487: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1488: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1489: {
        category: 'SKILLING',
        subcategory: 'MINING',
    },
    1490: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1491: {
        category: 'MINIGAMES',
        subcategory: 'SHADES',
    },
    1492: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    1493: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    1494: {
        category: 'BOSSING',
        subcategory: 'WINTERTODT',
    },
    1495: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1496: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1497: {
        category: 'RAIDS',
        subcategory: 'TOB',
    },
    1498: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1499: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1500: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1501: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1502: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1503: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1504: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1505: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1506: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1507: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1508: {
        category: 'OTHER',
        subcategory: 'GENERAL',
    },
    1509: {
        category: 'QUESTS',
        subcategory: 'NOVICE',
    },
    1510: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1511: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1512: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1513: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1514: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1515: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1516: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1517: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1518: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1519: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1520: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1521: {
        category: 'BOSSING',
        subcategory: 'NEX',
    },
    1522: {
        category: 'QUESTS',
        subcategory: 'MASTER',
    },
};

function mapTaskToCategories(task) {
    return CATEGORY_MAPPING[task.id];
}

exports.toCategories = mapTaskToCategories;
