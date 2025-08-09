import React from "react"
import Link from "next/link"
import Image from "next/image"


export default function CustomLinks () {
    return (
        <div>
          <nav className="flex-1 flex justify-center space-x-6 mb-4 md:mb-0">
            
            <Link href="/movies/Home" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/home.png"
            width = {32} 
            height = {32} 
            alt= "home icon"
            />
            Home
            </Link>
            
            <Link href="/movies/ContactPage" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/phone-ringing.png" 
            width = {32} 
            height = {32} 
            alt= "make a call" 
            />
            Contact
            </Link>
            
            <Link href="/movies/PrivacyPolicy" className= "text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/insurance.png"
            width = {32}
            height = {32} 
            alt= "terms of use" 
            />
            Privacy Policy
            </Link>
            
            <Link href="/movies/Profile" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            <Image 
            className="width-100% h-auto hover:cursor-pointer" 
            src = "/icons/user.png" 
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