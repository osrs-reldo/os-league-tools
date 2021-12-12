const expTable = {
    1: 0,
    2: 83,
    3: 174,
    4: 276,
    5: 388,
    6: 512,
    7: 650,
    8: 801,
    9: 969,
    10: 1154,
    11: 1358,
    12: 1584,
    13: 1833,
    14: 2107,
    15: 2411,
    16: 2746,
    17: 3115,
    18: 3523,
    19: 3973,
    20: 4470,
    21: 5018,
    22: 5624,
    23: 6291,
    24: 7028,
    25: 7842,
    26: 8740,
    27: 9730,
    28: 10824,
    29: 12031,
    30: 13363,
    31: 14833,
    32: 16456,
    33: 18247,
    34: 20224,
    35: 22406,
    36: 24815,
    37: 27473,
    38: 30408,
    39: 33648,
    40: 37224,
    41: 41171,
    42: 45529,
    43: 50339,
    44: 55649,
    45: 61512,
    46: 67983,
    47: 75127,
    48: 83014,
    49: 91721,
    50: 101333,
    51: 111945,
    52: 123660,
    53: 136594,
    54: 150872,
    55: 166636,
    56: 184040,
    57: 203254,
    58: 224466,
    59: 247886,
    60: 273742,
    61: 302288,
    62: 333804,
    63: 368599,
    64: 407015,
    65: 449428,
    66: 496254,
    67: 547953,
    68: 605032,
    69: 668051,
    70: 737627,
    71: 814445,
    72: 899257,
    73: 992895,
    74: 1096278,
    75: 1210421,
    76: 1336443,
    77: 1475581,
    78: 1629200,
    79: 1798808,
    80: 1986068,
    81: 2192818,
    82: 2421087,
    83: 2673114,
    84: 2951373,
    85: 3258594,
    86: 3597792,
    87: 3972294,
    88: 4385776,
    89: 4842295,
    90: 5346332,
    91: 5902831,
    92: 6517253,
    93: 7195629,
    94: 7944614,
    95: 8771558,
    96: 9684577,
    97: 10692629,
    98: 11805606,
    99: 13034431,
};

const reverseExpTable = {
    0: 1,
    83: 2,
    174: 3,
    276: 4,
    388: 5,
    512: 6,
    650: 7,
    801: 8,
    969: 9,
    1154: 10,
    1358: 11,
    1584: 12,
    1833: 13,
    2107: 14,
    2411: 15,
    2746: 16,
    3115: 17,
    3523: 18,
    3973: 19,
    4470: 20,
    5018: 21,
    5624: 22,
    6291: 23,
    7028: 24,
    7842: 25,
    8740: 26,
    9730: 27,
    10824: 28,
    12031: 29,
    13363: 30,
    14833: 31,
    16456: 32,
    18247: 33,
    20224: 34,
    22406: 35,
    24815: 36,
    27473: 37,
    30408: 38,
    33648: 39,
    37224: 40,
    41171: 41,
    45529: 42,
    50339: 43,
    55649: 44,
    61512: 45,
    67983: 46,
    75127: 47,
    83014: 48,
    91721: 49,
    101333: 50,
    111945: 51,
    123660: 52,
    136594: 53,
    150872: 54,
    166636: 55,
    184040: 56,
    203254: 57,
    224466: 58,
    247886: 59,
    273742: 60,
    302288: 61,
    333804: 62,
    368599: 63,
    407015: 64,
    449428: 65,
    496254: 66,
    547953: 67,
    605032: 68,
    668051: 69,
    737627: 70,
    814445: 71,
    899257: 72,
    992895: 73,
    1096278: 74,
    1210421: 75,
    1336443: 76,
    1475581: 77,
    1629200: 78,
    1798808: 79,
    1986068: 80,
    2192818: 81,
    2421087: 82,
    2673114: 83,
    2951373: 84,
    3258594: 85,
    3597792: 86,
    3972294: 87,
    4385776: 88,
    4842295: 89,
    5346332: 90,
    5902831: 91,
    6517253: 92,
    7195629: 93,
    7944614: 94,
    8771558: 95,
    9684577: 96,
    10692629: 97,
    11805606: 98,
    13034431: 99,
};

export function getExpForLevel(level) {
    if (level < 1) {
        return 0;
    } else if (level > 99) {
        return expTable[99];
    }

    return expTable[level];
}

export function getLevelForExp(exp) {
    if (exp <= expTable[1]) {
        return 1;
    } else if (exp >= expTable[99]) {
        return 99;
    }

    const matchingLevelExp = binarySearch(Object.keys(reverseExpTable), exp);
    return reverseExpTable[matchingLevelExp.toString()];
}

function binarySearch(arr, i) {
    const mid = Math.floor(arr.length / 2);
    const midVal = parseInt(arr[mid], 10);
    const lowerVal = mid > 0 ? parseInt(arr[mid - 1], 10) : 0;

    if (midVal === i) {
        return midVal;
    } else if (midVal > i && lowerVal < i) {
        return lowerVal;
    } else if (midVal < i && arr.length > 1) {
        return binarySearch(arr.splice(mid, Number.MAX_VALUE), i);
    } else if (midVal > i && arr.length > 1) {
        return binarySearch(arr.splice(0, mid), i);
    }
    return -1;
}