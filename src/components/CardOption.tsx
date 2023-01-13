import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlineMore } from "react-icons/ai";
import styled from "styled-components";

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #ffffff;
  border: none;
`;

export default function CardOption() {
  return (
    <Dropdown>
      <StyledDropdownToggle variant="light" id="dropdown-basic">
        <AiOutlineMore />
      </StyledDropdownToggle>

      <Dropdown.Menu>
        {/* TODO リンクをnext linkに修正する */}
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
