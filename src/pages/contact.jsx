import React from "react";
import "../style/styleParts/contact.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { Form } from "react-bootstrap";

export default function SkillsPage() {
  return (
    <div className="whole-grey-container  ">
      <img className="logo" src="/img/logo-black.svg" alt="logo" />

      <motion.div
        className="flex-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link className="nextpage-btn-left" to="/works">
          <motion.button className="btn -btn-bg-grey arrow-right">
            <FontAwesomeIcon className="arrow-left" icon={faLongArrowAltLeft} />
          </motion.button>
        </Link>
        <motion.div className="skills-container">
          <div className="header-skills">
            <h1
              className="portfolio"
              style={{
                color: "#000",
                marginRight: "80px",
              }}
            >
              contact.
            </h1>
            <p
              style={{
                color: "#000",
                fontWeight: "600",
                margin: "0",
                fontSize: ".8rem",
                height: "40px",
              }}
            >
              <FontAwesomeIcon icon={faEnvelope} /> <b /> <span>Email:</span>{" "}
              <span style={{ marginRight: "50px", fontWeight: "500" }}>
                marcbanchsux@gmail.com
              </span>
              <FontAwesomeIcon icon={faMapMarkerAlt} /> <b />{" "}
              <span>Location:</span>{" "}
              <span style={{ fontWeight: "500" }}>Barcelona, Spain</span>
            </p>
          </div>
          <div className="contat-form-container">
            <Form
              style={{
                background: "black",
                borderRadius: "25px",
                display: "flex",
                flexDirection: "column",
                padding: "10px",
              }}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} placeholder="Message" />
              </Form.Group>
              <button className="contact-btn">send</button>
            </Form>
          </div>
        </motion.div>
        <Link className="nextpage-btn-right" to="/contact">
          <motion.button className="btn  btn-bg-grey arrow-right" animate={{}}>
            <FontAwesomeIcon
              className="arrow-right"
              icon={faLongArrowAltRight}
            />
          </motion.button>
        </Link>
      </motion.div>
      <header className="navlinks-skills" style={{ marginTop: "64px" }}>
        <nav>
          <Link to="/" className="navLinks">
            home.
          </Link>
          <Link to="/skills" className="navLinks">
            skills.
          </Link>
          <Link to="/works" className="navLinks">
            portfolio.
          </Link>
          <Link
            to="/contact"
            className="navLinks"
            style={{
              fontWeight: "700",
              borderBottom: "5px solid #000",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
            contact.
          </Link>
        </nav>
      </header>
    </div>
  );
}
