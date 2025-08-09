import { useState } from 'react'
import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import { signIn } from 'next-auth/react'
import Image from "next/image"
import Link from "next/link"

export default function SignInPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing in with:', { username, password });
  };

  return (
    <div>
      <Header />
      <div className="max-w-md min-h-screenmx-auto p-6 space-y-6 bg-earth-drought bg-cover bg-no-repeat">
      <h1 className="text-lg font-bold text-center ">Sign In With</h1>
      <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('google')}>
        </button>
          <Image
          className="width-100% h-auto hover:cursor-pointer" 
          src="/icons/google.png" 
          width={32} 
          height={32} 
          alt="google"
          />
      </div>
      <div>
        <Image 
        className="width-100% h-auto hover:cursor-pointer" 
        src="/icons/OR-icon.png" 
        width={277} 
        height={26} 
        alt="line divider"
        />
      </div>
      <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('facebook')}>
        </button>
          <Image
          className="width-100% h-auto hover:cursor-pointer" 
          src="/icons/facebook.png" 
          width={32} 
          height={32} 
          alt="facebook"
          />
      </div>
      <div>
        <Image 
        className="width-100% h-auto hover:cursor-pointer" 
        src="/icons/OR-icon.png" 
        width={277} 
        height={26} 
        alt="line divider"
        />
      </div>

      
      <form onSubmit={handleSubmit} className="space-y-4 bg-[#fdfbfb] border-2 border-[#2387EA] hover:bg-[#c9c9c9] transition-colors duration 300 ease-out">
        <div>
          <label className="block mb-1 font-medium text-[#ABABAB]">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border rounded px-3 py-2 text-[#000000]"
            required
          />
        </div>
        <div>
          <label className="block mb-1 font-medium text-[#ABABAB]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded px-3 py-2 text-[#000000]"
            required
          />
        </div>
        <Link href="/movies/Home" type="submit" className="w-full text-[#1879DB]">Sign In</Link>
        <Link href="/movies/sign up" type="submit" className="w-full text-[#1879DB]">forgot password?</Link>
        <div className="mt-8 text-center text-sm text-gray-400">
          <Image 
          className="width-100% h-auto hover:cursor-pointer"
          src = "/icons/github.png" 
          width = {32} 
          height = {32} 
          alt= "github" 
          />
          <Image 
          className="width-100% h-auto hover:cursor-pointer" 
          src = "/icons/facebook.png" 
          width = {32} 
          height = {32} 
          alt= "facebook" 
          />
          <Image 
          className="width-100% h-auto hover:cursor-pointer" 
          src = "/icons/linkedin.png" 
          width = {32} 
          height = {32} 
          alt= "linkedin" 
          />
          <Image 
          className="width-100% h-auto hover:cursor-pointer"  
          src = "/icons/telegram.png" 
          width = {32} 
          height = {32} 
          alt= "telegram" 
          /> 
          
        </div>
      </form>
      <h3 className="m-4 text-center align-center text-sm text-black">Don&apos;t have an <span className=" text-[#096BCD]">account</span> yet?</h3>
      <Link href="/movies/Sign-Up">
      <h3 className="text-center align-center text-sm text-[#FA0C10]">Sign Up</h3>
      </Link>
    </div>
    <Footer />

  </div>
  );
}
