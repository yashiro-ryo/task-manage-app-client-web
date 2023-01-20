import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import { AiOutlineDelete } from "react-icons/ai";
import styled from "styled-components";

const StyledButton = styled(Button)`
  background-color: #ffffff;
  border: none;
  width: 45px;
`;

type Props = {
  onClick: (e: React.MouseEvent) => void;
};

export default function DeleteButton(props: Props) {
  return (
    <>
      <OverlayTrigger
        placement={"bottom"}
        overlay={<Tooltip id={`tooltip-bottom`}>タスク削除</Tooltip>}
      >
        <StyledButton variant="light" onClick={props.onClick}>
          <AiOutlineDelete />
        </StyledButton>
      </OverlayTrigger>
    </>
  );
}
