const BASE_URL = process.env.REACT_APP_RELDO_URL || 'http://localhost:8080';
const DEFAULT_HEADERS = {
  'Content-type': 'application/json',
};

function defaultResponseHandler(result) {
  return { success: result.status && result.status === 201 };
}

function defaultErrorHandler(error) {
  console.warn(error);
  return { success: false };
}

export function createUserIfNeeded(userEmail) {
  const getUserResult = getUser(userEmail);
  if (getUserResult.success) {
    return { success: true };
  }

  return fetch(`${BASE_URL}/user?email=${userEmail}`, {
    method: 'POST',
    headers: DEFAULT_HEADERS,
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function getUser(userEmail) {
  return fetch(`${BASE_URL}/user?email=${userEmail}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function getUserData(userEmail, storageKey) {
  return fetch(`${BASE_URL}/user?email=${userEmail}&key=${storageKey}`, {
    method: 'GET',
    headers: DEFAULT_HEADERS,
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}

export function putUserData(userEmail, storageKey, payload) {
  return fetch(`${BASE_URL}/user?email=${userEmail}&key=${storageKey}`, {
    method: 'PUT',
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(payload),
  })
    .then(res => res.json())
    .then(defaultResponseHandler, defaultErrorHandler);
}
