import React from "react";
import { Modal, Button } from "react-bootstrap";

type Props = {
  isVisible: boolean;
  setVisible: (isVisible: boolean) => void;
  deleteCb: () => void;
  cancelCb?: () => void;
  modalBodyText: string;
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
    if (props.cancelCb === undefined) {
      return;
    }
    props.cancelCb();
    props.setVisible(false);
  };

  return (
    <Modal show={props.isVisible} onHide={handleClose}>
      <Modal.Body>
        <p>{props.modalBodyText}</p>
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
