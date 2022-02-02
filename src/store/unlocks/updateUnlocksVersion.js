import { without } from 'lodash';
import { CURRENT_VERSION, DEFAULT_UNLOCKED_BOSSES } from './constants';

const versionUpdaters = {
    2: updateToV2,
    3: updateToV3,
    4: updateToV4,
    5: updateToV5,
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

function updateToV4(prevState) {
    // Boss unlock removing default values
    return {
        ...prevState,
        version: 4,
        bosses: without(prevState.bosses, ...DEFAULT_UNLOCKED_BOSSES),
    };
}

function updateToV5(prevState) {
    // Root cause unclear, but some users are missing quests object and need to have it recreated
    return {
        ...prevState,
        version: 5,
        quests: prevState.quests || {},
    };
}
