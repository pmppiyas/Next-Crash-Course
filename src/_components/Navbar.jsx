import Image from "next/image";
import Link from "next/link";
import React from "react";
import assets from "./../assets/assets";

function Navbar() {
  return (
    <div className="flex justify-between w-full py-4 bg-slate-400">
      <div className="overflow-hidden rounded-full hidden md:block">
        <Image
          className="scale-110"
          src={assets.logo}
          width={60}
          height={60}
          alt="logo"
        ></Image>
      </div>
      <nav className="flex  flex-1  justify-between items-center p-4">
        <Link className="text-xl font-medium " href="/">
          Home
        </Link>
        <Link className="text-xl font-medium " href="/about">
          About
        </Link>
        <Link className="text-xl font-medium " href="/projects">
          {" "}
          Projects
        </Link>
        <Link className="text-xl font-medium " href="/blogs">
          Blogs
        </Link>
        <Link className="text-xl font-medium " href="/contact">
          Contact
        </Link>
      </nav>
      <div className="md:flex items-center gap-6 hidden ">
        <button className="text-xl font-medium ">Resume</button>
        <button className="text-xl font-medium ">Hire me</button>
      </div>
    </div>
  );
}

export default Navbar;
