import React, { useState } from "react";
import styled, { css } from "styled-components";

type Props = {
  onDrop: (e: React.MouseEvent) => void;
  dropZoneId: number;
  taskGroupId: number;
};

const StyledDropZone = styled.div<{ isDragOver: boolean }>`
  width: 100%;
  height: 30px;
  margin-top: -10px;
  margin-bottom: -10px;
  transition: all 300ms 0s ease;
  ${(props) =>
    props.isDragOver
      ? css`
          width: 100%;
          height: 15px;
          margin: 5px 0;
          background-color: #e6e6e6;
        `
      : ""}
`;

export default function DropZone(props: Props) {
  const [isDragOver, setDragOver] = useState<boolean>(false);
  return (
    <StyledDropZone
      onDrop={(e: React.MouseEvent) => {
        props.onDrop(e);
        setDragOver(false);
      }}
      onDragEnter={() => setDragOver(true)}
      onDragLeave={() => setDragOver(false)}
      isDragOver={isDragOver}
      data-drop-zone-id={props.dropZoneId}
      data-task-group-id={props.taskGroupId}
    />
  );
}
