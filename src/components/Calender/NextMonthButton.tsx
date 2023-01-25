import React from "react";
import { GrFormNext } from "react-icons/gr";
import { Button } from "react-bootstrap";

type Props = {
  setNextMonth: () => void;
};

export default function NextMonthButton(props: Props) {
  return (
    <Button variant="light" onClick={() => props.setNextMonth()}>
      <GrFormNext />
    </Button>
  );
}
