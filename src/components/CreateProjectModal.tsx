import axios from "axios";
import React, { useContext, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { UserContext } from "../App";
import url from "../etc/url";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
};

export default function CreateProjectModal(props: Props) {
  const [inputText, setInputText] = useState("");
  const [errorText, setErrorText] = useState("");
  const handleClose = () => {
    props.setVisible(false);
    clearText();
  };

  const clearText = () => {
    setInputText("");
    setErrorText("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const user = useContext(UserContext).user;

  const doCreateProject = () => {
    user?.getIdToken(true).then((token) => {
      axios
        .post(
          url.getServerApi(process.env.NODE_ENV) + "/api/v1/project",
          {
            projectName: inputText,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        )
        .then((data: any) => {
          if (data.data.hasError) {
            setErrorText(data.data.errorMsg);
          } else {
            handleClose();
            // 更新
          }
        })
        .catch((e) => {
          console.error(e);
          handleClose();
        });
    });
  };

  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>プロジェクト名</Form.Label>
            <Form.Control
              type="text"
              placeholder="プロジェクト名"
              onChange={onChange}
            />
            <p>{errorText}</p>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          キャンセル
        </Button>
        <Button variant="primary" onClick={doCreateProject}>
          プロジェクト作成
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
