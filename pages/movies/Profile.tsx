// pages/profile.tsx
import useSWR from 'swr'
import { fetcher } from '@/utils/api'
import MovieList from '@/components/common/MovieList'
import MovieCarousel from '@/components/common/MovieCarousel'
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"




export default function ProfilePage() {
  const { data: downloads, isLoading: loadingDownloads } = useSWR('/api/user/downloads', fetcher);
  const { data: watchlist, isLoading: loadingWatchlist } = useSWR('/api/user/watchlist', fetcher);
  const { data: rated, isLoading: loadingRated } = useSWR('/api/user/rated', fetcher);

  return (
    <div>
      <Header />
      <div className="p-6 space-y-8" style = {{backgroundImage: `url('/images/hour-glass.jpg')`}}>
      <h1 className="text-3xl font-bold mb-4">Your Profile</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Downloaded Movies</h2>
        {loadingDownloads ? (
          <p>Loading downloads...</p>
        ) : (
          <MovieList movies={[]} />
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Your Watchlist</h2>
        {loadingWatchlist ? (
          <p>Loading watchlist...</p>
        ) : (
          <MovieCarousel movies={[]} />
        )}
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Rated Movies</h2>
        {loadingRated ? (
          <p>Loading rated movies...</p>
        ) : (
          <MovieCarousel movies={[]} />
        )}
      </section>
    </div>
    <CustomLinks />
    <Footer />
  </div>
  );
}
