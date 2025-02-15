import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contest", href: "/contest" },
  { label: "Groups", href: "/groups" },
  { label: "Practice", href: "/practice" },
  { label: "Discuss", href: "/blog" },
];

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Navbar - Stays fully visible (NO BLUR) */}
      <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 shadow-md bg-black/20 backdrop-blur-md">
        <div className="container px-4 mx-auto relative">
          <div className="flex justify-between items-center">
            {/*  Logo */}
            <div className="flex items-center">
              <img className="h-16 w-16 mr-2 cursor-pointer" src={logo} alt="logo" />
              <span className="text-3xl font-bold tracking-tight hidden sm:block cursor-pointer">
                CODE
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                  COMPETE
                </span>
              </span>
            </div>

            {/*  Desktop Menu */}
            <ul className="hidden lg:flex space-x-10">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-neutral-100 hover:text-blue-500 text-lg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/*  Login Button */}
            <div className="hidden lg:flex items-center bg-[#6674cc] hover:bg-[#3e477d] rounded-full px-5 py-3">
              <Link to="/login" className="text-lg font-semibold">Login</Link>
            </div>

            {/*  Mobile Menu Toggle */}
            <div className="lg:hidden flex">
              <button onClick={toggleNav}>
                {isOpen ? <RxCross1 size={28} cursor={"pointer"} /> : <BiMenuAltRight size={38} cursor={"pointer"} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/*  Blur effect starts BELOW the navbar  */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-2xl bg-black/40"
          style={{ top: "89px " }} // make height to keep navbar clear
          onClick={toggleNav}>
        </div>
      )}

      {/*  Mobile Menu (Glassmorphism Effect) */}
      {isOpen && (
        <div className="fixed right-0 top-[89px] z-50 w-full h-full flex flex-col justify-center items-center bg-black/20 backdrop-blur-2xl shadow-lg rounded-lg p-8">
          <ul className="mb-5 text-center">
            {navItems.map((item, index) => (
              <li key={index} className="py-4 text-2xl">
                <Link
                  to={item.href}
                  className="text-neutral-100 hover:text-blue-500"
                  onClick={toggleNav}>
                    {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex space-x-6 justify-center items-center bg-[#6674cc] hover:bg-[#3e477d] rounded-full px-6 py-3">
            <Link to="/login" className="text-lg font-semibold" onClick={toggleNav}>
              Login
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Nav;
