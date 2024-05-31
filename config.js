// src/config.js
const prod = {
    API_URL: 'https://stock-analysis-backend-y6qh.onrender.com',
  };
  
  const dev = {
    API_URL: 'https://stock-analysis-backend-y6qh.onrender.com/api/data',
  };
  
  export const config = process.env.NODE_ENV === 'development' ? dev : prod;  