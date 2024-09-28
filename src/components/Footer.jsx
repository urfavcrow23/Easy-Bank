import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="flex flex-row bg-[#2D314D] rounded p-8 text-[#9698A6] justify-between">
      {/* Logo and Social Media */}
      <div className="flex flex-col gap-20  justify-center">
        <NavLink to="/">
          <img src={assets.logoIconWhite} alt="" />
        </NavLink>
        {/* 
        
        className={({ isActive }) =>
              `block text-lg font-semibold w-full text-center px-4 py-2 rounded ${
                isActive ? "bg-black text-white" : "text-gray-600"
              }`
            }
        */}

        {/* 
        
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
        
        */}
        <div className="flex justify-between items-center space-x-4">
          {/* <!-- Facebook SVG --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-6 h-6 fill-current text-gray-500 hover:text-[#31D35C] transition-colors duration-200"
          >
            {" "}
            <path d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z" />
          </svg>
          {/* <!-- YouTube SVG --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-6 h-6 fill-current text-gray-500 hover:text-[#31D35C] transition-colors duration-200"
          >
            <path d="M23.498 6.186a2.996 2.996 0 00-2.113-2.12C19.512 3.5 12 3.5 12 3.5s-7.512 0-9.385.566a2.996 2.996 0 00-2.113 2.12A31.807 31.807 0 000 12a31.807 31.807 0 00.502 5.814 2.996 2.996 0 002.113 2.12c1.872.566 9.385.566 9.385.566s7.512 0 9.385-.566a2.996 2.996 0 002.113-2.12A31.807 31.807 0 0024 12a31.807 31.807 0 00-.502-5.814zM9.75 15.018V8.982L15.545 12l-5.795 3.018z" />
          </svg>

          {/* <!-- X (Formerly Twitter) SVG --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5 fill-current text-gray-500 hover:text-[#31D35C] transition-colors duration-200"
          >
            <path d="M23.643 4.937a9.658 9.658 0 01-2.828.775 4.959 4.959 0 002.165-2.725 9.72 9.72 0 01-3.127 1.195A4.875 4.875 0 0016.616 3c-2.707 0-4.905 2.275-4.905 5.084 0 .4.042.789.125 1.162-4.077-.21-7.693-2.193-10.112-5.22a5.147 5.147 0 00-.663 2.556c0 1.764.872 3.321 2.201 4.233a4.845 4.845 0 01-2.222-.636v.06c0 2.465 1.703 4.515 3.961 4.98-.418.12-.861.178-1.317.178-.322 0-.634-.032-.938-.09.634 2.022 2.468 3.496 4.64 3.536A9.789 9.789 0 010 20.804a13.76 13.76 0 007.548 2.25c9.058 0 14.01-7.745 14.01-14.465 0-.22-.005-.439-.014-.656A10.093 10.093 0 0024 4.59a9.726 9.726 0 01-2.357.647z" />
          </svg>

          {/* <!-- Instagram SVG --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 30 30"
            className="w-6 h-6 fill-current text-gray-500 hover:text-[#31D35C] transition-colors duration-200"
          >
            <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
          </svg>

          {/* <!-- Pinterest SVG --> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-5 fill-current text-gray-500 hover:text-[#31D35C] transition-colors duration-200"
          >
            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.058 3.163 9.367 7.595 10.93-.104-.927-.199-2.354.04-3.368.218-.927 1.397-5.902 1.397-5.902s-.356-.712-.356-1.762c0-1.651.957-2.884 2.148-2.884 1.013 0 1.502.76 1.502 1.668 0 1.016-.648 2.537-.982 3.948-.277 1.172.585 2.13 1.733 2.13 2.08 0 3.683-2.191 3.683-5.35 0-2.797-2.01-4.755-4.872-4.755-3.32 0-5.27 2.493-5.27 5.066 0 1.014.389 2.102.877 2.693a.351.351 0 01.081.334c-.09.366-.293 1.171-.333 1.336-.052.219-.172.265-.398.16-1.484-.689-2.41-2.852-2.41-4.595 0-3.74 2.716-7.171 7.832-7.171 4.103 0 7.285 2.934 7.285 6.856 0 4.073-2.572 7.352-6.136 7.352-1.197 0-2.325-.62-2.71-1.348l-.737 2.804c-.266 1.032-.993 2.324-1.484 3.112a11.973 11.973 0 003.027.385c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
          </svg>
        </div>
      </div>
      {/* Col1 */}

      <div className="flex flex-col justify-between">
        <NavLink
          to="/about"
          className={({ isActive }) => ` ${isActive ? "text-[#31D35C]" : null}`}
        >
          <h2 className="hover:text-[#31D35C]">About Us</h2>
        </NavLink>
        <h2>Contact</h2>
        <h2>Blog</h2>
      </div>
      <div className="flex flex-col justify-between">
        <h2>Careers</h2>
        <h2>Support</h2>
        <h2>Privacy Policy</h2>
      </div>
      <div className="flex flex-col justify-between items-end">
        <button className="text-sm text-white rounded-full bg-gradient-to-r from-[#31D35C] to-[#2BB7DA] p-2 w-40">
          Request invite
        </button>
        <h2>© Easybank. All Rights Reserved</h2>
      </div>
    </div>
  );
}

export default Footer;
