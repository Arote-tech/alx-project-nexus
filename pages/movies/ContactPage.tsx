import Header from "@/components/layouts/Header"
import Footer from "@/components/layouts/Footer"
import CustomLinks from "@/components/common/CustomLinks"
import React from "react"


export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 bg-hour-glass bg-cover bg-no-repeat">
        <section id="about-us" className="space-y-3">
          <h2 className="text-xl font-semibold">About Us</h2>
          <p>
            Welcome to MoviePro — your personal movie companion.
            We help users discover, rate, and organize movies they'll love, using intelligent recommendations and sleek design.
          </p>
          <p>
            Our goal is to make movie discovery seamless and social. Whether you're looking for something to watch tonight or building a curated watchlist, we're here to help.
          </p>
          <p>
            Built with 💙 by a passionate team of developers and film lovers.
          </p>
        </section>
        
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <section className="mb-10 space-y-3">
          <h2 className="text-xl font-semibold">Reach Us</h2>
          <p>📞 Phone: <a href="tel:+2348117456197" className="text-blue-600 hover:underline">+234-81-1745-6197</a></p>
          <p>💬 WhatsApp: <a href="https://wa.me/2347033829976" className="text-green-600 hover:underline" target="_blank" rel="noopener noreferrer">+234-70-3382-9976</a></p>
        </section>

      </div>
      <CustomLinks />
      <Footer />
    </>
  );
}
