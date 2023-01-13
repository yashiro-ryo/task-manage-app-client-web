import React from "react";
import { Button } from "react-bootstrap";
import { GrFormDown } from "react-icons/gr";

type Props = {
  cb: (e: React.MouseEvent) => void;
};

export default function PrevButton(props: Props) {
  return (
    <Button variant="light" onClick={props.cb}>
      <GrFormDown />
    </Button>
  );
}
