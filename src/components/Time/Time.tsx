import React, { useState } from "react";
import { Popover, Form, Button, Overlay } from "react-bootstrap";
import TimeBody from "./TimeBody";
import styled from "styled-components";

const StyledPopover = styled(Popover)`
  width: 120px;
`;

type Props = {
  onChangeTime: (hour: number, min: number) => void;
};

export default function Time(props: Props) {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const handleClick = (e: any) => {
    setShow(!show);
    setTarget(e.target);
  };
  const handleClose = () => {
    setShow(false);
    setTarget(null);
  };
  return (
    <>
      <Overlay show={show} target={target} placement="bottom">
        <StyledPopover id="popover-basic">
          <StyledPopover.Body>
            <TimeBody onChangeTime={props.onChangeTime} />
            <Button variant="primary" onClick={handleClose}>
              決定
            </Button>
          </StyledPopover.Body>
        </StyledPopover>
      </Overlay>
      <Form.Control type="time" onClick={handleClick} />
    </>
  );
}
