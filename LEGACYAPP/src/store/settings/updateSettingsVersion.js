import { CURRENT_VERSION } from './constants';

const versionUpdaters = {
  3: updateToV3,
  4: updateToV4,
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

function updateToV3(prevState) {
  // Add setting to hide/show task tracker columns
  return {
    ...prevState,
    taskColumns: {
      completedAt: false,
      priority: true,
      regions: true,
    },
    version: 3,
  };
}

function updateToV4(prevState) {
  // Change theme to raging echoes for new league launch
  return {
    ...prevState,
    theme: prevState.mode === 'light' ? 're-light' : 're-dark',
    version: 4,
  };
}
