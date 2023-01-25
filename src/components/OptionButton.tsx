import React from "react";
import { AiOutlineMore } from "react-icons/ai";
import styled from "styled-components";
import { Button } from "react-bootstrap";

const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: none;
  width: 45px;
`;

export default function OptionButton() {
  return (
    <StyledButton variant="light">
      <AiOutlineMore />
    </StyledButton>
  );
}
