import { Facebook, Instagram, Phone, Twitter } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black/90 text-white">
      {/* Constrain width and add vertical padding */}
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        {/* Newsletter */}
        <div className="text-center space-y-3">
          <p className="font-bold tracking-wide uppercase">
            Be the first one to get our special offers
          </p>
          <form
            className="flex items-center justify-center gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="border border-slate-400 bg-transparent px-4 py-2 rounded-lg w-full sm:w-72 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Enter your email..."
            />
            <button
              type="submit"
              className="px-6 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 transition duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Middle Section*/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Social Media*/}
          <div className="text-center space-y-4">
            <h2 className="text-lg font-semibold">Follow Us</h2>
            <div className="flex justify-center gap-4">
              <Link to="#" aria-label="Facebook">
                <Facebook />
              </Link>
              <Link to="#" aria-label="Instagram">
                <Instagram />
              </Link>
              <Link to="#" aria-label="Phone">
                <Twitter />
              </Link>
            </div>
          </div>

          {/* Info links */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-lg font-semibold">Information About Us</h2>
            <div className="flex flex-col gap-1">
              <Link to="/contact">Contact</Link>
              <Link to="/about">About Us</Link>
              <Link to="/blogs">Blogs</Link>
              <Link to="/reviews">Reviews</Link>
              <Link to="/complaints">Complaints</Link>
              <Link to="/careers">Join Our Team</Link>
              <Link to="/faq">FAQ</Link>
            </div>
          </div>
        </div>

        {/* Contact info */}
        <div className="space-y-1 text-center md:text-left">
          <h2 className="text-lg font-semibold flex justify-center items-center gap">
            <Phone w={16} height={16} /> Contact Info
          </h2>
          <p>Address: Random Address</p>
          <p>Postcode: 2000</p>
          <p>Phone: 0777888</p>
          <p>Email: peakFuel@gmail.com</p>
        </div>

        {/* Bottom bar */}
        <hr className="border-slate-700" />
        <div className=" text-center text-sm text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} peakFuel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
