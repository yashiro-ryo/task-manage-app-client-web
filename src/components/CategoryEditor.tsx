import React, { useEffect, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import styled from "styled-components";
import InputForm from "./InputForm";
import Log from "../etc/log";
import { socketIO } from "../socket/socket";
import { useParams } from "react-router";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

const StyledModal = styled(Modal)`
  color: #636363;
`;

const StyledErrorMsg = styled.p`
  color: #ff0000;
`;

export default function CategoryEditor(props: Props) {
  const [categoryName, setCategoryName] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleClose = () => {
    props.setVisible(false);
  };
  const param = useParams();

  const initModal = () => {
    setCategoryName("");
    setErrorMsg("");
  };

  const onChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    Log.v(e.target.value);
    setCategoryName(e.target.value);
  };

  const validateCategoryName = (categoryName: string): boolean => {
    if (categoryName.length > 50 || categoryName.length < 1) {
      setErrorMsg("カテゴリー名は1文字以上50文字以下で登録してください。");
      return false;
    }
    return true;
  };

  const createCategory = () => {
    // validation
    if (!validateCategoryName(categoryName)) {
      return;
    }
    // dbにデータを飛ばす
    const socket = socketIO.getSocket();
    if (socket === undefined) {
      props.setVisible(false);
      return;
    }
    socket.emit("create-new-task-group", {
      // TODO: add user auth
      projectId: param.projectId,
      groupName: categoryName,
    });
    props.setVisible(false);
  };

  useEffect(() => {
    initModal();
  }, [props.isVisible]);

  return (
    <StyledModal show={props.isVisible} onHide={handleClose}>
      <StyledModal.Header closeButton>
        <StyledModal.Title>カテゴリー追加</StyledModal.Title>
      </StyledModal.Header>
      <StyledModal.Body>
        <InputForm
          formLabel={"カテゴリー名"}
          placeHolder={"例: InProgress"}
          formType={"text"}
          value={categoryName}
          onChange={onChangeCategoryName}
        />
        <StyledErrorMsg>{errorMsg}</StyledErrorMsg>
      </StyledModal.Body>
      <StyledModal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant="primary" onClick={createCategory}>
          追加
        </Button>
      </StyledModal.Footer>
    </StyledModal>
  );
}
