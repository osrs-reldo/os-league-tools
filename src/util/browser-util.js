export function getSkillFromCalcUrl() {
    const path = window.location.pathname;
    try {
        return path.match(/\/calculators\/(\w+)/)[1];
    } catch (e) {
        console.log(e);
        return "none";
    }
}