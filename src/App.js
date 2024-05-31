import React, { useState, useEffect } from 'react';
import config from './config';  // Import the config correctly

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(config.API_URL);  // Directly using API_URL from config
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Fetching data failed:', error);
        setError(error.toString());
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error ? <p>Error: {error}</p> : null}
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;