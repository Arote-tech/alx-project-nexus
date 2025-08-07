// pages/movies/[id].tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils/api';
import MovieCard from "@/components/common/MovieCard"
import MovieCarousel from '@/components/common/MovieCarousel';
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"
import { type Movie } from "@/types"


export default function MovieDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: movie } = useSWR<Movie>(id ? `/api/movie/${id}` : null, fetcher);
  const { data: relatedMovies } = useSWR<Movie[]>(id ? `/api/movie/${id}/related` : null, fetcher);

  return (
    <div>
      <Header />
      <div className="p-4 max-w-md mx-auto min-h-screen space-y-4 bg-hour-glass bg-cover bg-no-repeat">
      {movie && <MovieCard Movie={movie}/>}

      {relatedMovies && relatedMovies.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2 text-white-400">Similar Movies</h2>
          <MovieCarousel movies={relatedMovies} />
        </div>
      )}
    </div>
    <CustomLinks />
    <Footer />
  </div>
  );
}
