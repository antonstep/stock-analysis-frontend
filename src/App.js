import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from './config';

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(config.API_URL);
        setData(response.data);
      } catch (error) {
        console.error('Fetching data failed:', error);
        setError('Failed to fetch data');
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error ? <p className="Error-message">Error: {error}</p> : null}
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <div className="Loader">Loading...</div>}
      </header>
    </div>
  );
}

export default App;