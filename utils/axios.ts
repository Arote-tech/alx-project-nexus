import axios from 'axios';

const api = axios.create({
  baseURL: `https://moviesdatabase.p.rapidapi.com/titles`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
