import React from "react";
import { Toast } from "react-bootstrap";
import styled from "styled-components";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  text: string;
  type: "light" | "danger";
};

const StyledToast = styled(Toast)`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

export default function ConnectionStatusToast(props: Props) {
  return (
    <StyledToast
      onClose={() => props.setVisible(false)}
      show={props.isVisible}
      bg={props.type}
      delay={5000}
      autohide
    >
      <Toast.Body>{props.text}</Toast.Body>
    </StyledToast>
  );
}
