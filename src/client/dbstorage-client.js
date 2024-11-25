const API_URL = '/api/storage';
const CACHE_KEY = 'storageDataCache';

export async function fetchStorageData() {
  try {
    // Fetch fresh data from the API
    const response = await fetch('/api/storage');
    if (!response.ok) {
      throw new Error(`Failed to fetch storage data: ${response.statusText}`);
    }

    const data = await response.json(); // Attempt to parse the response as JSON
    return data;
  } catch (error) {
    console.error('Error fetching storage data:', error.message); // Log the error
    throw error; // Propagate the error for further handling
  }
}

export async function getFromDatabase(key, fallbackValue = null) {
  try {
    const response = await fetch(`${API_URL}?key=${encodeURIComponent(key)}`);
    if (response.ok) {
      const result = await response.json();
      return result[key] || fallbackValue; // Adjust this based on your API's response structure
    }
    throw new Error('Failed to fetch from database');
  } catch (error) {
    console.error(`Error in getFromDatabase: ${error.message}`);
    return fallbackValue;
  }
}

export async function updateDatabase(key, value) {
  try {
    const response = await fetch(`${API_URL}/update`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ key, value }),
    });
    if (!response.ok) {
      throw new Error('Failed to update the database');
    }
    return await response.json();
  } catch (error) {
    console.error(`Error in updateDatabase: ${error.message}`);
    throw error; // Propagate the error for further handling
  }
}

/**
 * Clear the cached data manually, if needed.
 */
export function clearCache() {
  localStorage.removeItem(CACHE_KEY);
}

/**
 * Retrieve only a specific subset of the cached data, if it exists.
 * @param {string} key - The key to retrieve from the cached data.
 */
export function getCachedDataByKey(key) {
  const cache = localStorage.getItem(CACHE_KEY);
  if (cache) {
    const { data } = JSON.parse(cache);
    return data[key] || null;
  }
  return null;
}
