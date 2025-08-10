import Link from 'next/link';
import { useSession } from "next-auth/react";
import { useRouter } from "next/router"
import { useEffect } from "react"
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';



export default function OnboardingPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/movies/Home");
    }
  }, [router, status]);
  return (
    <div >
      <Header />
      <div className ="bg-twilight">
        <div className="mx-auto align-center space-y-4 min-h-screen p-6 bg-opacity-80 rounded-lg shadow-lg">
        <h1>Welcome back, {session?.user?.name || "user"}!</h1>
        <div className="mx-auto space-y-2 max-w-2xl p-6 bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-[#F0F1F5]">
          Discover the next blockbuster for you!
        </h1>
        <div className="mx-auto max-w-2xl p-6 m-2 bg-opacity-80 rounded-lg shadow-lg">
          <h4 className="text-lg font-merienda text-[#F0F1F5]">
     Click <span className="text-md font-merienda text-[#E9F909]">on the button below and 
    make a choice among over a </span><span className="text-md font-merienda text-[#F90909]">hundred 
   movies to watch.</span>      
        </h4>
         <Link href="/movies/Home">
          <button className="mt-4 px-4 py-2 bg-[#ffffff] text-[#4900F2] rounded-full hover:bg-[#9ef7f4] hover:text-[#080a11] transition-colors duration-300">
          Browse Movies
          </button>
        </Link>
        </div>
       </div>
        

       <div className="mx-auto space-y-4 max-w-2xl p-6 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-[#F0F1F5]">Join MoviePro Now!</h2>
        <h4 className="text-md font-merienda text-[#5BFF5D]">
          Sign Up today to get access to the latest movies 
and personalized movie recommendations
        </h4>

         <Link href="/movies/Sign-Up">
          <button className="mt-4 px-4 py-2 bg-[#ffffff] text-[#4900F2] rounded-full hover:bg-[#9ef7f4] hover:text-[#282c44] transition-colors duration-300">
          Sign Up Now!
          </button>
        </Link>

       </div>

      </div>
    </div>
      
      <Footer />

    </div>
  )
}
