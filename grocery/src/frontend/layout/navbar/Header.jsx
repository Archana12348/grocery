import React, { useState } from "react";
import {
  FiUser,
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiMenu,
} from "react-icons/fi";
import { FaTags } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#017D03] text-white shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2 text-2xl font-bold text-[#FF9C00]">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3081/3081879.png"
            alt="Logo"
            className="w-8 h-8"
          />
          Premier Grocery
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 mx-6 max-w-2xl">
          <input
            type="text"
            placeholder="Search for groceries..."
            className="w-full px-4 py-2 rounded-l-full border-none focus:outline-none text-black"
          />
          <button className="bg-[#629D23] px-4 rounded-r-full hover:bg-[#026A02] transition">
            <FiSearch className="text-white text-xl" />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-sm font-medium">
          <div className="flex items-center gap-2 cursor-pointer hover:text-[#FF9C00]">
            <FiUser className="text-lg" />
            <span>Account</span>
          </div>

          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#FF9C00]">
            <FiHeart className="text-lg" />
            <span>Wishlist</span>
          </div>

          <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-[#FF9C00]">
            <FiShoppingCart className="text-lg" />
            <span>Cart ($0.00)</span>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden focus:outline-none"
          >
            <FiMenu className="text-2xl text-[#FF9C00]" />
          </button>
        </div>
      </div>

      {/* Bottom Navigation */}
      <nav
        className={`${
          menuOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center justify-center bg-[#629D23] md:bg-[#017D03] text-white md:space-x-8 space-y-2 md:space-y-0 px-4 py-3 md:py-2 transition-all duration-300`}
      >
        {/* <button className="bg-[#FF9C00] text-white font-semibold px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#e58b00]">
          <FiMenu className="text-lg" />
          Shop by Categories
        </button> */}

        <a href="#" className="hover:text-[#FF9C00]">
          Home
        </a>
        <a href="#" className="hover:text-[#FF9C00]">
          Shop
        </a>
        <a href="#" className="hover:text-[#FF9C00]">
          Collections
        </a>
        <a href="#" className="hover:text-[#FF9C00]">
          Beverages
        </a>
        <a href="#" className="hover:text-[#FF9C00]">
          Contact
        </a>
        <a href="#" className="hover:text-[#FF9C00]">
          Blog
        </a>

        <div className="flex items-center gap-2 mt-2 md:mt-0 text-[#FF9C00] font-semibold cursor-pointer hover:text-white">
          <FaTags />
          <span>Today's Deal</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
