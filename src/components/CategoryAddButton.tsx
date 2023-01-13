import React from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";

type Props = {
  cb: (e: any) => void;
};

const StyledButton = styled(Button)`
  width: 120px;
  height: 120px;
`;

export default function CategoryAddButton(props: Props) {
  return (
    <StyledButton variant="light" onClick={props.cb}>
      カテゴリー追加
    </StyledButton>
  );
}
