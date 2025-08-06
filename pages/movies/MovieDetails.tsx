// pages/movies/[id].tsx
import { useRouter } from 'next/router';
import useSWR from 'swr';
import { fetcher } from '@/utils/api';
import MovieCarousel from '@/components/common/MovieCarousel';
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"
import Loading from "@/components/common/Loading"
import { type Movie } from "@/types"



export default function MovieDetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: movie } = useSWR<Movie>(id ? `/api/movie/${id}` : null, fetcher);
  const { data: relatedMovies } = useSWR<Movie[]>(id ? `/api/movie/${id}/related` : null, fetcher);

  return (
    <div>
      <Header />
      
      <div className="p-6 space-y-6" style = {{backgroundImage: `url('/images/hour-glass.jpg')`}}>
      <h1 className="text-xl font-bold">{movie?.title}</h1>
      <div className="space-x-4">
        <span>{movie?.releaseYear}</span>
        <span>{movie?.genre}</span>
        <span>⭐ {movie?.rating}</span>
      </div>
      <Loading />
      <div className="mt-4">
        <h2 className="text-xl font-semibold text-white-400">Description</h2>
        <div className="text-gray-400">
          <p className="text-gray-700 mt-2">{movie?.description}</p>
        </div>
      </div>

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
