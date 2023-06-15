const BASE_URL = process.env.REACT_APP_RELDO_URL || 'http://localhost:8080';
const DEFAULT_HEADERS = {
  'Content-type': 'application/json',
};

function defaultResponseHandler(result) {
  return {
    success: true,
    value: result,
  };
}

function defaultErrorHandler(error) {
  console.warn(error);
  return { success: false };
}

export function createUserIfNeeded(userEmail, accessToken) {
  const getUserResult = getUser(userEmail);
  if (getUserResult.success) {
    return { success: true };
  }

  return fetch(`${BASE_URL}/user?email=${userEmail}`, {
    method: 'POST',
    headers: {
      ...DEFAULT_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function getUser(userEmail, accessToken) {
  return fetch(`${BASE_URL}/user?email=${userEmail}`, {
    method: 'GET',
    headers: {
      ...DEFAULT_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function getUserByRsn(rsn) {
  return fetch(`${BASE_URL}/user?rsn=${rsn}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function getUserData(userEmail, storageKey, accessToken) {
  return fetch(`${BASE_URL}/user?email=${userEmail}&key=${storageKey}`, {
    method: 'GET',
    headers: {
      ...DEFAULT_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function putUserData(userEmail, storageKey, payload, accessToken) {
  return fetch(`${BASE_URL}/user?email=${userEmail}&key=${storageKey}`, {
    method: 'PUT',
    headers: {
      ...DEFAULT_HEADERS,
      Authorization: `Bearer ${accessToken}`,
    },
    body: typeof payload === 'object' ? JSON.stringify(payload) : payload,
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}
