import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  formLabel: string;
  formType: "text" | "email" | "password" | "textarea";
  placeHolder: string;
  value?: any;
  onChange?: (e: any) => void;
};

export default function InputForm(props: Props) {
  return (
    <>
      <Form.Label>{props.formLabel}</Form.Label>
      <Form.Control
        type={props.formType}
        placeholder={props.placeHolder}
        onChange={props.onChange}
        value={props.value}
      />
    </>
  );
}
