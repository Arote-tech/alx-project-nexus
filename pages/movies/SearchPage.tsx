import { useEffect, useState, useRef } from 'react';
import { useRouter } from 'next/router';
import useSWR from 'swr';
import SearchBar from '@/components/common/SearchBar';
import MovieList from '@/components/common/MovieList';
import { fetcher } from '@/utils/api';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import CustomLinks from "@/components/common/CustomLinks";
import Image from "next/image";
import { MovieApiResponse } from '@/types';




const genres = ['Action', 'Drama', 'Comedy', 'Historical', 'Fantasy'];

export default function SearchPage() {
  const router = useRouter();
  const { query } = router;

  const [showGenres, setShowGenres] = useState(false);
  
  const searchTerm = query.query as string || '';
  const selectedGenre = query.genre as string || null;
  const page = Number(query.page) || 1;
  
 

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setShowGenres(false);
    }
  };

  if (showGenres) {
    document.addEventListener('mousedown', handleClickOutside);
  } else {
    document.removeEventListener('mousedown', handleClickOutside);
  }

  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [router, showGenres]);


  const buildUrl = () => {
    const params = new URLSearchParams();
    if (searchTerm) params.append('query', searchTerm);
    if (selectedGenre) params.append('genre', selectedGenre);
    params.append('page', page.toString());
    return `/api/trending?${params.toString()}`;
  };

  const { data: Movies, isLoading } = useSWR<MovieApiResponse>(buildUrl(), fetcher);
  console.log('Movie Data:', Movies);

  const dropdownRef = useRef<HTMLDivElement | null>(null);


  const handleSearch = (term: string) => {
    router.push(`/movies/SearchPage?query=${encodeURIComponent(term)}&page=1`);
  };

  const handleGenreClick = (genre: string) => {
    router.push(`/movies/SearchPage?genre=${genre}&page=1`);
    setShowGenres(false);
  };

  const handlePageChange = (newPage: number) => {
    const baseParams = new URLSearchParams();
    if (searchTerm) baseParams.append('query', searchTerm);
    if (selectedGenre) baseParams.append('genre', selectedGenre);
    baseParams.append('page', newPage.toString());
    router.push(`/movies/search?${baseParams.toString()}`);
  };

  return (
    <div>
      <Header />
      <div className="p-4 max-w-md mx-auto min-h-screen space-y-4 bg-hour-glass bg-cover bg-no-repeat">
      <SearchBar  onSearch={handleSearch} />
      
      <div className="relative">
        <button
          onClick={() => setShowGenres(!showGenres)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          <span>{selectedGenre ? selectedGenre : 'Select Genre'}</span>
          <Image
            src="/icons/down-256x256.png"
            alt="Genre Dropdown Icon"
            width={16}
            height={16}
            className={`w-4 h-4 object-contain transition-transform ${showGenres ? 'rotate-180' : ''}`}
          />
        </button>

        {showGenres && (
          <div ref={dropdownRef} className="absolute z-10 mt-2 w-48 bg-white border rounded shadow-md">
            {genres.map((genre) => (
              <button
                key={genre}
                onClick={() => handleGenreClick(genre)}
                className="w-full text-left px-4 py-2 hover:bg-blue-100"
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>

      <h2 className="text-xl font-semibold mt-4">
        {selectedGenre ? `${selectedGenre} Movies` : 'Search Results'}
      </h2>

      {isLoading ? <p>Loading...</p> : <MovieList movies={[]} />}

      <div className="flex justify-center gap-4 pt-4">
        <button
          disabled={page === 1}
          onClick={() => handlePageChange(page - 1)}
          className="px-4 py-2 bg-gray-600 z-20 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          className="px-4 py-2 bg-gray-600 z-20 rounded"
        >
          Next
        </button>
      </div>
    </div>
    <div className="mx-w-md mx-auto h-5 p-4 rounded-lg shadow-md">
      <CustomLinks />
    </div>
    <Footer />
  </div>  
  );
}
