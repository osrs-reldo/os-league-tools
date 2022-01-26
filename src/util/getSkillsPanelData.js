import { STATS } from '../data/constants';

export default function getSkillsPanelData({ customExclusions = [] } = {}) {
    const skillsArr = [];
    const excludedItems = ['QP', 'Combat', ...customExclusions];

    Object.keys(STATS).forEach(skillName => {
        if (excludedItems.includes(skillName)) {
            return;
        }
        const skillData = STATS[skillName];
        skillsArr[skillData.panelOrder] = skillData;
    });

    return skillsArr;
}
