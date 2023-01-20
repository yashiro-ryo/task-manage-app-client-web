import React from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  deleteCb: () => void;
  cancelCb: () => void;
};

export default function TaskDeleteModal(props: Props) {
  const handleClose = () => {
    props.setVisible(false);
  };

  const onClickDelete = (e: React.MouseEvent) => {
    props.deleteCb();
    props.setVisible(false);
  };

  const onClickCancel = (e: React.MouseEvent) => {
    props.cancelCb();
    props.setVisible(false);
  };

  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Body>
        <p>タスクを削除しても良いですか?</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="light" onClick={onClickDelete}>
          削除する
        </Button>
        <Button variant="primary" onClick={onClickCancel}>
          削除しない
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
