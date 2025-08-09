import { MovieCardProps } from "@/interfaces";
import Image from "next/image";
import { useRouter } from 'next/router';

const MovieCard: React.FC<MovieCardProps> = ({ Movie }) => {
   const router = useRouter();
   console.log(router);

  return (
    <div className="h-[563px] cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-lg transition" 
      // onClick={() => router.push(/movies/${Movie.id})} 
    >
      <div>
        <Image className="h-[430px] w-full rounded-md hover:cursor-pointer" 
        src={`{https://moviesdatabase.p.rapidapi.com${Movie.poster_Path}}`} 
        width={400} 
        height={350} 
        alt={Movie.title || "/icons/film.png"} 
        onError={(e) => console.error("Image load error", e)}
        />

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