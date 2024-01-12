import React from "react";
import { Link } from "react-router-dom";

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-yellow-500"
          : "hidden"
      }
      onClick={toggle}
    >
      <Link className="p-8" to="/">
        Home
      </Link>
      <Link className="p-8" to="/menu">
        Menu
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
  );
};

export default Dropdown;
