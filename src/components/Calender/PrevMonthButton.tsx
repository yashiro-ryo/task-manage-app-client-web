import React from "react";
import { GrFormPrevious } from "react-icons/gr";
import { Button } from "react-bootstrap";

type Props = {
  setPrevMonth: () => void;
};

export default function PrevMonthButton(props: Props) {
  return (
    <Button variant="light" onClick={() => props.setPrevMonth()}>
      <GrFormPrevious />
    </Button>
  );
}
