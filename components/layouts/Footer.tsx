import Link from "next/link";
import Image from "next/image";



const Footer: React.FC = () => {
  return (
    <footer className="flex flex-row justify-evenly w-full h-30 bg-[#171D22] text-white py-10 px-6 md:px-10 lg:px-20">
      <div className="flex flex-row md:flex-row justify-between items-center w-full">
         <p>&copy; 2025 MoviePro. All rights reserved.</p>
      </div>

      <div className="flex flex-row justify-center place-items-baseline">
        <Link href="/">
        <Image 
        className="h-[30px] w-full rounded-md hover:cursor-pointer" 
        src = "/icons/github.png" 
        width = {32} 
        height = {32} 
        alt= "github" />
        </Link>
        <Image 
        className="h-[30px] w-full rounded-md hover:cursor-pointer" 
        src = "/icons/facebook.png" 
        width = {32} 
        height = {32} 
        alt= "facebook" 
        />
        <Image 
        className="h-[30px] w-full rounded-md hover:cursor-pointer" 
        src = "/icons/linkedin.png" 
        width = {32} 
        height = {32} 
        alt= "linkedin" 
        />
        <Image 
        className="h-[30px] w-full rounded-md hover:cursor-pointer" 
        src = "/icons/telegram.png" 
        width = {32} 
        height = {32} 
        alt= "telegram" 
        /> 
      </div>
    </footer>

  );
};

export default Footer;