import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-center lg:gap-x-200 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <div className="flex gap-x-6 lg:gap-x-10 mb-12">
              {/* <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={1} duration={3} /> : null}
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Year of <br />
                  Experience
                </div>
              </div> */}
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={5} duration={7} /> : null}+
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Projects <br />
                  Completed
                </div>
              </div>
              <div>
                <div className="text-[40px] font-tertiary text-gradient mb-2">
                  {inView ? <CountUp start={0} end={20} duration={3} /> : null}
                  +
                </div>
                <div className="font-primary text-sm tracking-[2px]">
                  Technical
                  <br />
                  Skills
                </div>
              </div>
            </div>
            {/* <div className="flex gap-x-8 items-center">
              <button className="btn btn-lg">Contact me</button>
              <a href="#" className="text-gradient btn-link">
                My Portfolio
              </a>
            </div> */}
            <div className="flex text-gradient font-bold text-[25px]">
              Let's create exceptional web experiences TOGETHER!
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1"
          >
            <h2 className="h2 font-semibold text-accent">About me.</h2>
            <p className="mb-6">
              Hey, I'm Harika Lingamsetty, a full-stack web developer. With a
              love for both front-end aesthetics and back-end functionality, I
              enjoy crafting seamless user experiences and building robust web
              applications. I'm always curious to learn more when it comes to
              new technologies and creative coding. Outside of coding, I'm a
              foodie with a passion for cooking exotic dishes.
            </p>
            <div className="flex gap-x-8 items-center">
              <a href="https://drive.google.com/file/d/193x2-PkF_wuQYzGequZKgwKF6PG7nJno/view?usp=drive_link" className="text-gradient btn-link">
                Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
