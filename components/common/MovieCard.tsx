import { MovieCardProps } from "@/interfaces";
import Image from "next/image";
import { useRouter } from 'next/router';

const MovieCard: React.FC<MovieCardProps> = ({ Movie }) => {
   const router = useRouter();
  return (
    <div className="h-[563px] onClick={() => router.push(`/movies/${movie.id}`)} cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition">
      <div>
        <Image className="h-[430px] w-full rounded-md hover:cursor-pointer" src={Movie.poster_Path} width={100} height={100} alt={Movie.title || "/icons/film.png"} />

      </div>
      <div className="flex justify-between py-4">
        <p className="text-xl font-bold">{Movie.title}</p>
        <p className="text-xl text-[#E2D609]">{Movie.releaseYear}</p>
        <p className="text-xl font-bold">{Movie.rating}</p>
        <p className="text-xl font-bold">{Movie.genre}</p>
      </div>
      <div className = "grid grid-cols-1 gap-4 justify-center items-center p-4">
         <p className="text-lg font-bold text-[#ffffff]">Movie Description:</p>
         <p className="text-wrap text-xl background-[#BCD5EF] text-[#000000]">{Movie.description}</p>
      </div>
    </div>
  )
}

export default MovieCard