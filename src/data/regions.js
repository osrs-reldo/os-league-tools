import images from '../assets/images';
import getAllQuestPrereqs from '../util/getAllQuestPrereqs';

// eslint-disable-next-line import/prefer-default-export
export const TRAILBLAZER_REGIONS = [
  {
    id: 6,
    label: 'Misthalin',
    icon: images['task-misthalin.png'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['3139', '350', '354', '433', '3135', '360']),
  },
  {
    id: 4,
    label: 'Karamja',
    icon: images['task-karamja.png'],
    isDefaultUnlock: true,
    questUnlocks: getAllQuestPrereqs(['424']),
  },
  {
    id: 0,
    label: 'Kandarin',
    icon: images['task-kandarin.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['396', '428', '387']),
  },
  {
    id: 1,
    label: 'Desert',
    icon: images['task-kharidian.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['90009']),
  },
  {
    id: 2,
    label: 'Asgarnia',
    icon: images['task-asgarnia.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['394', '402']),
  },
  {
    id: 3,
    label: 'Fremennik',
    icon: images['task-fremennik.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['90002', '382', '348', '398']),
  },
  {
    id: 5,
    label: 'Kourend',
    icon: images['task-xeric.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['3155']),
  },
  {
    id: 7,
    label: 'Morytania',
    icon: images['task-morytania.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['341', '375']),
  },
  {
    id: 8,
    label: 'Tirannwn',
    icon: images['task-tiranwnn.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['603']),
  },
  {
    id: 9,
    label: 'Wilderness',
    icon: images['task-wilderness.png'],
    isDefaultUnlock: false,
    questUnlocks: getAllQuestPrereqs(['3140']),
  },
];

function getRegionsById() {
  const regionsById = {};
  TRAILBLAZER_REGIONS.forEach(region => {
    regionsById[region.id] = region;
  });
  return regionsById;
}

export const regionsById = getRegionsById();
