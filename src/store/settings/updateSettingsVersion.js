import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
  2: updateToV2,
};

export default function updateSettingsVersion(settingsState) {
  if (settingsState.version >= CURRENT_VERSION) {
    return settingsState;
  }

  let updatedState = settingsState;
  Object.keys(versionUpdaters).forEach(version => {
    if (updatedState.version < version) {
      updatedState = versionUpdaters[version](updatedState);
    }
  });
  return updatedState;
}

function updateToV2(prevState) {
  // Change theme to trailblazer reloaded for new league launch
  return {
    ...prevState,
    theme: prevState.mode === 'light' ? 'tr-light' : 'tr-dark',
    version: 2,
  };
}
