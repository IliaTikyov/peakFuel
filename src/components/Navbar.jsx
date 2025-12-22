import { X, Menu, Search, ArrowLeft } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  /*Mobile Functionality Only*/
  const [isOpen, setIsOpen] = useState(false); // mobile menu
  const [isSearchOpen, setIsSearchOpen] = useState(false); // mobile search

  const location = useLocation();

  /*Mobile Functionality Only*/
  const handleMenuToggle = () => setIsOpen((prev) => !prev);
  const handleSearchToggle = () => setIsSearchOpen((prev) => !prev);

  useEffect(() => {
    setIsOpen(false);
    setIsSearchOpen(false);
  }, [location.pathname]);

  return (
    <main>
      {/* MAIN NAVBAR */}
      <nav
        className="bg-slate-100 py-4 px-4 
      sm:px-8 shadow-md 
      flex items-center justify-between 
      relative w-full"
      >
        {/* Logo */}
        <Link
          to="/"
          className="font-extrabold tracking-wider text-emerald-300 z-30"
        >
          peakFuel
        </Link>

        {/* Desktop search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="
            hidden sm:block
            flex-1 max-w-xs md:max-w-md
            mx-4
            border border-slate-300 rounded-full 
            px-3 py-1
            focus:outline-emerald-300
          "
        />

        {/* Desktop menu */}
        <div className="hidden sm:flex gap-6 ml-4">
          <Link
            to="/"
            className="hover:text-emerald-300 hover:underline duration-200"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="hover:text-emerald-300 hover:underline duration-200"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="hover:text-emerald-300 hover:underline duration-200"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-emerald-300 hover:underline duration-200"
          >
            Contact
          </Link>
        </div>

        {/* Mobile: Placing icons on the ride side */}
        <div className="sm:hidden flex items-center gap-3 z-30">
          {/* Search icon (opens search mode) */}
          <button
            className="p-1"
            onClick={handleSearchToggle}
            aria-label="Open search"
          >
            <Search size={24} />
          </button>

          {/* Hamburger and Close Icon */}
          <button
            className="p-1"
            onClick={handleMenuToggle}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {isOpen && (
        <div
          className="
            fixed inset-0 
            bg-white/40 backdrop-blur-md
            flex flex-col items-center justify-center
            gap-8 text-2xl 
            z-20
          "
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to="/shop" onClick={() => setIsOpen(false)}>
            Shop
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}

      {/* MOBILE SEARCH OVERLAY */}
      {isSearchOpen && (
        <div
          className="
             fixed inset-0
            bg-slate-100
            z-30
            flex flex-col
          "
        >
          {/* Top search bar */}
          <div className="flex items-center gap-2 px-4 py-3 shadow-md">
            <button
              onClick={handleSearchToggle}
              aria-label="Close search"
              className="p-1"
            >
              <ArrowLeft size={24} />
            </button>
            <input
              type="text"
              autoFocus
              placeholder="Search..."
              className="
                flex-1
                border border-slate-300 rounded-full 
                px-3 py-2
                focus:outline-emerald-300
              "
            />
          </div>
        </div>
      )}
    </main>
  );
};

export default Navbar;
