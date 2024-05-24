import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 justify-between flex-col md:flex-row items-center">
        <span className="title-font font-medium text-white mb-4 md:mb-0 hover:text-gray-400 transition-all">
          <Link href="/pages" className="ml-3 text-xl">
            Tom Davies-Pope
          </Link>
        </span>

        <a
          href="#contact"
          className="inline-flex items-center text-white bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Contact Me
        </a>
      </div>
    </header>
  );
}
