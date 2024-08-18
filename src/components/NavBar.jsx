import React from "react";
import logo from "../assets/logo.png";
import { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import MobileMenu from "./MobileMenu";

function NavBar() {

  const {scrollY} = useScroll()
  const [scrolled, setScrolled] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
      if(latest > 0 && !scrolled) {
        setScrolled(true)
      } else if (latest === 0 &&scrolled) {
        setScrolled(false)
      }
  })

  const defaultClasses = "transition-all absolute inset-0 -z-1";

  let navBarClasses = scrolled ? `${defaultClasses} border-b border-black/10 bg-white/75 backdrop-blur-lg` : `${defaultClasses} bg-transparent`;

  return (
    <div className=" sticky inset-x-0 top-0 w-full">
      <div className={navBarClasses}></div>
      <div className="mx-auto w-full max-w-screen-xl px-2.5 lg:px-20 relative">
        <div className="flex items-center justify-between">
          <div>
            <img src={logo} alt="logo" className="h-20 w-20" />
          </div>
          <nav className="hidden md:block">
            <ul className="flex flex-row space-x-4 p-4">
              <li>
                <a href="/" className="text-gray-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-600">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600">
                  Pricing
                </a>
              </li>
            </ul>
          </nav>
          <div className="hidden md:block">
            <a
              href=""
              className="bg-black px-4 py-2 rounded-md text-white cursor-pointer"
            >
              Login
            </a>
            <a
              href=""
              className="bg-black px-4 py-2 rounded-md text-white cursor-pointer ml-2 mr-2"
            >
              Sign Up
            </a>
          </div>
          <MobileMenu/>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
