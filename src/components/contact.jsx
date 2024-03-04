import returnButton from "./imgs/contact-images/Group 1.svg";
import logo from "./imgs/getlinked.svg";
import questions from "./imgs/contact-images/Questions.svg";
import getInTouch from "./imgs/contact-images/Get in touch.svg";
import socialmedia from "./imgs/contact-images/Social media.svg";
import purpleLense from "./imgs/contact-images/Purple-Lens-Flare-PNG (5).svg";
import messagebig from "./imgs/contact-images/Do you have.svg";
import rectangle from "./imgs/contact-images/Rectangle 10.svg";
import { Link, useLocation } from "react-router-dom";
import done from "./imgs/contact-images/done.png";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const [clicked, isClicked] = React.useState(false);
  return (
    <div
      id="contact"
      className=" bg-primaryClor pb-5 h-full md:h-[120vh] md:pb-20 lg:h-[100vh]"
    >
      <div className="navbar">
        {/* <div className="absolute bottom-0 lg:hidden">
          <img src={purpleLense} alt="" />
        </div> */}
        {/* Nav bar */}
        <nav className=" py-6">
          {/* Nav bar container */}

          <div className="mx-auto px-6 relative z-50 flex justify-between items-center md:container">
            {/* logo */}

            <div className="hidden md:block">
              <img
                src={logo}
                className="w-20  hiddden md:block md:w-40 lg:w-auto"
                alt="site Logo"
              />
            </div>

            <div className=" md:hidden">
              <Link to={"/"}>
                <img
                  src={returnButton}
                  className=" md:hidden"
                  alt="site Logo"
                />
              </Link>
            </div>
            {/* Nav Links */}
            <div className="hidden lg:space-x-28 text-white md:flex md:items-center md:gap-x-16">
              <div className="md:flex md:space-x-9 md:gap-x-2 lg:gap-x-12">
                <p className="hover:text-secondarColor cursor-pointer">
                  <Link to={"/"}>Timeline</Link>
                </p>
                <p className="hover:text-secondarColor">
                  <Link to={"/"}>Overview</Link>
                </p>
                <p className="hover:text-secondarColor">
                  <Link to={"/"}>FAQs</Link>
                </p>
                <p className="hover:text-secondarColor">
                  <Link to={"/contact"}>Contact</Link>
                </p>
              </div>

              <a
                href="/"
                className="py-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              >
                Register
              </a>
            </div>
          </div>
        </nav>
      </div>

      {/* small screen */}

      {/* done message */}
      <AnimatePresence>
        {clicked && (
          <motion.div
            onClick={() => isClicked(false)}
            initial={{ scale: 0, opacity: 0, x: -100, y: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 1,
              type: "spring",
            }}
            exit={{
              scale: 0,
              opacity: 0,
              x: -100,
              y: -20,
            }}
            className="bg-black/80 top-0 right-0 h-full w-full fixed z-10 p-5 flex flex-col justify-center items-center "
          >
            <div>
              <img src={done} className="w-40" alt="" />
            </div>
            <div className="text-white font-montserrat text-xl text-center  font-bold">
              <p className="p-2"> </p>
              <p className=" border-b-[6px] border-secondarColor leading-10">
                {" "}
                Your Questions are been reviewed. We will get back to you asap
                !!{" "}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col justify-center px-7 items-center  lg:hidden gap-4 pt-5  relative md:px-20 md:pt-20">
        <div className=" w-full">
          <img src={questions} className="w-60" alt="" />
        </div>
        <div className=" w-full">
          <p className="font-montserrat shadow-black  text-white pt-5">
            Email is below to any question related to our event
          </p>
        </div>

        <form className=" w-full  pt-8 flex flex-col gap-6">
          <div>
            <input
              type="text"
              className="border-2 border-solid border-white p-3  bg-transparent text-white outline-none  w-full"
              placeholder="Team's Name"
            />
          </div>

          <div>
            <input
              type="text"
              className="border-2 border-solid border-white p-3  bg-transparent text-white outline-none w-full"
              placeholder="Topic"
            />
          </div>

          <div>
            <input
              type="email"
              className="border-2 border-solid border-white p-3 bg-transparent text-white outline-none w-full"
              placeholder="Email"
            />
          </div>

          <div>
            <textarea
              cols="30"
              rows="10"
              className="border-2 border-solid border-white p-3  bg-transparent outline-none text-white w-full"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="flex justify-center items-center pt-5">
            <div className=" text-center">
              <p
                onClick={() => {
                  isClicked(true);
                }}
                className="py-4 px-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
              >
                Submit
              </p>
            </div>
          </div>
        </form>
        <div>
          <p className="text-secondarColor font-montserrat pt-10 font-medium">
            Share on
          </p>
        </div>
        <div>
          <img src={socialmedia} alt="" />
        </div>
      </div>

      {/* content big screen */}
      <div className=" hidden lg:flex 2xl:mt-24 lg:px-5 lg:items-center lg:justify-center py-10 ">
        <div className="container px-16 flex justify-between gap-4 items-center">
          {/*left item */}
          <div className="flex flex-col gap-4  w-1/2 p-10">
            <div>
              <img src={getInTouch} alt="" />
            </div>
            <div>
              <p className="font-montserrat shadow-black  text-white">
                Contact
              </p>
              <p className="font-montserrat shadow-black  text-white">
                Information
              </p>
            </div>
            <div>
              <p className="font-montserrat shadow-black  text-white ">
                27, Alara street
              </p>
              <p className="font-montserrat shadow-black  text-white ">
                Yaba 100012
              </p>
              <p className="font-montserrat shadow-black  text-white ">
                Lagos State
              </p>
            </div>
            <div>
              <p className="font-montserrat shadow-black  text-white ">
                Call Us : 07067981819
              </p>
            </div>
            <div>
              <p className="font-montserrat shadow-black  text-white ">
                We are open from Monday-Friday
              </p>
              <p className="font-montserrat shadow-black  text-white ">
                08:00am - 05:00pm
              </p>
            </div>
            <div>
              <p className="font-montserrat text-secondarColor font-medium ">
                Share on
              </p>
              <div className="pt-3">
                <img src={socialmedia} alt="" />
              </div>
            </div>
          </div>

          <div className="w-1/2  bg-zinc-900 rounded-xl ">
            {/* <div className="absolute -right-24 2xl:right-52 2xl:bottom-20">
              <img src={rectangle} className="w-[70%] 2xl:w-[85%]" alt="" />
            </div> */}
            <form className=" p-12 flex flex-col relative  gap-6">
              <div>
                <img src={messagebig} alt="" />
              </div>
              <div>
                <input
                  type="text"
                  className="border-2 border-solid border-white p-3  bg-transparent text-white outline-none  w-full"
                  placeholder="First Name"
                />
              </div>

              <div>
                <input
                  type="email"
                  className="border-2 border-solid border-white p-3  bg-transparent text-white outline-none w-full"
                  placeholder="Mail"
                />
              </div>

              <div>
                <textarea
                  rows="4"
                  className="border-2 border-solid border-white p-3 bg-transparent outline-none text-white w-full"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className="flex justify-center items-center pt-5">
                <div className=" text-center">
                  <p
                    onClick={() => {
                      isClicked(true);
                    }}
                    className="py-4 px-20 bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    Submit
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
        {/* right item */}
      </div>
    </div>
  );
};

export default Contact;
