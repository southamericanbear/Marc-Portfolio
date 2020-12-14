import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Btn = styled.button`
  font-size: clamp(0.8rem, 4vw, 1rem);
  padding: 0.8rem 2rem;
  color: #000;
  background: #ffb347;
  background: linear-gradient(to right, #ffcc33, #ffb347);
  border: none;
  border-radius: 4px;
  cursor: pointer;
  outline: none;
`;

export default function homePage() {
  return (
    <div>
      <div className="home-container">
        <div className="title-and-info-container">
          <h1>hello dear</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugit ex optio dolorum necessitatibus adipisci placeat voluptates
            porro! Soluta magnam quidem, nesciunt vel illo unde.
          </p>
        </div>
        <Link to="/skills">
          <Btn className="btn"> NEXT </Btn>
        </Link>
      </div>
      <Header />
    </div>
  );
}
