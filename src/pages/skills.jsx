import React, { useState } from "react";
import "../style/styleParts/skills.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../components/ChangingProgressProvider";

export default function SkillsPage() {
  const perce = "90";

  const [percentage, setPercentage] = useState(perce);

  const getValue = (e) => {
    let value = e.target.id;
    setPercentage(value);
  };

  return (
    <div className="whole-black-container  ">
      <img className="logo" src="/img/logo-black.svg" alt="logo" />

      <motion.div
        className="flex-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link className="nextpage-btn-left" to="/">
          <motion.button className="btn -btn-bg-grey arrow-right">
            <FontAwesomeIcon className="arrow-left" icon={faLongArrowAltLeft} />
          </motion.button>
        </Link>
        <motion.div className="skills-container">
          <div className="header-skills">
            <h1>Skills</h1>
            <nav className="skills">
              <span id="90" onClick={getValue}>
                figma.
              </span>
              <span id="85" onClick={getValue}>
                adobe xd.
              </span>
              <span id="60" onClick={getValue}>
                invision.
              </span>
              <span id="75" onClick={getValue}>
                framer.
              </span>
              <span id="55" onClick={getValue}>
                html.
              </span>
              <span id="60" onClick={getValue}>
                css.
              </span>
              <span id="50" onClick={getValue}>
                javascript.
              </span>
            </nav>
          </div>
          <div className="skills-indicator">
            <div className="progress-bar-container">
              <ChangingProgressProvider values={[0, percentage]}>
                {(percentage) => (
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      pathTransition:
                        percentage === 0
                          ? "none"
                          : "stroke-dashoffset 0.5s ease 0s",
                    })}
                  />
                )}
              </ChangingProgressProvider>
            </div>
          </div>
        </motion.div>
        <Link className="nextpage-btn-right" to="/works">
          <motion.button className="btn  btn-bg-grey arrow-right" animate={{}}>
            <FontAwesomeIcon
              className="arrow-right"
              icon={faLongArrowAltRight}
            />
          </motion.button>
        </Link>
      </motion.div>
      <header className="navlinks-skills">
        <nav>
          <Link to="/" className="navLinks">
            home.
          </Link>
          <Link
            to="/skills"
            className="navLinks"
            style={{
              fontWeight: "700",
              borderBottom: "5px solid #000",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            skills.
          </Link>
          <Link to="/works" className="navLinks">
            portfolio.
          </Link>
          <Link to="/contact" className="navLinks">
            contact.
          </Link>
        </nav>
      </header>
    </div>
  );
}
