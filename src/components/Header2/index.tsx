import React from "react";
import Link from "next/link";

const Header2 = () => {
  return (
    <header className="bg-gray-800 p-4 border-t-orange-500 border-t">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">I am Your Header2 2</div>
        <div className="flex space-x-4">
          <Link className="text-white hover:text-gray-300" href="/">
            Home
          </Link>
          <Link className="text-white hover:text-gray-300" href="/products">
            Products
          </Link>
          <Link className="text-white hover:text-gray-300" href="/about-us">
            About Us
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header2;
