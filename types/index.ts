
export type Movie = {
  id: number
  poster_Path: string;
  releaseYear: string;
  title:string
  length: number
  genre: string
  rating: string
  description: string
  
};


export type MovieApiResponse = {
  results: Movie[];
  page: number;
  total_pages: number;
  total_results: number;
};
