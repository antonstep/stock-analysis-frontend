import React, { useEffect, useState } from 'react';

function FetchData() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://your-backend-url.onrender.com/api/message')  // Update with your actual backend URL
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
