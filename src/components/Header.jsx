import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  height: 60px;
  background: #000;
  padding: 0rem calc((100vw - 1300px) / 2);
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
  border-radius: 15px;
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NavbarLink = styled(Link)`
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  text-decoration: none;
  padding: 1rem;
`;

const header = () => {
  return (
    <Navbar>
      <NavItems>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="/skills">Skills</NavbarLink>
        <NavbarLink to="/works">Works</NavbarLink>
        <NavbarLink to="/contact">Contact</NavbarLink>
      </NavItems>
    </Navbar>
  );
};

export default header;
