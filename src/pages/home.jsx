import React from "react";
import "../style/styleParts/home.css";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBasketballBall } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faBehance } from "@fortawesome/free-brands-svg-icons";

export default function homePage() {
  return (
    <div>
      <motion.div
        className="home-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <div className="socialmedia-icons-container">
          <FontAwesomeIcon icon={faLinkedinIn} />
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faBasketballBall} />
          <FontAwesomeIcon icon={faBehance} />
        </div>
        <div className="title-and-info-container">
          <h1>hello dear</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugit ex optio dolorum necessitatibus adipisci placeat voluptates
            porro! Soluta magnam quidem, nesciunt vel illo unde.
          </p>
        </div>
        <Link to="/skills">
          <motion.button className="btn" animate={{}}>
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.button>
        </Link>
      </motion.div>
      <Header />
    </div>
  );
}
