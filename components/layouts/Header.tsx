import Image from "next/image";
import Button from "@/components/common/Button";
import SettingsMenu from "@/components/common/SettingsMenu";
import { signOut } from "next-auth/react";


const Header: React.FC = () => {
  return (
    <header className="h-18 w-auto flex justify-between align-bottom bg-black backdrop-blur-sm p-2">
      <div className="h-15 w-full flex items-center gap-2  hover:cursor-pointer transition-colors duration-300 ease-out">
          <Image 
          className=" h-auto hover:cursor-pointer" 
          src = "/icons/clapper-open-256x256.png" 
          width = {32} 
          height = {32} 
          alt= "Movie Pro logo" 
          />
          <h2 className="text-4xl md:text-xl font-semibold text-[#FA0C10]">
            Movie
            <span className="text-[#096BCD] font-metalmania text-4xl md:text-xl">
            Pro
            </span>
          </h2>
      </div>
      <div className="flex h-15 justify-end w-full items-center space-x-2">
          <SettingsMenu />

        <div>
          <button onClick={() => signOut()}>Sign out 1</button>
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
