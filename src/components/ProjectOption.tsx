import React from "react";
import { Dropdown } from "react-bootstrap";
import { AiOutlineMore } from "react-icons/ai";

export default function ProjectOption() {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        <AiOutlineMore />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#">プロジェクトの削除</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
