import React from "react";
import Link from "next/link";

// type Props = {
//   name: string | number;
// };

// type Props = {
//     age: string | number;
// }

interface Props {
  name: string | number;
}

interface Props {
  age: string | number;
}

const Header = ({ name, age }: Props) => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex justify-between items-center">
        <div className="text-white text-xl font-bold">MyWebsite</div>
        <div className="flex space-x-4">
          <Link className="text-white hover:text-gray-300" href="/">
            Home {name} {age}
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
