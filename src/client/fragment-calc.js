import { FRAGMENTS } from '../data/relics';
import calculateTaskStats from '../util/calculateTaskStats';
import { getTier } from '../util/getTier';

const BASE_URL = 'https://tpetrychyn.github.io/osrs-fragment-calc/';
const LIST_DELIM_ENCODED = '%2C';

export default function getFragmentCalcLink(userState) {
    const taskStats = calculateTaskStats(userState.tasks.tasks);
    const tier = getTier(taskStats.points.complete.total);
    const notOwnedFragmentIds = Object.keys(FRAGMENTS).filter(
        fragmentId => !userState.fragments.fragments[fragmentId] || !userState.fragments.fragments[fragmentId].unlocked
    );
    if (notOwnedFragmentIds.length > 0) {
        return `${BASE_URL}?tier=${tier}&notOwned=${notOwnedFragmentIds.join(LIST_DELIM_ENCODED)}`;
    }
    return `${BASE_URL}?tier=${tier}`;
}
