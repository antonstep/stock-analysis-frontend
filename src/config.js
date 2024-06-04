// Configuration for production environment
const prod = {
  API_URL: 'https://stock-analysis-backend-y6qh.onrender.com',
};

// Configuration for development environment
const dev = {
  API_URL: 'https://stock-analysis-backend-y6qh.onrender.com/api/data',
};

// Determine which configuration to export based on the environment
const config = process.env.NODE_ENV === 'development' ? dev : prod;

// Default export of the configuration
export default config;