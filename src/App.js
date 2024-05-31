import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import config from './config';  // Import the config correctly

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Using axios to make the HTTP request
        const response = await axios.get(config.API_URL);
        setData(response.data); // Direct access to response.data with axios
      } catch (error) {
        console.error('Fetching data failed:', error);
        setError(error.toString());
        // Optionally handle error responses, e.g., error.response
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