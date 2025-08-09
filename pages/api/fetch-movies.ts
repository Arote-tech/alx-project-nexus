import { NextApiRequest, NextApiResponse } from "next";
import axios from 'axios';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
  const { page = '1', genre = '', id = '',  year= '' } = req.query as {
  page?: string;
  genre?: string;
  id?: string;
   year?: string
};

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
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_MOVIE_API_KEY!,
        'X-RapidAPI-Host': process.env.NEXT_PUBLIC_MOVIE_API_HOST!
      }
    });   

     
    res.status(200).json(response.data);
  } catch (error: unknown) {
  if (error instanceof Error) {
    console.error(error.message);
  }
}



}

