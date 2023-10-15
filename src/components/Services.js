import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Cube from "../canvas/cube";

const Services = () => {
  return (
    <section className="section" id="services">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            // className="flex-1 lg:bg-services bg-[length:200px_300px] lg:bg-bottom bg-no-repeat mix-blend-lighten mb-2 lg:mb-0"
            className="flex-1 mb-2 lg:mb-0"
          >
            <h2 className="h2 text-gradient mb-2">More about me</h2>
            <div className="mb-2 ml-[-60px] w-[500px] h-[300px]">
              <Cube />
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <div className="border-b border-white/20 h-[150px] mb-[10px] flex">
                <div className="max-w-[476px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                    EDUCATION
                  </h4>
                  <p className="font-secondary leading-tight">
                    INDIAN INSTITUTE OF INFORMATION TECHNOLOGY, SRI CITY
                  </p>
                  <p>B. Tech in Computer Science Engineering (2024)</p>
                  <p></p>
                  <p>CGPA: 8.79 - till 6th semester</p>
                </div>
              </div>
              <div className="border-b border-white/20 h-[250px] mb-[10px] flex">
                <div className="max-w-[576px]">
                  <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-2">
                    EXPERIENCE
                  </h4>
                  <div className="border-b border-white/20 h-[60px] mb-[10px] flex">
                    <div className="max-w-[476px]">
                      <p className="font-secondary leading-tight">
                        Technical Intern at Examtrakker
                      </p>
                      <p>(Aug'23 - present)</p>
                    </div>
                  </div>
                  <div className="border-b border-white/20 h-[60px] mb-[10px] flex">
                    <div className="max-w-[576px]">
                      <p className="font-secondary leading-tight">
                        Freelancer: currently working on a frontend project for
                        an overseas consultancy
                      </p>
                    </div>
                  </div>

                  <div className="max-w-[476px]">
                    <p className="font-secondary leading-tight">
                      Machine Learning Educator at CODERSARTS
                      
                    </p>
                    <p>(Dec'22 - Sep'23)</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
