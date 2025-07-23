import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
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
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I am a driven software developer with over two years of hands-on experience in Python programming, 
        web application development, and data analysis. Currently pursuing a Bachelor of Science in Software 
        Development at KCA University (September 2021 - December 2025), I combine academic knowledge with practical experience to build real-world solutions.
        My technical foundation includes Python, Django, Flask, REST APIs, PostgreSQL, and data tools like 
        Scikit-learn, Pandas, and Power BI. I thrive in collaborative environments and am committed to 
        continuous learning and delivering value through code.
      </motion.p>

      <motion.div variants={fadeIn("", "", 0.2, 1)} className="mt-8 text-secondary text-[17px] max-w-3xl leading-[30px]">
        <h3 className="text-white text-[20px] font-bold mb-2">Certifications:</h3>
        <ul className="list-disc pl-5">
          <li>Introduction to Career Skills in Data Analytics</li>
          <li>Introduction to Cybersecurity</li>
          <li>Learning Data Analytics: 1 Foundations</li>
          <li>Learning Data Analytics Part 2: Extending and Applying Core Knowledge</li>
          <li>Career Essentials in Data Analysis by Microsoft and LinkedIn</li>
        </ul>
      </motion.div>

      <div className="mt-12 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
