import { PASSIVE_RELICS, RELIC_UNLOCK_THRESHOLDS } from '../data/relics';
import { REGION_UNLOCK_THRESHOLDS } from '../data/regions';
import { TROPHY_THRESHOLDS } from '../data/trophies';

export function getTier(points) {
  let tier = 0;
  for (let i = 0; i < RELIC_UNLOCK_THRESHOLDS.length; i++) {
    if (points < RELIC_UNLOCK_THRESHOLDS[i]) {
      break;
    }
    tier++;
  }
  return tier;
}

export function getExpMultiplier(tier) {
  const EXP_MULTIPLIERS = PASSIVE_RELICS.map(tierDetails => tierDetails.exp.multiplier);
  return EXP_MULTIPLIERS[tier];
}

export function getRegionTier(tasksCompleted) {
  let tier = -1;
  for (let i = 0; i < REGION_UNLOCK_THRESHOLDS.length; i++) {
    if (tasksCompleted < REGION_UNLOCK_THRESHOLDS[i]) {
      break;
    }
    tier++;
  }
  return tier;
}

export function getTrophyTier(points) {
  let tier = -1;
  for (let i = 0; i < TROPHY_THRESHOLDS.length; i++) {
    if (points < TROPHY_THRESHOLDS[i]) {
      break;
    }
    tier++;
  }
  return tier;
}
