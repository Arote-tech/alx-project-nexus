// pages/api/trending.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page = '1', genre = '' } = req.query;

  try {
    let url = `https://moviesdatabase.p.rapidapi.com/titles/?api_key=${process.env.MOVIE_API_KEY}&page=${page}`;

    if (genre) {
      url = `https://moviesdatabase.p.rapidapi.com/titles/?api_key=${process.env.MOVIE_API_KEY}&with_genres=${genre}&sort_by=popularity.desc&page=${page}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching trending movies' });
  }
}
