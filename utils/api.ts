// utils/api.ts
import axios from 'axios';


export const fetcher = async (): Promise<any> => {
  const options = {
    method: 'GET',
    url: 'https://moviesdatabase.p.rapidapi.com/titles',
    headers: {
      'X-RapidAPI-Key': '0e90247051msh302083b5c7ca9bbp1c48ddjsnad8371b50aff',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };
  const response = await axios.request(options);

   if (!response.data) {
    throw new Error('Failed to fetch data');
  }

  
  return response.data;
};
