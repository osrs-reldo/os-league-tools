/**
 * @see https://oldschool.runescape.wiki/w/Combat_level
 * @param {{}} skills Pass in Redux stored hiscores object
 */
export default function calculateCombatLevel({
    attack = {},
    strength = {},
    defence = {},
    prayer = {},
    hitpoints = {},
    magic = {},
    ranged = {},
} = {}) {
    const base = 0.25 * (defence.level + hitpoints.level + Math.floor(prayer.level / 2));

    const meeleCombat = 0.325 * (attack.level + strength.level);
    const rangedCombat = 0.325 * (ranged.level * 1.5);
    const magicCombat = 0.325 * (magic.level * 1.5);

    const combatLevel = base + Math.max(...[meeleCombat, rangedCombat, magicCombat]);

    return {
        exact: combatLevel,
        rounded: Math.floor(combatLevel),
    };
}
