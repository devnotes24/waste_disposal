import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
  // baseURL: 'https://waste-disposal-v1cm.onrender.com/',
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;