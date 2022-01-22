import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
    2: updateToV2,
};

export default function updateUnlocksVersion(state) {
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

function updateToV2(prevState) {
    // V2 adds quests
    return {
        ...prevState,
        version: 2,
        quests: {},
    };
}
