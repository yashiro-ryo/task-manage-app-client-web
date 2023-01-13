import React from "react";
import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #2660a1;
  height: 50px;
  width: 100%;
`;

const NavbarTitle = styled.span`
  line-height: 50px;
  margin-left: 20px;
  font-size: 20px;
  color: #fff;
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <NavbarTitle>Navbar Title</NavbarTitle>
    </StyledNavbar>
  );
}
