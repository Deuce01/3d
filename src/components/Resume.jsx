import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Resume = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My qualifications</p>
        <h2 className={styles.sectionHeadText}>Resume.</h2>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 flex flex-col gap-8"
      >
        <div className="border-l-4 border-violet-500 pl-5">
          <h3 className="text-white text-[24px] font-bold">Education</h3>
          <div className="mt-2 mb-6">
            <h4 className="text-white text-[20px] font-semibold">BSc Software Development</h4>
            <p className="text-secondary text-[16px]">KCA University</p>
            <p className="text-secondary text-[16px]">September 2021 - December 2025</p>
          </div>
        </div>

        <div className="border-l-4 border-violet-500 pl-5">
          <h3 className="text-white text-[24px] font-bold">Certifications</h3>
          <ul className="mt-2 mb-6 list-disc pl-5 text-secondary text-[16px]">
            <li>Introduction to Career Skills in Data Analytics</li>
            <li>Introduction to Cybersecurity</li>
            <li>Learning Data Analytics: 1 Foundations</li>
            <li>Learning Data Analytics Part 2: Extending and Applying Core Knowledge</li>
            <li>Career Essentials in Data Analysis by Microsoft and LinkedIn</li>
          </ul>
        </div>

        <div className="border-l-4 border-violet-500 pl-5">
          <h3 className="text-white text-[24px] font-bold">Skills</h3>
          <div className="mt-2 mb-6">
            <h4 className="text-white text-[20px] font-semibold">Programming Languages</h4>
            <p className="text-secondary text-[16px]">Python, HTML/CSS, JavaScript</p>
            
            <h4 className="text-white text-[20px] font-semibold mt-4">Frameworks & Libraries</h4>
            <p className="text-secondary text-[16px]">Django, Flask, Scikit-learn, Pandas, NLTK</p>
            
            <h4 className="text-white text-[20px] font-semibold mt-4">Databases</h4>
            <p className="text-secondary text-[16px]">PostgreSQL</p>
            
            <h4 className="text-white text-[20px] font-semibold mt-4">Tools</h4>
            <p className="text-secondary text-[16px]">Git, Docker, Heroku, Power BI</p>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Download Full Resume
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Resume, "resume");