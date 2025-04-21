import React, { useState } from "react";
import logo from "../../../assets/logo.png";
import { Link } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { BiMenuAltRight } from "react-icons/bi";
import DropdownMenu from "./DropdownMenu.jsx";
import MobileMenu from "./MobileMenu.jsx";
import {
  FaLaptopCode,
  FaProjectDiagram,
  FaCalendarAlt,
  FaListAlt,
} from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Contest", href: "/contest" },
  { 
    label: "Groups", 
    href: "/groups",
    dropdown: [
      {
        icon: <FaLaptopCode className="text-yellow-400 text-xl" />,
        title: "Make Your Own Group",
        subtitle: "View and manage your groups",
        href: "/groups/my"
      },
      {
        icon: <FaProjectDiagram className="text-yellow-400 text-xl" />,
        title: "Discover Groups",
        subtitle: "Find new groups to join",
        href: "/groups/discover"
      }
    ]
  },
  {
    label: "Practice",
    href: "/practice",
    dropdown: [
      {
        icon: <FaLaptopCode className="text-yellow-400 text-xl" />,
        title: "Interview Problems",
        subtitle: "Practice the most frequently asked coding questions",
        href: "/practice/interview",
      },
      {
        icon: <FaProjectDiagram className="text-yellow-400 text-xl" />,
        title: "Practice DSA Concepts",
        subtitle: "Master data structures & algorithms with real-world patterns",
        href: "/practice/dsa",
      },
      {
        icon: <FaCalendarAlt className="text-yellow-400 text-xl" />,
        title: "Practice Past Contests",
        subtitle: "Revisit and solve problems from past contests",
        href: "/practice/past",
      },
      {
        icon: <FaListAlt className="text-yellow-400 text-xl" />,
        title: "Problem of the Day",
        subtitle: "Solve today's challenge and keep your streak alive",
        href: "/practice/potd",
      },
    ],
  },
  { label: "Discuss", href: "/blog" },
];

function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };
  const closeAll = () => {
    setOpenDropdownIndex(null);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 border-b border-neutral-700/80 shadow-lg bg-black/20 backdrop-blur-md">
        <div className="container px-4 mx-auto relative">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img
                className="h-16 w-16 mr-2 cursor-pointer"
                src={logo}
                alt="logo"
              />
              <span className="text-3xl font-bold tracking-tight hidden sm:block cursor-pointer">
                CODE
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
                  COMPETE
                </span>
              </span>
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-10 relative">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => item.dropdown && setOpenDropdownIndex(index)}
                  onMouseLeave={() => item.dropdown && setOpenDropdownIndex(null)}
                >
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="relative text-neutral-100 hover:text-blue-500 text-lg pb-2"
                      >
                        {item.label}
                        <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 group-hover:w-full group-hover:bg-green-500 transition-all duration-300 ease-in"></span>
                      </button>
                      {openDropdownIndex === index && (
                        <DropdownMenu 
                          items={item.dropdown} 
                          onClose={closeAll} 
                        />
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="relative text-neutral-100 hover:text-blue-500 text-lg pb-2"
                    >
                      {item.label}
                      <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-blue-500 group-hover:w-full group-hover:bg-green-500 transition-all duration-300 ease-in"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Login Button */}
            <div  className="hidden lg:flex items-center bg-[#6674cc] hover:bg-[#3e477d] rounded-full px-5 py-2">
              <Link to="/login" className="text-lg font-semibold">
                Login
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex mr-2">
            <button 
                onClick={toggleMobileMenu}
                className="focus:outline-none"
              >
                {isMobileMenuOpen ? (
                  <RxCross1 size={24} className="text-gray-300" />
                ) : (
                  <BiMenuAltRight size={30} className="text-gray-300" /> 
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        navItems={navItems} 
        onClose={closeAll} 
      />
    </>
  );
}

export default Nav;