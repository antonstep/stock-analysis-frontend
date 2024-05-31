import React, { useState, useEffect } from 'react';
import './App.css';
import DataFetcher from './components/DataFetcher.js';  // Adjusted import path assuming DataFetcher is in 'components' folder

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Ensure the environment variable name is correct and consistently named
    const backendUrl = process.env.REACT_APP_BACKEND_URL;  // Corrected typo in variable name
    console.log(`Requesting URL: ${backendUrl}/api/data`);
    fetch(`${backendUrl}/api/data`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Handle non-2xx responses
        }
        return response.json();
      })
      .then(setData)
      .catch(error => {
        console.error('Fetching data failed:', error);
        setError(error.toString()); // Handle errors and convert them to string for display
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {error ? <p>Error: {error}</p> : null}  // Display error messages if any
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;