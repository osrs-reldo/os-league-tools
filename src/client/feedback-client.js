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
