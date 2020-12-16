import React from "react";
import "../style/styleParts/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

export default function homePage() {
  return (
    <div className="whole-grey-container">
      <img className="logo" src="/img/logo-black.svg" alt="logo" />
      <motion.div
        className="home-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className="inner-container">
          <div className="social-media-and-info-container">
            <div className="socialmedia-icons-container">
              <Link className="social-link">
                {" "}
                <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
              </Link>
              <Link className="social-link">
                {" "}
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </Link>
              <Link className="social-link">
                <FontAwesomeIcon className="icon" icon={faBasketballBall} />
              </Link>
              <Link className="social-link">
                <FontAwesomeIcon className="icon" icon={faBehance} />
              </Link>
            </div>
            <div className="title-and-info-container">
              <h1>I'm marc banchs.</h1>
              <h3>UX/UI designer, maker, dreamer</h3>
              <p>
                I'm spending my time cooking Sushi, and designing cool stuff at
                Zomato. When I'm not designing, I love to write code for
                designers and developers. Please don't explore this portfolio as
                it contains some of my best works.
              </p>
              <div className="info-btn-container">
                <Link>
                  <motion.button className="info-btn">
                    download cv.
                  </motion.button>
                </Link>
                <Link to="/contact">
                  <motion.button className="info-btn">
                    contact me.
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
          <Link to="/skills" className="btn-container">
            <motion.button className="btn btn-bg-grey arrow-right" animate={{}}>
              <FontAwesomeIcon
                className="arrow-right"
                icon={faLongArrowAltRight}
              />
            </motion.button>
          </Link>
        </div>
      </motion.div>
      <header>
        <nav>
          <Link
            to="/"
            className="navLinks"
            style={{
              fontWeight: "700",
              borderBottom: "5px solid #000",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            Home.
          </Link>
          <Link to="/skills" className="navLinks">
            Skills.
          </Link>
          <Link to="/works" className="navLinks">
            Works.
          </Link>
          <Link to="/contact" className="navLinks">
            Contact.
          </Link>
        </nav>
      </header>
    </div>
  );
}
