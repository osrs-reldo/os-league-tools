import { batch } from 'react-redux';
import {
  INITIAL_STATE as INITIAL_SETTINGS_STATE,
  load as loadSettingsState,
  reset as resetSettingsState,
} from './settings';
import { load as loadTasksState, reset as resetTasksState } from './tasks/tasks';
import { load as loadUnlocksState, reset as resetUnlocksState } from './unlocks/unlocks';
import { load as loadCharacterState, reset as resetCharacterState } from './user/character';
import { reset as resetFilterState } from './filters';
import { reset as resetCalculatorsState } from './calculators/calculators';
import { INITIAL_STATE as INITIAL_TASKS_STATE } from './tasks/constants';
import { INITIAL_STATE as INITIAL_UNLOCKS_STATE } from './unlocks/constants';
import { INITIAL_STATE as INITIAL_CHARACTER_STATE } from './user/constants';

export function loadNewState(dispatch, newState) {
  batch(() => {
    if (newState.tasks) {
      dispatch(loadTasksState({ forceOverwrite: true, newState: newState.tasks || INITIAL_TASKS_STATE }));
    }
    if (newState.settings) {
      dispatch(loadSettingsState({ forceOverwrite: true, newState: newState.settings || INITIAL_SETTINGS_STATE }));
    }
    if (newState.unlocks) {
      dispatch(loadUnlocksState({ forceOverwrite: true, newState: newState.unlocks || INITIAL_UNLOCKS_STATE }));
    }
    if (newState.character) {
      dispatch(loadCharacterState({ forceOverwrite: true, newState: newState.character || INITIAL_CHARACTER_STATE }));
    }
  });
}

export function resetState(dispatch, skipDbUpdate) {
  batch(() => {
    dispatch(resetSettingsState({ skipDbUpdate }));
    dispatch(resetTasksState({ skipDbUpdate }));
    dispatch(resetUnlocksState({ skipDbUpdate }));
    dispatch(resetCharacterState({ skipDbUpdate }));
    dispatch(resetFilterState({ skipDbUpdate }));
    dispatch(resetCalculatorsState({ skipDbUpdate }));
  });
}
