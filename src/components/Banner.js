import React from "react";
import Image from "../assets/2.jpg";
import { FaGithub, FaYoutube, FaDribbble, FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Typewriter from "typewriter-effect";

const Banner = () => {
  return (
    <section
      className="min-h-[85vh] lg:min-h-[75vh] flex items-center"
      id="home"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12">
          <div className="flex-[0.6_1_0%] text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-[55px] font-semibold leading-[0.8] lg:text-[70px]"
            >
              HARIKA <br />
              <span>LINGAMSETTY</span>
            </motion.h1>
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-6 text-[36px] lg:text-[40px] font-secondary font-semibold uppercase leading-[1]"
            >
              <span className="text-white mr-4 text-[30px]">I am a</span>
              <span className="text-accent">
                <Typewriter
                  options={{
                    strings: ["SOFTWARE DEVELOPER"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </motion.div>
            {/* <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </motion.p> */}
            {/* <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0"
            >
              <button className="btn btn-sm">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My portfolio
              </a>
            </motion.div> */}
            <motion.div
              variants={fadeIn("up", 0.7)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center lg:mx-0 mb-12 text-[20px] gap-x-6 max-w-max mx-auto"
            >
              <a href="https://github.com/HarikaLingamsetty">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/harika-lingamsetty-2bb9b1214/">
                <FaLinkedinIn />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="hidden lg:flex flex-1 max-w-[250px] mr-20  lg:max-w-[400px] rounded-xl lg:max-h-[300px]"
          >
            <img className="rounded-xl" src={Image} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
