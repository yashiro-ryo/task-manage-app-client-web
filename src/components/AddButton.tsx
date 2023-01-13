import React from "react";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import styled from "styled-components";
import { AiOutlinePlus } from "react-icons/ai";

type Props = {
  setTaskEditorVisible: (isVisible: boolean) => void;
};

const StyledButton = styled(Button)`
  background-color: #ffffff;
  color: #636363;
  border: none;
  width: 45px;
`;

export default function AddButton(props: Props) {
  const onClickTaskAddButton = () => {
    props.setTaskEditorVisible(true);
  };
  return (
    <OverlayTrigger
      placement={"bottom"}
      overlay={<Tooltip id={`tooltip-bottom`}>タスク追加</Tooltip>}
    >
      <StyledButton variant="light" onClick={onClickTaskAddButton}>
        <AiOutlinePlus />
      </StyledButton>
    </OverlayTrigger>
  );
}
