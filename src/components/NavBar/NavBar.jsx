import React, { useEffect, useState } from "react";
import { GoHeartFill } from "react-icons/go";
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch } from "react-icons/fa";
import { RiMenuFill,RiMenu3Fill} from "react-icons/ri";
const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  
 
  
  const toggleMenu = () => {
    
    setShowMenu(!showMenu);
    
    
  }
  return (
    <header className="bg-white  fixed py-5 right-0 left-0 z-5">
      <nav className="flex items-center md:h-[30px] h-[20px] max-w-[1200px] mx-auto px-10  justify-between">
        <a href="" className="text-3xl font-bold">
          Gr<span className="text-orange-500 uppercase">o</span>cify
        </a>
        <ul className=" hidden md:flex items-center gap-x-15 ">
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex gap-x-5 items-center">
          <div className="hidden md:flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full">
              <FaSearch />
            </button>
          </div>
          <a href="" className="text-zinc-800 text-2xl">
            <GoHeartFill />
          </a>
          <a href="" className="text-zinc-800 text-2xl">
            <HiShoppingBag />
          </a>
          <a
            href="#"
            onClick={toggleMenu}
            className="text-zinc-800 text-2xl md:hidden"
          >
            {showMenu?<RiMenu3Fill />:<RiMenuFill />}
            
          </a>
        </div>
        <ul
          className={`md:hidden flex flex-col items-center gap-y-12 absolute top-15  transform -translate-x-1/2 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 -left-full transition-all duration-200
          ${
            showMenu ? "left-1/2" : ""
          }  `}
        >
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Process
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold tracking-wider text-zinc-800 hover:text-orange-500"
            >
              Contact Us
            </a>
          </li>
          <li className="md:hidden flex p-1 border-2 border-orange-500 rounded-full">
            <input
              type="text"
              name="text"
              id="text"
              placeholder="Search..."
              autoComplete="off"
              className="flex-1 px-3 focus:outline-none"
            />
            <button className="bg-gradient-to-b from-orange-400 to-orange-500 h-10 w-10 text-white flex justify-center items-center rounded-full">
              <FaSearch />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
