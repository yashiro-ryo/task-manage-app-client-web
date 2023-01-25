import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlineMore } from "react-icons/ai";
import styled from "styled-components";

const StyledDropdownToggle = styled(Dropdown.Toggle)`
  background-color: #ffffff;
  border: none;
`;

type Props = {
  showModal: (isVisible: boolean) => void;
};

export default function CardOption(props: Props) {
  return (
    <Dropdown>
      <StyledDropdownToggle variant="light" id="dropdown-basic">
        <AiOutlineMore />
      </StyledDropdownToggle>

      <Dropdown.Menu>
        {/* TODO リンクをnext linkに修正する */}
        <Dropdown.Item href="#" onClick={() => props.showModal(true)}>
          タスクグループ削除
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
