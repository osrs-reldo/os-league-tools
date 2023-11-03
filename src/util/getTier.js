import { PASSIVE_RELICS } from '../data/constants';
import { REGION_UNLOCK_THRESHOLDS } from '../data/regions';

export function getTier(points) {
  let tier = 0;
  for (let i = 0; i < PASSIVE_RELICS.unlockThresholds.length; i++) {
    if (points < PASSIVE_RELICS.unlockThresholds[i]) {
      break;
    }
    tier++;
  }
  return tier;
}

export function getExpMultiplier(tier) {
  const EXP_MULTIPLIERS = Object.values(PASSIVE_RELICS.tiers).map(tierDetails => tierDetails.expMultiplier);
  return EXP_MULTIPLIERS[tier - 1];
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
