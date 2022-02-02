export const LEVEL_99_XP = 13034431;

export function levelToExperience(level) {
    let sum = 0;
    for (let i = 1; i < level; i++) {
        sum += Math.floor(i + 300 * 2 ** (i / 7));
    }
    return Math.floor(0.25 * sum);
}

export function experienceToLevel(experience) {
    let level = 0;

    if (experience > LEVEL_99_XP) {
        level = 99;
    } else {
        for (let i = 1; i <= 99; i++) {
            if (levelToExperience(i + 1) > experience) {
                level = i;
                break;
            }
        }
    }

    return level;
}
