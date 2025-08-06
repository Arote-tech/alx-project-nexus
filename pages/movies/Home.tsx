// pages/index.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from "next-auth/react";
import useSWR from 'swr';
import SearchBar from '@/components/common/SearchBar';
import MovieList from '@/components/common/MovieList';
import MovieCarousel from '@/components/common/MovieCarousel';
import { fetcher } from '@/utils/api';
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import CustomLinks from "@/components/common/CustomLinks";
import { MovieApiResponse } from '@/types/index';


const genres = ['Action', 'Drama', 'Comedy', 'Historical', 'Fantasy'];

export default function HomeScreen() {
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleSearch = (term: string) => {
    if (term.trim()) {
      router.push(`/movies/search?query=${encodeURIComponent(term)}`);
    }
  };

  const handleGenreClick = (genre: string) => {
    router.push(`/movies/search?genre=${genre}`);
  };

  const { data: trendingData, isLoading: loadingTrending } = useSWR<MovieApiResponse>('https://moviesdatabase.p.rapidapi.com/titles', fetcher);
  const { data: recommendedData, isLoading: loadingRecommended } = useSWR<MovieApiResponse>('https://moviesdatabase.p.rapidapi.com//titles/%7Bid%7D/ratings', fetcher);
  
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="p-6 space-y-6" style = {{backgroundImage: `url('/images/hour-glass.jpg')`}}>
      <SearchBar onSearch={handleSearch} />

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
      <h1>Welcome back, {session?.user?.name || "user"}!</h1>
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
    <CustomLinks />
    <Footer />

  </div>
  );
}
