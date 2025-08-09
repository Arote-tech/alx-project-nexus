import { useState } from 'react';
import { signIn } from 'next-auth/react';
import Image from "next/image";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

export default function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Signing up with:', { username, email, password });
  };

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto p-4 space-y-4 min-h-screen bg-natural-drought bg-cover bg-no-repeat">
      
      <h1 className="text-md font-bold text-center text-[#E82A2A]">Sign Up For Instant Access</h1>

      <form onSubmit={handleSubmit} className="space-y-4 bg-[#fdfbfb] border-2 border-[#2387EA] hover:bg-[#c9c9c9] transition-colors duration 300 ease-out">
        <div className="block mb-1 font-medium bg-[#FAE6E6]">
          <label className="block mb-1 font-medium text-[#ABABAB]">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-12 border px-3 py-2 text-[#000000]"
            required
          />
        </div>
        <div className="block mb-1 font-medium bg-[#FAE6E6]">
          <label className="block mb-1 font-medium text-[#9b9a9a]">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-12 border px-3 py-2 text-[#000000]"
            required
          />
        </div>
        <div className="block mb-1 font-medium bg-[#FAE6E6]">
          <label className="block mb-1 font-medium text-[#ABABAB]">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-12 border px-3 py-2 text-[#000000]"
            required
          />
        </div>
        <a href="#movies/Home"><h3 className="px-3 py-2 text-[#FA0C10]">Sign Up</h3></a>
      
      </form>
      <div>
        <Image 
        className="width-100% h-auto hover:cursor-pointer" 
        src="/images/OR-icon.png" 
        width={277} 
        height={26} 
        alt="line divider"
        />
      </div>
      <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('google')}>
          <h4 className="text-sm text-[#2387EA]">continue with</h4></button>
          <Image
          className="width-100% h-auto hover:cursor-pointer" 
          src="/icons/google-256x256.png" 
          width={32} 
          height={32} 
          alt="google"
          />
      </div>
      <div>
        <Image 
        className="width-100% h-auto hover:cursor-pointer" 
        src="/images/OR-icon.png" 
        width={277} 
        height={26} 
        alt="line divider"
        />
      </div>
       <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('facebook')}>
          <h4 className="text-sm text-[#2387EA]">continue with</h4></button>
        <Image
        className="width-100% h-auto hover:cursor-pointer" 
        src="/icons/facebook-256x256.png" 
        width={32} 
        height={32} 
        alt="facebook"
        />
      </div>
    </div>
    <Footer />

  </div>
  );
}
