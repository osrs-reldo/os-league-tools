import { putUserData } from '../client/user-data-client';

export default function updateWithUserDataStorage(wrappedDispatchFn, wrappedFnProps, localstorageKey, stateKey) {
  return async (dispatch, getState) => {
    await dispatch(wrappedDispatchFn(wrappedFnProps));
    const { isLoggedIn, userEmail, accessToken } = getState().account.accountCache;
    if (isLoggedIn && !wrappedFnProps.skipDbUpdate) {
      putUserData(userEmail, localstorageKey, getState()[stateKey], accessToken);
    }
  };
}
