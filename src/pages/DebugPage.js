import React, { useEffect, useState } from 'react';
import fetchStorageData from '../api/fetchStorageData'; // Correct function name

export default function DebugPage() {
  const [storageData, setStorageData] = useState(null); // Updated state name for clarity
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStorageData(); // Correct function call
        setStorageData(data); // Update state with the fetched data
      } catch (err) {
        setError(err.message); // Set error if fetching fails
      }
    };
    fetchData();
  }, []);

  if (error) {
    return (
      <div>
        <h1>Error loading storage data</h1>
        <p>{error}</p>
      </div>
    );
  }

  if (!storageData) {
    return <div>Loading...</div>;
  }

  return <pre>{JSON.stringify(storageData, null, 2)}</pre>; // Render the JSON data
}
