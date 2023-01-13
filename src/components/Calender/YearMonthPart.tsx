import React from "react";

type Props = {
  year: number;
  month: number;
};

export default function YearMonthPart(props: Props) {
  return (
    <>
      <p>
        {props.year}年{props.month}月
      </p>
    </>
  );
}
