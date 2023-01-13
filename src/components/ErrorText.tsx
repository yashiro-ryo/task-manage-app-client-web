import React from "react";
import styled from "styled-components";

type Props = {
  isVisible: boolean;
  errorText: string;
};

// styled component
const StyledErrorText = styled.p`
  color: #ff0000;
`;

export default function ErrorText(props: Props) {
  return (
    <>
      {props.isVisible ? (
        <StyledErrorText>{props.errorText}</StyledErrorText>
      ) : (
        ""
      )}
    </>
  );
}
