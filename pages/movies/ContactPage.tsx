import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"
import React from "react"


export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="bg-hour-glass">
        <div className="mx-auto justify-center w-200 min-h-screen px-6 my-6 text-gray-800">
        <section id="about-us" className="space-y-3">
          <h2 className="text-3xl font-bold">About Us</h2>
          <p>
            Welcome to MoviePro — your personal movie companion.
            We help users discover, rate, and organize movies they will love, using intelligent recommendations and sleek design.
          </p>
          <p>
            Our goal is to make movie discovery seamless. Whether you&aposre looking for something to watch tonight or building a curated watchlist, we are here to help.
          </p>
          <p>
            Built with 💙 by a passionate team of developers and film lovers.
          </p>
        </section>
        
        <div className="mb-3 p-4 items-center justify-center">
          <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <section className="mb-4 space-y-3 ">
          <h2 className="text-xl font-semibold">Reach Us</h2>
          <p>📞 Phone: <a href="tel:+2348117456197" className="text-blue-600 hover:underline">+234-81-1745-6197</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/2347033829976" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">+234-70-3382-9976</a></p>
        </section>
        </div>

        </div>
        <CustomLinks />
      </div>
      <Footer />
    </>
  );
}
