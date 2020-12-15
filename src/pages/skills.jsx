import React from "react";
import "../style/styleParts/skills.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

export default function skillsPage() {
  return (
    <div className="whole-black-container  ">
      <img className="logo" src="/img/logo-black.svg" alt="logo" />

      <div className="flex-container">
        <Link to="/">
          <motion.button className="btn -btn-bg-grey arrow-right">
            <FontAwesomeIcon className="arrow-left" icon={faLongArrowAltLeft} />
          </motion.button>
        </Link>
        <motion.div className="skills-container">
          <div className="header-skills">
            <h1>Skills</h1>
            <nav className="skills">
              <span>figma.</span>
              <span>adobe xd.</span>
              <span>invision.</span>
              <span>framer.</span>
              <span>html.</span>
              <span>css.</span>
              <span>javascript.</span>
            </nav>
          </div>
          <div className="skills-indicator">
            <div className="inner-circle">
              <span>diiiick</span>
            </div>
          </div>
        </motion.div>
        <Link to="/works">
          <motion.button className="btn  btn-bg-grey arrow-right" animate={{}}>
            <FontAwesomeIcon
              className="arrow-right"
              icon={faLongArrowAltRight}
            />
          </motion.button>
        </Link>
      </div>
    </div>
  );
}
