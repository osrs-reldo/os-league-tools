import apiClient from './apiClient';

const STORAGE_CACHE_KEY = 'cachedStorage';
const CACHE_EXPIRY_MS = 1000 * 60 * 60 * 24; // Cache expires in 24 hours

const fetchStorageData = async ({ signal } = {}) => {
  try {
    // Check if cached data exists and is still valid
    const cache = localStorage.getItem(STORAGE_CACHE_KEY);
    if (cache) {
      const { data, timestamp } = JSON.parse(cache);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
        /* eslint-disable no-console */
        console.log('Using cached storage data:', data); // Log cached data
        /* eslint-enable no-console */
        return data; // Return cached data if it's valid
      }
    }

    // Fetch fresh data from the API
    const response = await apiClient.get('/storage', { signal });

    // Safely handle unexpected response structures
    const {
      tasks = [],
      difficulties = [],
      diaryDifficulties = [],
      diaryLocations = [],
      quests = [],
      // regions = [],
      trophies = [],
      questDifficulty = [],
      questLength = [],
      questStatus = [],
      bosses = [],
      stats = [],
      sourceCombat = [],
      sourceLeagueTasks = [],
    } = response.data || {};

    // Process the data
    const difficultyMap = difficulties.reduce((acc, d) => ({ ...acc, [d.label]: d }), {});
    // const regionMap = regions.reduce((acc, r) => ({ ...acc, [r.label]: r }), {});
    // const questDifficultyMap = questDifficulty.reduce((acc, qd) => ({ ...acc, [qd.label]: qd }), {});

    const formattedTasks = tasks.map(task => ({
      ...task,
      difficulty: difficultyMap[task.tier]?.label || 'Unknown', // Map difficulty
      // region: regionMap[task.category]?.label || 'Unknown', // Map region/category
    }));

    // Combine the data into a single object
    const data = {
      tasks: formattedTasks,
      difficulties,
      diaryDifficulties,
      diaryLocations,
      quests,
      // regions,
      trophies,
      questDifficulty,
      questLength,
      questStatus,
      bosses,
      stats,
      sourceCombat,
      sourceLeagueTasks,
    };
    /* eslint-disable no-console */
    console.log('Fetched and formatted storage data:', data); // Log the fetched data
    /* eslint-enable no-console */
    // Cache the fetched data
    localStorage.setItem(STORAGE_CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));

    return data; // Return the fresh data
  } catch (error) {
    console.error('Error fetching storage data:', error.message || error);
    throw new Error(error.response ? error.response.data.message : 'Failed to fetch storage data');
  }
};

export default fetchStorageData;
