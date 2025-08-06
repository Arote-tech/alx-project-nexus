// components/MovieCarousel.tsx
import Image from 'next/image';
import { type Movie } from '@/types/index';

type CarouselProps = {
  movies: Movie[];
  relatedMovies?: Movie[] 
};

export default function MovieCarousel({ movies }: CarouselProps) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {movies.map((movie) => (
        <div key={movie.id} className="min-w-[160px]">
          <Image
            src={`https://image.tmdb.org/t/p/w200${movie.poster_Path}`}
            alt={movie.title}
            width={200}
            height={300}
            className="rounded"
          />
          <p className="text-sm mt-1 text-center line-clamp-2">{movie.title}</p>
        </div>
      ))}
    </div>
  );
}
