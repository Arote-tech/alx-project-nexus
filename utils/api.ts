// utils/api.ts
import axios from 'axios';

const RAPIDAPI_KEY = process.env.NEXT_PUBLIC_RAPIDAPI_KEY || 'https://moviesdatabase.p.rapidapi.com/titles';

export const fetcher = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };
  const response = await axios.request(options);

   if (!response.data) {
    throw new Error('Failed to fetch data');
  }

  
  return response.data;
};
