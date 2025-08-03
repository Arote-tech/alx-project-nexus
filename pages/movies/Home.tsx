// pages/index.tsx
import { useState } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import SearchBar from '@/components/common/SearchBar';
import MovieList from '@/components/common/MovieList';
import MovieCarousel from '@/components/common/MovieCarousel';
import { fetcher } from '@/utils/api';

const genres = ['Action', 'Drama', 'Comedy', 'Historical', 'Fantasy'];

export default function HomeScreen() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    if (term.trim()) {
      router.push(`/movies/search?query=${encodeURIComponent(term)}`);
    }
  };

  const handleGenreClick = (genre: string) => {
    router.push(`/movies/search?genre=${genre}`);
  };

  const { data: trendingData, isLoading: loadingTrending } = useSWR('/api/trending?page=1', fetcher);
  const { data: recommendedData, isLoading: loadingRecommended } = useSWR('/api/recommended', fetcher);

  return (
    <div className="p-6 space-y-6">
      <SearchBar
        onSearch={handleSearch}
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
      />

      <div className="flex gap-3 overflow-x-auto pt-2">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => handleGenreClick(genre)}
            className="bg-blue-600 text-white px-4 py-2 rounded whitespace-nowrap hover:bg-blue-700"
          >
            {genre}
          </button>
        ))}
      </div>

      <h2 className="text-xl font-semibold mt-4">Trending Movies</h2>
      {loadingTrending ? (
        <p>Loading trending...</p>
      ) : (
        <MovieList movies={trendingData?.results || []} />
      )}

      <h2 className="text-xl font-semibold mt-6">Recommended Movies</h2>
      {loadingRecommended ? (
        <p>Loading recommended...</p>
      ) : (
        <MovieCarousel movies={recommendedData?.results || []} />
      )}
    </div>
  );
}

interface Props {
  onSearch: (term: string) => void;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBar = ({ onSearch, value, onChange }: Props) => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="flex-1 p-2 border rounded-l"
        placeholder="Search for movies..."
      />
      <button
        onClick={() => onSearch(value)}
        className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};
