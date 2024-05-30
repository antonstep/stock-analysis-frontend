import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_HRL;
    fetch(`${backendUrl}/api/message`)
    .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Loading...</p>}
      </header>
    </div>
  );
}

export default App;
