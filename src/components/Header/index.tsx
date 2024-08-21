import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyWebsite</div>
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

export default Header;
