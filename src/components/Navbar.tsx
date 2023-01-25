import React from "react";
import styled from "styled-components";

const navbarHeight = 50;

const Nav = styled.nav`
  width: 100%;
  height: ${navbarHeight}px;
  background-color: #2660a1;
  display: flex;
  justify-content: space-between;
`;

const NavLeft = styled.div`
  display: flex;
`;

const NavBrand = styled.span`
  line-height: ${navbarHeight}px;
  font-size: 20px;
  margin: 0 10px;
  color: #fff;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLeft>
        <NavBrand>Navbar Title</NavBrand>
      </NavLeft>
    </Nav>
  );
}
