import React from "react";
import { Form } from "react-bootstrap";
import Calender from "./Calender/Calender";

type Props = {
  onChangeDate: (year: number, month: number, day: number) => void;
};

export default function InputDate(props: Props) {
  return (
    <>
      <Form.Label>日付を選択</Form.Label>
      <Calender onChangeDate={props.onChangeDate} />
    </>
  );
}
