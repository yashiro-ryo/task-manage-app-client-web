import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: none;
  width: 45px;
`;

export default function DeleteButton() {
  return (
    <>
      <OverlayTrigger
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>タスク削除</Tooltip>}
      >
        <StyledButton variant="light">
          <AiOutlineDelete />
        </StyledButton>
      </OverlayTrigger>
    </>
  );
}
