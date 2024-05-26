"use client"
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { CiSearch, CiEdit } from "react-icons/ci";

const Navbar = () => {
  const [searchBoxVisibility, setSearchBoxVisibility] = useState(false);

  return (
    <nav className="navbar fixed top-0 left-0 right-0 z-50 flex justify-between items-center bg-white shadow-md">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/dt3czltxx/image/upload/v1709590726/Tempblog3_ctqczs.png"
          alt="Chioma Ezenwafor Blog's Temporal logo"
          width={80}
          height={80}
        />
      </Link>
      <div
        className={`md:flex absolute py-4 px-[5vw] bg-white w-full left-0 top-full shadow-md mt-0 border-b border-gray-400 md:border-0 md:relative md:inset-0 md:p-0 md:w-auto ${
          searchBoxVisibility ? "block" : "hidden"
        }`}
      >
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-gray-100 p-4 pl-6 pr-[12%] rounded-full placeholder:text-gray-400 placeholder:font-bold md:pl-12"
        />
        <CiSearch className="absolute right-[10%] pointer-events-none left-5 top-1/2 -translate-y-1/2 text-xl" />
      </div>

      <div className="flex items-center gap-3 ml-auto">
        <button
          className="md:hidden bg-gray-400 w-12 h-12 rounded-full flex items-center justify-center"
          onClick={() => setSearchBoxVisibility((currentVal) => !currentVal)}
        >
          <CiSearch className="text-xl" />
        </button>
        <Link href="/editor" className="hidden btn md:flex gap-2">
        <CiEdit />
        <p>Write</p>
        </Link>
        <Link href="/signin" className="btn btn-error btn-outline py-2"> Sign In </Link> 
        <Link href="/signup" className="btn btn-outline py-4 hidden md:block"> Sign Up </Link>
      </div>
    </nav>
  );
};

export default Navbar;

