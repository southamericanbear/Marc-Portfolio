import React from "react";
import "../style/styleParts/work.css";
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

export default function workPage() {
  return (
    <div>
      <div className="work-container">
        <div className="title-and-info-container">
          <h1>hello work</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
            fugit ex optio dolorum necessitatibus adipisci placeat voluptates
            porro! Soluta magnam quidem, nesciunt vel illo unde.
          </p>
        </div>
        <Link to="/skills">
          <Btn>prev</Btn>
        </Link>
        <Link to="/contact">
          <Btn>next</Btn>
        </Link>
      </div>
    </div>
  );
}
