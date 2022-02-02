import { batch } from 'react-redux';
import { load as loadSettingsState } from './settings';
import { load as loadTasksState } from './tasks/tasks';
import { load as loadUnlocksState } from './unlocks/unlocks';
import { load as loadCharacterState } from './character/character';
import { load as loadFragmentState } from './fragments/fragments';

export default function loadNewState(dispatch, newState) {
    batch(() => {
        dispatch(loadTasksState({ forceOverwrite: true, newState: newState.tasks || {} }));
        dispatch(loadSettingsState({ forceOverwrite: true, newState: newState.settings || {} }));
        dispatch(loadUnlocksState({ forceOverwrite: true, newState: newState.unlocks || {} }));
        dispatch(loadCharacterState({ forceOverwrite: true, newState: newState.character || {} }));
        dispatch(loadFragmentState({ forceOverwrite: true, newState: newState.fragments || {} }));
    });
}
