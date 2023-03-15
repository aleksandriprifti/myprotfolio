import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../style";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p variants={fadeIn("", "", 0.1, 0.1)}>
        I am an Experienced Project Manager with a Master’s degree in
        Information Technology and Entrepreneurship, also I am a CAPM (PMI) and
        Scrum Master certified practitioner with experience in IT project
        planning and management. <br />
        My career started as a software developer and moved up into leading
        several IT projects and managing distributed teams, in different
        industries such as finance and banking, health, etc. Over the last years
        I have gathered good understanding of programming languages such as
        JavaScript, React.js, C# and .NET Core. <br />
        During my career, I have covered several positions such as Developer,
        Scrum Master, Project Manager. I have assisted in developing technical
        and user documentation for systems including test plans, test case and
        extensively assisted users in UATs ensuring in this way sustainability
        of the services/products provided. I am constantly observing market
        needs, technology trends and advising management on strategic ICT
        investments.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
