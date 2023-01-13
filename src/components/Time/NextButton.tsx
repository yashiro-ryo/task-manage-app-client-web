import React from "react";
import { Button } from "react-bootstrap";
import { GrFormUp } from "react-icons/gr";

type Props = {
  cb: (e: React.MouseEvent) => void;
};

export default function NextButton(props: Props) {
  return (
    <Button variant="light" onClick={props.cb}>
      <GrFormUp />
    </Button>
  );
}
