import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer/Footer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';
import SearchResult from './SearchResult';

function Layout() {
    const search = useSelector((state) => state.search.query);
    return (
        <div className='bg-white text-black'>
            <header >
                <Navbar />
            </header>

            {search ? (
                <SearchResult />) : (
                <div>
                    <main className='max-w-6xl px-5 py-5 mt-13 flex items-center justify-center min-h-screen m-auto'>
                        <Outlet />
                    </main>
                    <footer className=''>
                        <Footer />
                    </footer>
                </div>
            )}
        </div>
    )
}

export default Layout
