import images from '../assets/images';

export const NONE_RELIC_ID = -1;

export const RELIC_UNLOCK_THRESHOLDS = [0, 10, 300, 1500, 3000, 7500, 15000];

export const PASSIVE_RELICS = [
  {
    exp: {
      multiplier: 5,
      increased: true,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: ['Unlimited run energy', 'Stackable clue scrolls'],
  },
  {
    exp: {
      multiplier: 5,
      increased: false,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: true,
    },
    drops: {
      multiplier: 2,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 8,
      increased: false,
    },
    drops: {
      multiplier: 3,
      increased: true,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 12,
      increased: true,
    },
    drops: {
      multiplier: 3,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 12,
      increased: false,
    },
    drops: {
      multiplier: 4,
      increased: true,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
  {
    exp: {
      multiplier: 16,
      increased: true,
    },
    drops: {
      multiplier: 4,
      increased: false,
    },
    minigames: {
      multiplier: 1,
      increased: false,
    },
    extras: [],
  },
];

export const RELICS = [
  [
    {
      label: 'Relic 1.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 1.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 1.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 2.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 2.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 2.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 3.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 3.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 3.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 4.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 4.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 4.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 5.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 5.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 5.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 6.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 6.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 6.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
  [
    {
      label: 'Relic 7.1',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 7.2',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
    {
      label: 'Relic 7.3',
      description: 'Unknown effects',
      icon: images['relic-check.png'],
    },
  ],
];
