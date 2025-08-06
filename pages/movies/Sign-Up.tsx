// pages/signup.tsx
import { useState } from 'react';
// import Link from "next/link";
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
    // Handle sign up logic
    console.log('Signing up with:', { username, email, password });
  };

  const handleGoogleSignUp = () => {
    // Redirect to Google sign up
    console.log('Google sign up');
  };

  const handleFacebookSignUp = () => {
    // Redirect to Facebook sign up
    console.log('Facebook sign up');
  };

  return (
    <div>
      <Header />
      <div className="max-w-md mx-auto p-6 space-y-6 min-h-screen bg-cover bg-center bg-no-repeat" style = {{backgroundImage: `url('/images/natural-drought.jpg')`}}>
      
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
          <label className="block mb-1 font-medium text-[#ABABAB]">Email</label>
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
        <a href="#home"><h3 className="px-3 py-2 text-[#FA0C10]">Sign Up</h3></a>
      
      </form>
      <div>
        <Image className ="font-bold text-[#C1BCBC]" src="/icons/OR-icon.png" width={277} height={26} alt="line divider"/>
      </div>
      <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('google')}>
          <h4 className="text-sm text-[#2387EA]">continue with</h4></button>
          <Image  src="/icons/google.png" width={32} height={32} alt="google"/>
      </div>
      <div>
        <Image className ="font-bold text-[#C1BCBC]" src="/icons/OR-icon.png" width={277} height={26} alt="line divider"/>
      </div>
       <div className="space-x-2 p-4 justify-center border-2 items-center align-center bg-[#D9D9D9] hover:bg-[#ffffff] transition-colors duration 300 ease-out">
        <button onClick={() => signIn('facebook')}>
          <h4 className="text-sm text-[#2387EA]">continue with</h4></button>
        <Image  src="/icons/facebook.png" width={32} height={32} alt="facebook"/>
      </div>
    </div>
    <Footer />

  </div>
  );
}
