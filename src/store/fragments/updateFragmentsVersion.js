import { CURRENT_VERSION, LEGACY_TO_INTERNAL_IDS } from './constants';

const versionUpdaters = {
    2: updateToV2,
};

export default function updateFragmentsVersion(state) {
    if (state.version >= CURRENT_VERSION) {
        return state;
    }

    let updatedState = state;
    Object.keys(versionUpdaters).forEach(version => {
        if (updatedState.version < version) {
            updatedState = versionUpdaters[version](updatedState);
        }
    });
    return updatedState;
}

function updateToV2(state) {
    // Fragment IDs changed to official IDs and need to be remapped
    const newFragMapping = {};
    Object.keys(state.fragments).forEach(fragKey => {
        const newKey = LEGACY_TO_INTERNAL_IDS[fragKey];
        newFragMapping[newKey] = state.fragments[fragKey];
    });
    return {
        ...state,
        fragments: newFragMapping,
        version: 2,
    };
}
