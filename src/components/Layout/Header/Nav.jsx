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
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80 mb-4 shadow-[0_0_15px_rgba(102,116,204,0.7)]">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-around  items-center">
          <div className="flex items-center flex-shrink-0">
            <img
              className="h-16 w-16 mr-1 cursor-pointer"
              src={logo}
              alt="logo"
            />
            <span className="text-3xl font-bold tracking-tight hidden sm:block cursor-pointer">
              CODE
              <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                {""} COMPETE
              </span>
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-10 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className="text-neutral-100 hover:text-blue-500 text-lg"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center bg-[#6674cc] hover:bg-[#3e477d] rounded-full">
            <Link to="/login" className="py-3 px-5  text-lg font-semibold">
              Login
            </Link>
          </div>

          {/* Toggle button for small screens only */}
          <div className="lg:hidden flex flex-col justify-end">
            <button onClick={toggleNav}>
              {isOpen ? (
                <RxCross1 size={28} cursor={"pointer"} />
              ) : (
                <BiMenuAltRight size={38} cursor={"pointer"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu: Only visible on small screens */}
        {isOpen && (
          <div className="cursor-pointer fixed right-0 z-60 w-full p-12 flex flex-col justify-center items-center bg-[rgba(32,33,34)] backdrop-blur-md lg:hidden">
            <ul className="mb-5">
              {navItems.map((item, index) => (
                <li key={index} className="py-4 text-xl ">
                  <Link
                    to={item.href}
                    className="text-neutral-100 hover:text-blue-500"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6 justify-center items-center bg-[#6674cc] hover:bg-[#3e477d] rounded-full">
              <Link to="/login" className="py-3 px-5  text-lg font-semibold ">
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Nav;
