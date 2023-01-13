import React from "react";
import { Form } from "react-bootstrap";
import Time from "./Time/Time";

type Props = {
  onChangeTime: (hour: number, min: number) => void;
};

export default function InputForm(props: Props) {
  return (
    <>
      <Form.Label>時刻を設定</Form.Label>
      <Time onChangeTime={props.onChangeTime} />
    </>
  );
}
