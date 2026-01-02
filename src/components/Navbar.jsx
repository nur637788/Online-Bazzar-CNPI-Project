import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { FaCartArrowDown } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { CiUser } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import Profile from "./ProfilePage/Profile";
import { setSearchQuery } from "../Redux/searchSlice";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const search = useSelector((state) => state.search.query);
  const dispatch = useDispatch();

  const closeMobileMenu = () => setMenuOpen(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-5 py-3 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="text-2xl font-bold italic">
          <span className="text-red-500 font-extrabold">Online-</span>
          <span className="text-blue-500 font-bold">Bazzar</span>
        </Link>

        {/* Search + Desktop Menu */}
        <div className="flex items-center gap-6">

          {/* Search */}
          <div className="hidden md:flex border rounded-full overflow-hidden">
            <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="px-3 py-1 outline-none"
            />
            <span className="bg-[#EA5326] text-white px-4 py-1 cursor-pointer">
              Search
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex gap-6 font-medium text-gray-700">
            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>About Us</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>Contact Us</NavLink>
          </nav>
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex gap-5 items-center">

          <NavLink to="/favorite" className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold"
              : "hover:text-pink-500"
          }>
            <FiHeart size={20} />
          </NavLink>

          <NavLink to="/cart" className={({ isActive }) =>
            isActive
              ? "text-pink-500 font-bold relative"
              : "hover:text-pink-500 relative"
          }>
            <FaCartArrowDown size={20} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
              {totalQuantity}
            </span>
          </NavLink>

          <button
            onClick={() => setProfileOpen(true)}
            className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }
          >
            <CiUser size={22} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-blue-50 shadow-md">
          <nav className="flex flex-col gap-4 p-4 font-medium text-gray-700">

            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>Home</NavLink>
            <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>About Us</NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) =>
              isActive
                ? "text-pink-500 font-bold"
                : "hover:text-pink-500"
            }>Contact Us</NavLink>

            {/* Mobile Search */}
            {/* <input
              type="search"
              placeholder="Search..."
              value={search}
              onChange={(e) => dispatch(setSearchQuery(e.target.value))}
              className="border rounded px-3 py-1"
            /> */}

            {/* Mobile Icons */}
            <div className="flex gap-5 pt-2">
              <NavLink to="/favorite" onClick={closeMobileMenu}>
                <FiHeart size={20} />
              </NavLink>

              <NavLink to="/cart" onClick={closeMobileMenu} className="relative">
                <FaCartArrowDown size={20} />
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] px-1 rounded-full">
                  {totalQuantity}
                </span>
              </NavLink>

              <button
                onClick={() => {
                  closeMobileMenu();
                  setProfileOpen(true);
                }}
              >
                <CiUser size={22} />
              </button>
            </div>
          </nav>
        </div>
      )}

      {/* Profile Popup */}
      <Profile isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </header>
  );
}

export default Navbar;
