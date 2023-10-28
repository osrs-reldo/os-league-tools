/* eslint-disable no-unused-vars */
export default function updateWithUserDataStorage(wrappedDispatchFn, wrappedFnProps, localstorageKey, stateKey) {
  return async (dispatch, getState) => {
    await dispatch(wrappedDispatchFn(wrappedFnProps));

    // TODO re-enable user login
    // const dataKey = (() => {
    //   switch (localstorageKey) {
    //     case LOCALSTORAGE_KEYS.UNLOCKS:
    //     case LOCALSTORAGE_KEYS.TASKS: {
    //       const state = getState();
    //       return `${localstorageKey}_${state.character.characters[state.character.activeCharacter] ?? 'DEFAULT'}`;
    //     }
    //     default: {
    //       return localstorageKey;
    //     }
    //   }
    // })();

    // const { isLoggedIn, userEmail, accessToken } = getState().account.accountCache;
    // if (isLoggedIn && !wrappedFnProps.skipDbUpdate) {
    //   putUserData(userEmail, dataKey, getState()[stateKey], accessToken);
    // }
  };
}
