import React from 'react';
import {type Movie } from '@/types/index';
import MovieCard from './MovieCard';

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (!movies || movies.length === 0) {
    return <p className="text-center text-gray-500 mt-4">No movies found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map((movie) => (
        <MovieCard key={movie.id} Movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
