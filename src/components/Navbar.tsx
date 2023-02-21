import React from "react";
import { Link } from "react-router-dom";
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

const NavRight = styled.div`
  display: flex;
`;

const NavLink = styled(Link)`
  line-height: ${navbarHeight}px;
  margin: 0 20px;
  color: #fff;
  text-decoration: none;
  :hover {
    color: #636363;
  }
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
        <NavBrand data-testid="nav-brand">Task Manage App</NavBrand>
      </NavLeft>
      <NavRight>
        <NavLink to="/signout" data-testid="nav-link-signout">
          ログアウト
        </NavLink>
      </NavRight>
    </Nav>
  );
}
