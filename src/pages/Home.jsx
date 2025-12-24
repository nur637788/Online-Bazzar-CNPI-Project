import React from 'react'
import Products from '../components/HomePage/Products'
import CoustomerCard from '../components/HomePage/CoustomerCard'
import { Link } from 'react-router-dom'
import Category from '../components/HomePage/Category'

function Home() {
  return (
    <header className="overflow-x-hidden">
      {/* ===== Top Text Section ===== */}
      <div className="text-center py-5">
        <h1 className="text-2xl md:text-4xl lg:text-6xl py-2">
          <b>The Best High-Quality</b> <br />
          Products from <b> Onlile-Bazzar</b>
        </h1>

        <p className="py-4">
          200+ Collections for your outfit inspirations in this summer
        </p>

        <Link
          to="/allproducts"
          className="bg-black px-10 py-2 rounded-full text-white hover:bg-gray-900"
        >
          View All Products →
        </Link>
      </div>

      {/* ===== Full Width Hero Background ===== */}
      <div className="w-screen h-[70vh] bg-[url('/images/hero-image1.png')] bg-cover bg-center bg-no-repeat">
        <div className="h-full flex flex-col justify-center items-center text-center space-y-1 m-auto bg-black/20">
          <Link to="/allproducts">
            <img
              className="w-50"
              src="/images/hero-image2.png"
              alt="hero-image2" />
          </Link>

          <h3 className="text-black font-semibold">
            Electronics Gadgets
          </h3>

          <Link
            to="/allproducts"
            className="border border-blue-500 text-[#FC5A31] mt-5 px-8 py-2 rounded-full hover:scale-105 duration-300 bg-white/80 text-2xl hover:font-bold">
            Shop Now →
          </Link>
        </div>
      </div>

      {/* ===== Other Sections ===== */}
      <Category />
      <Products />
      <CoustomerCard />
    </header>
  )
}

export default Home
