import { batch } from 'react-redux';
import { load as loadSettingsState, reset as resetSettingsState } from './settings';
import { load as loadTasksState, reset as resetTasksState } from './tasks/tasks';
import { load as loadUnlocksState, reset as resetUnlocksState } from './unlocks/unlocks';
import { load as loadCharacterState, reset as resetCharacterState } from './user/character';
import { load as loadFragmentState, reset as resetFragmentState } from './fragments/fragments';
import { reset as resetFilterState } from './filters';
import { reset as resetCalculatorsState } from './calculators/calculators';

export function loadNewState(dispatch, newState) {
  batch(() => {
    dispatch(loadTasksState({ forceOverwrite: true, newState: newState.tasks || {} }));
    dispatch(loadSettingsState({ forceOverwrite: true, newState: newState.settings || {} }));
    dispatch(loadUnlocksState({ forceOverwrite: true, newState: newState.unlocks || {} }));
    dispatch(loadCharacterState({ forceOverwrite: true, newState: newState.character || {} }));
    dispatch(loadFragmentState({ forceOverwrite: true, newState: newState.fragments || {} }));
  });
}

export function resetState(dispatch, skipDbUpdate) {
  batch(() => {
    dispatch(resetSettingsState({ skipDbUpdate }));
    dispatch(resetTasksState({ skipDbUpdate }));
    dispatch(resetUnlocksState({ skipDbUpdate }));
    dispatch(resetCharacterState({ skipDbUpdate }));
    dispatch(resetFragmentState({ skipDbUpdate }));
    dispatch(resetFilterState({ skipDbUpdate }));
    dispatch(resetCalculatorsState({ skipDbUpdate }));
  });
}
