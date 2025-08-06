import Image from "next/image";
import Button from "@/components/common/Button";
import SettingsMenu from "@/components/common/SettingsMenu";
import { signOut } from "next-auth/react";


const Header: React.FC = () => {
  return (
    <header className="h-28 flex items-center bg-white/10 backdrop-blur-sm  px-4 md:px-16 lg:px-44 text-white">
      <div className="flex items-center justify-between w-full">
        <div>
          <Image className="h-[430px] w-full rounded-md hover:cursor-pointer" src = "/icons/clapper-open.png" width = {32} height = {32} alt= "app logo" />
        </div>
        <h2 className="text-xl md:text-4xl font-semibold text-[#FA0C10]">Movie<span className="text-[#096BCD] font-metalmania">
          Pro
          </span>
        </h2>
        
          <SettingsMenu />
        <div><button onClick={() => signOut()}>Sign out</button></div>     
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
