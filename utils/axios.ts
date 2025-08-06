// utils/axios.ts
import axios from 'axios';


const api = axios.create({
  baseURL: '/api', // all your internal API routes will start from here
  headers: {
    'Content-Type': 'application/json',
  },
  // You can also add interceptors here if needed
});

export default api;
