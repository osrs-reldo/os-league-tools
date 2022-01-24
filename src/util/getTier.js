import { PASSIVE_RELICS } from '../data/constants';

export default function getTier(points) {
    let tier = 0;
    for (let i = 0; i < PASSIVE_RELICS.unlockThresholds.length; i++) {
        if (points < PASSIVE_RELICS.unlockThresholds[i]) {
            break;
        }
        tier++;
    }
    return tier;
}
