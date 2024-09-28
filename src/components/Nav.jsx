import { useState } from "react";
import { assets } from "../assets/assets"; // Corrected import
import "../index.css";
import { NavLink } from "react-router-dom";

function Nav() {
  const [show, setShow] = useState(false);

  return (
    <div className="relative flex items-center justify-between py-5 font-medium">
      <div className="flex items-center w-full justify-between">
        <img src={assets.logoIcon} alt="Logo" />
        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink
            to="/"
            key="home"
            className="flex flex-col items-center gap-1 gap"
          >
            <h2>Home</h2>
            <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
          </NavLink>
          <NavLink
            to="/about"
            key="about"
            className="flex flex-col items-center gap-1 gap"
          >
            <h2>About</h2>
            <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
          </NavLink>
          <NavLink
            to="/contact"
            key="contact"
            className="flex flex-col items-center gap-1 gap"
          >
            <h2>Contact</h2>
            <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
          </NavLink>
          <NavLink
            to="/blog"
            key="blog"
            className="flex flex-col items-center gap-1 gap"
          >
            <h2>Blog</h2>
            <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
          </NavLink>
          <NavLink
            to="/careers"
            key="careers"
            className="flex flex-col items-center gap-1 gap"
          >
            <h2>Careers</h2>
            <div className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden"></div>
          </NavLink>
        </ul>
        <NavLink to="/request-invite">
          <button className="hidden sm:inline-block text-sm text-white rounded-full bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] p-2 w-40">
            Request Invite
          </button>
        </NavLink>

        <img
          src={assets.iconHamburger}
          alt="Menu Icon"
          className="w-5 sm:hidden cursor-pointer"
          onClick={() => setShow(true)}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#fff6fb] text-gray-600 overflow-hidden transition-transform duration-300 transform ${
          show ? "translate-x-0" : "translate-x-full"
        } z-50`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => setShow(false)}
          >
            <img
              className="h-4 rotate-180"
              src={assets.iconClose}
              alt="Close Menu"
            />
            <p>Close</p>
          </div>
        </div>

        <ul className="flex flex-col items-center gap-8 py-10 w-full">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block text-lg font-semibold w-full text-center px-4 py-2 rounded ${
                isActive ? "bg-black text-white" : "text-gray-600"
              }`
            }
            onClick={() => setShow(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/collection"
            className={({ isActive }) =>
              `block text-lg font-semibold w-full text-center px-4 py-2 rounded ${
                isActive ? "bg-black text-white" : "text-gray-600"
              }`
            }
            onClick={() => setShow(false)}
          >
            Collection
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `block text-lg font-semibold w-full text-center px-4 py-2 rounded ${
                isActive ? "bg-black text-white" : "text-gray-600"
              }`
            }
            onClick={() => setShow(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `block text-lg font-semibold w-full text-center px-4 py-2 rounded ${
                isActive ? "bg-black text-white" : "text-gray-600"
              }`
            }
            onClick={() => setShow(false)}
          >
            Contact
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
