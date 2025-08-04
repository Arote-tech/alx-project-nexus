import Link from 'next/link';



export default function OnboardingPage() {
  return (
    <div className="p-6">
      <div>
        <h1 className="text-lg font-bold text-[#F0F1F5]">Discover the next blockbuster for<br><span className="text-2xl font-merienda">you</span></br></h1>
        <h4 className="text-sm font-merienda text-[#F0F1F5]">
     Click <span className="text-sm font-merienda text-[#E9F909]">on the button below and 
    make a choice among over a </span><span className="text-sm font-merienda text-[#F90909]">hundred 
   movies to watch.</span>      
        </h4>
         <Link href="/movies">
          <button className="mt-4 px-4 py-2 bg-[#ffffff] text-[#4900F2] rounded-full">
          Browse Movies
          </button>
        </Link>
      </div>

       <div>
        <h2 className="text-lg font-bold text-[#F0F1F5]">Join MoviePro Now!</h2>
        <h4 className="text-sm font-merienda text-[#5BFF5D]">
          Sign Up today to get access to the latest movies 
and personalized movie recommendations
        </h4>

         <Link href="/movies">
          <button className="mt-4 px-4 py-2 bg-[#ffffff] text-[#4900F2] rounded-full">
          Sign Up Now!
          </button>
        </Link>
       </div>

    </div>
  )
}
