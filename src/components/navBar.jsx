// @flow
import * as React from "react";
import logo from "./imgs/getlinked.svg";
import vector from "./imgs/Vector.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const NavBar = () => {
  const [isClicked, setIsClicked] = React.useState(false);

  const toggleMenu = () => {
    setIsClicked((prevIsClicked) => !prevIsClicked);
  };

  const closeMenu = () => {
    setIsClicked(false);
  };

  return (
    <div className="navbar bg-primaryClor ">
      {/* Nav bar */}
      <nav className="py-6">
        {/* Nav bar container */}

        <div className="mx-auto px-6 relative z-10  flex justify-between items-center md:container ">
          {/* logo */}
          <div className="logo ">
            <img src={logo} className="w-20 md:w-40" alt="site Logo" />
          </div>
          {/* Nav Links */}
          <div className="hidden lg:space-x-28 text-white md:flex md:items-center md:gap-x-16 ">
            <div className="md:flex md:space-x-9 md:gap-x-2 lg:gap-x-12">
              <p href="/" className="hover:text-secondarColor cursor-pointer">
                <Link to={"/"}> Timeline </Link>
              </p>
              <p className="hover:text-secondarColor">
                <Link to={"/"}> Overview</Link>
              </p>
              <p className="hover:text-secondarColor">
                <Link to={"/"}>FAQs</Link>
              </p>
              <p className="hover:text-secondarColor">
                <Link to={"/contact"}>Contact</Link>
              </p>
            </div>
            <Link to={"/register"}>
              {" "}
              <p className="py-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Register
              </p>
            </Link>
          </div>
          <div
            className={
              !toggleMenu
                ? " hidden md:hidden cursor-pointer transition duration-300"
                : " md:hidden cursor-pointer transition duration-300"
            }
            onClick={toggleMenu}
          >
            <div className="p-2 border">
              <img src={vector} alt="" />
            </div>
          </div>

          {/* small screen menu bar */}
          {isClicked && (
            <motion.div
              initial={{ scale: 0, opacity: 0, x: -100, y: -20 }}
              animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
              className="bg-black/80 fixed top-0 left-0 h-full w-full tryout"
            >
              <div className="fixed bg-primaryClor p-11 right-0 top-0 w-72 px-6 h-screen duration-[0.5s] transition z-10">
                <div className="flex flex-col space-y-9 gap-3 text-white font-montserrat ">
                  <div className="absolute right-5 top-2 duration-300 transition ">
                    <p
                      onClick={closeMenu}
                      className="rounded-full px-5 py-2 text-center text-white bg-transparent border-secondarColor border-solid border-[1px] z-10 cursor-pointer"
                    >
                      X
                    </p>
                  </div>
                  <p
                    className="hover:text-secondarColor cursor-pointer"
                    onClick={closeMenu}
                  >
                    <Link to={"/"}> Timeline</Link>
                  </p>
                  <p className="hover:text-secondarColor" onClick={closeMenu}>
                    <Link to={"/"}> Overview</Link>
                  </p>
                  <p className="hover:text-secondarColor" onClick={closeMenu}>
                    <Link to={"/"}>FAQs</Link>
                  </p>
                  <p className="hover:text-secondarColor">
                    <Link to={"/contact"}>Contact</Link>
                  </p>
                  <div>
                    <Link to={"/register"}>
                      <a
                        href="/"
                        className="py-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      >
                        Register
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>
      <div className="  md:block h-[1px] bg-line  bg-gradient-to-r from-pink-500 to-purple-500"></div>
    </div>
  );
};
