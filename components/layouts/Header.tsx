import Image from "next/image";
import Button from "@/components/common/Button";
import SettingsMenu from "@/components/common/SettingsMenu";
import { signOut } from "next-auth/react";


const Header: React.FC = () => {
  return (
    <header className="h-18 w-auto flex justify-between align-bottom bg-black/70 backdrop-blur-sm  px-4 md:px-16 lg:px-44">
      <div className="h-auto w-full justify-self-start hover:cursor-pointer transition-colors duration-300 ease-out">
          <Image 
          className="w-full h-auto hover:cursor-pointer" 
          src = "/icons/clapper-open.png" 
          width = {32} 
          height = {32} 
          alt= "Movie Pro logo" 
          />
          <h2 className="text-2xl md:text-xl font-semibold text-[#FA0C10]">Movie<span className="text-[#096BCD] font-metalmania">
          Pro
          </span>
          </h2>
      </div>
      <div className="flex h-15 justify-between w-full items-center space-x-2">
        <div>
          <SettingsMenu />
        </div>

        <div>
          <button onClick={() => signOut()}>Sign out</button>
        </div>     
        <div className="flex md:hidden">
          <Button title="Sign in" />
        </div>
        <div className="hidden md:flex">
          <Button title="Sign in" />
        </div>
      </div>
    </header>

  )
}

export default Header
