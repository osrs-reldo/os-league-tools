import images from '../assets/images';
import getAllQuestPrereqs from '../util/getAllQuestPrereqs';

export const NONE_REGION_ID = -1;
export const DEFAULT_REGIONS = [0, 1];
export const REGION_UNLOCK_THRESHOLDS = [0, 90, 200, 400];

export const GLOBAL_REGION = {
  label: 'Global',
  icon: images['task-global.png'],
};

export const LEAGUES_REGIONS = [
  {
    id: 0,
    label: 'Misthalin',
    icon: images['task-misthalin.png'],
    map: images['map-misthalin.png'],
    infographic: images['info-misthalin.jpeg'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['31', '34', '38', '145', '11', '47']),
    diaryUnlocks: [
      295, 297, 299, 300, 301, 310, 311, 315, 316, 317, 319, 320, 322, 323, 324, 327, 382, 383, 390, 391, 393, 396, 404,
      406,
    ],
  },
  {
    id: 1,
    label: 'Karamja',
    icon: images['task-karamja.png'],
    map: images['map-karamja.png'],
    infographic: images['info-karamja.png'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['133']),
    diaryUnlocks: [203, 204, 216, 221, 227, 231, 234, 236, 242],
  },
  {
    id: 2,
    label: 'Asgarnia',
    icon: images['task-asgarnia.png'],
    map: images['map-asgarnia.png'],
    infographic: images['info-asgarnia.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['93', '102']),
    diaryUnlocks: [97, 114, 118],
  },
  {
    id: 3,
    label: 'Desert',
    icon: images['task-desert.png'],
    map: images['map-desert.png'],
    infographic: images['info-desert.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['2343']),
    diaryUnlocks: [58, 67, 70, 75],
  },
  {
    id: 4,
    label: 'Fremennik',
    icon: images['task-fremennik.png'],
    map: images['map-fremennik.png'],
    infographic: images['info-fremennik.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['2338', '74', '32', '98']),
    diaryUnlocks: [131, 134, 141, 142, 155, 156],
  },
  {
    id: 5,
    label: 'Morytania',
    icon: images['task-morytania.png'],
    map: images['map-morytania.png'],
    infographic: images['info-morytania.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['22', '67']),
    diaryUnlocks: [346, 350, 357, 360, 362],
  },
  {
    id: 6,
    label: 'Kandarin',
    icon: images['task-kandarin.png'],
    map: images['map-kandarin.png'],
    infographic: images['info-kandarin.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['96', '140', '82']),
    diaryUnlocks: [171, 186, 188, 195, 196, 199, 409, 414, 424, 434, 441, 449, 1, 8, 14, 15, 20, 22, 32, 33, 35, 41],
  },
  {
    id: 7,
    label: 'Kourend',
    icon: images['task-kourend.png'],
    map: images['map-kourend.png'],
    infographic: images['info-kourend.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['81']),
    diaryUnlocks: [278],
  },
  {
    id: 8,
    label: 'Tirannwn',
    icon: images['task-tiranwnn.png'],
    map: images['map-tirannwn.png'],
    infographic: images['info-tirannwn.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['137']),
    diaryUnlocks: [278],
  },
  {
    id: 9,
    label: 'Wilderness',
    icon: images['task-wilderness.png'],
    map: images['map-wilderness.png'],
    infographic: images['info-wilderness.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['43']),
    diaryUnlocks: [473, 482, 484, 486],
  },
  {
    id: 10,
    label: 'Varlamore',
    icon: images['task-varlamore.png'],
    map: images['map-varlamore.png'],
    infographic: images['info-varlamore.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['3710', '3513']),
    diaryUnlocks: [],
  },
];

function getRegionsById() {
  const regionsById = {};
  LEAGUES_REGIONS.forEach(region => {
    regionsById[region.id] = region;
  });
  return regionsById;
}
export const regionsById = getRegionsById();

function getRegionsByName() {
  const regionsByName = {};
  LEAGUES_REGIONS.forEach(region => {
    regionsByName[region.label] = region;
  });
  return regionsByName;
}
export const regionsByName = getRegionsByName();

export const regionNames = LEAGUES_REGIONS.map(({ label }) => label);
