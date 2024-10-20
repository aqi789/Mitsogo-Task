import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="bg-[#020A19] text-white w-full fixed z-50">
        <div className="flex justify-between items-center py-3 px-6 lg:px-24">
          <div className="flex items-center">
            <h2 className="font-bold text-3xl">hexnode</h2>
          </div>
          <ul className="hidden lg:flex space-x-8 items-center">
            <li className="mt-2">
              <Link to="#why-hexnode">Why Hexnode</Link>
            </li>
            <li className="mt-2">
              <Link to="#features">Features</Link>
            </li>
            <li className="mt-2">
              <Link to="#platforms">Platforms</Link>
            </li>
            <li className="mt-2">
              <Link to="#pricing">Pricing</Link>
            </li>
            <li className="mt-2">
              <Link to="#customers">Customers</Link>
            </li>
          </ul>
          <div className="hidden lg:block">
            <Link
              to="/signup"
              className="rounded-md p-3 bg-[#bb022a] uppercase text-white"
            >
              14 day free trial
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="hamburger--btn relative z-[101]"
            >
              <span className="block w-6 h-[3px] bg-white mb-1"></span>
              <span className="block w-6 h-[3px] bg-white mb-1"></span>
              <span className="block w-6 h-[3px] bg-white"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#fff] fixed top-0 right-0 w-1/2 h-full z-50 transition-all ease-in-out duration-300">
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-black mt-3 text-3xl focus:outline-none"
              >
                &times;
              </button>
            </div>
            <ul className="flex flex-col space-y-6 py-6">
              <li className="border-b pl-7 pb-3">
                <Link to="#why-hexnode" className="text-black">
                  Why Hexnode
                </Link>
              </li>
              <li className="border-b pl-7 pb-3">
                <Link to="#features" className="text-black">
                  Features
                </Link>
              </li>
              <li className="border-b pl-7 pb-3">
                <Link to="#platforms" className="text-black">
                  Platforms
                </Link>
              </li>
              <li className="border-b pl-7 pb-3">
                <Link to="#pricing" className="text-black">
                  Pricing
                </Link>
              </li>
              <li className="border-b pl-7 pb-3">
                <Link to="#customers" className="text-black">
                  Customers
                </Link>
              </li>
              <li className="pt-4">
                <Link
                  to="/signup"
                  className="bg-[#bb022a] text-white px-6 py-4 rounded-md ml-7"
                >
                  14 Day Free Trial
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
