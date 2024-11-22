// src/api/fetchDisplayNames.js

// Function to fetch display names
const BASE_URL = 'http://localhost:8080';

export const fetchDisplayNames = async username => {
  try {
    const response = await fetch(`${BASE_URL}/api/getDisplayNames?username=${username}`);
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to fetch display names: ${response.statusText}. Response: ${errorText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error in fetchDisplayNames:', error);
    throw error;
  }
};

// Function to import data from the backend
export const importDataFromBackend = async (username, displayName) => {
  // eslint-disable-next-line no-console
  console.log('Frontend username:', username);
  // eslint-disable-next-line no-console
  console.log('Frontend displayName:', displayName);
  try {
    const response = await fetch(
      `${BASE_URL}/api/importData?username=${encodeURIComponent(username)}&displayName=${encodeURIComponent(
        displayName
      )}`
    );
    if (!response.ok) {
      throw new Error(`Failed to import data: ${response.statusText}`);
    }
    return await response.json(); // If your backend returns data
  } catch (error) {
    console.error(error);
    throw error;
  }
};
