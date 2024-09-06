import axios from 'axios';

// Create an instance of Axios with default settings
const api = axios.create({
  baseURL: 'http://localhost:8000/',
  // baseURL: 'https://devtest-7wh6.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;