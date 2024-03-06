import { Link } from "react-router-dom";
import thumbsup from "./imgs/register-page/3d-graphic-designer-showing-thumbs-up-png 1.svg";
import register from "./imgs/register-page/Register.svg";
import movement from "./imgs/register-page/Part of move.svg";
import flare from "./imgs/register-page/Purple-Lens-Flare-PNG (6).svg";
import { motion, AnimatePresence } from "framer-motion";
import * as React from "react";
import congratulation from "./imgs/register-page/congratulation.svg";
import yes from "./imgs/register-page/yes it was....and wink emoji.svg";

const RegisterPage = () => {
  const [clicked, isClicked] = React.useState(false);

  const open = () => {
    isClicked(true);
  };

  const close = () => {
    isClicked(false);
  };

  return (
    <div id="Register" className=" bg-primaryClor h-fit">
      <img src={flare} alt="" className="absolute top-5" />
      <AnimatePresence>
        {clicked && (
          <motion.div
            initial={{ scale: 0, opacity: 0, x: -100, y: -20 }}
            animate={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            exit={{
              scale: 0,
              opacity: 1,
              x: 200,
              y: -20,
            }}
            transition={{
              type: "spring",
            }}
            className="fixed  top-0 right-0 bg-black/80 w-full h-full z-10 flex flex-col  gap-4 justify-center items-center"
          >
            <div>
              <img src={congratulation} alt="" />
            </div>
            <div className="text-white text-2xl text-center">
              <h1> Congratulations</h1>
              <h1> You have successfully</h1>
              <h1> Registered</h1>
            </div>
            <div>
              <img src={yes} alt="" />
            </div>
            <div className=" text-center">
              <Link to={"/"}>
                <button
                  onClick={close}
                  className="py-5 px-24 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl w-full"
                >
                  Back
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* small */}
      <div className="flex flex-col justify-center gap-4 items-center px-4 pt-5 relative ld:flex lg:flex-row">
        <div className="pl-6 w-full">
          <img src={register} alt="" />
        </div>
        <div>
          <img src={thumbsup} alt="" className="w-56 md:w-96 lg:w-full" />
        </div>
        <div className="flex w-full justify-end items-end pr-7 md:w-96">
          <img src={movement} alt="" className=" md:w-32  " />
        </div>
        <div>
          <h1 className="text-white tracking-[4px] text-xl font-montserrat shadow-black font-medium">
            CREATE YOUR ACCOUNT
          </h1>
        </div>
        <div className="w-72">
          <form className="flex flex-col gap-4 text-white">
            <div className="w-full ">
              {" "}
              <label htmlFor="name" className="text-white tracking-[2px] p-2">
                {" "}
                Team's Name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full bg-transparent border px-6 py-1 rounded-[10px]"
                placeholder="Enter the name of your group"
              />
            </div>

            <div className="w-full ">
              {" "}
              <label htmlFor="phone" className="text-white tracking-[2px] p-2">
                {" "}
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="block w-full bg-transparent border px-6 py-1 rounded-[10px] "
                placeholder="Enter your phome number"
              />
            </div>

            <div className="w-full ">
              {" "}
              <label
                htmlFor="mail"
                className="text-white tracking-[2px] font-montserrat p-2"
              >
                {" "}
                Email
              </label>
              <input
                type="email"
                id="mail"
                className="block w-full bg-transparent border px-6 py-1 rounded-[10px] "
                placeholder="Enter your email address"
              />
            </div>

            <div className="w-full ">
              {" "}
              <label
                htmlFor="project"
                className="text-white tracking-[2px] p-2"
              >
                {" "}
                Project Topic
              </label>
              <input
                type="text"
                id="project"
                className="block w-full bg-transparent border px-6 py-1 rounded-[10px]"
                placeholder="Whats is your group project topic"
              />
            </div>
            <div className="flex gap-3">
              <div className="w-[55%] ">
                {" "}
                <label
                  htmlFor="category"
                  className="text-white tracking-[2px] p-2"
                >
                  {" "}
                  Category
                </label>
                <select
                  id="category"
                  className="block w-full bg-transparent border text-white px-2 py-1 rounded-[10px] bg-primaryClor"
                  placeholder="Whats is your group project topic"
                >
                  <option className="" selected disabled>
                    <p>Select your category</p>
                  </option>
                  <option className="bg-primaryClor border-b-white">
                    <p>Individal</p>
                  </option>
                  <option className="bg-primaryClor">
                    <p>Team</p>
                  </option>
                </select>
              </div>

              <div className="w-[40%] ">
                {" "}
                <label htmlFor="project" className="text-white ">
                  {" "}
                  Group size
                </label>
                <select
                  id="size"
                  className="block w-full bg-transparent border text-white px-2 py-1 rounded-[10px] bg-primaryClor"
                  placeholder="Whats is your group project topic"
                >
                  <option className="" selected disabled>
                    <p>Select</p>
                  </option>
                  <option className="bg-primaryClor border-b-white">
                    <p>Over 5</p>
                  </option>
                  <option className="bg-primaryClor">
                    <p>10 above</p>
                  </option>
                </select>
              </div>
            </div>
            <div>
              {" "}
              <div className="w-full r pt-5  text-center">
                <i className="text-small_textColor font-thin text-[13px] w-full ">
                  {" "}
                  Please review registration details before submitting
                </i>
              </div>
              <div className="py-5 flex items-center justify-between gap-3">
                <div className="w-[20%] pl-9 ">
                  {" "}
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="pr-3 bg-transparent "
                  />
                </div>
                <div className="w-[80%]">
                  <p className="text-white text-[12px] w-full font-montserrat">
                    i agree with the event terms and conditions and privacy
                    policy
                  </p>
                </div>
              </div>
            </div>
            <div className="pb-10 ">
              <div className="items-center text-center">
                <p
                  onClick={open}
                  className="py-5 px-16 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl"
                >
                  Submit
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
