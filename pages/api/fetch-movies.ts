import { NextApiRequest, NextApiResponse } from "next";
import axios, { isAxiosError } from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { year, page, genre, id } = req.query;
     if (!id || typeof id !== 'string') {
      return res.status(400).json({ message: 'Missing movie ID' });
    }

    const response = await axios.get('https://moviesdatabase.p.rapidapi.com/titles/${id}/main_actors', {
      params: {
        year: year || new Date().getFullYear(),
        sort: 'year.decr',
        limit: 12,
        page: page || 1,
        ...(genre ? { genre } : {})
      },
      headers: {
        'X-RapidAPI-Key': process.env.MOVIE_API_KEY!,
        'X-RapidAPI-Host': process.env.MOVIE_API_HOST!
      }
    });   

     
    res.status(200).json(response.data);
  } catch (error: unknown) {
  if (error && typeof error === 'object' && 'isAxiosError' in error) {
    const axiosError = error as any;
    console.error('Axios error:', axiosError.response?.data || axiosError.message);
  } else {
    console.error('Unknown error:', error);
  }
}


}

