import { CATEGORY } from './categories';
import { DIFFICULTY } from './constants';

export const REGION_ANY = 'General';

export default {
  497: {
    id: '497',
    label: 'Achieve Your First Level Up',
    description: 'Level up any of your skills for the first time.',
    skillReqs: [],
    regions: ['General'],
    difficulty: DIFFICULTY.EASY,
    category: CATEGORY.OTHER,
    subcategory: CATEGORY.OTHER.subcategories.MILESTONE,
    prerequisite: '',
  },
  498: {
    id: '498',
    label: 'Achieve Your First Level 5',
    description: 'Reach level 5 in any skill (not including Agility, Hitpoints and Runecraft).',
    skillReqs: [],
    regions: ['General'],
    difficulty: DIFFICULTY.EASY,
    category: CATEGORY.OTHER,
    subcategory: CATEGORY.OTHER.subcategories.MILESTONE,
    prerequisite: '497',
  },
  499: {
    id: '499',
    label: 'Achieve Your First Level 10',
    description: 'Reach level 10 in any skill (not including Agility and Hitpoints).',
    skillReqs: [],
    regions: ['General'],
    difficulty: DIFFICULTY.EASY,
    category: CATEGORY.OTHER,
    subcategory: CATEGORY.OTHER.subcategories.MILESTONE,
    prerequisite: '498',
  },
  500: {
    id: '500',
    label: 'Achieve Your First Level 20',
    description: 'Reach level 20 in any skill.',
    skillReqs: [],
    regions: ['General'],
    difficulty: DIFFICULTY.EASY,
    category: CATEGORY.OTHER,
    subcategory: CATEGORY.OTHER.subcategories.MILESTONE,
    prerequisite: '499',
  },
};
