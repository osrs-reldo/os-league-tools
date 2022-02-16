import { FRAGMENTS } from '../data/relics';

const BASE_URL = 'https://tpetrychyn.github.io/osrs-fragment-calc/';
const LIST_DELIM_ENCODED = '%2C';

export default function getFragmentCalcLink(fragments, tier) {
    const notOwnedFragmentIds = Object.keys(FRAGMENTS).filter(
        fragmentId => !fragments.fragments[fragmentId] || !fragments.fragments[fragmentId].unlocked
    );
    if (notOwnedFragmentIds.length > 0) {
        return `${BASE_URL}?tier=${tier}&notOwned=${notOwnedFragmentIds.join(LIST_DELIM_ENCODED)}`;
    }
    return `${BASE_URL}?tier=${tier}`;
}
