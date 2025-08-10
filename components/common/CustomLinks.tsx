import React from "react"
import Link from "next/link"
import Image from "next/image"


export default function CustomLinks () {
    return (
        <div className="flex flex-nowrap items-center justify-evenly shadow-md">
          <nav className="flex-1 flex w-10 justify-evenly space-x-6 mb-4 md:mb-0">
            
            <Link href="/movies/Home" className="flex text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/home-256x256.png"
            width = {32} 
            height = {32} 
            alt= "home icon"
            />
            Home
            </Link>
            
            <Link href="/movies/ContactPage" className="flex text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/phone-256x256.png" 
            width = {32} 
            height = {32} 
            alt= "make a call" 
            />
            Contact
            </Link>
            
            <Link href="/movies/PrivacyPolicy" className= "flex text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/insurance-256x256.png"
            width = {32}
            height = {32} 
            alt= "terms of use" 
            />
            Privacy Policy
            </Link>
            
            <Link href="/movies/Profile" className="flex text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="flex width-100% h-auto hover:cursor-pointer" 
            src = "/icons/user-256x256.png" 
            width = {32} 
            height = {32} 
            alt= "profile page" 
            />
            Profile
            </Link>
          </nav>
        </div>
    )

}