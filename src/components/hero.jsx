// @flow
import * as React from "react";
import extra from "./imgs/Vector 4.svg";
import firstText from "./imgs/Igniting a Revolution in HR Innovation.svg";
import tittle from "./imgs/Title.svg";
import timer from "./imgs/Countdown time.svg";
import purpleLense from "./imgs/Purple-Lens-Flare-PNG.svg";
import whiteStar from "./imgs/star.svg";
import bigidea from "./imgs/The big idea.svg";
import vvr from "./imgs/vrr.jpg";
import vr from "./imgs/VR.png";
import intro from "./imgs/SmallIntroduction to getlinked tech Hackathon 1.0 (1).svg";
import instruct from "./imgs/instruct.svg";
import introBig from "./imgs/Introduction to getlinked tech Hackathon 1.0.svg";
import Bigrules from "./imgs/BigRules and Guidelines.svg";
import rules from "./imgs/Rules and Guidelines (1).svg";
import bigideaArrow from "./imgs/arrow.svg";
import starGra from "./imgs/sata gra.svg";
import sata from "./imgs/sata gra (2).svg";
import pie from "./imgs/section3/8046554 1.svg";
import criteriaBig from "./imgs/section3/Judging Criteria Key attributes.svg";
import criteriaSmall from "./imgs/section3/Judging Criteria Key attributes (1).svg";
import eclipse from "./imgs/section3/Ellipse 2.svg";
import c_work from "./imgs/section4/cwok_casual_21 1 (2).svg";
import bigFq from "./imgs/section4/Frequently Ask Question.svg";
import smallFq from "./imgs/section4/Frequently Ask Question (1).svg";
import rightpurpleLense from "./imgs/RightPurple-Lens-Flare-PNG (2).svg";
import man from "./imgs/man-wearing-smart-glasses-touching-virtual-screen 1.svg";
import matrix from "./imgs/Image 1.svg";
import centerpurpleflare from "./imgs/section5/Purple-Lens-Flare-PNG (3).svg";
import centerQuestionMark from "./imgs/section4/_ (1).svg";
import smallQuestionMark from "./imgs/section4/_ (2).svg";
import numbers from "./imgs/section5/numbers.svg";
import prizes from "./imgs/section-seven/Prizes and Rewards.svg";
import medals from "./imgs/section-seven/Rewards.svg";
import cup from "./imgs/section-seven/9486889 1.svg";
import purpleLense7 from "./imgs/section-seven/Purple-Lens-Flare-PNG (7).svg";
import timelineMessage from "./imgs/section5/Timeline (1).svg";
import bigTimeLine from "./imgs/section5/Timeline.svg";
import centerpurpleflare7 from "./imgs/section-seven/Purple-Lens-Flare-PNG (8).svg";
import { Link } from "react-router-dom";
import sponsor from "./imgs/partners/Partners and Sponsors.svg";
import { motion, AnimatePresence } from "framer-motion";
import partnersText from "./imgs/partners/Getlinked Hackathon 1.0 is honored to have the following major companies as its partners and sponsors.svg";
import partnersimg from "./imgs/partners/Partners list.svg";

export const Hero = () => {
  // const [focus, isfocused] = React.useState(true);

  return (
    // container
    <div id="hero" className=" bg-primaryClor ">
      {/* {section 1} */}
      <section id="section1">
        <div className="md:overflow-hidden">
          {/* first item setion 1 */}
          <div className="mx-auto pt-5 flex flex-col md:flex-col ">
            <div>
              <div className="py-2 px-2 flex justify-center text-center mx-auto md:flex md:mx-0 md:justify-end md:w-11/12 ">
                <img
                  src={whiteStar}
                  className="relative w-4 left-32 top-6 md:w-auto md:-left-1/4  z-10"
                  alt=""
                />
                <img
                  src={centerpurpleflare}
                  className=" hidden md:block md:absolute md:bottom-52 lg:absolute lg:block lg:right-20 lg:-bottom-9 xl:w-auto xl:left-1  "
                  alt=""
                />
                <img
                  src={whiteStar}
                  className="hidden md:absolute md:block md:right-44 md:top-[600px]"
                  alt=""
                />
                <img
                  src={starGra}
                  className="hidden md:absolute md:block md:right-44 md:top-[600px]"
                  alt=""
                />
                <img
                  src={bigideaArrow}
                  className="hidden md:absolute md:block md:right-10  md:top-[250px] lg:hidden"
                  alt=""
                />
                <img
                  src={firstText}
                  className="md:w-96 w-96 px-2 z-10 sm:w-auto lg:w-6/12"
                  alt=""
                />
              </div>

              <div className="py-4 z-50 px-2 flex mx-auto justify-end w-11/12 md:flex md:mx-0 sm:w-6/12 md:justify-end md:w-11/12  ">
                <img
                  src={extra}
                  alt=""
                  className="relative w-32 bottom-6 mini:w-28 mini:right-4 sm:right-5  md:w-32  md:right-4 lg:w-40 lg:pr-0 xl:w-52 xl:pr-0 2xl:w-72 2xl:pr-0"
                />
              </div>
            </div>
          </div>
          {/* Second item  section1*/}
          <div className=" relative flex flex-col md:flex md:flex-row ">
            <img
              src={starGra}
              className="hidden md:block md:absolute w-4 left-32 top-6  md:top-1 md:w-auto md:left-[700px] "
              alt=""
            />
            <img
              src={starGra}
              className="hidden  w-4 left-32 top-6  md:top-[500px] md:block md:absolute md:w-auto  md:left-[600px] xl:top-[400px] 2xl:top-[500px]"
              alt=""
            />
            <img
              src={purpleLense}
              className="bottom-96  h-4/5 absolute md:hidden md:h-3/4 md:bottom-60 lg:hidden lg:bottom-44 "
              alt=""
            />
            <img
              src={centerpurpleflare}
              className="hidden bottom-72  h-4/5 absolute md:h-3/4 md:bottom-60 lg:block lg:bottom-44 lg:left-[850px] 2xl:left-[500px] 2xl:bottom-56 2xl:w-full"
              alt=""
            />

            <div className=" relative bottom-8  flex px-7 justify-center flex-col mb-4 md:px-7 md:flex-col md:justify-center xl:-left-11">
              {/* left */}
              <div className="space-y-3 w-60% lg:pl-40 lg:w-8/12 xl:w-auto">
                <div>
                  <img src={tittle} alt="" />
                </div>
                {/* left text */}
                <div className="text-white pb-7 space-y-3 ">
                  <p className="font-montserrat text-sm w-full text-center t md:w-full md:text-3xl md:text-left lg:text-[20px] lg:text-left xl:text:text-3xl">
                    Participate in getlinked tech Hackathon 2024 stand
                  </p>
                  <p className="font-montserrat text-sm text-center w-full md:w-full  md:text-left md:text-3xl lg-fotn lg:text-[20px] lg:text-left xl:text:text-3xl">
                    a chance to win a big prize
                  </p>
                </div>
                {/* left button */}

                <div className="flex justify-center md:justify-start">
                  <Link to={"/register"}>
                    {" "}
                    <p className="py-2 px-8 bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                      Register
                    </p>
                  </Link>
                </div>
                {/* left timer */}
                <div className="flex justify-center pt-2 md:pt-11 md:flex md:justify-start">
                  <img src={timer} alt="" />
                </div>
              </div>
            </div>

            {/* right */}
            <div className="flex relative justify-center mx-auto">
              <div className="h-full mx-auto w-full lg:px-5 lg:rounded-[10%]">
                <img
                  src={man}
                  alt=""
                  className=" h-full  md:hidden lg:rounded-[5%] lg:relative lg:top-2  lg:block  xl:block "
                />
                <img
                  src={matrix}
                  alt=""
                  className=" bottom-4 h-full absolute md:hidden lg:rounded-[5%] lg:absolute lg:top-2  lg:block  xl:block "
                />

                <img src={vvr} alt="" className=" hidden md:hidden" />
              </div>
            </div>
          </div>
        </div>
        <img
          src={starGra}
          className="hidden md:relative border-2 border-solid border-white `"
          alt=""
        />
        <div className="  md:block h-[1px] bg-gray-500"></div>
      </section>

      {/* section 2 */}
      <section id="advertTwo ">
        <div className="flex m-auto px-10 pt-14 flex-col justify-center items-center lg:container md:flex-row md:justify-between lg:gap-[40px] md:gap-[20px] md:relative ">
          {/* touches big screen */}
          <img
            src={bigideaArrow}
            className="hidden md:absolute md:block md:left-[700px] md:-bottom-3  lg:left-[500px] xl:left-[600px]"
            alt=""
          />
          <img
            src={sata}
            className="hidden md:absolute md:block md:left-[5px] md:top-44  2xl:-left-[70px]  "
            alt=""
          />
          {/* touches big screen */}

          <img
            src={starGra}
            className="hidden md:absolute md:block md:right-2  md:bottom-80"
            alt=""
          />

          {/* touches small screen */}
          <img src={starGra} className="relative -left-36 md:hidden" alt="" />
          {/* big idea */}

          <AnimatePresence>
            <motion.div
              // initial={{ rotate: "0deg", scale: 0 }}
              // animate={{ rotate: "20deg", scale: 1 }}
              // transition={{ type: "spring" }}
              // exit={{ rotate: "0deg", scale: 0 }}
              className="pt-10 pb-10 md:w-1/2"
            >
              <img src={bigidea} alt="" />
            </motion.div>
          </AnimatePresence>

          {/* message */}
          <div className="flex flex-col py-7 justify-center items-center  md:justify-start md:items-start">
            {/* touches small screen */}
            <img
              src={bigideaArrow}
              className="relative bottom-5 md:hidden"
              alt=""
            />
            <div className="hidden md:block">
              <img src={introBig} className="md:max-w-[500px]" alt="" />
            </div>
            <div className=" md:hidden pt-5">
              <img src={intro} className="w-[1200px]" alt="" />
            </div>
            <div className="pt-6 pb-5 md:max-w-[400px] lg:max-w-[600px] z-10">
              <p className="text-white  font-[15px] text-sm md:text-left text-center font-montserrat shadow-black leading-8 md:text-[17px] ">
                our tech hackthon is a melting pot of visionaries, and it's
                purpose is as clear as day: to shape the future. Weather you're
                coding genius, a design maverick, or a concept wizard, you'll
                have tht chance to transform your ideas into reality. Solving
                real-World problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about
              </p>
            </div>
          </div>
        </div>
        <div className="absolute left-48 flex justify-end items-end  md:hidden">
          <img src={rightpurpleLense} className="relative bottom-40 " alt="" />
        </div>
      </section>

      {/* section 3 */}
      <section id="advertThree ">
        <div className="flex m-auto px-10 flex-col justify-center relative  items-center lg:container md:flex-row-reverse md:justify-between md:gap-[20px] ">
          {/* instruction */}
          {/* touches big screen */}
          <img
            src={centerpurpleflare}
            className=" hidden   lg:absolute lg:block lg:top-32  lg:right-36 2xl:right-[900px] 2xl:top-60"
            alt=""
          />
          <img
            src={whiteStar}
            className="hidden md:absolute md:block md:left-[400px] md:bottom-96  lg:left-[500px] xl:left-[400px] 2xl:bottom-[500px]"
            alt=""
          />
          <img
            src={starGra}
            className="hidden md:absolute lg:block lg:-left-[12px] md:top-80 "
            alt=""
          />
          {/* touches big screen */}

          <img
            src={whiteStar}
            className="hidden md:absolute md:block md:right-2  md:bottom-[100px]"
            alt=""
          />

          {/* touches small screen */}
          <img
            src={whiteStar}
            className="relative -left-36 top-20 md:hidden"
            alt=""
          />

          <div className="pt-10 pb-10 md:w-1/2">
            <img src={instruct} alt="" />
          </div>

          {/* message */}
          <div className="relative flex flex-col py-7 justify-center items-center  md:justify-start md:items-start">
            <div className="hidden md:block">
              <img src={Bigrules} className="md:max-w-[500px]" alt="" />
            </div>
            <div className=" md:hidden pt-1">
              <img src={rules} className="w-40" alt="" />
            </div>
            <div className="pt-6 md:max-w-[400px] lg:max-w-[600px] z-10">
              <p className="text-white text-sm font-[15px] md:text-left text-center font-montserrat shadow-black leading-8 md:text-[17px]">
                our tech hackthon is a melting pot of visionaries, and it's
                purpose is as clear as day: to shape the future. Weather you're
                coding genius, a design maverick, or a concept wizard, you'll
                have tht chance to transform your ideas into reality. Solving
                real-World problems, pushing the boundaries of technology, and
                creating solutions that can change the world, that's what we're
                all about
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 flex justify-end items-end  md:hidden">
          <img src={purpleLense} className="relative bottom-44 " alt="" />
        </div>

        <div className="absolute left-3 flex justify-end items-end  md:hidden">
          <img src={starGra} className="relative bottom-52 " alt="" />
        </div>

        <div className="absolute right-7 md:hidden">
          <img src={whiteStar} className="relative bottom-[600px] " alt="" />
        </div>
        <div className="absolute left-5 md:hidden">
          <img src={starGra} className="relative bottom-[1100px] " alt="" />
        </div>
      </section>

      {/* section 4 */}
      <section id="advert3 ">
        <div className="flex m-auto pt-10 px-10 flex-col justify-center relative items-center md:flex-col md:justify-between md:gap-[20px] lg:flex-row 2xl:container ">
          {/* instruction */}

          <div className="relative pt-10 pb-2 lg:w-full ">
            <div className=" md:w-[600px]">
              <img src={pie} className="lg:w-[120%]" alt="" />
            </div>
          </div>

          {/* message */}
          <div className="relative flex flex-col py-7 justify-center items-center md:justify-start md:items-start md:w-full ">
            <div className="hidden md:block ">
              <img src={criteriaBig} className="md:max-w-[500px]" alt="" />
            </div>
            <div className=" md:hidden pt-1">
              <img src={criteriaSmall} className="w-52" alt="" />
            </div>

            <div className="pt-6 md:max-w-full md:pr-32 lg:pr-0 xl:pr-32 lg:max-w-full z-10">
              <div className="text-center mx-auto px-3 flex flex-col space-y-4 md:px-0">
                <div className="md:text-[17px]">
                  <p className="text-white leading-8 text-sm shadow-black font-montserrat md:text-left">
                    <span className="text-small_textColor pr-1 text-[15px] font-medium md:text-left md:text-[17px]">
                      Inovation and creativity:
                    </span>
                    Evaluate the iniqueness and creativity of the solution.
                    Consider whether it addresses a real-world problem in a
                    novel way or introduces innovative features
                  </p>
                </div>

                <div className="md:text-[17px]">
                  <p className="text-white leading-8 text-sm shadow-black font-montserrat md:text-left">
                    <span className="text-small_textColor pr-1 text-[15px] font-medium md:text-left md:text-[17px]">
                      Functionality:
                    </span>
                    Assess how well the solution works. Does it perform its
                    intended functions effectively and without major issues?
                    Judges would consider the completeness and robustness of the
                    solution.
                  </p>
                </div>

                <div className="md:text-[17px]">
                  <p className="text-white leading-8 text-sm shadow-black font-montserrat md:text-left">
                    <span className="text-small_textColor pr-1 text-[15px] font-medium md:text-left md:text-[17px]">
                      Impact ans Relevance:
                    </span>
                    Determine the potential impact of the solution in the real
                    world. Doed it address a significant problem,and is it
                    relevant to the target audience? judges would asses the
                    potential social,economical,or enviromental benefits
                  </p>
                </div>

                <div className="md:text-[17px]">
                  <p className="text-white leading-8 text-sm shadow-black font-montserrat md:text-left">
                    <span className="text-small_textColor pr-1 text-[15px] font-medium md:text-left md:text-[17px]">
                      Technical Complexity:
                    </span>
                    Evaluate the technical sophistication of the solution.
                    Judges would consider the complexity of the code, the use of
                    advanced technologies aor algorithms, and the scalability of
                    the solution.
                  </p>
                </div>

                <div className="md:text-[17px]">
                  <p className="text-white leading-8 text-sm shadow-black font-montserrat md:text-left">
                    <span className="text-small_textColor pr-1 text-[15px] font-medium md:text-left md:text-[17px]">
                      Adherence to Hackathon Rules:
                    </span>
                    Judges will Ensure that the team adhered to the rules and
                    guildelines of the hackthon, including deadlines, use of
                    specific technologies or APIs, and any other
                    competition-specific requirements.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <Link>
                    {" "}
                    <p className="py-2 px-8 bg-gradient-to-r from-pink-500 to-purple-500 text-white ">
                      Read More
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-48 flex justify-end items-end  lg:hidden md:left-[700px]">
          <img src={rightpurpleLense} className="relative bottom-44 " alt="" />
        </div>
        <div className=" hidden absolute justify-end items-end  lg:hidden md:block md:right-4">
          <img src={bigideaArrow} className="relative bottom-96 " alt="" />
        </div>

        <div className="absolute left-3 flex justify-end items-end  md:hidden">
          <img src={starGra} className="relative bottom-52 " alt="" />
        </div>

        <div className="absolute right-7 md:hidden">
          <img src={whiteStar} className="relative bottom-[600px] " alt="" />
        </div>
        <div className="absolute left-7 md:hidden">
          <img src={starGra} className="relative bottom-[1100px] " alt="" />
        </div>
      </section>

      {/* section 5*/}
      <section id="advert4">
        <div className="flex m-auto pt-10 px-10 flex-col justify-center relative items-center md:flex-col md:justify-between md:gap-[2px]  lg:px-16 lg:flex-row xl:px-14 2xl:container ">
          {/* instruction */}

          {/* message */}
          <div className="relative flex flex-col py-7 justify-center items-center  md:flex md:justify-center md:items-center lg:flex lg:justify-start lg:items-start">
            <div className="md:flex md:justify-center md:items-center md:flex-col lg:justify-start lg:items-start">
              <div className="hidden lg:block">
                <img src={bigFq} className="md:max-w-[500px]" alt="" />
              </div>
              <div className=" lg:hidden pt-1 flex justify-center items-center">
                <img src={smallFq} className="w-52" alt="" />
              </div>

              <div className="pt-6 md:max-w-full xl:pr-32 lg:max-w-full  ">
                <div className="text-center mx-auto px-3 flex flex-col space-y-4 md:px-0">
                  <div>
                    <p className="text-white pb-3  leading-8 shadow-black font-montserrat md:text-left md:text-[17px]">
                      We got answers to the questions that you might want to ask
                      about{" "}
                      <span className="font-medium">
                        getlinked Hackathon 1.0
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-col space-y-6  text-left">
                    {/* questions */}
                    <div className="border-b-[1px] border-solid border-secondarColor md:text-[17px] ">
                      <p className=" text-white font-montserrat text-sm shadow-black md:text-[17px]">
                        Can i work on a project i started before the
                      </p>
                      <div className="flex justify-between items-center">
                        {" "}
                        <p className="text-white text-sm">hackathon?</p>
                        <div className="text-secondarColor text-2xl">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <div className="border-b-[1px] border-solid text-sm border-secondarColor md:text-[17px]">
                      <p className=" text-white font-montserrat text-sm text-left  shadow-black md:text-[17px]">
                        what happens if i need help during the
                      </p>
                      <div className="flex justify-between items-center">
                        {" "}
                        <p className="text-white text-sm">hackathon?</p>
                        <div className="text-secondarColor text-2xl">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <div className="border-b-[1px] border-solid text-sm border-secondarColor md:text-[17px]">
                      <p className=" text-white font-montserrat text-sm text-left  shadow-black md:text-[17px]">
                        What happens if i don't have an idea for
                      </p>
                      <div className="flex justify-between items-center">
                        {" "}
                        <p className="text-white text-sm">a project?</p>
                        <div className="text-secondarColor text-2xl">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <div className="border-b-[1px] border-solid text-sm border-secondarColor md:text-[17px]">
                      <p className=" text-white font-montserrat text-sm text-left  shadow-black md:text-[17px]">
                        Can i join a team of do i have to come
                      </p>
                      <div className="flex justify-between items-center">
                        {" "}
                        <p className="text-white text-sm">with one?</p>
                        <div className="text-secondarColor text-2xl">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>

                    <div className="border-b-[1px] border-solid text-sm border-secondarColor md:text-[17px]">
                      <p className=" text-white font-montserrat text-sm text-left  shadow-black md:text-[17px]">
                        What happenes after the hackathon
                      </p>
                      <div className="flex justify-between items-center">
                        {" "}
                        <p className="text-white text-sm ">ends?</p>
                        <div className="text-secondarColor text-2xl">
                          <a href="#">+</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative pt-10 pb-2 lg:w-[45%] flex flex-col">
            <div className="flex gap-10a justify-center items-center">
              <div className="absolute left-6 top-8 w-8  lg:left-12">
                <img src={smallQuestionMark} alt="" />
              </div>
              <div className="absolute left-24  -top-0.5 w-10  lg:left-36">
                <img src={centerQuestionMark} alt="" />
              </div>
              <div className="relative -right-10 w-6">
                <img src={smallQuestionMark} alt="" />
              </div>
            </div>
            <div className=" md:w-[600px] lg:w-full 2xl:w-full">
              <img src={c_work} className="lg:w-[100%] xl:w-full" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section 6 */}
      <section id="timeline " className="pt-10">
        <div className="flex flex-col justify-center items-center px-6 space-x-5 py-5 lg:items-center lg:justify-center ">
          {/* Timeline message */}
          <div className="flex flex-col items-center justify-center space-y-4 relative">
            <div className="lg:hidden">
              <img
                src={timelineMessage}
                alt=""
                className="w-[120px] md:w-[150px]"
              />
            </div>
            <div>
              <p className="montserrat text-center pb-10 text-white text-sm shadow-black leading-8 md:text-[17px] lg:absolute lg:w-[500px] lg:top-14 lg:-right-[275px]">
                {" "}
                Here is the breakdown of the time we anticipate using for the
                upcoming event.
              </p>
            </div>
          </div>

          {/* second item small screen */}
          <div className="flex justify-between lg:hidden pt-10">
            <div className="flex flex-col space-y-14 md:text-[17px]">
              <div className="relative flex flex-row ">
                <div className=" mr-4">
                  <div className="h-[4px] bg-secondarColor w-28 rotate-90 absolute -left-11 top-12"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-28 ">
                    1
                  </div>
                </div>

                <div className="">
                  <div className="flex flex-col gap-2 font-montserrat md:text-[17px] ">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Hackathon Announcement
                    </p>
                    <p className="text-white shadow-black text-sm leading-6 md:text-[17px] md:leading-7 md:pb-4">
                      the getlinked tech hackathon 1.0 is formally announced to
                      the general public and teams begin to get ready to
                      register
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row">
                <div className=" mr-4">
                  <div className="h-[4px] bg-secondarColor w-28 rotate-90 absolute -left-11 top-12"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-28 ">
                    2
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 font-montserrat">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Teams Registration begins
                    </p>
                    <p className="text-white shadow-black text-[15px] leading-6 md:text-[17px] md:pb-5">
                      Interested teams can now show their interest in the
                      getlinked tech hackathon 1.0 2023 by procceding to
                      register
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row ">
                <div className=" mr-4">
                  <div className="h-[4px] bg-secondarColor w-28 rotate-90 absolute -left-11 top-12"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-28 ">
                    3
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 font-montserrat">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Teams Registration ends
                    </p>
                    <p className="text-white shadow-black text-[15px] leading-6 pb-6 md:text-[17px] md:pb-12">
                      Interested particpants are no longer Allowed to register
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row ">
                <div className=" mr-4 ">
                  <div className="h-[4px] bg-secondarColor w-36 rotate-90 absolute -left-[60px] top-16"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-36 ">
                    4
                  </div>
                </div>

                <div>
                  <div className="flex flex-col gap-2 font-montserrat">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Annoucement of the accepted teams and ideas
                    </p>
                    <p className="text-white shadow-black text-[15px] pb-2 leading-6 md:text-[17px] md:pb-14 md:pt-5">
                      All teams whom idea has been acceq into getlinked tech
                      hackathon 1.0 2023 are formally announced
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row ">
                <div className=" mr-4 ">
                  <div className="h-[4px] bg-secondarColor w-36 rotate-90 absolute -left-[60px] top-16"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-36 ">
                    5
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 font-montserrat">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Getlinked Hackathon 1.0 officially Begins
                    </p>
                    <p className="text-white shadow-black text-[15px] leading-6 pb-2 md:text-[17px] md:pt-5">
                      Accepted teams can now procceed to build their ground
                      breaking skill driven solutons
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-row pt-5 ">
                <div className=" mr-4 pt-4">
                  <div className="h-[4px] bg-secondarColor w-28 rotate-90 absolute -left-11 top-12 mt-5"></div>
                  <div className="bg-secondarColor p5 rounded-full text-white text-center w-6 relative top-28 ">
                    6
                  </div>
                </div>
                <div>
                  <div className="flex flex-col gap-2 font-montserrat">
                    <p className="font-medium text-secondarColor font-montserrat ">
                      {" "}
                      Demo Day
                    </p>
                    <p className="text-white shadow-black text-[15px] leading-6 md:text-[17px] md:pb-5">
                      Teams ge opportunity to pitch their projects to judges.
                      the winner of the hackathon will also be announced on thid
                      day
                    </p>
                    <p className="font-medium text-secondarColor">
                      November 18,2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* big screen timeline */}
          <div className="hidden lg:block lg:px-9">
            <div>
              <img src={bigTimeLine} alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* section 7 */}
      <section id="prizes" className="py-20 relative xl:pt-32">
        <div className="absolute top-0 left-0 hidden lg:block 2xl:hidden">
          <img src={centerpurpleflare7} className="w-[700px]" alt="" />
        </div>
        <div className="flex items-center justify-center">
          {/* small screen */}
          <div className="flex flex-col px-5 items-center gap-4 justify-center relative lg:hidden">
            <div className="absolute top-0 left-0 md:hidden">
              <img src={purpleLense7} alt="" />
            </div>
            <div>
              <img src={prizes} className=" w-32 md:w-40" alt="" />
            </div>
            <div className="text-center text-sm">
              <p className="text-white font-montserrat shadow-black md:pb-3">
                Highlight of the prizes of rewards for the winner
              </p>
              <p className="text-white font-montserrat shadow-black">
                and for the particpants
              </p>
            </div>
            <div className="pt-10 z-10">
              <img src={cup} className="md:w-96" alt="" />
            </div>
            <div className="pt-10 z-10">
              <img src={medals} className="w-96" alt="" />
            </div>
          </div>

          {/* large screen */}
          <div className="hidden lg:flex lg:flex-col justify-center items-center w-full container gap-5   relative">
            <div className="absolute top-0 left-0 hidden  2xl:block">
              <img src={centerpurpleflare7} className="w-[700px]" alt="" />
            </div>
            <div className="flex justify-end items-end w-full pr-28 2xl:pr-64">
              <div>
                <div className="pb-5">
                  <img src={prizes} className="w-36 2xl:w-40 " alt="" />
                </div>
                <div className="text-left ">
                  <p className="text-white font-montserrat shadow-black md:pb-1">
                    Highlight of the prizes of rewards for the winner
                  </p>
                  <p className="text-white font-montserrat shadow-black">
                    and for the particpants
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-center gap-6 w-full z-10 p-3">
              <div>
                <img src={cup} className="w-96 xl:w-[600px] " alt="" />
              </div>
              <div>
                <img src={medals} className="w-[500px] xl:w-[700px]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 8 */}
      <section id="policy" className="py-20 relative xl:pt-3">
        <div className="flex justify-center items-center">
          {/* small screen */}
          <div className="flex flex-col lg:hidden justify-center items-center gap-3">
            <div>
              <img src={sponsor} alt="" />
            </div>
            <div>
              <img src={partnersText} alt="" />
            </div>
            <div>
              <img src={partnersimg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
