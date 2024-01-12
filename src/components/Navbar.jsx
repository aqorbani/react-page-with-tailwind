import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        Logo
      </Link>
      <div className="px-4 cursor-pointer lg:hidden" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      <div className="pr-8 lg:block hidden">
        <Link className="p-8" to="/">
          Home
        </Link>
        <Link className="p-8" to="/menu">
          Menu
        </Link>
        <Link className="p-8" to="/product">
          Product
        </Link>
        <Link className="p-8" to="/about">
          About
        </Link>
        <Link className="p-8" to="/contact">
          Contact
        </Link>
        <Link className="p-8" to="/login">
          Login
        </Link>
        <Link className="p-8" to="/register">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
