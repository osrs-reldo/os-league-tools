const CATEGORY_MAPPING = {
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
  15: {
    category: 'CLUES',
    subcategory: 'SHARED',
  },
  17: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  19: {
    category: 'CLUES',
    subcategory: 'SHARED',
  },
  20: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  23: {
    category: 'CLUES',
    subcategory: 'SHARED',
  },
  25: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  27: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  28: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  29: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  30: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  31: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  32: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  33: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  34: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  35: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  36: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  37: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  38: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  39: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  40: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  41: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  42: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  43: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  44: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  45: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  46: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  47: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  48: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  49: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  50: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  51: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  52: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  53: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  54: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  55: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  56: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  57: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  58: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  59: {
    category: 'CLUES',
    subcategory: 'BEGINNER',
  },
  61: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  62: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  63: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  64: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  65: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  66: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  67: {
    category: 'MINIGAMES',
    subcategory: 'WINTERTODT',
  },
  68: {
    category: 'MINIGAMES',
    subcategory: 'WINTERTODT',
  },
  69: {
    category: 'MINIGAMES',
    subcategory: 'WINTERTODT',
  },
  70: {
    category: 'MINIGAMES',
    subcategory: 'WINTERTODT',
  },
  71: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  72: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  73: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  74: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  75: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  76: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  77: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  78: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  79: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  81: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  82: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  86: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  87: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  89: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  93: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  94: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  95: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  96: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  97: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  98: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  99: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  100: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  101: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  102: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  103: {
    category: 'BOSSING',
    subcategory: 'SARACHNIS',
  },
  104: {
    category: 'BOSSING',
    subcategory: 'SARACHNIS',
  },
  105: {
    category: 'BOSSING',
    subcategory: 'SARACHNIS',
  },
  106: {
    category: 'BOSSING',
    subcategory: 'SARACHNIS',
  },
  107: {
    category: 'BOSSING',
    subcategory: 'SKOTIZO',
  },
  108: {
    category: 'BOSSING',
    subcategory: 'SKOTIZO',
  },
  110: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  111: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  112: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  113: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  114: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  115: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  116: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  117: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  120: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  121: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  122: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  123: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  124: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  125: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  126: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  127: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  128: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  129: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  130: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  131: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  132: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  133: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  134: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  135: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  136: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  137: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  138: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  139: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  142: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  143: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  145: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  146: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  148: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  149: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  150: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  152: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  153: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  154: {
    category: 'CLUES',
    subcategory: 'MEDIUM',
  },
  156: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  157: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  158: {
    category: 'CLUES',
    subcategory: 'HARD',
  },
  160: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  161: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  162: {
    category: 'CLUES',
    subcategory: 'ELITE',
  },
  164: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  165: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  166: {
    category: 'CLUES',
    subcategory: 'MASTER',
  },
  168: {
    category: 'CLUES',
    subcategory: 'GENERAL',
  },
  169: {
    category: 'CLUES',
    subcategory: 'GENERAL',
  },
  172: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  173: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  174: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  175: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  177: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  178: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  181: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  183: {
    category: 'MINIGAMES',
    subcategory: 'WINTERTODT',
  },
  186: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  187: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  188: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  189: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  190: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  191: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  192: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  193: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  194: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  195: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  196: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  197: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  198: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  199: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  200: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  201: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  202: {
    category: 'OTHER',
    subcategory: 'MILESTONE',
  },
  203: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  204: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  205: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  206: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  207: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  208: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  209: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  210: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  211: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  212: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  213: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  214: {
    category: 'OTHER',
    subcategory: 'TOTAL',
  },
  215: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  216: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  217: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  218: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  219: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  220: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  221: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  222: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  223: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  224: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  225: {
    category: 'OTHER',
    subcategory: 'BASE',
  },
  226: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  228: {
    category: 'COMBAT',
    subcategory: 'STRENGTH',
  },
  230: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  232: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  234: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  235: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  236: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  238: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  239: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  240: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  241: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  242: {
    category: 'COMBAT',
    subcategory: 'HITPOINTS',
  },
  244: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  245: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  246: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  247: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  248: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  249: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  250: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  251: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  252: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  253: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  254: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  255: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  256: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  257: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  258: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  259: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  260: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  261: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  262: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  263: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  264: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  265: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  266: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  267: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  268: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  269: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  270: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  271: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  272: {
    category: 'SKILLING',
    subcategory: 'GENERAL',
  },
  273: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  274: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  275: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  277: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  279: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  280: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  281: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  282: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  283: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  284: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  285: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  288: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  289: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  290: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  291: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  292: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  293: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  294: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  295: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  296: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  297: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  298: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  299: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  300: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  301: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  302: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  303: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  304: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  305: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  306: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  307: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  308: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  309: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  310: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  311: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  312: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  313: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  314: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  315: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  317: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  319: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  320: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  321: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  322: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  326: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  327: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  328: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  330: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  331: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  332: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  333: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  334: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  335: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  336: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  337: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  338: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  339: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  340: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  341: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  342: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  343: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  344: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  345: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  346: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  347: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  348: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  349: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  351: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  352: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  353: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  354: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  355: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  356: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  357: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  358: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  359: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  360: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  361: {
    category: 'CLUES',
    subcategory: 'GENERAL',
  },
  362: {
    category: 'CLUES',
    subcategory: 'GENERAL',
  },
  364: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  366: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  367: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  368: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  369: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  370: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  371: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  372: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  373: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  374: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  376: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  377: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  378: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  379: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  380: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  381: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  382: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  384: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  385: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  386: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  387: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  389: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  391: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  392: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  393: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  394: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  395: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  396: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  397: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  399: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  400: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  401: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  402: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  403: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  404: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  405: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  406: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  407: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  408: {
    category: 'COMBAT',
    subcategory: 'LEVEL',
  },
  409: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  410: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  411: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  412: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  413: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  414: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  415: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  416: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  417: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  418: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  419: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  420: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  421: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  422: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  423: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  424: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  425: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  426: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  427: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  428: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  429: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  430: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  431: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  432: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  433: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  434: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  435: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  436: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  437: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  438: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  439: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  440: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  443: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  444: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  445: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  447: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  449: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  450: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  451: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  452: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  454: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  455: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  457: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  458: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  459: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  460: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  462: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  463: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  464: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  465: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  466: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  467: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  468: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  469: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  470: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  472: {
    category: 'BOSSING',
    subcategory: 'OBOR',
  },
  473: {
    category: 'BOSSING',
    subcategory: 'OBOR',
  },
  474: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  476: {
    category: 'BOSSING',
    subcategory: 'BRYOPHYTA',
  },
  477: {
    category: 'BOSSING',
    subcategory: 'BRYOPHYTA',
  },
  478: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  479: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  480: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  481: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  483: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  484: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  485: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  486: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  487: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  488: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  489: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  490: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  491: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  494: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  496: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  498: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  499: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  500: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  501: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  502: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  503: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  505: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  507: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  508: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  509: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  512: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  514: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  515: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  516: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  517: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  518: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  519: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  520: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  521: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  522: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  523: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  524: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  525: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  526: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  527: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  528: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  529: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  530: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  531: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  532: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  533: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  534: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  535: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  536: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  537: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  538: {
    category: 'MINIGAMES',
    subcategory: 'ZALCANO',
  },
  540: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  541: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  542: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  543: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  544: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  545: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  546: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  547: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  548: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  549: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  550: {
    category: 'MINIGAMES',
    subcategory: 'ZALCANO',
  },
  551: {
    category: 'MINIGAMES',
    subcategory: 'ZALCANO',
  },
  553: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  554: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  555: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  556: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  557: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  558: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  559: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  560: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  561: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  562: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  563: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  564: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  565: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  566: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  568: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  570: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  572: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  573: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  574: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  575: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  576: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  577: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  578: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  579: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  580: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  581: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  582: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  583: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  584: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  585: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  586: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  588: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  589: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  590: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  591: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  592: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  593: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  594: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  595: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  596: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  597: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  598: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  599: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  600: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  601: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  602: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  603: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  604: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  605: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  606: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  607: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  608: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  609: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  610: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  611: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  612: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  613: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  614: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  615: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  616: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  617: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  618: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  619: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  620: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  621: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  622: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  623: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  624: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  625: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  626: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  627: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  628: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  629: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  630: {
    category: 'CLUES',
    subcategory: 'SHARED',
  },
  631: {
    category: 'CLUES',
    subcategory: 'SHARED',
  },
  632: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  633: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  634: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  636: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  637: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  638: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  639: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  640: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  641: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  644: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  645: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  646: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  647: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  648: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  649: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  650: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  651: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  652: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  653: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  654: {
    category: 'BOSSING',
    subcategory: 'INFERNO',
  },
  656: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  657: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  658: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  660: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  661: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  662: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  663: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  664: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  665: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  667: {
    category: 'BOSSING',
    subcategory: 'INFERNO',
  },
  668: {
    category: 'BOSSING',
    subcategory: 'INFERNO',
  },
  669: {
    category: 'BOSSING',
    subcategory: 'INFERNO',
  },
  670: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  671: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  672: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  673: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  674: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  675: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  676: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  677: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  678: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  679: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  681: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  683: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  684: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  685: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  686: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  687: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  688: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  689: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
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
    subcategory: 'HUNTER',
  },
  695: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  696: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  697: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  698: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  699: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  700: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  701: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  702: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  703: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  705: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  706: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  707: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  708: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  709: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  710: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  711: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  712: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  713: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  714: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  715: {
    category: 'MINIGAMES',
    subcategory: 'BA',
  },
  716: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  717: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  718: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  719: {
    category: 'BOSSING',
    subcategory: 'THERMY',
  },
  720: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  721: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  722: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  723: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  724: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  725: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  726: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  727: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  728: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  729: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  730: {
    category: 'BOSSING',
    subcategory: 'KRAKEN',
  },
  731: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  732: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  733: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  734: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  737: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  738: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  739: {
    category: 'MINIGAMES',
    subcategory: 'BA',
  },
  741: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  743: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  744: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  745: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  746: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  747: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  748: {
    category: 'MINIGAMES',
    subcategory: 'BA',
  },
  749: {
    category: 'MINIGAMES',
    subcategory: 'CHOMPIES',
  },
  750: {
    category: 'MINIGAMES',
    subcategory: 'CHOMPIES',
  },
  751: {
    category: 'MINIGAMES',
    subcategory: 'CHOMPIES',
  },
  754: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  755: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  756: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  759: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  760: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  761: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  762: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  763: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  764: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  765: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  766: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  767: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
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
    subcategory: 'THIEVING',
  },
  771: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  772: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  773: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  774: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  775: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  776: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  777: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  778: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  779: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  782: {
    category: 'BOSSING',
    subcategory: 'MOLE',
  },
  783: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  784: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  785: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  786: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  787: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  788: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  789: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  790: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  791: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  793: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  794: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  795: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  796: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  797: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  798: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  799: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
  },
  801: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  802: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  803: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  804: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  805: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  807: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
  },
  808: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  809: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  810: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  811: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  812: {
    category: 'BOSSING',
    subcategory: 'MOLE',
  },
  813: {
    category: 'BOSSING',
    subcategory: 'MOLE',
  },
  814: {
    category: 'BOSSING',
    subcategory: 'MOLE',
  },
  815: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  816: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  817: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  818: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  819: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  820: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  821: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  822: {
    category: 'BOSSING',
    subcategory: 'MOLE',
  },
  823: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  824: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  826: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  827: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  828: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  829: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  830: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  831: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  832: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  833: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  834: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  835: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  836: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  837: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  838: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  839: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  842: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  843: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  844: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  845: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  846: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  847: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  848: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  849: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  850: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  851: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  852: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  853: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  854: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  855: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  856: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  858: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  859: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  860: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  864: {
    category: 'BOSSING',
    subcategory: 'KQ',
  },
  865: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  866: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  867: {
    category: 'BOSSING',
    subcategory: 'KQ',
  },
  868: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  869: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  872: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  874: {
    category: 'BOSSING',
    subcategory: 'KQ',
  },
  875: {
    category: 'BOSSING',
    subcategory: 'KQ',
  },
  876: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  877: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  878: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  879: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  880: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  883: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  884: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  886: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  889: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  890: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  895: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  896: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  897: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  898: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  899: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  900: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  901: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  902: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  904: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  905: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  906: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  907: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  908: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  909: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  910: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  911: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  912: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  913: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  915: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  917: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  918: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  919: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  920: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  921: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  925: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  926: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  929: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  930: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  932: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  933: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  934: {
    category: 'BOSSING',
    subcategory: 'GGS',
  },
  935: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  936: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  937: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  938: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  939: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  940: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  941: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  942: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  943: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  944: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  945: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  946: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  947: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  948: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  949: {
    category: 'BOSSING',
    subcategory: 'GGS',
  },
  950: {
    category: 'BOSSING',
    subcategory: 'GGS',
  },
  951: {
    category: 'BOSSING',
    subcategory: 'GGS',
  },
  952: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  953: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  954: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  955: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  956: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  957: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  958: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  959: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  960: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  961: {
    category: 'QUESTS',
    subcategory: 'MASTER',
  },
  963: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  965: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  966: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  967: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  968: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  969: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  970: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  971: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  972: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  973: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  974: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  975: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  976: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  977: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  978: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  979: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  980: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  981: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  982: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  983: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  984: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  985: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  986: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  987: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  988: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  989: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  990: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  991: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  992: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  993: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  994: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  995: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  996: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  997: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  998: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  999: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1000: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1001: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1002: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1003: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1004: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1005: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1006: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1007: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1008: {
    category: 'BOSSING',
    subcategory: 'CORP',
  },
  1009: {
    category: 'BOSSING',
    subcategory: 'CORP',
  },
  1010: {
    category: 'BOSSING',
    subcategory: 'CORP',
  },
  1011: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1012: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1013: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1014: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1015: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1016: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1017: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1018: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1019: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1021: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1022: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1023: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1024: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1025: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1026: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  1027: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  1028: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  1029: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  1031: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1032: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1035: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1036: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1037: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1038: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1039: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1040: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1041: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1042: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1044: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1045: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1046: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1047: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  1048: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  1049: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  1050: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  1051: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1052: {
    category: 'MINIGAMES',
    subcategory: 'ZALCANO',
  },
  1053: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  1054: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  1055: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  1056: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  1058: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1060: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1061: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1062: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1063: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1064: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1065: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1066: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1067: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1068: {
    category: 'BOSSING',
    subcategory: 'SARACHNIS',
  },
  1069: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  1070: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1071: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1072: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  1073: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  1074: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1075: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1076: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1078: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1079: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1080: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1081: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1084: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1085: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1086: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1111: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1112: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1113: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1114: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1115: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1119: {
    category: 'DIARIES',
    subcategory: 'EASY',
  },
  1120: {
    category: 'DIARIES',
    subcategory: 'MEDIUM',
  },
  1121: {
    category: 'DIARIES',
    subcategory: 'HARD',
  },
  1122: {
    category: 'DIARIES',
    subcategory: 'ELITE',
  },
  1124: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1127: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1128: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  1129: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  1130: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  1131: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  1132: {
    category: 'MINIGAMES',
    subcategory: 'SHADES',
  },
  1133: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  1135: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  1136: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  1137: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1139: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1140: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1143: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1150: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1151: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1152: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1153: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1154: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1155: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  1156: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1157: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1158: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1159: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1160: {
    category: 'BOSSING',
    subcategory: 'NEX',
  },
  1161: {
    category: 'BOSSING',
    subcategory: 'NEX',
  },
  1163: {
    category: 'BOSSING',
    subcategory: 'NEX',
  },
  1164: {
    category: 'BOSSING',
    subcategory: 'NEX',
  },
  1166: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1167: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1168: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1169: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1170: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1171: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1172: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1173: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1174: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1175: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1176: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1177: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1178: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1179: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1180: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1181: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1182: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1183: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1184: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1185: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1186: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1187: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1188: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1189: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1190: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1191: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1192: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1193: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1194: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1195: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1196: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1197: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1198: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1199: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1200: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1201: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1202: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1203: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1204: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1205: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1206: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1207: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1208: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1209: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1210: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1211: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1212: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1213: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1214: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1215: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1216: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1217: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1218: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1219: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1220: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1221: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1222: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1223: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1224: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1225: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1226: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1227: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1228: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1230: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1231: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1232: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1233: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1235: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1236: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1237: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1240: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1241: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1242: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1244: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1245: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1246: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1247: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1248: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1249: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1250: {
    category: 'MINIGAMES',
    subcategory: 'TEMPOROSS',
  },
  1251: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1252: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1253: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1254: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1256: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1257: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1258: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1259: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1260: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1262: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1263: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1265: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1266: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1268: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1269: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1271: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1276: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1277: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1280: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1285: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1286: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1287: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1288: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1289: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1290: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1291: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1292: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1293: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1294: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1295: {
    category: 'CLUES',
    subcategory: 'EASY',
  },
  1296: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1297: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1300: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1301: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1303: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1304: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1306: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1307: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1308: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1311: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1312: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1313: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1314: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1315: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1316: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1319: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1320: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1321: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1322: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1324: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1326: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1327: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1329: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1330: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1331: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1332: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1335: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1336: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1338: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1339: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1340: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1341: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
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
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1346: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1347: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1348: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1349: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1350: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1351: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1352: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1353: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1354: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1355: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1356: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1357: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1358: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1360: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1361: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1362: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1364: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1365: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1366: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1367: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1368: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1369: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1371: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1372: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1373: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1374: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1375: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1376: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1377: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1378: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1379: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1380: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1381: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1383: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1384: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1385: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1386: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1387: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1388: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1389: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1390: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  1391: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1392: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
  },
  1393: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
  },
  1394: {
    category: 'BOSSING',
    subcategory: 'CERBERUS',
  },
  1395: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1396: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  1397: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  1398: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1399: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1400: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1401: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1402: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1403: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1404: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1405: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1406: {
    category: 'BOSSING',
    subcategory: 'WILDERNESS',
  },
  1407: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1408: {
    category: 'QUESTS',
    subcategory: 'MASTER',
  },
  1413: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1414: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1415: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1416: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1417: {
    category: 'DIARIES',
    subcategory: 'GENERAL',
  },
  1418: {
    category: 'BOSSING',
    subcategory: 'INFERNO',
  },
  1419: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1420: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1421: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1422: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1423: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1424: {
    category: 'RAIDS',
    subcategory: 'COX',
  },
  1425: {
    category: 'RAIDS',
    subcategory: 'TOB',
  },
  1426: {
    category: 'RAIDS',
    subcategory: 'TOA',
  },
  1427: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1428: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  1429: {
    category: 'BOSSING',
    subcategory: 'DKS',
  },
  1430: {
    category: 'BOSSING',
    subcategory: 'VORKATH',
  },
  1431: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1432: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1433: {
    category: 'BOSSING',
    subcategory: 'NIGHTMARE',
  },
  1434: {
    category: 'BOSSING',
    subcategory: 'GGS',
  },
  1435: {
    category: 'BOSSING',
    subcategory: 'SIRE',
  },
  1436: {
    category: 'BOSSING',
    subcategory: 'HYDRA',
  },
  1437: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  1438: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  1439: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1440: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1441: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1442: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1444: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1446: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1448: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1449: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1450: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1451: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1452: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1453: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1454: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1455: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1456: {
    category: 'OTHER',
    subcategory: 'COLLECTION_LOG',
  },
  1458: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1459: {
    category: 'BOSSING',
    subcategory: 'DT2',
  },
  1464: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1466: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1467: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1469: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1470: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1471: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1472: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1473: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1474: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1475: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1476: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1477: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1478: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1479: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1480: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1481: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1482: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1483: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  1484: {
    category: 'COMBAT',
    subcategory: 'STRENGTH',
  },
  1485: {
    category: 'COMBAT',
    subcategory: 'DEFENCE',
  },
  1486: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  1487: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1488: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1489: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1490: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1491: {
    category: 'COMBAT',
    subcategory: 'HITPOINTS',
  },
  1492: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1493: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1494: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1495: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1496: {
    category: 'SKILLING',
    subcategory: 'FLETCHING',
  },
  1497: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1498: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1499: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1500: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1501: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1502: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1503: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1504: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1505: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1506: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1507: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1508: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1509: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1510: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1511: {
    category: 'BOSSING',
    subcategory: 'BARROWS',
  },
  1512: {
    category: 'BOSSING',
    subcategory: 'GAUNTLET',
  },
  1513: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1514: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  1515: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1516: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1517: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1518: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1519: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1520: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1521: {
    category: 'BOSSING',
    subcategory: 'JAD',
  },
  1522: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1523: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1524: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1525: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1526: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1527: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1528: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1529: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1530: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1531: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1532: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1534: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1535: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  1536: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  1537: {
    category: 'COMBAT',
    subcategory: 'RANGED',
  },
  1538: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1539: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1540: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1541: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1542: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1543: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  1544: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1545: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1546: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1547: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1548: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1549: {
    category: 'MINIGAMES',
    subcategory: 'OTHER',
  },
  1550: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1551: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1552: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1553: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1554: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1555: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1556: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1557: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1558: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1559: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1560: {
    category: 'COMBAT',
    subcategory: 'ATTACK',
  },
  1561: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1562: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1563: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1564: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1565: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1566: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1567: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1568: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1569: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1570: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1571: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1572: {
    category: 'SKILLING',
    subcategory: 'CRAFTING',
  },
  1573: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1574: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1575: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1576: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1578: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1579: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1580: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1581: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1582: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1583: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1584: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1585: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1586: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1587: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1588: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1589: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1590: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1591: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1592: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1593: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1594: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1595: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1596: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1597: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1598: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1599: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1600: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1601: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1602: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1603: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1604: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1605: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1606: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1607: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1608: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1609: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1610: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1611: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1612: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1613: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1614: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1615: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1616: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1617: {
    category: 'MINIGAMES',
    subcategory: 'PC',
  },
  1618: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1619: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1620: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1621: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1622: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1623: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1624: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1625: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1626: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1627: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1628: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1629: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1630: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1631: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1632: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1633: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1634: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1635: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1636: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1637: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1638: {
    category: 'SKILLING',
    subcategory: 'CONSTRUCTION',
  },
  1639: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1641: {
    category: 'BOSSING',
    subcategory: 'SCURRIUS',
  },
  1642: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1643: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1644: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1645: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1646: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1647: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1648: {
    category: 'BOSSING',
    subcategory: 'SCURRIUS',
  },
  1649: {
    category: 'BOSSING',
    subcategory: 'SCURRIUS',
  },
  1650: {
    category: 'BOSSING',
    subcategory: 'SCURRIUS',
  },
  1651: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1652: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1653: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1654: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1655: {
    category: 'COMBAT',
    subcategory: 'MAGIC',
  },
  1656: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1657: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1658: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1659: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1660: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1661: {
    category: 'QUESTS',
    subcategory: 'NOVICE',
  },
  1662: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1663: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1664: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1665: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1666: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1667: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1668: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1669: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1670: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1671: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1672: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1673: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1674: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1675: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1676: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1677: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1678: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1679: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1680: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1681: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1682: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1683: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1684: {
    category: 'BOSSING',
    subcategory: 'SOL',
  },
  1685: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1686: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1687: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1688: {
    category: 'BOSSING',
    subcategory: 'MOONS',
  },
  1689: {
    category: 'SKILLING',
    subcategory: 'RUNECRAFT',
  },
  1690: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1691: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1692: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1693: {
    category: 'COMBAT',
    subcategory: 'PRAYER',
  },
  1694: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1695: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1696: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1697: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1698: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1699: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1700: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1701: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1702: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1703: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1704: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1705: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1706: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1707: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1708: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1709: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1711: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1712: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1713: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1714: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1715: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1716: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1717: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1718: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1719: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1720: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1721: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  1722: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1723: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1724: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1725: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1726: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1727: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1728: {
    category: 'BOSSING',
    subcategory: 'ARAXXOR',
  },
  1729: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1730: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1731: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1732: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1733: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1734: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1735: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1736: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1737: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1738: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1739: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1740: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1741: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1742: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1743: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1744: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1745: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1746: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1747: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1748: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1749: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1750: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1751: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1752: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1753: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1754: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1755: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1756: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1757: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1758: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1759: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1760: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1761: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1762: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1763: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1764: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1765: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1766: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1767: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1768: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1769: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1770: {
    category: 'QUESTS',
    subcategory: 'EXPERIENCED',
  },
  1771: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1772: {
    category: 'BOSSING',
    subcategory: 'AMOXLIATL',
  },
  1773: {
    category: 'BOSSING',
    subcategory: 'HUEYCOATL',
  },
  1774: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1775: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1776: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1777: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1778: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1779: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1780: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1781: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1782: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1783: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1784: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1785: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1786: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1787: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1788: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1789: {
    category: 'SKILLING',
    subcategory: 'HERBLORE',
  },
  1790: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1791: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1792: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1793: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1794: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1795: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1796: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1797: {
    category: 'BOSSING',
    subcategory: 'GENERAL',
  },
  1798: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1799: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1800: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1801: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1802: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1803: {
    category: 'BOSSING',
    subcategory: 'MUSPAH',
  },
  1804: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1805: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1806: {
    category: 'SKILLING',
    subcategory: 'AGILITY',
  },
  1807: {
    category: 'COMBAT',
    subcategory: 'SLAYER',
  },
  1808: {
    category: 'BOSSING',
    subcategory: 'ZULRAH',
  },
  1809: {
    category: 'MINIGAMES',
    subcategory: 'ZALCANO',
  },
  1810: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1811: {
    category: 'SKILLING',
    subcategory: 'FARMING',
  },
  1812: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1813: {
    category: 'BOSSING',
    subcategory: 'GWD',
  },
  1814: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1815: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1816: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1817: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1818: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1819: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1820: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1821: {
    category: 'SKILLING',
    subcategory: 'FIREMAKING',
  },
  1822: {
    category: 'SKILLING',
    subcategory: 'WOODCUTTING',
  },
  1823: {
    category: 'SKILLING',
    subcategory: 'MINING',
  },
  1824: {
    category: 'SKILLING',
    subcategory: 'SMITHING',
  },
  1825: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1826: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1827: {
    category: 'SKILLING',
    subcategory: 'FISHING',
  },
  1828: {
    category: 'SKILLING',
    subcategory: 'COOKING',
  },
  1830: {
    category: 'BOSSING',
    subcategory: 'SCURRIUS',
  },
  1831: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1832: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1833: {
    category: 'SKILLING',
    subcategory: 'HUNTER',
  },
  1834: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1835: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
  1836: {
    category: 'QUESTS',
    subcategory: 'INTERMEDIATE',
  },
  1837: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1838: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1840: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1841: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1842: {
    category: 'OTHER',
    subcategory: 'GENERAL',
  },
  1843: {
    category: 'COMBAT',
    subcategory: 'GENERAL',
  },
  1844: {
    category: 'SKILLING',
    subcategory: 'THIEVING',
  },
};

function mapTaskToCategories(taskId) {
  return (
    CATEGORY_MAPPING[taskId] ?? {
      category: 'OTHER',
      subcategory: 'GENERAL',
    }
  );
}

exports.toCategories = mapTaskToCategories;
