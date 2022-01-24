import { STATS } from '../data/constants';

export default function getSkillsPanelData({ exclusions = ['QP', 'Combat'] }) {
    const SKILLS_PANEL = {
        0: {},
        1: {},
        2: {},
    };
    Object.keys(STATS).forEach(skillName => {
        if (exclusions.includes(skillName)) {
            return;
        }
        const skillData = STATS[skillName];
        const column = Math.floor(skillData.panelOrder / 8);
        const row = skillData.panelOrder - column * 8;
        SKILLS_PANEL[column][row] = skillData;
    });
    return SKILLS_PANEL;
}
