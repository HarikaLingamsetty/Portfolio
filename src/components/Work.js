import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

import Img1 from "../assets/picturesque.png";
import Img2 from "../assets/FinFocus.png";
import Img3 from "../assets/Connect.png";

const Work = () => {
  return (
    <section className="section" id="work">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-5">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1  flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            <div className="flex-1 mt-16">
              <div className="lg:ml-12">
                <h2 className="h2 font-semibold leading-tight text-gradient ">
                  My Work
                </h2>
              </div>
            </div>
            <div className="group w-[460px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500 h-[220px]"
                src={Img1}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient">PICTURESQUE</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-xl text-white ">Photography blogging site</span>
              </div>
              <div className="absolute -bottom-full right-2 group-hover:top-3 transition-all duration-500 z-50 flex flex-1">
                <a href="https://github.com/HarikaLingamsetty/Picturesque" className="btn w-6 h-6 mb-[10px] flex justify-center items-center">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group w-[460px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient">CONNECT</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-xl text-white ">Social media application</span>
              </div>
              <div className="absolute -bottom-full right-2 group-hover:top-3 transition-all duration-500 z-50 flex flex-1">
                <a href="https://github.com/HarikaLingamsetty/Connect" className="btn w-6 h-6 mb-[10px] flex justify-center items-center">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
            <div className="group w-[460px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient">FINFOCUS</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-xl text-white ">Financial Dashboard</span>
              </div>
              <div className="absolute -bottom-full right-2 group-hover:top-3 transition-all duration-500 z-50 flex flex-1">
                <a href="https://github.com/HarikaLingamsetty/FinFocus" className="btn w-6 h-6 mb-[10px] flex justify-center items-center">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div>
          {/* <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 flex flex-col gap-y-10"
          >
            <div className="group w-[320px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50">
                <span className="text-gradient">PICTURESQUE</span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-700 z-50">
                <span className="text-xl text-white ">Photography blogging site</span>
              </div>
              <div className="absolute -bottom-full right-2 group-hover:top-3 transition-all duration-500 z-50 flex flex-1">
                <a href="#" className="btn w-6 h-6 mb-[10px] flex justify-center items-center">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
            <div className="group w-[320px] relative overflow-hidden border-2 border-white/50 rounded-xl">
              <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 "></div>
              <img
                className="group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt=""
              />
              <div className="absolute -bottom-full left-12 group-hover:bottom-7 transition-all duration-500 z-50">
                <span className="text-gradient">AUTOMATIC SPEECH RECOGNITION SYSTEM</span>
              </div>
              <div className="absolute -bottom-full right-2 group-hover:top-3 transition-all duration-500 z-50 flex flex-1">
                <a href="#" className="btn w-6 h-6 mb-[10px] flex justify-center items-center">
                  <BsArrowUpRight />
                </a>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Work;
