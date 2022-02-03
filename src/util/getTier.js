import { PASSIVE_RELICS } from '../data/constants';

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
