import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ items, onClose }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-96 bg-gray-900 border border-gray-700 p-4 rounded-lg shadow-xl z-50 mt-1">
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li key={index} className="text-left group">
            <Link
              to={item.href}
              className="flex items-start p-3 rounded-md transition-all duration-200 hover:bg-gray-800"
              onClick={onClose}
            >
              <div className="mr-4 mt-1">{item.icon}</div>
              <div>
                <h4 className="text-white font-medium">{item.title}</h4>
                <p className="text-sm text-gray-400 mt-1">{item.subtitle}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownMenu;