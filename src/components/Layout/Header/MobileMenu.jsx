import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const MobileMenu = ({ isOpen, navItems, onClose }) => {
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);
  };

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        onClose();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-40 bg-black/40 backdrop-blur-2xl"
      style={{ top: "89px" }}
    >
      <div className="bg-gray-900 border-t border-gray-700 w-full px-4">
        <ul className="divide-y divide-gray-700">
          {navItems.map((item, index) => (
            <li key={index}>
              <div className="flex flex-col">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(index)}
                      className="flex items-center justify-between py-3 text-base text-white w-full"
                    >
                      <span>{item.label}</span>
                      {openDropdownIndex === index ? (
                        <FiChevronUp className="text-gray-400" />
                      ) : (
                        <FiChevronDown className="text-gray-400" />
                      )}
                    </button>
                    
                    {openDropdownIndex === index && (
                      <div className="pb-2 pl-4 space-y-3">
                        {item.dropdown.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            to={subItem.href}
                            className="block py-2 text-gray-300 hover:text-white transition-colors text-sm"
                            onClick={onClose}
                          >
                            <div className="flex items-start">
                              <div className="mr-3 mt-0.5">{subItem.icon}</div>
                              <div>
                                <h4 className="font-medium">{subItem.title}</h4>
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {subItem.subtitle}
                                </p>
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="py-3 text-base text-white block"
                    onClick={onClose}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ul>
        
        <div className="px-0 py-3 border-t border-gray-700">
          <Link
            to="/login"
            className="block w-full text-center bg-[#6674cc] hover:bg-[#3e477d] text-white font-medium rounded-full px-4 py-2 text-sm"
            onClick={onClose}
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;