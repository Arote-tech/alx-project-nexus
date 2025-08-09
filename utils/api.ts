import axios from 'axios';


export const fetcher = async (id: string): Promise<any> => {
  const options = {
    method: 'GET',
    url:`https://moviesdatabase.p.rapidapi.com/titles/${id}/main_actors`,
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY || "",
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com',
    },
  };
  const response = await axios.request(options);

   if (!response.data) {
    throw new Error('Failed to fetch data');
  }

  
  return response.data;
};
