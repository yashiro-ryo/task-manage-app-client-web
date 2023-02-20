import React from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  errorText: string;
  cb?: () => void;
};

export default function ErrorModal(props: Props) {
  const handleClose = () => {
    props.setVisible(false);
  };
  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Body>
        {props.errorText.split("\n").map((s: string, index: number) => {
          return <p key={index}>{s}</p>;
        })}
      </Modal.Body>
      <Modal.Footer>
        <Button
          onClick={() => {
            handleClose();
            if (props.cb === undefined) {
              return;
            }
            props.cb();
          }}
        >
          閉じる
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
