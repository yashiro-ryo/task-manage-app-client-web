import React from "react";
import { Form } from "react-bootstrap";

type Props = {
  formLabel: string;
  options: Array<Option>;
  onChange: (e: any) => void;
};

type Option = {
  value: number | string;
  label: string;
};

export default function InputOptions(props: Props) {
  return (
    <>
      <Form.Label>{props.formLabel}</Form.Label>
      <Form.Select onChange={props.onChange}>
        {props.options.map((option: Option, index: number) => {
          return (
            <option value={option.value} key={index}>
              {option.label}
            </option>
          );
        })}
      </Form.Select>
    </>
  );
}
