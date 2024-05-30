import React, { useState, useEffect } from 'react';

const DataFetcher = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Update the fetch URL to your deployed backend URL
        fetch('https://stock-analysis-backend-y6qh.onrender.com/api/data')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
        </div>
    );
};

export default DataFetcher;