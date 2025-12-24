
import React, { useState } from 'react'
import { AiFillProduct } from 'react-icons/ai';
import { FaFacebook, FaInstagram, FaQuestionCircle, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FcAbout } from 'react-icons/fc';
import { IoMdContacts } from 'react-icons/io';
import { IoCartSharp } from 'react-icons/io5';
import { LuCookie } from 'react-icons/lu';
import { MdAccountBox, MdFavorite, MdOutlinePrivacyTip } from 'react-icons/md';
import { RiTeamFill } from 'react-icons/ri';
import { SiGooglemarketingplatform } from 'react-icons/si';
import { TbAirConditioning } from 'react-icons/tb';
import { Link } from 'react-router-dom'

function Footer() {
    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

        setEmail("")
    }

    return (
        <div className='bg-gray-700 text-gray-100'>
            <footer className="footer max-w-6xl  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 p-5  m-auto">
                <aside>
                    {/* Logo */}
                    <Link to='/'>
                        <h1 className="text-2xl font-semibold italic hover:animate-pulse">
                            <span className="text-red-500 font-extrabold">Online-</span>
                            <span className="text-blue-500 font-bold">Bazzar</span>
                        </h1>
                    </Link>
                    <p className='text-[10px] font-semibold'>Online-Bazzar Industries Ltd.</p>
                    <form onSubmit={handleLogin} className='flex flex-col  gap-2'>
                        <input type="email" placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required className='border border-red-200 py-1 px-2 rounded' />
                        <button type='submit' className='bg-red-500 px-4 py-1 w-fit rounded hover:bg-red-600 cursor-pointer '>Subcribe</button>
                    </form>

                </aside>
                {/* Follow Now Area */}
                <nav>
                    <h6 className=" text-gray-300 font-bold text-xl">Follow Now</h6>
                    <a href='https://www.facebook.com/' target='_blank' className="link link-hover flex gap-2 items-center"><FaFacebook /> Facbook</a>
                    <a href='https://www.instagram.com/' target='_blank' className="link link-hover flex gap-2 items-center"><FaInstagram /> Instagram</a>
                    <a href='https://www.x.com/' target='_blank' className="link link-hover flex gap-2 items-center"><FaTwitter /> Twitter</a>
                    <a href='https://www.youtube.com/' target='_blank' className="link link-hover flex gap-2 items-center"><FaYoutube /> YouTube</a>
                </nav>
                {/* Services Area */}
                <nav>
                    <h6 className=" text-gray-300 font-bold text-xl">Services</h6>
                    <Link to='/allproducts' className="link link-hover flex gap-2 items-center"><AiFillProduct /> Products</Link>
                    <Link to={'/editprofile'} className="link link-hover flex gap-2 items-center"><MdAccountBox />Account</Link>
                    <a className="link link-hover flex gap-2 items-center"><SiGooglemarketingplatform /> Marketing</a>
                    <Link to='/faqs' className="link link-hover flex gap-2 items-center"><FaQuestionCircle /> FAQs</Link>
                </nav>
                {/* Website Area */}
                <nav>
                    <h6 className="text-gray-300 font-bold text-xl">Website</h6>
                    <Link to='/about' className="link link-hover flex gap-2 items-center"><FcAbout /> About us</Link>
                    <Link to='/contact' className="link link-hover flex gap-2 items-center"><IoMdContacts />Contact</Link>
                    <Link to='/favorite' className="link link-hover flex gap-2 items-center"><MdFavorite /> Favorite</Link>
                    <Link to='/cart' className="link link-hover flex gap-2 items-center"><IoCartSharp />  Cart</Link>
                </nav>
                {/* Legal Links Area */}
                <nav>
                    <h6 className="text-gray-300 font-bold text-xl">Legal Links</h6>
                    <Link to='/temsAndUse' className="link link-hover flex gap-2 items-center"><TbAirConditioning /> Teams of use</Link>
                    <Link to='/privacypolicy' className="link link-hover flex gap-2 items-center"><MdOutlinePrivacyTip /> Privacy policy</Link>
                    <Link to='/cookiepolicy' className="link link-hover flex gap-2 items-center"><LuCookie /> Cookie policy</Link>
                    <Link to='/team' className="link link-hover flex gap-2 items-center"><RiTeamFill /> Our Team</Link>
                </nav>
                {/* Copy Rights area  */}
            </footer>
            <hr className='text-gray-500' />
            <footer className="text-center bg-gray-700 text-sm text-gray-400 py-2">
                © {new Date().getFullYear()} <Link to='/' className='font-medium text-gray-300'>online-bazzar</Link>. All Rights Reserved.
            </footer>
        </div>
    )
}

export default Footer
