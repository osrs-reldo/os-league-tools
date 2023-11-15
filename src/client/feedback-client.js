const BASE_URL = process.env.REACT_APP_RELDO_URL || 'http://localhost:8080';

export function submitBug(formData) {
  return submitFeedback(formData, '/bug');
}

export function submitSuggestion(formData) {
  return submitFeedback(formData, '/suggestion');
}

export function submitFeedback(formData, subroute = '') {
  return fetch(`${BASE_URL}/feedback${subroute}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then(res => res.json())
    .then(
      result => ({ success: result.status && result.status === 201 }),
      error => {
        console.warn(error);
        return { success: false };
      }
    );
}

export function submitRenderError(error, info, deviceInfo) {
  const message = [error.message, error.stack, '', '# Component stack:', JSON.stringify(info, undefined, 2)].join('\n');
  return submitFeedback(
    {
      description: `Error boundary on ${window.location.pathname}`,
      reproSteps: message,
      device: JSON.stringify(deviceInfo, undefined, 2),
      debugInfo: JSON.stringify(window.localStorage, undefined, 2),
    },
    '/bug'
  );
}
