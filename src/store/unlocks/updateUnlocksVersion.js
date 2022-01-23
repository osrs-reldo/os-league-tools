import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
    2: updateToV2,
    3: updateToV3,
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

function updateToV3(prevState) {
    // Fixed a bug that caused skill array to get filled with null values
    return {
        ...prevState,
        version: 3,
        skills: prevState.skills.filter(val => !!val),
    };
}
