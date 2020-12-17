import React from "react";
import "../style/styleParts/work.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Card } from "react-bootstrap";

export default function SkillsPage() {
  return (
    <div className="whole-black-container  ">
      <img className="logo" src="/img/logo-black.svg" alt="logo" />

      <motion.div
        className="flex-container"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
      >
        <Link className="nextpage-btn-left" to="/skills">
          <motion.button className="btn -btn-bg-grey arrow-right">
            <FontAwesomeIcon className="arrow-left" icon={faLongArrowAltLeft} />
          </motion.button>
        </Link>
        <motion.div className="skills-container">
          <div className="header-skills">
            <h1
              className="portfolio"
              style={{
                marginRight: "80px",
              }}
            >
              Portfolio.
            </h1>
            <p style={{ margin: "0", marginBottom: "25px" }}>
              I put my heart and soul in these projects. Now that you're on this
              page, feel free to explore.
            </p>
          </div>
          <div className="works-container">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://congo.fm/"
              className="card-work"
            >
              <Card style={{ width: "8rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                  }}
                  variant="top"
                  src="https://5.imimg.com/data5/XZ/JH/MP/SELLER-35997839/webpage-design-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    Progrecity
                  </Card.Title>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    2020
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://congo.fm/"
              className="card-work"
            >
              <Card style={{ width: "8rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                  }}
                  variant="top"
                  src="https://5.imimg.com/data5/XZ/JH/MP/SELLER-35997839/webpage-design-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    Progrecity
                  </Card.Title>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    2020
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://congo.fm/"
              className="card-work"
            >
              <Card style={{ width: "8rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                  }}
                  variant="top"
                  src="https://5.imimg.com/data5/XZ/JH/MP/SELLER-35997839/webpage-design-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    Progrecity
                  </Card.Title>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    2020
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://congo.fm/"
              className="card-work"
            >
              <Card style={{ width: "8rem" }}>
                <Card.Img
                  style={{
                    width: "100%",
                  }}
                  variant="top"
                  src="https://5.imimg.com/data5/XZ/JH/MP/SELLER-35997839/webpage-design-500x500.jpg"
                />
                <Card.Body>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    Progrecity
                  </Card.Title>
                  <Card.Title
                    style={{
                      color: "#f4f4f4",
                      textAlign: "center",
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "0.8rem",
                    }}
                  >
                    2020
                  </Card.Title>
                </Card.Body>
              </Card>
            </a>
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
      <header className="navlinks-skills" style={{ marginTop: "62px" }}>
        <nav>
          <Link to="/" className="navLinks">
            home.
          </Link>
          <Link to="/skills" className="navLinks">
            skills.
          </Link>
          <Link
            to="/works"
            className="navLinks"
            style={{
              fontWeight: "700",
              borderBottom: "5px solid #000",
              display: "inline-block",
              paddingBottom: "10px",
            }}
          >
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
