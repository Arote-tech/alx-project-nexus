// components/SearchBar.tsx
import { useState } from 'react';

type Props = {
  onSearch: (term: string) => void;
};

export function SearchBar({ onSearch }: Props) {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Search movies..."
        className="p-2 border border-gray-300 rounded w-full"
      />
      
    </form>
  );
}

// components/GenreButtons.tsx
const genres = ['Action', 'Drama', 'Comedy', 'Historical', 'Fantasy'];

type Props = {
  onSelect: (genre: string) => void;
};

export default function GenreButtons({ onSelect }: Props) {
  return (
    <div className="flex gap-3 overflow-x-auto py-2">
      {genres.map((g) => (
        <button
          key={g}
          onClick={() => onSelect(g)}
          className="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300 whitespace-nowrap"
        >
          {g}
        </button>
      ))}
    </div>
  );
}

// components/MovieList.tsx
import Image from 'next/image';
import { Movie } from '@/types/movie';

type Props = {
  movies: Movie[];
};

export default function MovieList({ movies }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white rounded shadow">
          <Image
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
            width={300}
            height={450}
            className="rounded-t"
          />
          <div className="p-2">
            <h3 className="font-semibold text-sm line-clamp-2">{movie.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}

// components/MovieCarousel.tsx
import Image from 'next/image';
import { Movie } from '@/types/movie';

type Props = {
  movies: Movie[];
};

export default function MovieCarousel({ movies }: Props) {
  return (
    <div className="flex gap-4 overflow-x-auto py-2">
      {movies.map((movie) => (
        <div key={movie.id} className="min-w-[160px]">
          <Image
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
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
