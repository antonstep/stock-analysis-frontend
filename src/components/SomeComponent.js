import React, { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://stock-analysis-backend-y6qh.onrender.com/api/data')
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, []);

    return (
        <div>
            {data ? <p>{data.message}</p> : <p>Loading data...</p>}
        </div>
    );
}

export default FetchData;
