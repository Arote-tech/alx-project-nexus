import React from "react"
import Link from "next/link"
import Image from "next/image"


export default function CustomLinks () {
    return (
        <div>
          <nav className="flex-1 flex justify-between space-x-6 mb-4 md:mb-0">
            
            <Link href="/movies/Home" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            Home
            <Image className="h-[30px] w-full rounded-md hover:cursor-pointer" src = "/icons/home-icon-silhouette.png" width = {32} height = {32} alt= "home icon" />
            </Link>
            
            <Link href="/movies/ContactPage" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            Contact
            <Image className="h-[30px] w-full rounded-md hover:cursor-pointer" src = "/icons/phone-ringing.png" width = {32} height = {32} alt= "make a call" />
            </Link>
            
            <Link href="/movies/PrivacyPolicy" className= "text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            Privacy Policy
            <Image className="h-[30px] w-full rounded-md hover:cursor-pointer" src = "/icons/privacy-policy.png" width = {32} height = {32} alt= "terms of use" />
            </Link>
            
            <Link href="/movies/Profile" className="text-md text-[#63B16D] hover:text-[#E2D609] text-lg transition-colors duration-300">
            Profile
            <Image className="h-[30px] w-full rounded-md hover:cursor-pointer" src = "/icons/user.png" width = {32} height = {32} alt= "profile page" />
            </Link>
          </nav>
        </div>
    )

}